/** 
 * Character Counter
 *
 * Displays number of characters allowed in textfield. 
 *
 * Options:
 *   - Display max length (number)
 *   - Textfield max length (number)
 *
 */

(function($) {
	'use strict';

	$.fn.charCounter = function(options) {

		var settings = $.extend({
			displayMax: 140,
			textfieldMax: 140
		}, options)

		return this.each(function(options) {
			var $this = $(this);
			var $label = $this.siblings("label");
			var chars = settings.displayMax - $this.val().length;
			var display = "<span class='counter-display' style='text-align:right;float:right;color:#878787;font-size:14px;'>" + chars + " characters remaining</span>"

			$this.siblings("label").append(display);

			var $counterDisplay = $label.find(".counter-display");

			$this.attr({
				maxlength: settings.textfieldMax
			});

			checkStringLength();

			$this.on("change keyup paste click", function(){
			    checkStringLength();
			})

		    function checkStringLength() {
		    	chars = settings.displayMax - $this.val().length;
		    	if (chars < 0) {
		    		$counterDisplay.css("color", "red");
		    	} else {
		    		$counterDisplay.css("color", "#878787");
		    	}
		    	$counterDisplay.text(chars + " characters remaining");
		    }
		})
	}

}(jQuery));