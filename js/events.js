//define functions here
function getIt() {
    $("p").on("click", () => {
        alert("Hey!");
        return;
    });
};

function frameIt() {
    $("img").on("load", () => {
        $("img").addClass("tasty");
        return;
    });
};

function pressIt() {
    $("input").on("keydown", key => {
        if (key.which == 71) {
            alert("You have pressed the G key.")
        }
    })
    return ;
}

function submitIt() {
    $("form").on("submit", () => {
        alert("Your form is going to be submitted now.");
    });
    return;
};

$(document).ready(function(){

// call functions here
    getIt()
    frameIt()
    pressIt()
    submitIt()
});
