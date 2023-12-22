function checkAnswer1() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value.toLowerCase() === "paris") {
        window.location.href = "q2.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function checkAnswer2() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value === "42") {
        window.location.href = "q3.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function checkAnswer3() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value === "true") {
        window.location.href = "q4.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function checkAnswer4() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value === "william shakespeare" || userInputElement.value === "shakespeare") {
        window.location.href = "q5.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function checkAnswer5() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value === "jupiter") {
        window.location.href = "q6.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function checkAnswer6() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value === "1912") {
        window.location.href = "q7.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function checkAnswer7() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value === "leonardo da vinci" || userInputElement.value === "da vinci") {
        window.location.href = "q8.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function checkAnswer8() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value === "h2o") {
        window.location.href = "q9.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function checkAnswer9() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value === "yen" || userInputElement.value === "japanese yen" || userInputElement.value === "yens") {
        window.location.href = "q10.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function checkAnswer10() {
    var userInputElement = document.getElementById('userInput');
    if (userInputElement && userInputElement.value === "1989") {
        window.location.href = "congratulations.html";
    }
    else {
        alert("Wrong answer! Try again!");
        removeLife();
    }
}
function startTimer(duration, display) {
    var timer = duration;
    var interval = setInterval(function () {
        display.textContent = timer.toString();
        if (timer <= 0) {
            clearInterval(interval);
            removeLife();
        }
        timer--;
    }, 1000);
}
function removeLife() {
    var lifeElement = document.getElementById('life');
    if (lifeElement) {
        var currentContent = lifeElement.innerHTML;
        var newContent = currentContent.slice(0, -1);
        lifeElement.innerHTML = newContent;
    }
}
window.onload = function () {
    var timerDisplay = document.getElementById('timer');
    startTimer(10, timerDisplay);
};
document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        window.location.href = "q1.html";
    }
});
function start() {
    window.location.href = "q1.html";
}
