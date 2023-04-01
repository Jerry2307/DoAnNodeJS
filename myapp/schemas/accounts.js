var mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
   hoten:String,
   email:String,
   taikhoan:String,
   matkhau:String,
   diachi:String
 });


module.exports = mongoose.model('account', itemSchema);
