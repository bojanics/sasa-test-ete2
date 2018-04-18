var map = null;

function embedMap()
{
    if (appConfiguration.mapCountryName && appConfiguration.mapWrapperId && appConfiguration.mapZoom && !isNaN(appConfiguration.mapZoom))
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            loadScript("https://www.bing.com/api/maps/mapcontrol", _loadBingMap);
        }
    }
}

function updateMap()
{
    if (appConfiguration.mapCountryName && appConfiguration.mapWrapperId && appConfiguration.mapZoom && !isNaN(appConfiguration.mapZoom))
    {
        // Check which maps provider we should use
        if (appConfiguration.bingMapsKey)
        {
            _loadBingMap();
        }
    }
}

function _loadBingMap()
{
    // calling virtual earth api
    if (appConfiguration.mapCenterLatitude && !isNaN(appConfiguration.mapCenterLatitude)
        && appConfiguration.mapCenterLongitude && !isNaN(appConfiguration.mapCenterLongitude))
    {
        var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Locations/" + Number(appConfiguration.mapCenterLatitude) + "," + Number(appConfiguration.mapCenterLongitude) + "?key=" + appConfiguration.bingMapsKey + "&jsonp=geocodeCallback";
    }
    else
    {
        var geocodeRequest = "https://dev.virtualearth.net/REST/v1/Locations?countryRegion=" + appConfiguration.mapCountryName + "&key=" + appConfiguration.bingMapsKey + "&jsonp=geocodeCallback";
    }
    
    loadScript(geocodeRequest, function(){});
}

function geocodeCallback(result)
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
        
        if (appConfiguration.mapCenterPushpin)
        {
            var pushpin;
            if (appConfiguration.mapCenterPushpinTitle)
            {
                var pushpinSettings = {};
                if (appConfiguration.mapCenterPushpinTitle)
                {
                    pushpinSettings.title = appConfiguration.mapCenterPushpinTitle;
                }
                
                if (appConfiguration.mapCenterPushpinSubTitle)
                {
                    pushpinSettings.subTitle = appConfiguration.mapCenterPushpinSubTitle;
                }
                
                pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), pushpinSettings);
            }
            else
            {
                pushpin = new Microsoft.Maps.Pushpin(map.getCenter());
            }
            
            map.entities.push(pushpin);
        }
    }
}

function addLocation(latitude, longitude, title, subtitle)
{
    var pushpin;
    if (title)
    {
        var pushpinSettings = {};
        if (title)
        {
            pushpinSettings.title = title;
        }
        
        if (subtitle)
        {
            pushpinSettings.subTitle = subtitle;
        }
        
        pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude), pushpinSettings);
    }
    else
    {
        pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(latitude, longitude));
    }
    
    map.entities.push(pushpin);
}