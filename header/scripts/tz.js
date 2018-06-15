/**
 * Maps time zone alias with time zone display name in Windows time zone format. This map contains supported time zones for the current user.
 */
var supportedTimeZonesMap = {};

var timeZonesArray = [
    {
        "alias": "Dateline Standard Time",
        "displayName": "(UTC-12:00) International Date Line West"
    },
    {
        "alias": "Samoa Standard Time",
        "displayName": "(UTC+13:00) Samoa"
    },
    {
        "alias": "UTC-11",
        "displayName": "(UTC-11:00) Coordinated Universal Time-11"
    },
    {
        "alias": "Aleutian Standard Time",
        "displayName": "(UTC-10:00) Aleutian Islands"
    },
    {
        "alias": "Hawaiian Standard Time",
        "displayName": "(UTC-10:00) Hawaii"
    },
    {
        "alias": "Marquesas Standard Time",
        "displayName": "(UTC-09:30) Marquesas Islands"
    },
    {
        "alias": "Alaskan Standard Time",
        "displayName": "(UTC-09:00) Alaska"
    },
    {
        "alias": "UTC-09",
        "displayName": "(UTC-09:00) Coordinated Universal Time-09"
    },
    {
        "alias": "Pacific Standard Time (Mexico)",
        "displayName": "(UTC-08:00) Baja California"
    },
    {
        "alias": "UTC-08",
        "displayName": "(UTC-08:00) Coordinated Universal Time-08"
    },
    {
        "alias": "Pacific Standard Time",
        "displayName": "(UTC-08:00) Pacific Time (US & Canada)"
    },
    {
        "alias": "US Mountain Standard Time",
        "displayName": "(UTC-07:00) Arizona"
    },
    {
        "alias": "Mountain Standard Time (Mexico)",
        "displayName": "(UTC-07:00) Chihuahua, La Paz, Mazatlan"
    },
    {
        "alias": "Mountain Standard Time",
        "displayName": "(UTC-07:00) Mountain Time (US & Canada)"
    },
    {
        "alias": "Eastern Standard Time (Mexico)",
        "displayName": "(UTC-05:00) Chetumal"
    },
    {
        "alias": "Central America Standard Time",
        "displayName": "(UTC-06:00) Central America"
    },
    {
        "alias": "Central Standard Time",
        "displayName": "(UTC-06:00) Central Time (US & Canada)"
    },
    {
        "alias": "Easter Island Standard Time",
        "displayName": "(UTC-06:00) Easter Island"
    },
    {
        "alias": "Central Standard Time (Mexico)",
        "displayName": "(UTC-06:00) Guadalajara, Mexico City, Monterrey"
    },
    {
        "alias": "Canada Central Standard Time",
        "displayName": "(UTC-06:00) Saskatchewan"
    },
    {
        "alias": "Turks And Caicos Standard Time",
        "displayName": "(UTC-04:00) Turks and Caicos"
    },
    {
        "alias": "SA Pacific Standard Time",
        "displayName": "(UTC-05:00) Bogota, Lima, Quito, Rio Branco"
    },
    {
        "alias": "Eastern Standard Time",
        "displayName": "(UTC-05:00) Eastern Time (US & Canada)"
    },
    {
        "alias": "Haiti Standard Time",
        "displayName": "(UTC-05:00) Haiti"
    },
    {
        "alias": "Cuba Standard Time",
        "displayName": "(UTC-05:00) Havana"
    },
    {
        "alias": "US Eastern Standard Time",
        "displayName": "(UTC-05:00) Indiana (East)"
    },
    {
        "alias": "Venezuela Standard Time",
        "displayName": "(UTC-04:00) Caracas"
    },
    {
        "alias": "Magallanes Standard Time",
        "displayName": "(UTC-03:00) Punta Arenas"
    },
    {
        "alias": "Paraguay Standard Time",
        "displayName": "(UTC-04:00) Asuncion"
    },
    {
        "alias": "Atlantic Standard Time",
        "displayName": "(UTC-04:00) Atlantic Time (Canada)"
    },
    {
        "alias": "Central Brazilian Standard Time",
        "displayName": "(UTC-04:00) Cuiaba"
    },
    {
        "alias": "SA Western Standard Time",
        "displayName": "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan"
    },
    {
        "alias": "Pacific SA Standard Time",
        "displayName": "(UTC-04:00) Santiago"
    },
    {
        "alias": "Newfoundland Standard Time",
        "displayName": "(UTC-03:30) Newfoundland"
    },
    {
        "alias": "Tocantins Standard Time",
        "displayName": "(UTC-03:00) Araguaina"
    },
    {
        "alias": "E. South America Standard Time",
        "displayName": "(UTC-03:00) Brasilia"
    },
    {
        "alias": "SA Eastern Standard Time",
        "displayName": "(UTC-03:00) Cayenne, Fortaleza"
    },
    {
        "alias": "Argentina Standard Time",
        "displayName": "(UTC-03:00) City of Buenos Aires"
    },
    {
        "alias": "Greenland Standard Time",
        "displayName": "(UTC-03:00) Greenland"
    },
    {
        "alias": "Montevideo Standard Time",
        "displayName": "(UTC-03:00) Montevideo"
    },
    {
        "alias": "Saint Pierre Standard Time",
        "displayName": "(UTC-03:00) Saint Pierre and Miquelon"
    },
    {
        "alias": "Bahia Standard Time",
        "displayName": "(UTC-03:00) Salvador"
    },
    {
        "alias": "UTC-02",
        "displayName": "(UTC-02:00) Coordinated Universal Time-02"
    },{
        "alias": "Mid-Atlantic Standard Time",
        "displayName": "(UTC-02:00) Mid-Atlantic - Old"
    },
    {
        "alias": "Azores Standard Time",
        "displayName": "(UTC-01:00) Azores"
    },
    {
        "alias": "Cape Verde Standard Time",
        "displayName": "(UTC-01:00) Cabo Verde Is."
    },
    {
        "alias": "UTC",
        "displayName": "(UTC) Coordinated Universal Time"
    },
    {
        "alias": "Morocco Standard Time",
        "displayName": "(UTC+00:00) Casablanca"
    },
    {
        "alias": "GMT Standard Time",
        "displayName": "(UTC+00:00) Dublin, Edinburgh, Lisbon, London"
    },
    {
        "alias": "Greenwich Standard Time",
        "displayName": "(UTC+00:00) Monrovia, Reykjavik"
    },
    {
        "alias": "W. Europe Standard Time",
        "displayName": "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    },
    {
        "alias": "Central Europe Standard Time",
        "displayName": "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"
    },
    {
        "alias": "Romance Standard Time",
        "displayName": "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris"
    },
    {
        "alias": "Central European Standard Time",
        "displayName": "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb"
    },
    {
        "alias": "W. Central Africa Standard Time",
        "displayName": "(UTC+01:00) West Central Africa"
    },
    {
        "alias": "Namibia Standard Time",
        "displayName": "(UTC+01:00) Windhoek"
    },
    {
        "alias": "Libya Standard Time",
        "displayName": "(UTC+02:00) Tripoli"
    },
    {
        "alias": "Jordan Standard Time",
        "displayName": "(UTC+02:00) Amman"
    },
    {
        "alias": "GTB Standard Time",
        "displayName": "(UTC+02:00) Athens, Bucharest"
    },
    {
        "alias": "Middle East Standard Time",
        "displayName": "(UTC+02:00) Beirut"
    },
    {
        "alias": "Egypt Standard Time",
        "displayName": "(UTC+02:00) Cairo"
    },
    {
        "alias": "E. Europe Standard Time",
        "displayName": "(UTC+02:00) Chisinau"
    },
    {
        "alias": "Syria Standard Time",
        "displayName": "(UTC+02:00) Damascus"
    },
    {
        "alias": "West Bank Standard Time",
        "displayName": "(UTC+02:00) Gaza, Hebron"
    },
    {
        "alias": "South Africa Standard Time",
        "displayName": "(UTC+02:00) Harare, Pretoria"
    },
    {
        "alias": "FLE Standard Time",
        "displayName": "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"
    },
    {
        "alias": "Israel Standard Time",
        "displayName": "(UTC+02:00) Jerusalem"
    },
    {
        "alias": "Kaliningrad Standard Time",
        "displayName": "(UTC+02:00) Kaliningrad"
    },
    {
        "alias": "Sudan Standard Time",
        "displayName": "(UTC+02:00) Khartoum"
    },
    {
        "alias": "Turkey Standard Time",
        "displayName": "(UTC+03:00) Istanbul"
    },
    {
        "alias": "Belarus Standard Time",
        "displayName": "(UTC+03:00) Minsk"
    },
    {
        "alias": "Arabic Standard Time",
        "displayName": "(UTC+03:00) Baghdad"
    },
    {
        "alias": "Arab Standard Time",
        "displayName": "(UTC+03:00) Kuwait, Riyadh"
    },
    {
        "alias": "Russian Standard Time",
        "displayName": "(UTC+03:00) Moscow, St. Petersburg, Volgograd"
    },
    {
        "alias": "E. Africa Standard Time",
        "displayName": "(UTC+03:00) Nairobi"
    },
    {
        "alias": "Astrakhan Standard Time",
        "displayName": "(UTC+04:00) Astrakhan, Ulyanovsk"
    },
    {
        "alias": "Russia Time Zone 3",
        "displayName": "(UTC+04:00) Izhevsk, Samara"
    },
    {
        "alias": "Saratov Standard Time",
        "displayName": "(UTC+04:00) Saratov"
    },
    {
        "alias": "Iran Standard Time",
        "displayName": "(UTC+03:30) Tehran"
    },
    {
        "alias": "Arabian Standard Time",
        "displayName": "(UTC+04:00) Abu Dhabi, Muscat"
    },
    {
        "alias": "Azerbaijan Standard Time",
        "displayName": "(UTC+04:00) Baku"
    },
    {
        "alias": "Mauritius Standard Time",
        "displayName": "(UTC+04:00) Port Louis"
    },
    {
        "alias": "Georgian Standard Time",
        "displayName": "(UTC+04:00) Tbilisi"
    },
    {
        "alias": "Caucasus Standard Time",
        "displayName": "(UTC+04:00) Yerevan"
    },
    {
        "alias": "Afghanistan Standard Time",
        "displayName": "(UTC+04:30) Kabul"
    },
    {
        "alias": "West Asia Standard Time",
        "displayName": "(UTC+05:00) Ashgabat, Tashkent"
    },
    {
        "alias": "Ekaterinburg Standard Time",
        "displayName": "(UTC+05:00) Ekaterinburg"
    },
    {
        "alias": "Pakistan Standard Time",
        "displayName": "(UTC+05:00) Islamabad, Karachi"
    },
    {
        "alias": "India Standard Time",
        "displayName": "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
    },
    {
        "alias": "Sri Lanka Standard Time",
        "displayName": "(UTC+05:30) Sri Jayawardenepura"
    },
    {
        "alias": "Nepal Standard Time",
        "displayName": "(UTC+05:45) Kathmandu"
    },
    {
        "alias": "Central Asia Standard Time",
        "displayName": "(UTC+06:00) Astana"
    },
    {
        "alias": "Bangladesh Standard Time",
        "displayName": "(UTC+06:00) Dhaka"
    },
    {
        "alias": "Omsk Standard Time",
        "displayName": "(UTC+06:00) Omsk"
    },
    {
        "alias": "Altai Standard Time",
        "displayName": "(UTC+07:00) Barnaul, Gorno-Altaysk"
    },
    {
        "alias": "N. Central Asia Standard Time",
        "displayName": "(UTC+07:00) Novosibirsk"
    },
    {
        "alias": "Tomsk Standard Time",
        "displayName": "(UTC+07:00) Tomsk"
    },
    {
        "alias": "Myanmar Standard Time",
        "displayName": "(UTC+06:30) Yangon (Rangoon)"
    },
    {
        "alias": "SE Asia Standard Time",
        "displayName": "(UTC+07:00) Bangkok, Hanoi, Jakarta"
    },
    {
        "alias": "W. Mongolia Standard Time",
        "displayName": "(UTC+07:00) Hovd"
    },
    {
        "alias": "North Asia Standard Time",
        "displayName": "(UTC+07:00) Krasnoyarsk"
    },
    {
        "alias": "China Standard Time",
        "displayName": "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi"
    },
    {
        "alias": "North Asia East Standard Time",
        "displayName": "(UTC+08:00) Irkutsk"
    },
    {
        "alias": "Singapore Standard Time",
        "displayName": "(UTC+08:00) Kuala Lumpur, Singapore"
    },
    {
        "alias": "W. Australia Standard Time",
        "displayName": "(UTC+08:00) Perth"
    },
    {
        "alias": "Taipei Standard Time",
        "displayName": "(UTC+08:00) Taipei"
    },
    {
        "alias": "Ulaanbaatar Standard Time",
        "displayName": "(UTC+08:00) Ulaanbaatar"
    },
    {
        "alias": "Transbaikal Standard Time",
        "displayName": "(UTC+09:00) Chita"
    },
    {
        "alias": "North Korea Standard Time",
        "displayName": "(UTC+08:30) Pyongyang"
    },
    {
        "alias": "Aus Central W. Standard Time",
        "displayName": "(UTC+08:45) Eucla"
    },
    {
        "alias": "Tokyo Standard Time",
        "displayName": "(UTC+09:00) Osaka, Sapporo, Tokyo"
    },
    {
        "alias": "Korea Standard Time",
        "displayName": "(UTC+09:00) Seoul"
    },
    {
        "alias": "Yakutsk Standard Time",
        "displayName": "(UTC+09:00) Yakutsk"
    },
    {
        "alias": "Cen. Australia Standard Time",
        "displayName": "(UTC+09:30) Adelaide"
    },
    {
        "alias": "AUS Central Standard Time",
        "displayName": "(UTC+09:30) Darwin"
    },
    {
        "alias": "E. Australia Standard Time",
        "displayName": "(UTC+10:00) Brisbane"
    },
    {
        "alias": "AUS Eastern Standard Time",
        "displayName": "(UTC+10:00) Canberra, Melbourne, Sydney"
    },
    {
        "alias": "West Pacific Standard Time",
        "displayName": "(UTC+10:00) Guam, Port Moresby"
    },
    {
        "alias": "Tasmania Standard Time",
        "displayName": "(UTC+10:00) Hobart"
    },
    {
        "alias": "Vladivostok Standard Time",
        "displayName": "(UTC+10:00) Vladivostok"
    },
    {
        "alias": "Bougainville Standard Time",
        "displayName": "(UTC+11:00) Bougainville Island"
    },
    {
        "alias": "Magadan Standard Time",
        "displayName": "(UTC+11:00) Magadan"
    },
    {
        "alias": "Sakhalin Standard Time",
        "displayName": "(UTC+11:00) Sakhalin"
    },
    {
        "alias": "Lord Howe Standard Time",
        "displayName": "(UTC+10:30) Lord Howe Island"
    },
    {
        "alias": "Russia Time Zone 10",
        "displayName": "(UTC+11:00) Chokurdakh"
    },
    {
        "alias": "Norfolk Standard Time",
        "displayName": "(UTC+11:00) Norfolk Island"
    },
    {
        "alias": "Central Pacific Standard Time",
        "displayName": "(UTC+11:00) Solomon Is., New Caledonia"
    },
    {
        "alias": "Russia Time Zone 11",
        "displayName": "(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky"
    },
    {
        "alias": "New Zealand Standard Time",
        "displayName": "(UTC+12:00) Auckland, Wellington"
    },
    {
        "alias": "UTC+12",
        "displayName": "(UTC+12:00) Coordinated Universal Time+12"
    },
    {
        "alias": "Fiji Standard Time",
        "displayName": "(UTC+12:00) Fiji"
    },
    {
        "alias": "Kamchatka Standard Time",
        "displayName": "(UTC+12:00) Petropavlovsk-Kamchatsky - Old"
    },
    {
        "alias": "Chatham Islands Standard Time",
        "displayName": "(UTC+12:45) Chatham Islands"
    },
    {
        "alias": "UTC+13",
        "displayName": "(UTC+13:00) Coordinated Universal Time+13"
    },
    {
        "alias": "Tonga Standard Time",
        "displayName": "(UTC+13:00) Nuku'alofa"
    },
    {
        "alias": "Line Islands Standard Time",
        "displayName": "(UTC+14:00) Kiritimati Island"
    }];

var defaultTimeZone =
{
    "alias": "UTC",
    "displayName": "(UTC) Coordinated Universal Time"
};

/**
 * Time zone selector model
 */
var timeZoneSelector =
{
    currentTimeZone: defaultTimeZone["alias"],
    selectedTimeZone: defaultTimeZone["displayName"],
    timeZoneInitialized: false,
    supportedTimeZonesSet: false
};

/**
 * Updates current user time zone settings according to resulting configuration
 */
function setInitialTimeZone()
{
    if (supportedTimeZonesMap[timeZoneSelector.selectedTimeZone])
    {
        timeZoneSelector.currentTimeZone = timeZoneSelector.selectedTimeZone;
        
        // Update GUI components with the time zone information
        $('#timeZoneName').html(supportedTimeZonesMap[timeZoneSelector.selectedTimeZone]);
        $('#tzarr').find('.ltz-itm-selector-check').css('visibility', 'hidden');
        document.getElementById('tzCheck' + timeZoneSelector.selectedTimeZone).style.visibility = "visible";
    }
    else
    {
        timeZoneSelector.selectedTimeZone = timeZoneSelector.currentTimeZone;
    }
}

/**
 * Sets default time zone choices when we don't use Microsoft Graph API
 * to fetch them from mailbox settings
 */
function setDefaultTimeZonesChoices()
{
    if (this.timeZonesArr)
    {
        setSupportedTimeZones(timeZonesArr);
        TogFormViewer.setProperty("userTimeZones", timeZonesArr);
    }
    else
    {
        setSupportedTimeZones(timeZonesArray);
        TogFormViewer.setProperty("userTimeZones", timeZonesArr);
    }
}

/**
 * Sets time zone choices when retrieved from Microsoft Graph API
 */
function setSupportedTimeZones(values)
{
    supportedTimeZonesMap = {};
    if (values && values.length > 0)
    {
        // empty element with id = "tzarr" in order to avoid repeating the list of available time zones
        $('#tzarr').empty();
        
        // Add all time zones to our map and update choices in the header menu
        for (var timeZoneIndex = 0; timeZoneIndex < values.length; timeZoneIndex++)
        {
            supportedTimeZonesMap[values[timeZoneIndex]["alias"]] = values[timeZoneIndex]["displayName"];
            var timeZoneItem = '<div class="ltz-itm-container"><button class="ltz-itm-selector" onclick="selectTimeZone(this,\''
                + values[timeZoneIndex]["alias"] + '\')"><span id="tzCheck' + values[timeZoneIndex]["alias"] + '" class="ms-Icon2 ms-Icon--check ltz-itm-selector-check"'
                + (values[timeZoneIndex]["alias"] === timeZoneSelector.currentTimeZone ? ' style="visibility: visible;"' : 'style="visibility: hidden;"') 
                + '></span><div class="ltz-itm-content"><div class="ltz-itm-wrapper"><span>'
                + values[timeZoneIndex]["displayName"] + '&lrm;</span></div></div></button></div>';
            $('#tzarr').append(timeZoneItem);
        }
        
        timeZoneSelector.supportedTimeZonesSet = true;
        $('#timeZoneWrapper').show();
        $('#Language').show();
        $('#languageAndTimeZone').attr('lang-tran', 'Language and time zone').html('Language and time zone');
        
        // If user's time zone is already retrieved we need to update GUI now,
        // because we couldn't do that when we didn't have time zone choices
        if (timeZoneSelector.timeZoneInitialized)
        {
            $('#timeZoneName').html(supportedTimeZonesMap[timeZoneSelector.currentTimeZone]);
            $('#tzarr').find('.ltz-itm-selector-check').css('visibility', 'hidden');
            document.getElementById('tzCheck' + timeZoneSelector.currentTimeZone).style.visibility = "visible";
        }
        
    }
}

/**
 * Defines a minimum distance of available time zones list (element with id "timeZones"). 
 * Distance is mesured from the top of page.
 */
var timeZoneMenuMinTopDistance = 12;

/**
 * Number of time zones visible without a scroll option.
 */
var numberOfTimeZonesVisibleWithoutScroll = 20;

/**
 * Height of every time zone item in list of available time zones.
 */
var timeZoneItemHeight = 30;

/**
 * Sets position of available time zones list (i.e. position from which it will be shown)
 */
function setPositionOfTimeZoneMenu()
{
    var tzElement = document.getElementById("timeZones");
    
    var countTimeZones = Object.keys(supportedTimeZonesMap).length;
    
    if (countTimeZones % 2 == 1) 
    {
        countTimeZones++;
    }
    
    // By default, up to numberOfTimeZonesVisibleWithoutScroll elements are displayed without the scroll option. Therefore, we are only considering them in the calculation of the position.
    if (countTimeZones > numberOfTimeZonesVisibleWithoutScroll)
    {
        countTimeZones = numberOfTimeZonesVisibleWithoutScroll;
    }
    
    var moveTop = (countTimeZones / 2) * timeZoneItemHeight;
    
    // If timeZonesSelect button exists then set position of tzElement in relation to it. 
    if ($("#timeZonesSelect").length)
    {
        var positionOfTZSelectElement = $("#timeZonesSelect").offset();
        
        if (positionOfTZSelectElement != null)
        {
            var topValue = positionOfTZSelectElement.top - moveTop;
            
            // If we exit from the bottom of the window, then we set topValue to return us to the window boundaries.
            if (topValue + countTimeZones * timeZoneItemHeight > $( window ).height())
            {
                topValue = topValue - (topValue + countTimeZones * timeZoneItemHeight - $( window ).height());
            }
            
            if (topValue < timeZoneMenuMinTopDistance) 
            {
                topValue = timeZoneMenuMinTopDistance;
            }
            
            // If element exists we set his position.
            if (tzElement != null)
            {
                $(tzElement).css('top', topValue + 'px');
            }
        }
    }
}

/**
 * Checks if available time zones and user's time zone have been loaded
 */
function isTimeZoneSettingsLoaded()
{
    return timeZoneSelector.timeZoneInitialized && timeZoneSelector.supportedTimeZonesSet;
}

/**
 * Updates selected time zone in time zone setting card
 */
function selectTimeZone(timeZoneButton, timeZone)
{
    timeZoneSelector.selectedTimeZone = timeZone;
    $('#timeZoneName').html(supportedTimeZonesMap[timeZone]);
    $('#tzarr').find('.ltz-itm-selector-check').css('visibility', 'hidden');
    $(timeZoneButton).find('.ltz-itm-selector-check').css('visibility', 'visible');
    $('#timeZones').hide();
}

function preparePredefinedTimeZone(timeZone)
{
    timeZoneSelector.selectedTimeZone = timeZone;
    timeZoneSelector.timeZoneInitialized = true;
}

/**
 * Sets selected time zone
 */
function setChosenTimeZone()
{
    var timeZoneChanged = (timeZoneSelector.currentTimeZone !== timeZoneSelector.selectedTimeZone);
    timeZoneSelector.currentTimeZone = timeZoneSelector.selectedTimeZone;
    TogFormViewer.setProperty("userTimeZone", timeZoneSelector.currentTimeZone);
    
    return timeZoneChanged;
}

/**
 * Clears time zone selection
 */
function resetTimeZone()
{
    timeZoneSelector.selectedTimeZone = timeZoneSelector.currentTimeZone;
    $('#timeZoneName').html(supportedTimeZonesMap[timeZoneSelector.currentTimeZone]);
    
    var idTZCheckBox = "#tzCheck" + timeZoneSelector.currentTimeZone;
    if ($(idTZCheckBox).css('visibility') !== 'visible')
    {
        $('#tzarr').find('.ltz-itm-selector-check').css('visibility', 'hidden');
        $(idTZCheckBox).css('visibility', 'visible');
    }
}

/**
 * Resets time zone configuration
 */
function resetTimeZoneConfiguration()
{
    timeZoneSelector.selectedTimeZone = timeZoneSelector.currentTimeZone;
    timeZoneSelector.timeZoneInitialized = false;
}

/**
 * Check if supported time zones array contains currently set time zone.
 * It can happen that it doesn't contain it only when we use hardcoded
 * default time zone and default time zones are overriden with 
 * configuration files / MS Outlook settings / response from the server.
 */
function checkTimeZonesConfiguration()
{
    if (supportedTimeZonesMap && !supportedTimeZonesMap[timeZoneSelector.currentTimeZone] && timeZoneSelector.currentTimeZone === defaultTimeZone["alias"])
    {
        supportedTimeZonesMap[defaultTimeZone["alias"]] = defaultTimeZone["displayName"];
        var timeZoneItem = '<div class="ltz-itm-container"><button class="ltz-itm-selector" onclick="selectTimeZone(this,\''
            + defaultTimeZone["alias"] + '\')"><span id="tzCheck' + defaultTimeZone["alias"] + '" class="ms-Icon2 ms-Icon--check ltz-itm-selector-check"'
            + ' style="visibility: visible;"></span><div class="ltz-itm-content"><div class="ltz-itm-wrapper"><span>'
            + defaultTimeZone["displayName"] + '&lrm;</span></div></div></button></div>';
        $('#tzarr').append(timeZoneItem);
        TogFormViewer.getProperty("userTimeZones").push(defaultTimeZone);
    }
}