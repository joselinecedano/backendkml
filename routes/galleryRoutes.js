const router = require('express').Router()
const {galleryCtrl} = require('../controllers')

// * ROUTES  -  METHODS *
router.get('/', galleryCtrl.getPost)
router.get('/:id', galleryCtrl.showPost)
router.post('/', galleryCtrl.createPost)
router.put('/:id', galleryCtrl.updatePost)
router.delete('/:id', galleryCtrl.deletePost)

module.exports = router
