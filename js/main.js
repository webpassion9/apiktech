$(document).ready(function () {

	// slick visibility slides settings
	$('.slider-items').on('init',
		function (slick) { sliderIndexes(slick.currentTarget); }
	);
	$('.slider-items').on('afterChange',
		function (slick, currentSlide) { sliderIndexes(slick.currentTarget); }
	);

	$('.history-timeline').on('init',
		function (slick, currentSlide) {$('.slick-track').append('<span class="tracking"></span>'); changeLine(currentSlide); }
	);
	$('.history-timeline').on('afterChange',
		function (slick, currentSlide) {changeLine(currentSlide); }
	);

	// timeline calc
	function changeLine(currentSlide) {
		var slides = currentSlide.$slides.length;
		var list = currentSlide.$list[0];
		var slide_num = currentSlide.currentSlide;
		var width = 109 * slide_num;
		$('.tracking').width(width);
		$(list).find('.slide-after').removeClass('slide-after');
		if (slide_num != -1 && slide_num != (slides - 1)) {
			for (i = slide_num; i <= slides; i++) {
				$(list).find('.slick-slide[data-slick-index="' + i + '"]').addClass('slide-after');
			}
		}
	}

	function sliderIndexes(dom) {
		var $dom = $(dom);
		var cur_ind = $dom.find('.slick-slide.slick-current').index();
		$dom.find('.slick-slide').removeClass('zindex1 zindex2 zindex3 zindex4 zindex5 zindex6 zindex7');
		var cur_ind_zp1 = cur_ind + 1;
		var cur_ind_zp2 = cur_ind + 2;
		var cur_ind_zp3 = cur_ind + 3;
		var cur_ind_zp4 = cur_ind + 4;
		var cur_ind_zp5 = cur_ind + 5;
		var cur_ind_zp6 = cur_ind + 6;
		var cur_ind_zp7 = cur_ind + 7;
		$dom.find('.slick-slide').eq(cur_ind_zp1).addClass('zindex1');
		$dom.find('.slick-slide').eq(cur_ind_zp2).addClass('zindex2');
		$dom.find('.slick-slide').eq(cur_ind_zp3).addClass('zindex3');
		$dom.find('.slick-slide').eq(cur_ind_zp4).addClass('zindex4');
		$dom.find('.slick-slide').eq(cur_ind_zp5).addClass('zindex5');
		$dom.find('.slick-slide').eq(cur_ind_zp6).addClass('zindex6');
		$dom.find('.slick-slide').eq(cur_ind_zp7).addClass('zindex7');
	}

	$('.slider-items').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: true,
		touchThreshold: 30,
		variableWidth: true,
		prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#down-arrow'></use></svg></a>",
		nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#down-arrow'></use></svg></a>",
		responsive: [
			{
				breakpoint: 1239,
				settings: {
					variableWidth: false,
				}
			},
			{
				breakpoint: 992,
				settings: {
					variableWidth: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 767,
				settings: {
					variableWidth: false,
					slidesToShow: 1
				}
			}
		]
	});

	$('.production-wrapper').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: true,
		touchThreshold: 30,
		prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#down-arrow'></use></svg></a>",
		nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#down-arrow'></use></svg></a>",
		responsive: [
			{
				breakpoint: 1239,
				settings: {
					variableWidth: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					variableWidth: false,
					slidesToShow: 2
				}
			},
			{
				breakpoint: 767,
				settings: {
					variableWidth: false,
					slidesToShow: 1
				}
			}
		]
	});

	$('.history').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: false,
		touchThreshold: 30,
		asNavFor: ".history-timeline",
		initialSlide: 3,
		responsive: [
			{
				breakpoint: 1269,
				settings: {
					// variableWidth: true,
					// arrows: false
				}
			}
		]
	});

	$('.history-timeline').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: false,
		touchThreshold: 30,
		asNavFor: ".history",
		focusOnSelect: true,
		centerMode: true,
		variableWidth: true,
		initialSlide: 3,
		responsive: [
			{
				breakpoint: 1269,
				settings: {
					// variableWidth: true,
					// arrows: false
				}
			}
		]
	});

	$('.slider-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: true,
		touchThreshold: 30,
		asNavFor: ".slider-gallery-thumbs",
		prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#down-arrow'></use></svg></a>",
		nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#down-arrow'></use></svg></a>",
		responsive: [
			{
				breakpoint: 1269,
				settings: {
					// variableWidth: true,
					// arrows: false
				}
			}
		]
	});

	$('.slider-gallery-thumbs').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: true,
		touchThreshold: 30,
		asNavFor: ".slider-gallery",
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1269,
				settings: {
					// variableWidth: true,
					// arrows: false
				}
			}
		]
	});

	$('.product-type-slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: false,
		centerPadding: '0',
		adaptiveHeight: true,
		infinite: false,
		touchThreshold: 30,
		prevArrow: "<a class='slick-prev'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right2'></use></svg></a>",
		nextArrow: "<a class='slick-next'><svg class='icon'><use xlink:href='img/symbol/sprite.svg#arrow-right2'></use></svg></a>"
	});


	// datepicker
	$('[data-toggle="datepicker"]').datepicker({
		format: 'dd.mm.yyyy',
		daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Авуст', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		autoHide: true,
		weekStart: 1
	});

	$('[data-toggle="datepicker"]').datepicker('setDate', new Date());


	// form tags
	$(function() {
		$('#form-tags').tagsInput({
			'autocomplete': {
				source: [
					'Технология',
					'Технология 2',
					'Исследования 3',
					'Технология 3',
					'Технология 2',
					'Исследования 5',
					'Технология 6',
					'Технология 2',
					'Исследования 7',
					'Исследования 2'
				]
			}
		});
	});
		


	// magnific popup
	$('.magnific-gallery').magnificPopup({
		delegate: '.link-gallery', // child items selector, by clicking on it popup will open,
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// modal
	$('.link-modal').click(function (e) {
		var id = $(this).attr('href');
		$.magnificPopup.open({
			items: {
				src: id
			},
			type: 'inline',
			preloader: false,
			mainClass: 'mfp-with-zoom',
			showCloseBtn: false,
			zoom: {
				enabled: true,
				duration: 300
			},
			callbacks: {
				open: function () {
					$('.header__main').css({ 'overflow-y': 'scroll' });
				},
				close: function () {
					$('.header__main').css({ 'overflow-y': 'visible' });
				}
			}
		});
	});
	$(document).on('click', '.modal-close', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	// inpu mask
	$('.input-phone').inputmask("+7 (999) 999-99-99");


	// window btn
	$('.js-btn-window').on('click', function (e) {
		e.preventDefault();
		e.stopPropagation();
		var $target = $(e.currentTarget);
		if ($target.hasClass('active')) {
			$target.removeClass('active');
			$($target.attr('href')).removeClass('active');
		} else {
			$target.closest('.js-window').find('js-btn-window').removeClass('active');
			$target.addClass('active');
			$('.js-window.active').removeClass('active');
			$($target.attr('href')).addClass('active');
		}

		if ($(this).hasClass('btn-mob-menu')) {
			$('body').addClass('is-menu-active');
		}

	})

	$(document).click(function (event) {
		if ($(event.target).closest(".js-window").length) return;
		$('.js-window.active').removeClass("active");
		$('.js-btn-window.active').removeClass("active");
		$('body').removeClass('is-menu-active');
		event.stopPropagation();
	});
	$(".js-window-close, .js-btn-window.active").click(function (event) {
		$('.js-window.active').removeClass("active");
		$('.js-btn-window.active').removeClass("active");
		$('body').removeClass('is-menu-active');
	});


	// fixed header
	if ($(window).width() > 768) {
		var $menu = $(".header__main");
		$(window).scroll(function () {
			if ($(this).scrollTop() > 30 && $menu.hasClass("js-scroll-default")) {
				$menu.fadeIn(0, function () {
					$(this).removeClass("js-scroll-default")
						.addClass("js-scroll-fixed");
				});
			} else if ($(this).scrollTop() <= 30 && $menu.hasClass("js-scroll-fixed")) {
				$menu.fadeIn(0, function () {
					$(this).removeClass("js-scroll-fixed")
						.addClass("js-scroll-default");
				});
			}
		});
	}

	if ($(window).width() > 768) {
		$(".toggle-select").stick_in_parent({
			spacer: false,
			bottoming: false,
			offset_top: 108,
			parent: '.product-content-wrapper'
		});
	}

	// tabs
	$('.js-tab-link').click(function () {
		var id = $(this).attr("href");
		var container = $(id).closest('.js-tabs-wrapper');
		$(container).find('.js-tab-link').not(this).each(function () {
			$($(this).attr("href")).removeClass("active");
		});
		$(container).find(id).addClass("active");
		$(container).find(".js-tab-link").removeClass('active');
		$(this).addClass('active');
		return false;
	});

	// product-type settings
	$(document).on('click', '.product-type:not(.product-type--tab)', function (e) {
		e.preventDefault();
		var id = $(this).data('id');
		$('.product-type').removeClass('active');
		$('.product-type[data-id="' + id + '"]').addClass('active');

		if (id == 1) {
			$('.toggle-select__trigger').removeClass('change');
		}
		else {
			$('.toggle-select__trigger').addClass('change');
		}
		changeBlock();
		$('.slick-slider').slick('refresh');
	});
	

	function changeBlock() {
		if (!$(".toggle-select__trigger").hasClass('change')) {
			$('#product-1').show();
			$('#product-2').hide();
			$('.product-type').removeClass('active');
			$('.product-type[data-id="1"]').addClass('active');
		}
		else {
			$('#product-2').show();
			$('#product-1').hide();
			$('.product-type').removeClass('active');
			$('.product-type[data-id="2"]').addClass('active');
		}
		$('.slick-slider').slick('refresh');
	}
	$(".toggle-select__trigger").click(function () {
		$(this).toggleClass("change");

		changeBlock();
	});



	(function($){
		function changeProductTab(id){

			$('#'+id).addClass('active').siblings().removeClass('active');


			$('.model-select-menu a[href="#'+id+'"]').closest('li').addClass('active').siblings().removeClass('active');
            $('.product-type--tab').removeClass('active');
			$('.product-type--tab[href="#'+id+'"]').addClass('active');

			var index = $('.product-type--tab[href="#'+id+'"]').closest('.product-type-wrapper__item').data('slickIndex');
			console.log(index);
            $('.product-type-slider').slick('slickGoTo', index-1);
		}



		$('.model-select-menu a, .product-type--tab').on('click',function(e){
			e.preventDefault();
			var $target = $(e.currentTarget).attr('href').replace(/#/,'');
			changeProductTab($target)
		})
	})(jQuery)
});