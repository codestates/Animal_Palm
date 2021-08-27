const {context,writecontext,contextDelete} = require('../controllers/BoardController')
const exress = require('express');
const router = exress.Router();
//게시판
router.get('/:board_id',animalBoard_post_list)
router.get('/:post_id', get_post)
router.post('/:id',writecontext)
router.delete('/:id',contextDelete)


module.exports = router
