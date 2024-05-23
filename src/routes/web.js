const express = require('express');
const router = express.Router();
const {getHomePage,getTestABC,GetViewJs, createUser,getCreatePage, getUpdatePage, getUpdateUser, getDeleteUser} = require('../Controller/HomeController')

router.get('/',getHomePage)
router.get('/getabc',getTestABC)
router.get('/Nodejs1',GetViewJs)
router.post('/create-user',createUser)
router.get('/create',getCreatePage)
router.get('/update-user/:id', getUpdatePage)
router.post('/update-userbyid',getUpdateUser),
router.post('/delete-userbyid/:id', getDeleteUser)
 module.exports = router