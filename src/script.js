(function () {
  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");
  var second = document.getElementById("sec");

  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var reset = document.getElementById("reset");

  var countDownTimer = null;

  start.addEventListener("click", function () {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      return null;
    }

    function startInterval() {
      start.style.display = "none";
      stop.style.display = "initial";

      countDownTimer = setInterval(() => {
        timer();
      }, 1000);
    }
    startInterval();
  });

  function stopInterval() {
    clearInterval(countDownTimer);
    stop.style.display = "none";
    start.style.display = "initial";
  }
  function timer() {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      history.value = "";
      minute.value = "";
      second.value = "";
      stopInterval();
    } else if (second.value != 0) {
      second.value = `${second.value <= 10 ? "0" : ""}${second.value - 1}`;
    } else if (minute.value != 0 && second.value == 0) {
      second.value = 59;
      minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
    } else if (hour.value != 0 && minute.value == 0) {
        minute.value = 60;
        hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
      }
  }
})();
