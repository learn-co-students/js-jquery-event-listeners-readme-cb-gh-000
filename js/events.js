//define functions here

$(document).ready(function(){

// call functions here
  function getIt(){
    $('p').on('click', function(){
      alert("Hey!");
    });
  }
  window.getIt=getIt;

  function pressIt(){
    $(document).on('keydown', function(event){
      if(event.which == 71)
        alert('You pressed G');
    });
  }
  window.pressIt = pressIt;

  function submitIt(){
    $('form').on("submit", function(){
      alert("Your form is going to be submitted now.");
    });
  }
  window.submitIt = submitIt;

  function frameIt(){
    $('img').on('load', function(){
      $('img').addClass('tasty');
    });
  };
window.frameIt = frameIt;
});
