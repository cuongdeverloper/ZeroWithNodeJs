const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
    name: String,
    email:String,
    city:String
  });
  const Customer = mongoose.model('user', customerSchema);


module.exports = Customer;