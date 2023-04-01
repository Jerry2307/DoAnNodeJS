var express = require('express');
var router = express.Router();
var itemModel = require('../schemas/accounts');
/* GET accounts listing. */
router.get('/', async function (req, res, next) {//muon dung await thi phai khai bao la ham async
    res.send('respond with a resource');
   });
// add your routes here
router.get('/add', async function (req, res, next) {
    var newItem = new itemModel({
        hoten:'Hoàng Thị Ngọc',
        email:'hoangngoc.10819@gmail.com',
        taikhoan:'ngoc123',
        matkhau:'123',
        diachi:'hutech'
    });
    newItem.save();
    res.send("xong heheheheeh");
  });
  
  
  
  
  router.get('/add', function (req, res, next) {
    res.send('add-items');
  });
  
module.exports = router;