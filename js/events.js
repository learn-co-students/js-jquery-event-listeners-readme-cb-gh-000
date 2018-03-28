//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  })
}

function pressIt() {
  $('form').on('keydown', function(key){
    if(key.which==71){
      alert('G was pressed.');
    }
  })
}



$(document).ready(function(){

// call functions here
window.getIt();
window.frameIt();
window.submitIt();
window.pressIt();

});
