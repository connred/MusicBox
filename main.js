$(document).ready(function () {
    var cNote = document.getElementById('cAudio');
    var dNote = document.getElementById('dAudio');
    var eNote = document.getElementById('eAudio');
    var fNote = document.getElementById('fAudio');
    var gNote = document.getElementById('gAudio');
    var aNote = document.getElementById('aAudio');
    var bNote = document.getElementById('bAudio');
    //
    var socket = io.connect();
    //
    $('#c').mouseover(function () {
        cNote.currentTime = 0;
        cNote.play();
        socket.emit('ckey')
    });
    $('#e').mouseover(function () {
        eNote.currentTime = 0;
        eNote.play();
        socket.emit('ekey')
    });
    $('#f').mouseover(function () {
        fNote.currentTime = 0;
        fNote.play();
        socket.emit('fkey')
    });
    $('#g').mouseover(function () {
        gNote.currentTime = 0;
        gNote.play();
        socket.emit('gkey')
    });
    $('#a').mouseover(function () {
        aNote.currentTime = 0;
        aNote.play();
        socket.emit('akey')
    });
    $('#b').mouseover(function () {
        bNote.currentTime = 0;
        bNote.play();
        socket.emit('bkey')
    });
    $('#d').mouseover(function () {
        dNote.currentTime = 0;
        dNote.play();
        socket.emit('dkey')
    });
    //
    socket.on('ckey', function(data){
        cNote.currentTime = 0;
        cNote.play();
    });
    socket.on('ekey', function(data){
        eNote.currentTime = 0;
        eNote.play();
    });
    socket.on('fkey', function(data){
        fNote.currentTime = 0;
        fNote.play();
    });
    socket.on('gkey', function(data){
        gNote.currentTime = 0;
        gNote.play();
    });
    socket.on('akey', function(data){
        aNote.currentTime = 0;
        aNote.play();
    });
    socket.on('bkey', function(data){
        bNote.currentTime = 0;
        bNote.play();
    });
    socket.on('dkey', function(data){
        dNote.currentTime = 0;
        dNote.play();
    });
    //
    (document).onkeydown = function (e) {
        console.log('Pressed' +  e.keyCode);
        if (e.keyCode == 67) {
            cNote.currentTime = 0;
            cNote.play();
            socket.emit('ckey')
        }
        if (e.keyCode == 69) {
            eNote.currentTime = 0;
            eNote.play();
            socket.emit('ekey')
        }
        if (e.keyCode == 70) {
            fNote.currentTime = 0;
            fNote.play();
            socket.emit('fkey')
        }
        if (e.keyCode == 71) {
            gNote.currentTime = 0;
            gNote.play();
            socket.emit('gkey')
        }
        if (e.keyCode == 65) {
            aNote.currentTime = 0;
            aNote.play();
            socket.emit('akey')
        }
        if (e.keyCode == 66) {
            bNote.currentTime = 0;
            bNote.play();
            socket.emit('bkey')
        }
        if (e.keyCode == 68) {
            dNote.currentTime = 0;
            dNote.play();
            socket.emit('dkey')
        }
    };
});
