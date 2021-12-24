

// Load
$(window).on("load",function(){
  $("#preloader").fadeOut("slow");
});

$(document).ready(function() {
      $( ".navbar-brand" ).click(function() {
        location.reload(); //reload
      })
      $('.nav-item').click(function(){$(this).addClass('active').siblings().removeClass('active');})
      
})

  
  

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#scrollspy'
})
