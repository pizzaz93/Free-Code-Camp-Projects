$(document).ready(function() {
  $.ajaxSetup({ cache: false });

  $("#searchBox").keypress(function(a) {
    if (a.which == 13) {
      var searchQuery = $("#searchBox").val();

      $.getJSON(
        "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" +
          searchQuery +
          "&callback=?",
        function(a) {
          console.log(a.query.search);
          $.each(a.query.search, function(i, item) {
            $("#title" + i).empty();
            $("#description" + i).empty();
            $("#title" + i).append(item.title);
            $("#description" + i).append(item.snippet);
          });
        }
      );
    }
  });
});
