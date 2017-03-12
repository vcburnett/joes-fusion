$( document ).ready(function() {

	var browserWindow = $(window);
	var browserH = browserWindow.height();
	var browserW = browserWindow.width();

	var joesLogo = $(".joes-logo");

	var aside = $("aside .aside-wrapper");
	var menuClosedW = 70;
	var menuOpenW = 210;

	var mobMenuBtn = $("#mob-menu-button-x");
	var mobMenuContent = $("#mobile-menu");

	var wrapper = $(".wrapper");

	// Functions
	function updateElements() {
		console.log("moved!");

	}

	// ON RESIZE
	browserWindow.on("resize", function() {
		updateElements();
	}).trigger("resize");

	// Menu
	aside.hover(function() {
		$(this).css("width", menuOpenW);
	}, function() {
		$(this).css("width", menuClosedW);
	});

	// ON CLICKS
	mobMenuBtn.click(function(){
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			mobMenuContent.removeClass("mobile-menu-on");
		} else {
			$(this).addClass("open");
			mobMenuContent.addClass("mobile-menu-on");
		}
	});

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