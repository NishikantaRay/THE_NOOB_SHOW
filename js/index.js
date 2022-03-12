const parallax = document.getElementById('parallax');
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset + 0.7 + "px";
});
function test() {
  console.log("test");
}


$(document).ready(function () {
  setTimeout(function () { test(); });
});
$(window).on('resize', function () {
  setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
  setTimeout(function () { test(); });
});

    
$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}