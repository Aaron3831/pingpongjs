var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  var simpleCalculator = new Calculator("a string");
  var output = simpleCalculator.pingPong(1000);
});
