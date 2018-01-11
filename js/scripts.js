$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#votingage').show();
  } else {
    $('#under18').show();
  }
});
