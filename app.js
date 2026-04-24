const display = document.getElementById("display");

let time = 1500; 
let interval = null; 
let isRunning = false; 
let tomatoCount = 0;


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
    updateDisplay();
}

function tomatoCounter(){
    tomatoCount++;
    tomatoCounterValue.textContent = tomatoCount;
}