$(window).on('load', function(){
    /*======== Preloder ===========*/
   setTimeout(function() {
        $('body').addClass('loaded');
        $(window).scrollTop(0);
        /*=============================
            counter up
         =============================== */
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }, 1000);

});

$(document).ready(function(){
	$(window).scroll(function(){
		 // console.log($(window).scrollTop());
	    if($(window).scrollTop() > 15)
	    {
	      $("header").addClass('header-effect');
	      $('.header-effect').css({"margin":"auto","z-index":"999999"});
	    }else{
	    	$("header").removeClass('header-effect');
	    	$('header').css({"width":"100%","margin":"auto"});
	    }
	});

        /*Type writer*/
        Typed.new(".type-content", {
            strings: ["Graphic Designer", "Web Developer","Web Designer"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 50,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 0,
            // shuffle the strings
            shuffle: true,
            // time before backspacing
            backDelay: 500,
            // Fade out instead of backspace (must use CSS class)
            fadeOut: false,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 500, // milliseconds
            // loop
            loop: true,
            // null = infinite
            loopCount: null,
            // show cursor
            showCursor: true,
            // character for cursor
            cursorChar: "",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });

          /*
        ============================================
                    Parallax Efect
        ============================================
        */
     /*=============================
       Mobile Menu
      =============================== */
     $("#respMenu").aceResponsiveMenu({
         resizeWidth: '768', // Set the same in Media query       
         animationSpeed: 'medium', //slow, medium, fast
         accoridonExpAll: false //Expands all the accordion menu on click
     });
     
    $('.home-carousel').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
            },
            600:{
                items:1,
                nav:false,
            },
            1000:{
                items:1,
                nav:false,
                loop:false,
            }
        }
    });
     /*======== Smoothscroll js ===========*/
    
      $('a.smoth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1000);
        event.preventDefault();
      });
 
    /*=============================
        portfolio isotope
      =============================== */
    var $portfolio = $('.portfolio-iteam-area').isotope({
	  itemSelector: '.items',
	});

	/*================= filter items on button click ==================*/
    $('.filtering').on( 'click', 'span', function() {
    	 $('.filtering span').removeClass('active');
    	 $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $portfolio.isotope({ filter: filterValue });
    });
     
     /*=============================
        testimonial-carousel
     =============================== */
    $('.testimonial-carousel').owlCarousel({
    	loop:true,
	    margin:30,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false,
	        },
	        600:{
	            items:2,
	            nav:false,
	        },
	        1000:{
	            items:3,
	            nav:false,
	            loop:false,
	        }
	    }
	})

  /*
     ===========================================
                        Team
     ===========================================
    */
    $('.team-item').each( function() {
        $(this).mouseDetect({
            parentWidth : '100%',
            parentHeight : '100%',
            parentBgColor : '#fff',
            captionBgColor : '#fff',
            opacity         : 1,
            figCaption : '.member-caption'
        });
    });
    $(".team-item,.single-partner").on("mousedown touchstart", function(e) {
        $(this).addClass('grabbing');
    }).on("mouseup touchend", function(e) {
        $(this).removeClass('grabbing');
    });
        
    $('.team-item').on('mouseenter',function(){
        $('.member-skill').each(function(){
            var member = $(this);
            var percent = $(this).data('percent');
            var numberWidth = $('.skill-percent-num').width()/2;
            member.find('.skill-percent-bg').css({
                width : percent+'%',
                height : 4,
                backgroundColor : '#0fb5b3',
                transition : 'all 1500ms ease'
            });
            member.find('.skill-percent-num').css({
                transform : 'translateX('+(member.width() * percent)/100+'px)',
                transition : 'transform 1500ms ease'
            });
            member.find('.skill-percentage').css({
                transform : 'translateX('+(((member.width() * percent)/100)-5)+'px)',
                transition : 'transform 1500ms ease'
            }).html(percent+"%");
        });
        
    }).on('mouseleave',function(){
        $('.skill-percent-bg').css({
            width : 0,
            height : 4,
            backgroundColor : '#808080',
        });
        $('.skill-percent-num').css({
            transform : 'translateX(0)',
        });
        $('.skill-percentage').css({
           transform : 'translateX(0)'
        }).html('0%');
    });

     /*Team Slick*/
    $('.team-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay : false,
        prevArrow : 'none',
        nextArrow : 'none',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
   
    /*=======================form cs-group label class add ===================*/

    $('.cs-group').on('click' ,function(){
          $('.cs-label').removeClass('active');
         $(this).find('.cs-label').addClass('active');
    });

    /*
     ===========================================
                Map
     ===========================================
    */
    initMap();
    
    function initMap() {
        var myLatlng = {lat: 34.0420153, lng: -117.6610854};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: myLatlng
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Click to zoom'
        });

        marker.addListener('click', function() {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });
        map.addListener('mousedown',function(){
            map.setOptions({ scrollwheel: false });
        });
        $(window).on('scroll',function() {
            map.setOptions({ scrollwheel: false });
        });
    }

    /*
     ===========================================
                Map Overlay
     ===========================================
    */
    var action = 1;
    $('.map-overlay').on('click',function(){
        var overlay = $(this),
            overlayIcon = overlay.find('i');
        overlay.css({
            height : 100
        });
        var height = 100;
        if ( action == 1 ) {
            height = $('.map').height();
            overlayIcon.css({
                transform : 'rotate(-180deg)'
            }).removeClass('bounceUpDown');
            action = 2;
        } else {
            height = 100;
            overlayIcon.css({
                transform : 'rotate(0deg)'
            }).addClass('bounceUpDown');
            action = 1;
        }
        $('.map-container').animate({
            height : height
        });
    });
});