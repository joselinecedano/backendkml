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

module.exports = {
    getServices,
    createServices
}