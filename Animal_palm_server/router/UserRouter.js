const {signup,signin,signout,userDelete} = require('../controllers/UserController')
const exress = require('express');
const router = exress.Router();
//유저
router.post('/signin',signin)
router.post('/signup',signup)
router.put('/signout',signout)
router.delete('/userDelete',userDelete)

module.exports = router