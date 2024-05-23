const connection = require('../config/database')
const mysql = require('mysql2/promise');
const {getAllUser, getUserId, getUpdateUserById, getDeleteUserById} =require('../service/CRUDService')
const getHomePage = async(req, res) => {
  let results = await getAllUser();
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
      const [results, fields] = await connection.query(
          `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
          [email, name, city]
      );
      res.send('Create user success');
  } catch (error) {
      console.error("Error creating user: ", error);
      res.status(500).send('An error occurred while creating the user.');
  }
};
const getCreatePage = (req,res) =>{
  res.render('create.ejs')
}
const getUpdatePage = async(req,res) =>{
    // console.log('checkparams: ', req.params)

    const userId = req.params.id
    let user = await getUserId(userId)
    res.render('edit.ejs',{userEdit : user})
}
const getUpdateUser = async(req,res) =>{
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;
    await getUpdateUserById(email,name,city,id)
    res.redirect('/')
}
const getDeleteUser = async(req,res) =>{
    const userId = req.params.id
    await getDeleteUserById(userId)
}
    module.exports = {
    getHomePage, getTestABC, GetViewJs,createUser,getCreatePage,getUpdatePage,getUpdateUser,getDeleteUser
}