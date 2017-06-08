

//function callModal() {
    // Get the modal
    var button = document.querySelectorAll("#button-angular, #button-cassandra, #button-bacrash"); //getElementbyId(button_id);
    var modal = document.querySelectorAll("#myModal-angular, #myModal-cassandra, #myModal-bacrash"); //getElementById('myModal');
    var span = document.querySelectorAll("#close-angular, #close-cassandra, #close-bacrash");
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.querySelectorAll("#img-file-angular, #img-file-cassandra, #img-file-bacrash"); //getElementsByClassName('img-file');
    var modalImg = document.querySelectorAll("#modal-image-angular, #modal-image-cassandra, #modal-image-bacrash"); //getElementsByClassName("modal-image");
    //var captionText = document.getElementsByClassName("caption");

    button[0].onclick = function(){
        modal[0].style.display = "block";
        modalImg[0].src = img[0].src;
    }

    button[1].onclick = function(){
        modal[1].style.display = "block";
        modalImg[1].src = img[1].src;
    }

    button[2].onclick = function(){
        modal[2].style.display = "block";
        modalImg[2].src = img[2].src;
    }


    /*for (var i=0; i<button.length; i++){ 
        button[i].onclick = function(){
            modal[i].style.display = "block";
            modalImg[i].src = img[i].src;
            //captionText[i].innerHTML = this.alt;
        }


    }*/

    // Get the <span> element that closes the modal
    //var span = document.getElementsByClassName("close")[0];

   /* for (var i=0; i<span.length; i++){

        span[i].onclick = function(){
            modal[i].style.display = "none";
        }

    }*/
    // When the user clicks on <span> (x), close the modal
    modalImg[0].onclick = function() { 
        modal[0].style.display = "none";
        //modal[0].css("opacity", "0").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', HideTheElementAfterAnimation);
    }

    modalImg[1].onclick = function() { 
        modal[1].style.display = "none";
    }

    modalImg[2].onclick = function() { 
        modal[2].style.display = "none";
    }


 $('#close, #overlay').click(function(e) {
      e.preventDefault();

      $('#overlay, #alertModalOuter').fadeOut(400, function() {
          $('#close').remove();
      });
  });

/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling plugin
/////////////////////////////////////////////////////////////////////

 //$(document).ready(function() {
  //  $('#fullpage').fullpage();
//});


/////////////////////////////////////////////////////////////////////
// jQuery for page scrolling feature - requires jQuery Easing plugin
/////////////////////////////////////////////////////////////////////

$('.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top -64
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});



////////////////////////////////////////////////////////////////////////
// On-Scroll Animated Header: https://github.com/codrops/AnimatedHeader
////////////////////////////////////////////////////////////////////////

var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-fixed-top' ),
        didScroll = false,
        changeHeaderOn = 10;

    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {
                didScroll = true;
                setTimeout( scrollPage, 250 );
            }
        }, false );
    }

    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) {
            classie.add( header, 'navbar-shrink' );
        }
        else {
            classie.remove( header, 'navbar-shrink' );
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();



//////////////////////////////////////////////
// Highlight the top nav as scrolling occurs
//////////////////////////////////////////////

$('body').scrollspy({
    target: '.navbar',
    offset: 65
})



///////////////////////////////////////////
// Display loading image while page loads
///////////////////////////////////////////

// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $(".page-loader").fadeOut("slow");
});



////////////////////////////////////////////////////
// OWL Carousel: http://owlgraphic.com/owlcarousel
////////////////////////////////////////////////////

// Intro text carousel
$("#owl-intro-text").owlCarousel({
    singleItem : true,
    autoPlay : 6000,
    stopOnHover : true,
    navigation : false,
    navigationText : false,
    pagination : true
})


// Partner carousel
$("#owl-partners").owlCarousel({
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    autoPlay : 5000,
    stopOnHover : true,
    pagination : false
})

// Testimonials carousel
$("#owl-testimonial").owlCarousel({
    singleItem : true,
    pagination : true,
    autoHeight : true,
    navigation: true,
    navigationText: [
       "<i class='fa fa-chevron-left'></i>",
       "<i class='fa fa-chevron-right'></i>"
    ]
})

// Work experience carousel
$("#owl-workexp").owlCarousel({
    singleItem : true,
    pagination : true,
    autoHeight : true,
    navigation: true,
    navigationText: [
       "<i class='fa fa-chevron-left'></i>",
       "<i class='fa fa-chevron-right'></i>"
    ]
})



////////////////////////////////////////////////////////////////////
// Stellar (parallax): https://github.com/markdalgleish/stellar.js
////////////////////////////////////////////////////////////////////

$.stellar({
    // Set scrolling to be in either one or both directions
    horizontalScrolling: false,
    verticalScrolling: true,
});



///////////////////////////////////////////////////////////
// WOW animation scroll: https://github.com/matthieua/WOW
///////////////////////////////////////////////////////////

new WOW().init();



////////////////////////////////////////////////////////////////////////////////////////////
// Counter-Up (requires jQuery waypoints.js plugin): https://github.com/bfintal/Counter-Up
////////////////////////////////////////////////////////////////////////////////////////////

$('.counter').counterUp({
    delay: 10,
    time: 2000
});



////////////////////////////////////////////////////////////////////////////////////////////
// Isotop Package
////////////////////////////////////////////////////////////////////////////////////////////
$(window).load(function() {
$('.portfolio_menu ul li').click(function(){
	$('.portfolio_menu ul li').removeClass('active_prot_menu');
	$(this).addClass('active_prot_menu');
});

var $container = $('#portfolio');
$container.isotope({
  itemSelector: '.col-sm-4',
  layoutMode: 'fitRows'
});
$('#filters').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $container.isotope({ filter: filterValue });
  return false;
});
});



/////////////////////////
// Scroll to top button
/////////////////////////

// Check to see if the window is top if not then display button
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});

// Click event to scroll to top
$('.scrolltotop').click(function(){
    $('html, body').animate({scrollTop : 0}, 1500, 'easeInOutExpo');
    return false;
});



////////////////////////////////////////////////////////////////////
// Close mobile menu when click menu link (Bootstrap default menu)
////////////////////////////////////////////////////////////////////

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});


/////////////////////////////////////////////////////////////////////
// custom javascript for modal popups
/////////////////////////////////////////////////////////////////////

$(function() {
  $.scrollify({
    section : ".example-classname",
    setHeights: false,
    offset: 300,
  });
});

/*

$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});*/