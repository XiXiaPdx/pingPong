var resultArray = [];
var makeNumberList = function (number) {
  resultArray=[];
  for (var i=1; i<=number; i++) {
  resultArray.push(i);
  }
};

var displayNumberList = function (list) {
    $("#results").empty();
  for (var j=0; j<list.length; j++){

    var numberToScreen = list[j];
    var originalNumber = '<span class="original">'+j+"</span>"
    console.log(numberToScreen);
  $("#results").append("<h2>"+originalNumber+" "+numberToScreen+"<h2>");
  };
};

var find15 = function (){
  for (var j=0; j<resultArray.length; j++){
    if (Number.isInteger(resultArray[j]/15)) {
      resultArray.splice(j,1,"ping pong");
    }
  };
};

var find5 = function (){
  for (var j=0; j<resultArray.length; j++){
    if (Number.isInteger(resultArray[j]/5)) {
      resultArray.splice(j,1,"pong");
    }
  };
};

var find3 = function (){
  for (var j=0; j<resultArray.length; j++){
    if (Number.isInteger(resultArray[j]/3)) {
      resultArray.splice(j,1,"ping");
    }
  };
};


$(document).ready(function (){
  $("#numberList").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#numbers").val());
    makeNumberList(inputNumber);
    find15();
    find5();
    find3();
    displayNumberList(resultArray);
    $("#numberList").trigger("reset");
  });
});
