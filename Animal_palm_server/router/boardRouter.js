const {context,writecontext,contextDelete} = require('../controllers/boardController')
const exress = require('express');
const router = exress.Router();
//게시판
router.get('/:id/:context',context)
router.post('/:id',writecontext)
router.delete('/:id',contextDelete)


module.exports = router