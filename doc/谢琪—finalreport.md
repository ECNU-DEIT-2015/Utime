# 产品创意

## 创意
>创意来源  
>常常我们会发现我们作业或者其他任务安排时间不合理，有时候到了最后一刻才开始做，有的时候会因为其他事情忘记deadline和作业内容；有些时候我们也会因为不知道选择什么样的时间管理应用而错失很多宝贵时间；在班级班会或其他活动约时间或者找约老师时，会因为每个人的时间安排不一样出现线上比较难统一；有时候我们会为自己过去一周一个月什么事都没做而焦虑，如果一张时间表可以看见自己曾经做过的事和接下来近期或更长期需要做的事将有助于我们更好的利用时间。 
>   
>根据以上我们自己的亲身体会，我们想要设计出一款以日程管理为主，可加入待办事项、按一定需要选择提醒时间、通知、记录、进行班级群组管理与预约等功能的时间管理应用。  
>
>创意阶段的个人贡献：在这个阶段，起初是我提出来关于大学生时间管理存在的问题，随后与小组成员一起讨论我们需要解决的问题，如预约时间，同时从技术的角度分析功能的合理性与可否实现，如时间函数的获取与群组处理。
>
  

## 需求
>针对人群：主要针对大学生和教师
>
>主要功能：  
>1.日历日程列表功能。能够同一般日历一样显示日历和日程（每天的时间点）。能够按照日视图显示每日的时间点，周视图显示每周的时间点，月视图显示每月的事件。打开默认显示当前日期和时间。月视图与周视图可选择上下，可以方便对日期时间进行选择。    
2.事件写入添加功能。选定一个具体的日期和时间，添加事件，将事件插入到数据库，并显示在日历列表中。同时可对提醒时间进行设定，如提前一周提醒我。  
3.班级管理功能。通过班级的形式建立群组，班级成员可看见其他成员的时间是否被填充，并将该事件用列表同段时间的列表展示出来。创建班级的管理者可以根据时间填充情况对成员设定活动时间。  
4.通知功能。通过设定的具体时间点与提前提醒时间提醒的时间，并在该时间到来时以通知栏消息的形式出现。  
5.事件信息统计。以月为单位将所以事件展示出来。   
6.登录注册功能。注册登录与数据库的连接功能。
>
>最初原型设计图片
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
>我们用了node.js来实现服务器端。因为JavaScript实现日历与时间的功能比较方便，而dart上面虽然有日历的库tzolkin,但是使用时总是出现我们无法处理的问题，因此我们就选择了JavaScript，然后服务器端选用了node.js。 
>
>node环境的安装。node环境安装和学习，同dart一样，我们对node环境和语法是陌生的，只是我们接触过JavaScript，相对于dart不那么陌生，我们可以从网络上找到同样的问题以及解决方案。下载npm 相应的包以及环境配置。感触比较深的就是我们需要灵活掌握cmd命令行语句。安装好node环境就相当于我们的电脑成为了我们应用的服务器。安装好之后，就设置路由实现页面的交互。
>
>前端代码。在原型设计好之后，就开始写前端代码。首先写的是注册登录的代码，因为我们的应用涉及到不同用户之间的联系，因此注册登录等不同用户的信息时比较重要的。设计好逻辑在写日程页面的时候，发现有些功能没法实现。随后我们借用了已有的日历代码，将其改造成我们需要的日历页面。里面涉及到代码本身的一些逻辑和设计，我们花了差不多3周的时间进行代码解读与改造，按需设计成我们的日程代码。
>
>与数据库的连接。与数据库的连接最初是登录与注册页面，现在可以实现注册写入数据库用户名和密码，登录只能登录已有用户进入到主页面。在日程写入上面，还需要设计合理的数据库，我们讨论出的数据库表的字段为user_name（主键）、时间发生日期、具体事件、事件发生提醒时间。一开始认为每个用户应该建立一个表，也就是需要使用非关系型数据库，如MongoDB，但老师给我们的数据库MySQL是关系型数据库MySQL，通过上面的方法也是可以实现的。    


# 我在小组中的分工
### 组织本应用的全过程。我们差不多每两周讨论一下我们的进度与计划。我主要督促小伙伴，因为我们组只有两个成员，任务相对于较重。在功能实现上，我主要负责前端页面和逻辑设计以及对node.js的学习。
  组员|分数
 --|--
  谢琪|80
  杨芙蓉|70
 

# 我的编程实践活动
## 我的代码
  
```前端代码
//index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="stylesheets/index.css">
    <title>Utime</title>
    <link rel="shortcut icon" href="images/icon.ico"/>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo"> 
                <img src="images/logo.png" height=80px; alt="Utime logo" title="Utime"/>
            </div>
            <div class="title">我的时间我做主！</div>
            <div class="login">
                <a class="log" href="login">登录</a>
                |
                <a class="reg" href="reg">注册</a>
            </div>
        </div>
        <div class="grids">
            <div class="grid">
                 <span>
                     <a class="g1"></a>
                 </span>
                 <h4><a>任务提醒</a></h4>
                 <p>不同状态提醒你完成今天的任务哦~</p>
            </div>
            <div class="grid">
                    <span>
                        <a class="g2"></a>
                    </span>
                    <h4><a>日程记录</a></h4>
                    <p>记录下你的每个大任务和你的班级~</p>
               </div>
               <div class="grid">
                    <span>
                        <a class="g3"></a>
                    </span>
                    <h4><a>时间预约</a></h4>
                    <p>设置自己的时间，查看他人时间~</p>
               </div>
            <div class="clear"></div>
        </div>
    </div>
    <div class="footer">
        <div class="linkto">
            <div class="footer_1">
                <h3>关于本应用</h3>
                <p>应用指南 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更新日志<br/>
                   制作小组 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务邮箱
                </p>
            </div>
            <div class="footer_2">
                <h3>联系我们</h3>
                <p>优化建议 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;功能完善<br/>
                   源码地址 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系地址
                 </p>
            </div>
            <div class="footer_3">
                <h3>相关链接</h3>
                <p>番茄工作法 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;莫法特休息法<br/>
                   帕累托原则 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6点有限工作制
                 </p>
            </div>
            <div class="footer_logo">
                <img src="images/logo.png">
            </div>
        </div>
        <div class="infor">©华东师范大学2015级教育信息技术学系第七组</div>
    </div>
</body>
</html>
```
```
//login.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="stylesheets/index.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/login.css">
    <title>Utime</title>
    <link rel="shortcut icon" href="images/icon.ico"/>
</head>
<body>
    <div class="detail"   id="change">
        <div class="detail_l">
            <div class="logo"> 
                <img src="images/logo.png" height=80px; alt="Utime logo" title="Utime"/>
            </div>
            <div class="title">我的时间我做主！</div>
            <div class="comp_pic"><img src="images/conputer.png"></div>
            <div class="express">Utime:一款主要针对大学生的时间管理应用！</div>
        </div>
        <div class="detail_r">
            <div class="change"><a><span>登录</span></a></div><br/>
            <div class="login-form">
                <form action="#" method="post">
                    <p>用户名 </p>
                    <input type="text" name="user_name"  placeholder="请输入用户名" required=""/>
                    <p>密码</p>
                    <input type="password" name="user_psd" placeholder="请输入密码" required=""/>	
                    <input type="checkbox" id="brand" value="">
                    <label for="brand1"><span></span>记住我</label> <br/>
                    <input type="submit" value="登录">
                </form>  
            </div>
            <div class="clear"> </div>
        </div>
    </div>
    <div class="footer">
        <div class="linkto">
            <div class="footer_1">
                <h3>关于本应用</h3>
                <p>应用指南 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更新日志<br/>
                   制作小组 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务邮箱
                </p>
            </div>
            <div class="footer_2">
                <h3>联系我们</h3>
                <p>优化建议 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;功能完善<br/>
                   源码地址 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系地址
                 </p>
            </div>
            <div class="footer_3">
                <h3>相关链接</h3>
                <p>番茄工作法 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;莫法特休息法<br/>
                   帕累托原则 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6点有限工作制
                 </p>
            </div>
            <div class="footer_logo">
                <img src="images/logo.png">
            </div>
        </div>
        <div class="infor">©华东师范大学2015级教育信息技术学系第七组</div>
    </div>
</body>
</html>
```
```
//reg.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" type="text/css" href="stylesheets/index.css">
    <link rel="stylesheet" type="text/css" href="stylesheets/reg.css">
    <title>Utime</title>
    <link rel="shortcut icon" href="images/icon.ico"/>
</head>
<body>
    <div class="detail"   id="change">
        <div class="detail_l">
            <div class="logo"> 
                <img src="images/logo.png" height=80px; alt="Utime logo" title="Utime"/>
            </div>
            <div class="title">我的时间我做主！</div>
            <div class="comp_pic"><img src="images/conputer.png"></div>
            <div class="express">Utime:一款主要针对大学生的时间管理应用！</div>
        </div>
        <div class="detail_r">
            <div class="change"><a><span>注册</span></a></div><br/>
            <div class="reg-form">
                <form action="#" method="post">
                    <p>用户名 </p>
                    <input type="text" name="user_name"  placeholder="请输入用户名" required=""/>
                    <p>密码 </p>
                    <input type="password" name="user_psd" placeholder="请输入密码" required=""/>
                    <!--<p>确认密码</p>
                    <input type="password" name="user_psd2" placeholder="请确认密码" required=""/>-->
                    <input type="checkbox" id="brand1" value="">
                    <label for="brand1"><span></span>我接受网站用户协议</label> 
                    <input type="submit" value="注册">
                </form>  
            </div>
            <div class="clear"> </div>
        </div>
    </div>
    <div class="footer">
        <div class="linkto">
            <div class="footer_1">
                <h3>关于本应用</h3>
                <p>应用指南 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;更新日志<br/>
                   制作小组 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;服务邮箱
                </p>
            </div>
            <div class="footer_2">
                <h3>联系我们</h3>
                <p>优化建议 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;功能完善<br/>
                   源码地址 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系地址
                 </p>
            </div>
            <div class="footer_3">
                <h3>相关链接</h3>
                <p>番茄工作法 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;莫法特休息法<br/>
                   帕累托原则 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6点有限工作制
                 </p>
            </div>
            <div class="footer_logo">
                <img src="images/logo.png">
            </div>
        </div>
        <div class="infor">©华东师范大学2015级教育信息技术学系第七组</div>
    </div>
</body>
</html>
```
```
//index.css
*{
    margin:0;
    padding:0;
    font-family: "Microsoft YaHei";
}

a{
   text-decoration: none;
}
body{
   font-family: "Helvetica Neue", Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}
/*********登录页*********/
.container{
   margin:0;
   padding:0;
   background: url('../images/bg.jpg') no-repeat;
   background-attachment: fixed;
   height:680px;
}
.header{
   width:99%;
   height:120px;
   margin:0;
   padding:0;
}
.logo{
   float:left;
   margin-left: 50px;
   margin-top: 20px;
}
.title{
   float:left;
   margin-top: 35px;
   font-size: 35px;
   color: #2F779B;
}
.header .login{
   float:right;
   margin-top: 40px;
   margin-right: 50px;
   font-size: 20px;
}
.login a{
  color: #2F779B;
}
.grids{
   width:85%;
   height:380px;
   margin: 4em auto 4em;
}
.grid{
   width:28.33%;
   float:left;
   margin-right: 2.5%;
   margin-left:2.5%;
   text-align: center;
   background: #FFF;
   padding-bottom: 1em;
   margin-bottom: 5em;
   box-shadow:0px 0px 10px rgba(238,238,238,0.08);
}
.grid span{
   background:#E9E9E9;
   width:100%;
   padding: 2em 0px;
   display: block;
}

.grid span a{
   width:128px;
   height:128px;
   display: inline-block;
}
.grid span .g1{
   background: url('../images/0001.png') no-repeat;
}
.grid span .g2{
   background: url('../images/0002.png') no-repeat;
}
.grid span .g3{
   background: url('../images/0003.png') no-repeat;
}
.grid h4 a{
   color: #383838;
   font-size:1.8em;
   margin: 1em 0 0em 0;
   display: block;
   font-weight: 900;
}
.grid p{
   color:#909090;
   width:90%;
   font-size:1.1em;
   margin:1em auto;
   line-height:1.5em;
}
.clear{
   clear:both;
   display: block;
   overflow: hidden;
   visibility: hidden;
   width:0;
   height:0;
}
.footer{
   margin-top:-10px;
   padding:0;
   width:100%;
   height:300px;
   background-color: #1E1E1E;
   float: left;
}
.linkto{
   width:100%;
   height:240px;
}
.footer_1{
   float:left;
   width:20%;
   height:180px;
   margin-left: 120px;
   margin-top: 50px;
   color:white;
   line-height: 2;
}
.footer_2, .footer_3{
   float:left;
   width:20%;
   height:180px;
   margin-left: 50px;
   margin-top: 50px;
   color:white;
   line-height: 2;
}
.footer .footer_logo {
   float:left;
   margin-left: 30px;
   margin-top: 70px;
}
.infor{
   margin: 1em auto; 
   width:100% ;
   text-align: center;
   color:white;
   font-size: 14px;
}

//login.css
.detail{
    height:640px;
    background: #F0F1F0;
    padding: 3em 0;
 }
 .detail .detail_l{
    width:60%;
    height:600px;
    float:left;
    padding:0;
    margin-left: 60px;
  /*  border:1px solid red;  */
 }
 .detail .detail_l .logo{
    float:left;
    margin:0;
 }
 .detail .detail_l .title{
    float:left;
    margin-top: 20px;
    font-size: 35px;
    color: #2F779B;
 }
 .detail .detail_r{
    background-color: #E9E9E9;
    float:right;
    width: 30%;
    margin-right: 40px;
 }
 .change{
    color: #2F779B;
    font-size:20px;
    float:left;
    margin-top:10px;
    margin-left: 20px;
 }
 .login-form{
    width: 100%;
    margin: 2.5em auto;
    padding-left: 20px;
 }
 .comp_pic{
    float: left;
    padding-top:20px;
    padding-left: 20px;
 }
 .express{
   float: left;
   margin-top: 5px;
   padding-left: 50px;
   font-size: 35px;
   color: #2F779B;
   text-align: center;
 }
 .login-form input[type="text"], .login-form input[type="password"] {
    outline: none;
    font-size: 1em;
    color: #000;
    padding: .8em 1em;
    margin: 0;
    width: 80%;
    border: none;
    -webkit-appearance: none;
    display: block;
    background: rgba(255, 255, 255, 0.67);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px; 
    border-radius: 3px;
 }
 .login-form p {
    font-size: 1em;
    margin: 1em 0 .5em;
 }
 .login-form input[type="checkbox"]{
    margin-top: 20px;
    margin-bottom: 20px;
 }
 .login-form input[type="submit"]{
    font-size: 1em;
    color: #fff;
    background: #A7D4DA;
    border: 3px solid #A7D4DA;
    outline: none;
    cursor: pointer;
    padding: .6em 1em;
    -webkit-appearance: none;
    width: 80%;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px; 
    border-radius: 3px;
 }
 .login-form input[type="submit"]:hover {
    background: #fff;
    color: #A7D4DA;
    border-color: #A7D4DA;
    transition: 0.5s all ;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
 }
 ```
```
//reg.css
.detail{
    height:640px;
    background: #F0F1F0;
    padding: 3em 0;
 }
 .detail .detail_l{
    width:60%;
    height:600px;
    float:left;
    padding:0;
    margin-left: 60px;
  /*  border:1px solid red;  */
 }
 .detail .detail_l .logo{
    float:left;
    margin:0;
 }
 .detail .detail_l .title{
    float:left;
    margin-top: 20px;
    font-size: 35px;
    color: #2F779B;
 }
 .detail .detail_r{
    background-color: #E9E9E9;
    float:right;
    width: 30%;
    margin-right: 40px;
 }
 .change{
    color: #2F779B;
    font-size:20px;
    float:left;
    margin-top:10px;
    margin-left: 20px;
 }
 .reg-form{
    width: 100%;
    margin: 2.5em auto;
    padding-left: 20px;
 }
 .comp_pic{
    float: left;
    padding-top:20px;
    padding-left: 20px;
}
.express{
    float: left;
    margin-top: 5px;
    padding-left: 50px;
    font-size: 35px;
    color: #2F779B;
    text-align: center;
}
 .reg-form input[type="text"], .reg-form input[type="password"] {
    outline: none;
    font-size: 1em;
    color: #000;
    padding: .8em 1em;
    margin: 0;
    width: 80%;
    border: none;
    -webkit-appearance: none;
    display: block;
    background: rgba(255, 255, 255, 0.67);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px; 
    border-radius: 3px;
 }
 .reg-form p {
    font-size: 1em;
    margin: 1em 0 .5em;
 }
 .reg-form input[type="checkbox"]{
    margin-top: 20px;
    margin-bottom: 20px;
 }
 .reg-form input[type="submit"]{
    font-size: 1em;
    color: #fff;
    background: #A7D4DA;
    border: 3px solid #A7D4DA;
    outline: none;
    cursor: pointer;
    padding: .6em 1em;
    -webkit-appearance: none;
    width: 80%;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px; 
    border-radius: 3px;
 }
 .reg-form input[type="submit"]:hover {
    background: #fff;
    color: #A7D4DA;
    border-color: #A7D4DA;
    transition: 0.5s all ;
    -webkit-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
 }
```
```
//node   app.js
var routes = require('./routes/index');
var users = require('./routes/users');

var session=require('express-session');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('jade').renderFile);
app.set('view engine','html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("An"));
app.use(session({
    secret:'an',
    resave:false,
    saveUninitialized:true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/login', routes);
app.use('/reg', routes);
app.use('/home', routes);
```
```
home.html中修改了一些代码，这里就不再粘贴了
```
  
## 我的活动量化
> 活动量化数据截止到2018-1-17,12:00.
>https://github.com/ECNU-DEIT-2015/Utime/graphs/contributors  
![contributorpng](https://cloud.githubusercontent.com/assets/1710178/21607012/4f254246-d1ee-11e6-9eaf-4c9f21ccb572.png)

>https://github.com/ECNU-DEIT-2015/Utime/issuess 中查询你的issure状态，因为我们主要采用QQ线上讨论，issue没有内容。

 

>  **谢琪/10154507107/20 commits / 239,324 ++ / 9,645 --**  

## 我的issue活动（线上，非GitHub上）
>1.原型设计。   
>2.前端代码组织与安排。  
>3.逻辑设计。   
>4.node安装与学习。
>5.数据库的连接。


# 我的自评
> 请你对自己的工作进行自评。
> 如果用**一整天8小时**时间计算，你有信心再用多少天完成你未目前完成的功能？25天。