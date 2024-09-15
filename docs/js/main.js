$(document).ready(function(){
		$('.portfolio__slider').slick({
			centerPadding: '50px',
			arrows: true,
			dots: false,
			Infinite: true,
			centerMode: false,
			slidesToShow: 1,
			waitForAnimate: false,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
					  centerMode: false,
					  slidesToShow: 1,
					}
				 },
				{
					breakpoint: 768,
					settings: {
					  centerMode: false,
					  slidesToShow: 1,
					}
				 },
			]
		})
			$('.portfolio-prev').on('click', function (e) {
				e.preventDefault()
				$('.portfolio__slider').slick('slickPrev')
			})
		
			$('.portfolio-next').on('click', function (e) {
				e.preventDefault()
				$('.portfolio__slider').slick('slickNext')
			})
		
		
		$('.tariff__slider').slick({ 
			centerPadding: '50px',
			slidesToShow: 3,
			centerMode: true,
			Infinite: true,
			waitForAnimate: false,
			responsive: [
			  {
				 breakpoint: 1024,
				 settings: {
					centerMode: true,
					centerPadding: '250px',
					slidesToShow: 1,
				 }
			  },
			  {
				 breakpoint: 768,
				 settings: {
					centerMode: true,
					centerPadding: '150px',
					slidesToShow: 1,
				 }
			  },
			  {
				breakpoint: 576,
				settings: {
				  centerMode: true,
				  centerPadding: '50px',
				  slidesToShow: 1,
				}
			 },
			]
		 })

		 $(".burger").click(function(e) {
			$(".burger,.heder__menu").toggleClass("active");
		 })
	
		$('.burger, .overlay').on('click', function (e) {
			e.preventDefault()
			$('.header__menu').toggleClass('header__menu--open')
		})
		})






