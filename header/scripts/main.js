/**
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

var userSignedIn = $.Deferred();
function setupApp() {
    // we set the title once again (it might be changed during loading)
    document.title = appConfiguration.formtitle;   
    if (window.cordova) {
        adalSignIn();
    } else {
        userSignedIn.resolve();
    }

    $.when(userSignedIn).then(function () {
        _setupAppInternal();
    });
}

/**
 * Sets up the header and layout elements including a form
 */
function _setupAppInternal()
{
    console.log('Setting app header and the form...');
    
    // Initializing the form
    setupLayout();
    var hooksObj = createHooksObj();
    langObj.hooks = hooksObj;
    langObj.languageOverride = numberFormatObj;
    fillUserInfo();
    setupPredefinedTheme();
    setInitialTimeZone();

    generateForm(function()
    {
        formDestroyed = false;
        setupPredefinedLanguage();
        configureMenu();
    });
}

function formRenderedCallback()
{
    // We should show the form after new styles has been loaded to prevent FOUC
    showContentOnStyleApply(function()
    {  
        // Embeds a map (for example Bing Map) 
        MapPlugIn.reloadMap();
        checkAutofocus(formioForm);
        configureChoicesOptions(formioForm);
    });
    // Reset dirty flag
    TogFormViewer.dirty = false;
    
    checkForLoadedAction();    
    console.log("form data after rendered callback="+JSON.stringify(formioForm.submission.data));
console.log("ISDIRTY="+TogFormViewer.dirty);    
//setTimeout(function(){console.log("form data after DELAY="+JSON.stringify(formioForm.submission.data));console.log("ISDIRTY="+TogFormViewer.dirty);formioForm.setSubmission({"data":appFormDataObj});}, 0);
setTimeout(function(){/*console.log("form data after DELAY 100="+JSON.stringify(formioForm.submission.data))*/;console.log("ISDIRTY 100="+TogFormViewer.dirty);}, 100);
setTimeout(function(){console.log("ISDIRTY 150="+TogFormViewer.dirty);}, 150);
setTimeout(function(){console.log("ISDIRTY 200="+TogFormViewer.dirty);}, 200);
setTimeout(function(){console.log("ISDIRTY 250="+TogFormViewer.dirty);}, 250);
setTimeout(function(){console.log("ISDIRTY 275="+TogFormViewer.dirty);}, 275);
setTimeout(function(){console.log("ISDIRTY 300="+TogFormViewer.dirty);}, 300);
setTimeout(function(){console.log("ISDIRTY 500="+TogFormViewer.dirty);}, 500);
}

function checkAutofocus(comp)
{
    if (comp && comp.component && comp.component.autofocus)
    {
        comp.focus();
    }
    else if (comp.components)
    {
        var componentsInd = 0;
        for (; componentsInd < comp.components.length; componentsInd++)
        {
            checkAutofocus(comp.components[componentsInd]);
        }
    }
}

function configureChoicesOptions(comp)
{
    if (comp && comp.type === "select")
    {
        if (comp.component.properties && comp.component.properties["choicesOptions"])
        {
            $.extend(comp.choices.config, JSON.parse(comp.component.properties["choicesOptions"]));
        }
        else if (appConfiguration.choicesOptions)
        {
            $.extend(comp.choices.config, appConfiguration.choicesOptions);
        }
    }
    else if (comp.components)
    {
        var componentsInd = 0;
        for (; componentsInd < comp.components.length; componentsInd++)
        {
            configureChoicesOptions(comp.components[componentsInd]);
        }
    }
}

/**
 * Checks the configuration to find out if we should perform an optional API call after we load the form.
 * If so performs the call.
 */
function checkForLoadedAction()
{
    if (!appConfiguration.home)
    {
        // We don't have the base URL for the API call so we don't perform a call        
        return;
    }
    
    // We found home URL and it is a base address for our call
    // Now we need to find a relative path
    
    if (appConfiguration.actionLoaded)
    {
        var url = appConfiguration.home + "/" + appConfiguration.actionLoaded;
        
        performLoadedAction(url);
    }
}

/**
 * Calls loaded action
 */
function performLoadedAction(url)
{
    var now = new Date();
    var event =
    {
        "type": "Loaded",
        "when" : {
            "time": now.toISOString(),
            "timezoneOffset": now.getTimezoneOffset()
        },
        "controlId": (formObj.hasOwnProperty("_id") ? formObj._id : ""),
        "controlType": "form",
        "controlProperties": (formObj.properties ? formObj.properties : null),
        "value": null
    };

    // Replace placeholders in relative path with available settings
    url = handlePlaceholders(url,event);

    console.log("form data for loaded="+JSON.stringify(formioForm.submission.data));
    
    var payload = {"appInfo" : TogFormViewer.getAppInfo(event)};
    console.log('executing loaded action for url '+url);
    // TODO: Perform loading API call with the given callback
    if (typeof ADAL!== 'undefined' && ADAL) {
        executeAjaxRequestWithAdalLogic(ADAL.config.clientId, executeAjaxRequest, url, payload, {"event":event},onsuccess_loaded,onfailure_loaded,onfailure_loaded);
    } else {
        //alert("It is not possible to perform loaded action because user is not logged-in!");
        //console.log("It is not possible to perform loaded action because user is not logged-in!");
        executeAjaxRequest(null, url, payload, {"event":event},onsuccess_loaded,onfailure_loaded,onfailure_loaded);
    }    
}

/**
 * This function is executed on successful call to Loaded API.
 */
function onsuccess_loaded(token,url,formdata,additionalConfiguration,data,textStatus,request) {
   var msgPart = "loaded operation for url '"+url+"'";
   console.log("Successfully executed "+msgPart+".");
   //console.log('DATA received ='+JSON.stringify(data));
}

function onfailure_loaded(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown) {
   onfailure_generic(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown);
}

/**
 * Create form with form ready callback paremeter. 
 */
function generateForm(formReadyCallback) 
{
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
        console.log("form data before="+JSON.stringify(form.submission.data));
        form.submission = {"data":appFormDataObj};
        console.log("form data after="+JSON.stringify(form.submission.data));
        form.httprequest =
        {
            protocol : window.location.protocol.substring(0,window.location.protocol.length-1),
            hostname: window.location.hostname,
            pathname: window.location.pathname,
            querystring: window.location.search,
            queryjson: appURLQueryParameters
        }
        window.setLanguage = function (lang)
        {
            flatpickr.localize(flatpickr.l10ns[getFlatpickrLanguage(lang)]);
            
            // Set starting day of week to Monday for English
            if (lang === "en-GB")
            {
                flatpickr.l10ns.default.firstDayOfWeek = 1;
            }
            
            form.language = lang;
            
            // TODO This is a temporary patch for an issue with change event handling.
            // Starting from form.io v3.0.0-rc.26 change event listener is removed after
            // form gets translated. Remove this once the issue gets fixed by form.io
            form.on('change', function(event)            
            {   
            console.log("CHG event executed, event.changed="+event.changed+", ecc="+(event.changed!=null?event.changed.component:"null")+",ecck="+(event.changed!=null&&event.changed.component!=null?event.changed.component.key:"null"));
                var skipCalculate = false;
                
                // If there is a noValidate flag and it is set to true it is a changed event fired when form gets loaded
                // It is fired if there are checkboxes or datetime components in the form
                if (event.changed && (!event.changed.flags || !event.changed.flags.noValidate))
                {
                    if (event.changed.component && event.changed.component.enableTime === false && event.changed.component.type === "datetime" && event.changed.component.properties
                            && event.changed.component.properties.hasOwnProperty("shift time to utc") && event.changed.component.properties["shift time to utc"] === "true"
                        && event.changed.value && new Date().getTimezoneOffset() < 0)
                    {
                        if (event.changed.value.indexOf("T00:00:00.000Z") !== 10)
                        {
                            TogFormViewer.FormioPlugIn.setComponentValue(event.changed.component.key, moment(event.changed.value).subtract(new Date().getTimezoneOffset(), 'm').toISOString()).then((function(event)
                            {
                                return function()
                                {
                                    if ((event.changed.component && event.changed.component.properties && event.changed.component.properties.hasOwnProperty("autocalc")
                                            && event.changed.component.properties["autocalc"] === "fieldchange")
                                        || (!(event.changed.component && event.changed.component.properties && event.changed.component.properties.hasOwnProperty("autocalc"))
                                            && appConfiguration && appConfiguration.autocalc === "fieldchange"))
                                    {
                                        TogFormViewer.calculate();
                                    }
                                }
                            })(event));
                            skipCalculate = true;
                        }
                        else
                        {
                            return;
                        }
                    }
                    
                    if (!skipCalculate && ((event.changed.component && event.changed.component.properties && event.changed.component.properties.hasOwnProperty("autocalc")
                            && event.changed.component.properties["autocalc"] === "fieldchange")
                        || (!(event.changed.component && event.changed.component.properties && event.changed.component.properties.hasOwnProperty("autocalc"))
                            && appConfiguration && appConfiguration.autocalc === "fieldchange")))
                    {
                        TogFormViewer.calculate();
                    }
                    
                    TogFormViewer.FormioPlugIn.setProperty("dirty", true);
                    var now = new Date();
                    var myevent =
                    {
                       "type": "change",
                       "when" : {
                            "time": now.toISOString(),
                            "timezoneOffset": now.getTimezoneOffset()
                        },
                        "controlId": (event.changed.component ? event.changed.component.key : null),
                        "controlType": (event.changed.component ? event.changed.component.type : null),
                        "controlProperties": (event.changed.component && event.changed.component.properties ? event.changed.component.properties : null),
                        "value": event.changed.value
                    };
                    execEventAction(event.changed.component, myevent, 'action change', 'actionChange',true);
                }
            });
        };
        window.formioForm = form;
        
        // Check if we should show the toggle menu
        if (appConfiguration.toggleMenu && window.innerWidth <= TogFormViewer.FormioPlugIn.getProperty("jumpWidth"))
        {
            $("#toggleMenu").removeClass("header-hidden-element");
        }
        else if(!$("#toggleMenu").hasClass("header-hidden-element"))
        {
            $("#toggleMenu").addClass("header-hidden-element");
        }

        // Trigger form change event (execution of conditional scripts) when the window gets resized
        window.onresize = function(event)
        {
            if (appConfiguration.toggleMenu)
            {
                if (window.innerWidth <= TogFormViewer.FormioPlugIn.getProperty("jumpWidth") && $("#toggleMenu").hasClass("header-hidden-element"))
                {
                    $("#toggleMenu").removeClass("header-hidden-element");
                    TogFormViewer.toggleMenuOpened = false;
                }
                else if (window.innerWidth > TogFormViewer.FormioPlugIn.getProperty("jumpWidth") && !$("#toggleMenu").hasClass("header-hidden-element"))
                {
                    $("#toggleMenu").addClass("header-hidden-element");
                    $(".header-wrapper").removeClass("toggle-menu-opened");
                    $(".content-wrapper").removeClass("toggle-menu-opened");
                }
            }
            
            if (appConfiguration.menuPositionThreshold)
            {
                recalculateMenuPosition();
            }
            
            if (appConfiguration.triggerResizeChange)
            {
                formioForm.checkConditions();
            }
            
            var now = new Date();
            var myevent =
            {
                "type": "resize",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (formObj.hasOwnProperty("_id") ? formObj._id : ""),
                "controlType": "form",
                "controlProperties": (formObj.properties ? formObj.properties : null),
                "value": null
            };
            execEventAction(null, myevent, 'action resize', 'actionResize', false);            
        };
        
        window.onbeforeprint=function(event)
        {
            var now = new Date();
            var myevent =
            {
                "type": "beforeprint",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (formObj.hasOwnProperty("_id") ? formObj._id : ""),
                "controlType": "form",
                "controlProperties": (formObj.properties ? formObj.properties : null),
                "value": null
            };
            execEventAction(null, myevent, 'action beforeprint', 'actionBeforePrint', false);
        };
        window.onafterprint=function(event)
        {
            var now = new Date();
            var myevent =
            {
                "type": "afterprint",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (formObj.hasOwnProperty("_id") ? formObj._id : ""),
                "controlType": "form",
                "controlProperties": (formObj.properties ? formObj.properties : null),
                "value": null
            };
            execEventAction(null, myevent, 'action afterprint', 'actionAfterPrint', false);
        };
        
        form.ready.then(function()
        {
            console.log("form data READY="+JSON.stringify(form.submission.data));

           // Executing loaded script when the form is ready
           // E.g. the script could be something like: TogFormViewer.loadData('../data/mydata.json.js',true);TogFormViewer.calculate('../calc/mycalc.js');
           executeLoadingOrLoadedScript(false);
           
            // Sets up form level defined help content
            setDefaultHelpContent();
            
            formReadyCallback();
            
            // Perform form rendered callback
            setTimeout(formRenderedCallback, 0);
        });

        form.on('render', function(event)
        {
            console.log("form renderd, data="+JSON.stringify(form.submission.data));
        });
        
        
        form.on('submit', function(submission)
        {
            console.log(submission);
        });
        
        form.on('customEvent', function(event)
        {
            var now = new Date();
            var myevent =
            {
                "type": "customEvent",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (event.component ? event.component.key : null),
                "controlType": "button",
                "controlProperties": (event.component && event.component.properties ? event.component.properties : null),
                "value": null
            };            
            execEventAction(event.component, myevent, 'action', 'action', true);
        });

        form.on('componentError', function(event)
        {
            var now = new Date();
            var myevent =
            {
                "type": "componentError",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (event.component ? event.component.key : null),
                "controlType": (event.component ? event.component.type : null),
                "controlProperties": (event.component && event.component.properties ? event.component.properties : null),
                "value": event.message
            };            
            execEventAction(event.component, myevent, 'action componentError', 'actionComponentError', true);
        });

        form.on('prevPage', function(event)
        {
            // event.page is the number of the previous page
            var component = form.getPage(event.page+1);
            var now = new Date();
            var myevent =
            {
                "type": "prevPage",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (component ? component.key : null),
                "controlType": "panel",
                "controlProperties": (component && component.properties ? component.properties : null),
                "value": event.page
            };                        
            execEventAction(component,myevent, 'action prevPage', 'actionPrevPage', true);
        });
        form.on('nextPage', function(event)
        {
            // event.page is the number of the next page
            var component = form.getPage(event.page-1);
            var now = new Date();
            var myevent =
            {
                "type": "nextPage",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (component ? component.key : null),
                "controlType": "panel",
                "controlProperties": (component && component.properties ? component.properties : null),
                "value": event.page
            };                        
            execEventAction(component, myevent, 'action nextPage', 'actionNextPage', true);
        });
        console.log("form data after the end="+JSON.stringify(form.submission.data));

        
    });
}

function execEventAction(component,myevent,propName,configName,log2console) {
    if (log2console) console.log(configName+' default = '+appConfiguration[configName]);
    var actionPerformed = false;
    if (appConfiguration.home) {
        var actionHttpMethod = null;
        if (propName==='action' && component && component.hasOwnProperty("properties") && component.properties !== null && component.properties.hasOwnProperty(propName+'Method')) {
            actionHttpMethod = component.properties[propName+'Method'];
        }
        var action = appConfiguration[configName];
        var sendForm = appConfiguration.sendForm;
        if (component && component.hasOwnProperty("properties") && component.properties !== null) {
            if (component.properties.hasOwnProperty(propName)) {
                action = component.properties[propName];
                if (log2console) console.log(myevent.controlType+' action for '+myevent.controlId+' = '+action);
            }
            if (component.properties.hasOwnProperty("sendForm")) {
                var sfp = component.properties["sendForm"];
                if (sfp === "false" || sfp === "true") {
                    sendForm = (sfp==="true");
                }
                if (log2console) console.log(myevent.controlType+' sendForm for '+myevent.controlId+' = '+sendForm);
            }
        }
        if (action) {
            var url = appConfiguration.home + "/" + action;
            if (log2console) console.log(configName+' '+action+' will be executed for '+myevent.controlId);
            appFormDataObj = formioForm.submission.data;
            performEventOrCustomAction(url,myevent,sendForm,actionHttpMethod);
            actionPerformed = true;
        }
    }
    if (!actionPerformed) {
        var actionLocalScript = appConfiguration[configName+'LocalScript'];
        if (log2console) console.log(configName+'LocalSript default = '+actionLocalScript);
        if (component && component.hasOwnProperty("properties") && component.properties !== null && component.properties.hasOwnProperty(propName+' local script')) {
            actionLocalScript = component.properties[propName+' local script'];
            if (log2console) console.log(myevent.controlType+' (local) action for '+myevent.controlId+' = '+actionLocalScript);
        }
        if (actionLocalScript) {
            if (log2console) console.log(configName+' local script '+actionLocalScript+' will be executed for '+myevent.controlId);
            executeScript(myevent.controlId, actionLocalScript, myevent, log2console);
        }
    }
}

/**
 * Calls event action
 */
function performEventOrCustomAction(url,myevent,sendForm,actionHttpMethod)
{
    if (!appConfiguration.disableActionSpinner) {
        showSpinner();
    }
    url = handlePlaceholders(url,myevent);

    var payload = {"appInfo" : TogFormViewer.getAppInfo(myevent,sendForm)};
    var additionalConfig = {"event":myevent};
    if (actionHttpMethod) {
        additionalConfig['actionHttpMethod']= actionHttpMethod;
    }
    console.log("executing event "+JSON.stringify(myevent)+" action for url "+url);
    if (typeof ADAL!== 'undefined' && ADAL) {
        executeAjaxRequestWithAdalLogic(ADAL.config.clientId, executeAjaxRequest, url, payload, additionalConfig,onsuccess_eventorcustomaction,onfailure_eventorcustomaction,onfailure_eventorcustomaction);
    } else {
        //alert("It is not possible to perform event "+JSON.stringify(myevent)+" action for url '"+url+"' because user is not logged-in!");
        //hideSpinner();
        executeAjaxRequest(null, url, payload, additionalConfig,onsuccess_eventorcustomaction,onfailure_eventorcustomaction,onfailure_eventorcustomaction);
    }
}

/**
 * This function is executed on successful call to event/custom action API. If form definition changed, it will be updated.
 */
function onsuccess_eventorcustomaction(token,url,formdata,additionalConfiguration,data,textStatus,request)
{
    var msgPart = "event " + JSON.stringify(additionalConfiguration.event) +" action for url '"+url+"'";
    console.log("Successfully executed "+msgPart+".");
    //console.log('DATA received ='+JSON.stringify(data));
    if (additionalConfiguration.event.controlProperties && additionalConfiguration.event.controlProperties["set clean"] === "true")
    {
        TogFormViewer.FormioPlugIn.setProperty("dirty", false);
    }
    
    handleServerResponseForLoadingAndOtherActions(url,additionalConfiguration,data);
}

function onfailure_eventorcustomaction(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown) {
   onfailure_generic(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown);
   hideSpinner();
}
/**
 * Display a form with unchanged data. 
*/
function showFormWithUnchagedData()
{
    hideSpinner();
    formioForm.submission = formSubmissionData;
}

/**
 * Creates hooks object for form creation
 */
function createHooksObj()
{
    return hooksObj =
    {
        input: function(input)
        {
            this.addEventListener(input, 'focus', formFocusListener(this));
            this.addEventListener(input, 'blur', formBlurListener(this));
           
            this.addEventListener(input, 'search', formSearchListener(this));            
            this.addEventListener(input, 'showDropdown', formShowDropdownListener(this));
            
            this.addEventListener(input, 'click', formClickListener(this));
            this.addEventListener(input, 'dblclick', formDblClickListener(this));
            this.addEventListener(input, 'contextmenu', formContextMenuListener(this));
//            this.addEventListener(input, 'wheel', formWheelListener(this));
            
            this.addEventListener(input, 'mouseover', formMouseOverListener(this));
            this.addEventListener(input, 'mousedown', formMouseDownListener(this));
            this.addEventListener(input, 'mouseout', formMouseOutListener(this));
            this.addEventListener(input, 'mouseup', formMouseUpListener(this));
            this.addEventListener(input, 'mousemove', formMouseMoveListener(this));
            this.addEventListener(input, 'mouseenter', formMouseEnterListener(this));
            this.addEventListener(input, 'mouseleave', formMouseLeaveListener(this));

            this.addEventListener(input, 'keypress', formKeyPressListener(this));
            this.addEventListener(input, 'keydown', formKeyDownListener(this));
            this.addEventListener(input, 'keyup', formKeyUpListener(this));
            this.addEventListener(input, 'input', formInputListener(this));
            this.addEventListener(input, 'select', formSelectListener(this));
            
            this.addEventListener(input, 'cut', formCutListener(this));
            this.addEventListener(input, 'copy', formCopyListener(this));
            this.addEventListener(input, 'paste', formPasteListener(this));
            
            this.addEventListener(input, 'scroll', formScrollListener(this));
            
        }
    };
}

function formCutListener(comp)
{
    return function(event) {
        var sel = "";
        try {
            sel = window.getSelection().toString();
        } catch (e) {
        }
        if (sel!=="") {
            var now = new Date();
            var myevent =
            {
                "type": "cut",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (comp && comp.component ? comp.component.key : null),
                "controlType": (comp ? comp.type : null),
                "controlProperties": (comp && comp.component ? comp.component.properties : null),
                "value": sel
            };
            execEventAction(comp.component, myevent, 'action cut', 'actionCut');
        }
    };
}

function formCopyListener(comp)
{
    return function(event) {
        var sel = "";
        try {
            sel = window.getSelection().toString();
        } catch (e) {
        }
        if (sel!=="") {
            var now = new Date();
            var myevent =
            {
                "type": "copy",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (comp && comp.component ? comp.component.key : null),
                "controlType": (comp ? comp.type : null),
                "controlProperties": (comp && comp.component ? comp.component.properties : null),
                "value": sel
            };
            execEventAction(comp.component, myevent, 'action copy', 'actionCopy');
        }
    };
}

function formPasteListener(comp)
{
    return function(event) {
        var sel = "";
        try {
            var clipboardData = event.clipboardData || window.clipboardData;
            sel = clipboardData.getData('Text');
        } catch (e) {
        }
        if (sel!=="") {
            var now = new Date();
            var myevent =
            {
                "type": "paste",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (comp && comp.component ? comp.component.key : null),
                "controlType": (comp ? comp.type : null),
                "controlProperties": (comp && comp.component ? comp.component.properties : null),
                "value": sel
            };
            execEventAction(comp.component, myevent, 'action paste', 'actionPaste');
        }
    };
}

function formScrollListener(comp)
{
    return function(event) {
        var now = new Date();
        var myevent =
        {
            "type": "scroll",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": null
        };
        execEventAction(comp.component, myevent, 'action paste', 'actionPaste');
    };
}

function formSelectListener(comp)
{
    return function(event) {
        var sel = "";
        try {
            sel = window.getSelection().toString();
        } catch (e) {
        }
        if (sel!=="") {
            var now = new Date();
            var myevent =
            {
                "type": "select",
                "when" : {
                    "time": now.toISOString(),
                    "timezoneOffset": now.getTimezoneOffset()
                },
                "controlId": (comp && comp.component ? comp.component.key : null),
                "controlType": (comp ? comp.type : null),
                "controlProperties": (comp && comp.component ? comp.component.properties : null),
                "value": sel
            };
            execEventAction(comp.component, myevent, 'action select', 'actionSelect');
        }
    };
}
function formMouseOutListener(comp)
{
    return function(event) {
        var now = new Date();
        var myevent =
        {
            "type": "mouseout",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createMouseEventJSON(event)};
        execEventAction(comp.component, myevent, 'action mouseout', 'actionMouseOut');
    };
}
function formMouseUpListener(comp)
{
    return function(event) {
        var now = new Date();
        var myevent =
        {
            "type": "mouseup",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action mouseup', 'actionMouseUp');
   };
}
function formMouseMoveListener(comp)
{
    return function(event) {
        var now = new Date();
        var myevent =
        {
            "type": "mousemove",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action mousemove', 'actionMouseMove');
    };
}

function formMouseOverListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "mouseover",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action mouseover', 'actionMouseOver');        
    };
}
function formMouseDownListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "mousedown",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action mousedown', 'actionMouseDown');        
    };
}

function formClickListener(comp)
{
    return function(event)
    {
        //console.log('c='+JSON.stringify(comp.component));
        var now = new Date();
        var myevent =
        {
            "type": "click",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value":_createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action click', 'actionClick');        
    };
}

function formDblClickListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "dblclick",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action dblclick', 'actionDblClick');        
    };
}
function formContextMenuListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "contextmenu",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action contextMenu', 'actionContextMenu');        
    };
}
function formWheelListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "wheel",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action wheel', 'actionWheel', true);
    };
}

function formMouseEnterListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "mouseenter",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value":_createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action mouseenter', 'actionMouseEnter');        
    };
}

function formMouseLeaveListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "mouseleave",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createMouseEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action mouseleave', 'actionMouseLeave');        
    };
}

function _createMouseEventJSON(event)
{
    return {"screenX":event.screenX,"screenY":event.screenY,"clientX":event.clientX,"clientY":event.clientY,"ctrlKey":event.ctrlKey,"shiftKey":event.shiftKey,"altKey":event.altKey,"metaKey":event.metaKey,"button":event.button,"buttons":event.buttons,"pageX":event.pageX,"pageY":event.pageY,"x":event.x,"y":event.y,"offsetX":event.offsetX,"offsetY":event.offsetY,"movementX":event.movementX,"movementY":event.movementY,"which":event.which};
}

function formKeyPressListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "keypress",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType":(comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value":_createKeyEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action keypress', 'actionKeyPress');        
    };
}
function formKeyDownListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "keydown",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createKeyEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action keydown', 'actionKeyDown');
    };
}
function formKeyUpListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "keyup",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": _createKeyEventJSON(event)
        };
        execEventAction(comp.component, myevent, 'action keyup', 'actionKeyUp');
    };
}
function formInputListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "input",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": event.data
        };
        execEventAction(comp.component, myevent, 'action input', 'actionInput');        
    };
}

function _createKeyEventJSON(event)
{
    // e.g. event.key = A, event.code = keyA, event.ctrlKey = false, event.shiftKey = true, event.altKey = false, event.metaKey = false, event.keyCode = 65, ...
    return {"key":event.key,"keyCode":event.keyCode,"code":event.code,"ctrlKey":event.ctrlKey,"shiftKey":event.shiftKey,"altKey":event.altKey,"metaKey":event.metaKey,"charCode":event.charCode,"isComposing":event.isComposing,"location":event.location,"repeat":event.repeat,"which":event.which};
}

function formShowDropdownListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "showDropdown",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": null
        };
        execEventAction(comp.component, myevent, 'action showDropdown', 'actionShowDropdown', true);
    };
}


function formSearchListener(comp)
{
    return function(event)
    {
        var now = new Date();
        var myevent =
        {
            "type": "search",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : null),
            "controlType": (comp ? comp.type : null),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": (event.detail && event.detail.value ? event.detail.value : null)
        };
        execEventAction(comp.component, myevent, 'action search', 'actionSearch', true);
    };
}

/**
 * Returns function which is called by Form.io when component gets focus
 * @param comp {object} Form.io component which got focus
 */
function formFocusListener(comp)
{
    return function(event)
    {
        $('#divHelp').empty();
        if (comp && comp.hasOwnProperty("component") && comp.component.hasOwnProperty("properties")
            && comp.component.properties.hasOwnProperty("formhelp"))
        {
            var vhelpform = '<div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="formHelp"></span></div></div></div>';
            $('#divHelp').append(vhelpform);
            $('#formHelp').html(comp.component.properties.formhelp).attr("lang-tran", comp.component.properties.formhelp).attr("lang-form", "true").translate();
        }
        else if (appConfiguration.formhelp)
        {
            var vhelpform = '<div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="formHelp"></span></div></div></div>';
                $('#divHelp').append(vhelpform);
            $('#formHelp').html(appConfiguration.formhelp).attr("lang-tran", appConfiguration.formhelp).attr("lang-form", "true").translate();
        }
        
        if (comp && comp.hasOwnProperty("component") && comp.component.hasOwnProperty("properties")
            && comp.component.properties.hasOwnProperty("fieldhelp"))
        {
            var vhelpfield = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="fieldHelp"></span></div></div></div>';
            $('#divHelp').append(vhelpfield);
            $('#fieldHelp').html(comp.component.properties.fieldhelp).attr("lang-tran", comp.component.properties.fieldhelp).attr("lang-form", "true").translate();
        }
        
        if(((comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                && comp.component.properties.hasOwnProperty("processimagelink")) || appConfiguration.processimagelink)
            && ((comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                && comp.component.properties.hasOwnProperty("processlink")) || appConfiguration.processlink))
        {
            var vprocess = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="bussinesplabel"></span></div></div></div><div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><a id="processlink" target="_blank"><img class="help-photo-container" id="processimagelink"></a></div></div></div>';
            $('#divHelp').append(vprocess);
            $('#processimagelink').attr('src', (comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                && comp.component.properties.hasOwnProperty("processimagelink") ? comp.component.properties.processimagelink : appConfiguration.processimagelink));
            $('#processlink').attr('href', (comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                && comp.component.properties.hasOwnProperty("processlink") ? comp.component.properties.processlink : appConfiguration.processlink));
            $('#bussinesplabel').html(appConfiguration.processtext);
            $('#bussinesplabel').attr("lang-tran", appConfiguration.processtext).attr("lang-form", "true").translate();
        }
        
        if(((comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                && comp.component.properties.hasOwnProperty("elearningimagelink")) || appConfiguration.elearningimagelink)
            && ((comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                && comp.component.properties.hasOwnProperty("elearninglink")) || appConfiguration.elearninglink))
        {
            var velearning = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="elearninglabel"></span></div></div></div><div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><a id="elearninglink" target="_blank"><img class="help-photo-container" id="elearningimagelink"></a></div></div></div>';
            $('#divHelp').append(velearning);
            $('#elearningimagelink').attr('src', (comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                && comp.component.properties.hasOwnProperty("elearningimagelink") ? comp.component.properties.elearningimagelink : appConfiguration.elearningimagelink));
            $('#elearninglink').attr('href', (comp && comp.hasOwnProperty("component")&& comp.component.hasOwnProperty("properties")
                && comp.component.properties.hasOwnProperty("elearninglink") ? comp.component.properties.elearninglink : appConfiguration.elearninglink));
            $('#elearninglabel').html(appConfiguration.elearningtext);
            $('#elearninglabel').attr("lang-tran", appConfiguration.elearningtext).attr("lang-form", "true").translate();
        }
        
        var now = new Date();
        var myevent =
        {
            "type": "focus",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : ""),
            "controlType": (comp ? comp.type : ""),
            "controlProperties": (comp && comp.component ? comp.component.properties : null),
            "value": ""
        };
        execEventAction(comp.component, myevent, 'action focus', 'actionFocus');

    };
}

/**
 * Called by Form.io when a component loses focus
 */
function formBlurListener(comp)
{
    return function(event)
    {
        setDefaultHelpContent();
        if ((comp.component && comp.component.properties && comp.component.properties.hasOwnProperty("autocalc")
                && comp.component.properties["autocalc"] === "focuschange")
            || (!(comp.component && comp.component.properties && comp.component.properties.hasOwnProperty("autocalc"))
                && appConfiguration && appConfiguration.autocalc === "focuschange"))
        {
            TogFormViewer.calculate();
        }
        
        var now = new Date();
        var myevent =
        {
            "type": "blur",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (comp && comp.component ? comp.component.key : ""),
            "controlType": (comp ? comp.type : ""),
            "controlProperties": (comp.component ? comp.component.properties : null),
            "value": ""
        };
        execEventAction(comp.component, myevent, 'action blur', 'actionBlur');
    };
}

/**
 * Sets up the header and layout elements excluding a form
 */
function setupLayout()
{
    // Set up the main logo
    $("#mainLogo").find("img").attr("src", appConfiguration.mainlogopath);
    
    // Update width property because width of image without source is not 0 in IE
    if (!appConfiguration.mainlogopath)
    {
        $(".logo-background").css("width", "0");
    }
    else
    {
        $(".logo-background").css("width", "auto");
    }
    
    // Display the main logo even if its path is not configured
    // In this case we use hardcoded path
    $("#mainLogo").show();
    
    // Set up side logo and show it if defined
    setSideLogoPath(); 
    
    // Set up favicon
    setFaviconElement(); 
    
    // Set up client's logo (customization logo) and show it if defined
    setCustomizationLogo(); 
    
    // Check if we should maximize the browser window (IE only)
    setMaximizeBrowserWindow();
    
    // Change form width
    $(".body-content").css("width", appConfiguration.formWidthPercent + "%");
    
    setHeaderElements();

    // Check if we should show theme selection option in the settings menu
    showThemeSettings();
     
    // Check if we should show the PhraseApp settings
    showPhraseApp();

    // Check if we should show the Test settings
    showTest();
    
    // Check if we should show the Debug settings
    showDebug();
    
    // Check if we should show the button which opens the feedback form    
    showFeeedbackButton();
    
    // Set up the header title
    setHeaderTitle();
    
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
    
    // Submit Feedback JSON file if required field is filled 
    $("#myForm").submit(function(event) 
    {
        /* stop form from submitting normally */
        event.preventDefault();

        var feedbacktype = $('#feedbacktype').val(); 
        var feedbackComment = $('#feedbackBasicFormComment').val();
        var screenshot = ''; 
        if ($('#feedbackBasicFormScreenshotCheckbox').prop('checked') === true)
        {
            screenshot = $('#img_val').val(); 
        }
        
        var now = new Date();
        var myevent =
        {
            "type": "feedback",
            "when" : {
                "time": now.toISOString(),
                "timezoneOffset": now.getTimezoneOffset()
            },
            "controlId": (formObj.hasOwnProperty("_id") ? formObj._id : ""),
            "controlType": "form",
            "controlProperties": (formObj.properties ? formObj.properties : null),
            "value": null
        };
        
        var payload = 
        {
            "appInfo" : TogFormViewer.getAppInfo(myevent)
        };
        payload.appInfo.feedback = {
            "type": feedbacktype,
            "comment": feedbackComment,
            "screenshot": ""
        };
        
        if (screenshot)
        {
            payload.appInfo.feedback.screenshot = {
                "mimetype": "image/png",
                "image": screenshot.substring(22)
            };
        }
        
        if (checkFeedbackValidity())
        {
            sendfeedback(appConfiguration.feedbackUrlAbsolutePath, payload);
            closeFeedbackContent();
        }                
    });
    
    //Added validity for required field in Feedback container 
    $('#feedbackBasicFormComment').blur(function()
    {
        checkFeedbackValidity();        
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

    // Don't lose focus when clicking on Help division
    $('.user-help-panel').bind('mousedown', function(e)
    {
        e.preventDefault();
    });
}

/**
 * Sets default form level help content. Used when no form element has focus
 */
function setHeaderElements() 
{
    // Count how many menu items are missing to apply appropriate css class later
    var missingHeaderElements = 0;
    
    // Hide the app launcher button if needed
    if (!appConfiguration.appLauncher && !$(".appl-button").hasClass('hidden'))
    {
        $(".appl-button").addClass('hidden');
    }
    else if (appConfiguration.appLauncher && $(".appl-button").hasClass('hidden'))
    {
        $(".appl-button").removeClass('hidden');
    }
    
    // Check if we should hide the environments dropdown
    if (!appConfiguration.environment)
    {
        if ($("#environmentcontainerl").length)
        {
            $("#environmentcontainerl").remove();
        }
        
        if ($("#environmentcontainers").length)
        {
            $("#environmentcontainers").remove();
        }
        
        hiddenWrappers.push("environmentcontainerl");
        hiddenWrappers.push("environmentcontainers");
    }
    else if (appConfiguration.environment && !$("#environmentcontainerl").length)
    {
        // TODO: Update environments list
        $("#customizationLogo").after('<div id="environmentcontainerl" class="header-common app-header rsp-visible"><button type="button" class="header-common app-menu-button app-menu-button-right environment-button environments-trigger" onclick="showEnvironmentDropdown(this)"><div class="environment-wrapper"><span lang-tran="Environment" class="environment-text environment-head">Environment</span><span class="environment-text environment-current">Tenant 1 (default)</span></div><svg class="environment-glyph" viewBox="0 0 16 16"><path d="M1.02,5.02L2.05,4L8,9.95L13.95,4l1.02,1.02L8,12L1.02,5.02z"></path></svg></button><div class="header-common environment-dropdown header-hidden-element"><ul class="environment-dropdown-list"><li><button disabled class="environment-option active-option"><div class="header-common environment-option-item"><div class="header-common environment-option-label">Tenant 1 (default)</div></div></button></li><li><button class="environment-option"><div class="header-common environment-option-item"><div class="header-common environment-option-label">Tenant 2</div></div></button></li><li><button class="environment-option"><div class="header-common environment-option-item"><div class="header-common environment-option-label">Tenant 3</div></div></button></li></ul></div></div>');
        $("#environmentcontainersplchld").after('<div id="environmentcontainers" class="header-common"><div class="header-common"><button class="header-common user-settings-small-menu-item environments-trigger" onclick="showUserSettingsSmallMenuDropdown(this)"><div class="user-settings-small-menu-item-wrapper"><div class="user-settings-small-menu-item-content" lang-tran="Environments">Environments</div><div class="user user-settings-small-menu-item-glyphwrapper"><svg class="user user-settings-small-menu-item-glyph" focusable="false" viewBox="0 0 16 16"><path d="M1.02,5.02L2.05,4L8,9.95L13.95,4l1.02,1.02L8,12L1.02,5.02z"></path></svg></div></div></button></div><div class="header-common user-settings-small-menu-dropdown header-hidden-element"><ul class="user-settings-small-menu-dropdown-list"><li><button disabled class="user-settings-small-menu-dropdown-option active-option"><div class="user-settings-small-menu-dropdown-option-item"><div class="user-settings-small-menu-dropdown-option-label">Tenant 1 (default)</div></div></button></li><li><button class="user-settings-small-menu-dropdown-option"><div class="user-settings-small-menu-dropdown-option-item"><div class="user-settings-small-menu-dropdown-option-label">Tenant 2</div></div></button></li><li><button class="user-settings-small-menu-dropdown-option"><div class="user-settings-small-menu-dropdown-option-item"><div class="user-settings-small-menu-dropdown-option-label">Tenant 3</div></div></button></li></ul></div></div>');
    }
    
    // Check if we should hide the notifications menu
    if (appConfiguration.notifications)
    {
        hiddenWrappers.splice("notificationsCommandWrapper");
        firstMenuItem = 'notificationsWrapper';
        if (!$("#notificationsCommandWrapper").length)
        {
            $("#notificationsCommandWrapperplchld").remove();
            $("#applButtonSmallWrapper").after('<div id="notificationsCommandWrapper" class="header-common app-header rsp-visible hiddensmcommands"><button id="notificationsCommand" type="button" class="header-common app-menu-button app-menu-button-right" onclick="openUserMenu(this)"><span class="header-common app-menu-button-label"><i class="ms-Icon ms-Icon--Ringer" aria-hidden="true"></i></span></button></div>');
        }
    }
    else
    {
        $("#notificationsCommandWrapper").after('<div id="notificationsCommandWrapperplchld" style="display: none"></div>');
        $("#notificationsCommandWrapper").remove();
        hiddenWrappers.push("notificationsCommandWrapper");
        missingHeaderElements ++;
    }
    
    // Check if we should hide the settings menu
    if (!appConfiguration.settings)
    {
        $("#settingsCommandWrapper").after('<div id="settingsCommandWrapperplchld" style="display: none"></div>');
        $("#settingsCommandWrapper").remove();
        hiddenWrappers.push("settingsCommandWrapper");
        missingHeaderElements ++;
    }
    else
    {
        hiddenWrappers.splice("settingsCommandWrapper");
        if (firstMenuItem === 'notdefined')
        {
            firstMenuItem = 'settingsWrapper';
        }
        
        if (!$("#settingsCommandWrapper").length)
        {
            var settingsMenu = '<div id="settingsCommandWrapper" class="header-common app-header rsp-visible hiddensmcommands"><button id="settingsCommand" type="button" class="header-common app-menu-button app-menu-button-right" onclick="openUserMenu(this)"><span class="header-common app-menu-button-label"><i class="ms-Icon ms-Icon--Settings" aria-hidden="true"></i></span></button></div>';
            $("#settingsCommandWrapperplchld").remove();
            $("#notificationsCommandWrapper").after(settingsMenu);
            $("#notificationsCommandWrapperplchld").after(settingsMenu);
        }
    }
    
    // Check if we should hide the help menu
    if (!appConfiguration.help)
    {
        $("#helpCommandWrapper").after('<div id="helpCommandWrapperplchld" style="display: none"></div>');
        $("#helpCommandWrapper").remove();
        hiddenWrappers.push("helpCommandWrapper");
        missingHeaderElements ++;
    }
    else
    {
        if (firstMenuItem === 'notdefined')
        {
            firstMenuItem = 'helpWrapper';
        }
        
        if (!$("#helpCommandWrapper").length)
        {
            hiddenWrappers.splice("helpCommandWrapper");
            var helpMenu = '<div id="helpCommandWrapper" class="header-common app-header rsp-visible hiddensmcommands"><button id="helpCommand" type="button" class="header-common app-menu-button app-menu-button-right" onclick="openUserMenu(this)"><span class="header-common app-menu-button-label"><i class="ms-Icon ms-Icon--Help" aria-hidden="true"></i></span></button></div>';
            $("#helpCommandWrapperplchld").remove();
            $("#settingsCommandWrapper").after(helpMenu);
            $("#settingsCommandWrapperplchld").after(helpMenu);
        }
    }
    
    // Check if we should hide the account menu
    if (!appConfiguration.account)
    {
        $("#accountsCommandWrapperL").remove();
        hiddenWrappers.push("accountsCommandWrapperL");
        $("#accountsCommandWrapperS").remove();
        hiddenWrappers.push("accountsCommandWrapperS");
        if (appConfiguration.environment) 
        {
            if(!$('#accountsCommandWrapperXS').length)
            {
                $("#headerRight").append('<div id="accountsCommandWrapperXS" class="header-common app-header rsp-hidden visiblesmcommands"><button id="accountsCommandSmall" type="button" class="header-common app-menu-button app-menu-button-right account-trigger" onclick="hideUserSettingsSmallMenuDropdown();openUserMenu(this)"><span class="header-common app-menu-button-label"></span><div class="app-menu-button-right-menu-right-user-image-wrapper"></div></button></div>');
            }
            $("#hide-account-info").hide();
        }
        else 
        {
            $('#accountsCommandWrapperXS').remove();
            $("#hide-account-info").show();
        }
    }
    else
    {
        hiddenWrappers.splice("accountsCommandWrapperL");
        hiddenWrappers.splice("accountsCommandWrapperS");
        $("#accountsCommandWrapperXS").remove();
        hiddenWrappers.push("accountsCommandWrapperXS");
        if (firstMenuItem === 'notdefined')
        {
            firstMenuItem = 'accountsWrapper';
        }
        
        if (!$("#accountsCommandWrapperL").length)
        {
            var accountsMenuL = '<div id="accountsCommandWrapperL" class="header-common app-header rsp-visible"><button id="accountsCommand" type="button" class="header-common app-menu-button app-menu-button-right app-menu-button-right-menu account-trigger" onclick="openUserMenu(this)"><div class="app-menu-button-right-menu-wrapper"><div class="app-menu-button-right-menu-left"><span class="username">James H. Smith</span></div><div class="header-common app-header app-menu-button-right-menu-right"><div class="app-menu-button-right-menu-right-image-wrapper"><span class="app-menu-button-right-menu-right-image ms-Icon ms-Icon--Contact ms-icon-font-size-52"></span></div><div class="app-menu-button-right-menu-right-user-image-wrapper"><img class="app-menu-button-right-menu-right-user-image userphoto"/></div></div></div></button></div>';
            $("#helpCommandWrapper").after(accountsMenuL);
            $("#helpCommandWrapperplchld").after(accountsMenuL);
            $("#accountsCommandWrapperL").after('<div id="accountsCommandWrapperS" class="header-common app-header rsp-hidden visiblesmcommands"><button id="accountsCommandSmall" type="button" class="header-common app-menu-button app-menu-button-right account-trigger" onclick="hideUserSettingsSmallMenuDropdown();openUserMenu(this)"><span class="header-common app-menu-button-label app-menu-button-right-menu-right-image ms-Icon ms-Icon--Contact ms-icon-font-size-52 rsp"></span><div class="app-menu-button-right-menu-right-user-image-wrapper"><img class="app-menu-button-right-menu-right-user-image userphoto"/></div></button></div>');
            $('#hide-account-info').show();
        }
    }
    
    if (appConfiguration.environment && (missingHeaderElements > 0 || !appConfiguration.account || !appConfiguration.appLauncher))
    {
        $('#environmentdropdown').removeClass();
        $('#environmentdropdown').addClass('header-common environment-dropdown header-hidden-element');
        if (appConfiguration.account && appConfiguration.appLauncher)
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
        else if (!appConfiguration.account && appConfiguration.appLauncher)
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
        else if (appConfiguration.account && !appConfiguration.appLauncher)
        {
            switch (missingHeaderElements)
            {
                case 0:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-applauncher");
                    break;
                case 1:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-applauncher-one");
                    break;
                case 2:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-applauncher-two");
                    break;
                case 3:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-applauncher-three");
            }
        }
        else if (!appConfiguration.account && !appConfiguration.appLauncher)
        {
            switch (missingHeaderElements)
            {
                case 0:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-applauncher");
                    break;
                case 1:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-applauncher-one");
                    break;
                case 2:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-applauncher-two");
                    break;
                case 3:
                    $("#environmentcontainerl").find(".environment-dropdown").addClass("minus-accounts-applauncher-three");
            }
        }
    }
    else 
    {
        $('#environmentdropdown').removeClass();
        $('#environmentdropdown').addClass('header-common environment-dropdown header-hidden-element');
    }
    
    // Check if we have too few commands in the header that we don't need ellipsis button on small screens any more
    if (missingHeaderElements == 3 || (missingHeaderElements == 2  && ((!appConfiguration.account && !appConfiguration.environment) || !appConfiguration.appLauncher))
        || (missingHeaderElements == 1 && !appConfiguration.account && !appConfiguration.environment && !appConfiguration.appLauncher))
    {
        $("#ellipsisButtonWrapper").hide();
        if (appConfiguration.appLauncher)
        {
            $("#applButtonSmallWrapper").removeClass("hiddensmcommands").removeClass("rsp-med-visible").addClass("rsp-med-small-visible");
        }
        
        if (appConfiguration.notifications)
        {
            $("#notificationsCommandWrapper").removeClass("hiddensmcommands").addClass("visiblecommand");
        }
        
        if (appConfiguration.settings)
        {
            $("#settingsCommandWrapper").removeClass("hiddensmcommands").addClass("visiblecommand");
        }
        
        if (appConfiguration.help)
        {
            $("#helpCommandWrapper").removeClass("hiddensmcommands").addClass("visiblecommand");
        }
    }
    else
    {
        $("#ellipsisButtonWrapper").attr('style', 'display:table-cell');
        if (appConfiguration.appLauncher)
        {
            $("#applButtonSmallWrapper").removeClass("rsp-med-small-visible").addClass("hiddensmcommands rsp-med-visible");
        }
        
        if (appConfiguration.notifications)
        {
            $("#notificationsCommandWrapper").removeClass("visiblecommand").addClass("hiddensmcommands");
        }
        
        if (appConfiguration.settings)
        {
            $("#settingsCommandWrapper").removeClass("visiblecommand").addClass("hiddensmcommands");
        }
        
        if (appConfiguration.help)
        {
            $("#helpCommandWrapper").removeClass("visiblecommand").addClass("hiddensmcommands");
        }
    }
}

/**
 * Check if we should maximize the browser window (IE only).
 */
function setMaximizeBrowserWindow() 
{
    if (appConfiguration.maximizeBrowserWindow)
    {
        window.moveTo(0, 0);
        window.resizeTo(screen.availWidth, screen.availHeight);
    }
}

/**
 * Check if we should show theme selection option in the settings menu
 */
function showThemeSettings() 
{
    if (appConfiguration.themeSettings)
    {
        $('#themeCardWrapper').show();
    }
    else
    {
        $('#themeCardWrapper').hide();
    }
}

/**
 * Check if we should show phrase app settings.
 */
function showPhraseApp() 
{
    var hasPhraseAppSettings = false;
    var phraseAppSettingsOn = false;
    if (appConfiguration.phraseApp === true || appConfiguration.phraseApp === "true" || appConfiguration.phraseApp === "on" || appConfiguration.phraseApp === "off")
    {
        if (!$('script').filter(function () {
            return ($(this).attr('src') == "./scripts/phraseapp.js");
        }).length)
        {
            loadScript("./scripts/phraseapp.js", ((appConfiguration.phraseApp === "on") ? showPhraseAppSettingsCardAndSwitchOn : showPhraseAppSettingsCard), showPhraseAppHelperLoadFailedWarning);
        }
        else if (appConfiguration.phraseApp === "on")
        {
            if (!phraseSelector.phraseAppSelection)
            {
                changePhraseAppSelection();
            }
            
            applyPhraseAppSettingsChanges();
        }
    }
    else
    {
        $('#phraseAppCardWrapper').hide();
        if (typeof phraseSelector !== 'undefined')
        {
            if (phraseSelector.phraseAppSelection)
            {
                changePhraseAppSelection();
            }
            
            applyPhraseAppSettingsChanges();
        }
    }
    
}

/**
 * Check if we should show test settings.
 */
function showTest() 
{
    var hasTestSettings = false;
    var testSettingsOn = false;
    if (appConfiguration.test === true || appConfiguration.test === "true" || appConfiguration.test === "on" || appConfiguration.test === "off")
    {
        if (!$('script').filter(function () {
            return ($(this).attr('src') == "./scripts/test.js");
        }).length)
        {
            loadScript("./scripts/test.js", ((appConfiguration.test === "on") ? showTestSettingsCardAndSwitchOn : showTestSettingsCard), showTestHelperLoadFailedWarning);
        }
        else if (appConfiguration.test === "on")
        {
            if (!testSelector.testSelection)
            {
                changeTestSelection();
            }
            
            applyTestSettingsChanges();
        }
    }
    else
    {
        $('#testCardWrapper').hide();
        if (typeof testSelector !== 'undefined')
        {
            if (testSelector.testSelection)
            {
                changeTestSelection();
            }
            
            applyTestSettingsChanges();
        }
    }
    
}

/**
 * Check if we should show debug settings.
 */
function showDebug() 
{
    var hasDebugSettings = false;
    var debugSettingsOn = false;
    if (appConfiguration.debug === true || appConfiguration.debug === "true" || appConfiguration.debug === "on" || appConfiguration.debug === "off")
    {
        if (!$('script').filter(function () {
            return ($(this).attr('src') == "./scripts/debug.js");
        }).length)
        {
            loadScript("./scripts/debug.js", ((appConfiguration.debug === "on") ? showDebugSettingsCardAndSwitchOn : showDebugSettingsCard), showDebugHelperLoadFailedWarning);
        }
        else if (appConfiguration.debug === "on")
        {
            if (!debugSelector.debugSelection)
            {
                changeDebugSelection();
            }
            
            applyDebugSettingsChanges();
        }
    }
    else
    {
        $('#debugCardWrapper').hide();
        if (typeof debugSelector !== 'undefined')
        {
            if (debugSelector.debugSelection)
            {
                changeDebugSelection();
            }
            
            applyDebugSettingsChanges();
        }
    }
    
}

/**
 * Set up side logo and show it if defined.
 */
function setSideLogoPath() 
{
    if (appConfiguration.sidelogopath)
    {
        $("#sideLogo").find("img").attr("src", appConfiguration.sidelogopath);
        $("#sideLogo").show();
        $("#mainLogo").find("img").removeClass("logo-background");
        $("#mainLogo").addClass("logo-background");
        $("#sideLogo").find("img").addClass("logo-background");
    }
    else if ($("#sideLogo").find("img").hasClass("logo-background"))
    {
        $("#sideLogo").hide();
        $("#mainLogo").find("img").addClass("logo-background");
        $("#mainLogo").removeClass("logo-background");
        $("#sideLogo").find("img").removeClass("logo-background");
    }
}

/**
 * Set up favicon.
 */
function setFaviconElement() 
{
    $('#pageIcon').remove();
    var faviconElement = document.createElement("link");
    faviconElement.rel = "shortcut icon";
    faviconElement.type = "image/x-icon";
    faviconElement.id = "pageIcon";
    
    faviconElement.href = appConfiguration.faviconpath;
    var pageTitleNode = document.getElementById("pageTitle");
    pageTitleNode.parentNode.insertBefore(faviconElement, pageTitleNode.nextSibling);
}

/**
 * Set up client's logo (customization logo) and show it if defined.
 */
function setCustomizationLogo() 
{
    if (appConfiguration.customizationlogopath)
    {
        $("#customizationLogo").find(".client-logo").attr("src", appConfiguration.customizationlogopath);
        $("#customizationLogo").show();
    }
    else if ($("#customizationLogo").find(".client-logo").attr("src") !== "./")
    {
        $("#customizationLogo").hide();
    }
}
    
/**
 * Sets the Header title.
 */
function setHeaderTitle() 
{
    if (appConfiguration.title)
    {
        $("#appTitle").find(".app-menu-brand").html(appConfiguration.title);
        $("#appTitlePrint").find("p").html(appConfiguration.title);
    }
    
    $("#appTitle").show();
}

/**
 * Check if we should show the button which opens the feedback form .
 */
function showFeeedbackButton() 
{
    if (appConfiguration.feedback && appConfiguration.feedbackUrlAbsolutePath)
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
        
        $("#feedbackInserted").show();
    }
    else
    {
        $("#feedbackInserted").hide();
    }
}

/**
 * Sets default form level help content. Used when no form element has focus
 */
function setDefaultHelpContent()
{
    $('#divHelp').empty();
    if (appConfiguration.formhelp)
    {
        var vhelpform = '<div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="formHelp"></span></div></div></div>';
        $('#divHelp').append(vhelpform);
        $('#formHelp').html(appConfiguration.formhelp).attr("lang-tran", appConfiguration.formhelp).attr("lang-form", "true").translate();
    }
    
    if (appConfiguration.processimagelink && appConfiguration.processlink)
    {
        var vprocess = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="bussinesplabel"></span></div></div></div><div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><a id="processlink" target="_blank"><img class="help-photo-container" id="processimagelink"></a></div></div></div>';
        $('#divHelp').append(vprocess);
        $('#processimagelink').attr('src', appConfiguration.processimagelink);
        $('#processlink').attr('href', appConfiguration.processlink);
        $('#bussinesplabel').html(appConfiguration.processtext);
        $('#bussinesplabel').attr("lang-tran", appConfiguration.processtext).attr("lang-form", "true").translate();
    }
    
    if (appConfiguration.elearningimagelink && appConfiguration.elearninglink)
    {
        var velearning = '<div id="fieldHelpCardWrapper"><div id="fieldHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><span id="elearninglabel"></span></div></div></div><div id="formHelpCardWrapper"><div id="formHelpCard" class="header-common user-help-card"><div class="header-common user-settings-card-header-label"><a id="elearninglink" target="_blank"><img class="help-photo-container" id="elearningimagelink"></a></div></div></div>';
        $('#divHelp').append(velearning);
        $('#elearningimagelink').attr('src', appConfiguration.elearningimagelink);
        $('#elearninglink').attr('href', appConfiguration.elearninglink);
        $('#elearninglabel').html(appConfiguration.elearningtext);
        $('#elearninglabel').attr("lang-tran", appConfiguration.elearningtext).attr("lang-form", "true").translate();
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
    $('#feedbackBasicFormComment').removeClass('invalid valid');
    $('#validity_message').removeClass('error_show').addClass('error');
}

/**
 * Check validity of required field in Feedback container and show error message if required field is empty.
 */
function checkFeedbackValidity()
{
    var feedbackTextarea = $('#feedbackBasicFormComment');
    var errorElement = $("span", feedbackTextarea.parent());
    if (feedbackTextarea.val()) 
    {
        feedbackTextarea.removeClass('invalid').addClass('valid');
        errorElement.removeClass('error_show').addClass('error');
        
        return true;
    }
    else 
    {
        feedbackTextarea.removeClass('valid').addClass('invalid');
        errorElement.removeClass('error').addClass('error_show');
        
        return false;
    }
}

/**
 *  Make screenshot of body element and placed base64encodedstring in input (img_val)
 */
function capture() 
{
    html2canvas(document.body, 
    {
        allowTaint: false,
        useCORS: true
    }).then(function (canvas) 
    {
        var base64encodedstring = canvas.toDataURL("ïmage/png");
        $('#img_val').attr('value', base64encodedstring).show();
    });    
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
                            
                            $('#bottomMenu').addClass('shrink');
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
        
        $('#bottomMenu').removeClass('shrink');
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
    setPositionOfLanguageMenu();
    $('#languages').show();
}

/**
 * Opens a list of available time zones
 */
function chooseTimeZone()
{
    setPositionOfTimeZoneMenu();
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
        if (appConfiguration.useOutlookSettings && mailboxSettingsAvailable)
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
        else if (appConfiguration.useUserPropertyExtensions && userPropertyExtensionsAvailable)
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
 * Shows the Test card in the settings menu which
 * switches the Test mode on and off
 */
function showTestSettingsCard()
{
    $('#saveTest').click(saveTestSwitch);
    $('#cancelTest').click(cancelTestSwitch);
    $('#collapseTest').click(cancelTestSwitch);
    $('#testCardWrapper').show();
}

/**
 * Shows the Test card in the settings menu which
 * switches the Test mode on and off. Switches
 * the mode on immediately.
 */
function showTestSettingsCardAndSwitchOn()
{
    showTestSettingsCard();
    changeTestSelection();
    applyTestSettingsChanges();
}

/**
 * Shows the warning that the test.js hasn't been loaded
 */
function showTestHelperLoadFailedWarning()
{
    alert('Failed to load Test helper');
}

/**
 * Saves changes from the Test switch on/off menu settings and
 * closes the extended 'Test' settings menu card
 */
function saveTestSwitch(e)
{
    e.stopPropagation();
    applyTestSettingsChanges();
    $('#testCard').closeExtendedCard();
}

/**
 * Cancels changes from the Test switch on/off menu settings and
 * closes the extended 'Test' settings menu card
 */
function cancelTestSwitch(e)
{
    e.stopPropagation();
    resetTestSettings();
    $('#testCard').closeExtendedCard();
}

/**
 * Shows the Debug card in the settings menu which
 * switches the Debug mode on and off
 */
function showDebugSettingsCard()
{
    $('#saveDebug').click(saveDebugSwitch);
    $('#cancelDebug').click(cancelDebugSwitch);
    $('#collapseDebug').click(cancelDebugSwitch);
    $('#debugCardWrapper').show();
}

/**
 * Shows the Debug card in the settings menu which
 * switches the Debug mode on and off. Switches
 * the mode on immediately.
 */
function showDebugSettingsCardAndSwitchOn()
{
    showDebugSettingsCard();
    changeDebugSelection();
    applyDebugSettingsChanges();
}

/**
 * Shows the warning that the debug.js hasn't been loaded
 */
function showDebugHelperLoadFailedWarning()
{
    alert('Failed to load Debug helper');
}

/**
 * Saves changes from the Debug switch on/off menu settings and
 * closes the extended 'Debug' settings menu card
 */
function saveDebugSwitch(e)
{
    e.stopPropagation();
    applyDebugSettingsChanges();
    $('#debugCard').closeExtendedCard();
}

/**
 * Cancels changes from the Debug switch on/off menu settings and
 * closes the extended 'Debug' settings menu card
 */
function cancelDebugSwitch(e)
{
    e.stopPropagation();
    resetDebugSettings();
    $('#debugCard').closeExtendedCard();
}

/**
 * Show feedback dialog
 */
function showFeedbackDialog()
{
    capture();
    setTimeout(function()
    {
        $('#feedbackOverlayBackground').show();
    }, 1);
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
    if (buttonSetText === 'Title Frown')
    {
        $('#feedbacktype').val('dontlike');
    }
    else if (buttonSetText === 'Title Idea')
    {
        $('#feedbacktype').val('suggestion'); 
    }
    else if (buttonSetText === 'Title Smile')
    {
        $('#feedbacktype').val('like');
    }
    
    $('#feedbackLeftFormContainer').addClass('slide-left');
    $('#feedbackMiddleFormContainer').addClass('slide-left');
    $('#feedbackMiddleFormContainer').show();
} 

/**
 * Change layout when toggle menu has been opened (small screens)
 */
function toggleChanged()
{
    TogFormViewer.toggleMenuOpened = !TogFormViewer.toggleMenuOpened;
    if (TogFormViewer.toggleMenuOpened)
    {
        $("#toggleMenuButton").addClass("app-menu-button-right-menu-selected");
        $(".header-wrapper").addClass("toggle-menu-opened");
        $(".content-wrapper").addClass("toggle-menu-opened");
    }
    else
    {
        $("#toggleMenuButton").removeClass("app-menu-button-right-menu-selected");
        $(".header-wrapper").removeClass("toggle-menu-opened");
        $(".content-wrapper").removeClass("toggle-menu-opened");
    }
    
    formioForm.checkConditions();
}

/**
 * Recalculates menu position based on browser inner width, configured menu position and menu position threshold.
 * Top or left menus are changed to bottom menu if browser inner width is less than the threshold.
 */
function recalculateMenuPosition()
{
    if (window.innerWidth <= appConfiguration.menuPositionThreshold && TogFormViewer.getProperty("menuPosition") !== "bottom")
    {
        TogFormViewer.setProperty("menuPosition", "bottom");
    }
    else if (window.innerWidth > appConfiguration.menuPositionThreshold && TogFormViewer.getProperty("menuPosition") === "bottom")
    {
        if (appConfiguration.menuPosition === "left")
        {
            TogFormViewer.setProperty("menuPosition", "left");
        }
        else if (appConfiguration.menuPosition === "top")
        {
            TogFormViewer.setProperty("menuPosition", "top");
        }
    }
}

function printJSON(json,title) {
console.log("JSON name="+title);
for (var p in json) {    
  if (typeof json[p]=='object' && !title) {
    //printJSON(json[p],p);
    console.log(p+'='+json[p]+', t='+(typeof json[p]));
  } else {
    console.log(p+'='+json[p]+', t='+(typeof json[p]));
  }
}
}

function printEvent(component,event,title) {
    if (!component && event && event.changed && event.changed.component) {
        component = event.changed.component;
    }
    console.log(title+' for '+(component ? component.key : 'no component')+': ' +(event ? ('type='+event.type+', details='+JSON.stringify(event.details)+', changed='+event.changed) : "No event"));
    if (event && !event.details && !event.changed) {
        //printJSON(event,'printingevent');
    }
}
