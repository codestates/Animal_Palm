const { pages,writecontext } = require('../controllers/boardController')
const exress = require('express');
const router = exress.Router();

router.get('/pages',pages)
router.post('/write',writecontext)

module.exports = router