$('document').ready(function(){

  /*
	*
	* when a link with the class of 'scroll-nav' is clicked
	* the page should scroll to that links href attribute
	*
	*/

	$('a.scroll-nav').on('click', function(event) {

  	var $this = $(this)
      , scrollToSctn = $this.attr('href')
      , navHeight = $('.navbar-default').height();

    event.preventDefault();

    $('html, body').animate({
        scrollTop: ( $(scrollToSctn).offset().top  - navHeight )
    }, 800);

  });
});
