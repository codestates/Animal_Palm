const { comment, writeComment, commentDelete } = require('../controllers/CommentController')
const exress = require('express');
const router = exress.Router();
//댓글
router.get('/:postId',comment)
router.post('/:postId',writeComment)
router.delete('/:commentId',commentDelete)

module.exports = router
