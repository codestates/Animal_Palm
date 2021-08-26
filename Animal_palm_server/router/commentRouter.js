const {comment,writecomment,commentDelete} = require('../controllers/CommentController')
const exress = require('express');
const router = exress.Router();
//댓글
router.get('/:postid/comment',comment)
router.post('/:postid',writecomment)
router.delete('/:postid',commentDelete)

module.exports = router