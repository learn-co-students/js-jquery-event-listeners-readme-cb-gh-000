//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').attr(class, 'tasty');
  });
}

function pressIt() {
  $('input #typing').on('keydown', function() {
    if ($("input $typing").val() === "G") {
      alert("you have pressed the G key");
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.");
  });
}
