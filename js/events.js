//define functions here
function getIt() {
  // function pAlert(k) {
  //   alert("Hey!");
  // }
  $('p').on('click', ()=> alert("Hey!"));
}

function frameIt() {
  $('img').on('load', ()=> $('img:first').addClass('tasty'));

}

function pressIt() {
  $('input').on('keydown', k=> ((k.which==71) ? alert('g') : null ));
}

function submitIt() {
  $('form').on('submit', ()=> alert('Your form is going to be submitted now.'));
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
