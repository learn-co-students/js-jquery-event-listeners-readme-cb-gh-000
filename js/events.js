//define functions here

 function getIt() {
   $('p').on('click', () => {alert('hey!')})
 }

 function frameIt() {
   $('img').on('load', function() {
     $('img').addClass('tasty')
   })
 }


function pressIt() {
  $('input').on('keydown', e => {
    if (e.which === 71) {
  alert("You pressed 'g'!")
}
  })
}


function submitIt() {
  $('form').on('submit', e => {
    alert('Your form is going to be submitted now.')
  })
}




$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()
});
