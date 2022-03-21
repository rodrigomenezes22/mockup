$(document).ready(function() {





    // Scroll effect to hide and show mobile menu
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar-burger').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('.navbar-burger').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('.navbar-burger').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }



    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "main-navi"
        $(".navbar-burger").toggleClass("is-active");
        $(".main-navi").toggleClass("is-active");

    });
    if ($(window).width() < 1024) {
        $(".navbar-item").click(function() {

            // Toggle the "is-active" class on both the "navbar-burger" and the "main-navi"
            $(".navbar-burger").removeClass("is-active");
            $(".main-navi").removeClass("is-active");

        });
    }



  });
