const {signup, signin, signout, userDelete, MBTI_signup} = require('../controllers/UserController')
const exress = require('express');
const router = exress.Router();
//유저
router.post('/signin',signin)
router.post('/signup',signup)
router.put('/signout',signout)
router.delete('/userDelete',userDelete)
router.post('/animal', MBTI_signup)

module.exports = router