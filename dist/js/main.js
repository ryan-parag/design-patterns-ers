// Toggle navigation
$(".toggle-menu").click(function() {
	if ($(".sidebar").hasClass("show")) {
		// Hide sidebar
		$(".sidebar").removeClass("show");
		$(".logo-container").removeClass("show");
		$(".content").removeClass("sidebar-open");
		$(this).removeClass("active");
	} else {
		// If sidebar is hidden:
		$(".sidebar").addClass("show");
		$(".logo-container").addClass("show");
		$(".content").addClass("sidebar-open");
		$(this).addClass("active");
		// Display sidebar
	}
});

// Toggle submenu
$(".sidebar__title").click(function() {
	$(".sidebar").addClass("show");
	$(".toggle-menu").addClass("active");
	$(".logo-container").addClass("show");
	$(".content").addClass("sidebar-open");
	$(this).parent(".sidebar__item").toggleClass("active");
});

