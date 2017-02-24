$(document).ready(function (){
  $("#numberList").submit(function(event) {
    $("#results").empty();
    event.preventDefault();
    var inputNumberList = parseInt($("input#numbers").val());
    $("#results").append("<h1>"+inputNumberList+"</h1>");
    $("#numberList").trigger("reset");
  });

});
