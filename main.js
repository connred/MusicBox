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
    /*var sounds = {
        67 : eNote,
        69 : fNote,
        70 : fNote,
        71 : gNote,
        65 : aNote,
        66 : bNote,
        68 : dNote,
    };*/
    (document).onkeydown = function (e) {
        if (e.keyCode == 67) {
            cNote.currentTime = 0;
            cNote.play();
            console.log("test")
        }
        if (e.keyCode == 69) {
            eNote.currentTime = 0;
            eNote.play();
        }
        if (e.keycode == 70) {
            fNote.currentTime = 0;
            fNote.play();
        }
        if (e.keycode == 71) {
            gNote.currentTime = 0;
            gNote.play();
        }
        if (e.keycode == 65) {
            aNote.currentTime = 0;
            aNote.play();
            console.log("test");
        }
        if (e.keyCode == 66) {
            bNote.currentTime = 0;
            bNote.play();
        }
        if (e.keyCode == 68) {
            dNote.currentTime = 0;
            dNote.play();
        }
    };
    // -
});