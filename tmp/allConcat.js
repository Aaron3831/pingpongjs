var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  var simpleCalculator = new Calculator("a string");
  var output = simpleCalculator.pingPong(1000);
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
