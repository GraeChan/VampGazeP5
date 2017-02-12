// Read eyedata from udp socket

const dgram = require('dgram');
const gazeStream = dgram.createSocket('udp4');
var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

io.on('connection', newConnection);

function newConnection(socket)
{
  console.log('new connection: ' + socket.id);
}

gazeStream.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});


gazeStream.on('listening', () => {
  var address = gazeStream.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

gazeStream.bind(11000);

gazeStream.on('message', (msg, rinfo) => {
  // console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  var gazeData = msg.toString().split(';')
  var x = parseInt(gazeData[0])
  var y = parseInt(gazeData[1])
  io.emit('gaze-data',{'x': x, 'y': y, 'msg': msg.toString()});
});


app.get('/', function(req, res){
	res.sendFile(__dirname + 'public/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});