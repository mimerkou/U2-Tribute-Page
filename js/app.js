// Init AOS
AOS.init();

// Get the current year for the copyright
const year = document.getElementById('year');
year.innerHTML = new Date().getFullYear();

// Video Play
// $(function() {
//     $(".video").click(function() {
//         var theModal = $(this).data("target"),
//             videoSRC = $(this).attr("data-video"),
//             videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";

//         $(theModal + ' iframe').attr('src', videoSRCauto);
//         $(theModal + ' button.close').click(function() {
//             $(theModal + ' iframe').attr('src', videoSRC);
//         });
//     });
// });


// Counter Up
$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});


// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' });


// Smooth scrolling
$('#main-nav a').on('click', function(e) {
    // check for a hash value
    if (this.hash !== '') {
      // prevent default behavior
      e.preventDefault();

      // store hash
      const hash = this.hash;

      // animate smooth scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
        // add hash to URL after the scroll
        window.location.hash = hash;
      });
    }
});
