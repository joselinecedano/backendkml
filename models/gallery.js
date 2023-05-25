const mongoose = require("mongoose");

const GallerySchema = new mongoose.Schema({
    name: String,
    image: {type: String, required: true},
    description: String
})

const Gallery = mongoose.model('Gallery', GallerySchema)

module.exports = Gallery