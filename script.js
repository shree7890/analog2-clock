// element selector

const hour = document.getElementById("hour");
const miniute = document.getElementById("miniute");
const second = document.getElementById("second");

// clock in function

let deg = 6;

function analogClock() {
  const day = new Date();
  const hourRotation = day.getHours() * 30;
  const miniuteRotation = day.getMinutes() * deg;
  const secondRotation = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hourRotation + miniuteRotation / 12}deg)`;
  miniute.style.transform = `rotateZ(${miniuteRotation}deg)`;
  second.style.transform = `rotateZ(${secondRotation}deg)`;
}

setInterval(analogClock);
