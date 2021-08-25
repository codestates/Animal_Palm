const {comment,writecomment,commentDelete} = require('../controllers/CommentController')
const exress = require('express');
const router = exress.Router();

router.get('/:postid/comment',comment)
router.post('/:postid',writecomment)
router.put('/:postid',commentDelete)

module.exports = router