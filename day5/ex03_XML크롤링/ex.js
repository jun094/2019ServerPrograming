var API = "http://api.aoikujira.com/kawase/get.php?code=KRW&format=json";

var request = require('request');
var fs = require('fs')
var express = require('express');

var app = express();
app.set('port', process.env.PORT || 8000);

app.get('/', function (req, res) {

    request(API, function (err, response, body) {

        if (err || response.statusCode != 200) {
            console.log("ERROR", err);
            return;

        } else {
            data = JSON.parse(body);

            date = new Date();

            if (data['result'] == "ok") {
                res.write("<div> <h1>KRW EXCHANGE RATE </h1></div>");
                res.write("<div> <h3>TIME:" + date + "</h3></div>");
                res.write("<div> <h5> ARS :" + data['ARS'] + "</h5></div>");
                res.write("<div> <h5> UYU :" + data['UYU'] + "</h5></div>");
                res.write("<div> <h5> ANG :" + data['ANG'] + "</h5></div>");
                res.write("<div> <h5> CAD :" + data['CAD'] + "</h5></div>");
                res.write("<div> <h5> CUP :" + data['CUP'] + "</h5></div>");
                res.write("<div> <h5> GTQ :" + data['GTQ'] + "</h5></div>");
            }
        }
    })
})

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
