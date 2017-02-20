

var heroImg = $('#hero-img'),
	big = $('#big'),
	bold = $('#bold'),
	hText = $('.h-text'),
	delicious = $('#delicious'),
	aboutText = $('#about-text'),
	aText = $('h2 .a-text'),
	lG = $('.lg'),
	mD = $('.md'),

	tl = new TimelineMax();


//drops down can and brings in words on homepage
tl.set(hText, {scale:0})
	.from(heroImg, 1, { ease: Power4.easeIn, y:-500})
	.to(big, 1, {ease: Back.easeOut.config(1.7), scale: 1})
	.to(bold, 1, {ease: Elastic.easeOut.config(1, 0.3), scale: 1})
	.to(delicious, 1, {ease: Power3.easeOut, scale: 1});


//scrolls to about section
$('#nav-about').on('click', function(){ 
	$('html, body').animate({
	scrollTop: $('#about').offset().top}, 1000)

	
	TweenMax.staggerTo('aboutText', 3, {scale:0.5, opacity:1}, 0.2);


});



$('#nav-sodas').on('click', function(){
	$('html, body').animate({
		scrollTop: $('#about').offset().top}, 1000)

});















