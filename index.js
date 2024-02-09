let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    progress = document.getElementById("progress");
    song = document.getElementById("song");
    ctrlIcon = document.getElementById("ctrlIcon");

    song.onloadeddata = function () {
        progress.max = song.duration;
        progress.value = 0;
    }
    song.addEventListener('timeupdate', function () {
        progress.value = song.currentTime;
    });
    progress.onchange=function(){
        song.play();
        song.currentTime=progress.value;
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }

});


