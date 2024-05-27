const User = require('../models/User');
const getUserApi = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode:0,
        data:results
    })
}
const postCreateUserApi = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

      let user = await User.create({
          email:email,
          name:name,
          city:city
      })
      return res.status(200).json({
        errorCode:0,
        data:user
    })
  
  };

  const putUpdateUserApi  = async(req,res) =>{
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let id = req.body.id;
    // await getUpdateUserById(email,name,city,id) //mySQL
    //mongodb
    let userUpdate = await User.updateOne( {_id : id},{ email: email , name: name ,city : city});
    return res.status(200).json({
        errorCode:0,
        data:userUpdate
    })
  }
  const deleteUserApi = async(req,res)=>{
    const userId = req.body.id;
    let userDelete = await User.deleteOne({ _id: userId});
    return res.status(200).json({
        errorCode:0,
        data:userDelete
    })
  }
module.exports = {
    getUserApi,postCreateUserApi,putUpdateUserApi,deleteUserApi
}