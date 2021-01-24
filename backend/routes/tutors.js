const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/tutorInfoController')

router.get('/', Ctrl.findAllTutors)
router.post('/', Ctrl.addTutor)
router.get('/query/:queryString', Ctrl.queryTutors)
router.post('/:id', Ctrl.updateTutor)
router.delete('/:id', Ctrl.deleteTutor)

module.exports = router.routes()