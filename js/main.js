$(window).on("load", function () {
  $(".preloader").fadeOut("500", function () {
    $(this).remove();
    $("body").removeClass("overflow");
  });


});
 // Sidemenu 
 $("#openNav").click( function() {

  $('.sidenav').addClass('open');
  $('.overlay').fadeIn();
  $('body').addClass('ovh');
});

$(".closebtn,.overlay").click( function() {
  $('.sidenav').removeClass('open');
  $('.overlay').fadeOut();
  $('body').removeClass('ovh');
});




 $("#nav-icon").click( function() {
  $('#nav-icon').toggleClass('nav-icon_open');
  $('.sidenav').toggleClass('open');
  $(this).toggleClass('open');   
  $('body').toggleClass('ovh');
});
$("#openNav").click( function() {

     
});

// overlay

$('.slider-head').owlCarousel({
  autoplay: true,
  rtl: true,
  loop: true,
  dots:true,
  nav: false,
  items: 1,
  
});
