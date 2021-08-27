const {update,check,info} = require('../controllers/MypagesController')
const exress = require('express');
const router = exress.Router();
//마이페이지
router.patch('/update',update)
router.post('/check',check)
router.get('/info',info)


module.exports = router