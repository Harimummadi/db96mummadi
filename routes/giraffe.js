
var express = require('express');
const giraffe_controlers= require('../controllers/giraffe');
var router = express.Router();

/* GET giraffe */ 
router.get('/', giraffe_controlers.giraffe_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('giraffe', { title: 'Search results' });
});

module.exports = router;
