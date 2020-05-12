const COOKIE_LANG = 'lang';

(function($) {
		"use strict";
		
	  const loadContext = lang => {
		
	  	$.getJSON(`text/context_${lang}.json`, info => {
				const [f, s] = info.name.split(' ');
				$(".comp-name").html(f + "<br>" + s);
			  $(".comp-email").text(info.email);
			  $(".comp-phone").text(info.phone);
			  $(".comp-fax").text(info.fax);
			  $(".comp-address").text(info.address);

			  $(".comp-aim").text(info.aim);
			  Object.keys(info.services).forEach((sv, i) => {
				  $(`.comp-service-${i+1}`).text(sv);
				  $(`.comp-service-${i+1}-desc`).text(info.services[sv]);
			  });
				$(".comp-contact").html(info.contact);

			  // link name
			  $(".link-home").text(info.link.home);
			  $(".link-info").text(info.link.info);
			  $(".link-menu").text(info.link.menu);
			  $(".link-contact").text(info.link.contact);
			  $(".link-address").text(info.link.address);
			  $(".link-email").text(info.link.email);
			  $(".link-phone").text(info.link.phone);
			  $(".link-fax").text(info.link.fax);
	  	});
	  }
	  const activeLang = Cookies.get(COOKIE_LANG) || 'en';
		$(`#${activeLang}btn`).addClass("active");
	  loadContext(activeLang);


	const onLanguageChange = () => {
		$("input[name=languageOpt]").change(() => {
		  const activeLang = Cookies.get(COOKIE_LANG) || 'en';
			let val = $("input[name=languageOpt]:checked").val();
			if (val !== activeLang) {
				Cookies.set(COOKIE_LANG, val);
				location.reload();
			}
		});
	}
	onLanguageChange();

	/**
	 * 
	 * window & page settings from original template
	 */  

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

})(jQuery);

