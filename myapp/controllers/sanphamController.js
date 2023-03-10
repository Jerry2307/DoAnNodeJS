const { addListener } = require("../app");
var SanPham = require('../models/sanphamModel');
var ErrorHander = require('../ultis/errorhander');
var catchAsyncError = require('../middleware/catchAsyncError');
var chucnang = require('../ultis/chucnang');

//Them san pham -- admin
exports.themSanPham = catchAsyncError (async (req,res,next)=>{
    var sanpham = await SanPham.create(req.body);

    res.status(201).json({
        success:true,
        sanpham,
    });
});

//get tat ca san pham
exports.getTatCaSanPham = catchAsyncError (async (req,res) =>{
    var resultPerPage = 5;
    var sanphamCount = await SanPham.countDocuments();
    var apichucnang = new chucnang(SanPham.find(),req.query).search().filter().pagination(resultPerPage);
    var sanpham = await apichucnang.query;

    res.status(200).json({
        success:true,
        sanpham,
    });
});
//get chi tiet san pham
exports.getChiTietSanPham = catchAsyncError (async (req,res,next) =>{
    var sanpham = await SanPham.findById(req.params.id);

    if(!sanpham){
        return next(new ErrorHander("Không tìm thấy sản phẩm", 404));    
    }
    res.status(200).json({
        success: true,
        sanpham,
        sanphamCount,
    });
});


//cap nhat san pham -- admin
exports.updateSanPham = catchAsyncError (async (req,res,next) =>{
    let sanpham = await SanPham.findById(req.params.id);
    if(!sanpham){
        return next(new ErrorHander("Không tìm thấy sản phẩm", 404));    
    }
    sanpham = await SanPham.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        sanpham,
    });
});  