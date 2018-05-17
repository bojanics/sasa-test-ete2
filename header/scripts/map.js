var map = null;
var dm;

var MapPlugIn = 
{
    /**
     * Embeds a map on the page using configuration parameters
     */
    embedMap: function ()
    {
        if ((appConfiguration.mapCountryName || (appConfiguration.mapCenterLatitude && !isNaN(appConfiguration.mapCenterLatitude)
            && appConfiguration.mapCenterLongitude && !isNaN(appConfiguration.mapCenterLongitude)))
        && appConfiguration.mapWrapperId && appConfiguration.mapZoom && !isNaN(appConfiguration.mapZoom))
        {
            // Check which maps provider we should use
            if (appConfiguration.bingMapsKey)
            {
                loadScript("https://www.bing.com/api/maps/mapcontrol?setLang=" + languageSelector.currentLanguage, this._loadBingMap);
            }
        }
    },

    /**
     * Updates the map. Updated confiuration parameters will be applied.
     */
    updateMap: function ()
    {
        if (appConfiguration.mapCountryName && appConfiguration.mapWrapperId && appConfiguration.mapZoom && !isNaN(appConfiguration.mapZoom))
        {
            // Check which maps provider we should use
            if (appConfiguration.bingMapsKey)
            {
                _loadBingMap();
            }
        }
    },

    _loadBingMap: function ()
    {
        // calling virtual earth api
        if (appConfiguration.mapCenterLatitude && !isNaN(appConfiguration.mapCenterLatitude)
            && appConfiguration.mapCenterLongitude && !isNaN(appConfiguration.mapCenterLongitude))
        {
            var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Locations/" + Number(appConfiguration.mapCenterLatitude) + "," + Number(appConfiguration.mapCenterLongitude) + "?key=" + appConfiguration.bingMapsKey + "&jsonp=MapPlugIn.geocodeCallback";
        }
        else
        {
            var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Locations?countryRegion=" + appConfiguration.mapCountryName + "&key=" + appConfiguration.bingMapsKey + "&jsonp=MapPlugIn.geocodeCallback";
        }
        
        loadScript(geocodeRequest, function(){});
    },

    /**
     * The reloadMap function is called in case when we change the language and have to relaod the map with another language.
     */
    reloadMap: function () 
    {
        if ((appConfiguration.mapCountryName || (appConfiguration.mapCenterLatitude && !isNaN(appConfiguration.mapCenterLatitude)
            && appConfiguration.mapCenterLongitude && !isNaN(appConfiguration.mapCenterLongitude)))
        && appConfiguration.mapWrapperId && appConfiguration.mapZoom && !isNaN(appConfiguration.mapZoom))
        {
            // Check which maps provider we should use
            if (appConfiguration.bingMapsKey)
            {
                if (document.querySelector('script[src^="https://www.bing.com/api/maps/mapcontrol?setLang="]')) 
                {
                    $('script[href^="https://www.bing.com/"], script[src^="https://www.bing.com/"], link[href^="https://www.bing.com/"], script[src^="https://www.bing.com/api/maps/mapcontrol?setLang="], script[src^="https://dev.virtualearth.net"]').each(function () 
                    {   
                        $(this).remove();
                    });
                }
                
                map = null;
                this._dm = null;
                Microsoft = null;
                
                this.embedMap();
            }
        }
    },
    
    geocodeCallback: function (result)
    {
        if (result && result.resourceSets && result.resourceSets.length > 0 && result.resourceSets[0].resources && result.resourceSets[0].resources.length > 0)
        {
            var coordinates = result.resourceSets[0].resources[0].point.coordinates;
            var centerPoint = new Microsoft.Maps.Location(coordinates[0], coordinates[1]);
            
            map = new Microsoft.Maps.Map(document.getElementById(appConfiguration.mapWrapperId),
            {
                credentials: appConfiguration.bingMapsKey,
                center: centerPoint,
                mapTypeId: Microsoft.Maps.MapTypeId.road,
                zoom: Number(appConfiguration.mapZoom)
            });
            
            if (appConfiguration.mapShowInfoBox)
            {
                infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
                    visible: false
                });
                
                //Assign the infobox to a map instance.
                infobox.setMap(map);
            }
            
            if (appConfiguration.mapShowTraffic && appConfiguration.mapShowTraffic === "fromstart")
            {
                Microsoft.Maps.loadModule("Microsoft.Maps.Traffic", function ()
                {
                    //Create an instance of the traffic manager and bind to map.
                    trafficManager = new Microsoft.Maps.Traffic.TrafficManager(map);
                    
                    //Display the traffic data.
                    trafficManager.show();
                });
            }
            
            if (appConfiguration.mapCenterPushpin)
            {
                var pushpin;
                if (appConfiguration.mapCenterPushpinTitle)
                {
                    var pushpinSettings =
                    {
                        title: appConfiguration.mapCenterPushpinTitle
                    };
                    
                    if (appConfiguration.mapCenterPushpinSubTitle)
                    {
                        pushpinSettings.subTitle = appConfiguration.mapCenterPushpinSubTitle;
                    }
                    
                    pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), pushpinSettings);
                    
                    pushpin.metadata =
                    {
                        title: appConfiguration.mapCenterPushpinTitle
                    };
                    
                    if (appConfiguration.mapCenterPushpinDescription)
                    {
                        pushpin.metadata.description = appConfiguration.mapCenterPushpinDescription
                    }
                }
                else
                {
                    pushpin = new Microsoft.Maps.Pushpin(map.getCenter());
                }
                
                if (appConfiguration.mapShowInfoBox)
                {
                    //Add a click event handler to the pushpin.
                    Microsoft.Maps.Events.addHandler(pushpin, 'click', this._pushpinClicked);
                }
                
                map.entities.push(pushpin);
            }
        }
    },
    
    /**
     * Adds a pushpin to a given location on the map
     */
    addLocation: function (latitude, longitude, title, subtitle, description, pushpinClickedCallback)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            var pushpin;
            if (title)
            {
                var pushpinSettings =
                {
                    title: title
                };
            
                if (subtitle)
                {
                    pushpinSettings.subTitle = subtitle;
                }
                
                pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude), pushpinSettings);
                
                pushpin.metadata =
                {
                    title: title
                };
                
                if (description)
                {
                    pushpin.metadata.description = description;
                }
            }
            else
            {
                pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude));
            }
            
            if (pushpinClickedCallback)
            {
                //Add a click event handler to the pushpin.
                Microsoft.Maps.Events.addHandler(pushpin, 'click', pushpinClickedCallback);
            }
            else
            {
                if (appConfiguration.mapShowInfoBox)
                {
                    //Add a click event handler to the pushpin.
                    Microsoft.Maps.Events.addHandler(pushpin, 'click', this._pushpinClicked);
                }
            }
            
            map.entities.push(pushpin);
        }
    },
    
    /**
     * Removes a pushpin from a given location on the map if exists
     */
    removeLocation: function (latitude, longitude)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            if (map && map.entities && map.entities.getLength())
            {
                var pushpin = null;
                for (var entInd = 0; entInd < map.entities.getLength(); entInd++)
                {
                    if (Microsoft.Maps.Location.areEqual(map.entities.get(entInd).getLocation(), new Microsoft.Maps.Location(latitude, longitude)))
                    {
                        pushpin = map.entities.get(entInd);
                        
                        break;
                    }
                }
                
                if (pushpin)
                {
                    map.entities.remove(pushpin);
                }
            }
        }
    },
    
    _pushpinClicked: function (e)
    {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata)
        {
            if (appConfiguration.mapShowInfoBox)
            {
                //Set the infobox options with the metadata of the pushpin.
                infobox.setOptions
                ({
                    location: e.target.getLocation(),
                    title: e.target.metadata.title,
                    description: e.target.metadata.description,
                    visible: true
                });
            }
        }
        
        if (appConfiguration.mapShowTraffic && appConfiguration.mapShowTraffic === "pushpinclick")
        {
            Microsoft.Maps.loadModule("Microsoft.Maps.Traffic", function ()
            {
                //Create an instance of the traffic manager and bind to map.
                trafficManager = new Microsoft.Maps.Traffic.TrafficManager(map);
                
                //Display the traffic data.
                trafficManager.show();
            });
        }
    },
    
    /**
     * Creates a driving route from one point on the map to another
     */
    showRoute: function (startla, endla, startlong, endlong, startTitle, endTitle)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            if (dm != null)
            {
                dm.clearAll();
            }
            
            Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function ()
            {
                dm = new Microsoft.Maps.Directions.DirectionsManager(map);
                dm.setRequestOptions
                ({
                    routeMode: Microsoft.Maps.Directions.RouteMode.driving,
                    distanceUnit: Microsoft.Maps.Directions.DistanceUnit.km
                });
                
                dm.setRenderOptions
                ({
                    autoUpdateMapView: false,
                    drivingPolylineOptions:
                    {
                        strokeColor: 'blue',
                        strokeThickness: 3
                    }
                });
                
                dm.addWaypoint(new Microsoft.Maps.Directions.Waypoint
                (startTitle ? {
                    address: startTitle,
                    location: new Microsoft.Maps.Location(startla, startlong)
                } : {                
                    location: new Microsoft.Maps.Location(startla, startlong)
                }));
                
                dm.addWaypoint(new Microsoft.Maps.Directions.Waypoint
                (endTitle ? {
                    address: endTitle,
                    location: new Microsoft.Maps.Location(endla, endlong)
                } : {
                    location: new Microsoft.Maps.Location(endla, endlong)
                }));
                
                dm.calculateDirections();
                
                if (appConfiguration.mapRouteInfoWrapperId && document.getElementById(appConfiguration.mapRouteInfoWrapperId))
                {
                    dm.setRenderOptions
                    ({
                        itineraryContainer: document.getElementById(appConfiguration.mapRouteInfoWrapperId)
                    });
                }
            });
        }
    },
    
    /**
     * Calculates distances from an origin to destinations. Calls remote API function to perform calculation asynchronously.
     * Executes a callback function when calculation is performed and hands over distance matrix to the callback function as
     * a parameter array of the format:
     * [{"distance": <Distance to the first destination point>, "time": <Time needed to get to the first destination point>},...]
     * 
     * @param origla {number} Latitude of the origin
     * @param origlong {number} Longitude of the origin
     * @param destlas {array} Array of destionation latitudes
     * @param destlongs {array} Array of destination longitudes
     * @param travelMode {string} Travel mode type
     * @param callback {function} Function called when distances are calculated
     */
    getDistanceMatrix: function (origla, origlong, destlas, destlongs, travelMode, callback)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            var destinations = [];
            for (var destInd = 0; destInd < destlas.length && destInd < destlongs.length; destInd++)
            {
                destinations.push({"latitude": destlas[destInd], "longitude": destlongs[destInd]});
            }
            
            if (destinations.length)
            {
                var xhr = new XMLHttpRequest();
                var distance;
                var time;
                
                xhr.addEventListener("readystatechange", function ()
                {
                    if (this.readyState === 4)
                    {
                        var result = this.responseText;
                        var resultJSON = JSON.parse(result).resourceSets[0].resources[0].results;
                        var parsedResults = [];
                        for (var i = 0; i < resultJSON.length; i++)
                        {
                            parsedResults.push({"distance": resultJSON[i].travelDistance, "time": resultJSON[i].travelDuration});
                        }
                        
                        callback(parsedResults);
                    }
                });
                
                var url = "https://dev.virtualearth.net/REST/v1/Routes/DistanceMatrix?key=" + appConfiguration.bingMapsKey;

                xhr.open("POST", url);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.send(JSON.stringify
                ({
                    "origins":
                    [{
                        "latitude": origla,
                        "longitude": origlong
                    }],
                    "destinations": destinations,
                    "travelMode": travelMode
                }));
            }
        }
    },
    
    searchAddress: function (query, maxResults, callbackName, options)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            var geocodeRequest = "http://dev.virtualearth.net/REST/v1/Locations?query=" + encodeURIComponent(query) + "&maxResults=" + maxResults + "&key="
                + appConfiguration.bingMapsKey + (options && typeof options.culture == "string" ? "&culture=" + options.culture : "")
                + "&userMapView" + map.getBounds().bounds[0] + "," + + map.getBounds().bounds[1] + "," + map.getBounds().bounds[2] + ","
                + map.getBounds().bounds[3]  + (options && typeof options.userRegion == "string" ? "&userRegion=" + options.userRegion : "")
                + "&jsonp=" + (callbackName ? callbackName : "MapPlugIn._geocodeSearchCallback");
            loadScript(geocodeRequest, function(){});
        }
    },
    
    findAddress: function (district, locality, postalCode, addressLine)
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Locations?countryRegion=" + appConfiguration.mapCountryName + "&adminDistrict=" + district + "&locality=" + locality + "&postalCode=" + postalCode + "&addressLine=" + addressLine + "&key=" + appConfiguration.bingMapsKey + "&jsonp=MapPlugIn._geocodeSearchCallback";
            loadScript(geocodeRequest, function(){});
        }
    },

    _geocodeSearchCallback: function (result)
    {
        if (result && result.resourceSets && result.resourceSets.length > 0 && result.resourceSets[0].resources && result.resourceSets[0].resources.length > 0)
        {
            addLocation(result.resourceSets[0].resources[0].point.coordinates[0], result.resourceSets[0].resources[0].point.coordinates[1], 'Your Location', '', '');
        }
    }
}