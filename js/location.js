var locationBaseURL = "http://api.open-notify.org/iss-now.json";
var $baseLocationContent = $(".location .content");
var locationTimer = null;
var newLat;
var newLong;

var displayLocationInformation = function ( data ) {
   var newLat = data.iss_position.latitude;
   var newLong = data.iss_position.longitude;
   var $p = $(".issLocation");
   $p.text( "Latitude: " + newLat + " Longitude: " + newLong );
  //  $baseLocationContent.prepend( $p );
};

var getLocationInformation = function () {
 $.ajax({
  url: locationBaseURL,
  dataType: "JSONP",
  type: "GET"
  }).done(displayLocationInformation);

};

$(document).ready(function () {
  getLocationInformation();
  locationTimer = window.setInterval(getLocationInformation, 500);
  $(".location button").on("click", function () {
  window.clearInterval( locationTimer );
  });
});
