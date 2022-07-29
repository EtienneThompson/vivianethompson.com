let seconds = 5;

document.getElementById("countdown-text").innerText = `You will be automatically redirected in ${seconds} seconds.`;

setInterval(function () {
  if (seconds === 0) {
    return;
  }

  seconds = seconds - 1;
  document.getElementById("countdown-text").innerText = `You will be automatically redirected in ${seconds} seconds.`;
}, 1000);

setTimeout(function () {
  window.location.href = "https://vivianethompson.com";
}, 5000);
