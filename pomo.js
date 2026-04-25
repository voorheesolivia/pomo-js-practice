const display = document.getElementById("display");

let time = 1500; 
let interval = null; 
let isRunning = false; 
let tomatoCount = 0;
let shortClick = false; 
let longClick = false;
let pomodoroClick = false;
let skipCount = 0;


function updateDisplay(){
    let minutes = Math.floor(time / 60); 
    let seconds = Math.floor(time % 60);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    display.textContent = `${minutes}: ${seconds}`;
}

function start(){
    if (!isRunning){
        isRunning = true; 

        interval = setInterval(() => {
            if (time > 0){
                time--;
                updateDisplay();
            } else {
                clearInterval(interval);
                isRunning = false; 
                display.textContent = "Time is up!"
                tomatoCounter();
            }
        }
        , 1000);
    }
}

function stop(){
    isRunning = false; 
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
    time = 25 * 60;
    isRunning = false; 
    updateDisplay();
}

function skip(){
    clearInterval(interval);
    time = 25 * 60; 
    isRunning = false; 
    skipCounter();
    updateDisplay();
}

function tomatoCounter(){
    tomatoCount++;
    tomatoCounterValue.textContent = tomatoCount;
}

function skipCounter(){
    skipCount++; 
    skipCounterValue.textContent = skipCount;
}

function shortbreak(element){
    time = 5 * 60; 
    updateDisplay();
    shortClick = true;
    buttonColor1(element);
    stop();
}

function longbreak(element){
    time = 10 * 60;
    updateDisplay();
    longClick = true;
    buttonColor2(element);
    stop();
}

function pomodoro(element){
    time = 25 * 60;
    updateDisplay();
    pomodoroClick = true;
    buttonColor3(element);
    stop();
}

function buttonColor1(clicked){
    document.querySelectorAll("#breaktimes h1").forEach(btn => {
        btn.style.backgroundColor = "hsl(8, 45%, 69%)";
    });

    if (shortClick){
        clicked.style.backgroundColor = "hsl(8, 45%, 59%)";
    }
}

function buttonColor2(clicked){
    document.querySelectorAll("#breaktimes h1").forEach(btn => {
        btn.style.backgroundColor = "hsl(8, 45%, 69%)";
    });

    if (longClick){
        clicked.style.backgroundColor = "hsl(8, 45%, 59%)";
    }
}

function buttonColor3(clicked){
    document.querySelectorAll("#breaktimes h1").forEach(btn => {
        btn.style.backgroundColor = "hsl(8, 45%, 69%)";
    });

    if (pomodoroClick){
        clicked.style.backgroundColor = "hsl(8, 45%, 59%)";
    }
}