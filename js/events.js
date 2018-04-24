
function getIt() {
  $("p").on("click" ,function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    image = $("img")[0]
    image.className = "tasty";
  });
}

function pressIt() {
  $("input").on("keydown", function(key) {
    if (key.which === 71) {
      alert("You have pressed the G key!!!")
    }
  });
}

function submitIt() {
  $(document).on("submit", function() {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
