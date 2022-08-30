const router = require('express').Router()
const controller = require('./users.controller');

router.get('/', controller.getAll)
router.get('/:variable', controller.getOneById)
router.post('/', controller.create)
router.delete('/:id', controller.removeOneById)
router.put('/:id', controller.updateOneById)

module.exports = router;