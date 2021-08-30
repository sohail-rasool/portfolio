// Owl carousel js start

$(document).ready(function () {
  var owl = $("#customers-testimonials");
  owl.owlCarousel({
    items: 1,
    pagination: true,
    loop: true,
    autoplay: true,
  });

  //Following code would do the trick.
  $(document.documentElement).keyup(function (event) {
    if (event.keyCode == 37) {
      owl.trigger('prev.owl.carousel');
    } else if (event.keyCode == 39) {
      owl.trigger('next.owl.carousel');
    }
  });
});
// Owl carousel js end

// Accordian js start
$("#accordionExample").on("hide.bs.collapse show.bs.collapse", (e) => {
  $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
});

$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Accordian js end

// filter js start

var Shuffle = window.Shuffle;
var element = document.querySelector(".my-shuffle-container");
var sizer = element.querySelector(".my-sizer-element");

var shuffleInstance = new Shuffle(element, {
  itemSelector: ".picture-item",
  sizer: sizer, // could also be a selector: '.my-sizer-element'
});
// shuffleInstance.filter('animal');
$("#all").on("click", function () {
  shuffleInstance.filter();
});
$("#photography").on("click", function () {
  shuffleInstance.filter("animal");
});
$("#web-development").on("click", function () {
  shuffleInstance.filter("city");
});
$("#travel-tour").on("click", function () {
  shuffleInstance.filter("nature");
});
$("#hotel-restaurant").on("click", function () {
  shuffleInstance.filter("city");
});
$("#onlineAdvertising").on("click", function () {
  shuffleInstance.filter("animal");
});

// filter js end
