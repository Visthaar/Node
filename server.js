
var static = require('node-static');
var file = new static.Server('./UI');

//vars
var userCount=0;
var chanels=[];

//Define
var server = require('http').createServer(function(request, response) {
    request.addListener('end', function() {
        file.serve(request, response);
    }).resume();
});
var io =require('socket.io')(server);
server.listen(process.env.PORT || 9999);
console.log("Server Started");
