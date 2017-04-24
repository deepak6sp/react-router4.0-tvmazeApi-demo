var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var connections = [];


io.on("connection", function(sock) {
  // connections.push(sock);
  // sock.on('disconnect', function() {
  //   connections.splice(connections.indexOf(sock), 1);
  //   console.log("disconnected");
  // });

  sock.on('send message', (msg) => {
    io.emit("new message", { newMsg: msg.sendMsg});
  });
});


server.listen(3000, function() {
  console.log("server running on 3000...");
});
