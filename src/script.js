(function () {
  var hour = document.getElementById("hour");
  var minute = document.getElementById("minute");
  var second = document.getElementById("sec");

  var start = document.getElementById("start");
  var pause = document.getElementById("stop");
  var reset = document.getElementById("reset");

  var countDownTimer = null;

  start.addEventListener("click", function () {
    if (hour.value == 0 && minute.value == 0 && second.value == 0) {
      return null;
    }

    function startInterval() {
      start.style.display = "none";
      pause.style.display = "initial";

      countDownTimer = setInterval(() => {
        timer();
      }, 1000);
    }
    startInterval();
  });

  pause.addEventListener("click", function () {
    stopInterval("pause");
  });

  reset.addEventListener("click", function () {
    stopInterval();
    hour.value = "";
    minute.value = "";
    second.value = "";
  });

  function stopInterval(type) {
    if (type === "pause") {
      start.innerHTML ="Continue";
    }
    clearInterval(countDownTimer);
    pause.style.display = "none";
    start.style.display = "initial";
  }

  function timer() {
    if (second.value > 60) {
      minute.value++;
      second.value = parseInt(second.value) - 59;
    }
    if (minute.value > 60) {
      hour.value++;
      minute.value = parseInt(minute.value) - 60;
    }
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
