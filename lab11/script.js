mapboxgl.accessToken= "pk.eyJ1Ijoia2NoZXoiLCJhIjoiY2xuMXU4ZDd0MDF1dDJrbzQ1N3h6MG16ZyJ9.RUgGIqy5XQdcTlx9_rzdKA";
const map = new mapboxgl.Map({
	container: 'KATE',
	style: 'mapbox://styles/kchez/clofvdm7n004s01qj4pd907ix', 
	center: [-122.41616, 37.78626],
	zoom: 13.25,
	pitch: 19.50,
	bearing: -8.80
})
map.on('load', function(){
	console.log ('My name is KATE'),
			map.addSource('restaurantsource', {
		'type':'vector', 
		'url': 'mapbox://kchez.7a60aoqo'
		  });
		  // add a new layer with your polygons
  map.addLayer({
    'id':'restaurantlayer',
    'type':'circle',
    'source':'restaurantsource',
    'source-layer':'Historical_Restaurant_Scores_-bwqdmf',
    // 'source-layer':'historical-restaurant-scores-bwqdmf',
    'paint':{
      'circle-color':
    ['step',
					['to-number', ['get', 'inspection_score']],
					'#aaaaaa',  
					45, '#440154',  // (45 - 80)
					80, '#3b528b',  // (80 - 85)
					85, '#21908d',  // (85 - 90)
					90, '#5dc963',  // (90 - 95)
					95, '#fde725'   // (95 - 100)
					]
    }
  });





map.on('mouseenter', 'restaurantlayer', (e)  => {
	//console.log(e.features[0]['properties']['business_name'])
	var name = e.features[0]['properties']['business_name'];
	// console.log(name);
	var textfield = document.getElementById ('restText');
	textfield.innerHTML = name;
	})

});
