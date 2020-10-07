$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  $("#30").click(function() {
    $.getJSON(
      "https://fcctop100.herokuapp.com/api/fccusers/top/recent",
      function(a) {
        for (var k = 0; k < 100; k++) {
          $("#avatar" + k).empty();
          $("#username" + k).empty();
          $("#recent" + k).empty();
          $("#time" + k).empty();
        }
        for (var i = 0; i < 100; i++) {
          $("#avatar" + i).attr("src", a[i].img);
          $("#username" + i).append(a[i].username);
          $("#recent" + i).append("Recent: " + a[i].recent);
          $("#time" + i).append("All-Time: " + a[i].alltime);
        }
      }
    );
    $("#high").click(function() {
      $.getJSON(
        "https://fcctop100.herokuapp.com/api/fccusers/top/alltime",
        function(b) {
          for (var k = 0; k < 100; k++) {
            $("#avatar" + k).empty();
            $("#username" + k).empty();
            $("#recent" + k).empty();
            $("#time" + k).empty();
          }
          for (var j = 0; j < 100; j++) {
            $("#avatar" + j).attr("src", b[j].img);
            $("#username" + j).append(b[j].username);
            $("#recent" + j).append("Recent: " + b[j].recent);
            $("#time" + j).append("All-Time: " + b[j].alltime);
          }
        }
      );
    });
  });
});
