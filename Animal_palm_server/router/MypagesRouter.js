const { update, info, passwordCheck, myPageComment, myPagePost, getRandomPost } = require('../controllers/MypagesController')
const exress = require('express');
const router = exress.Router();
//마이페이지
router.patch('/info',update)
router.post('/passwd',passwordCheck)
router.get('/info',info)
router.get('/comment', myPageComment)
router.get('/content', myPagePost)
router.get('/', getRandomPost)


module.exports = router