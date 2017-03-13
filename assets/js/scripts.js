$( document ).ready(function() {

	var browserWindow = $(window);

	var joesLogo = $(".joes-logo");

	var aside = $("aside .aside-wrapper");
	var menuClosedW = 70;
	var menuOpenW = 210;

	var mobMenuBtn = $("#mob-menu-button-x");
	var mobMenuContent = $("#mobile-menu");

	var wrapper = $(".wrapper");
	var footer = $("footer");

	var browserH, browserW;

	// Functions
	function updateElements() {
		browserH = browserWindow.height();
		browserW = browserWindow.width();

		// Menu mobile
		if ( browserW > 880 ) {
			if (mobMenuBtn.hasClass("open")) {
				mobMenuBtn.removeClass("open");
				mobMenuContent.removeClass("mobile-menu-on");
			}
		}

		// footer placement
		var deltaFt = browserH - (wrapper.outerHeight(true) + footer.outerHeight(true));
		if ( deltaFt > 0 ) {
			footer.addClass("ft-fixed");
		} else {
			footer.removeClass("ft-fixed");
		}
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
	    var scrollTrigger = 30;	// set to whatever you want it to be

	    console.log("yScroll = " + yScroll);

	    if(yScroll > scrollTrigger) {
			joesLogo.addClass("joes-logo-scroll");
	    } else {
			joesLogo.removeClass("joes-logo-scroll");
	    }

	});

});