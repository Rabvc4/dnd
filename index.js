var SumButtons = function() {
  var a = parseInt(document.getElementById("InputNumber1").value);
  var b = parseInt(document.getElementById("InputNumber2").value);
  document.getElementById("sumNumbers").innerHTML = a+b;
}

var SubButtons = function() {
  var a = parseInt(document.getElementById("InputNumber1").value);
  var b = parseInt(document.getElementById("InputNumber2").value);
  document.getElementById("sumNumbers").innerHTML = a-b;
}

var RollDice = function myFunction() {
  var NumberOfSides;
  var x = Math.floor((Math.random() * 10) + 1);
  document.getElementById("demo").innerHTML = x;
}
