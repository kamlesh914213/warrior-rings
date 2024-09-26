

$(document).ready(function () {
    $(".home-page-last").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1           // One item for small screens
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

// ---------------------section-2-owl-carousel---------------------------------

$(document).ready(function () {
    $(".sec-2-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1           // One item for small screens
            },
            768: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});





// ------------------section-3-carousel---------------------------


$(document).ready(function () {
    $(".sec-3-card").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1          // 1 item for small screens (phones)
            },
            576: {
                items: 1          // 1 item for small screens (tablets)
            },
            768: {
                items: 2          // 2 items for medium screens
            },
            1000: {
                items: 4          // 4 items for large screens
            }
        }
    });
});

// -------------section-7-carousel----------------------------

$(document).ready(function () {
    $(".sec-7-card").owlCarousel({
        loop: true,               // Infinite loop
        margin: 10,               // Space between items
        nav: true,                // Show next/prev buttons
        dots: true,               // Show dots for pagination
        // autoplay:true,           // Autoplay the carousel
        autoplayTimeout: 3000,    // Time between slides
        responsive: {
            0: {
                items: 1           // One item for small screens
            },
            600: {
                items: 1        // Two items for medium screens
            },
            900: {
                items: 2
            }
        }
    });
});






// $(document).ready(function () {
//     $(".home-page").owlCarousel({
//         loop: true,               
//         margin: 10,              
//         nav: true,                
//         dots: true,               
//         autoplay: true,          
//         autoplayTimeout: 3000,    
//         responsive: {
//             0: {
//                 items: 1           
//             }

//         }
//     });
// });




// for sidebar
function openNav() {
    document.getElementById("mySidepanel").style.left = "0%";
}
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.left = "100%";
}
