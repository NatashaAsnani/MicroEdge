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
