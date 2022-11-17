var count = 0;
var max = 3;

var video = document.getElementById("player");

var vid1 = "./assets/videos/mariokart.mp4";
var vid2 = "./assets/videos/MarioOdyssey.mp4";
var vid3 = "./assets/videos/wiisports.mp4";

function nextvid() {
    if (count < max) {
        count = count + 1

        if (count == 1) {
            document.getElementById("player").src = vid1
        };

        if (count == 2) {
            document.getElementById("player").src = vid2
        };
        if (count == 3) {
            document.getElementById("player").src = vid3
        };

    } else {
        count = 1
        document.getElementById("player").src = vid1
    }
}