
const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

const schemalandlord = new mongoose.Schema({
    title: String,
    name: String,
    surname: String,
    phone: String,
    email: String,
    address1: String,
    address2: String,
    town: String,
    city: String,
    eircode: String,
    dateOfBirth: Date,
    question1: String,
    question2: String,
    
});

const schematenant = new mongoose.Schema({
    title: String,
    name: String,
    surname: String,
    phone: String,
    email: String,
    address1: String,
    address2: String,
    town: String,
    city: String,
    eircode: String,
});

const schemacontract = new mongoose.Schema({
    contractDate: Date,
    address: String,
    tenant: String,
    landlordemail: String,
    Fee: Number,
    Doornumber: String,
    Contract: String,
    House: String,
});

const landlordmodel = mongoose.model('landlords', schemalandlord);
const tenantmodel = mongoose.model('tenants', schematenant);
const contractmodel = mongoose.model('contracts', schemacontract);


// Landlord routes
app.get('/landlords', async (req, res) => {
    try {
        const data = await landlordmodel.find({});
        res.json({success: true, data: data});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

app.post('/landlords/create', async (req, res) => {
    try {
        const data = new landlordmodel(req.body);
        await data.save();
        res.send({success: true, message: 'Data saved', data: data});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});


app.put('/landlords/update', async (req, res) => {
    try {
        const{_id ,... rest} = req.body;
        await landlordmodel.updateOne({_id: _id},rest);
        res.send({success: true, message: 'Data updated'});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

app.delete('/landlords/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await landlordmodel.deleteOne({_id: id});
        res.send({success: true, message: 'Data deleted', data: data});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

// Tenant routes
app.get('/tenants', async (req, res) => {
    try {
        const data = await tenantmodel.find({});
        res.json({success: true, data: data});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

app.post('/tenants/create', async (req, res) => {
    try {
        const data = new tenantmodel(req.body);
        await data.save();
        res.send({success: true, message: 'Data saved', data: data});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

app.put('/tenants/update', async (req, res) => {
    try {
        const{_id ,... rest} = req.body;
        await tenantmodel.updateOne({_id: _id},rest);
        res.send({success: true, message: 'Data updated'});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

app.delete('/tenants/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await tenantmodel.deleteOne({_id: id});
        res.send({success: true, message: 'Data deleted', data: data});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

//  routes contract
app.get('/contracts', async (req, res) => {
    try {
        const data = await contractmodel.find({});
        res.json({success: true, data: data});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

app.post('/contracts/create', async (req, res) => {
    try {
        const data = new contractmodel(req.body);
        await data.save();
        res.send({success: true, message: 'Data saved', data: data});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});


app.put('/contracts/update', async (req, res) => {
    try {
        const{_id ,... rest} = req.body;
        await contractmodel.updateOne({_id: _id},rest);
        res.send({success: true, message: 'Data updated'});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

app.delete('/contracts/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await contractmodel.deleteOne({_id: id});
        res.send({success: true, message: 'Data deleted', data: data});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
});

mongoose.connect('mongodb+srv://odyess3:1994@crud.uoifv0w.mongodb.net/test')
.then(() =>{
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server running`));


    app.get('/tenants', async (req, res) => {
        collection = db.collection("Tenants");
        const documents = await collection.find({}).toArray();
        res.setHeader('Content-Type', 'application/json');
        res.json(documents);
    });
    
    app.get('/contracts', async (req, res) => {
        collection = db.collection("Contracts");
        const documents = await collection.find({}).toArray();
        res.setHeader('Content-Type', 'application/json');
        res.json(documents);
    
    });
    
    app.get('/landlords', async (req, res) => {
        collection = db.collection("Landlords");
        const documents = await collection.find({}).toArray();
        res.setHeader('Content-Type', 'application/json');
        res.json(documents);
    });
})
.catch(err => console.log(err)); 