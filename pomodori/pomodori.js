$(document).ready(function() {
  var session = 25;
  var brakeTime = 5;
  var wminutes = 25;
  var breakTime = 5;
  var btimer = breakTime * 60;
  var timer = wminutes * 60; // seconds
  var timeLapseb = breakTime * 1000 / breakTime;
  var timeLapse = wminutes * 1000 / wminutes;
  var seconds = 0;
  $("#session").append(session);
  $("#breakTime").append(brakeTime);

  $("#more").click(function() {
    $("#session").empty();
    session += 1;
    wminutes += 1;
    timer = wminutes * 60;
    timeLapse = wminutes * 1000 / wminutes;
    $("#session").append(session);
  });

  $("#less").click(function() {
    $("#session").empty();
    session -= 1;
    wminutes -= 1;
    timer = wminutes * 60;
    timeLapse = wminutes * 1000 / wminutes;
    $("#session").append(session);
  });

  $("#more1").click(function() {
    $("#breakTime").empty();
    brakeTime += 1;
    breakTime += 1;
    btimer = breakTime * 60;
    timeLapseb = breakTime * 1000 / breakTime;
    $("#breakTime").append(brakeTime);
  });

  $("#less1").click(function() {
    $("#breakTime").empty();
    brakeTime -= 1;
    breakTime -= 1;
    btimer = breakTime * 60;
    timeLapseb = breakTime * 1000 / breakTime;
    $("#breakTime").append(brakeTime);
  });

  function breaktime() {
    var breakTimer = setInterval(function() {
      $("#break").html(Math.floor(btimer / 60) + ":" + seconds);

      btimer--;
      seconds--;

      if (btimer == -1) {
        clearInterval(breakTimer);
        return;
      }
      if (seconds <= 0 && btimer !== 0) {
        seconds = 59;
      }
    }, timeLapseb);
  }
  $("#start").click(function() {
    var pomodoro = setInterval(function() {
      $("#time").html(Math.floor(timer / 60) + ":" + seconds);

      seconds--;
      if (seconds <= 0 && timer !== 0) {
        seconds = 59;
      }
      timer--;
      if (timer == -1) {
        clearInterval(pomodoro);
        breaktime();
        return;
      }
    }, timeLapse);
  });

  //add note , need to reset refresh the page ,first set time then click start or else refresh and try again  clicking twice makes it go double speed;
  // make more and less buttons work
});
