// db connection
const db = require('../models')

// * Products Index *
 const getProducts = (req, res) => {
    db.Products.find({})
    .then((foundProducts) => {
     if(!foundProducts){
         req.status(404).json({message: 'Cannot find Products'})
     } else {
         res.status(200).json({data: foundProducts})
     }
    })
 }
     // * Product Show *
 const showProduct = (req, res) => {
    db.Products.findById(req.params.id)
    .then((foundProduct) => {
     if(!foundProduct){
         req.status(404).json({message: 'Cannot find Product'})
     } else {
         res.status(200).json({data: foundProduct})
     }
    })
 }
     // * Product Create *
 const createProduct = (req, res) => {
     db.Products.create(req.body)
     .then((createdProduct) => {
         if(!createdProduct){
             res.status(404).json({message: 'Cannot create Product'})
         } else {
             res.status(200).json({data: createdProduct, message: 'Product Created'})
         }
     })
 }
     // * Product Update *
 const updateProduct = (req,res) => {
     db.Products.findByIdAndUpdate(req.params.id , req.body, {new : true})
     .then((updatedProduct) => {
         if(!updatedProduct){
             res.status(400).json({message : 'Could NOT update Product'})
         } else {
             res.status(200).json({data : updatedProduct, message: 'Product Updated'})
         }
     }) 
 }
     // * Product Destroy *
 const deleteProduct = (req, res) => {
     db.Products.findByIdAndDelete(req.params.id)
     .then((deletedProduct) => {
         if (!deletedProduct){
             res.status(400).json({message: 'Could NOT delete Product'})
         } else {
             res.status(200).json({data : deletedProduct, message : 'Product Deleted'})
         }
     })
 }
 
 module.exports = {
     getProducts,
     showProduct,
     createProduct,
     updateProduct,
     deleteProduct
 }