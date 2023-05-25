const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: String,
    description: {type: String, required: true},
    price: {type: Number, required: true},
})

const Courses = mongoose.model('Courses', CoursesSchema)

module.exports = Courses