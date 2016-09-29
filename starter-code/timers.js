function init () {
var resetBtn = document.querySelector('#reset')
var startBtn = document.querySelector('#start')
var pauseBtn = document.querySelector('#pause')
var h1 = document.querySelector('#timer')
var seconds = 0
var timerID

resetBtn.addEventListener('click', clickReset)
startBtn.addEventListener('click', clickStart)
pauseBtn.addEventListener('click', clickPause)

function clickStart () {
  if (seconds === 0) {
  timerID = window.setInterval(updateTime, 1000);
}
};

function updateTime () {
  h1.textContent = "Time elapsed: " + seconds;
  seconds+=1;
};

function clickPause () {
  window.clearInterval(timerID);
  };

function clickReset () {
  clickPause();
  seconds = 0;
  h1.textContent = 'Stop Watch';
};
}

init();
