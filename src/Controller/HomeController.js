const connection = require('../config/database')
const mysql = require('mysql2/promise');
const {getAllUser, getUserId, getUpdateUserById, getDeleteUserById, modelConfirmDeleteUser} =require('../service/CRUDService')
const User = require('../models/User');
const getHomePage = async(req, res) => {
//   let results = await getAllUser();
let results = await User.find({});
  // console.log('check rows' ,results)
    return res.render('home.ejs', {ListUser: results})
}
const getTestABC = (req, res) => {
    res.send('ABC')
}
const GetViewJs = (req, res) => {
    res.render('view.ejs');
}

const createUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
try {
    await User.create({
        email:email,
        name:name,
        city:city
    })
    res.send('create success')
} catch (error) {
    console.error("Error creating user: ", error);
}

};
const getCreatePage = (req,res) =>{
  res.render('create.ejs')
}
const getUpdatePage = async(req,res) =>{
    // console.log('checkparams: ', req.params)
    const userId = req.params.id
    // let user = await getUserId(userId)  //mysql

    // mongodb
   let user= await User.findById(userId).exec();
    res.render('edit.ejs',{userEdit : user})
}
const getUpdateUser = async(req,res) =>{
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;
    // await getUpdateUserById(email,name,city,id) //mySQL
    //mongodb
    await User.updateOne( {_id : id},{ email: email , name: name ,city : city});

    res.redirect('/')
}
const getDeleteUser = async(req,res) =>{
    const userId = req.params.id;
    let user= await User.findById(userId).exec();
    res.render('deleteuser.ejs',{userDelete: user})
}

const formDeleteUser = async(req,res) =>{
    const userId = req.body.id;
    console.log(userId)
    await User.deleteOne({ _id: userId}); // returns {deletedCount: x} where x is the number of documents deleted.
    res.redirect('/');
}

    module.exports = {
    getHomePage, getTestABC, GetViewJs,createUser,getCreatePage,getUpdatePage,getUpdateUser,getDeleteUser,formDeleteUser
}