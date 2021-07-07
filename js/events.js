//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
function getIt(){
  $('p').on('click',()=>{
    alert('Hey!')
  });
}
function frameIt(){
  $('img').on('load',()=>{
    $('img').addClass('tasty')
  });
}
function pressIt(){
  $('form input').on('keydown',e=>{
    if(e.which==71)
    alert('Some text')
  });
}
function submitIt(){
  $('form').on('submit',()=>{
    alert('Your form is going to be submitted now.');
  });
}
