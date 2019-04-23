function getIt(){
  $('p').on("click", alert("Hey!"))
}

function frameIt(){
  $('img').on("load", $('img').addClass('tasty'))
}

function pressIt(){
  $('#typing').on('keypress', key => {key.which == 71 ? alert("pressed") : null})
}

function submitIt(){
  $('submit').on("click", alert("Your form is going to be submitted now."))
}

$(document).ready(function(){

// call functions here

});
