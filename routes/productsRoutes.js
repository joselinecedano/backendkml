const router = require('express').Router()
const {productsCtrl} = require('../api')

// * ROUTES  -  METHODS *
router.get('/', productsCtrl.getProducts)
router.get('/:id', productsCtrl.showProduct)
router.post('/', productsCtrl.createProduct)
router.put('/:id', productsCtrl.updateProduct)
router.delete('/:id', productsCtrl.deleteProduct)

module.exports = router