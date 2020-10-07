$(document).ready(function() {
  
  $.ajaxSetup({ cache: false });

$("#requote").on('click', function(e) {
$("#qtitle").empty();
 $("#qcontent").empty();

  var ogContent = " ";
  var content = " ";
  var qweet = " ";
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(a){

 $("#qtitle").append(a[0].title);
 $("#qcontent").append(a[0].content);  

ogContent = a[0].content;
  content = ogContent.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
 qweet =  a[0].title + " " + content;
  $("#tweeter").attr("href","https://twitter.com/intent/tweet?text=" + qweet +"&via=peretzcohen" );
});

});
 

});


