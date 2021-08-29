const { getPostList, getPost, writeContext, contextDelete } = require('../controllers/BoardController')
const exress = require('express');
const router = exress.Router();
//게시판
router.get('/:boardId', getPostList)
router.get('/:boardId/:postId', getPost)
router.post('/:boardId/', writeContext)
router.delete('/:postId', contextDelete)


module.exports = router
