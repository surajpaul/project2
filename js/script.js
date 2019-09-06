$(document).on('ready', function() {
	$(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    // hover
    $(document).on('mouseenter', '.tab1', function() {
	    $('.tab1-hover').attr('style', 'background-color: #e6482f !important;margin-top: -100px;font-size: 14px;color:#fff;');
	});
	$(document).on('mouseleave', '.tab1', function() {
	    $('.tab1-hover').attr('style', 'background-color: #fff;margin-top: -100px;font-size: 14px;');
	});
	$(document).on('mouseenter', '.tab2', function() {
	    $('.tab2-hover').attr('style', 'background-color: #e6482f !important;margin-top: -100px;font-size: 14px;color:#fff;');
	});
	$(document).on('mouseleave', '.tab2', function() {
	    $('.tab2-hover').attr('style', 'background-color: #fff;margin-top: -100px;font-size: 14px;');
	});
	$(document).on('mouseenter', '.tab3', function() {
	    $('.tab3-hover').attr('style', 'background-color: #e6482f !important;margin-top: -100px;font-size: 14px;color:#fff;');
	});
	$(document).on('mouseleave', '.tab3', function() {
	    $('.tab3-hover').attr('style', 'background-color: #fff;margin-top: -100px;font-size: 14px;');
	});
	$(document).on('mouseenter', '.tab4', function() {
	    $('.tab4-hover').attr('style', 'background-color: #e6482f !important;margin-top: -100px;font-size: 14px;color:#fff;');
	});
	$(document).on('mouseleave', '.tab4', function() {
	    $('.tab4-hover').attr('style', 'background-color: #fff;margin-top: -100px;font-size: 14px;');
	});
	$(document).on('mouseenter', '.tab5', function() {
	    $('.tab5-hover').attr('style', 'background-color: #e6482f !important;margin-top: -100px;font-size: 14px;color:#fff;');
	});
	$(document).on('mouseleave', '.tab5', function() {
	    $('.tab5-hover').attr('style', 'background-color: #fff;margin-top: -100px;font-size: 14px;');
	});
	// hover section
	$(document).on('mouseenter', '.hover-menu1', function() {
	    $('.vision').attr('style', 'fill: #fff !important;');
	    $('.hover-menu1').attr('style', 'background-color: #00a759 !important;color:#fff;transition-delay: .5s ease;transition: .5s ease;');
	});
	$(document).on('mouseleave', '.hover-menu1', function() {
	    $('.vision').attr('style', 'fill: #00a759 !important;');
	    $('.hover-menu1').attr('style', 'background-color: #fff !important;color:#000;transition-delay: .5s ease;transition: .5s ease;');
	});
	$(document).on('mouseenter', '.hover-menu2', function() {
	    $('.mission').attr('style', 'fill: #fff !important;');
	    $('.hover-menu2').attr('style', 'background-color: #0247d0 !important;color:#fff;transition-delay: .5s ease;transition: .5s ease;');
	});
	$(document).on('mouseleave', '.hover-menu2', function() {
	    $('.mission').attr('style', 'fill: #0247d0 !important;');
	    $('.hover-menu2').attr('style', 'background-color: #fff !important;color:#000;transition-delay: .5s ease;transition: .5s ease;');
	});
	$(document).on('mouseenter', '.hover-menu3', function() {
	    $('.objective').attr('style', 'fill: #fff !important;');
	    $('.hover-menu3').attr('style', 'background-color: #f56221 !important;color:#fff;transition-delay: .5s ease;transition: .5s ease;');
	});
	$(document).on('mouseleave', '.hover-menu3', function() {
	    $('.objective').attr('style', 'fill: #f56221 !important;');
	    $('.hover-menu3').attr('style', 'background-color: #fff !important;color:#000;transition-delay: .5s ease;transition: .5s ease;');
	});
	$(document).on('mouseenter', '.hover-menu4', function() {
	    $('.award').attr('style', 'fill: #fff !important;');
	    $('.hover-menu4').attr('style', 'background-color: #fcc11d !important;color:#fff;transition-delay: .5s ease;transition: .5s ease;');
	});
	$(document).on('mouseleave', '.hover-menu4', function() {
	    $('.award').attr('style', 'fill: #fcc11d !important;');
	    $('.hover-menu4').attr('style', 'background-color: #fff !important;color:#000;transition-delay: .5s ease;transition: .5s ease;');
	});
	// toggle menubar
	$('.nav-button').click(function(){
		$('body').toggleClass('nav-open');
		$('body').toggleClass('maincss');
	});
});