// express 기본 모듈 불러오기
var express = require('express')
    , http = require('http')
    , path = require('path');

// express 미들웨어 불러오기
var bodyParser = require('body-parser')
    , static = require('serve-static');

// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

//body-parser를 이용해 app
app.use(bodyParser.urlencoded({extended:false}))

//body-parser를 이용해 app/json파싱
app.use(bodyParser.json())

app.use(static(path.join(__dirname,'public')));

//확인후 응답 전송
app.use(function(req, res, next){
    console.log('first middle ware');

    var paramID = req.body.id || req.query.id;
    var paramPassword = req.body.password || req.query.password;

    res.writeHead('200',{'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id : '+paramID+'</p></div>');
    res.write('<div><p>Param password : '+paramPassword+'</p></div>');

});


app.listen(3000,function(){
  console.log('connected!');
});
