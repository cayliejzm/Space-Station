
var baseIssURL = "http://api.open-notify.org/iss-now.json";
var $baseLatitude = $(".latitude");
var $baseLongitude = $(".longitude");
var currentLat;
var currentLng;

var getCurrentLocation = function ( longitude, latitude ) {
  $.ajax ({
    url: baseIssURL,
    dataType: "JSONP",
    type: "GET"
  }).done(getCurrentLocation);
  });
};

getCurrentLocation();

var initMap = function ( data ) {
  var issLatitude = data.iss_position.latitude;
  var issLongitude = data.iss_position.longitude;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {
      lat: issLatitude,
      lng: issLongitude
    },
  });


var marker = new google.maps.Marker({
  position: {
    // getCurrentLocation();
    lat: issLatitude,
    lng: issLongitude
   },
    map: map,
    title: "SPACE STATION"
 });
};


window.setTimeout( initMap, 3000);
