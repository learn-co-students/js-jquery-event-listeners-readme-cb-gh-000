//define functions here
function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $(this).addClass("tasty");
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}

function pressIt() {
  $("#typing").on("keydown", function(e) {
    if (e.which === 71) {
      alert("a");
    }
  });
}
$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();

});
