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
  var RollArray = UserInput.split("d");
  var NumberOfDice = RollArray[0];
  var ModifierArray = RollArray[1].split("+");
  var NumberOfSides = ModifierArray[0];
  var Modifier = ModifierArray[1];
  document.getElementById("rollResult").innerHTML = "Number of Dice: " + NumberOfDice + "<br>" + "Number of Sides: " + NumberOfSides + "<br>" + "Modifier: " + Modifier;
}
