// your code here:
function init () {
var resetBtn = document.querySelector('#reset')
var startBtn = document.querySelector('#start')
var pauseBtn = document.querySelector('#pause')
var h1 = document.querySelector('#timer')
var seconds = 0
var counter = ""

resetBtn.addEventListener('click', clickReset)
startBtn.addEventListener('click', clickStart)
pauseBtn.addEventListener('click', clickPause)

function clickStart () {
  counter = window.setInterval(updateTime, 1000)
};

function updateTime () {
  h1.textContent= seconds;
  seconds+=1;
};

function clickPause () {
    window.clearInterval(counter);
  };

function clickReset () {
  window.clearInterval(counter);
  seconds = 0;
  h1.textContent = 'Stop Watch';
};


}

init();
