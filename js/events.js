//define functions here
function getIt() {
  $('p').on('click', () => alert("Hey!"));
}

function frameIt() {
  $('img').on('load',function() {
                        $(this).addClass('tasty')
                     });
}

function pressIt() {
  $('input').on('keydown', (keyEvent) => {
                              if (keyEvent.key === "g")
                                alert("You have pressed g");
                           });
}

function submitIt() {
  $('form').on('submit', () => alert("Your form is going to be submitted now."));
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
