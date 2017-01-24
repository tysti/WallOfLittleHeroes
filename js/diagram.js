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
                  "These buildings will provide the park and the community with high quality restrooms. The main restrooms next to the Information Center will also include public showers for the convenience of those staying in the RV park and other guests who may need such facilities."],
                wall: ["The Wall",
                  "Here is where the Memorial Wall will stand, displaying the names of children who have died as a result of child abuse. Surrounding this wall will be 50 flagpoles, each bearing the flag of one of the 50 states. Each time a child dies as a victim of child abuse, the corresponding state flag will be put at half mast in honor of that child."],
                teepee: ["Information Center",
                  "This teepee will stand over 250 feet tall and will serve as the Information Center for the park. The first floor of this building will consist mainly of shops for food, drinks, and gifts. The second floor will showcase a computer system which models the rates of child abuse in the United States. Since security is a primary value of this Memorial Park, the third floor will house the park security headquarters in order to ensure that this space is a safe haven for everyone."],
                picnic: ["Picnic Pavilions",
                  "These structures will be areas for guests to relax, eat, and enjoy the park. There will be four of these picnic areas to provide guests with plenty of space."],
                playground: ["Playground Area",
                  "As a park dedicated to children, The Wall of Little Heroes Memorial Park will feature equipment specially designed for children to play, learn, and explore. A helicopter will be converted into a playground structure, with swings, slides, and an opportunity for children to sit in the cockpit. Another trike-shaped playground structure will allow kids to have fun and play to their hearts' content."],
                statue: ["Statues and Fountains",
                  "The park will feature several commemorative statues. Some of the featured works will include a buffalo, a statue in honor of John Walsh, an angel and motorcycle, and statues in remembrance of firefighters and policemen who have lost their lives in service. The combination of these statues with the fountains around the park will provide an enjoyable and interesting park experience for all guests."],
                helicopter: ["Helicopter Pad",
                  "The park will include a helicopter landing pad for transportation by air in the event of an emergency. "],
                rv: ["RV Park",
                  "This will be an RV park fully equipped with water, sewer, power, cable, and Wi-Fi. 50 different overnights slots will allow guests to get the full experience of the park." ],
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
                    $('#diagram-caption-default').hide();
                    $('#diagram-caption').show();
                },
                onMouseout: function (data) {
                    inArea = false;
                    $('#diagram-caption').hide();
                    $('#diagram-caption-default').show();
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
