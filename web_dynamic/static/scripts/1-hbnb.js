$(document).ready(function(){
    const amenities = {};
    const amenities_check = 'input[type="checkbox"]';
    $(amenities_check).change(function() {
        if ($(this).is(':checked')) {
            amenities[$(this).data('id')] = $(this).data('name');
            $(this).css({
                'position': 'absolute',
                'left': ($(this).offset().left - 10) + 'px'
            });
        } else {
            delete amenities[$(this).data('id')];
        }
        let amenity_names = Object.values(amenities).join(', ');
        $('.amenities h4').text(amenity_names);
    });
});