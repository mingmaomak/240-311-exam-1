var express = require('express');
var app = express();
var counter = 0;

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   counter += 1;
//    response = {
//       "counter" : counter
//    };
   res.sendFile( __dirname + "/" + "index.htm" );
   console.log(counter);
   //res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})