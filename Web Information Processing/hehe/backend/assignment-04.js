import express  from "express";
import mysql from "mysql2";
import cors from "cors";
import readline from "readline"


const db =mysql.createConnection({
    host:"webcourse.cs.nuim.ie",
    user:"u230045",
    password:"aeTh2ohliw3pie0j",
    database:"cs230_u230045"
})

const app = express();




app.use(express.json());
app.use(cors());

// Connect to the database
db.connect((err) => 
{
    if (err) throw err;
    console.log("\nConnect database");
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





// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



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
    const operation = await getUserInput("C for Create, R for Retrieve, U for Update, D for Delete: ");
    switch(operation.toUpperCase()) {
        case 'C':
            await insertUser();
            break;
        case 'R':
            await retrieveUser();
            break;
        case 'U':
            await updateUser();
            break;
        case 'D':
            await deleteUser();
            break;
        default:
            console.log("Enter C, R, U or D again Invalid.");
            await askOperation();  // Ask again
    }
}



// Call the function to start the process
askOperation();


//New user:
const insertUser = async () => {
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

    // Check if required fields are not empty
    if (!First_Name || !Surname || !Mobile || !Email || !Home_Address_Line_1 || !Home_Town || !Home_County_City || !Ship_Address_Line_1 || !Ship_Town || !Ship_County_City) 
    {
        console.log("Info missing");
        await insertUser();
        return;
    }

    const insertUserInfo = "INSERT INTO USERdata (`Title`,`First_Name`,`Surname`,`Mobile`,`Email`) VALUES (?)";
    const insertUserAddress = "INSERT INTO USERaddress (`Home_Address_Line_1`,`Home_Address_Line_2`,`Home_Town`,`Home_County_City`,`Home_Eircode`,`Ship_Address_Line_1`,`Ship_Address_Line_2`,`Ship_Town`,`Ship_County_City`,`Ship_Eircode`) VALUES (?)";

    const newUserInfo = [Title, First_Name, Surname, Mobile, Email];
    const newUserAddress = [Home_Address_Line_1, Home_Address_Line_2, Home_Town, Home_County_City, Home_Eircode, Ship_Address_Line_1, Ship_Address_Line_2, Ship_Town, Ship_County_City, Ship_Eircode];

    await executeQuery(insertUserInfo, [newUserInfo]);
    await executeQuery(insertUserAddress, [newUserAddress]);
    await askOperation();
    
}
















//Function to retrieve/search for users
const retrieveUser = async () => {
    const Name = await getUserInput("Enter Name to Search: ");
    const retrieveUserQuery = "SELECT * FROM USERdata WHERE First_Name = ?";
    await executeQuery(retrieveUserQuery, [Name]);
    console.log("User retrieval successful!");
    await askContinue();
}





//Call the function to start the process
retrieveUser();




//Function to update a user
const updateUser = async () => {
    var info  = await getUserInput("Enter UserID of User to Update: ");
    const Data_Id = info;
    const Address_Id = info;
    
    // Function to handle empty input
    const handleEmptyInput = (newValue, oldValue) => {
        return newValue.trim() === '' ? oldValue : newValue;
    };

    //Get new details
    const Title = await getUserInput("Enter Title*: ");
    const Mobile = await getUserInput("Enter Mobile*: ");
    const Email = await getUserInput("Enter Email*: ");
    const Home_Address_Line_1 = await getUserInput("Enter Home_Address_Line_1: ");
    const Home_Address_Line_2 = await getUserInput("Enter Home_Address_Line_2: ");
    const Home_Town = await getUserInput("Enter Home_Town: ");
    const Home_County_City = await getUserInput("Enter Home_County_City: ");
    const Home_Eircode = await getUserInput("Enter Home_Eircode: ");
    const Ship_Address_Line_1 = await getUserInput("Enter Ship_Address_Line_1: ");
    const Ship_Address_Line_2 = await getUserInput("Enter Ship_Address_Line_2: ");
    const Ship_Town = await getUserInput("Enter Ship_Town: ");
    const Ship_County_City = await getUserInput("Enter Ship_County_City: ");
    const Ship_Eircode = await getUserInput("Enter Ship_Eircode: ");

    // Retain previous data if new input is empty
    const newTitle = handleEmptyInput(Title, '');
    const newMobile = handleEmptyInput(Mobile, '');
    const newEmail = handleEmptyInput(Email, '');
    const newHome_Address_Line_1 = handleEmptyInput(Home_Address_Line_1, '');
    const newHome_Address_Line_2 = handleEmptyInput(Home_Address_Line_2, '');
    const newHome_Town = handleEmptyInput(Home_Town, '');
    const newHome_County_City = handleEmptyInput(Home_County_City, '');
    const newHome_Eircode = handleEmptyInput(Home_Eircode, '');
    const newShip_Address_Line_1 = handleEmptyInput(Ship_Address_Line_1, '');
    const newShip_Address_Line_2 = handleEmptyInput(Ship_Address_Line_2, '');
    const newShip_Town = handleEmptyInput(Ship_Town, '');
    const newShip_County_City = handleEmptyInput(Ship_County_City, '');
    const newShip_Eircode = handleEmptyInput(Ship_Eircode, '');

    const insertUserInfo = "UPDATE USERdata SET Title = ?, Mobile = ?, Email = ? WHERE DATA_Id = ?";
    const insertUserAddress = "UPDATE USERaddress SET Home_Address_Line_1 = ?, Home_Address_Line_2 = ?, Home_Town = ?, Home_County_City = ?, Home_Eircode = ?, Ship_Address_Line_1 = ?, Ship_Address_Line_2 = ?, Ship_Town = ?, Ship_County_City = ?, Ship_Eircode = ?  WHERE Address_Id = ?";

    await executeQuery(insertUserInfo, [newTitle, newMobile, newEmail, Data_Id]);
    await executeQuery(insertUserAddress, [newHome_Address_Line_1, newHome_Address_Line_2, newHome_Town, newHome_County_City, newHome_Eircode, newShip_Address_Line_1, newShip_Address_Line_2, newShip_Town, newShip_County_City, newShip_Eircode, Address_Id]);

    await askContinue();
}






















//Function to delete a user
const deleteUser = async () => {
    const Email = await getUserInput("Enter Email of User to Delete: ");
    const Mobile = await getUserInput("Enter Mobile of User to Delete: ");
    const First_Name = await getUserInput("Enter First Name of User to Delete: ");

    // Construct the select query
    const selectUserQuery = "SELECT * FROM USERdata WHERE Email = ? AND Mobile = ? AND First_Name = ?";
    const deleteUserQuery = `DELETE FROM USERdata WHERE Email = ? AND Mobile = ? AND First_Name = ?`;


    {
        // Execute the SELECT query to retrieve user data
        const userData = await executeQuery(selectUserQuery, [Email, Mobile, First_Name]);
        
        // If user data is found, return it
        if (userData != "") 
        {
            console.log("^^^ was deleted (Shows what was deleted, if nothing shows, nothing was deleted ");
            await executeQuery(deleteUserQuery, [Email, Mobile, First_Name]);
            
        } 
        else 
        {
            console.log("No user found with the provided information. Please try again.");
        }
    } 
    await askContinue();
}






// Function to ask the user if they want to continue
const askContinue = async () => {
    const answer = await getUserInput("Do you want to perform another operation? (Y for Yes, N for No): ");
    if (answer.toUpperCase() === 'Y') {
        await askOperation();
    } else if (answer.toUpperCase() === 'N') {
        rl.close();
    } else {
        console.log("Invalid input. Please enter Y or N.");
        await askContinue();  // Ask again
    }
}





//FRONT END

//Create
app.post("/USERdata", (req,res)=>{
    const q = "INSERT INTO USERdata (`Title`, First_Name, `Surname`, `Mobile`, `Email`) VALUES (?)"
    const values =
    [

        req.body.Title,
        req.body.First_Name,
        req.body.Surname,
        req.body.Mobile,
        req.body.Email
    ];
    db.query(q,[values], (err,data)=>
    {
        if(err)return res.json(err);
        return res.json("Info has be created")
    
    
    });
});

app.post("/USERaddress", (req,res)=>{

    const q = "INSERT INTO USERaddress (`Home_Address_Line_1`,`Home_Address_Line_2`,`Home_Town`,`Home_County_City`,`Home_Eircode`,`Ship_Address_Line_1`,`Ship_Address_Line_2`,`Ship_Town`,`Ship_County_City`,`Ship_Eircode`) VALUES (?)";

    const values =
    [
        req.body.Home_Address_Line_1,
        req.body.Home_Address_Line_2,
        req.body.Home_Town,
        req.body.Home_County_City,
        req.body.Home_Eircode,
        req.body.Ship_Address_Line_1,
        req.body.Ship_Address_Line_2,
        req.body.Ship_Town,
        req.body.Ship_County_City,
        req.body.Ship_Eircode
    ];
    db.query(q,[values], (err,data)=>
    {
        if(err)return res.json(err);
        return res.json("Info has be created")
    });
});






//Retrieve
app.get("/USERdata", (req,res)=>{
    //const q = "SELECT * FROM USERdata"
    const q = `SELECT * FROM USERdata`

    db.query(q,(err,data)=>
    {
        if(err)return res.json(err)
        return res.json(data)
    });
});

app.get("/USERaddress", (req,res)=>{
    //const q = "SELECT * FROM USERdata"
    const q = `SELECT * FROM USERaddress`

    db.query(q,(err,data)=>
    {
        if(err)return res.json(err)
        return res.json(data)
    });
});








app.listen(8800, () => {
    console.log("Connected backend!")
})



























































