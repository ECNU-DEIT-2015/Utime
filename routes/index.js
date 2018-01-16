var express = require('express');
var router = express.Router();
var usr=require('bao/dbConnect');

/* GET home page. */
router.get('/', function(req, res, next) {      
    res.sendfile("./views/index.html");
  });

router.route('/login')
    .get(function(req, res) {
        //res.render('login', { title: '用户登录' });
        res.sendfile("./views/login.html");
    })
    .post(function(req, res) {
        client=usr.connect();
        result=null;
        usr.selectFun(client,req.body.username, function (result) {
            if(result[0]===undefined){
                res.send('没有该用户');
            }else{
                if(result[0].password===req.body.password){
                    req.session.islogin=req.body.username;
                    res.locals.islogin=req.session.islogin;
                    res.cookie('islogin',res.locals.islogin,{maxAge:60000});
                    res.redirect('/home');
                }else
                {
                    res.redirect('/login');
                }
               }
        });
    });

router.get('/logout', function(req, res) {
    res.clearCookie('islogin');
    req.session.destroy();
    res.redirect('/');
});

router.get('/home', function(req, res) {
    if(req.session.islogin){
        res.locals.islogin=req.session.islogin;
    }
    if(req.cookies.islogin){
        req.session.islogin=req.cookies.islogin;
    }
    res.render('home', { title: 'Home', user: res.locals.islogin });
});

router.route('/reg')
    .get(function(req,res){
        res.sendfile("./views/reg.html");
    })
    .post(function(req,res) {
        client = usr.connect();

        usr.insertFun(client,req.body.username ,req.body.password2, function (err) {
              if(err) throw err;
              res.send('注册成功');
        });
    });

module.exports = router;
