//business Logic
var resultArray = [];
//takes initial number and makes it into an array list.
var makeNumberList = function (number){
  resultArray=[];
  for (var i=1; i<=number; i++){
    resultArray.push(i);
  }
};
//The results array is processed for first multiples of 15, then 5, then 3.
var findMultiples = function(){
  for (var j=0; j<resultArray.length; j++){
    if (Number.isInteger((resultArray[j])/15)){
      resultArray.splice(j,1,"ping-pong");
    }
    else if (Number.isInteger((resultArray[j])/5)){
      resultArray.splice(j,1,"pong");
    }
    else if (Number.isInteger((resultArray[j])/3)){
      resultArray.splice(j,1,"ping");
    }
  };
};
//front end logic
$(document).ready(function(){
  $("#numberList").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#numbers").val());
    makeNumberList(inputNumber);
    findMultiples();
    //display area and submit form are cleared.
    $("#displayArray").empty();
    $("#numberList").trigger("reset");
    //use SetInterval to stagger display of results
    var id = setInterval(function(){showNumber()}, 75);
    var j =0;
    var showNumber = function(){
      var numberToScreen = resultArray[j];
      if (j===resultArray.length){
          clearInterval(id);
      }
      else if (resultArray[j]==="ping"){
          $("#displayArray").append('<div class="grid gridPing notNumber">'+numberToScreen+"</div>").slideDown();
          j++;
      }
      else if (resultArray[j]==="pong"){
          $("#displayArray").append('<div class="grid gridPong notNumber">'+numberToScreen+"</div>").slideDown();
          j++;
      }
      else if (resultArray[j]==="ping-pong"){
          $("#displayArray").append('<div class="grid gridPingPong notNumber">'+numberToScreen+"</div>").slideDown();
          j++;
      }
      else {
          $("#displayArray").append('<div class="grid">'+'<span class="original">'+numberToScreen+"</span></div>").slideDown();
          j++;
      }
    };
  });
});
