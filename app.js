var app = require("http");//�first,import htttp 
app.createServer(function(request,response){
response.writeHead(200,{"content-type":"text/plain"});
response.end("hello");}).listen(80);
console.log("running server");
