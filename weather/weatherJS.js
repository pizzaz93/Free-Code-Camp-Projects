$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var log = position.coords.longitude;

      var flatLat = Math.round(lat);
      var flatLog = Math.round(log);

      var urlLocation =
        "//nominatim.openstreetmap.org/reverse?json_callback=?&format=json";

      var urlWeather =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        flatLat +
        "&lon=" +
        flatLog;
      $.getJSON(urlLocation, { lat: lat, lon: log }, function(b) {
        var location = b.address.city + ", " + b.address.state;
        $("#location").append(location);
      });
      $.getJSON(urlWeather, function(a) {
        var tempaturePure = a.main.temp;
        var tempature = Math.round(tempaturePure);
        var weather = a.weather[0].description;
        var picLink = a.weather[0].icon;
        var farenheightPure = (tempature + 32) / 0.5556;
        var farenheight = Math.round(farenheightPure);

        $("#celsius").append(tempature + " C");
        $("#weather").append(weather);
        $("#pic").attr("src", picLink);
        $("#farenheight").append(farenheight + " F");

        $("button").click(function() {
          $("#celsius").toggle();
          $("#farenheight").toggle();
        });
      });
    });
  }
});
