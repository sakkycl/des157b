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

      //input values
      const fstepback = document.querySelector('.fa-step-backward');
      const fstepfor = document.querySelector('.fa-step-forward');
      const myVideos = [
        { src: "media/fishy.MP4", poster: "images/fishy.jpg" },
        { src: "media/fishy2.MP4", poster: "images/fishy2.jpg" },
        { src: "media/fishy3.MP4", poster: "images/fishy3.jpg" }
      ];
      let currentIndex = 0;
      const main = document.querySelector('main');

      //step forward video and music
      fstepfor.addEventListener('click', function(){
        currentIndex = (currentIndex + 1) % myVideos.length;
        video.src = myVideos[currentIndex].src;
        video.poster = myVideos[currentIndex].poster;
        video.load();
        fplay.style.display = "inline";
        fpause.style.display = "none";
        music.pause();
        music.currentTime = 0;
        music.load();
      })

      //step backward video and music
      fstepback.addEventListener('click', function(){
        currentIndex = (currentIndex - 1 + myVideos.length) % myVideos.length;
        video.src = myVideos[currentIndex].src;
        video.poster = myVideos[currentIndex].poster;
        video.load();
        fplay.style.display = "inline";
        fpause.style.display = "none";
        music.pause();
        music.currentTime = 0;
        music.load();
      })

      //loading screen
      const loading = document.querySelector('.fa-fish');
      video.addEventListener('playing', function() {
        loading.style.display = 'none';
      })
      
})()