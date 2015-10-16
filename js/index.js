(function(global, $, undefined){
	'use strict';
	// console.log('javascript start');

	// 전역 변수 선언
	var $lnb = $('ul.lnb')			// ul.lnb
	var $lnb_list = $('ul.lnb > li ');		// ul.lnb > li
	var $lnb_twoDepth = $('ul.two_depth')	// ul.two_depth

	initEvent();

	function initEvent() {
		$lnb_list.on('mouseenter', function() {
			$lnb.addClass('view');
			$lnb_twoDepth.css({
				'padding-top': '50'
			});
			
		});

		$lnb_twoDepth.on('mouseleave', function(){
			$lnb.removeClass('view');
		});

		$('#bxslider').bxSlider({
			controls: false,
			auto: true,
			autoControls: true,
			pause: 2000,
			autoControlsCombine: true,
			autoHover: true,
		});

	};



})(window, window.jQuery);