var express = require('express');
var app = express();
var fs = require("fs");

app.get('/casefile/:id', function (req, res) {

    console.log( "caseFile#" + req.params.id );
   var content = fs.readFileSync (__dirname + "/" + "CaseFileInfo.json");
   res.end( content );

})

app.get('/casefile', function (req, res) {

    console.log( "casefile" + JSON.stringify(req.params));
    console.log(  JSON.stringify(req.query));
   var content = fs.readFileSync (__dirname + "/" + "caselist.JSON");
   var caselist = JSON.parse( content );
   var matching = caselist.filter(function(c) {
        return ((req.query.gender == "male" && c.sex == "M") ||
            (req.query.gender == "female" && c.sex == "F") ||
            (req.query.gender == undefined ));
   });
 res.end( JSON.stringify(matching, null, 2) );

 })


var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
