function getIt() {
  $( "p" ).on( "click", function() {
    alert( "Hey!" )
  })
}

function frameIt() {
  $( "img" ).on( "load", function() {
    $( this ).addClass( "tasty" )
  })
}

function pressIt() {
  $( "form input" ).on( "keydown", function(key) {
    if ( parseInt(key.which) === 71 ) {
      alert("You have pressed the G key")
    }
  })
}

function submitIt() {
  $( "form" ).on( "submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$( document ).ready( function() {
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
