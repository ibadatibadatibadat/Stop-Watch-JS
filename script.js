let startTime = null;
let timer = null;
const displayTime = document.getElementById("display-time");

const updateDisplay = () => {
  const currentTime = new Date().getTime();
  const elapsedMilliseconds = currentTime - startTime;

  let hours = Math.floor(elapsedMilliseconds / 3600000);
  let minutes = Math.floor((elapsedMilliseconds % 3600000) / 60000);
  let seconds = Math.floor((elapsedMilliseconds % 60000) / 1000);
  let milliseconds = elapsedMilliseconds % 1000;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  displayTime.innerHTML =
    hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
};

const watchstart = () => {
  if (timer !== null) {
    clearInterval(timer);
  }

  if (startTime === null) {
    startTime = new Date().getTime();
  }

  timer = setInterval(updateDisplay, 1);
};

const watchstop = () => {
  clearInterval(timer);
};

const watchreset = () => {
  clearInterval(timer);
  startTime = null;
  displayTime.innerHTML = "00:00:00:000";
};

// let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// let display_time = document.getElementById("display-time");
// let timer = null;
// const stopwatch = () => {
//   milliseconds += 60;
//   if (milliseconds == 60) {
//     milliseconds = 0;
//     // milliseconds * seconds;
//     seconds++;
//     if (seconds == 60) {
//       seconds = 0;
//       minutes++;
//       if (minutes == 60) {
//         minutes = 0;
//         hours++;
//       }
//     }
//   }
//   let hrs = hours < 10 ? "0" + hours : hours;
//   let min = minutes < 10 ? "0" + minutes : minutes;
//   let sec = seconds < 10 ? "0" + seconds : seconds;
//   let milsec = milliseconds < 10 ? "0" + milliseconds : milliseconds;

//   display_time.innerHTML = hrs + ":" + min + ":" + sec + ":" + milsec + ".";
// };
// const watchstart = () => {
//   if (timer != null) {
//     clearInterval(timer);
//   }
//   timer = setInterval(stopwatch, 1000);
// };
// const watchstop = () => {
//   clearInterval(timer);
// };
// const watchreset = () => {
//   clearInterval(timer);
//   [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//   display_time.innerHTML = "00:00:00:00";
// };
