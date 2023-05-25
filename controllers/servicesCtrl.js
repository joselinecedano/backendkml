// * database connection *
const db = require('../models')

    // * Services Index *
const getServices = (req, res) => {
   db.Services.find({})
   .then((foundServices) => {
    if(!foundServices){
        req.status(404).json({message: 'Cannot find Services'})
    } else {
        res.status(200).json({data: foundServices})
    }
   })
}
    // * Services Show *
const showService = (req, res) => {
   db.Services.findById(req.params.id)
   .then((foundService) => {
    if(!foundService){
        req.status(404).json({message: 'Cannot find Services'})
    } else {
        res.status(200).json({data: foundService})
    }
   })
}
    // * Services Create *
const createServices = (req, res) => {
    db.Services.create(req.body)
    .then((createdService) => {
        if(!createdService){
            res.status(404).json({message: 'Cannot create Service'})
        } else {
            res.status(200).json({data: createdService, message: 'Service Created'})
        }
    })
}
    // * Services Update *
const updateService = (req,res) => {
    db.Services.findByIdAndUpdate(req.params.id , req.body, {new : true})
    .then((updatedService) => {
        if(!updatedService){
            res.status(400).json({message : 'Could NOT update Service'})
        } else {
            res.status(200).json({data : updatedService, message: 'Service Updated'})
        }
    }) 
}
    // * Service Destroy *
const deleteService = (req, res) => {
    db.Services.findByIdAndDelete(req.params.id)
    .then((deletedService) => {
        if (!deletedService){
            res.status(400).json({message: 'Could NOT delete Service'})
        } else {
            res.status(200).json({data : deleteService, message : 'Service Deleted'})
        }
    })
}

module.exports = {
    getServices,
    showService,
    createServices,
    updateService,
    deleteService
}