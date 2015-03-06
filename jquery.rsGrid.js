(function($){

	var MyGrid = function(element, options) {

		var elem = $(element);
		var obj = this;

		// Merge options with defaults
		var settings = $.extend({
			show 			: true,
			lineColour 		: '#f1c40f',
			textColour      : '#000',
			increment 		: 50,
			padding 		: 0,
			lineSize 		: 1,
			showIncrement 	: true
		}, options || {});

		// Public method
		this.showGrid = function() {
	    	
	    	if (settings.show) {
	    		// We need to show our grid
	    		gW = elem.outerWidth();
	    		gH = elem.outerHeight();

	    		var context = element.getContext("2d");

	    		for (var x = 0; x <= gW; x += settings.increment) {
				    context.moveTo(0.5 + x + settings.padding, settings.padding);
				    context.lineTo(0.5 + x + settings.padding, gH + settings.padding);
				    if (settings.showIncrement) {
				    	context.fillText(x,x + settings.padding, 10);
				    	context.fillStyle = settings.textColour;
				    }
				    
				}

				for (var x = 0; x <= gH; x += settings.increment) {
				    context.moveTo(settings.padding, 0.5 + x + settings.padding);
				    context.lineTo(gW + settings.padding, 0.5 + x + settings.padding);
				    if (settings.showIncrement) {
				    	context.fillText(x,0, x + settings.padding);
				    	context.fillStyle = settings.textColour;
				    }
				}

				context.strokeStyle = settings.lineColour;
				context.lineWidth = settings.lineSize;
				context.stroke();
	    	}
	    };
	};

	$.fn.grid = function(options) {

		return this.each(function() {

			var element = $(this);

			// Return early if this element already has a plugin instance
			if (element.data('myGrid')) return;
	 
           	var myGrid = new MyGrid(this, options);
           	myGrid.showGrid();

           	// Store plugin object in this element's data
			element.data('myGrid', myGrid);

       	});

	}

}(jQuery));
