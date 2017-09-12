//define functions here
function getIt () {
  $('p').on('click', function (){alert('Hey!')})
}

function frameIt () {
  document.images[0].style.border = 'red'
}

function pressIt () {

}

function submitIt () {

}

$(document).ready(function(){

  getIt();
  frameIt();
  pressIt();
  submitIt();

});
