import cors from "cors";
import readline from "readline"
import mongoose  from"mongoose";
import express  from "express";
import { MongoClient } from "mongodb";
import { ObjectId } from'mongodb';

const app = express();

const Url=
"mongodb+srv://odyess3:1994@crud.uoifv0w.mongodb.net/?retryWrites=true&w=majority&appName=CRUD";

const client = new MongoClient(Url);

app.use(express.json());
app.use(cors());

// Connect to the mongo
async function connect() {
    try{
        await mongoose.connect(Url)
        console.log("Connected to MongoDB");
        // to start
        askOperation();
    } catch (error) {
        console.error(error);
    }
}

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to execute a query
const executeQuery = (query, values) => {
    return new Promise((resolve, reject) => {
        db.query(query, values, (err, result) => {
            if (err) reject(err);
            console.log(result);
            resolve();
        });
    });
}



// Function to get user input
const getUserInput = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}


// Function to ask the user which operation they want to perform
const askOperation = async () => {
    const operation = await getUserInput("C for Create, R for Retrieve, U for Update, D for Delete:");
    switch(operation.toUpperCase()) {
        case 'C':
            await insertCustomer(client);
            break;
        case 'R':
            await findCustomer(client);
            break;
        case 'U':
            await updateCustomer(client);
            break;
        case 'D':
            await deleteCustomer(client);
            break;
        default:
            console.log("Enter C, R, U or D again Invalid.");
            await askOperation();  // Ask again
    }
}


//New user:
async function insertCustomer(client)
{
    const Title = await getUserInput("Enter Title: ");
    const First_Name = await getUserInput("Enter First_Name*: ");
    const Surname = await getUserInput("Enter Surname*: ");
    const Mobile = await getUserInput("Enter Mobile*: ");
    const Email = await getUserInput("Enter Email*: ");
    const Home_Address_Line_1 = await getUserInput("Enter Home_Address_Line_1*: ");
    const Home_Address_Line_2 = await getUserInput("Enter Home_Address_Line_2: ");
    const Home_Town = await getUserInput("Enter Home_Town*: ");
    const Home_County_City = await getUserInput("Enter Home_County_City*: ");
    const Home_Eircode = await getUserInput("Enter Home_Eircode: ");
    const Ship_Address_Line_1 = await getUserInput("Enter Ship_Address_Line_1*: ");
    const Ship_Address_Line_2 = await getUserInput("Enter Ship_Address_Line_2: ");
    const Ship_Town = await getUserInput("Enter Ship_Town*: ");
    const Ship_County_City = await getUserInput("Enter Ship_County_City*: ");
    const Ship_Eircode = await getUserInput("Enter Ship_Eircode: ");

    //Check if required fields are not empty
    if (!First_Name || !Surname || !Mobile || !Email || !Home_Address_Line_1 || !Home_Town || !Home_County_City || !Ship_Address_Line_1 || !Ship_Town || !Ship_County_City) 
    {
        console.log("Info missing");
        await insertCustomer(client);
        return;
    }


    //Document created
    const newListing = 
    {
        "Title": Title,
        "First_Name": First_Name,
        "Surname": Surname,
        "Moblie": {"$numberInt":Mobile},
        "Email": Email,
        "location": 
        {
            "homeAddress": 
            {
                "homeAddress1": Home_Address_Line_1,
                "homeAddress2": Home_Address_Line_2,
                "homeTown": Home_Town,
                "homeCountyCity": Home_County_City,
                "homeEircode": Home_Eircode
            },
            "shipAddress": 
            {
                "shipAddress1": Ship_Address_Line_1,
                "shipAddress2": Ship_Address_Line_2,
                "shipTown": Ship_Town,
                "shipCountyCity": Ship_County_City,
                "shipEircode": Ship_Eircode
            }
        }
    };
    const result = await client.db("shop").collection("person_info").insertOne(newListing);

    console.log(`new listing created with the id: ${result.insertedId}`);

    await Phones(client);  // Shows phones
    await Purchases(client, result);  // Ask for purchasing
}


async function Phones(client) 
{
    const Phones = await client.db("shop").collection("phone_detail").find().toArray();
    console.log();
    console.log("phones available:");
    Phones.forEach(phone => console.log(phone));

}

//Ask about Purchases
async function Purchases(client, result) {
    const answer = await getUserInput("Do you want to purchase a phone? (Y for Yes, N for No): ");

    if (answer.toUpperCase() === 'Y') {
        //gets the document with details
        const Model = await getUserInput("(limit 10)Enter Model of phone you want to buy: ");
        
        const results = await client.db("shop").collection("phone_detail").findOne({Model: Model});

        //Check if required fields are not empty
        if (!results ) {
            console.log("Info missing with "+ Model);
            await Purchases(client, result);
            return;
        }

        const resultsWithRandomId = {...results, _id: new ObjectId(), userId: new ObjectId(`${result.insertedId}`)};

        const result2 = await client.db("shop").collection("purchases_details").insertOne(resultsWithRandomId);

        console.log(`user: `+new ObjectId(`${result.insertedId}`) +` Purchase a new phone with the Purchase id: ${result2.insertedId}`);
        await Purchases(client, result);
    } else if (answer.toUpperCase() === 'N') {
        await askOperation();
    } else {
        console.log("Invalid input. Please enter Y or N.");
        await Purchases(client, result);  // Ask again
    }
}




//FIND customer
async function findCustomer(client)
{
    const Email = await getUserInput("Enter Email of listing you want to find: ");


    const results = await client.db("shop").collection("person_info").findOne({Email:Email});

        

    if(!results)
    {
        console.log(`No listing found with `+Email);
        await askOperation();
    }

    console.log(`Found a Listing  matching `+ Email);
    console.log(results);

    await listPurchases(client,results);

}



// Ask to list Purchases
async function listPurchases(client,results)
{
    const answer = await getUserInput("Do you want to list purchasees? (Y for Yes, N for No): ");

    if (answer.toUpperCase() === 'Y') 
    {
        console.log(`Searching for userId: ${new ObjectId(results._id)}`);
        

        
        const allPurchases = await client.db("shop").collection("purchases_details").find({userId: (results.insertedId)}).toArray();
        console.log("All purchases for this userId:");
        allPurchases.forEach(purchase => console.log(purchase));
        

    await askOperation();

    }

    else if (answer.toUpperCase() === 'N') 
    {
        await askOperation();
    }
    
    else 
    {
        console.log("Invalid input. Please enter Y or N.");
        await listPurchases(client,results);  // Ask again
    }
}





//Updates Customer
async function updateCustomer(client)
{
    const Emails = await getUserInput("Enter Email of listing you want to update: ");

    const wre = await client.db("shop").collection("person_info").findOne({Email:Emails});

    if(!wre)
    {
        console.log(`No listing found with `+Emails);
        await askOperation();
    }

    const Title = await getUserInput("Enter Title: ");
    const First_Name = await getUserInput("Enter First_Name*: ");
    const Surname = await getUserInput("Enter Surname*: ");
    const Mobile = await getUserInput("Enter Mobile*: ");
    const Email = await getUserInput("Enter Email*: ");
    const Home_Address_Line_1 = await getUserInput("Enter Home_Address_Line_1*: ");
    const Home_Address_Line_2 = await getUserInput("Enter Home_Address_Line_2: ");
    const Home_Town = await getUserInput("Enter Home_Town*: ");
    const Home_County_City = await getUserInput("Enter Home_County_City*: ");
    const Home_Eircode = await getUserInput("Enter Home_Eircode: ");
    const Ship_Address_Line_1 = await getUserInput("Enter Ship_Address_Line_1*: ");
    const Ship_Address_Line_2 = await getUserInput("Enter Ship_Address_Line_2: ");
    const Ship_Town = await getUserInput("Enter Ship_Town*: ");
    const Ship_County_City = await getUserInput("Enter Ship_County_City*: ");
    const Ship_Eircode = await getUserInput("Enter Ship_Eircode: ");

    // Create an update object
    let update = {};

    // Only add fields to the update object if the corresponding input is not empty
    if (Title) update["Title"] = Title;
    if (First_Name) update["First_Name"] = First_Name;
    if (Surname) update["Surname"] = Surname;
    if (Mobile) update["Moblie"] = {"$numberInt":Mobile};
    if (Email) update["Email"] = Email;
    if (Home_Address_Line_1) update["location.homeAddress.homeAddress1"] = Home_Address_Line_1;
    if (Home_Address_Line_2) update["location.homeAddress.homeAddress2"] = Home_Address_Line_2;
    if (Home_Town) update["location.homeAddress.homeTown"] = Home_Town;
    if (Home_County_City) update["location.homeAddress.homeCountyCity"] = Home_County_City;
    if (Home_Eircode) update["location.homeAddress.homeEircode"] = Home_Eircode;
    if (Ship_Address_Line_1) update["location.shipAddress.shipAddress1"] = Ship_Address_Line_1;
    if (Ship_Address_Line_2) update["location.shipAddress.shipAddress2"] = Ship_Address_Line_2;
    if (Ship_Town) update["location.shipAddress.shipTown"] = Ship_Town;
    if (Ship_County_City) update["location.shipAddress.shipCountyCity"] = Ship_County_City;
    if (Ship_Eircode) update["location.shipAddress.shipEircode"] = Ship_Eircode;

    // Perform the update operation
    const resultss = await client.db("shop").collection("person_info").updateOne({Email:Emails}, {$set: update});

    console.log(resultss)

    const resulta = await client.db("shop").collection("person_info").findOne({Email:Email});
    console.log(resulta)

    await askOperation();
}



//Delete document
async function deleteCustomer(client)
{
    const Emails = await getUserInput("Enter Email of listing you want to delete: ");

    // Find the customer to get the id
    const customer = await client.db("shop").collection("person_info").findOne({Email: Emails});

    if(!customer)
    {
        console.log(`No customer found with `+Emails);
        await askOperation();
        return;
    }

    // Delete the customer
    const resultt = await client.db("shop").collection("person_info").deleteOne({Email: Emails});
    console.log(`Customer was deleted`);

    // Delete all purchases_details with the userId same as the id of the customer
    const deleteResult = await client.db("shop").collection("purchases_details").deleteMany({userId: new ObjectId(customer._id)});
    console.log(`Deleted ${deleteResult.deletedCount} purchase(s) for the customer`);

    await askOperation();
}

connect();

app.listen(8000, () => {
    console.info("Serevr on port 8000");
});

/*  In the database shop I have 3 collection called person_info, phone_detail and purchases_details, person_info is setup to contain the everyday person information,
the address is set up in a nested array one array having home address and the other being ship address. 
The purchases_details contains basic purchases info with the addition of the user id being the id of the customer in the person_info.
And phone_details have the 4 phones you can buy 
I did it this way as the notes forgot which side, says this is the most effective way of making a shop database 
The most difficulty was doing the userid connect to the other collection   */

/*It runs by creating a customer than asking if u want to buy a phone, you buy a phone by enetring the modal then if you want to read u put in the email and it shows all the purcahses, the delte
u put in the email and it deletes the person info and purahses and then update changes the personal info wtihout changing the id*/ 