$(document).ready(function(){
    getIt();
    frameIt();
    pressIt();
    submitIt();
});

function getIt() {
    $('p').on('click', function () {
        alert("Hey!");
    });
}

function frameIt() {
    $('img').on('load', function () {
       $('img').addClass('tasty');
    });
}

function pressIt() {
    $('input').on('keydown', function (key) {
       if (key.which === 71) {

           alert('You\'ve pressed the g key');
       }
    });
}

function submitIt() {
    $('form').on('submit', function () {
        alert("Your form is going to be submitted now.");
    });
}
