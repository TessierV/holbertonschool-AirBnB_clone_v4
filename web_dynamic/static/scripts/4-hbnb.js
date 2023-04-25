$(document).ready(function () {
  const amenities = {};
  const url = "http://127.0.0.1:5001/api/v1/status/";
  $.get(url, function (data, textStatus) {
    if (textStatus === "success" && data.status === "OK") {
      $("#api_status").addClass("available");
    } else {
      $("#api_status").removeClass("available");
    }
  });

  $('input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
      amenities[$(this).data("id")] = $(this).data("name");
    } else {
      delete amenities[$(this).data("id")];
    }
    const amenity_names = Object.values(amenities).join(", ");
    $(".amenities h4").text(amenity_names);
  });

  $.ajax({
    type: "POST",
    url: "http://127.0.0.1:5001/api/v1/places_search/",
    data: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
    },
    success: function (data) {
      data.forEach(function (place) {
        const article = $("<article>");
        article.html(
          `<div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">$${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">
              ${place.max_guest} Guest${place.max_guest !== 1 ? "s" : ""}
            </div>
            <div class="number_rooms">
              ${place.number_rooms} Bedroom${
            place.number_rooms !== 1 ? "s" : ""
          }
            </div>
            <div class="number_bathrooms">
              ${place.number_bathrooms} Bathroom${
            place.number_bathrooms !== 1 ? "s" : ""
          }
            </div>
          </div>
          <div class="description">${place.description}</div>
          `
        );
        $("section.places").append(article);
      });
    },
  });
});
