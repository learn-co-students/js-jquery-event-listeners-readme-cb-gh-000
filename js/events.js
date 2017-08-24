//define functions here
function getIt(){
  $('p').on('click', () => {
    alert("Hey!")
  });
}

function frameIt(){
  $("img").on("load",() => {
    $("img").addClass('tasty');
  })
}

function pressIt(){
  $('input').on("keydown", (e) => {
    if(e.which == 71)
    alert('You pressed G!')
  })
}

function submitIt(){
  $('form').on("submit", () => {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt()
});
