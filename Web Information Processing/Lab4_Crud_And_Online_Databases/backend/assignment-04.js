import  Express  from "express"
import mysql from "mysql2"
import cors from "cors"

const app = Express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1994",
    database:"USERS"
})

app.use(Express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello this is backend")
})

app.get("/basic", (req,res)=>{
    const q = "SELECT * FROM basic"
    db.query(q,(err,data)=>
    {
        if(err)return res.json(err)
        return res.json(data)
    });
});

app.get("/update/:Bas_id", (req,res)=>{
    const q = "SELECT * FROM basic WHERE ID = ?"
    const Bas_id = req.params.Bas_id

    db.query(q, [Bas_id],(err,data)=>
    {
        if(err)return res.json(err)
        return res.json(data)
    });
});

app.post("/basic", (req,res)=>{
    const q = "INSERT INTO basic (`Title`, First_Name, `Surname`, `Mobile`, `Email`) VALUES (?)"
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
        if(err)return res.json(err)
        return res.json("Info has be created")
    });
});


app.delete("/basic/:Bas_id", (req,res)=>{
    const basicId = req.params.Bas_id;
    const q = "DELETE FROM basic WHERE Bas_id = ?";

    db.query(q,[basicId], (err,data) =>
    {
        if(err) return res.json(err);
        return res.json("Info has be Deleted")
    });
});


app.put("/basic/:Bas_id", (req,res)=>{
    const basicId = req.params.Bas_id;
    const q = "UPDATE basic SET `Title` = ?, `First_Name` = ?, `Surname` = ?, `Mobile` = ?, `Email` = ? WHERE Bas_id = ?";


    const values =[
        req.body.Title,
        req.body.First_Name,
        req.body.Surname,
        req.body.Mobile,
        req.body.Email,
    ];



    db.query(q, [...values, basicId], (err,data) =>
    {
        if(err) return res.json(err);
        return res.json("Info has be Updated")
    });
});


app.listen(8800, ()=>{
    console.log("Connected backend")
})