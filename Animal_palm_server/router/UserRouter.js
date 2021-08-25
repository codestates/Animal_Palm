const {signup,signin,signout,userDelete} = require('../controllers/UserController')
const exress = require('express');
const router = exress.Router();

router.post('/signin',signin)
router.post('/signup',signup)
router.put('/signout',signout)
router.puh('/userDelete',userDelete)

module.exports = router