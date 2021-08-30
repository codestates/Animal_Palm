const { getPostList, getPost, writeContext, contextDelete } = require('../controllers/BoardController')
const exress = require('express');
const router = exress.Router();
//게시판
router.get('/:animalId', getPostList)
router.get('/:animalId/:postId', getPost)
router.post('/:animalId/', writeContext)
router.delete('/:postId', contextDelete)


module.exports = router
