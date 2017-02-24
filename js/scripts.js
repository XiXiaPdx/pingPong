//global variables
var resultArray = [];
var testArray =[""];

//global functions
var makeNumberList = function (number) {
  resultArray=[];
  for (var i=1; i<=number; i++) {
  resultArray.push([i,'<div class="grid">']);
  }
  console.log(resultArray);
};

var displayNumberList = function (list) {
    $("#results").empty();
  for (var j=0; j<list.length; j++){
    var numberToScreen = list[j][0];
    var gridClass= list[j][1];
    var originalNumber = '<span class="original">'+(j+1)+"</span>"
    $("#displayArray").append(gridClass+originalNumber+" "+numberToScreen+"</div>").hide().fadeIn();
  };
};

var find15 = function (){
  for (var j=0; j<resultArray.length; j++){
    if (Number.isInteger((resultArray[j][0])/15)) {
      resultArray[j].splice(0,1,'<span class="pingPong">'+"ping-pong"+'</span>');
      resultArray[j].splice(1,1,'<div class="grid gridPingPong">');
    }
  };
};

var find5 = function (){
  for (var j=0; j<resultArray.length; j++){
    if (Number.isInteger((resultArray[j][0])/5)) {
      resultArray[j].splice(0,1,'<span class="Pong">'+"pong"+'</span>');
      resultArray[j].splice(1,1,'<div class="grid gridPong">');
    }
  };
  };

var find3 = function (){
  for (var j=0; j<resultArray.length; j++){
    if (Number.isInteger((resultArray[j][0])/3)) {
      resultArray[j].splice(0,1,'<span class="Ping">'+"pong"+'</span>');
      resultArray[j].splice(1,1,'<div class="grid gridPing">');
    }
  };
  };


$(document).ready(function (){
  $("#numberList").submit(function(event) {
    event.preventDefault();
    // make array inside Array
    var testArray = [[1,2]];
    testArray[0].splice(1,1,"ping-pong");
    console.log (testArray);

    var inputNumber = parseInt($("input#numbers").val());
    makeNumberList(inputNumber);
    find15();
    find5();
    find3();
    displayNumberList(resultArray);
    $("#numberList").trigger("reset");
  });
});
