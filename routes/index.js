const router = require('express').Router()
const servicesRoutes = require('./servicesRoutes.js')
const productsRoutes = require('./productsRoutes.js')
const coursesRoutes = require('./coursesRoutes.js')
const galleryRoutes = require('./galleryRoutes.js')

router.use('/api/services', servicesRoutes) // * any url beginning in /services will be directed to ./servicesRoutes and then use the request's HTTP method sent *
router.use('/api/products', productsRoutes)
router.use('/api/training', coursesRoutes)
router.use('/api/gallery', galleryRoutes)

module.exports = router