const {update,check,info,passwordCheck,myPageComment,myPagePost} = require('../controllers/MypagesController')
const exress = require('express');
const router = exress.Router();
//마이페이지
router.patch('/update',update)
router.post('/passwd',passwordCheck)
router.get('/info',info)
router.get('/comment', myPageComment)
router.get('/content', myPagePost)


module.exports = router