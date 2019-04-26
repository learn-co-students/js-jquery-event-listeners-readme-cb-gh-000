//define functions here
function getIt()
{
  $('p').on('click', ()=>{
    alert("Hey!")
  })
}

function frameIt()
{
  var img = $('img')
  img.attr('class', 'tasty')
  $('.tasty').on('load', (e)=>{

  })
}

function pressIt()
{
  $('input#typing').on('keydown', (e)=>{

    if(e.which === 71)
    {
      alert('alert')
    }
  })
}
function submitIt()
{
  $('form').on('submit', (e)=>{
    e.preventDefault();
    alert("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt()
});
