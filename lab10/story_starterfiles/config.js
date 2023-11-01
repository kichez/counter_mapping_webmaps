var config = {
    style: 'mapbox://styles/kchez/clo5us70100i101p65ue48rau',
    accessToken: 'pk.eyJ1Ijoia2NoZXoiLCJhIjoiY2xuMXU4ZDd0MDF1dDJrbzQ1N3h6MG16ZyJ9.RUgGIqy5XQdcTlx9_rzdKA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Public and Affordable Housing Flood Risk',
    subtitle: 'With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
    byline: 'K. Chesebrough CRP 5850',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'New York City Flood Level Predictions',
            image: 'images/source.png',
            description: 'NYC Flooding levels predicted for 2050 and 2100, overlaid with public housing locations.',
            location: {
                center: [-73.98354, 40.73795],
                zoom: 12.41,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pluto-hous-type-master-featu-7b5u7f',
                    opacity: 1,
                    duration: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
          {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Red Hook Housing',
            image: 'images/redhook1.jpg',
            description: 'The Red Hook Houses, a 1940s-era public housing development, was devestated by storm surge during Hurricane Sandy. Residents were without power for weeks after the hurricane. Federal funding has supported award-winning building renovations which are in place today. ',
            location: {
                center: [-74.01280, 40.67479],
                zoom: 16.36,
                pitch: 67.05,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pluto-hous-type-master-featu-7b5u7f',
                    opacity: 1,
                    duration: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        }
    ]
};
