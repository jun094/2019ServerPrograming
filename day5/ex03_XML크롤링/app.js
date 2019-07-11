function loadJQuery() {
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.charset = "utf-8";
    oScript.src = "http://code.jquery.com/jquery-latest.js";
    document.getElementsByTagName("head")[0].appendChild(oScript);
}

var API = "http://api.aoikujira.com/kawase/get.php?code=KRW&amp;format=xml";
var express = require('express');
var app = express();
var parseString = require('xml2js').parseString;
var request = require('request');


request(API, function(err, response, body){
  if(!err && response.statusCode == 200){
    analyzeRSS(body);
  }
});

function analyzeRSS(xml){
  parseString(xml,function(err,obj){

    if(err){
      console.log(err);
      return;
    }
    else{ // xml정상적으로 가져왔을때
      app.get('/', function(req,res){
        var update = obj.kawase.update;
        var ARS = obj.kawase.ARS;
        var UYU = obj.kawase.UYU;
        var CAD = obj.kawase.CAD;
        var TTD = obj.kawase.TTD;
        var HTG = obj.kawase.HTG;
        var BZD = obj.kawase.BZD;
        var BOB = obj.kawase.BOB;
        var MXN = obj.kawase.MXN;

        res.send(`<h1>KOREA exchange rate</h1>
                  <h4>update : ${update}</h4>
                  <h6>ARS : ${ARS}</h6>
                  <h6>UYU : ${UYU}</h6>
                  <h6>CAD : ${CAD}</h6>
                  <h6>TTD : ${TTD}</h6>
                  <h6>HTG : ${HTG}</h6>
                  <h6>BZD : ${BZD}</h6>
                  <h6>BOB : ${BOB}</h6>
                  <h6>MXN : ${MXN}</h6>`);
      });
    }
  })
}


app.listen(3003,function(){
  console.log('connected!');
});
