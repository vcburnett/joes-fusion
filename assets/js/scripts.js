$( document ).ready(function() {

	var root = $("html, body");
	var browserWindow = $(window);

	var joesLogo = $(".joes-logo");

	var aside = $("aside .aside-wrapper");
	var menuClosedW = 70;
	var menuOpenW = 210;

	var mobMenuBtn = $("#mob-menu-button-x");
	var mobMenuContent = $("#mobile-menu");

	var cookingScreen = $("section#cooking-screen");
	var btnOpenCS = $(".btn-open-cs");
	var btnCloseCS = $("#cs-image-close");

	var btnAnchor = $(".anchor-link");

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

		if ( browserW <= 640 ) {
			cookingScreen.removeClass("cs-show");
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
	
	btnOpenCS.on("click", function() {
		cookingScreen.addClass("cs-show");
		cookingScreen.animate({
			"opacity": 1
		}, 300);
	});
	btnCloseCS.on("click", function() {
		cookingScreen.animate({
			"opacity": 0
		}, 500, function() {
			cookingScreen.removeClass("cs-show");
		});
	});

	btnAnchor.on("click", function() {
		root.animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 500
		);
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