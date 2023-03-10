var ErrorHandler = require('../ultis/errorhander');

module.exports = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Lỗi máy chủ";

    if(err.name ==="CastError"){
        var message = `Không tìm thấy trang. Lỗi: ${err.path}`;
        err = new ErrorHandler (message,400);
    }

    res.status(err.statusCode).json({
        success:false,
        message: err.message,
    });
};