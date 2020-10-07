$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  $.getJSON(
    "https://wind-bow.glitch.me/twitch-api/users/freecodecamp",
    function(a) {
      $("#FreeCC").append(a.display_name);

      $("#FCCpic").attr("src", a.logo);
      $.getJSON("https://wind-bow.glitch.me/twitch-api/users/esl_sc2", function(
        b
      ) {
        $("#Esl").append(b.display_name);
        $("#ESLpic").attr("src", b.logo);
        $.getJSON(
          "https://wind-bow.glitch.me/twitch-api/streams/esl_sc2",
          function(c) {
            if (c.stream !== null) {
              $("#statusESL").append("Online");
              $("#streamESL").append(c.stream.channel.status);
            } else {
              $("#statusESL").append("Offline");
            }

            $.getJSON(
              "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp",
              function(d) {
                if (d.stream !== null) {
                  $("#statusFCC").append("Online");
                  $("#streamFCC").append(d.stream.channel.status);
                } else {
                  $("#statusFCC").append("Offline");
                }
                $("#all").click(function() {
                  $("#FCC").show();
                  $("#ESL").show();
                });
                $("#offline").click(function() {
                  $("div:contains(Online)").hide();
                  $("div:contains(Offline)").show();
                });
                $("#online").click(function() {
                  $("div:contains(Offline)").hide();
                  $("div:contains(Online)").show();
                });
              }
            );
          }
        );
      });
    }
  );
});
