var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var connections = [];


io.on("connection", function(sock) {
  connections.push(sock);
  console.log("%s connected", connections.length);
  sock.on('disconnect', function() {
    connections.splice(connections.indexOf(sock), 1);
    console.log("disconnected");
    console.log("%s still connected", connections.length);
  });
});

server.listen(3000, function() {
  console.log("server running on 3000...");
});
