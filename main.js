/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.


$(document).ready(function() {


//1.
   $('.alertme').click(function() {
     alert("jQuery seems easy so far!");

   })

//2.
$('.clickme').on("click", function(){
  $('.clickme').replaceWith("<button>I was clicked</button>");
})


//3.
$('.addStyle').on("click", function(){
$('.addStyle').toggleClass("buttonStyle");

})

//4.
$('.addDifferentStyle').on("click", function(){
  $('.addDifferentStyle').toggleClass("addUniqueStyle");

})

//5.
$('.removeBtn').click(function () {
  $('.addStyle').removeClass("buttonStyle")
  $('.addDifferentStyle').removeClass("addUniqueStyle ")
})

//6.
$('.clickToggle').on("click", function(){
  $('.clickToggle').toggleClass("buttonStyle");

})


//7.


$('.squareBtn').on("click", function(){
  $('.square').hide();

})

//8.
$('.circle').on("click", function(){
  $('.square').hide();

})


//9.
$('.toggleRedSquare').on("click", function(){
  $('.redSquare').toggle(".redSquare")
})


});  // Close: $(document).ready(function() {
