function counter() {

	var that = htmlCanvas.widget();

	var count = 0;
	var h1;

	that.renderOn = function(html) {
		h1 = html.h1(count.toString());
		console.log(h1);
		html.button('+')
			.click(function() {increase()});
		html.button('-')
			.click(function() {decrease()});
	};


	function increase() {
		count += 1;
		refresh();
	};

	function decrease() {
		count -= 1;
		refresh();
	};

	function refresh() {
		h1.asJQuery().html(count.toString());
	};

	return that;
}


/* Add a counter to the page  */

jQuery(document).ready(function() {
	counter().appendTo('body');
	counter().appendTo('body');
})
