let timer ;//this will store setInterval
let seconds=0;
isRunning=false;//a flag to check the clock is running or not
//lets grab the html elements >..<
const display=document.getElementById("display");
const startBtn=document.getElementById("start");
const stopBtn=document.getElementById("stop");
const resetBtn=document.getElementById("reset");
//formatting time (calculate, hour, min through seconds as a parameter)
function formatTime(s){
    const hrs=String(Math.floor(s/3600)).padStart(2,'0');//padstart(2,'0') used for to make sure its always  makes two digits
    const mins=String(Math.floor((s%3600)/60)).padStart(2,'0');
    const secs=String(s%60).padStart(2,'0');
    return `${hrs}:${mins}:${secs}`;
}
//function to update the display
function updateDisplay(){
    display.textContent=formatTime(seconds);
}
//start  button logic
startBtn.addEventListener("click",()=>{
    if (!isRunning){
        isRunning=true;
        timer=setInterval(()=>{
seconds++;
updateDisplay();
        },1000);
    }
});
//stop button logic
stopBtn.addEventListener("click",()=>{
isRunning=false;
clearInterval(timer);
});
//reset button logic
resetBtn.addEventListener("click",()=>{
isRunning=false;
clearInterval(timer);
seconds=0;
updateDisplay();
});
updateDisplay();