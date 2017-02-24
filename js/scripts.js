//global variables
var resultArray = [];
var testArray =[""];

//global functions
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
    var originalNumber = '<span class="original">'+(j+1)+"</span>"
    $("#results").append("<h4>"+originalNumber+" "+numberToScreen+"<h4>").hide().fadeIn();
  };
};

var find15 = function (){
  for (var j=0; j<resultArray.length; j++){
    if (Number.isInteger(resultArray[j]/15)) {
      resultArray.splice(j,1,"ping-pong");
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
    // display Array test
    console.log(testArray.length);
    for (var a=1;a<13;a++){
    $("#displayArray").append('<div class="grid">'+testArray[0]+"</div>");
    };




    var inputNumber = parseInt($("input#numbers").val());
    makeNumberList(inputNumber);
    find15();
    find5();
    find3();
    displayNumberList(resultArray);
    $("#numberList").trigger("reset");
  });
});
