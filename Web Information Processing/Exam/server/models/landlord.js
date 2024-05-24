const mongoose = require('mongoose');

const landlordSchema = new mongoose.Schema({
    Title: String,
    First_Name: String,
    Surname: String,
    Mobile: Number,
    Email: String,
    homeAddress1: String,
    homeTown: String,
    homeCountyCity: String,
    homeEircode: String
});

const landlordModel = mongoose.model("landlord", landlordSchema);
module.exports = landlordModel;