//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

function getIt() {
  $('p').on('click', () => {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', () => {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('#typing').on('keydown', (key) => {
    if (key.which === 'G'.charCodeAt(0))
      alert('You pressed G');
  });
}

function submitIt() {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.');
  });
}
