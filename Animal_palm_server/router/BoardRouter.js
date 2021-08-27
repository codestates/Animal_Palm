const { getPostList, getPost, writeContext, contextDelete } = require('../controllers/BoardController')
const exress = require('express');
const router = exress.Router();
//게시판
router.get('/:board_id', getPostList)
router.get('/:post_id', getPost)
router.post('/:id', writeContext)
router.delete('/:id', contextDelete)


module.exports = router
