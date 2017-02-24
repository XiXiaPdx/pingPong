//global variables
var resultArray = [];
var testArray =[""];

//business logic

//takes initial number and makes it into an array list. Each array element is an array of 2. Index zero is the number, index 1 will contact the grid display control class.
var makeNumberList = function (number) {
  resultArray=[];
  for (var i=1; i<=number; i++) {
    resultArray.push([i,'<div class="grid">']);
  }
};

//After finding multiples and modifying resultArray, this will display it in grid format. Each array element is a 18% width div that floats left.  Number and ping, pong, ping-pong are added. Colors for certain grids are different based on class control.
var displayNumberList = function (list) {
  $("#displayArray").empty();
  $("#numberList").trigger("reset");
  for (var j=0; j<list.length; j++){
    var numberToScreen = list[j][0];
    var gridClass= list[j][1];
    var originalNumber = '<span class="original">'+(j+1)+"</span>"
    $("#displayArray").append(gridClass+" "+numberToScreen+"</div>").hide().fadeIn();
  };
};

//The results array is processed for first multiples of 15, then 5, then 3, and finally if not a multiple, modified with span element to control text display.
var findMultiples = function (){
  for (var j=0; j<resultArray.length; j++){
    if (Number.isInteger((resultArray[j][0])/15)) {
      resultArray[j].splice(0,1,'<span class="pingPong">'+"ping-pong"+'</span>');
      resultArray[j].splice(1,1,'<div class="grid gridPingPong">');
    }
    else if(Number.isInteger((resultArray[j][0])/5)) {
      resultArray[j].splice(0,1,'<span class="pingPong">'+"pong"+'</span>');
      resultArray[j].splice(1,1,'<div class="grid gridPong">');
    }
    else if(Number.isInteger((resultArray[j][0])/3)) {
      resultArray[j].splice(0,1,'<span class="pingPong">'+"pong"+'</span>');
      resultArray[j].splice(1,1,'<div class="grid gridPing">');
    }
    else  {
      resultArray[j].splice(0,1,'<span class="original">'+resultArray[j][0]+'</span>');
      resultArray[j].splice(1,1,'<div class="grid">');
    }
  };
};

//front end logic
$(document).ready(function (){
  $("#numberList").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#numbers").val());
    makeNumberList(inputNumber);
    findMultiples();
    displayNumberList(resultArray);
  });
});
