var phraseSelector =
{
    phraseAppLoaded: false,
    phraseAppSelection: false,
    phraseAppSwitched: false,
    prefix: "[[__",
    suffix: "__]]"
};

/**
 * Loads PhraseApp plugin
 */
function loadPhraseApp()
{
    
    phraseSelector.prefix = appConfiguration.phraseAppPrefix;
        
    phraseSelector.suffix = appConfiguration.phraseAppSuffix;
    
    window.PHRASEAPP_CONFIG =
    {
        projectId:  appConfiguration.phraseAppProjectId,
        prefix: appConfiguration.phraseAppPrefix,
        suffix: appConfiguration.phraseAppSuffix,
        autoLowercase: false,
        forceLocale: languageSelector.currentLanguage,
        fullReparse: true
    };
    var phraseapp = document.createElement('script');
    phraseapp.type = 'text/javascript';
    phraseapp.async = true;
    phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
    phraseapp.id = "phraseAppPlugin";
    phraseapp.onload = (function() { phraseSelector.phraseAppLoaded = true; })
    phraseapp.onerror = (function() {alert('Failed to load PhraseApp')});
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(phraseapp, s);
}

/**
 * Reloads PhraseApp plugin
 */
function reloadPhraseApp()
{
    
    phraseSelector.prefix = appConfiguration.phraseAppPrefix;
        
    phraseSelector.suffix = appConfiguration.phraseAppSuffix;
    
    window.PHRASEAPP_CONFIG =
    {
        projectId:  appConfiguration.phraseAppProjectId,
        prefix: appConfiguration.phraseAppPrefix,
        suffix: appConfiguration.phraseAppSuffix,
        autoLowercase: false,
        forceLocale: languageSelector.currentLanguage,
        fullReparse: true
    };
    $('#phraseAppPlugin').remove();
    var phraseapp = document.createElement('script');
    phraseapp.type = 'text/javascript';
    phraseapp.async = true;
    phraseapp.src = ['https://', 'phraseapp.com/assets/in-context-editor/2.0/app.js?', new Date().getTime()].join('');
    phraseapp.id = "phraseAppPlugin";
    phraseapp.onload = (function() { phraseSelector.phraseAppLoaded = true; })
    phraseapp.onerror = (function() {alert('Failed to load PhraseApp')});
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(phraseapp, s);
}

/**
 * First loads the PhraseApp plugin if not already loaded.
 * Then shows PhraseApp GUI at the bottom of the page.
 */
function showPhraseAppPlugin()
{
    prepareBodyForTranslations();
    if (phraseSelector.phraseAppLoaded)
    {
        // Show hidden PhraseApp plugin
        $("#phrase-app").show();
    }
    else
    {
        loadPhraseApp();
    }
}

/**
 * Hides PhraseApp GUI at the bottom of the page
 */
function closePhraseAppPlugin()
{
    // Hide PhraseApp plugin
    $("#phrase-app").hide();
    resetBodyTranslation();
}

/**
 * Applies changes of PhraseApp settings
 */
function applyPhraseAppSettingsChanges()
{
    if (phraseSelector.phraseAppSelection === true && phraseSelector.phraseAppSwitched === false)
    {
        $("#phraseAppSwitched").attr("lang-tran", "On").translate();
        showPhraseAppPlugin();
    }
    else if (phraseSelector.phraseAppSelection === false && phraseSelector.phraseAppSwitched === true)
    {
        $("#phraseAppSwitched").attr("lang-tran", "Off").translate();
        closePhraseAppPlugin();
    }
    
    phraseSelector.phraseAppSwitched = phraseSelector.phraseAppSelection;
}

/**
 * Resets changes of PhraseApp settings
 */
function resetPhraseAppSettings()
{
    phraseSelector.phraseAppSelection = phraseSelector.phraseAppSwitched;
    
    // Returns checkBox to it's previous value, because "Cancel" button is pressed.
    if (phraseSelector.phraseAppSelection)
    {
        $("#phraseAppCardCheckBox").removeClass("ms-Icon--Checkbox");
        $("#phraseAppCardCheckBox").addClass("ms-Icon--CheckboxComposite");
    }
    else
    {
        $("#phraseAppCardCheckBox").removeClass("ms-Icon--CheckboxComposite");
        $("#phraseAppCardCheckBox").addClass("ms-Icon--Checkbox");
    }
}

function changePhraseAppSelection()
{
    if (phraseSelector.phraseAppSelection)
    {
        $("#phraseAppCardCheckBox").removeClass("ms-Icon--CheckboxComposite");
        $("#phraseAppCardCheckBox").addClass("ms-Icon--Checkbox");
        phraseSelector.phraseAppSelection = false;
    }
    else
    {
        $("#phraseAppCardCheckBox").removeClass("ms-Icon--Checkbox");
        $("#phraseAppCardCheckBox").addClass("ms-Icon--CheckboxComposite");
        phraseSelector.phraseAppSelection = true;
    }
}

/**
 * Applies PhraseApp to selected elements
 */
(function($)
{
    $.fn.applyPhraseApp = function()
    {
        return this.each(function()
        {
            $this = $(this);
            if ($this.attr("lang-tran") !== undefined)
            {
                $this.html(phraseSelector.prefix + "phrase_" + $this.attr("lang-tran") + phraseSelector.suffix);
            }
            
            if ($this.attr("lang-tran-placeholder") !== undefined)
            {
                $this.attr("placeholder", phraseSelector.prefix + "phrase_" + $this.attr("lang-tran-placeholder") + phraseSelector.suffix);
            }
        });
    };
}(jQuery));

/**
 * Clears PhraseApp from selected elements
 */
(function($)
{
    $.fn.clearPhraseApp = function()
    {
        return this.each(function()
        {
            $this = $(this);
            if ($this.hasClass("phrase-translatable"))
            {
                $this.removeClass("phrase-translatable");
            }
            
            if ($this.attr("lang-tran") !== undefined)
            {
                $this.html($this.attr("lang-tran"));
            }
            
            if ($this.attr("lang-tran-placeholder") !== undefined)
            {
                $this.attr("placeholder", $this.attr("lang-tran-placeholder"));
            }
            
            $this.translate();
        });
    };
}(jQuery));