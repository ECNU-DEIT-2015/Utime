var express = require('express');
var router = express.Router();
//var options = require('../config/database-default');
//var db = require('../config/dbConnect.js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*router.route('/user/index').get(function(req,res,next){
  console.log(req.session.user);
  if(req.session.user){
    res.render('user',{title:'用户'});
  }else{
    req.session.originalUrl=req.originalUrl?req.originalUrl:null;
    console.log(req.session.originalUrl);
    res.redirect('/login');
  }
})*/
module.exports = router;
