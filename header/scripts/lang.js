/**
 * Maps language-country abbrevation with language (country) name.
 * The language component follows 2-letter codes as defined in ISO 639-1,
 * and the country component follows 2-letter codes as defined in ISO 3166-1 alpha-2.
 */
var languagesMap = {};
languagesMap['bg-BG'] = 'български (България&nbsp;-&nbsp;BG)';
languagesMap['cs-CZ'] = 'čeština (Česká&nbsp;republika&nbsp;-&nbsp;CZ)';
languagesMap['de-AT'] = 'Deutsch (Österreich&nbsp;-&nbsp;AT)';
languagesMap['et-EE'] = 'eesti (Eesti&nbsp;-&nbsp;EE)';
languagesMap['en-GB'] = 'English (United&nbsp;Kingdom&nbsp;-&nbsp;GB)';
languagesMap['hr-HR'] = 'hrvatski (Hrvatska&nbsp;-&nbsp;HR)';
languagesMap['hu-HU'] = 'magyar (Magyarország&nbsp;-&nbsp;HU)';
languagesMap['kk-KZ'] = 'Қазақ (Қазақстан&nbsp;-&nbsp;KZ)';
languagesMap['lt-LT'] = 'lietuvių (Lietuva&nbsp;-&nbsp;LT)';
languagesMap['pl-PL'] = 'polski (Polska&nbsp;-&nbsp;PL)';
languagesMap['ro-RO'] = 'română (România&nbsp;-&nbsp;RO)';
languagesMap['sr-Latn-CS'] = 'srpski (Srbija&nbsp;-&nbsp;RS)';
languagesMap['ru-RU'] = 'русский (Россия&nbsp;-&nbsp;RU)';
languagesMap['sl-SI'] = 'slovenščina (Slovenija&nbsp;-&nbsp;SI)';
languagesMap['sk-SK'] = 'slovenčina (Slovensko&nbsp;-&nbsp;SK)';
languagesMap['tr-TR'] = 'Türkçe (Türkiye&nbsp;-&nbsp;TR)';
languagesMap['uk-UA'] = 'українська (Україна&nbsp;-&nbsp;UA)';
var defaultLanguagesMap = languagesMap;

/**
 * Language selector model
 */
var languageSelector =
{
    currentLanguage: 'en-GB',
    selectedLanguage: 'en-GB',
    languageInitialized: false
};

function setupLanguageMenu()
{
    /* empty element with id = "langarr" in order to avoid repeating the list of available languages */
    $('#langarr').empty();
    
    setLanguageSettings(languageSelector.currentLanguage);
    $.each(languagesMap, function(code, name)
    {
        var languageItem = '<div class="ltz-itm-container"><button class="ltz-itm-selector" onclick="selectLanguage(this,\''
            + code + '\')"><span id="langCheck' + code + '" class="ms-Icon2 ms-Icon--check ltz-itm-selector-check"'
            + (code === languageSelector.currentLanguage ? ' style="visibility: visible;"' : '') 
            + '></span><div class="ltz-itm-content"><div class="ltz-itm-wrapper"><span>'
            + name + '&lrm;</span></div></div></button></div>';
        $('#langarr').append(languageItem);
    });
}

/**
 * Defines a minimum distance of available languages list (element with id "languages"). 
 * Distance is mesured from the top of page.
 */
var languageMenuMinTopDistance = 12;

/**
 * Number of languages visible without a scroll option.
 */
var numberOfLanguagesVisibleWithoutScroll = 20;

/**
 * Height of every language item in list of available languages.
 */
var languageItemHeight = 30;

/**
 * Sets position of available language list (i.e. position from which it will be shown)
 */
function setPositionOfLanguageMenu()
{
    var langElement = document.getElementById("languages");
    
    var countLanguages = Object.keys(languagesMap).length;
    
    if (countLanguages % 2 == 1) 
    {
        countLanguages++;
    }
    
    // By default, up to numberOfLanguagesVisibleWithoutScroll elements are displayed without the scroll option. Therefore, we are only considering them in the calculation of the position.
    if (countLanguages > numberOfLanguagesVisibleWithoutScroll)
    {
        countLanguages = numberOfLanguagesVisibleWithoutScroll;
    }
    
    var moveTop = (countLanguages / 2) * languageItemHeight;
    
    // If languagesSelect button exists then set position of langElement in relation to it. 
    if ($("#languagesSelect").length)
    {
        var positionOfLangSelectElement = $("#languagesSelect").offset();
        
        if (positionOfLangSelectElement != null)
        {
            var topValue = positionOfLangSelectElement.top - moveTop;
            
            // If we exit from the bottom of the window, then we set topValue to return us to the window boundaries.
            if (topValue + countLanguages * languageItemHeight > $( window ).height())
            {
                topValue = topValue - (topValue + countLanguages * languageItemHeight - $( window ).height());
            }
            
            if (topValue < languageMenuMinTopDistance) 
            {
                topValue = languageMenuMinTopDistance;
            }
            
            // If element exists we set his position.
            if (langElement != null)
            {
                $(langElement).css('top', topValue + 'px');
            }
        }
    }
}

/**
 * Sets a language setting to a new value
 */
function setLanguageSettings(lang)
{
    if (appConfiguration.languageSettings)
    {
        $('#languageName1').html(languagesMap[lang]);
        $('#languageName2').html(languagesMap[lang]);
    }
}

/**
 * Updates selected language in language setting card
 */
function selectLanguage(languageButton, lang)
{
    languageSelector.selectedLanguage = lang;
    setLanguageSettings(lang);
    $('#langarr').find('.ltz-itm-selector-check').css('visibility', 'hidden');
    $(languageButton).find('.ltz-itm-selector-check').css('visibility', 'visible');
    $('#languages').hide();
}

function preparePredefinedLanguage(lang)
{
    languageSelector.selectedLanguage = lang;
    languageSelector.languageInitialized = true;
}

/**
 * Checks if user's language has been loaded
 */
function isLanguageSettingsLoaded()
{
    return languageSelector.languageInitialized;
}

/**
 * Updates current user language settings and translates the page
 * Should be used when setting a language based on received data from an API call
 * Shouldn't be used when setting a language from the GUI
 */
function setupPredefinedLanguage()
{
    applyTranslation();
    setLanguageSettings(languageSelector.currentLanguage);
    $('#langarr').find('.ltz-itm-selector-check').css('visibility', 'hidden');
    $("#langCheck" + languageSelector.currentLanguage).css('visibility', 'visible');
}

/**
 * Translates a page to currently set language
 */
function applyTranslation()
{
    var oldLanguage = languageSelector.currentLanguage;
    if (!languagesMap[languageSelector.selectedLanguage])
    {
        languageSelector.selectedLanguage = languageSelector.currentLanguage;
        
        return;
    }
    
    languageSelector.currentLanguage = languageSelector.selectedLanguage;
    TogFormViewer.setProperty("userLanguage", languageSelector.currentLanguage);
    if (typeof phraseAppSelection === 'undefined' || !phraseAppSelection.phraseAppSwitched)
    {
        if (isFlatpickrLanguageAlreadyIncluded(languageSelector.selectedLanguage))
        {
            setLanguage(languageSelector.selectedLanguage);
        }
        else
        {
            loadScript("./scripts/vendor/flatpickr/" + getFlatpickrLanguage(languageSelector.selectedLanguage) + ".js", (function(language){ return function() { setLanguage(language); } })(languageSelector.selectedLanguage))
        }
    }
    
    $("[lang-tran],[lang-tran-placeholder],[lang-tran-menu-top],[lang-tran-menu-bottom] ").translate();
    changeLanguageForThemeSettings(oldLanguage, languageSelector.currentLanguage);
    if (typeof phraseAppSelection !== 'undefined' && phraseAppSelection.phraseAppSwitched)
    {
        $("#divHelp").prepareTranslation();
    }
}

/**
 * Prepares body (form) strings for the PhraseApp in-context editor
 */
function prepareBodyForTranslations()
{
    setLanguage("DEFAULT");
    $("#divHelp").prepareTranslation();
}

/**
 * Resets string after PhraseApp in-context editor has been switched off
 */
function resetBodyTranslation()
{
    setLanguage(languageSelector.currentLanguage);
    $("#divHelp").translate();
}

/**
 * Applies translation to selected elements
 */
(function($)
{
    $.fn.translate = function()
    {
        return this.each(function()
        {
            $this = $(this);
            if ($this.attr("lang-tran") !== undefined && langLayoutObj.hasOwnProperty(languageSelector.selectedLanguage)
                && langLayoutObj[languageSelector.selectedLanguage][$this.attr("lang-tran")] !== undefined)
            {
                $this.html(langLayoutObj[languageSelector.selectedLanguage][$this.attr("lang-tran")]);
            } else if ($this.attr("lang-tran") !== undefined && langObj && langObj.i18n && langObj.i18n
                && langObj.i18n.hasOwnProperty(languageSelector.selectedLanguage)
            && langObj.i18n[languageSelector.selectedLanguage][$this.attr("lang-tran")] !== undefined)
            {
                // This case may occur when we need to populate help menu with some texts defined in the form
                $this.html(langObj.i18n[languageSelector.selectedLanguage].translation[$this.attr("lang-tran")]);
            } else if ($this.attr("lang-tran") !== undefined && langObj && langObj.i18n && langObj.i18n.resources
                && langObj.i18n.resources.hasOwnProperty(languageSelector.selectedLanguage)
            && langObj.i18n.resources[languageSelector.selectedLanguage].translation[$this.attr("lang-tran")] !== undefined)
            {
                // This case may occur when we need to populate help menu with some texts defined in the form
                $this.html(langObj.i18n.resources[languageSelector.selectedLanguage].translation[$this.attr("lang-tran")]);
            }
            
            if ($this.attr("lang-tran-placeholder") !== undefined && langLayoutObj.hasOwnProperty(languageSelector.selectedLanguage)
                && langLayoutObj[languageSelector.selectedLanguage][$this.attr("lang-tran-placeholder")] !== undefined)
            {
                $this.attr("placeholder", langLayoutObj[languageSelector.selectedLanguage][$this.attr("lang-tran-placeholder")]);
            }
            
            if (typeof langTopMenusObj === 'object' && Object.keys(langTopMenusObj).length !== 0 && langTopMenusObj != null && $this.attr("lang-tran-menu-top") !== undefined && langTopMenusObj.hasOwnProperty(languageSelector.selectedLanguage)
                && langTopMenusObj[languageSelector.selectedLanguage][$this.attr("lang-tran-menu-top")] !== undefined)
            {
                $this.html(langTopMenusObj[languageSelector.selectedLanguage][$this.attr("lang-tran-menu-top")]);
            }
            else if ($this.attr("lang-tran-menu-top") !== undefined)
            {
                $this.html($this.attr("lang-tran-menu-top"));
            }
            
            if (typeof langLeftMenusObj === 'object' && Object.keys(langLeftMenusObj).length !== 0 && langLeftMenusObj != null && $this.attr("lang-tran-menu-left") !== undefined && langLeftMenusObj.hasOwnProperty(languageSelector.selectedLanguage)
                && langLeftMenusObj[languageSelector.selectedLanguage][$this.attr("lang-tran-menu-left")] !== undefined)
            {
                $this.html(langLeftMenusObj[languageSelector.selectedLanguage][$this.attr("lang-tran-menu-left")]);
            }
            else if ($this.attr("lang-tran-menu-left") !== undefined)
            {
                $this.html($this.attr("lang-tran-menu-left"));
            }
            
            if (typeof langBottomMenusObj === 'object' && Object.keys(langBottomMenusObj).length !== 0 && langBottomMenusObj != null && $this.attr("lang-tran-menu-bottom") !== undefined && langBottomMenusObj.hasOwnProperty(languageSelector.selectedLanguage)
                && langBottomMenusObj[languageSelector.selectedLanguage][$this.attr("lang-tran-menu-bottom")] !== undefined)
            {
                $this.html(langBottomMenusObj[languageSelector.selectedLanguage][$this.attr("lang-tran-menu-bottom")]);
            }
            else if ($this.attr("lang-tran-menu-bottom") !== undefined)
            {
                $this.html($this.attr("lang-tran-menu-bottom"));
            }
        });
    };
}(jQuery));

/**
 * Prepares selected elements for the PhraseApp in-context editor
 */
(function($)
{
    $.fn.prepareTranslation = function()
    {
        return this.each(function()
        {
            $this = $(this);
            if ($this.attr("lang-form") !== undefined)
            {
                $this.html($this.attr("lang-tran"));
            }    
        });
    };
}(jQuery));

/**
 * Translates a page to selected langauge
 */
function setChosenLanguage()
{
    var languageChanged = (languageSelector.selectedLanguage !== languageSelector.currentLanguage);
    applyTranslation();
    MapPlugIn.reloadMap();
    
    return languageChanged;
}

/**
 * Clears language selection
 */
function resetLanguage()
{
    languageSelector.selectedLanguage = languageSelector.currentLanguage;
    setLanguageSettings(languageSelector.currentLanguage);
    
    var idLangCheckBox = "#langCheck" + languageSelector.currentLanguage;
    if($(idLangCheckBox).css('visibility') !== 'visible')
    {
        $('#langarr').find('.ltz-itm-selector-check').css('visibility', 'hidden');
        $(idLangCheckBox).css('visibility', 'visible');
    }
}

/**
 * Resets language configuration
 */
function resetLanguageConfiguration()
{
    languageSelector.selectedLanguage = languageSelector.currentLanguage;
    languageSelector.languageInitialized = false;
}

/**
 * Converts locale received from MS graph API to supported locales in our app
 */
function convertGraphLanguage(graphLanguage)
{
    if (languagesMap.hasOwnProperty(graphLanguage))
    {
        return graphLanguage;
    }
    
    switch (graphLanguage)
    {
        case "de-CH":
        case "de-DE":
        case "de-LI":
        case "de-LU":
            return "de-AT";
        case "hr-BA":
            return "hr-HR";
        case "ro-MD":
            return "ro-RO";
        case "sr-Cyrl-CS":
        case "sr-Cyrl-BA":
            return "sr-Latn-CS";
        case "en-US":
        case "en-AU":
        case "en-CA":
        case "en-029":
        case "en-BZ":
        case "en-IE":
        case "en-IN":
        case "en-JM":
        case "en-MY":
        case "en-NZ":
        case "en-PH":
        case "en-SG":
        case "en-TT":
        case "en-ZA":
        case "en-ZW":
            return "en-GB";
        default:
            return graphLanguage;
    }
}

/**
 * Converts FormViewer language to lower case language code used by Flatpickr
 */
function getFlatpickrLanguage(language)
{
    if (language === "kk-KZ")
    {
        return "kz";
    }
    
    return language.split(/-(.+)/)[0];
}

/**
 * Checks if a Flatpickr localization script for a given language is already included to page
 */
function isFlatpickrLanguageAlreadyIncluded(language)
{
    var scripts = document.getElementsByTagName("script");
    for(var i = 0; i < scripts.length; i++)
    {
        if(scripts[i].getAttribute('src') === "./scripts/vendor/flatpickr/" + getFlatpickrLanguage(language) + ".js")
        {
            return true;
        }
    }
    
    return false;
}