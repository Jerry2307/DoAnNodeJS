var mongoose = require('mongoose');
var validator = require('validator');

var taikhoanSchema = new mongoose.Schema({
    tennguoidung:{
        type: String,
        required:[true, "Vui lòng điền tên người dùng"],
        maxLength:[30,"Tên người dùng không quá 30 ký tự"],
        minLength:[4,"Tên người dùng phải trên 4 ký tự"],
    },
    email:{
        type: String,
        required:[true,"Vui lòng điền email của bạn"],
        unique: true,
        validate:[true,"vui lòng nhập email hợp lẹ"],
    },
    matkhau:{
        type: String,
        required:[true,"Vui lòng điền mật khẩu của bạn"],
        minLength:[8,"Mật khẩu phải trên 8 ký tự"],
    },
    avatar:{
        public_id:{
            type: String,
            required:true
        },
        url:{
            type: String,
            required:true
        }
    },
    quyen:{
        type: String,
        default: "user",
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

module.exports = mongoose.model("TaiKhoan",taikhoanSchema);