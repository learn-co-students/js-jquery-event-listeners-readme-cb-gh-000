//define functions here
function getIt() {
  $('p').on('click', (e) => {
    alert('Hey!');
  });
}
function frameIt() {
    $('img').on('load', (e) => $('img').addClass('tasty'));
}
function pressIt() {
  $('input#typing').on('keydown', (e) => {
    if (e.which === 71) {
      alert("something");
    }
  });
}
function submitIt() {
  $('form').on('submit',() => {
    alert('Your form is going to be submitted now.');
  });
}
$(document).ready(function(){

// call functions here

});
