let isRunning = false;
let playButton = document.getElementById("start-stop");
let resetButton = document.getElementById("reset");
let timer = document.getElementById("timer");
let workButton = document.getElementById("work");
let sBreakButton = document.getElementById("short-break");
let lBreakButton = document.getElementById("long-break");
let work= 25*60;
let s_break = 5*60;
let l_break = 15*60;
let timeLeft=work;
let timeLeftId=work;
let timerInterval;
function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.textContent =
      String(minutes).padStart(2, '0') + ":" +
      String(seconds).padStart(2, '0');
}
function start_stop() {
    if(isRunning){
        isRunning = false;
        playButton.style.backgroundImage = "url('images/play.png')";
        clearInterval(timerInterval);
    }
    else{
        isRunning = true;
        playButton.style.backgroundImage = "url('images/pause.png')";
        timerInterval = setInterval(() => {
            if (isRunning) {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                }
                else{
                    clearInterval(timerInterval);
                    reset;
                }
            }
        }, 1000);
    }
}
function reset(){
    isRunning = false;
    playButton.style.backgroundImage = "url('images/play.png')";
    const minutesId = Math.floor(timeLeftId/60);
    const secondsId = timeLeftId % 60;
    timer.textContent =
        String(minutesId).padStart(2,'0') + ":" +
        String(secondsId).padStart(2,'0');
    timeleft = timeLeftId;
    clearInterval(timerInterval);
}
function setWork(){
    timeLeft = work;
    timeLeftId = work;
    updateDisplay();
    isRunning = false;
    playButton.style.backgroundImage = "url('images/play.png')";
    clearInterval(timerInterval);
    workButton.style.backgroundColor = "#ffd0d0";
    sBreakButton.style.backgroundColor = "lemonchiffon";
    lBreakButton.style.backgroundColor = "lemonchiffon";
}
function setShortBreak(){
    timeLeft = s_break;
    timeLeftId = s_break;
    updateDisplay();
    isRunning = false;
    playButton.style.backgroundImage = "url('images/play.png')";
    clearInterval(timerInterval);
    workButton.style.backgroundColor = "lemonchiffon";
    sBreakButton.style.backgroundColor = "#ffd0d0";
    lBreakButton.style.backgroundColor = "lemonchiffon";
}
function setLongBreak(){
    timeLeft = l_break;
    timeLeftId = l_break;
    updateDisplay();
    isRunning = false;
    playButton.style.backgroundImage = "url('images/play.png')";
    clearInterval(timerInterval);
    workButton.style.backgroundColor = "lemonchiffon";
    sBreakButton.style.backgroundColor = "lemonchiffon";
    lBreakButton.style.backgroundColor = "#ffd0d0";
}