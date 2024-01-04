var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
level = 1;
started = false;

function playSound(name) {

    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    userClickedPattern = [];
    $("#level-title").text("Level " + level);
    level = level + 1;
    randomNumber = Math.floor(Math.random() * 4) + 0;
    randomchoosenstuff = buttonColours[randomNumber]
    gamePattern.push(randomchoosenstuff);
    animatePress(randomchoosenstuff);
    playSound(randomchoosenstuff)
}


$(".btn").on("click", function () {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
}
);

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }
    }
    else {
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        playSound("wrong")
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        startOver();

    }
}



$(document).on('keypress', function (e) {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function startOver() {
    level = 1
    gamePattern = []
    started = false

}