function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.disabled = false;

const colorTimer = {
  intervalId: null,
  start() {
    this.intervalId = setInterval(
      () => (body.style.backgroundColor = getRandomHexColor()),
      1000
    );
  },

  stop() {
    clearInterval(this.intervalId);
  },
};

startBtn.addEventListener('click', onStartClick);
stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  colorTimer.start();
  stopBtn.disabled = false;
  startBtn.disabled = true;
}

function onStopClick() {
  colorTimer.stop();
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
