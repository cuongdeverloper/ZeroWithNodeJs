const express = require('express');
const router = express.Router();
const {getHomePage,getTestABC,GetViewJs, createUser,getCreatePage} = require('../Controller/HomeController')

router.get('/',getHomePage)
router.get('/getabc',getTestABC)
router.get('/Nodejs1',GetViewJs)
router.post('/create-user',createUser)
router.get('/create',getCreatePage)
 module.exports = router