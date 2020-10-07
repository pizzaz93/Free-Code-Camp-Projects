$(document).ready(function() {
  $("#gitty").keypress(function() {
    var test = $("#gitty")[0].value;
    console.log(test);
    $("#preview").empty();
    $("#preview").append(marked(test));
  });
});
