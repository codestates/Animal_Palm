const {context,writecontext,contextDelete} = require('../controllers/boardController')
const exress = require('express');
const router = exress.Router();

router.get('/:id/:context',context)
router.post('/:id',writecontext)
router.put('/:id',contextDelete)

module.exports = router