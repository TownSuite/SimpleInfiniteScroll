
function infiniteLoad(callback) {
	  $(window).on('scroll', function () {
		var h1 = $(document).height() - $(window).height();
		var h2 = $(window).scrollTop() + 350; // start loading before user can see the change
		if (h2 >= h1) {
			callback();
		}
	});
}
