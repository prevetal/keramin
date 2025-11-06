// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.overlay')


document.addEventListener('DOMContentLoaded', function () {
	// Основной слайдер на главной
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Карусель товаров
	const productsSliders = [],
		productThumbsSliders = [],
		products = document.querySelectorAll('.products .swiper.main'),
		productThumbs = document.querySelectorAll('.products .product .swiper.images')

	productThumbs.forEach(function (el, i) {
		el.classList.add('product_thumbs_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			nested: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1,
			on: {
				init(swiper) {
					const customPagination = $(swiper.el).find('.swiper-custom-pagination')

					for (let i = 0; i < (this.slides.length - 2); i++) {
						const span = $('<span>')
						.addClass('custom-bullet')
						.on('mouseover', () => this.slideToLoop(i))

						customPagination.append(span)
					}
				}
			}
		}

		productThumbsSliders.push(new Swiper('.product_thumbs_s' + i, options))
	})

	products.forEach(function (el, i) {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						setHeight(swiper.el.querySelectorAll('.product .name'))

						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let productsName = swiper.el.querySelectorAll('.product .name')

						productsName.forEach(el => el.style.height = 'auto')

						setHeight(productsName)

						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Карусель проектов - Слайдер в проекте
	const projectImagesSliders = [],
		projectImages = document.querySelectorAll('.projects .project .swiper')

	projectImages.forEach(function (el, i) {
		el.classList.add('project_images_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			nested: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 0,
			slidesPerView: 1
		}

		projectImagesSliders.push(new Swiper('.project_images_s' + i, options))
	})


	// Карусель проектов
	const projectSliders = [],
		projects = document.querySelectorAll('.projects .cont > .swiper')

	projects.forEach(function (el, i) {
		el.classList.add('projects_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						setHeight(swiper.el.querySelectorAll('.project .name'))

						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						let projectName = swiper.el.querySelectorAll('.project .name')

						projectName.forEach(el => el.style.height = 'auto')

						setHeight(projectName)

						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		projectSliders.push(new Swiper('.projects_s' + i, options))
	})


	// О компании слайдер
	let aboutInfoSlider = document.querySelector('.about_info .swiper')

	if (aboutInfoSlider) {
		new Swiper('.about_info .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// История бренда
	const historySliders = [],
		history = document.querySelectorAll('.history .swiper')

	history.forEach(function (el, i) {
		el.classList.add('history_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 24,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 40,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 60,
					slidesPerView: 3
				},
				1440: {
					spaceBetween: 80,
					slidesPerView: 3
				},
				1900: {
					spaceBetween: 120,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.year').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.year').outerHeight() * 0.5
						)
					})
				}
			}
		}

		historySliders.push(new Swiper('.history_s' + i, options))
	})


	// Карусель логотипов
	const logosSliders = [],
		logos = document.querySelectorAll('.logos .swiper')

	logos.forEach(function (el, i) {
		el.classList.add('logos_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 5
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 6
				},
				1920: {
					spaceBetween: 40,
					slidesPerView: 6
				}
			}
		}

		logosSliders.push(new Swiper('.logos_s' + i, options))
	})


	// Страница товара
	if ($('.text_block .slider').length) {
		const textSliderThumbs = new Swiper('.text_block .slider .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			slidesPerView: 4,
			spaceBetween: 15
		})

		new Swiper('.text_block .slider .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			thumbs: {
				swiper: textSliderThumbs
			}
		})
	}


	// Карусель изображений
	const gallerySliders = [],
		gallery = document.querySelectorAll('.gallery .swiper')

	gallery.forEach(function (el, i) {
		el.classList.add('gallery_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 5
				},
				1900: {
					spaceBetween: 33,
					slidesPerView: 5
				}
			}
		}

		gallerySliders.push(new Swiper('.gallery_s' + i, options))
	})


	// Карусель магазинов
	const shopsСarouselSliders = [],
		shopsСarousel = document.querySelectorAll('.shops_carousel .swiper')

	shopsСarousel.forEach(function (el, i) {
		el.classList.add('shops_carousel_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1900: {
					spaceBetween: 40,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.$el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		shopsСarouselSliders.push(new Swiper('.shops_carousel_s' + i, options))
	})


	// Сравнение
	let compareTopSlider = document.querySelector('.compare_info .desktop .top .swiper'),
		compareBottomSlider = document.querySelector('.compare_info .desktop .bottom .swiper'),
		compareMobileTopSlider = document.querySelectorAll('.compare_info .mobile .top .swiper'),
		compareMobileBottomSlider = document.querySelectorAll('.compare_info .mobile .bottom .swiper'),
		compareMobileTopSliders = [],
		compareMobileBottomSliders = []

	if (compareTopSlider && compareBottomSlider) {
		const compareTopSlider = new Swiper('.compare_info .desktop .top .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1900: {
					spaceBetween: 30,
					slidesPerView: 4
				}
			}
		})

		const compareBottomSlider = new Swiper('.compare_info .desktop .bottom .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 24,
					slidesPerView: 2
				},
				1280: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1900: {
					spaceBetween: 30,
					slidesPerView: 4
				}
			},
			on: {
				resize: swiper => setTimeout(() => compareHeight($(swiper.el)))
			}
		})

		compareTopSlider.controller.control = compareBottomSlider
		compareBottomSlider.controller.control = compareTopSlider
	}


	if (compareMobileTopSlider && compareMobileBottomSlider) {
		compareMobileTopSlider.forEach(function (el, i) {
			el.classList.add('compare_mobile_top_s' + i)

			let options = {
				loop: true,
				loopedSlides: el.querySelectorAll('.swiper-slide').length,
				speed: 500,
				watchSlidesProgress: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				spaceBetween: 0,
				slidesPerView: 1
			}

			compareMobileTopSliders.push(new Swiper('.compare_mobile_top_s' + i, options))
		})

		compareMobileBottomSlider.forEach(function (el, i) {
			el.classList.add('compare_mobile_bottom_s' + i)

			let options = {
				loop: true,
				loopedSlides: el.querySelectorAll('.swiper-slide').length,
				speed: 500,
				watchSlidesProgress: true,
				slideActiveClass: 'active',
				slideVisibleClass: 'visible',
				spaceBetween: 0,
				slidesPerView: 1,
				on: {
					resize: swiper => setTimeout(() => compareMobileHeight($(swiper.el)))
				}
			}

			compareMobileBottomSliders.push(new Swiper('.compare_mobile_bottom_s' + i, options))
		})

		compareMobileTopSliders.forEach((topSwiper, i) => {
			const bottomSwiper = compareMobileBottomSliders[i]

			if (bottomSwiper) {
				topSwiper.controller.control = bottomSwiper
				bottomSwiper.controller.control = topSwiper
			}
		})
	}


	// Товар в избранное
	$('.product .favorite_btn, .product_info .favorite_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в сравнение
	$('.product .compare_btn, .product_info .compare_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в корзину
	$('.product .buy_btn, .product_info .buy .buy_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Всплывающие окна
	const modalBtns = document.querySelectorAll('.modal_btn')

	if (modalBtns) {
		modalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()

				Fancybox.show([{
					src: document.getElementById(el.getAttribute('data-modal')),
					type: 'inline'
				}])
			})
		})
	}


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent           = $(this).closest('.tabs_container'),
				  activeTab         = $(this).data('content'),
				  $activeTabContent = $(activeTab),
				  level             = $(this).data('level')

			$parent.find('.tabs:first .btn').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab        = $(`.tabs .btn[data-content="${locationHash}"]`),
			  $activeTabContent = $(locationHash),
			  $parent           = $activeTab.closest('.tabs_container'),
			  level             = $activeTab.data('level')

		$parent.find('.tabs:first .btn').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	// Изменение количества товара
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// регистрация
	$('.form .type .radio').click(function (e) {
		if (e.target.nodeName == 'LABEL') {
			let parent = $(this).closest('.form'),
				info = $(this).data('info')

			parent.find('.type_fields').hide()
			parent.find(info).fadeIn(300)
		}
	})


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Выбор файла
	const fileInputs = document.querySelectorAll('form input[type=file]')

	if (fileInputs) {
		fileInputs.forEach(el => {
			el.addEventListener('change', () => el.closest('.file').querySelector('label span').innerText = el.value)
		})
	}


	// Фокус при клике на название поля
	const formLabels = document.querySelectorAll('form .label')

	if (formLabels) {
		formLabels.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				el.closest('.line').querySelector('.input, textarea').focus()
			})
		})
	}


	// Кастомный select
	var selectsArr = [],
		selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => selectsArr.push(NiceSelect.bind(el)))
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .categories .sub')

		// Подменю на тач скрине
		$('header .categories > * > a.sub_link').addClass('touch_link')

		$('header .categories > * > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				$dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Закрываем под. меню при клике за её пределами
		document.addEventListener('click', e => {
			if ($(e.target).closest('.categories').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Фильтр
	$('.mob_filter_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	$('.filter .item .name').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).toggleClass('active')
		parent.find('.data').slideToggle(300)
	})


	$('.filter .spoler_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.item')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 250000,
		from: 1000,
		to: 179000,
		step: 100,
		onChange: function (data) {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})


	$('.filter .reset_btn').click(function () {
		$priceRange.reset()
	})


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					direction: 'horizontal',
					slidesPerView: 3,
					spaceBetween: 15
				},
				480: {
					direction: 'horizontal',
					slidesPerView: 4,
					spaceBetween: 15
				},
				768: {
					direction: 'vertical',
					slidesPerView: 'auto',
					spaceBetween: 15
				}
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			thumbs: {
				swiper: productThumbs
			}
		})
	}


	$('.product_info .features .spoler_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.features')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	// Плавная прокрутка к якорю
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Залипание блока
	if (WW > 1023) {
		new hcSticky('.sticky', {
			top: 89
		})
	}


	// Оформление заказа
	$('.checkout_info .delivery_methods label').click(function (e) {
		if (e.target.nodeName == 'LABEL') {
			let parent = $(this).closest('.section'),
				info = $(this).data('info')

			parent.find('.delivery_info').hide()
			parent.find(info).fadeIn(300)
		}
	})


	$('.checkout_info .entity_check .checkbox').click(function (e) {
		let _self = $(this)

		setTimeout(function () {
			_self.find('input').prop('checked')
				? $('.checkout_info .entity_info').slideDown(300)
				: $('.checkout_info .entity_info').slideUp(200)
		})
	})


	// Личный кабинет
	$('.orders .order .head').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.order')

		parent.toggleClass('active').find('.data').slideToggle(300)
	})


	// Location modal
	if (document.getElementById('location_modal')) {
		Fancybox.show([{
			src: document.getElementById('location_modal'),
			type: 'inline',
			closeButton: false
		}])
	}


	$('body').on('click', '.modal .close_btn', e => {
		e.preventDefault()

		Fancybox.close()
	})
})



window.addEventListener('load', function () {
	// Выравнивание элементов в сетке
	document.querySelectorAll('.products .row').forEach(el => {
		let styles = getComputedStyle(el)

		productsHeight(el, parseInt(styles.getPropertyValue('--count')))
	})


	// Фикс. шапка
	if (!$('header').hasClass('no_fixed')) {
		headerInit   = true,
		headerHeight = $('header').outerHeight()

		$('header').wrap('<div class="header_wrap"></div>')
		$('.header_wrap').height(headerHeight)

		headerInit && $(window).scrollTop() > headerHeight
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}
})



window.addEventListener('scroll', function () {
	if (typeof headerInit !== 'undefined' && headerInit && !$('header').hasClass('no_fixed')) {
        const header = $('header')

        if ($(window).scrollTop() > headerHeight) {
            header.addClass('fixed')

            headerHeight = header.outerHeight()

            $('.compare_info .desktop .top').css('top', headerHeight + 'px')
        } else {
            header.removeClass('fixed')

            $('.compare_info .desktop .top').css('top', 0)
        }
    }


	// Фикс верхней части страницы сравнения
	const compareHead = document.querySelector('.compare_info .desktop .top'),
		compareMobileHead = document.querySelector('.compare_info .mobile .top')

	const rect = compareHead.getBoundingClientRect(),
		rectMob = compareMobileHead.getBoundingClientRect()

	rect.top <= 0
		? compareHead.classList.add('is-stuck')
		: compareHead.classList.remove('is-stuck')

	rectMob.top <= 0
		? compareMobileHead.classList.add('is-stuck')
		: compareMobileHead.classList.remove('is-stuck')
})


window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Выравнивание элементов в сетке
		document.querySelectorAll('.products .row').forEach(el => {
			let styles = getComputedStyle(el)

			productsHeight(el, parseInt(styles.getPropertyValue('--count')))
		})


		// Фикс. шапка
		if (!$('header').hasClass('no_fixed')) {
			headerInit = false
			$('.header_wrap').height('auto')

			setTimeout(() => {
				headerInit   = true
				headerHeight = $('header').outerHeight()

				$('.header_wrap').height(headerHeight)

				headerInit && $(window).scrollTop() > headerHeight
					? $('header').addClass('fixed')
					: $('header').removeClass('fixed')
			}, 100)
		}


		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Выравнивание товаров
function productsHeight(context, step) {
	let start = 0,
		finish = step,
		products = [...context.querySelectorAll('.product')],
		productsName = context.querySelectorAll('.name'),
		i = 0

	productsName.forEach(el => el.style.height = 'auto')

	products.forEach(el => {
		products.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .name'))

		start = start + step
		finish = finish + step
		i++
	})
}



// Compare height
function compareHeight(slider) {
	$('.compare_info .desktop .bottom .features > *').height('auto')

	let productFeatures = slider.find('.features'),
		compareFeatures = $('.compare_info .desktop .bottom .col_left .features > *'),
		sizes = new Object()

	compareFeatures.each(function () {
		if (sizes[$(this).index()]) {
			if ($(this).outerHeight() > sizes[$(this).index()]) {
				sizes[$(this).index()] = $(this).outerHeight()
			}
		} else {
			sizes[$(this).index()] = $(this).outerHeight()
		}
	})

	productFeatures.each(function () {
		$(this).find('> *').each(function () {
			if (sizes[$(this).index()]) {
				if ($(this).outerHeight() > sizes[$(this).index()]) {
					sizes[$(this).index()] = $(this).outerHeight()
				}
			} else {
				sizes[$(this).index()] = $(this).outerHeight()
			}
		})
	})

	compareFeatures.each(function(index) {
		$(this).innerHeight(sizes[index])
	})

	productFeatures.each(function() {
		$(this).find('> *').each(function(index) {
			$(this).innerHeight(sizes[index])
		})
	})
}


function compareMobileHeight() {
    $('.compare_info .mobile .bottom .features > *').height('auto')

	let sizes = new Object()

    $('.compare_info .mobile .bottom .swiper').each(function() {
        const features = $(this).find('.features')

        features.each(function () {
			$(this).find('> *').each(function () {
				if (sizes[$(this).index()]) {
					if ($(this).outerHeight() > sizes[$(this).index()]) {
						sizes[$(this).index()] = $(this).outerHeight()
					}
				} else {
					sizes[$(this).index()] = $(this).outerHeight()
				}
			})
		})
    })

    $('.compare_info .mobile .bottom .swiper').each(function() {
        const features = $(this).find('.features')

        features.each(function () {
			$(this).find('> *').each(function(index) {
				$(this).innerHeight(sizes[index])
			})
		})
    });
}