var config = {
    style:  'mapbox://styles/kchez/clp72pke3013e01qs3k5n89hn',
    accessToken: 'pk.eyJ1Ijoia2NoZXoiLCJhIjoiY2xuMXU4ZDd0MDF1dDJrbzQ1N3h6MG16ZyJ9.RUgGIqy5XQdcTlx9_rzdKA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Each Tree',
    subtitle: 'Context of Urban Forestry and Green Spaces on Contested Land in Informal Settlements in Nairobi, Kenya',
    byline: 'By Kate Chesebrough',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: '15 Billion Trees by 2023?',
            image: 'images/rutoplant.jpeg',
            // description: 'Kenya is experiencing intense interest and mobilization around tree planting, in part due to President Ruto’s declaration that the country will plant 15 billion trees by 2032. These tree-planting initiatives get much attention in local politics and involvement by international NGOs, however, there are many accounts of planting trees with little accountability to their long-term survival.',
            descriptionMulti: ['Kenya is experiencing intense interest and mobilization around tree planting, in part due to President Ruto’s declaration that the country will plant 15 billion trees by 2032 as a means of combatting climate change.',
                            'These tree-planting initiatives get much attention in local politics and involvement by international NGOs, however, there are many accounts of planting trees with little accountability to their long-term survival.'],
                        location: {
                center: [36.70050, 0.50056],
                zoom: 5.67,
                pitch: 0.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'Satellite imagery',
                     opacity: 0,
                    duration: 5000
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
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Trees Under Pressure, Communities in Need',
            image: 'images/barkharvest.png',
            descriptionMulti: ['Native tree populations in forests within and outside of the city are under intense pressure – in addition to commercial logging interest, people in needs depend on tree products to meet basic needs including cooking and medicine.',
                                'According to Furukawa et al, medicinal uses of trees are meeting the needs of impoverished communities around the world, and in the case of Nairobi, this pressure is a direct threat to the long term survival of tree species due to overharvesting.',
                                'Improper bark stripping and cutting of Warburgia ugandensis, Eleadendron buchananii, Prunus africana, and many other species is leading to native tree populations crashing. The use of these medicinal plants by urban populations represents a strong relationship that still exists between people and landscape, incorporating rural indigenous knowledge into their daily lives.'],
            location: {
                center: [36.70050, 0.50056],
                zoom: 5.67,
                pitch: 0.50,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                  {
                   layer: 'kenya_gaz_forests',
                     opacity: 1,
                    duration: 5000
                 }
                 ],
            onChapterExit: []
        },
            {
            id: 'third-chapter',
            alignment: 'right',
            hidden: false,
            title: 'A Watershed Moment for Trees in Nairobi',
            image: 'images/figtreeprotest.png',
            description: 'Opposing forces are at large: processes of urbanization are actively removing trees from the city as part of infrastructure and residential expansion, and at the same time, nationwide climate initiatives include large-scale tree planting projects. An expressway recently constructed through the heart of the central business district drew widespread criticism and activism for removing thousands of trees.',
                        location: {
                 center: [36.87353, -1.26482],
                    zoom: 10.67,
                    pitch: 45.00,
                    bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'sdigroups',
                     opacity: 0,
                    duration: 5000
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
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Contested Landscapes in Informal Settlements Lead to Critical Infrastructure Gaps',
            image: 'images/treewastestream.png',
            descriptionMulti: ['Informal settlements are the most densely populated neighborhoods in Nairobi, at up to more than 2400 inhabitants per hectare. Informal neighborhoods are settlements typically located on marginal land that is often government-owned, with complex layers of ownership, control, and the lack thereof.',
            'The nature of this informality leads to critically lacking infrastructure including sanitary sewers, water, electricity, and other public services. Sanitary waste and solid waste are prevalent in the landscape, visible indications of gaps in public services, lack of oversight, and blatant corruption. Residents have no choice of where else to put their waste than in their own communities.',
            'Industrial and medical waste are dumped by irresponsible companies. Land, water, vegetation, and human lives are harmed by the presence of waste.'],
            location: {
             center: [36.86003, -1.26927],
                zoom: 13.34,
                pitch: 45.00,
                bearing: 0.00
              //speed: .5, // make the flying slow
              //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'landcovergreen',
                    opacity: 1,
                    duration: 5000
                }],
            onChapterExit: []
        },
{
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Climate Leadership by Youth in Informal Settlements',
            image: 'images/treeplanting.jpg',
            descriptionMulti: ['Despite these challenges, ambitious youth groups in informal settlements are taking climate action upon themselves. Group members are cleaning sites that have been used as dump sites and creating green community spaces and growing trees. This is in the context of highly contested spaces with very low canopy cover.',
                'According to a recent Slum Dwellers International - Kenya survey, there are over 363 youth groups working in the Mathare - Korogocho - Lucky Summer area, working along the Mathare, Gitathuru, and Nairobi Rivers.',
                'The youth groups are taking on climate action in the form of cleaning dump sites, growing trees, urban farming, river rehabilitation, revitalization and creation of public spaces, waste management, among others.',
                'The result of their efforts is a growing network of green spaces that instill significant community pride and that provide respite among stressful impoverished urban conditions. These spaces, and the work of young people to create and care for them, are therefore critical elements of community wellbeing, and deserve to be recognized and supported by larger governmental entities.'],
            location: {
              center: [36.86003, -1.26927],
                zoom: 13.34,
                pitch: 45.00,
                bearing: 0.00
              //speed: .5, // make the flying slow
              //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'sdigroups',
                     opacity: 1,
                    duration: 30
                }],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Critical Role in Public Space Creation',
            image: 'images/greenspacedense.png',
            descriptionMulti: ['A recently published UN Habitat inventory of public spaces in Nairobi recommends prioritizing corridors of green spaces. This report does not include the small public spaces that are most common in neighborhood settings in informal settings.',
                        'It is worth noting that youth groups in informal settlements are critical actors in caring for and creating public spaces that meet the needs of informal settlement communities, in a context where other actors are unable or unwilling to do so.'],
            location: {
              center: [36.86003, -1.26927],
                zoom: 13.34,
                pitch: 45.00,
                bearing: 0.00
              //speed: .5, // make the flying slow
              //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'pocketspaces',
                     opacity: 1,
                    duration: 30
                }],
            onChapterExit: []
        },
       {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The Potent Role of Trees in Informal Settlement Communities',
            image: 'images/tempoartspark.png',
            descriptionMulti: ['Trees grown and cared for by youth groups and community members are community lifelines. The trees themselves represent and support land tenure, memory of traditional practices, and survival in the immediate and long term.',
                    'Trees are therefore potent symbols with physical presence and agency, and human-tree relationships make care for trees possible and reinforce further relationships by being present in the community.'],
            location: {
              center: [36.86003, -1.26927],
                zoom: 13.34,
                pitch: 45.00,
                bearing: 0.00
              //speed: .5, // make the flying slow
              //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        },
        {
       id: 'interlude1',
       alignment: 'center',
       hidden: false,
       title: 'Trees as Tenure',
       description: 'Trees represent tenure in the context of spaces that are actively contested – there are many competing needs for space in informal settlements, a product of need as well as power dynamics. The decision to grow trees is an act of resistance in many settings, demonstrating community assertion of their rights to public green spaces and resisting ‘land grabbing’ by private development interests. The choice to plant trees is in part because trees and their lifespans represent time.',
       image: 'images/mathare-streetside.png',
       location: {
        center: [36.86003, -1.26927],
                zoom: 13.34,
                pitch: 45.00,
                bearing: 0.00
       },
    },
    {
       id: 'interlude2',
       alignment: 'center',
       hidden: false,
       title: 'Trees as Memory',
       description: 'Trees serve to preserve memory at many scales. Traditional medicinal uses of trees, as well as practices of working the land and tending to trees are preserved in the context of rapid urbanization, as the population of Nairobi swells with people who recently moved from rural environments and who are deeply connected with trees and landscapes. Trees are also planted as a direct way of memorializing community members whose lives have been lost as a result of extrajudicial killings, as young people are targeted by police during political strife.  ',
       image: 'images/mathare-memorial-center.png',
       location: {
        center: [36.86003, -1.26927],
                zoom: 13.34,
                pitch: 45.00,
                bearing: 0.00
       },
   },
           {
       id: 'interlude3',
       alignment: 'center',
       hidden: false,
       title: 'Trees as Survival',
       description: 'Trees provide both food and medicine to people living in informal settlements. Subsistence farming is a common use of green spaces created and cared for by youth groups, and knowledge of fruit tree management is extensive among community members. Trees used for traditional medicine is an important element of the medical landscape of informal settlements, as Western-style medicine is inaccessible to most people living in informal communities.',
       image: 'images/mathare-soccerfield.png',
       location: {
        center: [36.86003, -1.26927],
                zoom: 13.34,
                pitch: 45.00,
                bearing: 0.00
       },
        },
       {
            id: 'eighth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Insights for Urban Forestry',
            image: 'images/waterfalltalking.jpg',
            descriptionMulti: ['By understanding the motivations and practices of youth groups growing trees in informal settlements, much can be learned about long-term community goals and responses to climate change.',
                        'Landscape architects, planners, and many others can support their work by recognizing the commitment to care for trees that youth groups are demonstrating. This asserts the potential role of community-led urban forestry as part of the city public space network and urban canopy as a direct mitigation and adaptation to climate change that can improve city life at the same time. Valuing the work of youth groups and similar community organizations could provide new directions for urban forestry, by prioritizing care and caretakers that make the many benefits of urban forestry possible as a result of care for each tree.'],
            location: {
              center: [36.89983, -1.24234],
                zoom: 15.24,
                pitch: 45.00,
                bearing: 0.00
              //speed: .5, // make the flying slow
              //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }



    ]
};
