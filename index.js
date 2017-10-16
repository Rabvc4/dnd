var SumButtons = function() {
  var a = parseInt(document.getElementById("InputNumber1").value);
  var b = parseInt(document.getElementById("InputNumber2").value);
  document.getElementById("sumNumbers").innerHTML = a+b;
}

var RollDice = function() {
  var NumberOfSides = parseInt(document.getElementById("InputNumber1").value);
  var RollResult = Math.floor((Math.random() * NumberOfSides) + 1);
  document.getElementById("rollResult").innerHTML = RollResult;
}

var InputText = function() {
  var UserInput = document.getElementById("InputNumber1").value;
  var ModifierArray = UserInput.split("+");
  var Modifier = ModifierArray[1];
  var RollArray = ModifierArray[0].split("d");
  var NumberOfDice = RollArray[0];
  var NumberOfSides = RollArray[1];
  document.getElementById("rollResult").innerHTML = "Number of Dice: " + NumberOfDice + "<br>" + "Number of Sides: " + NumberOfSides + "<br>" + "Modifier: " + Modifier;
}
