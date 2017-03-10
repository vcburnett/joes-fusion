$( document ).ready(function() {

	var browserWindow = $(window);
	var browserH = browserWindow.height();
	var browserW = browserWindow.width();

	var joesLogo = $(".joes-logo");

	function updateElements() {
		console.log("moved!");

	}

	// ON RESIZE
	browserWindow.on("resize", function() {
		updateElements();
	}).trigger("resize");

	// ON SCROLL
	$(window).on('scroll', function() {
	    var yScroll = window.pageYOffset;
	    var scrollTrigger = 75;	// set to whatever you want it to be

	    console.log("yScroll = " + yScroll);

	    if(yScroll > scrollTrigger) {
			joesLogo.addClass("joes-logo-scroll");
	    } else {
			joesLogo.removeClass("joes-logo-scroll");
	    }
	});

});