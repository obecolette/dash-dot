var $sliders;



$(document).ready(function(){

	$('.accordion').click(function(){
		$(this).toggleClass('expand');
	});

	$('.hamburger').click(function(){
		$('.hamburger-menu').toggleClass('drop');
	});

	$('.app-1').click(function(){
		$(".dash-sliders").animate({"right":"-17%"});
	})

	$(".dot").click(function(){
		$(".dot").removeClass("active");
		$(this).addClass("active");
		$(".slider").removeClass("active");
		$(".slider").eq( $(this).index(".dot")).addClass("active");

	}).click(changeSlide);



	// slider 

	$sliders = $(".dash-sliders .slider");

	$sliders.first().show();



});


var changeSlide = function() {
	console.log(this);
	var slideSelector = $(this).attr("data-slide-selector");
	console.log("show slide ", slideSelector );

	var $newSlide = $(slideSelector);
	$newSlide.css({
		"left": "0%",
		"transition": "1s"
	}).show();
	console.log("newSlide", $newSlide)

	var $oldSlide = $newSlide.siblings(":visible");
	console.log("oldSlide", $oldSlide);
	$oldSlide.css({
		"left": "-100%",
		
	});

}