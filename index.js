var started = false
var x = 0
var y = 0
var score = 0
var timeout
$(document).keypress(function () {
    if (!started) {
        next_seq();
        $(".gover").text("")
        $(".in").removeClass("start")
        $(".score").removeClass("start")
        $(".sub").removeClass("start")
        started = true;
    }
});
function next_seq() {
    x = Math.floor(Math.random() * 20) + 1
    y = Math.floor(Math.random() * 10) + 1
    $(".mul").text("What is " + x + " muitiply " + y + "?")
    timeout = setTimeout(() => {
        check()
    }, 10000);

}

function submit(value) {
    clearTimeout(timeout)
    if (value == "Submit") {
        check()
    }
}


function check() {
    let ans = parseInt($(".in").val())
    $(".in").val('')
    if (ans == x * y) {
        score++
        var audio = new Audio("sounds//correct.mp3");
        audio.play();
        $(".score").text("SCORE :: " + score)
        next_seq()
    }
    else {
        score--
        if (score > 0) {
            $(".score").text("SCORE :: " + score)
            var audio = new Audio("sounds//wrong.mp3");
            audio.play();
            next_seq()
        }
        else if (score <= 0) {
            score = 0
            $(".mul").text("GAME OVER!!!")
            gover()
            $(".container").addClass("game-over")
            setTimeout(function () {
                $(".container").removeClass("game-over");
            }, 100);
            setTimeout(function () {
                var audio = new Audio("sounds//gameover.mp3");
                audio.play();
            }, 500);

            started = false
        }

    }
}

function gover() {

    $(".gover").text("Press a key to start")
    $(".in").addClass("start")
    $(".score").addClass("start")
    $(".sub").addClass("start")
}