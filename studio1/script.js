(function() {
    'use strict';

    //input values
    const fplay = document.querySelector('.fa-play');
    const fpause = document.querySelector('.fa-pause');
    const video = document.querySelector('video');

    //sound
    const music = new Audio('sounds/pcs.mp3');

    //play video and music
    fplay.addEventListener('click', function(){
        video.play();
        music.play();
        music.loop = true;
        fplay.style.display = "none";
        fpause.style.display = "inline";
    })

    //pause video and music
    fpause.addEventListener('click', function(){
        video.pause();
        music.pause();
        fplay.style.display = "inline";
        fpause.style.display = "none";
    })

    //input values
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');

    const lyrics = {
        start: [0, 6, 13, 19],
        stop: [25, 25, 25, 25],
        line: [line1, line2, line3, line4]
    }

    const intervalID = setInterval(checkTime, 1000);

    //timed lyrics
    function checkTime() {
        console.log(parseInt(video.currentTime));
      
        for (let i = 0; i < lyrics.start.length; i++) {
          if (lyrics.start[i] < video.currentTime && video.currentTime < lyrics.stop[i]) {
            lyrics.line[i].className = "showing";
          } else {
            lyrics.line[i].className = "hidden";
          }
        }
      }
      
    
})()