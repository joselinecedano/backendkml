// db connection
const db = require('../models')

// * Courses Index *
 const getCourses = (req, res) => {
    db.Courses.find({})
    .then((foundCourses) => {
     if(!foundCourses){
         req.status(404).json({message: 'Cannot find Courses'})
     } else {
         res.status(200).json({data: foundCourses})
     }
    })
 }
     // * Course Show *
 const showCourse = (req, res) => {
    db.Courses.findById(req.params.id)
    .then((foundCourse) => {
     if(!foundCourse){
         req.status(404).json({message: 'Cannot find Course'})
     } else {
         res.status(200).json({data: foundCourse})
     }
    })
 }
     // * Course Create *
 const createCourse = (req, res) => {
     db.Courses.create(req.body)
     .then((createdCourse) => {
         if(!createdCourse){
             res.status(404).json({message: 'Cannot create Course'})
         } else {
             res.status(200).json({data: createdCourse, message: 'Course Created'})
         }
     })
 }
     // * Course Update *
 const updateCourse = (req,res) => {
     db.Courses.findByIdAndUpdate(req.params.id , req.body, {new : true})
     .then((updatedCourse) => {
         if(!updatedCourse){
             res.status(400).json({message : 'Could NOT update Course'})
         } else {
             res.status(200).json({data : updatedCourse, message: 'Course Updated'})
         }
     }) 
 }
     // * Course Destroy *
 const deleteCourse = (req, res) => {
     db.Courses.findByIdAndDelete(req.params.id)
     .then((deletedCourse) => {
         if (!deletedCourse){
             res.status(400).json({message: 'Could NOT delete Course'})
         } else {
             res.status(200).json({data : deletedCourse, message : 'Course Deleted'})
         }
     })
 }
 
 module.exports = {
     getCourses,
     showCourse,
     createCourse,
     updateCourse,
     deleteCourse
 }