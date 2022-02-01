const parallax = document.getElementById('parallax');
window.addEventListener("scroll",function(){
    let offset =window.pageYOffset;
    parallax.style.backgroundPositionY = offset+0.7+"px";
})



  $(document).ready(function(){
    setTimeout(function(){ test(); });
  });
  $(window).on('resize', function(){
    setTimeout(function(){ test(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    setTimeout(function(){ test(); });
});

