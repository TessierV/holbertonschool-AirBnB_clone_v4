$('document').ready(function () {
  const amenities = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    let amenityNames = Object.values(amenities).join(', ');
    // small list of amenties check finish by ...
    if (amenityNames.length > 35) {
      amenityNames = amenityNames.substring(0, 35) + '...';
    }
    $('.amenities h4').text(amenityNames);
  });
});
