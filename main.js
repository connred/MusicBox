$(document).ready(function () {
    var cNote = document.getElementById('cAudio');
    var dNote = document.getElementById('dAudio');
    var eNote = document.getElementById('eAudio');
    var fNote = document.getElementById('fAudio');
    var gNote = document.getElementById('gAudio');
    var aNote = document.getElementById('aAudio');
    var bNote = document.getElementById('bAudio');

    
    $('#c').mouseover(function () {
        cNote.currentTime = 0;
        cNote.play();
    });
    $('#e').mouseover(function () {
        eNote.currentTime = 0;
        eNote.play();
    });
    $('#f').mouseover(function () {
        fNote.currentTime = 0;
        fNote.play();
    });
    $('#g').mouseover(function () {
        gNote.currentTime = 0;
        gNote.play();
    });
    $('#a').mouseover(function () {
        cNote.currentTime = 0;
        cNote.play();
    });
    $('#b').mouseover(function () {
        cNote.currentTime = 0;
        cNote.play();
    });
    $('#d').mouseover(function () {
        dNote.currentTime = 0;
        dNote.play();
    });
    // Keyboard Button sound Testing
    var sounds = {
        67 : 'cAudio',
        69 : 'eAudio',
        70 : 'fAudio',
        71 : 'gAudio',
        65 : 'aAudio',
        66 : 'bAudio',
        68 : 'dAudio',
    };
    (document).onkeydown = function(e) {
        var soundId = sounds[e.keyCode];
        if('67') document.getElementById('cAudio').play();
        if('69') document.getElementById('eAudio').play();
        if('70') document.getElementById('fAudio').play();
        if('71') document.getElementById('gAudio').play();
        if('65') document.getElementById('aAudio').play();
        if('66') document.getElementById('bAudio').play();
        if('68') document.getElementById('dAudio').play();
        else console.log("key not mapped : code is", e.keyCode);
    };
    // -
});