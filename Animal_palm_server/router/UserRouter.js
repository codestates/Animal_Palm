const { signIn, signUp, signOut, userDelete, MBTI_signUp, userIdCheck } = require('../controllers/UserController')
const exress = require('express');
const router = exress.Router();
//유저
router.post('/signin',signIn)
router.post('/signup',signUp)
router.put('/signout',signOut)
router.delete('/userDelete',userDelete)
router.post('/animal', MBTI_signUp)
router.post('/userid', userIdCheck)

module.exports = router