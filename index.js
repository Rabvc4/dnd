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

var MulButtons = function() {
  var a = parseInt(document.getElementById("InputNumber1").value);
  var b = parseInt(document.getElementById("InputNumber2").value);
  document.getElementById("sumNumbers").innerHTML = a*b;
}

var DivButtons = function() {
  var a = parseInt(document.getElementById("InputNumber1").value);
  var b = parseInt(document.getElementById("InputNumber2").value);
  document.getElementById("sumNumbers").innerHTML = a/b;
}
