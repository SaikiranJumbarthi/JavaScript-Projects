// script.js
let timer;
let startTime;
let running = false;
let elapsedTime = 0;

const display = document.querySelector('.display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapTimes = document.getElementById('lapTimes');

startStopBtn.addEventListener('click', function() {
  if (running) {
    clearInterval(timer);
    running = false;
    startStopBtn.textContent = 'Start';
  } else {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
    running = true;
    startStopBtn.textContent = 'Stop';
  }
});

resetBtn.addEventListener('click', function() {
  clearInterval(timer);
  running = false;
  startStopBtn.textContent = 'Start';
  display.textContent = '00:00:00';
  elapsedTime = 0;
  lapTimes.innerHTML = '';
});

lapBtn.addEventListener('click', function() {
  const lapTime = formatTime(elapsedTime);
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapTimes.appendChild(lapItem);
});

function updateDisplay() {
  const elapsed = Date.now() - startTime;
  display.textContent = formatTime(elapsed);
  elapsedTime = elapsed;
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);
  return `${padTime(minutes)}:${padTime(seconds)}:${padTime(millisecondsFormatted)}`;
}

function padTime(time) {
  return time.toString().padStart(2, '0');
}
