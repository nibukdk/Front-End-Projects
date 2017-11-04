$(document).ready(function() {
  var seconds = 59;
  var defaultValue = 24;
  var breakTime = 5;
  var newDefaultTime = 0;
  var newBreakTime = 0;
  var minutes = 0;
  var isPaused = false;
  var counter = 1;

  //Value after submit button being clicked
  /*$('.submit').on('click', function() {
    newDefaultTime = $('#workTime').val();
    newBreakTime = $('#breakTime').val();
    breakTime = newBreakTime;
    defaultValue = newDefaultTime;
    });
*/
  //Function to creake clock
  function workTimeCalculator() {
    /*  this.defaultValue = defaultValue;
      this.defaultValue = breakTime;*/
    $('#seconds').html(seconds);
    $('#minutes').html(defaultValue);
    if (isPaused === false) {
      seconds = seconds - 1;
      if (seconds === 0) {
        defaultValue = defaultValue - 1;
        seconds = 59;
      }
    }
    if (defaultValue < 0) {
      breakTimeCalculator();
      counter = counter + 1;
    }
  };
  $('.pause').on('click', function(e) {
    isPaused = !isPaused;

  });
  $('.start').on('click', function(e) {
    isPaused = false;
    let timer = setInterval(workTimeCalculator, 1000);
    if (seconds <= 0) {
      clearInterval(timer);
    }

  });

  function breakTimeCalculator() {
    /*  this.defaultValue = defaultValue;
      this.defaultValue = breakTime;*/
    $('#seconds').html(seconds);
    $('#minutes').html(breakTime);
    $('.pomodoro-time').html('BreakTime');

    if (isPaused === false) {
      seconds = seconds - 1;
      if (seconds === 0) {
        breakTime = breakTime - 1;
        seconds = 59;
      }
    }
    if (breakTime < 0) {
      if (counter === 3) {
        return 0;
      } else {
        workTimeCalculator();
      }
    };


  }
});
