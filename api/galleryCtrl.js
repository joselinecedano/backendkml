// db connection
const db = require('../models')

// * Gallery Posts Index *
 const getPost = (req, res) => {
    db.Gallery.find({})
    .then((foundPosts) => {
     if(!foundPosts){
         req.status(404).json({message: 'Cannot find Gallery Posts'})
     } else {
         res.status(200).json({data: foundPosts})
     }
    })
 }
     // * Gallery Post Show *
 const showPost = (req, res) => {
    db.Gallery.findById(req.params.id)
    .then((foundPost) => {
     if(!foundPost){
         req.status(404).json({message: 'Cannot find Gallery Post'})
     } else {
         res.status(200).json({data: foundPost})
     }
    })
 }
     // * Gallery Post Create *
 const createPost = (req, res) => {
     db.Gallery.create(req.body)
     .then((createdPost) => {
         if(!createdPost){
             res.status(404).json({message: 'Cannot create Gallery Post'})
         } else {
             res.status(200).json({data: createdPost, message: 'Gallery Post Created'})
         }
     })
 }
     // * Gallery Post Update *
 const updatePost = (req,res) => {
     db.Gallery.findByIdAndUpdate(req.params.id , req.body, {new : true})
     .then((updatedPost) => {
         if(!updatedPost){
             res.status(400).json({message : 'Could NOT update Gallery Post'})
         } else {
             res.status(200).json({data : updatedPost, message: 'Gallery Post Updated'})
         }
     }) 
 }
     // * Gallery Post Destroy *
 const deletePost = (req, res) => {
     db.Gallery.findByIdAndDelete(req.params.id)
     .then((deletedPost) => {
         if (!deletedPost){
             res.status(400).json({message: 'Could NOT delete Gallery Post'})
         } else {
             res.status(200).json({data : deletedPost, message : 'Gallery Post Deleted'})
         }
     })
 }
 
 module.exports = {
     getPost,
     showPost,
     createPost,
     updatePost,
     deletePost
 }