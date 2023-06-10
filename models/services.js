const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: String,
    description: String,
    price: {type: Number, required: true},
    miniPrice: {type: Number, required: true},
    fillPrice: {type: Number, required: true},
    
})

const Services = mongoose.model('Services', ServicesSchema)

module.exports = Services