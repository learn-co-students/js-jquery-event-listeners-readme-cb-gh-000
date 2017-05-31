//define functions here
function getIt() {
  $('p').on('click', () => alert('Hey!'))
}
function frameIt() {
  $('img').on('load', (e) => $(e.currentTarget).addClass('tasty'))
}
function pressIt() {
  $('#typing').on('keydown', (e) => {
    if (e.which === 71)
      alert("You pressed 'g'!")
  })
}
function submitIt() {
  $('form').on('submit', (e) => alert('Your form is going to be submitted now.'))
}

$(document).ready(function(){
  // call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
