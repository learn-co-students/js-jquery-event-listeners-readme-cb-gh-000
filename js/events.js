//define functions here

function getIt(){
  $('p').on('click', function(e){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on('load', function(e){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('input').on('keydown', function(e){
    if (parseInt(e.which) === 71){
      alert("G has been pressed!")
    }
  })
}

function submitIt(){
  $('form').on('submit', function(e){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

  // call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
