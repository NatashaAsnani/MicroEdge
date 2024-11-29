$(document).ready(function () {
  $('.nav-link').on('click', function () {
      $('.nav-link').removeClass('active');
      $(this).addClass('active');
  });
});

$(document).ready(function () {
  $('#openLink').on('click', function (event) {
      event.preventDefault(); 
      var userConfirmed = confirm("Are you sure you want to open this?");
      if (userConfirmed) {
          window.open($(this).attr('href'), '_blank');
      }
  });
});


gsap.fromTo(
    ".bg-image",
    { opacity: 0, scale: 1.2 },
    { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
);


document.querySelectorAll(".moreservices, .part2").forEach((card) => {
  card.addEventListener("mouseenter", () => {
      gsap.to(card, { scale: 1.05, duration: 0.3 });
  });
  card.addEventListener("mouseleave", () => {
      gsap.to(card, { scale: 1, duration: 0.3 });
  });
});

