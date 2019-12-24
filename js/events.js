//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
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
