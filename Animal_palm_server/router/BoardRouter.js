const { getPostList, getPost, writeContext, contextDelete } = require('../controllers/BoardController')
const exress = require('express');
const router = exress.Router();
//게시판
router.get('/:board_id', getPostList)
router.get('/:board_id/:post_id', getPost)
router.post('/:board_id/', writeContext)
router.delete('/:post_id', contextDelete)


module.exports = router
