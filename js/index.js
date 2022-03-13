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


// PreLoader
jQuery.noConflict();
(function($) {
	$(window).on('load', function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(2000).fadeOut('slow'); // will fade out the white DIV that covers the website.
	});
})(jQuery);
