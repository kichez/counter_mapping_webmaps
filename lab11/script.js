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
	console.log ('My name is Kate');
	map.addsource('restaurantsource', {
'type':'vector',
    'url': 'mapbox://kchez.7a60aoqo'
  });
  // add a new layer with your polygons
  map.addLayer({
    'id':'restaurantlayer',
    'type':'circle',
    'source':'restaurantsource',
    'source-layer':'Historical_Restaurant_Scores_-bwqdmf',
    'paint':{
      'circle-color':'#00158f'
    }
  })
});




//map.on('mouseenter', 'inspections' (e) => {
	//console.log(e.features[0]['properties']['business_name'])
	var name = e.features[0]['properties']['business_name'];
	var textfield = document.getelementbyid ('restText');
	textfield.innerhtml = name;
//	})
