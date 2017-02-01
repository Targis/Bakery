$(document).ready(function(){

	$(".owl-carousel").owlCarousel({

		items: 3,
		loop: true,
		margin: 30,
		nav: true,
		navText: [
		'<i class="fa fa-chevron-left fa-border" aria-hidden="true"></i>',
		'<i class="fa fa-chevron-right fa-border" aria-hidden="true"></i>'
		]

	});

	/* Mobile munu */

	$(".toggle-menu, .mobile-menu li, wrapper-invis").click(function() {
		$(".burger").toggleClass("active");
		$(".mobile-menu").slideToggle();
	});

	$(document).click(function(e){

   if($(e.target).closest('.mobile-menu-wrapper').length != 0) return false;
  	$(".burger").removeClass("active");
  	$(".mobile-menu").hide();
	});



});

