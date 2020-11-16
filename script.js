// var video = document.getElementsByTagName("video"),

var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");


var video;
    
window.onload = function() {
	video = document.getElementById("videoPlayer");
};
        
// pauseButton.bind('click', function() {
// 			if (video.get(0).paused) {
// 				video.get(0).play();
// 				pauseButton.html("&#x25fC");
// 		} else {
// 				video.get(0).pause();
// 				pauseButton.html("&#x25BA");
// 		}
// });

function play() {
    video.play();
    playButton.classList.add('visually-hidden');
    pauseButton.classList.remove('visually-hidden');
}

function pause() {
    video.pause();
    playButton.classList.remove('visually-hidden');
    pauseButton.classList.add('visually-hidden');
}


// TODO: ловить клик по плэй и добавлять класс хиден, добавлять ццклас визибл паузе  
