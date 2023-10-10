$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('a#back-to-top').fadeOut();
        } else {
            $('a#back-to-top').fadeIn();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});


jQuery(function($) {
  
    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
      // Calc current offset and get all animatables
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      
      // Unbind scroll handler if we have no animatables
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
      
      // Check all animatables and animate them if necessary
      $animatables.each(function(i) {
         var $animatable = $(this);
        if (($animatable.offset().top + $animatable.height() - 20) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
        }
      });
  
    };
    
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  
  });


	let tableContent = [
		{
		  "name": 'Title of post',
			"categories": ['Category 1'],
			"publishDate": 'Oct 27 13:49',
			"modifiedDate": 'Oct 27 12:49',
		},
		{
		  "name": 'Title of post',
			"categories": ['Category 1'],
			"publishDate": 'Oct 27 13:49',
			"modifiedDate": 'Oct 27 12:49',
		},
		{
		  "name": 'Title of post',
			"categories": ['Category 1', 'Category 2'],
			"publishDate": 'Oct 27 13:49',
			"modifiedDate": 'Oct 27 12:49',
		},
		{
		  "name": 'Title of post',
			"categories": ['Category 1'],
			"publishDate": 'Oct 27 13:49',
			"modifiedDate": 'Oct 27 12:49',
		},
		{
		  "name": 'Title of post',
			"categories": ['Category 1'],
			"publishDate": 'Oct 27 13:49',
			"modifiedDate": 'Oct 27 12:49',
		},
	];