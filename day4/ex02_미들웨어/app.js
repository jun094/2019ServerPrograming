var express = require('express')
, http = require('http');

var app = express();

app.use(function (req, res, next){
  console.log('첫번째 미들웨어에서 요청을 처리함');
  res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
  res.write('<h1> 첫번째 Express 서버에서 응답한 결과.</h1>');
  req.user = 'mike';
  next();
});

app.use(function (req, res, next){
  console.log('두번째 미들웨어에서 요청을 처리함');
  res.end('<h1> 두번째 Express 서버에서 응답한 결과.</h1>');
});

http.createServer(app).listen(3000,function(){
  console.log('Express 서버가 3000번 포트에서 시작됨')
});
