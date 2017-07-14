//define functions here

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
  pressIt()
  submitIt()
});

function getIt() {
    let par = $('p')
    par.on('click', (e) => alert('Hey!'));
}

function frameIt() {
  let img = $('img')
  img.on('load', (e) => {
    img.addClass('tasty')
  });
}

function pressIt() {
  $('form').on('keydown', (e) => {
    if (e.which === 71) {alert('G');}
  });
}

function submitIt() {
  $('form').on('submit', (e) => {
    alert('Your form is going to be submitted now.')
  });
}