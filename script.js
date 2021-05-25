console.log('Project Timer');

const startBtn = document.querySelector('#startBtn');
const timeDuration = document.querySelector('#timeDuration');
const pauseBtn = document.querySelector('#pauseBtn');
const circle = document.querySelector('circle');
const perimeter = 2 * circle.getAttribute('r') * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;
const timer = new Timer(timeDuration, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log('Timer is completed');
  },
});
