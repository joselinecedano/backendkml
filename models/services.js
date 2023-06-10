const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: String,
    description: String,
    price: {type: Number, required: true},
    miniPrice: Number,
    fillPrice: Number
    
})

const Services = mongoose.model('Services', ServicesSchema)

module.exports = Services