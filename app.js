var http = require('http')
var fs = require('fs')
var server = http.createServer()

server.on('request',function(req,res){
     // res.end('hello world')
     // 1.通过req.url拿到当前请求路径
     var url = req.url

     //2.根据不同的请求路径，处理不同的响应
    if(url === '/'){
        //res.writeHead(响应状态码，响应头对象)
     	res.writeHead(200,{
     		'Content-Type':'text/html'
     	})
        fs.readFile('index.html','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })
     }else if(url === '/css/main.css'){
        res.writeHead(200,{
            'Content-Type':'text/css'
        })
        fs.readFile('./css/main.css','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })
      }else if(url === '/css/alert.css'){
        res.writeHead(200,{
            'Content-Type':'text/css'
        })
        fs.readFile('./css/alert.css','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
            })
        }else if(url === '/css/blackbird.css'){
        res.writeHead(200,{
            'Content-Type':'text/css'
        })
        fs.readFile('./css/blackbird.css','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
            })
        }else if(url === '/css/calendar.css'){
        res.writeHead(200,{
            'Content-Type':'text/css'
        })
        fs.readFile('./css/calendar.css','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
            })
         }else if(url === '/css/dailog.css'){
        res.writeHead(200,{
            'Content-Type':'text/css'
        })
        fs.readFile('./css/dailog.css','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
            })
        }else if(url === '/css/dp.css'){
        res.writeHead(200,{
            'Content-Type':'text/css'
        })
        fs.readFile('./css/dp.css','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })
     }else if(url === '/js/blackbird.js'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        fs.readFile('./js/blackbird.js','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })
      }else if(url === '/js/Common.js'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        fs.readFile('./js/Common.js','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
            })
        }else if(url === '/js/datepicker_lang_zh_CN.js'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        fs.readFile('./js/datepicker_lang_zh_CN.js','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
            })
    }else if(url === '/js/jquery.alert.js'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        fs.readFile('./js/jquery.alert.js','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
            })
        }else if(url === '/js/jquery.datepicker.js'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        fs.readFile('./js/jquery.datepicker.js','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
            })
         }else if(url === '/js/jquery.ifrmdailog.js'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        fs.readFile('./js/jquery.ifrmdailog.js','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
            })
        }else if(url === '/js/jquery.min.js'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        fs.readFile('./js/jquery.min.js','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })
    }else if(url === '/js/xgcalendar.js?v=1.2.0.4'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        fs.readFile('./js/xgcalendar.js','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })
        }else if(url === '/js/xgcalendar_lang_zh_CN.js'){
        res.writeHead(200,{
            'Content-Type':'text/javascript'
        })
        fs.readFile('./js/xgcalendar_lang_zh_CN.js','utf8',function(err,data){
            if(err){
                throw err
            }
            res.end(data)
        })
     }else{
        res.end('404 Not Found.')
     }
})

server.listen(3000,function(){
	console.log('running...')
})
