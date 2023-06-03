const router = require('express').Router()
const servicesRoutes = require('./servicesRoutes.js')
const productsRoutes = require('./productsRoutes.js')
const coursesRoutes = require('./coursesRoutes.js')
const galleryRoutes = require('./galleryRoutes.js')

router.use('/services', servicesRoutes) // * any url beginning in /services will be directed to ./servicesRoutes and then use the request's HTTP method sent *
router.use('/products', productsRoutes)
router.use('/training', coursesRoutes)
router.use('/gallery', galleryRoutes)

module.exports = router