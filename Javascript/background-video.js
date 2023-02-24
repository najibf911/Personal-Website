var video = document.getElementById("myVideo");
video.addEventListener("ended", function() {
video.currentTime = 0;
video.playbackRate = -1;
video.play();
}, false);
