jQuery(function($){

	var longitude = 40.748817;
	var latitude = -73.985428;
	var canvas = "map";

	
	function randing_map(canvas, lan, lat){			
			var myLatlng = new google.maps.LatLng(lan,lat);
			var myOptions = {
					zoom: 15,
					scrollwheel : false,
					mapTypeControl: false,
					streetViewControl:false,
					center: myLatlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
				}			
			var map = new google.maps.Map( document.getElementById(canvas), myOptions );
			var marker = new google.maps.Marker({
			    position : myLatlng,
			    map      : map,
			});
			
			var styles = [
							// Map style settings
						];
			var infowindow = new google.maps.InfoWindow({
				content:"<div class='map_adresse'><div class='map_address'><span class='address'>Address : </span>1401 South Grand Avenue Los Angeles, CA 90015</div> <div class='map_tel'><span class='tel'>Phone : </span>(213) 748-2411</div></div>"
			});	
			
			map.setOptions({styles: styles});

			google.maps.event.addListener(marker, 'click', function() {
			  infowindow.open(map,marker);
			});
	}
	randing_map(canvas, longitude, latitude);

});