const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const landlordrModel = require('./models/landlord');


const app = express();


app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
const landlordModel = require('./models/landlord');

mongoose.connect('mongodb+srv://odyess3:1994@cluster.0wqgyal.mongodb.net/?retryWrites=true&w=majority&appName=Cluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the database!');
}).catch((err) => {
    console.error('Database connection error:', err);
});

app.post("/createLL", (req, res) => {
    landlordModel.create(req.body)
    .then(landlord => res.json(landlord))
    .catch(err => res.json(err));
})


app.get('/getlandlord', async (req, res) => {
    landlordrModel.find()
    .then(landlord => res.json(landlord))
    .catch(err => res.json(err));
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});