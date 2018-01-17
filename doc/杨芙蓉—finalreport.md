# 产品创意

## 创意
###创意来源  
>常常我们会发现我们作业或者其他任务安排时间不合理，有时候到了最后一刻才开始做，有的时候会因为其他事情忘记deadline和作业内容；有些时候我们也会因为不知道选择什么样的时间管理应用而错失很多宝贵时间；在班级班会或其他活动约时间或者找约老师时，会因为每个人的时间安排不一样出现线上比较难统一；有时候我们会为自己过去一周一个月什么事都没做而焦虑，如果一张时间表可以看见自己曾经做过的事和接下来近期或更长期需要做的事将有助于我们更好的利用时间。 
>   
>根据以上我们自己的亲身体会，我们想要设计出一款以日程管理为主，可加入待办事项、按一定需要选择提醒时间、通知、记录、进行班级群组管理与预约等功能的时间管理应用。  
>
>创意阶段的个人贡献：我们在经过讨论后，选择了与时间管理相关的内容，主要为了能够提醒我们的日程安排和空余时间的预约。之后的汇报上，我们发现了有很多组和我们的内容相似，我们决定修改和增加一些功能。
>
  

## 需求
###针对人群：主要针对大学生和教师
###主要功能：  

1. 日历日程列表功能。能够同一般日历一样显示日历和日程（每天的时间点）。能够按照日视图显示每日的时间点，周视图显示每周的时间点，月视图显示每月的事件。打开默认显示当前日期和时间。月视图与周视图可选择上下，可以方便对日期时间进行选择。    


2. 事件写入添加功能。选定一个具体的日期和时间，添加事件，将事件插入到数据库，并显示在日历列表中。同时可对提醒时间进行设定，如提前一周提醒我。  


3. 班级管理功能。通过班级的形式建立群组，班级成员可看见其他成员的时间是否被填充，并将该事件用列表同段时间的列表展示出来。创建班级的管理者可以根据时间填充情况对成员设定活动时间。  


4. 通知功能。通过设定的具体时间点与提前提醒时间提醒的时间，并在该时间到来时以通知栏消息的形式出现。  


5. 事件信息统计。以月为单位将所以事件展示出来。   


6. 登录注册功能。注册登录与数据库的连接功能。
>
>主要功能的个人贡献：确定主要功能后，我们决定分工，我主要负责登录和注册方面以及前端的设计。
>
   

## 设计的功能列表以及其完成情况

 设计的功能|承担该功能的组员|任务完成度
 --|--|--
  日历日程列表功能|谢琪|100%
  事件写入添加功能。|谢琪|50%
  班级管理功能。|谢琪|30%
  通知功能。|杨芙蓉|30%
  事件信息统计。|谢琪|30%
  登录注册功能。|谢琪、杨芙蓉|100%

# 产品技术方案
>  
> 刚开始在进行这个项目的时候，我们还是用的dart语言，但是因为网络问题，不能查看dart的API，很多内容不能进行下去。在组员之间商量讨论之后，我们换成了Node.js进行开发，这也是我们之前没有用过的，所以还是有很多方面没有解决。
> 
> 技术思路：我们安装了node，并下载了相关的程序，比如npm和express，node这个软件我们也是不熟悉的，但是相对于dart，node的相关资料查询更为方便。 但是node的方法也有很多，我们很容易弄混。
> 
> 服务器端：我们组在登录注册上花的时间也很多，特别是页面跳转的方面，很多时候不知道该怎么跳转，或者是跳转不成功。最终成果是：主页可以跳转到登录和注册页面，当注册成功后跳转到登录，登录成功后跳转到日历页面。日历页面，我们主要是在已有的日历上，改造成我们需要的页面。
> 
> 数据库：我们使用的老师提供的数据库，建立了user—infor的表格，主要记录登录与注册的用户名和密码，再将它和我们的服务器端连接的过程中，也经常出现各种问题。在日程时间的写入和读取方面，我们的服务器还没有和数据库连接起来，所以还要花时间去建立两者的联系。   
  

# 我在小组中的分工
### 前端设计和注册登录的实现，并与数据库连接。
  组员|分数
 --|--
  谢琪|80
  杨芙蓉|70
 

# 我的编程实践活动
## 我的代码
  
```前端代码
//index.js

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
        usr.selectFun(client,req.body.user_name, function (result) {
            if(result[0]===undefined){
                res.send('没有该用户');
            }else{
                if(result[0].user_psd===req.body.user_psd){
                    req.session.islogin=req.body.user_name;
                    res.locals.islogin=req.session.islogin;
                    res.cookie('islogin',res.locals.islogin,{maxAge:60000});
                    res.sendfile("./views/home.html");
                    //res.redirect('home');
                }else
                {
                    res.redirect('login');
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

        usr.insertFun(client,req.body.user_name ,req.body.user_psd, function (err) {
              if(err) throw err;
              //res.send('注册成功');
              //res.sendfile("./views/login.html");
              res.redirect('/login');
        });
    });

module.exports = router;

```
  
## 我的活动量化    

>  **杨芙蓉/10154507109/4 commits / 51,111 ++ /  1,409  --/0 issues/**  

## 我的issue活动

>  **无**

# 我的自评
> 请你对自己的工作进行自评。
> 如果用**一整天8小时**时间计算，你有信心再用多少天完成你未目前完成的功能？
> 30天。
