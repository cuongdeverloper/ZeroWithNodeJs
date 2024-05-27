const express = require('express');
const { getHomePage } = require('../Controller/HomeController');
const routerAPI = express.Router();
const {getUserApi, postCreateUserApi, putUpdateUserApi, deleteUserApi} = require('../Controller/ApiController')
routerAPI.get('/testApi',(req,res)=>{
    res.status(200).json({
        data:'hello word',
        name:'cuong'
    })
})

routerAPI.get('/users',getUserApi);
routerAPI.post('/users',postCreateUserApi);
routerAPI.put('/users',putUpdateUserApi);
routerAPI.delete('/users',deleteUserApi)

 module.exports = routerAPI