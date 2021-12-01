
var express = require('express');
const giraffe_controlers= require('../controllers/giraffe');
var router = express.Router();

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET giraffe */ 
router.get('/', giraffe_controlers.giraffe_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('giraffe', { title: 'Search results' });
});

module.exports = router;

/* GET detail giraffe page */ 
router.get('/detail', giraffe_controlers.giraffe_view_one_Page); 

/* GET create giraffe page */ 
router.get('/create', secured, giraffe_controlers.giraffe_create_Page); 

/* GET create update page */ 
router.get('/update', secured, giraffe_controlers.giraffe_update_Page); 

/* GET create giraffe page */ 
router.get('/delete', secured, giraffe_controlers.giraffe_delete_Page); 
 
