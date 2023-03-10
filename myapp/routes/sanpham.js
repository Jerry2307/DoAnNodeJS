var express = require('express');
var {getTatCaSanPham, themSanPham, updateSanPham, getChiTietSanPham} = require("../controllers/sanphamController");

var router = express.Router();

router.route("/sanpham").get(getTatCaSanPham);

router.route("/sanpham/new").post(themSanPham);

router.route("/sanpham/:id").put(updateSanPham).get(getChiTietSanPham);

module.exports = router;


