const connection = require('../config/database')
const mysql = require('mysql2/promise');
const getHomePage = (req, res) => {
    return res.render('home.ejs')
}
const getTestABC = (req, res) => {
    res.send('ABC')
}
const GetViewJs = (req, res) => {
    res.render('view.ejs');
}
const createUser = async (req, res) => {
  console.log("check req body", req.body);
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
module.exports = {
    getHomePage, getTestABC, GetViewJs,createUser,getCreatePage
}