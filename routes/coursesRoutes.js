const router = require('express').Router()
const {coursesCtrl} = require('../api')

// * ROUTES  -  METHODS *
router.get('/', coursesCtrl.getCourses)
router.get('/:id', coursesCtrl.showCourse)
router.post('/', coursesCtrl.createCourse)
router.put('/:id', coursesCtrl.updateCourse)
router.delete('/:id', coursesCtrl.deleteCourse)

module.exports = router