var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
// Use body-parser middleware to parse request body
router.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle form submissions
router.post('/submit-form', (req, res) => {
  // Retrieve form data from request body
  const name = req.body.tendangnhap;
  const email = req.body.taikhoan;
  console.log(name);
  console.log(email);
  // Process form data...
  // Return response...
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('logiin');
});

module.exports = router;