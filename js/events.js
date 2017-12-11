//define functions here
function getIt(){
return $('p').on('click', function(){ alert('Hey!'); });
}
// The function should bind the load event that adds
//the class tasty to the image to add a red frame to the image.
function frameIt (){
  $('img').on("load", function(){
    $('img').addClass("tasty");
  });
}
function pressIt(){
$(document).on("keydown",function(key){
  if(key.which == 71){
    alert("G was press");
  };
});
}
function submitIt(){
  $("form").on("submit", function(){

      alert("Your form is going to be submitted now.");
      return;

  })

}
$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
