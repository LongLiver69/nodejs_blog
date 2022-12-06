
var express = require('express')
var router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form-actions', courseController.handleFormAction);
router.get('/:id/edit', courseController.edit);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/destroy', courseController.destroy);
router.delete('/:id', courseController.delete);
router.put('/:id', courseController.update);
router.get('/:slug', courseController.show);

module.exports = router