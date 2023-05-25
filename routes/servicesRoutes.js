const router = require('express').Router()
const {servicesCtrl} = require('../controllers')

// * ROUTES  -  METHODS *
router.get('/', servicesCtrl.getServices)
router.post('/', servicesCtrl.createServices)

module.exports = router
// * by exporting 'router', im exporting the routes to be used in /routes/index.js along with our controller methods *