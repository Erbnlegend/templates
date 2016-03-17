// Smooth Scroll

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

// topNav sticky bar
/*Makes a bar appear at the top of the page once 
they scroll past a certain area on the page
*/

$(document).ready(function(){
    var topNavTop = $('.topNav').offset().top;
    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= topNavTop) {
            $('.topNav').css({
                position: 'fixed',
                visibility: 'visible',
                top: '0',
                left: '0',
            });
        } else {
            $('.topNav').css({
                visibility: 'hidden'
            });
        }
    });
});