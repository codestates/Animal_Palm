const { getPostList, getPost, writeContent, contentDelete } = require('../controllers/BoardController')
const exress = require('express');
const router = exress.Router();
//게시판
router.get('/:animalId', getPostList)
router.get('/:animalId/:postId', getPost)
router.post('/:postId/', writeContent)
router.delete('/:postId', contentDelete)


module.exports = router
