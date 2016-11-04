var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/', express.static(__dirname));

var server = http.listen(3000, function() {
    console.log('hosting from ' + __dirname);
    console.log('server listening on http://localhost:3000/');
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket){
    socket.on('ckey', function (data){
        socket.broadcast.emit('ckey');
    });
    socket.on('ekey', function (data){
        socket.broadcast.emit('ekey');
    });
    socket.on('fkey', function (data){
        socket.broadcast.emit('fkey');
    });
    socket.on('gkey', function (data){
        socket.broadcast.emit('gkey');
    });
    socket.on('akey', function (data){
        socket.broadcast.emit('akey');
    });
    socket.on('bkey', function (data){
        socket.broadcast.emit('bkey');
    });
    socket.on('dkey', function (data){
        socket.broadcast.emit('dkey');
    });
});