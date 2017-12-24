//define functions here
 function getIt () {
  $('p').on('click',()=>{
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load',()=>{
    $('img')[0].classList.add("tasty")
  })
}


function pressIt() {
  $('form input').on('keydown',e =>{
    if (e.which == 71)
      alert('g is pressed!')
  })
}


function submitIt() {
  $('form').on('submit',() =>{
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
