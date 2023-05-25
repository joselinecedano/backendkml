const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: String,
    description: {type: String, required: true},
    price: {type: Number, required: true},
})

const Products = mongoose.model('Products', ProductsSchema)

module.exports = Products