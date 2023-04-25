$(document).ready(function () {
  const amenities = {};
  const url = 'http://127.0.0.1:5001/api/v1/status/';
  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    const amenity_names = Object.values(amenities).join(', ');
    $('.amenities h4').text(amenity_names);
  });
});
