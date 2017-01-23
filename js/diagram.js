// javascript

// Set up some options objects: 'single_opts' for when a single area is selected, which will show just a border
// 'all_opts' for when all are highlighted, to use a different effect - shaded white with a white border
// 'initial_opts' for general options that apply to the whole mapster. 'initial_opts' also includes callbacks
// onMouseover and onMouseout, which are fired when an area is entered or left. We will use these to show or
// remove the captions, and also set a flag to let the other code know if we're currently in an area.

 var inArea,
            map = $('#diagram'),
            captions = {
                restrooms: ["Public Restrooms",
                  "These buildings will provide the park and the community with high quality restrooms as well as public showers in the main restrooms next to the Information Center."],
                wall: ["The Wall",
                  "Here is where the Memorial Wall will stand, displaying the names of children who have died as a result of child abuse. It will be surrounded by 50 flagpoles, each bearing the flag of one of the 50 states. Each time a child dies because of child abuse, the corresponding state flag will be put at half mast in honor of that child."],
                teepee: ["Information Center",
                  "This will be the largest standing teepee in the world, containing the information center for the park."],
                picnic: ["Picnic Areas",
                  "These structures will be areas for guests to relax, eat, and enjoy the park."],
                playground: ["Playground Area",
                  "As a park dedicated to children, The Wall of Little Heroes Memorial Park will feature equipment specially designed for children to play, learn, and explore."],
                statue: ["Statues and Fountains",
                  "The park will feature several commemorative statues."],
                helicopter: ["Helicopter Pad",
                  "The park will include a helicopter landing pad for transportation for both leisure and emergencies. "],
                rv: ["RV Park",
                  "This will be an RV park with water, sewer, power, cable, and Wi-Fi." ],
                entrance: ["Entrance Buildings",
                  "These two buildings near the main entrance of the park will be a meeting place for park guests. The building at the entrance will be a venue for parties and gatherings that guests may have. The second building will feature a second-floor platform facing the memorial wall for speakers to address the guests there."
                ],
                },
            single_opts = {
                fillColor: '000000',
                fillOpacity: 0,
                stroke: true,
                strokeColor: 'ffbb00',
                strokeWidth: 4
            },
            all_opts = {
                fillColor: 'ffffff',
                fillOpacity: 0.3,
                stroke: true,
                strokeWidth: 4,
                strokeColor: 'ffffff'
            },
            initial_opts = {
                mapKey: 'data-name',
                isSelectable: false,
                onMouseover: function (data) {
                    inArea = true;
                    $('#diagram-caption-header').text(captions[data.key][0]);
                    $('#diagram-caption-text').text(captions[data.key][1]);
                    $('#diagram-caption').show();
                },
                onMouseout: function (data) {
                    inArea = false;
                    $('#diagram-caption').hide();
                }
            };
        opts = $.extend({}, all_opts, initial_opts, single_opts);


        // Bind to the image 'mouseover' and 'mouseout' events to activate or deactivate ALL the areas, like the
        // original demo. Check whether an area has been activated with "inArea" - IE<9 fires "onmouseover"
        // again for the image when entering an area, so all areas would stay highlighted when entering
        // a specific area in those browsers otherwise. It makes no difference for other browsers.

        map.mapster('unbind')
            .mapster(opts)
            .bind('mouseover', function () {
                if (!inArea) {
                    map.mapster('set_options', all_opts)
                       .mapster('set', true, 'all')
                       .mapster('set_options', single_opts);
                }
            }).bind('mouseout', function () {
                if (!inArea) {
                    map.mapster('set', false, 'all');
                }
            });
