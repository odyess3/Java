

import  express  from "express";
import mysql from "mysql2";
import cors from "cors";
import readline from "readline"




const db =mysql.createConnection({
    host:"webcourse.cs.nuim.ie",
    user:"u230045",
    password:"aeTh2ohliw3pie0j",
    database:"cs230_u230045"
})






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

// 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// User input
const getUserInput = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Ask what they want to do
const askOperation = async () => {
    const operation = await getUserInput("(C)reate ,(R)search ,(U)pdate ,(D)elete ");
    switch(operation.toUpperCase()) {
        case 'C':
            console.log(" (*) Means inputs are required");
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
            console.log(" Please enter C, R, U or D.");
            await askOperation();
    }
}

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


//Call the function to start the process
insertUser();




const retrieveUser = async () => {
    const Full_Name = await getUserInput("Full Name to Search ENter(FirstName Surname): ");
    const Names = Full_Name.split(' ');
    let UserQuery;
    let UserQueryID
    let values;

    if (Names.length === 1) 
    {
        UserQuery = "SELECT * FROM USERdata WHERE First_Name = ?";
        UserQueryID = "SELECT Data_Id FROM USERdata WHERE First_Name = ?";

        values = [Names[0]];
    } 
    else if (Names.length === 2) 
    {
        UserQuery = "SELECT * FROM USERdata WHERE First_Name = ? AND Surname = ?";
        UserQueryID = "SELECT Data_Id FROM USERdata WHERE First_Name = ? AND Surname = ?";

        values = [Names[0], Names[1]];
    } 
    else 
    {
        console.log("Invalid input. Enter First name or both name and surname.");
        await retrieveUser();
        return;
    }

    const userData = await executeQuery(UserQuery, values);

    const Address_Id = UserQueryID[0].Data_Id;

    const addressQuery = "SELECT * FROM USERaddress WHERE Address_Id = ?";
    const addressValues = [Address_Id];

    await executeQuery(addressQuery, addressValues);


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
//Use mobile number since it is a primary key
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


// {
//     const Email = await getUserInput("Enter Email of User to Select: ");
//     const Mobile = await getUserInput("Enter Mobile of User to Select: ");
//     const First_Name = await getUserInput("Enter First Name of User to Select: ");

//     // Construct the select query
//     const selectUserQuery = "SELECT * FROM USERdata WHERE Email = ? AND Mobile = ? AND First_Name = ?";

//     try {
//         // Execute the SELECT query to retrieve user data
//         const userData = await executeQuery(selectUserQuery, [Email, Mobile, First_Name]);

//         // If user data is found, return it
//         if (userData.length > 0) {
//             console.log("User data retrieved successfully:", userData);
//         } else {
//             console.log("No user found with the provided information. Please try again.");
//         }
//     } catch (error) {
//         console.error("Error executing query:", error);
//     }


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






