window.onload = init;
var upperInput = document.getElementById("output-upper");
var lowerInput = document.getElementById("output-lower");
var delimiter = 0;

function init() {
  var target = document.getElementsByTagName("td");
  for (var i = 0; i < target.length; i++) {
    target[i].onclick = buttonHandler;
  }
}
function buttonHandler(eventObject) {
  var element = eventObject.target;
  var elementValue = element.innerText;
  if (elementValue === "AC") {
    upperInput.value = " ";
  } else if (elementValue === "Del") {
    var newVal = upperInput.value.slice(0, length - 1);
    upperInput.value = newVal;
  } else if (elementValue === "=") {
    var finalValue = upperInput.value;
    var firstValue;
    for (var i = 0; i < finalValue.length; i++) {
      if (
        finalValue[i] == "+" ||
        finalValue[i] == "-" ||
        finalValue[i] == "÷" ||
        finalValue[i] == "×"
      ) {
        console.log(finalValue[i]);
        delimiter = finalValue[i];
      }
    }
    console.log(delimiter);
    values = finalValue.split(delimiter, 2);
    var cal = eval(values[0] + delimiter + values[1]);
    console.log(cal);
  } else {
    upperInput.value += elementValue;
  }
}
