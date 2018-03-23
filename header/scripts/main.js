﻿/**
 * Maps command button id with overlay wrapper id
 */
var commandIdWrapperIdMap = {};
commandIdWrapperIdMap['notificationsCommand'] = 'notificationsWrapper';
commandIdWrapperIdMap['settingsCommand'] = 'settingsWrapper';
commandIdWrapperIdMap['helpCommand'] = 'helpWrapper';
commandIdWrapperIdMap['accountsCommand'] = 'accountsWrapper';
commandIdWrapperIdMap['accountsCommandSmall'] = 'accountsWrapperSmall';

var hiddenWrappers = [];
var firstMenuItem = 'notdefined';

/**
 * Sets up the header and layout elements including a form
 */
function setupApp()
{                
    // if this code runs in iFrame it means it is used from ADAL in the background...in that case we don't want to execute our APP logic
    if (!isIframe())
    {      
        if (isSignedInUser())
        {
            console.log('ADAL logic finished...');
        }
        
        // Initializing the form
        setupLayout();
        var hooksObj =
        {
            input: function(input)
            {
                this.addEventListener(input, 'focus', (function(comp)
                {
                    return function()
                    {
                        $('#divHelp').empty();
                        if (comp && comp.hasOwnProperty("component") && comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("formhelp"))
                        {
                            var vhelpform = '<div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="formHelp"></span></div></div></div>';
                            $('#divHelp').append(vhelpform);
                            $('#formHelp').html(comp.component.properties.formhelp).attr("lang-tran", comp.component.properties.formhelp).attr("lang-form", "true").translate();
                        }
                        else if (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("formhelp"))
                        {
                            var vhelpform = '<div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="formHelp"></span></div></div></div>';
                            $('#divHelp').append(vhelpform);
                            $('#formHelp').html(formObj.properties.formhelp).attr("lang-tran", formObj.properties.formhelp).attr("lang-form", "true").translate();
                        }
                        
                        if (comp && comp.hasOwnProperty("component") && comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("fieldhelp"))
                        {
                            var vhelpfield = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="fieldHelp"></span></div></div></div>';
                            $('#divHelp').append(vhelpfield);
                            $('#fieldHelp').html(comp.component.properties.fieldhelp).attr("lang-tran", comp.component.properties.fieldhelp).attr("lang-form", "true").translate();
                        }
                        
                        if(((comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("processimagelink"))
                            || (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("processimagelink")))
                                && ((comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("processlink"))
                            || (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("processlink"))))
                        {
                            var vprocess = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="bussinesplabel"></span></div></div></div><div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><a id="processlink"><img class="help-photo-container" id="processimagelink"></a></div></div></div>';
                            $('#divHelp').append(vprocess);
                            $('#processimagelink').attr('src', (comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("processimagelink") ? comp.component.properties.processimagelink : formObj.properties.processimagelink));
                            $('#processlink').attr('href', (comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("processlink") ? comp.component.properties.processlink : formObj.properties.processlink));
                            var processText = getProcessText();
                            $('#bussinesplabel').html(processText);
                            $('#bussinesplabel').attr("lang-tran", processText).attr("lang-form", "true");
                        }
                        
                        if(((comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("elearningimagelink"))
                            || (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("elearningimagelink")))
                                && ((comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("elearninglink"))
                            || (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("elearninglink"))))
                        {
                            var velearning = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="elearninglabel"></span></div></div></div><div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><a id="elearninglink"><img class="help-photo-container" id="elearningimagelink"></a></div></div></div>';
                            $('#divHelp').append(velearning);
                            $('#elearningimagelink').attr('src', (comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("elearningimagelink") ? comp.component.properties.elearningimagelink : formObj.properties.elearningimagelink));
                            $('#elearninglink').attr('href', (comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                                && comp.component.properties.hasOwnProperty("elearninglink") ? comp.component.properties.elearninglink : formObj.properties.elearninglink));
                            var eLearningText = getELearningText();
                            $('#elearninglabel').html(eLearningText);
                            $('#elearninglabel').attr("lang-tran", eLearningText).attr("lang-form", "true");
                        }
                    };
                })(this));
                
                this.addEventListener(input, 'blur', (function(comp)
                {
                    return function()
                    {
                        setDefaultHelpContent();
                    };
                })(this));
            }
        };
        
        var formDisplay = checkForUrlParameter("display");
        if (formDisplay)
        {
            formObj["display"] = formDisplay;
        }
        else if (typeof appObj !== 'undefined' && appObj !== null && appObj.hasOwnProperty("display") && appObj["display"])
        {
            formObj["display"] = appObj["display"];
        }
        
        langObj.hooks = hooksObj;
        Formio.createForm(document.getElementById('formio'), formObj, langObj)
        .then(function(form)
        {
            form.header =
            {
                user: currentUser,
                settings:
                {
                    brand: brandObj,
                    customization: customizationObj,
                    headerConfiguration: headerObj
                }
            };
            form.header.settings.brand.mainlogopath = $("#mainLogo").find("img").attr("src");
            form.header.settings.brand.faviconpath = $("#pageIcon").attr("href");
            var qsjson = parse_query_string(window.location.search.substring(1));
            form.submission = {"data":qsjson};
            form.httprequest =
            {
                protocol : window.location.protocol.substring(0,window.location.protocol.length-1),
                hostname: window.location.hostname,
                pathname: window.location.pathname,
                querystring: window.location.search,
                queryjson: qsjson
            }
            window.setLanguage = function (lang)
            {
                form.language = lang;
            };
            window.formioForm = form;
            
            form.ready.then(function()
            {
                // Sets up form level defined help content
                setDefaultHelpContent();
                
                if (isUseOutlookMailSettings() && isSignedInUser())
                {
                    // Find out user's mailbox settings
                    getmailboxsettingsdata('https://graph.microsoft.com/beta/me/mailboxSettings');
                    getSupportedTimeZones();
                    if (isUseUserPropertyExtensions() && headerObj !== 'undefined' && headerObj != null && headerObj["theme settings"])
                    {
                        // Find out user's theme (user property extensions)
                        getUserPropertyExtensions(false);
                    }
                    else
                    {
                        // Set default theme
                        setupStyle(false);
                    }
                }
                else if (isUseUserPropertyExtensions() && isSignedInUser())
                {
                    // We set the default time zone choices beacuse
                    // we don't read them from the mailbox settings
                    setDefaultTimeZonesChoices();
                    
                    // Find out user's language, time zone and theme settings
                    // defined in user's property extensions on AAD
                    getUserPropertyExtensions(true);
                }
                else
                {
                    // Just translate the page and set default theme
                    applyTranslation();
                    setupStyle(false);
                }
            });
            
            form.on('submit', function(submission)
            {
                console.log(submission);
            });
        });
        fillUserInfo();
    }
    else
    {
        console.log('The onload code wont be executed because we are running inside iFrame');
    }
};

/**
 * Sets up the header and layout elements excluding a form
 */
function setupLayout()
{    
    // Check app configuration
    // Set up the main logo
    var mainLogoPath = "./ress/png/mainlogo.png";
    var mainLogoUrl = checkForUrlParameter("mainlogopath");
    if (mainLogoUrl)
    {
        mainLogoPath = mainLogoUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["mainlogopath"])
    {
        mainLogoPath = formObj.properties["mainlogopath"];
    }
    else if (typeof brandObj !== 'undefined' && brandObj != null && brandObj["mainlogopath"])
    {
        mainLogoPath = brandObj["mainlogopath"];
    }
    
    $("#mainLogo").find("img").attr("src", mainLogoPath);
    
    // Display the main logo even if its path is not defined in brandObj
    // In this case we use hardcoded path
    $("#mainLogo").show();
    
    // Set up side logo and show it if defined
    var sideLogoPath = "./ress/png/sidelogo.png";
    var sideLogoUrl = checkForUrlParameter("sidelogopath");
    if (sideLogoUrl)
    {
        sideLogoPath = sideLogoUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["sidelogopath"])
    {
        sideLogoPath = formObj.properties["sidelogopath"];
    }
    else if (typeof brandObj !== 'undefined' && brandObj != null && brandObj["sidelogopath"])
    {
        sideLogoPath = brandObj["sidelogopath"];
    }
    
    if (typeof sideLogoPath !== 'undefined')
    {
        $("#sideLogo").find("img").attr("src", sideLogoPath);
        $("#sideLogo").show();
        $("#mainLogo").find("img").removeClass("logo-background");
        $("#mainLogo").addClass("logo-background");
        $("#sideLogo").find("img").addClass("logo-background");
    }
    
    // Set up favicon
    var faviconElement = document.createElement("link");
    faviconElement.rel = "shortcut icon";
    faviconElement.type = "image/x-icon";
    faviconElement.id = "pageIcon";
    
    // If favicon is not specified use the main logo
    var faviconPath = "./ress/png/favicon.png";
    var faviconUrl = checkForUrlParameter("faviconpath");
    if (faviconUrl)
    {
        faviconPath = faviconUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["faviconpath"])
    {
        faviconPath = formObj.properties["faviconpath"];
    }
    else if (typeof customizationObj !== 'undefined' && customizationObj !== null && customizationObj["faviconpath"])
    {
        faviconPath = customizationObj["faviconpath"];
    }
    else if (typeof brandObj !== 'undefined' && brandObj != null && brandObj["faviconpath"])
    {
        faviconPath = brandObj["faviconpath"];
    }
    
    faviconElement.href = faviconPath;
    var pageTitleNode = document.getElementById("pageTitle");
    pageTitleNode.parentNode.insertBefore(faviconElement, pageTitleNode.nextSibling);
    
    // Set up client's logo (customization logo) and show it if defined
    var customizationLogoPath;
    var customizationLogoUrl = checkForUrlParameter("customizationlogopath");
    if (customizationLogoUrl)
    {
        customizationLogoPath = customizationLogoUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["customizationlogopath"])
    {
        customizationLogoPath = formObj.properties["customizationlogopath"];
    }
    else if (typeof customizationObj !== 'undefined' && customizationObj !== null && customizationObj["customizationlogopath"])
    {
        customizationLogoPath = customizationObj["customizationlogopath"];
    }
    
    if (typeof customizationLogoPath !== 'undefined')
    {
        $("#customizationLogo").find(".client-logo").attr("src", customizationLogoPath);
        $("#customizationLogo").show();
    }
    
    // Check if we should enable the app launcher button
    var appLauncherDisabled = false;
    var appLauncherUrl = checkForUrlParameter("app launcher");
    if (appLauncherUrl === "false" || appLauncherUrl === "true")
    {
        if (appLauncherUrl === "false")
        {
            appLauncherDisabled = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("app launcher"))
    {
        if (formObj.properties["app launcher"] == false)
        {
            appLauncherDisabled = true;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("app launcher") && headerObj["app launcher"] === false)
    {
        appLauncherDisabled = true;
    }
    
    if (appLauncherDisabled)
    {
        $(".appl-button").addClass('hidden');
    }
    
    // Check if we should maximize the browser window (IE only)
    var maximizeBrowserWindow = false;
    var maximizeBrowserWindowUrl = checkForUrlParameter("maximize");
    if (maximizeBrowserWindowUrl === "false" || maximizeBrowserWindowUrl === "true")
    {
        if (maximizeBrowserWindowUrl === "true")
        {
            maximizeBrowserWindow = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("maximize"))
    {
        if (formObj.properties["maximize"] === true)
        {
            maximizeBrowserWindow = true;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("maximize") && headerObj["maximize"] === true)
    {
        maximizeBrowserWindow = true;
    }
    
    if (maximizeBrowserWindow)
    {
        window.moveTo(0, 0);
        window.resizeTo(screen.availWidth, screen.availHeight);
    }
    
    // Check if we should change form width
    var formWidthPercentUrl = checkForUrlParameter("form width percent");
    if (formWidthPercentUrl)
    {
        if (!isNaN(formWidthPercentUrl) && 0.1 < formWidthPercentUrl && formWidthPercentUrl <= 100)
        {
            $(".body-content").css("width", formWidthPercentUrl + "%");
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("form width percent"))
    {
        if (!isNaN(formObj.properties["form width percent"]) && 0.1 < formObj.properties["form width percent"] && formObj.properties["form width percent"] <= 100)
        {
            $(".body-content").css("width", formObj.properties["form width percent"] + "%");
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("form width percent") && !isNaN(headerObj["form width percent"])
        && 0.1 < headerObj["form width percent"] && headerObj["form width percent"] <= 100)
    {
        $(".body-content").css("width", headerObj["form width percent"] + "%");
    }
    
    // Check if we should hide the environments dropdown
    var hasEnvironments = true;
    var hasEnvironmentsUrl = checkForUrlParameter("environment");
    if (hasEnvironmentsUrl === "false" || hasEnvironmentsUrl === "true")
    {
        if (hasEnvironmentsUrl === "false")
        {
            hasEnvironments = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("environment"))
    {
        if (formObj.properties["environment"] === false)
        {
            hasEnvironments = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("environment") && headerObj["environment"] === false)
    {
        hasEnvironments = false;
    }
    
    if (!hasEnvironments)
    {
        $("#environmentcontainerl").remove();
        hiddenWrappers.push("environmentcontainerl");
        $("#environmentcontainers").remove();
        hiddenWrappers.push("environmentcontainers");
    }
    
    // Count how many menu items are missing to apply appropriate css class later
    var missingHeaderElements = 0;
    
    // Check if we should hide the notifications menu
    var hasNotifications = true;
    var hasNotificationsUrl = checkForUrlParameter("notifications");
    if (hasNotificationsUrl === "false" || hasNotifications === "true")
    {
        if (hasNotificationsUrl === "false")
        {
            hasNotifications = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("notifications"))
    {
        if (formObj.properties["notifications"] === false)
        {
            hasNotifications = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("notifications") && headerObj["notifications"] === false)
    {
        hasNotifications = false;
    }
    
    if (hasNotifications)
    {
        firstMenuItem = 'notificationsWrapper';
    }
    else
    {
        $("#notificationsCommandWrapper").remove();
        hiddenWrappers.push("notificationsCommandWrapper");
        missingHeaderElements ++;
    }
    
    // Check if we should hide the settings menu
    var hasSettings = true;
    var hasSettingsUrl = checkForUrlParameter("settings");
    if (hasSettingsUrl === "false" || hasSettingsUrl === "true")
    {
        if (hasSettingsUrl === "false")
        {
            hasSettings = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("settings"))
    {
        if (formObj.properties["settings"] === false)
        {
            hasSettings = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("settings") && headerObj["settings"] === false)
    {
        hasSettings = false;
    }
    
    if (!hasSettings)
    {
        $("#settingsCommandWrapper").remove();
        hiddenWrappers.push("settingsCommandWrapper");
        missingHeaderElements ++;
    }
    else if (firstMenuItem === 'notdefined')
    {
        firstMenuItem = 'settingsWrapper';
    }
    
    // Check if we should hide the help menu
    var hasHelp = true;
    var hasHelpUrl = checkForUrlParameter("help");
    if (hasHelpUrl === "false" || hasHelpUrl === "true")
    {
        if (hasHelpUrl === "false")
        {
            hasHelp = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("help"))
    {
        if (formObj.properties["help"] === false)
        {
            hasHelp = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("help") && headerObj["help"] === false)
    {
        hasHelp = false;
    }
    
    if (!hasHelp)
    {
        $("#helpCommandWrapper").remove();
        hiddenWrappers.push("helpCommandWrapper");
        missingHeaderElements ++;
    }
    else if (firstMenuItem === 'notdefined')
    {
        firstMenuItem = 'helpWrapper';
    }
    
    // Check if we should hide the account menu
    var hasAccount = true;
    var hasAccountUrl = checkForUrlParameter("account");
    if (hasAccountUrl === "false" || hasAccountUrl === "true")
    {
        if (hasAccountUrl === "false")
        {
            hasAccount = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("account"))
    {
        if (formObj.properties["account"] === false)
        {
            hasAccount = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("account") && headerObj["account"] === false)
    {
        hasAccount = false;
    }
    
    if (!hasAccount)
    {
        $("#accountsCommandWrapperL").remove();
        hiddenWrappers.push("accountsCommandWrapperL");
        $("#accountsCommandWrapperS").remove();
        hiddenWrappers.push("accountsCommandWrapperS");
    }
    else if (firstMenuItem === 'notdefined')
    {
        firstMenuItem = 'accountsWrapper';
    }
    
    if (hasEnvironments && (missingHeaderElements > 0 || !hasAccount))
    {
        if (hasAccount)
        {
            switch (missingHeaderElements)
            {
                case 1:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-one");
                    break;
                case 2:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-two");
                    break;
                case 3:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-three");
            }
        }
        else
        {
            switch (missingHeaderElements)
            {
                case 0:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts");
                    break;
                case 1:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-one");
                    break;
                case 2:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-two");
                    break;
                case 3:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-three");
            }
        }
    }
    
    // Check if we have to few commands in the header that we don't need ellipsis button on small screens any more
    if (missingHeaderElements == 3 || (missingHeaderElements == 2 && (!hasAccount || appLauncherDisabled))
        || (missingHeaderElements == 1 && !hasAccount && appLauncherDisabled))
    {
        $("#ellipsisButtonWrapper").hide();
        if (!appLauncherDisabled)
        {
            $("#applButtonSmallWrapper").removeClass("hiddensmcommands").removeClass("rsp-med-visible").addClass("rsp-med-small-visible");
        }
        
        if (hasNotifications)
        {
            $("#notificationsCommandWrapper").removeClass("hiddensmcommands").addClass("visiblecommand");
        }
        
        if (hasSettings)
        {
            $("#settingsCommandWrapper").removeClass("hiddensmcommands").addClass("visiblecommand");
        }
        
        if (hasHelp)
        {
            $("#helpCommandWrapper").removeClass("hiddensmcommands").addClass("visiblecommand");
        }
    }
    
    // Check if we should show theme selection option in the settings menu
    var hasThemeSettings = false;
    var hasThemeSettingsUrl = checkForUrlParameter("theme settings");
    if (hasThemeSettingsUrl === "false" || hasThemeSettingsUrl === "true")
    {
        if (hasThemeSettingsUrl === "true")
        {
            hasThemeSettings = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("theme settings"))
    {
        if (formObj.properties["theme settings"] === true)
        {
            hasThemeSettings = true;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("theme settings") && headerObj["theme settings"] === true)
    {
        hasThemeSettings = true;
    }
    
    if (hasThemeSettings)
    {
        $('#themeCardWrapper').show();
    }
     
    // Check if we should show the PhraseApp settings
    var hasPhraseAppSettings = false;
    var phraseAppSettingsOn = false;
    var hasPhraseAppSettingsUrl = checkForUrlParameter("phraseapp");
    if (hasPhraseAppSettingsUrl === "false" || hasPhraseAppSettingsUrl === "true" || hasPhraseAppSettingsUrl === "on" || hasPhraseAppSettingsUrl === "off")
    {
        if (hasPhraseAppSettingsUrl === "true" || hasPhraseAppSettingsUrl === "on" || hasPhraseAppSettingsUrl === "off")
        {
            hasPhraseAppSettings = true;
        }
        
        if (hasPhraseAppSettingsUrl === "on")
        {
            phraseAppSettingsOn = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("phraseapp"))
    {
        if (formObj.properties["phraseapp"] === true || formObj.properties["phraseapp"] === "true" || formObj.properties["phraseapp"] === "on" || formObj.properties["phraseapp"] === "off")
        {
            hasPhraseAppSettings = true;
        }
        
        if (formObj.properties["phraseapp"] === "on")
        {
            phraseAppSettingsOn = true;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("phraseapp")
        && (headerObj["phraseapp"] === true || headerObj["phraseapp"] === "true" || headerObj["phraseapp"] === "on" || headerObj["phraseapp"] === "off"))
    {
        hasPhraseAppSettings = true;
        
        if (headerObj["phraseapp"] === "on")
        {
            phraseAppSettingsOn = true;
        }
    }
    
    if (hasPhraseAppSettings)
    {
        loadScript("./scripts/phraseapp.js", (phraseAppSettingsOn ? showPhraseAppSettingsCardAndSwitchOn : showPhraseAppSettingsCard), showPhraseAppHelperLoadFailedWarning);
    }
    
    // Check if we should show the button which opens the feedback form
    var hasFeedback = false;
    var hasFeedbackUrl = checkForUrlParameter("feedback");
    if (hasFeedbackUrl === "false" || hasFeedbackUrl === "true")
    {
        if (hasFeedbackUrl === "true")
        {
            hasFeedback = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("feedback"))
    {
        if (formObj.properties["feedback"])
        {
            hasFeedback = true;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("feedback") && headerObj["feedback"] === true)
    {
        hasFeedback = true;
    }
    
    if (hasFeedback)
    {
        // We add the keydown listener only when feedback is enabled in order to avoid unnecessary triggers and improve performance
        // On press escape close feedback
        $(document).on('keydown', function(e)
        {
            if(e.keyCode === 27)  // ESC
            {
                closeFeedbackContent();
            }
        });
    }
    else
    {
        $("#feedbackInserted").hide();
    }
    
    // Set up the header title
    if (formObj.hasOwnProperty("title"))
    {
        $("#appTitle").find(".app-menu-brand").html(formObj["title"]);
        $("#appTitlePrint").find("p").html(formObj["title"]);
    }
    
    $("#appTitle").show();
    
    $(document).mouseup(function (e)
    {
        var languageSelectorWrapper = $('#languages');
        if (!languageSelectorWrapper.is(e.target) && languageSelectorWrapper.has(e.target).length === 0)
        {
            languageSelectorWrapper.hide();
        }
        
        var timeZoneSelectorWrapper = $('#timeZones');
        if (!timeZoneSelectorWrapper.is(e.target) && timeZoneSelectorWrapper.has(e.target).length === 0)
        {
            timeZoneSelectorWrapper.hide();
        }
    });
    
    $('.user-settings-card').click(function (e)
    {
        if (!$(this).hasClass('extended-card'))
        {
            e.stopPropagation();
            $(this).addClass('extended-card').removeClass('collapsed-card');
            $(this).find('.user-settings-card-value').addClass('user-settings-card-edit').removeClass('user-settings-card-value');
            $(this).find('.user-settings-card-value-content').hide();
            $(this).find('.user-settings-card-combo-wrapper').show();
            $(this).find('.user-settings-card-expand-button').hide();
            $(this).find('.user-settings-card-collapse-button').show();
            $(this).find('.user-settings-card-footer').show();
        }
    });
    
    $('#saveTheme').click(saveTheme);
    $('#cancelTheme').click(cancelTheme);
    $('#collapseTheme').click(cancelTheme);
    
    $('#saveLTZ').click(saveLTZ);
    $('#cancelLTZ').click(cancelLTZ);
    $('#collapseLTZ').click(cancelLTZ);
    
    setupLanguageMenu();

    // Closing the feedback division when clicking outside of the feedback division
    $('#feedbackOverlayBackground').click(function()
    {
        closeFeedbackContent();
    });
    
    $('#feedbackMainContainer').click(function(e)
    {
        e.stopPropagation();  
    });
    
    // Set active button in left form container(feedback) 
    $('#feedbackOverallAnchorsContainer button').on('click', function()
    {
        $(this).siblings().removeClass('feedback-overall-anchor-active');
        $(this).addClass('feedback-overall-anchor-active');
    });
    
    if (matchMedia)
    {
        const mediaMaximizedQuery = matchMedia("(min-width: 883px)");
        mediaMaximizedQuery.addListener(function (mq)
        {
            if (mq.matches)
            {
                hideCommands();
            }
        });
        
        const mediaMinimizedQuery = matchMedia("(max-width: 882px)");
        mediaMinimizedQuery.addListener(function (mq)
        {
            if (mq.matches)
            {
                closeAppLauncher();
                hideEnvironmentDropdown();
                closeUserMenu();
            }
        });
        
    }
}

/**
 * Checks if there is a given URL parameter
 * @param {string} parameterName URL parameter name whose existence should be checked
 */
function checkForUrlParameter(parameterName)
{
    var paramRegex = new RegExp("[?&]" + encodeURIComponent(parameterName) + "(=([^&#]*)|&|#|$)");
    var paramValue = paramRegex.exec(window.location.href);
    if (paramValue && paramValue[2])
    {
        return decodeURIComponent(paramValue[2].replace(/\+/g, " "));
    }
    
    return null;
}

/**
 * Returns configured process text
 */
function getProcessText()
{
    var processText = "Click the gear icon below to see the business process...";
    var processTextUrl = checkForUrlParameter("processtext");
    if (processTextUrl)
    {
        processText = processTextUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["processtext"])
    {
        processText = formObj.properties["processtext"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj != null && headerObj["processtext"])
    {
        processText = headerObj["processtext"];
    }
    
    return processText;
}

/**
 * Returns configured e-learning text
 */
function getELearningText()
{
    var eLearningText = "Click the learning icon below to visit the e-learning module...";
    var eLearningTextUrl = checkForUrlParameter("elearningtext");
    if (eLearningTextUrl)
    {
        eLearningText = eLearningTextUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["elearningtext"])
    {
        eLearningText = formObj.properties["elearningtext"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj != null && headerObj["elearningtext"])
    {
        eLearningText = headerObj["elearningtext"];
    }
    
    return eLearningText;
}

/**
 * Sets default form level help content. Used when no form element has focus
 */
function setDefaultHelpContent()
{
    $('#divHelp').empty();
    if (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("formhelp"))
    {
        var vhelpform = '<div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="formHelp"></span></div></div></div>';
        $('#divHelp').append(vhelpform);
        $('#formHelp').html(formObj.properties.formhelp).attr("lang-tran", formObj.properties.formhelp).attr("lang-form", "true").translate();
    }
    
    if(formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("processimagelink")
        && formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("processlink"))
    {
        var vprocess = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="bussinesplabel"></span></div></div></div><div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><a id="processlink"><img class="help-photo-container" id="processimagelink"></a></div></div></div>';
        $('#divHelp').append(vprocess);
        $('#processimagelink').attr('src', formObj.properties.processimagelink);
        $('#processlink').attr('href', formObj.properties.processlink);
        var processText = getProcessText();
        $('#bussinesplabel').html(processText);
        $('#bussinesplabel').attr("lang-tran", processText).attr("lang-form", "true");
    }
    
    if(formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("elearningimagelink")
        && formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("elearninglink"))
    {
        var velearning = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="elearninglabel"></span></div></div></div><div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><a id="elearninglink"><img class="help-photo-container" id="elearningimagelink"></a></div></div></div>';
        $('#divHelp').append(velearning);
        $('#elearningimagelink').attr('src', formObj.properties.elearningimagelink);
        $('#elearninglink').attr('href', formObj.properties.elearninglink);
        var eLearningText = getELearningText();
        $('#elearninglabel').html(eLearningText);
        $('#elearninglabel').attr("lang-tran", eLearningText).attr("lang-form", "true");
    }
}

/**
 * Hide feedback content and reset feedback content to default view and values.
 */
function closeFeedbackContent()
{
    $('#feedbackOverlayBackground').hide();
    $('#feedbackLeftFormContainer').hide().removeClass('slide-left');
    $('#feedbackMiddleFormContainer').hide().removeClass('slide-left');
    $('#feedbackOverallAnchorsContainer button').removeClass('feedback-overall-anchor-active');
    $('#feedbackBasicFormQuestionMiddleText').html('');
    $('#feedbackBasicFormComment').val('');
    $('#feedbackBasicFormScreenshotCheckbox').prop('checked', false);
}

/**
 * Opens an overlay with user menu and commands. User menu content depends on selected button.
 * @param {any} userMenuButton header menu command button which has been selected
 */
function openUserMenu(userMenuButton)
{
    if (userMenuButton && userMenuButton.classList)
    {
        if (userMenuButton.classList.contains('app-menu-button-right-menu-selected'))
        {
            // In this case the menu button is already selected so we just need to close the
            // ovrelay.
            closeUserMenu();
        }
        else
        {
            // We should open the overlay and put the content depending on selected command.
            // Hide opened environment dropdowns first
            hideEnvironmentDropdown();
            
            // Hide app launcher menu if opened
            closeAppLauncher()
            
            // Close any opened overlay and then open the right one
            var openedMenuButtons = document.getElementsByClassName('app-menu-button-right-menu-selected');
            for (var openedMenuButtonIndex = 0; openedMenuButtonIndex < openedMenuButtons.length; openedMenuButtonIndex++)
            {
                openedMenuButtons[openedMenuButtonIndex].classList.remove('app-menu-button-right-menu-selected');
            }

            userMenuButton.classList.add('app-menu-button-right-menu-selected');

            // Find menu wrapper id from id of the selected button
            if (userMenuButton.id)
            {
                var wrapperId = commandIdWrapperIdMap[userMenuButton.id];
                if (wrapperId)
                {
                    // Hide all wrappers and then show the right one
                    var allWrappers = document.getElementsByClassName('user-settings-overlay');
                    for (var wrapperIndex = 0; wrapperIndex < allWrappers.length; wrapperIndex++)
                    {
                        if (!allWrappers[wrapperIndex].classList.contains('header-hidden-element'))
                        {
                            allWrappers[wrapperIndex].classList.add('header-hidden-element');
                        }
                    }

                    var wrapper = document.getElementById(wrapperId);
                    if (wrapper)
                    {
                        if (wrapper.parentElement.parentElement.classList.contains('user-settings-wrapper'))
                        {
                            wrapper.parentElement.parentElement.classList.remove('header-hidden-element');
                            if (firstMenuItem !== 'notdefined' && wrapperId !== firstMenuItem)
                            {
                                if (!wrapper.parentElement.parentElement.classList.contains('first-item'))
                                {
                                    wrapper.parentElement.parentElement.classList.add('first-item');
                                }
                            }
                            else if (wrapper.parentElement.parentElement.classList.contains('first-item'))
                            {
                                wrapper.parentElement.parentElement.classList.remove('first-item');
                            }
                            
                            $('#transparentbutton').removeClass('header-hidden-element');
                            $('#transparentbutton').addClass('rsp-hidden');
                            $('#feedbackContainer').addClass('open-user-settings-small');
                        }
                        
                        wrapper.classList.remove('header-hidden-element');
                        var userMenu = document.getElementById('userMenuOverlay');
                        if (userMenu && userMenu.classList.contains('header-hidden-element'))
                        {
                            userMenu.classList.remove('header-hidden-element');
                        }

                        // Shrink the content
                        if ($(document).width() > 882)
                        {
                            var contentWrappers = document.getElementsByClassName('content-wrapper');
                            for (var i = 0; i < contentWrappers.length; i++)
                            {
                                contentWrappers[i].classList.add('shrink');
                            }
                        }
                    }
                }
            }   
        }
    }
}

/**
 * Closes the menu overlay
 */
function closeUserMenu()
{
    var selectedCommandButtons = document.getElementsByClassName('app-menu-button-right-menu-selected');
    for (var buttonsIndex = 0; buttonsIndex < selectedCommandButtons.length; buttonsIndex++)
    {
        selectedCommandButtons[buttonsIndex].classList.remove('app-menu-button-right-menu-selected');
    }

    var userMenu = document.getElementById('userMenuOverlay');
    if (userMenu && !userMenu.classList.contains('header-hidden-element'))
    {
        userMenu.classList.add('header-hidden-element');
        var userSettingsWrappers = document.getElementsByClassName('user-settings-wrapper');
        if (userSettingsWrappers)
        {
            for (var wrappersIndex = 0; wrappersIndex < userSettingsWrappers.length; wrappersIndex++)
            {
                if (!userSettingsWrappers[wrappersIndex].classList.contains('header-hidden-element'))
                {
                    userSettingsWrappers[wrappersIndex].classList.add('header-hidden-element');
                }
                
                if (userSettingsWrappers[wrappersIndex].classList.contains('first-item'))
                {
                    userSettingsWrappers[wrappersIndex].classList.remove('first-item');
                }
            }
        }
        
        var userSettingsSmallWrappers = document.getElementsByClassName('user-settings-small-wrapper');
        if (userSettingsSmallWrappers)
        {
            for (var smallWrappersIndex = 0; smallWrappersIndex < userSettingsSmallWrappers.length; smallWrappersIndex++)
            {
                if (!userSettingsSmallWrappers[smallWrappersIndex].classList.contains('header-hidden-element'))
                {
                    userSettingsSmallWrappers[smallWrappersIndex].classList.add('header-hidden-element');
                }
            }
        }
    }

    // Expand the content
    var contentWrappers = document.getElementsByClassName('shrink');
    if (contentWrappers)
    {
        for (var contentWrappersIndex = 0; contentWrappersIndex < contentWrappers.length; contentWrappersIndex++)
        {
        contentWrappers[contentWrappersIndex].classList.remove('shrink');
    }
    }
    
    $('#transparentbutton').removeClass('rsp-hidden');
    $('#transparentbutton').addClass('header-hidden-element');
    $('#feedbackContainer').removeClass('open-user-settings-small');
}

/**
 * Displays hidden command buttons on screens having width <= 882px (mobile devices)
 */
function showCommands()
{
    // Hide visible buttons in mobile view
    var visibleButtons = document.getElementsByClassName('visiblesmcommands');
    for (var i = 0; i < visibleButtons.length; i++)
    {
        if (hiddenWrappers.indexOf(visibleButtons[i].id) === -1)
        {
            visibleButtons[i].classList.add('header-hidden-element');
        }
    }

    // Display hidden buttons in mobile view
    var hiddenButtons = document.getElementsByClassName('hiddensmcommands');
    for (var i = 0; i < hiddenButtons.length; i++)
    {
        if (hiddenWrappers.indexOf(hiddenButtons[i].id) === -1)
        {
            hiddenButtons[i].classList.add('visiblecommand');
        }
    }
    
    // Hide app launcher menu, environment dropdown and user menu overlay
    closeAppLauncher();
    hideEnvironmentDropdown();
    closeUserMenu();
    hideUserSettingsSmallMenuDropdown();
}

/**
 * Hides hidden command buttons on screens having width <= 882px (mobile devices)
 */
function hideCommands()
{
    // Hide hidden buttons in mobile view
    var hiddenButtons = document.getElementsByClassName('hiddensmcommands');
    for (var i = 0; i < hiddenButtons.length; i++)
    {
        if (hiddenWrappers.indexOf(hiddenButtons[i].id) === -1)
        {
            hiddenButtons[i].classList.remove('visiblecommand');
        }
    }

    // Display visible buttons in mobile view
    var visibleButtons = document.getElementsByClassName('visiblesmcommands');
    for (var i = 0; i < visibleButtons.length; i++)
    {
        if (hiddenWrappers.indexOf(visibleButtons[i].id) === -1)
        {
            visibleButtons[i].classList.remove('header-hidden-element');
        }
    }
    
    // Hide app launcher menu, environment dropdown and user menu overlay
    closeAppLauncher();
    hideEnvironmentDropdown();
    closeUserMenu();
}

/**
 * Opens a dropdown with environment tenants or closes if it has been already opened.
 */
function showEnvironmentDropdown(dropdownButton)
{
    // Close the menu overlay if opened
    closeUserMenu();
    
    // Close app launcher manu if opened
    closeAppLauncher();
    
    // Find a wrapping div of button and dropdown list
    var wrapper = dropdownButton.parentElement;
    if (wrapper)
    {
        var dropdownListWrapers = wrapper.getElementsByClassName('environment-dropdown');
        if (dropdownListWrapers && dropdownListWrapers[0] && dropdownListWrapers[0].classList.contains('header-hidden-element'))
        {
            // Open the dropdown menu
            dropdownListWrapers[0].classList.remove('header-hidden-element');
            dropdownButton.classList.add('opened');
        }
        else
        {
            // Close the dropdown menu
            dropdownListWrapers[0].classList.add('header-hidden-element');
            dropdownButton.classList.remove('opened');
        }
    }
}

/**
 * Hides all opened environment dropdowns
 */
function hideEnvironmentDropdown()
{
    var dropdownButtons = document.getElementsByClassName('environment-button');
    if (dropdownButtons)
    {
        for (var i = 0; i < dropdownButtons.length; i++)
        {
            var dropdownButton = dropdownButtons[i];
            
            // Find a wrapping div of button and dropdown list
            var wrapper = dropdownButton.parentElement;
            if (wrapper)
            {
                var dropdownListWrapers = wrapper.getElementsByClassName('environment-dropdown');
                if (dropdownListWrapers && dropdownListWrapers[0])
                {
                    // Close the dropdown menu
                    if (!dropdownListWrapers[0].classList.contains('header-hidden-element'))
                    {
                        dropdownListWrapers[0].classList.add('header-hidden-element');
                    }
                    
                    if (dropdownButton.classList.contains('opened'))
                    {
                        dropdownButton.classList.remove('opened');
                    }
                }
            }
        }
    }
}

/**
 * Opens user menu dropdown on small screeen devices or closes it if already opened
 */
function showUserSettingsSmallMenuDropdown(dropdownMenuButton)
{
    // Find a wrapping div of button and dropdown list
    var wrapper = dropdownMenuButton.parentElement.parentElement;
    if (wrapper)
    {
        var dropdownListWrapers = wrapper.getElementsByClassName('user-settings-small-menu-dropdown');
        if (dropdownListWrapers && dropdownListWrapers[0] && dropdownListWrapers[0].classList.contains('header-hidden-element'))
        {
            // Open the dropdown menu
            dropdownListWrapers[0].classList.remove('header-hidden-element');
            dropdownMenuButton.classList.add('opened');
        }
        else
        {
            // Close the dropdown menu
            dropdownListWrapers[0].classList.add('header-hidden-element');
            dropdownMenuButton.classList.remove('opened');
        }
    }
}

/**
 * Hides user menu dropdown on small screen devices
 */
function hideUserSettingsSmallMenuDropdown()
{
    var dropdownListWrapers = document.getElementsByClassName('user-settings-small-menu-dropdown');
    if (dropdownListWrapers)
    {
        for (var wrapperIndex = 0; wrapperIndex < dropdownListWrapers.length; wrapperIndex++)
        {
            if (!dropdownListWrapers[wrapperIndex].classList.contains('header-hidden-element'))
            {
                // Open the dropdown menu
                dropdownListWrapers[wrapperIndex].classList.add('header-hidden-element');
                
                var dropdownButtons = dropdownListWrapers[wrapperIndex].parentElement.getElementsByClassName('user-settings-small-menu-item');
                if (dropdownButtons)
                {
                    for (var buttonIndex = 0; buttonIndex < dropdownButtons.length; buttonIndex++)
                    {
                        if (dropdownButtons[buttonIndex].classList.contains('opened'))
                        {
                            dropdownButtons[buttonIndex].classList.remove('opened');
                        }
                    }
                }
            }
        }
    }
}

/**
 * Opens the app launcher or closes it if already opened
 */
function openAppLauncher(applButton)
{
    var launcher = document.getElementById('applauncher');
    if (launcher)
    {
        if (launcher.classList.contains('opened'))
        {
            launcher.classList.remove('opened');
            applButton.classList.remove('opened');
        }
        else
        {
            launcher.classList.add('opened');
            applButton.classList.add('opened');
            hideEnvironmentDropdown();
            hideUserSettingsSmallMenuDropdown();
            closeUserMenu();
        }
    }
}

/**
 * Closes the app launcher
 */
function closeAppLauncher()
{
    var launcher = document.getElementById('applauncher');
    if (launcher)
    {
        if (launcher.classList.contains('opened'))
        {
            launcher.classList.remove('opened');
            var applButtons = document.getElementsByClassName('appl-button');
            if (applButtons)
            {
                for (var buttonIndex = 0; buttonIndex < applButtons.length; buttonIndex++)
                {
                    if (applButtons[buttonIndex].classList.contains('opened'))
                    {
                        applButtons[buttonIndex].classList.remove('opened');
                    }
                }
            }
        }
    }
}

/**
 * Opens a list of available languages
 */
function chooseLanguage()
{
    $('#languages').show();
}

/**
 * Opens a list of available time zones
 */
function chooseTimeZone()
{
    $('#timeZones').show();
}

/**
 * Collapses extended settings menu card
 */
(function($)
{
    $.fn.closeExtendedCard = function()
    {
        return this.each(function()
        {
            $this = $(this);
            if ($this.hasClass('extended-card'))
            {
                $this.addClass('collapsed-card').removeClass('extended-card');
                $this.find('.user-settings-card-value').addClass('user-settings-card-value').removeClass('user-settings-card-edit');
                $this.find('.user-settings-card-value-content').show();
                $this.find('.user-settings-card-combo-wrapper').hide();
                $this.find('.user-settings-card-expand-button').show();
                $this.find('.user-settings-card-collapse-button').hide();
                $this.find('.user-settings-card-footer').hide();
            }
        });
    };
}(jQuery));

/**
 * Saves language and time zone changes and collapses extended 'Language and time zone' card
 */
function saveLTZ(e)
{
    e.stopPropagation();
    var languageChanged = setChosenLanguage();
    var timeZoneChanged = setChosenTimeZone();
    if ((languageChanged || timeZoneChanged) && isSignedInUser())
    {
        if (isUseOutlookMailSettings() && mailboxSettingsAvailable)
        {
            var payload;
            if (languageChanged && timeZoneChanged)
            {
                payload = {"timeZone":timeZoneSelector.currentTimeZone,"language":{"locale":languageSelector.currentLanguage}};
            }
            else if (languageChanged)
            {
                payload = {"language":{"locale":languageSelector.currentLanguage}};
            }
            else
            {
                payload = {"timeZone":timeZoneSelector.currentTimeZone};
            }
            
            patchmailboxsettingsdata("https://graph.microsoft.com/beta/me/mailboxSettings", payload);
        }
        else if (isUseUserPropertyExtensions() && userPropertyExtensionsAvailable)
        {
            if (languageChanged && timeZoneChanged)
            {
                updateLanguageTimeZonePropertyExtensions(languageSelector.currentLanguage, timeZoneSelector.currentTimeZone);
            }
            else if (languageChanged)
            {
                updateLanguageTimeZonePropertyExtensions(languageSelector.currentLanguage, null);
            }
            else
            {
                updateLanguageTimeZonePropertyExtensions(null, timeZoneSelector.currentTimeZone);
            }
        }
    }
    
    $('#LTZCard').closeExtendedCard();
}

/**
 * Cancels language and time zone changes and collapses extended 'Language and time zone' card
 */
function cancelLTZ(e)
{
    e.stopPropagation();
    resetLanguage();
    resetTimeZone();
    $('#LTZCard').closeExtendedCard();
}

/**
 * Saves theme changes and collapses extended 'Theme' card
 */
function saveTheme(e)
{
    e.stopPropagation();
    applyTheme();
    $('#themeCard').closeExtendedCard();
}

/**
 * Cancels theme changes and collapses extended 'Theme' card
 */
function cancelTheme(e)
{
    e.stopPropagation();
    resetTheme();
    $('#themeCard').closeExtendedCard();
}

/**
 * Shows the PhraseApp card in the settings menu which
 * switches the PhraseApp plugin on and off
 */
function showPhraseAppSettingsCard()
{
    $('#savePhraseApp').click(savePhraseAppSwitch);
    $('#cancelPhraseApp').click(cancelPhraseAppSwitch);
    $('#collapsePhraseApp').click(cancelPhraseAppSwitch);
    $('#phraseAppCardWrapper').show();
}

/**
 * Shows the PhraseApp card in the settings menu which
 * switches the PhraseApp plugin on and off. Switches
 * the plugin on immediately.
 */
function showPhraseAppSettingsCardAndSwitchOn()
{
    showPhraseAppSettingsCard();
    changePhraseAppSelection();
    applyPhraseAppSettingsChanges();
}

/**
 * Shows the warning that the phraseapp.js hasn't been loaded
 */
function showPhraseAppHelperLoadFailedWarning()
{
    alert('Failed to load PhraseApp helper');
}

/**
 * Saves changes from the PhraseApp switch on/off menu settings and
 * closes the extended 'PhraseApp' settings menu card
 */
function savePhraseAppSwitch(e)
{
    e.stopPropagation();
    applyPhraseAppSettingsChanges();
    $('#phraseAppCard').closeExtendedCard();
}

/**
 * Cancels changes from the PhraseApp switch on/off menu settings and
 * closes the extended 'PhrasApp' settings menu card
 */
function cancelPhraseAppSwitch(e)
{
    e.stopPropagation();
    resetPhraseAppSettings();
    $('#phraseAppCard').closeExtendedCard();
}

/**
 * Show feedback dialog
 */
function showFeedbackDialog()
{
        $('#feedbackOverlayBackground').show();
        setTimeout(function()
        {
          $('#feedbackLeftFormContainer').show();
        }, 1000);
}

/**
 * Show feedback fields and change the title depending on selected button 
 */
function showFeedbackFields(buttonSetText)
{
    $('#feedbackBasicFormQuestionMiddleText').html(langLayoutObj[languageSelector.selectedLanguage][buttonSetText]);
    $('#feedbackLeftFormContainer').addClass('slide-left');
    $('#feedbackMiddleFormContainer').addClass('slide-left');
    
    // Set value for email field if currentUser exist
    if(typeof currentUser !== 'undefined' && currentUser !== null && 
        typeof currentUser.uid !== 'undefined' && currentUser.uid !== null)
    {
        $('#emailOptional').val(currentUser.uid);
    }
    $('#feedbackMiddleFormContainer').show();
} 