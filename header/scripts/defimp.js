/**
 * Application configuration parameters. This object contains runtime values, no matter where
 * the info come from (parameter / config entry / custom property / hardcoded default / etc.)
 */
var appConfiguration;

/**
 * Holds URL query parameters - can be modified by the server during "Loading" action.
 */
var appURLQueryParameters = {};

/**
 * Holds form's data - initially equal to the URL query parameters, but can be modified by the server during "Loading" action.
 */
var appFormDataObj = {};

/**
 * Used to avoid infinite loop when performing calculations on field change.
 */
var calculationResultSet = false;

/**
 * Default form object if specified form is not found.
 */
var defaultFormObj = {"type":"form","tags":[],"access":[{"roles":["5a05516e35677f0001aeef6f","5a05516e35677f0001aeef70","5a05516e35677f0001aeef71"],"type":"read_all"}],"submissionAccess":[],"owner":"594fd15f7684cc005c2280ae","components":[{"hideLabel":false,"clearOnHide":false,"components":[{"hideLabel":false,"clearOnHide":false,"columns":[{"pull":0,"push":0,"offset":0,"width":6,"components":[{"hideLabel":false,"lockKey":true,"properties":{"formhelp":"This example shows how to add two numbers","fieldhelp":"The first number to add","elearninglink":"https://en.wikipedia.org/wiki/Operation_(mathematics)","elearningimagelink":"http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg","processimagelink":"https://i.stack.imgur.com/MjNuE.gif","processlink":"https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers"},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"number","validate":{"required":false,"min":0,"max":9999,"step":"any","integer":"","multiple":"","custom":""},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"a","label":"Number 1","inputType":"number","tableView":true,"input":true,"labelPosition":"top"}]},{"pull":0,"push":0,"offset":0,"width":6,"components":[{"hideLabel":false,"lockKey":true,"properties":{"elearninglink":"https://en.wikipedia.org/wiki/Operation_(mathematics)","elearningimagelink":"http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg","fieldhelp":"The second number to add","formhelp":"This example shows how to add two numbers","processimagelink":"https://i.stack.imgur.com/MjNuE.gif","processlink":"https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers"},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"number","validate":{"required":false,"min":0,"max":9999,"step":"any","integer":"","multiple":"","custom":""},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"b","label":"Number 2","inputType":"number","tableView":true,"input":true,"labelPosition":"top"}]}],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"columns","key":"columns","tableView":false,"input":false},{"hideLabel":false,"custom":"function addtwonumbers(url,formdata){\n   executeAjaxRequestWithAdalLogic(ADAL.config.clientId,addtwonumbersnoadal,url,formdata);\n}\n\nfunction addtwonumbersnoadal(token,url,formdata) {\n   var settings = {\n     \"crossDomain\": true,     \n     \"url\": url,\n     \"timeout\":30000,\n     \"method\": \"POST\",\n     \"headers\": {\n       \"content-type\": \"application/json\",\n       \"authorization\": \"Bearer \"+token,\n       \"cache-control\": \"no-cache\"\n     },\n     \"data\": JSON.stringify(formdata),\n     \"dataType\": 'json',\n     \"contentType\": 'application/json'                          \n   }\n\n   $.ajax(settings).done(function (data,textStatus,request) {\n      document.getElementById('mymessage').innerHTML='Calculation successfully performed!';\n      //console.log('data='+JSON.stringify(data));\n      //console.log('formdata='+JSON.stringify(formdata));\n      var datamerged = $.extend(formdata.data,data.data);\n      var datamergedstring = JSON.stringify(datamerged);\n      //console.log('datamerged='+datamergedstring);\n      var initjson = JSON.parse('{\"data\":'+datamergedstring+'}');\n      \n      form.submission = initjson;      \n   }).fail(function (err, textStatus, errorThrown) {\n      document.getElementById('mymessage').innerHTML='Failed to calculate two numbers!';\n      console.log(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n      alert(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n   });\n}\n\naddtwonumbers(form.submission.data['API_add_url'],{\"data\":form.submission.data});","input":true,"label":"Add two numbers","tableView":false,"key":"addtwonumbers","size":"md","leftIcon":"","rightIcon":"","block":false,"action":"custom","disableOnInvalid":false,"theme":"primary","type":"button","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"event":"add2numbers","lockKey":true},{"hideLabel":false,"input":true,"tableView":true,"inputType":"number","label":"Result","key":"c","placeholder":"","prefix":"","suffix":"","defaultValue":"","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":"","required":false},"type":"number","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"lockKey":true,"disabled":true,"labelPosition":"top"},{"hideLabel":false,"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"button","theme":"success","disableOnInvalid":false,"action":"submit","block":false,"rightIcon":"","leftIcon":"","size":"md","key":"submit","tableView":false,"label":"Do all the crazy things in green","input":true}],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Complete Test","input":false,"key":"panel"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Encryption","input":false,"key":"panel27"},{"hideLabel":false,"clearOnHide":false,"components":[],"key":"panel24","input":false,"title":"All form.io Controls","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""}},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Current User","input":false,"key":"panel21"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Branding","input":false,"key":"panel20"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Language","input":false,"key":"panel19"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Header Features","input":false,"key":"panel18"},{"hideLabel":false,"clearOnHide":false,"components":[],"key":"panel25","input":false,"title":"CDN Content","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""}},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"CDN Token","input":false,"key":"panel2"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Event Grid","input":false,"key":"panel3"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Service Bus","input":false,"key":"panel23"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Mail","input":false,"key":"panel4"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"PDF","input":false,"key":"panel5"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"SMS","input":false,"key":"panel6"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"WhatsApp","input":false,"key":"panel7"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Slack","input":false,"key":"panel9"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Teams","input":false,"key":"panel10"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Excel Calculation","input":false,"key":"panel8"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"WebBase Cache","input":false,"key":"panel11"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"SQL Server","input":false,"key":"panel12"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Preview","input":false,"key":"panel15"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"DokStore","input":false,"key":"panel14"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"CosmosDB","input":false,"key":"panel13"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Polizze erzeugen","input":false,"key":"panel16"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Schaden erzeugen","input":false,"key":"panel17"},{"hideLabel":false,"clearOnHide":false,"components":[],"key":"panel26","input":false,"title":"Dokument ablegen","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""}},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"In context translation","input":false,"key":"panel22"}],"created":"2017-11-12T12:49:28.153Z","revisions":"","_vid":0,"_id":"5a08435835677f0001af052d","machineName":"nezcjzowfnfwzny:end2end","modified":"2018-02-02T02:51:31.574Z","title":"Formviewer for MS Azure and Office 365","display":"form","name":"end2end","path":"end2end","project":"5a05516e35677f0001aeef6e","properties":{"formtitle":"Tog Formviewer"}};

/**
 * Indicates if form is destroyed (or initially non-existing)
 */
var formDestroyed = true;

/**
 * The response from the server when doing Loading or Event actions. It has the same structure as TogFormViewer.getAppInfo() object.
 */
var appInfoObjFromServer = null;

function resetFormData()
{
    appFormDataObj = {};
}

function resetAppConfiguration()
{
    appConfiguration =
    {
        appDefPath: "../appcnfs/app.json.js",
        formDefPath: "./defs/form.json.js",
        brandDefPath: "",
        customizationDefPath: "",
        headerConfPath: "",
        themes: "",
        userlangs: "",
        timezones: "",
        onlinemode: false,
        display: "form",
        formtitle: "Tog Formviewer",
        formhelp: "",
        processimagelink: "",
        processlink: "",
        processtext: "Click the gear icon below to see the business process...",
        elearningimagelink: "",
        elearninglink: "",
        elearningtext: "Click the learning icon below to visit the e-learning module...",
        mainlogopath: "./ress/png/mainlogo.png",
        sidelogopath: "./ress/png/sidelogo.png",
        faviconpath: "./ress/png/favicon.png",
        bootswatchtheme: "cosmo",
        customizationlogopath: "",
        appLauncher: true,
        mailboxPhoto: false,
        maximizeBrowserWindow: false,
        formWidthPercent: 100,
        environment: true,
        notifications: true,
        settings: true,
        help: true,
        account: true,
        themeSettings: false,
        phraseApp: "false",
        phraseAppProjectId: "",
        phraseAppPrefix: "[[__",
        phraseAppSuffix: "__]]",
        feedback: false,
        feedbackurl: "",
        feedbackUrlAbsolutePath: "",
        home: "",
        useOutlookSettings: false,
        useUserPropertyExtensions: false,
        autocalc: "",
        calcJsPath: "",
        calcJsSetting: "",
        calcConfPath: "",
        calcConfSetting: "",
        calcApiPath: "",
        action: "",
        actionLoading: "",
        actionLoaded: "",
        bingMapsKey: "",
        mapWrapperId: "",
        mapRouteInfoWrapperId: "",
        mapCountryName: "",
        mapZoom: "",
        mapCenterPushpin: true,
        mapCenterPushpinTitle: "",
        mapCenterPushpinSubTitle: "",
        mapCenterPushpinDescription: "",
        mapCenterLatitude: "",
        mapCenterLongitude: "",
        mapShowInfoBox: true,
        mapShowTraffic: "",
        toggleMenu: false,
        triggerResizeChange: false,
        defaultLanguage: "",
        defaultTimeZone: "",
        customScript: ""
    };
    appConfiguration.onlinemode = typeof ADAL!== 'undefined' && ADAL!=null;
}

function initAfterADALSetup()
{
    // do not execute this if the context is an iFrame - this is used for ADAL only logic
    if (isIframe()) {
        return;
    }
    // set query strings into appURLQueryParameters
    appURLQueryParameters = parse_query_string(window.location.search.substring(1));
    // set query strings into appFormDataObj
    appFormDataObj = parse_query_string(window.location.search.substring(1));
    
    beginConfigurationProcess();
}

function beginConfigurationProcess() {
    resetAppConfiguration();
    if (typeof appObj === "undefined" || appObj==null) {
        var appDef = appConfiguration.appDefPath;
    
        var appDefFromServer = checkForResolvedPropertyFromTheServer("appDefPath");
        if (appDefFromServer!=null) {
            appDef = appConfiguration.appDefPath = appDefFromServer;
        } else {
            // Check if we have an URI paramater which specifies
            // a path to the app configuration. If so we'll use it.
            var appRegex = new RegExp("[?&]app(=([^&#]*)|&|#|$)");
            var appDefParam = appRegex.exec(window.location.href);
            if (appDefParam && appDefParam[2])
            {
                var appUriParam = decodeURIComponent(appDefParam[2].replace(/\+/g, " "));
                if (appUriParam === "/")
                {
                    appDef = appConfiguration.appDefPath = "../appcnfs/app.json.js";
                }
                else
                {
                    appDef = appConfiguration.appDefPath = "../appcnfs/" + appUriParam + "/app.json.js";
                }
            }        
        }
        
        loadScript(appDef, checkAppConfig);
    }
    else {
        checkAppConfig();
    }    
}

/**
 * Loads script from specified URL by creating a new script element and appending it to the head part of the html.
 * Runs a callback function when the script gets loaded. Runs the errorHandler function if the script fails to load.
 */
function loadScript(url, callback, errorHandler)
{
    var scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.src = url;
    
    // Bind the event to the callback function.
    // There are several events for cross browser compatibility.
    scriptElement.onreadystatechange = callback;
    scriptElement.onload = callback;
    if (typeof errorHandler === 'undefined')
    {
        scriptElement.onerror = callback;
    }
    else
    {
        scriptElement.onerror = errorHandler;
    }
    
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
}

/**
 * Checks if there is a given URL parameter
 * @param {string} parameterName URL parameter name whose existence should be checked
 */
function checkForUrlParameter(parameterName)
{
    return appURLQueryParameters[parameterName];
}

/**
 * Checks if there is a resolved property from the server
 * @param {string} parameterName  parameter name whose existence should be checked
 */
function checkForResolvedPropertyFromTheServer(parameterName)
{
    var resolvedPropertiesObjFromServer = appInfoObjFromServer!=null ? appInfoObjFromServer.resolvedProperties : null;
    return resolvedPropertiesObjFromServer && resolvedPropertiesObjFromServer.hasOwnProperty(parameterName) && resolvedPropertiesObjFromServer[parameterName]!==null ? resolvedPropertiesObjFromServer[parameterName] : null;
}

/**
 * Checks if app config is already defined. If so loads other definitions.
 * Otherwise looks for the app configuration on another hardcoded location.
 */
function checkAppConfig()
{
    // Check if appObj is defined. If not try with a new hardcoded value
    if (typeof appObj === "undefined")
    {
        appConfiguration.appDefPath = "./defs/app.json.js";
        loadScript(appConfiguration.appDefPath, loadFormDefinition);
    }
    else
    {
        loadFormDefinition();
    }
}

/**
 * Generalized code for handling basic configuration parameters (form, brand, customization and header).
 */
function getURIParamForConfiguration(formAndAppObjPropertyName,paramName,appConfigurationParamName,paramFolderName,paramFileName,updateConfiguration) {
    var paramDef = null;
    
    // Check if we have an URI paramater which specifies
    // a path to the brand definition. If so we'll use it.
    var paramRegex = new RegExp("[?&]"+paramName+"(=([^&#]*)|&|#|$)")
    var paramDefParam = paramRegex.exec(window.location.href);
    
    if (paramDefParam && paramDefParam[2])
    {
        var paramUriParam = decodeURIComponent(paramDefParam[2].replace(/\+/g, " "));
        if (paramUriParam === "/")
        {
            paramDef = "../"+paramFolderName+"/"+paramFileName+".json.js";
        }
        else if ((paramUriParam.startsWith && (paramUriParam.startsWith("http://") || paramUriParam.startsWith("https://")))
            || (paramUriParam.indexOf && (paramUriParam.indexOf("http://") === 0 || paramUriParam.indexOf("https://") === 0)))
        {
            paramDef = paramUriParam;
        }
        
        else
        {
            paramDef = "../"+paramFolderName+"/" + paramUriParam + "/"+paramFileName+".json.js";
        }
    }
    if (paramName!='form' && paramDef==null && typeof formObj !== 'undefined' && formObj != null && formObj.hasOwnProperty("properties"))
    {
        // We have a form defition loaded so we will use it to get paths for other definition files
        // If we have brand definition already defined in query parameter we will use it.
        // Otherwise we use the value from the form definition
        if (formObj.properties[formAndAppObjPropertyName])
        {
            paramDef = formObj.properties[formAndAppObjPropertyName];
        }
    }
    if (paramDef==null && typeof appObj !== 'undefined')
    {
        // We have found app.json.js so we will use it to load other definitions
        // If we have definition already defined in query parameter or in form definition
        // we will use it. Otherwise we use the value from the app.json.js
        if (appObj[formAndAppObjPropertyName])
        {
            paramDef = appObj[formAndAppObjPropertyName];
        }
    }
    
    if (updateConfiguration && paramDef!=null) {
        appConfiguration[appConfigurationParamName] = paramDef;
    }        
    
    return paramDef;
}

/**
 * Loads form definition, then loads brand, customization and header definitions
 * and sets up the app once everything is loaded including the document itself.
 */
function loadFormDefinition()
{
    console.log("Loading form definition");
    if (appInfoObjFromServer!=null && appInfoObjFromServer.formObj!=null) {
        formObj = appInfoObjFromServer.formObj;
    }
    var formDefFromServer = checkForResolvedPropertyFromTheServer("formDefPath");
    if (formDefFromServer!=null) {
        appConfiguration.formDefPath = formDefFromServer;
    }
    if (typeof formObj === "undefined" || formObj==null) {
        var formDef = appConfiguration.formDefPath;
        if (formDefFromServer==null) {
            formDef = appConfiguration.formDefPath;
            // Resolve form parameter, check if we have an URI paramater which specifies
            // a path to the form definition. If so we'll use it. Otherwise, check appObj.
            var formDefTemp = getURIParamForConfiguration("formdefinition","form","formDefPath","forms","form",true);
            if (formDefTemp!=null) {
                formDef = formDefTemp;
            }
        } else {
            formDef = formDefFromServer;
        }
        appConfiguration.formDefPath = formDef;        
        
        loadScript(formDef, formObjLoaded, loadDefaultForm);
    } else {
        formObjLoaded();
    }
}

/**
 * Runs when the form definition has been loaded to perform tasks that should be performed immidiately
 * and then starts to load all other definition files.
 */
function formObjLoaded()
{
    setupFormConfiguration();
    loadConfigurations();
}

/**
 * Sets up form configuration and loads form custom properties
 */
function setupFormConfiguration()
{
    // Set up form display mode
    var formDisplay = checkForResolvedPropertyFromTheServer("display");
    if (!formDisplay) {
        formDisplay = checkForUrlParameter("display");
    }
    if (formDisplay)
    {
        appConfiguration.display = formDisplay;
        formObj["display"] = appConfiguration.display;
    }
    else if (typeof appObj !== 'undefined' && appObj !== null && appObj.hasOwnProperty("display") && appObj["display"])
    {
        appConfiguration.display = appObj["display"];
        formObj["display"] = appConfiguration.display;
    }
    else
    {
        appConfiguration.display = formObj["display"];
    }
    
    // Set up the header title
    var titleUrl = checkForResolvedPropertyFromTheServer("title");
    if (!titleUrl) {
        titleUrl = checkForUrlParameter("title");
    }    
    if (titleUrl)
    {
        appConfiguration.title = titleUrl;
    }
    else if (formObj && formObj.hasOwnProperty("title"))
    {
        appConfiguration.title = formObj["title"];
    }
    
    // Set up form title
    resolveStringOrBooleanParameter(false,"formtitle","formtitle",formObj,null,null,false,appConfiguration.formtitle); 
    
    document.title = appConfiguration.formtitle;
        
    // Set up default form help (can be overridden with component level "formhelp" property)
    resolveStringOrBooleanParameter(false,"formhelp","formhelp",formObj,null,null,false,appConfiguration.formhelp); 
    
    // Set up default process link which user can open when click on the process image in help menu
    // (can be overridden with component level "processimagelink" property)
    resolveStringOrBooleanParameter(false,"processimagelink","processimagelink",formObj,null,null,false,appConfiguration.processimagelink); 
    
    // Set up default process image in help menu (can be overridden with component level "processlink" property)
    resolveStringOrBooleanParameter(false,"processlink","processlink",formObj,null,null,false,appConfiguration.processlink); 
    
    // Set up default e-learning link which user can open when click on the e-learning image in help menu
    // (can be overridden with component level "elearningimagelink" property)
    resolveStringOrBooleanParameter(false,"elearningimagelink","elearningimagelink",formObj,null,null,false,appConfiguration.elearningimagelink); 
    
    // Set up default e-learning image in help menu (can be overridden with component "elearninglink" property)
    resolveStringOrBooleanParameter(false,"elearninglink","elearninglink",formObj,null,null,false,appConfiguration.elearninglink); 
    
    // If the customScript definition path has been specified
    resolveStringOrBooleanParameter(false,"customScript","customScript",formObj,appObj,null,true,appConfiguration.customScript);    
}

/**
 * Loads form definition from the default path
 */
function loadDefaultForm()
{
    var formDef = appConfiguration.formDefPath = "./defs/form.json.js";
    loadScript(formDef, formObjLoaded, setDefaultForm);
}

/**
 * Sets hardcoded default form
 */
function setDefaultForm()
{
    window.formObj = defaultFormObj;
    loadConfigurations();
}

/**
 * Loads brand, customization and header definitions and sets up the app
 * once everything is loaded including the document itself.
 */
function loadConfigurations()
{
    console.log("Loading configurations");
    var brandDef;
    var customizationDef;
    var headerConfig;

    if ((appInfoObjFromServer==null || appInfoObjFromServer.validBrandObj==null) && (typeof brandObj === "undefined" || brandObj==null)) {
        brandDef = checkForResolvedPropertyFromTheServer("brandDefPath");
        if (brandDef!=null) {
            appConfiguration.brandDefPath = brandDef;
        }
        else {
            // Check if we have an URI paramater which specifies
            // a path to the brand definition. If so we'll use it.
            // Otherwise, if we have a form defition loaded so we will use it to get paths for other definition files
            // If not found in form definition, we will search for it in app.json.js
            brandDef = getURIParamForConfiguration("branddefinition","brand","brandDefPath","brands","brand",true);
        }
        if (brandDef)
        {
            loadScript(brandDef, brandObjLoaded, loadDefaultBrand);
        }
        else 
        {
            loadDefaultBrand();
        }
    } 
    else 
    {
        if (appInfoObjFromServer!=null && appInfoObjFromServer.validBrandObj!=null) {
            brandObj = appInfoObjFromServer.validBrandObj;
        }
        brandObjLoaded();
    }
    
    if ((appInfoObjFromServer==null || appInfoObjFromServer.validCustomizationObj==null) && typeof customizationObj === "undefined" || customizationObj==null) {
        customizationDef = checkForResolvedPropertyFromTheServer("customizationDefPath");
        if (customizationDef!=null) {
            appConfiguration.customizationDefPath = customizationDef;
        }
        else {
            // Check if we have an URI paramater which specifies
            // a path to the customization definition. If so we'll use it.
            // Otherwise, if we have a form defition loaded so we will use it to get paths for other definition files
            // If not found in form definition, we will search for it in app.json.js
            customizationDef = getURIParamForConfiguration("customizationdefinition","cstmz","customizationDefPath","cstmz","customization",true);
        }
        if (customizationDef)
        {
            loadScript(customizationDef, customizationObjLoaded, loadDefaultCustomization);
        }
        else
        {
            loadDefaultCustomization();
        }
    }
    else
    {
        if (appInfoObjFromServer!=null && appInfoObjFromServer.validCustomizationObj!=null) {
            customizationObj = appInfoObjFromServer.validCustomizationObj;
        }
        customizationObjLoaded();
    }

    if ((appInfoObjFromServer==null || appInfoObjFromServer.validHeaderObj==null) && typeof headerObj === "undefined" || headerObj==null) {
        headerConfig = checkForResolvedPropertyFromTheServer("headerConfPath");
        if (headerConfig!=null) {
            appConfiguration.headerConfPath = headerConfig;
        }
        else {
            // Check if we have an URI paramater which specifies
            // a path to the header definition. If so we'll use it.
            // Otherwise, if we have a form defition loaded so we will use it to get paths for other definition files
            // If not found in form definition, we will search for it in app.json.js
            headerConfig = getURIParamForConfiguration("headerconfiguration","hdrcnf","headerConfPath","hdrcnfs","header",true);
        }
        if (headerConfig)
        {
            loadScript(headerConfig, headerObjLoaded, loadDefaultHeader);
        }
        else
        {
            loadDefaultHeader();
        }
    }
    else 
    {
        if (appInfoObjFromServer!=null && appInfoObjFromServer.validHeaderObj!=null) {
            headerObj = appInfoObjFromServer.validHeaderObj;
        }
        headerObjLoaded();
    }
}

/**
 * Runs when the brand definition has been loaded. Parses the loaded brand object
 * and calculates final brand configurations.
 */
function brandObjLoaded()
{
    setupBrandConfiguration();
    console.log("CFAS brand");
    checkForAppSetup();
}

/**
 * Sets up brand configuration
 */
function setupBrandConfiguration()
{
    // Set up main logo
    resolveStringOrBooleanParameter(false,"mainlogopath","mainlogopath",formObj,brandObj,null,true,appConfiguration.mainlogopath); 
    
    // Set up side logo
    resolveStringOrBooleanParameter(false,"sidelogopath","sidelogopath",formObj,brandObj,null,true,appConfiguration.sidelogopath); 
    
    // Set up favicon
    resolveStringOrBooleanParameter(false,"faviconpath","faviconpath",formObj,typeof customizationObj !== 'undefined' ? customizationObj : null,brandObj,true,appConfiguration.faviconpath); 
    
    // Set up Bootswatch theme
    resolveStringOrBooleanParameter(false,"bootswatchtheme","bootswatchtheme",formObj,brandObj,null,true,appConfiguration.bootswatchtheme);
}

/**
 * Loads brand definition from the default path
 */
function loadDefaultBrand()
{
    var brandDef = appConfiguration.brandDefPath = "./defs/brand.json.js";
    loadScript(brandDef, brandObjLoaded, checkForAppSetup);
}

/**
 * Runs when the customization definition has been loaded. Parses the loaded
 * customization object and calculates final customization configurations.
 */
function customizationObjLoaded()
{
    setupCustomizationConfiguration();
    console.log("CFAS cust");
    checkForAppSetup();
}

/**
 * Sets up customization configuration
 */
function setupCustomizationConfiguration()
{
    // Check set up of favicon
    resolveStringOrBooleanParameter(false,"faviconpath","faviconpath",formObj,customizationObj,null,true,appConfiguration.faviconpath); 
    
    // Set up client's logo (customization logo)
    resolveStringOrBooleanParameter(false,"customizationlogopath","customizationlogopath",formObj,customizationObj,null,true,appConfiguration.customizationlogopath); 
}

/**
 * Loads customization definition from the default path
 */
function loadDefaultCustomization()
{
    var customizationDef = appConfiguration.customizationDefPath = "./defs/customization.json.js";
    loadScript(customizationDef, customizationObjLoaded, checkForAppSetup);
}

/**
 * Runs when the header configuration has been loaded. Parses the loaded header object
 * and calculates final header configurations.
 */
function headerObjLoaded()
{
    setupHeaderConfiguration();
    console.log("CFAS hdr");
    checkForAppSetup();
}

/**
 * Sets up header configuration
 */
function setupHeaderConfiguration()
{
    // Check if we should enable the app launcher button
    resolveStringOrBooleanParameter(true,"app launcher","appLauncher",formObj,headerObj,null,true,appConfiguration.appLauncher); 
    
    // Check if we should maximize the browser window (IE only)
    resolveStringOrBooleanParameter(true,"maximize","maximizeBrowserWindow",formObj,headerObj,null,true,appConfiguration.maximizeBrowserWindow); 

    // Check if we should use mailbox photo
    resolveStringOrBooleanParameter(true,"mailbox photo","mailboxPhoto",formObj,headerObj,null,true,appConfiguration.mailboxPhoto); 
    
    // Set up the form width percent
    var formWidthPercentUrlOrFromServer = checkForResolvedPropertyFromTheServer("formWidthPercent");
    
    if (formWidthPercentUrlOrFromServer==null) {
        formWidthPercentUrlOrFromServer = checkForUrlParameter("form width percent");
    }
    if (formWidthPercentUrlOrFromServer)
    {
        if (!isNaN(formWidthPercentUrlOrFromServer) && 0.1 < formWidthPercentUrlOrFromServer && formWidthPercentUrlOrFromServer <= 100)
        {
            appConfiguration.formWidthPercent = formWidthPercentUrlOrFromServer;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("form width percent"))
    {
        if (!isNaN(formObj.properties["form width percent"]) && 0.1 < formObj.properties["form width percent"] && formObj.properties["form width percent"] <= 100)
        {
            appConfiguration.formWidthPercent = formObj.properties["form width percent"];
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("form width percent") && !isNaN(headerObj["form width percent"])
        && 0.1 < headerObj["form width percent"] && headerObj["form width percent"] <= 100)
    {
        appConfiguration.formWidthPercent = headerObj["form width percent"];
    }
    
    // Check if we should show environments
    resolveStringOrBooleanParameter(true,"environment","environment",formObj,headerObj,null,true,appConfiguration.environment); 
    
    // Check if we should show notifications menu
    resolveStringOrBooleanParameter(true,"notifications","notifications",formObj,headerObj,null,true,appConfiguration.notifications); 
    
    // Check if we should show settings menu
    resolveStringOrBooleanParameter(true,"settings","settings",formObj,headerObj,null,true,appConfiguration.settings); 
    
    // Check if we should show help menu
    resolveStringOrBooleanParameter(true,"help","help",formObj,headerObj,null,true,appConfiguration.help); 
    
    // Check if we should show the account menu
    resolveStringOrBooleanParameter(true,"account","account",formObj,headerObj,null,true,appConfiguration.account); 
    
    // Check if we should show theme selection option in the settings menu
    resolveStringOrBooleanParameter(true,"theme settings","themeSettings",formObj,headerObj,null,true,appConfiguration.themeSettings); 

    // If the themes definition path has been specified
    resolveStringOrBooleanParameter(false,"themes","themes",formObj,headerObj,null,true,appConfiguration.themes); 
	
    // If the userlangs definition path has been specified
    resolveStringOrBooleanParameter(false,"userlangs","userlangs",formObj,headerObj,null,true,appConfiguration.userlangs);
    
    // Set up Default Language
    resolveStringOrBooleanParameter(false,"defaultLanguage","defaultLanguage",formObj,headerObj,null,true,appConfiguration.defaultLanguage);  
    
    // If the timezones definition path has been specified
    resolveStringOrBooleanParameter(false,"timezones","timezones",formObj,headerObj,null,true,appConfiguration.timezones);
    
    // Set up Default Time Zone
    resolveStringOrBooleanParameter(false,"defaultTimeZone","defaultTimeZone",formObj,headerObj,null,true,appConfiguration.defaultTimeZone); 
     
    // Check if we should show the PhraseApp settings
    var hasPhraseAppSettings = false;
    var phraseAppSettingsOn = false;
    var hasPhraseAppSettingsFromServer = checkForResolvedPropertyFromTheServer("phraseApp");
    var hasPhraseAppSettingsUrl = checkForUrlParameter("phraseapp");
    if (hasPhraseAppSettingsFromServer === "false" || hasPhraseAppSettingsFromServer === "true" || hasPhraseAppSettingsFromServer === "on" || hasPhraseAppSettingsFromServer === "off")
    {
        appConfiguration.phraseApp = hasPhraseAppSettingsFromServer;
    }
    else if (hasPhraseAppSettingsUrl === "false" || hasPhraseAppSettingsUrl === "true" || hasPhraseAppSettingsUrl === "on" || hasPhraseAppSettingsUrl === "off")
    {
        appConfiguration.phraseApp = hasPhraseAppSettingsUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("phraseapp"))
    {
        appConfiguration.phraseApp = formObj.properties["phraseapp"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("phraseapp")
        && (headerObj["phraseapp"] === true || headerObj["phraseapp"] === "true" || headerObj["phraseapp"] === "on" || headerObj["phraseapp"] === "off"))
    {
        appConfiguration.phraseApp = headerObj["phraseapp"];
    }

    // setup phrase app project id
    resolveStringOrBooleanParameter(false,"phraseapp project id","phraseAppProjectId",formObj,headerObj,null,true,appConfiguration.phraseAppProjectId); 

    // setup phrase app prefix
    resolveStringOrBooleanParameter(false,"phraseapp prefix","phraseAppPrefix",formObj,headerObj,null,true,appConfiguration.phraseAppPrefix); 

    // setup phrase app suffix
    resolveStringOrBooleanParameter(false,"phraseapp suffix","phraseAppSuffix",formObj,headerObj,null,true,appConfiguration.phraseAppSuffix); 
    
    // Check if we should show the button which opens the feedback form
    resolveStringOrBooleanParameter(true,"feedback","feedback",formObj,headerObj,null,true,appConfiguration.feedback); 
    
    // Make sure that we have a home parameter and if there is an additional parameter(relativepath) create complete feedback url
    resolveStringOrBooleanParameter(false,"Appl-Home","home",null,null,null,true,appConfiguration.home); 
    resolveStringOrBooleanParameter(false,"feedbackurl","feedbackurl",formObj,headerObj,null,true,appConfiguration.feedbackurl); 

    var feedbackUrlAbsolutePath = checkForResolvedPropertyFromTheServer("feedbackUrlAbsolutePath");
    if (feedbackUrlAbsolutePath!=null) 
    {
        appConfiguration.feedbackUrlAbsolutePath = feedbackUrlAbsolutePath;
    } 
    else 
    {
        if (appConfiguration.home && appConfiguration.feedbackurl) 
        {
            appConfiguration.feedbackUrlAbsolutePath = appConfiguration.home + "/" + appConfiguration.feedbackurl; 
        }
        else if (appConfiguration.home && !appConfiguration.feedbackurl)
        {
            appConfiguration.feedbackUrlAbsolutePath = appConfiguration.home + "/Feedback";
        }    
    }

    // Check if we should use outlook mailbox settings for language and time zone
    resolveStringOrBooleanParameter(true,"use outlook settings","useOutlookSettings",formObj,headerObj,null,true,appConfiguration.useOutlookSettings); 
    
    // Check if we should use user property extensions for theme (and language and time zone if not stored in the mailbox)
    resolveStringOrBooleanParameter(true,"use user property extensions","useUserPropertyExtensions",formObj,headerObj,null,true,appConfiguration.useUserPropertyExtensions); 
    
    // Set up process text in help menu
    resolveStringOrBooleanParameter(false,"processtext","processtext",formObj,headerObj,null,true,appConfiguration.processtext); 
    
    // Set up e-learning text in help menu
    resolveStringOrBooleanParameter(false,"elearningtext","elearningtext",formObj,headerObj,null,true,appConfiguration.elearningtext); 
    
    // Set up property which specifies if we perform auto calculation modes.
    // Possible values are an empty string (default), "fieldchange" and "focuschange"
    resolveStringOrBooleanParameter(false,"autocalc","autocalc",formObj,headerObj,null,true,appConfiguration.autocalc); 
    
    // Set up path or URL to calculation file
    resolveStringOrBooleanParameter(false,"calc_js_path","calcJsPath",formObj,headerObj,null,true,appConfiguration.calcJsPath); 
    
    // Set up calculation setting name
    resolveStringOrBooleanParameter(false,"calc_js_setting","calcJsSetting",formObj,headerObj,null,true,appConfiguration.calcJsSetting); 
    
    // Set up calculation configuration
    resolveStringOrBooleanParameter(false,"calc_conf_path","calcConfPath",formObj,headerObj,null,true,appConfiguration.calcConfPath); 
    
    // Set up calculation configuration setting name
    resolveStringOrBooleanParameter(false,"calc_conf_setting","calcConfSetting",formObj,headerObj,null,true,appConfiguration.calcConfSetting); 
    
    // Set up calculation API path
    resolveStringOrBooleanParameter(false,"calc_api_path","calcApiPath",formObj,headerObj,null,true,appConfiguration.calcApiPath); 

    // setup action
    resolveStringOrBooleanParameter(false,"action","action",null,formObj,headerObj,false,appConfiguration.action); 

    // setup loading action
    resolveStringOrBooleanParameter(false,"action loading","actionLoading",formObj,headerObj,null,true,appConfiguration.actionLoading); 
    
    // setup loaded action
    resolveStringOrBooleanParameter(false,"action loaded","actionLoaded",formObj,headerObj,null,true,appConfiguration.actionLoaded); 

    // Set up Bing Maps key https://msdn.microsoft.com/en-us/library/ff428642.aspx
    resolveStringOrBooleanParameter(false,"bing maps key","bingMapsKey",formObj,headerObj,null,true,appConfiguration.bingMapsKey); 
    
    // Set up map wrapper ID which is the ID of an HTML element where we put a map
    resolveStringOrBooleanParameter(false,"map wrapper id","mapWrapperId",formObj,headerObj,null,true,appConfiguration.mapWrapperId);
    
    // Set up map route information wrapper ID which is the ID of an HTML element where we put a route information from the map
    resolveStringOrBooleanParameter(false,"map route info wrapper id","mapRouteInfoWrapperId",formObj,headerObj,null,true,appConfiguration.mapRouteInfoWrapperId);
    
    // Set up map country name used to specify starting map area
    resolveStringOrBooleanParameter(false,"map country name","mapCountryName",formObj,headerObj,null,true,appConfiguration.mapCountryName); 
    
    // Set up map zoom level
    resolveStringOrBooleanParameter(false,"map zoom","mapZoom",formObj,headerObj,null,true,appConfiguration.mapZoom); 
    
    // Set up if we show a pushpin on the map center
    resolveStringOrBooleanParameter(true, "map center pushpin","mapCenterPushpin",formObj,headerObj,null,true,appConfiguration.mapCenterPushpin);
    
    // Set up center map pushpin title
    resolveStringOrBooleanParameter(false, "map center pushpin title","mapCenterPushpinTitle",formObj,headerObj,null,true,appConfiguration.mapCenterPushpinTitle);
    
    // Set up center map pushpin subtitle
    resolveStringOrBooleanParameter(false, "map center pushpin subtitle","mapCenterPushpinSubTitle",formObj,headerObj,null,true,appConfiguration.mapCenterPushpinSubTitle);
    
    // Set up center map pushpin description
    resolveStringOrBooleanParameter(false, "map center pushpin description","mapCenterPushpinDescription",formObj,headerObj,null,true,appConfiguration.mapCenterPushpinDescription);
    
    // Set up map center latitude
    var mapCenterLatitudeUrlOrFromServer = checkForResolvedPropertyFromTheServer("mapCenterLatitude");    
    if (mapCenterLatitudeUrlOrFromServer==null) {
        mapCenterLatitudeUrlOrFromServer = checkForUrlParameter("map center latitude");
    }
    if (mapCenterLatitudeUrlOrFromServer)
    {
        if (!isNaN(mapCenterLatitudeUrlOrFromServer))
        {
            appConfiguration.mapCenterLatitude = mapCenterLatitudeUrlOrFromServer;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties")
        && formObj.properties !== null && formObj.properties.hasOwnProperty("map center latitude"))
    {
        if (!isNaN(formObj.properties["map center latitude"]))
        {
            appConfiguration.mapCenterLatitude = formObj.properties["map center latitude"];
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("map center latitude") && headerObj["map center latitude"])
    {
        if (!isNaN(headerObj["map center latitude"]))
        {
            appConfiguration.mapCenterLatitude = headerObj["map center latitude"];
        }
    }
    
    // Set up map center longitude
    var mapCenterLongitudeUrlOrFromServer = checkForResolvedPropertyFromTheServer("mapCenterLongitude");
    if (mapCenterLongitudeUrlOrFromServer==null) {
        mapCenterLongitudeUrlOrFromServer = checkForUrlParameter("map center longitude");
    }
    if (mapCenterLongitudeUrlOrFromServer)
    {
        if (!isNaN(mapCenterLongitudeUrlOrFromServer))
        {
            appConfiguration.mapCenterLongitude = mapCenterLongitudeUrlOrFromServer;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties")
        && formObj.properties !== null && formObj.properties.hasOwnProperty("map center longitude"))
    {
        if (!isNaN(formObj.properties["map center longitude"]))
        {
            appConfiguration.mapCenterLongitude = formObj.properties["map center longitude"];
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("map center longitude") && headerObj["map center longitude"])
    {
        if (!isNaN(headerObj["map center longitude"]))
        {
            appConfiguration.mapCenterLongitude = headerObj["map center longitude"];
        }
    }
    
    // Set up if we show an info box when pushpin is clicked
    resolveStringOrBooleanParameter(true, "map show info box","mapShowInfoBox",formObj,headerObj,null,true,appConfiguration.mapShowInfoBox);
    
    // Set up if we show traffic on the map
    // Possible values are an empty string (default), "pushpinclick" and "fromstart"
    resolveStringOrBooleanParameter(false,"map show traffic","mapShowTraffic",formObj,headerObj,null,true,appConfiguration.mapShowTraffic); 
    
    // Check if we should show toggle menu
    resolveStringOrBooleanParameter(true,"toggle menu","toggleMenu",formObj,headerObj,null,true,appConfiguration.toggleMenu); 
    
    // Check if we should trigger form change when the window gets resized
    resolveStringOrBooleanParameter(true,"triggerResizeChange","triggerResizeChange",formObj,headerObj,null,true,appConfiguration.triggerResizeChange); 
}

/**
 * Resolves boolean or string parameter (depending on the 1st isBoolean method parameter) by first checking query parameters (if  checkUrlParameter method parameter is true),
 * and then, if not found, checking firstObj, secondObj and thirdObj JSON object's sequentially (if they exist) for the paramName attribute. If parameter value is not found anywhere, 
 * the value of defaultValue method parameter is set to the appConfiguration attribute with the name specified by appConfigurationParamName. 
 */
function resolveStringOrBooleanParameter(isBoolean,paramName,appConfigurationParamName,firstObj,secondObj,thirdObj,checkUrlParameter,defaultValue) 
{
    var paramVal = defaultValue;
    var paramValFromRPO = checkForResolvedPropertyFromTheServer(appConfigurationParamName);
    
    var paramValFromUrl = checkUrlParameter ? checkForUrlParameter(paramName) : "";
    var boolValCorrect = !isBoolean || paramValFromUrl === "false" || paramValFromUrl === "true";
    
    if (paramValFromRPO!=null)
    {
        paramVal = paramValFromRPO;
    }
    else if (paramValFromUrl && boolValCorrect)
    {
        if (isBoolean) {
            paramVal =  (paramValFromUrl === "true");
        } else {
            paramVal = paramValFromUrl;
        }
    }
    else if (typeof firstObj !== 'undefined' && firstObj !== null && firstObj.hasOwnProperty("properties") && firstObj.properties !== null && firstObj.properties.hasOwnProperty(paramName))
    {
        paramVal = firstObj.properties[paramName];
    }
    else if (typeof secondObj !== 'undefined' && secondObj !== null && secondObj.hasOwnProperty(paramName))
    {
        paramVal  = secondObj[paramName];
    }
    else if (typeof thirdObj !== 'undefined' && thirdObj !== null && thirdObj.hasOwnProperty(paramName))
    {
        paramVal  = thirdObj[paramName];
    }
    appConfiguration[appConfigurationParamName] = paramVal;
    
//    var msg = 'rsobp[isb='+isBoolean+',pn='+paramName+',acpn='+appConfigurationParamName+',fo='+firstObj+',so='+secondObj+',cup='+checkUrlParameter+',dv='+defaultValue+']';
//    console.log(msg);
//    console.log('r='+paramVal);

}

/**
 * Loads header configuration from the default path
 */
function loadDefaultHeader()
{
    var headerDef = appConfiguration.headerConfPath = "./defs/header.json.js";
    loadScript(headerDef, headerObjLoaded, checkForAppSetup);
}

/**
 * Resets loaded themes
 */
function resetThemes()
{
    loadScript(appConfiguration.themes, themesReloaded, resetStyleAndTheme);
}

/**
 * Callback executed when themes.json.js has been reloaded
 */
function themesReloaded()
{
    setThemesConfiguration();
    resetStyleAndTheme();
}

/**
 * Resets page style and themes settings after a new form and properties has been loaded
 */
function resetStyleAndTheme()
{
    // Reset theme menu and page style because it is possible that
    // they are reconfigured with the new form properties
    resetThemeMenu();
    resetStyle();
    
    // Theme is overridden if we use theme stored on Azure
    // In this case we need to keep the theme unchanged
    if (themeSelector.overridden)
    {
        setupTheme(themeSelector.currentTheme);
    }
    else
    {
        setupStyle(false);
    }
}

/**
 * Callback executed when themes.json.js has been loaded
 */
function themesLoaded() {
    
    setThemesConfiguration();
    
    // Check if anything else should be loaded
    console.log("CFAS thms");
    checkForAppSetup();
}

/**
 * Sets up themes configuration
 */
function setThemesConfiguration()
{
    // Update the themesMap
    themesMap = themesObj;
}

/**
 * Callback executed when themes.json.js can't be loaded
 */
function loadDefaultThemes()
{
    // We haven't found themes.json.js so we will use the hardcoded themes list
    // defined in the themesMap global variable. We still need to define the
    // themesObj as a global variable because we check if it is defined in the
    // checkForAppSetup function when we want to know if the themes are initialized
    window.themesObj = themesMap;
    
    // Check if anything else should be loaded
    checkForAppSetup();
}

/**
 * Callback executed when userlangs.json.js has been loaded
 */
function languagesLoaded() 
{
    
    setLanguagesConfiguration();
    
    // Check if anything else should be loaded
    console.log("CFAS lang");
    checkForAppSetup();
}

/**
 * Sets up languages configuration
 */
function setLanguagesConfiguration()
{
    // Update the languagesMap and appConfiguration to override the hardcoded values
    languagesMap = userLangsObj;
}

/**
 * Callback executed when userlangs.json.js can't be loaded
 */
function loadDefaultLanguages()
{
    // We haven't found userlangs.json.js so we will use the hardcoded languages list
    // defined in the languagesMap global variable. We still need to define the
    // userLangsObj as a global variable because we check if it is defined in the
    // checkForAppSetup function when we want to know if the languages are initialized
    window.userLangsObj = languagesMap;
    
    // Check if anything else should be loaded
    checkForAppSetup();
}

/**
 * Flag which indicates that customScript has been loaded
 */
var customScriptLoadedFlag = false;

/**
 * Callback executed when customScript has been loaded
 */
function customScriptLoaded() 
{
    
    customScriptLoadedFlag = true;
    
    // Check if anything else should be loaded
    console.log("CFAS cust script");
    checkForAppSetup();
}

/**
 * Flag which indicates if the themes definition (themes.json.js) loading has been started
 */
var themeLoadStarted = false;

/**
 * Flag which indicates if the lenguages definition (userlangs.json.js) loading has been started
 */
var languageLoadStarted = false;

/**
 * Flag which indicates if the time zones definition (timezones.json.js) loading has been started
 */
var timeZonesLoadStarted = false;

/**
 * Flag which indicates if the customScript definition loading has been started
 */
var customScriptLoadStarted = false;

/**
 * Checks if all definition files has been loaded.
 * If so adds the app setup function as listener for the window load event
 * or runs the app setup if the window load event is already fired.
 */
function checkForAppSetup()
{
    console.log("Checking for app setup");
    // Check if the themes.json.js should be loaded
    if (!themeLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        if (appInfoObjFromServer!=null && appInfoObjFromServer.themesObj!=null) {
            themesObj = appInfoObjFromServer.themesObj;
            setThemesConfiguration();
        } else {
            if (appConfiguration.themes)
            {
                loadScript(appConfiguration.themes, themesLoaded, loadDefaultThemes);
            }            
        }
        themeLoadStarted = true;
    }
	
	// Check if the userlangs.json.js should be loaded
    if (!languageLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        if (appInfoObjFromServer!=null && appInfoObjFromServer.userLangsObj!=null) {
            userLangsObj = appInfoObjFromServer.userLangsObj;
            setLanguagesConfiguration();
        } else {
            if (appConfiguration.userlangs)
            {
                loadScript(appConfiguration.userlangs, languagesLoaded, loadDefaultLanguages);
            }
        }        
        languageLoadStarted = true;
    }
    
    // Check if the timezones.json.js should be loaded
    if (!timeZonesLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        if (appInfoObjFromServer!=null && appInfoObjFromServer.timeZonesArr!=null) {
            timeZonesArr = appInfoObjFromServer.timeZonesArr;
        } else {
            if (appConfiguration.timezones)
            {                
                loadScript(appConfiguration.timezones, function() {console.log("CFAS tzn");checkForAppSetup();});
            }
        }        
        timeZonesLoadStarted = true;
    }
console.log('csls='+customScriptLoadStarted+', csloadedflag='+customScriptLoadedFlag);
    // Check if the file, which path is specified at customScript parameter, should be loaded
    if (!customScriptLoadStarted && typeof appObj !== 'undefined' && appObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        if (appConfiguration.customScript)
        {
            loadScript(appConfiguration.customScript, customScriptLoaded);
        }        
        customScriptLoadStarted = true;
    }
        
    if (typeof headerObj !== 'undefined' && headerObj!=null && typeof customizationObj !== 'undefined' && customizationObj!=null && typeof brandObj !== 'undefined' && brandObj!=null && typeof formObj !== 'undefined' && formObj!=null 
        && (typeof themesObj !== 'undefined' && themesObj!=null || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["themes"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["themes"]))))
		&& (typeof userLangsObj !== 'undefined' && userLangsObj!=null || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["userlangs"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["userlangs"]))))
        && (typeof timeZonesArr !== 'undefined' && timeZonesArr!=null || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["timezones"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["timezones"]))))
        && (customScriptLoadedFlag || (typeof appObj !== 'undefined' && appObj != null && !(appObj["customScript"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["customScript"])))))
    {        
        if (document.readyState === 'complete')
        {
            checkForLoadingCallback();
        }
        else
        {
            if(window.addEventListener)
            {
                window.addEventListener('load', checkForLoadingCallback);
            }
            else
            {
                window.attachEvent('onload', checkForLoadingCallback);
            }
        }
    }
}

/**
 * Checks the configuration to find out if we should perform an optional API call before we load the form.
 * If so performs the call and waits for a response. When the response is received uses returned data to
 * set up the APP. Otherwise just sets up the APP.
 */
function checkForLoadingCallback()
{
    console.log('cflc, ah='+appConfiguration.home+', AC='+JSON.stringify(appConfiguration));
    if (!appConfiguration.home)
    {
        // We don't have the base URL for the API call so we don't perform a call
        appInfoObjFromServer = null;
        if (typeof formioForm !== 'undefined') {
            formioForm.destroy();
            formDestroyed = true;
        }        
        setupApp();
        return;
    }

    
    var formChanged = appInfoObjFromServer!=null && appInfoObjFromServer.formChanged!=null && appInfoObjFromServer.formChanged;
    var callbackCount = appInfoObjFromServer!=null && appInfoObjFromServer.callbackCount!=null ? appInfoObjFromServer.callbackCount+1 : 1;
    // appInfoObjFromServer.callbackCount is set only inside handleServerResponseForLoadingAndOtherActions function
    var doLoadingCallback = appConfiguration.actionLoading && (appInfoObjFromServer==null || appInfoObjFromServer.callbackCount==null || callbackCount<4 && formChanged);
    
    console.log("DLC="+doLoadingCallback+', fc='+formChanged+', cc='+callbackCount+', aiofs='+appInfoObjFromServer+', aiofscbc='+(appInfoObjFromServer!=null ? appInfoObjFromServer.callbackCount : null));
    formChanged = formChanged || callbackCount>1;
    // We found home URL and it is a base address for our call
    // Now we need to find a relative path    
    if (doLoadingCallback)
    {
        // Replace placeholders in relative path with available settings
        var loadAct = handlePlaceholders(appConfiguration.actionLoading);
        
        var url = appConfiguration.home + "/" + loadAct;

        performLoadingCallback(url,callbackCount);
    }
    else
    {
        appInfoObjFromServer = null;
        console.log('fd='+formDestroyed+', fc='+formChanged);
        if (!formDestroyed && !formChanged) {
            console.log('setting only submission');
            formioForm.submission = {"data":appFormDataObj};
            hideSpinner();
        } else {            
            if (typeof formioForm !== 'undefined') {
                console.log('destroying form from cflc');
                formioForm.destroy();
                formDestroyed = true;
            }
            console.log('setting app');
            setupApp();
        }
    }
}

function handlePlaceholders(placeholderStr) {
    // Replace placeholders in placeholderStr with available settings
    var placeholders = {"formname":formObj.name,"formversion":(formObj.hasOwnProperty("properties") && formObj.properties!=null ? formObj.properties["formversion"] : null)};
    for (let key in placeholders) {
        placeholderStr = placeholderStr.replace(/({([^}]+)})/g, function(i) {
            let key = i.replace(/{/, '').replace(/}/, '');
            if (!placeholders[key]) {
                return i;
            }

            return placeholders[key];
        });
    }
    return placeholderStr;
}

/**
 * Calls loading callback and set up the APP
 */
function performLoadingCallback(url,cnt)
{
    var payload = {"appInfo" : TogFormViewer.getAppInfo()};
    console.log('executing loading action for url '+url+', attempt number '+cnt);
    // TODO: Perform loading API call with the given callback
    if (typeof ADAL!== 'undefined' && ADAL) {
        executeAjaxRequestWithAdalLogic(ADAL.config.clientId, executeAjaxRequest, url, payload, {"callbackCount":cnt},onsuccess_loading,onfailure_loading);
    } else {
        //alert("It is not possible to perform loading because user is not logged-in!");
        console.log("It is not possible to perform loading because user is not logged-in!");
        setupApp();
    }    
}

/**
 * This function is executed on successful call to Loading API. If form definition changed, it will call again Loading API...but Loading API can be called max 3 times.
 */
function onsuccess_loading(token,url,formdata,additionalConfiguration,data,textStatus,request) {
    var msgPart = "loading operation for url '"+url+"', attempt number "+additionalConfiguration.callbackCount;
    console.log("Successfully executed "+msgPart+".");
    additionalConfiguration.isLoading = true;
    handleServerResponseForLoadingAndOtherActions(url,additionalConfiguration,data);
}

function handleServerResponseForLoadingAndOtherActions(url,additionalConfiguration,data) {   
   appInfoObjFromServer = data.appInfo;
   //appInfoObjFromServer = {};
   //appInfoObjFromServer.resolvedProperties = JSON.parse(JSON.stringify(appConfiguration));
   if (appInfoObjFromServer!=null) {
       //appInfoObjFromServer.formObj.title = "FT "+Math.floor((Math.random()*1000)+1);
       var resolvedPropertiesObjFromServer = appInfoObjFromServer.resolvedProperties;
       if (resolvedPropertiesObjFromServer==null) {
           resolvedPropertiesObjFromServer = {};
       }
       // if server decided that the user should go offline, set ADAL to null
       if (resolvedPropertiesObjFromServer.onlinemode!=null && !resolvedPropertiesObjFromServer.onlinemode) {
          ADAL = null;
       }
       appInfoObjFromServer.callbackCount = additionalConfiguration!=null && additionalConfiguration.callbackCount!=null ? additionalConfiguration.callbackCount : 1;
       
       //console.log('DATA received ='+JSON.stringify(data));
       console.log('oldform='+appConfiguration.formDefPath);
       console.log('newform='+resolvedPropertiesObjFromServer.formDefPath);
       var appDefChanged = resolvedPropertiesObjFromServer.appDefPath!=null && appConfiguration.appDefPath!=resolvedPropertiesObjFromServer.appDefPath;
       console.log('adch='+appDefChanged);
       var formChanged = appInfoObjFromServer.formObj!=null && JSON.stringify(formObj)!==JSON.stringify(appInfoObjFromServer.formObj);
       formChanged = formChanged || resolvedPropertiesObjFromServer.formDefPath!=null && appConfiguration.formDefPath!=resolvedPropertiesObjFromServer.formDefPath;
       console.log('fch='+formChanged);
       var brandChanged = resolvedPropertiesObjFromServer.brandDefPath!=null && appConfiguration.brandDefPath!=resolvedPropertiesObjFromServer.brandDefPath;
       console.log('bch='+brandChanged);
       var customizationChanged = resolvedPropertiesObjFromServer.customizationDefPath!=null && appConfiguration.customizationDefPath!=resolvedPropertiesObjFromServer.customizationDefPath;
       console.log('cch='+customizationChanged);
       var headerChanged = resolvedPropertiesObjFromServer.headerConfPath!=null && appConfiguration.headerConfPath!=resolvedPropertiesObjFromServer.headerConfPath;
       console.log('hch='+headerChanged);
       var themesChanged = resolvedPropertiesObjFromServer.themes!=null && appConfiguration.themes!=resolvedPropertiesObjFromServer.themes || appInfoObjFromServer.themesObj!=null && JSON.stringify(themesObj)!==JSON.stringify(appInfoObjFromServer.themesObj);       
       console.log('thc='+themesChanged);
       var userLangsChanged = resolvedPropertiesObjFromServer.userlangs!=null && appConfiguration.userlangs!=resolvedPropertiesObjFromServer.userlangs || appInfoObjFromServer.userLangsObj!=null && JSON.stringify(userLangsObj)!==JSON.stringify(appInfoObjFromServer.userLangsObj);
       console.log('ulc='+userLangsChanged);
       var timeZonesChanged = resolvedPropertiesObjFromServer.timezones!=null && appConfiguration.timezones!=resolvedPropertiesObjFromServer.timezones || appInfoObjFromServer.timeZonesArr!=null && JSON.stringify(timeZonesArr)!==JSON.stringify(appInfoObjFromServer.timeZonesArr);
       console.log('tzch='+timeZonesChanged);
       var customScriptChanged = resolvedPropertiesObjFromServer.customScript!=null && appConfiguration.customScript!=resolvedPropertiesObjFromServer.customScript;
       console.log('csch='+customScriptChanged);
              
       appInfoObjFromServer.formChanged = formChanged;
       
       appFormDataObj = appInfoObjFromServer.dataObj == null ? appFormDataObj : appInfoObjFromServer.dataObj;
       //console.log('form DATA merged ='+JSON.stringify(appFormDataObj));
       //console.log('configuration DATA merged ='+JSON.stringify(appConfiguration));
       
       appInfoObjFromServer.validBrandObj = brandObj;
       appInfoObjFromServer.validCustomizationObj = customizationObj;
       appInfoObjFromServer.validHeaderObj = headerObj;
       brandObj = null;
       customizationObj = null;
       headerObj = null;
       if (appDefChanged) {
          appObj = null;
          headerObj = null;
          appInfoObjFromServer.validHeaderObj = null;
          customizationObj = null;
          appInfoObjFromServer.validCustomizationObj = null;
          brandObj = null;
          appInfoObjFromServer.validBrandObj = null;
          formDestroyed = true;
          formObj = null;
          themesObj = null;
          userLangsObj = null;
          timeZonesArr = null;
          themeLoadStarted = false;
          languageLoadStarted = false;
          timeZonesLoadStarted = false;
          customScriptLoadStarted = false;
          customScriptLoadedFlag = false;
       }
       if (formChanged) {
          formDestroyed = true;
          formObj = null;
          headerObj = null;
          appInfoObjFromServer.validHeaderObj = null;
          customizationObj = null;
          appInfoObjFromServer.validCustomizationObj = null;
          brandObj = null;
          appInfoObjFromServer.validBrandObj = null;
          themesObj = null;
          userLangsObj = null;
          timeZonesArr = null;
          themeLoadStarted = false;
          languageLoadStarted = false;
          timeZonesLoadStarted = false;
          customScriptLoadStarted = false;
          customScriptLoadedFlag = false;
       }
       if (brandChanged) {
          brandObj = null;
          appInfoObjFromServer.validBrandObj = null;
       }
       if (customizationChanged) {
          customizationObj = null;
          appInfoObjFromServer.validCustomizationObj = null;
       }
       if (headerChanged) {
          headerObj = null;
          appInfoObjFromServer.validHeaderObj = null;
          themesObj = null;
          userLangsObj = null;
          timeZonesArr = null;
          themeLoadStarted = false;
          languageLoadStarted = false;
          timeZonesLoadStarted = false;
       }
       if (themesChanged) {
          themesObj = null;
          themeLoadStarted = false;
       }
       if (userLangsChanged) {
          userLangsObj = null;
          languageLoadStarted = false;
       }
       if (timeZonesChanged) {
          timeZonesArr = null;
          timeZonesLoadStarted = false;
       }
       if (customScriptChanged) {
          customScriptLoadStarted = false;
          customScriptLoaded = false;
       }
       
       beginConfigurationProcess();
   } else {
       appInfoObjFromServer = null;
       console.log('fd='+formDestroyed);
       if (!formDestroyed) {
           console.log('setting only submission');
           formioForm.submission = {"data":appFormDataObj};
           hideSpinner();
       } else {            
           setupApp();
       }
   }
}

function onfailure_loading(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown) {
   onfailure_generic(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown);
   setupApp();
}

/**
 * Updates form definition and optionally populates it with the data
 */
function updateFormDefinition(formPath,data)
{
    // First show the spinner
    showSpinner();
    
    var absolutePath = formPath;
    if (!(formPath.startsWith && (formPath.startsWith("http://") || formPath.startsWith("https://")))
        && !(formPath.indexOf && (formPath.indexOf("http://") === 0 || formPath.indexOf("https://") === 0)))
    {
        absolutePath = appConfiguration.formDefPath = "../forms/" + formPath + "/form.json.js";
    }

    // here we  set appFormDataObj to the provided JSON data if exists...the form will be initially populated with that data 
    if (data) {
        console.log('sd to '+data);
        appFormDataObj = data;
    } else {
        console.log('reset data because, data='+data);
        resetFormData();
    }
    
    // This is a hack - using the same logic as when we are getting updated appInfo from server
    appInfoObjFromServer = {
        "resolvedProperties" : {
            "formDefPath" : absolutePath
        }
    };

    formDestroyed = true;
    formObj = null;
    headerObj = null;
    customizationObj = null;
    brandObj = null;
    themesObj = null;
    userLangsObj = null;
    timeZonesArr = null;
    themeLoadStarted = false;
    languageLoadStarted = false;
    timeZonesLoadStarted = false;    
    customScriptLoadStarted = false;
    customScriptLoadedFlag = false;

    beginConfigurationProcess();
}

/**
 * Updating the form definition when we change display property.
 */
function reloadFormDefinition()
{
    console.log('rfd called');
    showSpinner();
    window.formSubmissionData = formioForm.submission;
    
    // Update the form
    formioForm.destroy();
    formDestroyed = true;
    setupAppForUpdatedForm();
}

/**
 * Initializing the form when we change display property.
 */
function setupAppForUpdatedForm() 
{
    console.log('setupAppForUpdatedForm');
    generateForm(showFormWithUnchagedData);
}

function hideSpinner() {
    $('.header-border').show();
    $('.content-wrapper').show();
    $('.overlay').hide();
}

function showSpinner() {
    $('.header-border').hide();
    $('.content-wrapper').hide();
    $('.overlay').show();
}

var TogFormViewer =
{
    jumpWidth : 767,
    toggleMenuOpened: false,
    
    FormioPlugIn:
    {
        setProperty: function(propName, propValue)
        {
            if (_checkPropertyValue(propName, propValue, "form", "string"))
            {
                updateFormDefinition(propValue);
            }
            else if (propName === "display" && propValue !== appConfiguration.display && (propValue === "form" || propValue === "wizard")) 
            {
                console.log('setting display to '+propValue);
                appConfiguration.display = propValue;
                formObj["display"] = appConfiguration.display;
                reloadFormDefinition();
            }
            else if (_checkPropertyValue(propName, propValue, "formWidthPercent", "number")) 
            {
                appConfiguration.formWidthPercent = propValue;
                $('.body-content').width(propValue);
            }
            else if(_checkPropertyValue(propName, propValue, "formhelp", "string"))
            {
                appConfiguration.formhelp = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "formtitle", "string"))
            {
                appConfiguration.formtitle = propValue;
                document.title = appConfiguration.formtitle;
            }
            else if(_checkPropertyValue(propName, propValue, "processtext", "string"))
            {
                appConfiguration.processtext = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "processlink", "string"))
            {
                appConfiguration.processlink = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "processimagelink", "string"))
            {
                appConfiguration.processimagelink = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "elearningtext", "string"))
            {
                appConfiguration.elearningtext = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "elearninglink", "string"))
            {
                appConfiguration.elearninglink = propValue;
            }
            else if(_checkPropertyValue(propName, propValue, "elearningimagelink", "string"))
            {
                appConfiguration.elearningimagelink = propValue;
            }
        },
        
        getProperty: function(propName)
        {
            // Defines the window width (window.innerWidth) when the mobile layout gets triggered
            // (columns are placed one bellow the other instead of one next to the other). Hardcoded
            // in Bootstrap
            if (propName === "jumpWidth")
            {
                return this.jumpWidth;
            }
        }
    },
    
    setProperty: function(propName, propValue)
    {
        if (_checkPropertyValue(propName, propValue, "appLauncher", "boolean")) 
        {
            appConfiguration.appLauncher = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "environment", "boolean")) 
        {
            appConfiguration.environment = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "notifications", "boolean")) 
        {
            appConfiguration.notifications = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "settings", "boolean")) 
        {
            appConfiguration.settings = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "help", "boolean")) 
        {
            appConfiguration.help = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "account", "boolean")) 
        {
            appConfiguration.account = propValue;
            setHeaderElements();
        }
        else if (_checkPropertyValue(propName, propValue, "bingMapsKey", "string"))
        {
            appConfiguration.bingMapsKey = propValue;
            MapPlugIn.updateMap();
        }
        else if (_checkPropertyValue(propName, propValue, "maximizeBrowserWindow", "boolean")) 
        {
            appConfiguration.maximizeBrowserWindow = propValue;
            setMaximizeBrowserWindow();
        }
        else if (_checkPropertyValue(propName, propValue, "themeSettings", "boolean")) 
        {
            appConfiguration.themeSettings = propValue;
            showThemeSettings();
        }
        else if (_checkPropertyValue(propName, propValue, "phraseApp", "boolean")) 
        {
            appConfiguration.phraseApp = propValue;
            showPhraseApp();
        }
        else if (_checkPropertyValue(propName, propValue, "phraseAppProjectId", "string")) 
        {
            appConfiguration.phraseAppProjectId = propValue;
            reloadPhraseApp();
        }
        else if (_checkPropertyValue(propName, propValue, "phraseAppPrefix", "string")) 
        {
            appConfiguration.phraseAppPrefix = propValue;
            reloadPhraseApp();
        }
        else if (_checkPropertyValue(propName, propValue, "phraseAppSuffix", "string")) 
        {
            appConfiguration.phraseAppSuffix = propValue;
            reloadPhraseApp();
        }
        else if (_checkPropertyValue(propName, propValue, "feedback", "boolean")) 
        {
            appConfiguration.feedback = propValue;
            showFeeedbackButton();
        }
        else if (_checkPropertyValue(propName, propValue, "feedbackurl", "string")) 
        {
            appConfiguration.feedbackurl = propValue;
        }
        else if (_checkPropertyValue(propName, propValue, "feedbackUrlAbsolutePath", "string")) 
        {
            appConfiguration.feedbackUrlAbsolutePath = propValue;
        }
        else if (_checkPropertyValue(propName, propValue, "home", "string")) 
        {
            appConfiguration.home = propValue;
        }
        else if (_checkPropertyValue(propName, propValue, "mainlogopath", "string")) 
        {
            appConfiguration.mainlogopath = propValue;
            $("#mainLogo").find("img").attr("src", appConfiguration.mainlogopath);
        }
        else if (_checkPropertyValue(propName, propValue, "sidelogopath", "string")) 
        {
            appConfiguration.sidelogopath = propValue;
            setSideLogoPath();
        }
        else if (_checkPropertyValue(propName, propValue, "faviconpath", "string")) 
        {
            appConfiguration.faviconpath = propValue;
            setFaviconElement();
        }
        else if (_checkPropertyValue(propName, propValue, "customizationlogopath", "string")) 
        {
            appConfiguration.customizationlogopath = propValue;
            setCustomizationLogo();
        }
        else if (_checkPropertyValue(propName, propValue, "bootswatchtheme", "string")) 
        {
            if (themesMap.hasOwnProperty(propValue))
            {
                appConfiguration.bootswatchtheme = propValue;
                updateBootswatchthemeTheme(propValue);
            }
        }
        else if (_checkPropertyValue(propName, propValue, "themesObj", "object")) 
        {
            checkExistenceOfCurrentTheme(propValue);
            themesObj = propValue;
            setThemesConfiguration();
            resetThemeMenu();
            setupThemeMenu();                       
        }
        // TODO Add check for mapWrapperId and mapRouteInfoWrapperId
        else if (_checkPropertyValue(propName, propValue, "mapCountryName", "string"))
        {
            appConfiguration.mapCountryName = propValue;
            MapPlugIn.updateMap();
        }
        else if (propName === "mapZoom" && propValue != appConfiguration.mapZoom && propValue && !isNaN(propValue))
        {
            appConfiguration.mapZoom = propValue;
            MapPlugIn.updateMap();
        }
        else if (_checkPropertyValue(propName, propValue, "mapCenterPushpin", "boolean"))
        {
            appConfiguration.mapCenterPushpin = propValue;
            MapPlugIn.updateMap();
        }
        else if (_checkPropertyValue(propName, propValue, "mapCenterPushpinTitle", "string"))
        {
            appConfiguration.mapCenterPushpinTitle = propValue;
            MapPlugIn.updateMap();
        }
        else if (_checkPropertyValue(propName, propValue, "mapCenterPushpinSubTitle", "string"))
        {
            appConfiguration.mapCenterPushpinSubTitle = propValue;
            MapPlugIn.updateMap();
        }
        else if (_checkPropertyValue(propName, propValue, "mapCenterPushpinDescription", "string"))
        {
            appConfiguration.mapCenterPushpinDescription = propValue;
            MapPlugIn.updateMap();
        }
    },

    getAppInfo: function()
    {
        var appInfo = {
            "plugin" : {
                "name" : "form.io"
            },
            "browserInfo" : {
                "navigator.appName" : navigator.appName,
                "navigator.appVersion" : navigator.appVersion,
                "navigator.userAgent" : navigator.userAgent,
                "navigator.language" : navigator.language,
                "navigator.platform" : navigator.platform,
                "navigator.product" : navigator.product,
                "navigator.appCodeName" : navigator.appCodeName,
                "navigator.cookieEnabled" : navigator.cookieEnabled
            },
            "deviceInfo" : {
            },
            "currentUser" : currentUser,
            "runtimeProperties" : {
                "tenantId" : (typeof ADAL=== 'undefined' || ADAL==null ? "" : ADAL.config.tenant),
                "appRegAppId" : (typeof ADAL=== 'undefined' || ADAL==null ? "" : ADAL.config.clientId),
                "jumpWidth" : this.jumpWidth,
                "toggleMenuOpened" : this.toggleMenuOpened,
                "browserInfo" : {
                    "width" : $(window).width(),
                    "height" : $(window).height()
                }
            },            
            "appObj" : appObj,
            "headerObj" : headerObj,
            "customizationObj" : customizationObj,
            "brandObj" : brandObj,
            "queries" : appURLQueryParameters,
            "userLangsObj" : userLangsObj,
            "timeZonesArr" : timeZonesArr,
            "themesObj" : themesObj,
            "formObj" : formObj,
            "dataObj" : typeof window.formioForm !== 'undefined' && window.formioForm!=null ? formioForm.submission.data : appFormDataObj,
            "resolvedProperties" : appConfiguration,
        };
        return appInfo;
    },
    
    loadForm: function(formPath, data)
    {
        updateFormDefinition(formPath,data);
    },
    
    sendReceiveFormData: function(operation)
    {
       if (!operation)
       {
            operation = "Submit";
        }
        _sendReceiveOrHandOver(operation,true);
    },

    handOverFormData: function(operation)
    {
        if (!operation)
        {
            operation = "Submit";
        }
        _sendReceiveOrHandOver(operation,false);
    },
    
    calculate: function(calcPath)
    {
        if (arguments.length == 1)
        {
            _calculate(calcPath);
        }
        else
        {
            performCalculation();
        }
    },
   
    openFile: function(filePath,target)
    {
        if (!target) {
            target = "_blank";
        }
        window.open(filePath,target);
    },
    
    downloadFile: function(filePath,filename)
    {
        downloadURI(filePath,filename);
    },
    
    loadData: function(filePath)
    {
        _loadData(filePath);
    },

    showData: function(target)
    {
        if (!target) {
            target = "_blank";
        }
        var showDataWindow = window.open("",target);
        var data2show = JSON.stringify(formioForm.submission.data, null, 2);
        _showData(showDataWindow,data2show,"Form submission data - JSON");
    },
    
    showDataXML: function(target,xslPrePathOrURL)
    {
        if (!target) {
            target = "_blank";
        }
        var showDataWindow = window.open("",target);
        var xmlDoc = _convertJSON2XML("data", null, formioForm.submission.data, null, null);
        if (xslPrePathOrURL) {
            doXSLTAndShowData(xmlDoc,xslPrePathOrURL,showDataWindow);
        } else {
            _showData(showDataWindow,formatXml(new XMLSerializer().serializeToString(xmlDoc)),"Form submission data - XML (plain)");
        }
    }/*,
    
    executeCustomAction: function(url)
    {
        appFormDataObj = form.submission.data;
        performEventAction(url);
    }*/
       
}

function _showData(showDataWindow,data2show,title) {    
    showDataWindow.document.open();
    showDataWindow.document.write('<html><body><h1><u>'+title+'</u></h1><pre>' + jQuery('<div/>').text(data2show).html() + '</pre></body></html>');
    showDataWindow.document.close(); 
    showDataWindow.focus();
}

function formatXml(xml) {
    var formatted = '';
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    var pad = 0;
    jQuery.each(xml.split('\r\n'), function(index, node) {
        var indent = 0;
        if (node.match( /.+<\/\w[^>]*>$/ )) {
            indent = 0;
        } else if (node.match( /^<\/\w/ )) {
            if (pad != 0) {
                pad -= 1;
            }
        } else if (node.match( /^<\w([^>]*[^\/])?>.*$/ )) {
            indent = 1;
        } else {
            indent = 0;
        }

        var padding = '';
        for (var i = 0; i < pad; i++) {
            padding += '  ';
        }

        formatted += padding + node + '\r\n';
        pad += indent;
    });

    return formatted;
}

function doXSLTAndShowData(xmlDoc,xsltPathOrUrl,showDataWindow)
{
   var script = getScript(xsltPathOrUrl);
   if (script) {
      script.parentNode.removeChild(script);
   }
   loadScript(xsltPathOrUrl,function(){xsltLoadOK(xmlDoc,xsltPathOrUrl,showDataWindow);},function(){xsltLoadFailed(xsltPathOrUrl,showDataWindow);});   

}

function parseXmlStringForTransformation(xml) {
    try {
        var doc = new ActiveXObject('Msxml2.DOMDocument.6.0');
        doc.loadXML(xml);
        return doc;
    }
    catch (e) {
        var doc = new DOMParser().parseFromString(xml, 'application/xml');
        return doc;
    }
}
  
function xsltLoadOK(xmlDoc,xsltPathOrUrl,showDataWindow) {
    try {
        var xsltDoc = parseXmlStringForTransformation(xsltObj);
        var resultXml = null;
        if (window.ActiveXObject!=null || "ActiveXObject" in window) {
            xmlDoc = parseXmlStringForTransformation(new XMLSerializer().serializeToString(xmlDoc));        
            resultXml = xmlDoc.transformNode(xsltDoc);
        } else {
            var xsltProcessor = new XSLTProcessor();
            xsltProcessor.importStylesheet(xsltDoc);
            var resultDoc = xsltProcessor.transformToDocument(xmlDoc);
            resultXml = new XMLSerializer().serializeToString(resultDoc);
        }
        _showData(showDataWindow,formatXml(resultXml),"Form submission data - XML (with (pre)transformation '"+xsltPathOrUrl+"')");
   } catch (err) {
      showDataWindow.close();
      var msg = "Error occurred when doing xsl transformation "+xsltPathOrUrl+"!";
      msg+="\n\nError name: "+err.name;
      msg+="\n\nError message: "+err.message;
      msg+=(err.stack!=null ? "\n\nError stack: "+err.stack : "");
      msg+="\n\nForm data: "+(formioForm.submission.data!=null ? JSON.stringify(formioForm.submission.data) : null);
      
      console.log(msg);
      alert(msg);
   }
}

function xsltLoadFailed(xsltPathOrUrl,showDataWindow) {
   showDataWindow.close();
   var msg = "Error occurred when loading xslt '"+xsltPathOrUrl+"'!";   
   console.log(msg);
   alert(msg);
}

function isArray(what) {
    return Object.prototype.toString.call(what) === '[object Array]';
}

// Converts JSON to so called plain XML. The XML schema corresponds to the schema used by our Azure functions.
function _convertJSON2XML(joname,nameattr,json,parentXML,doc){
    var el;
    if (!doc) {
        doc = $.parseXML("<"+joname+"/>");
        parentXML = doc.getElementsByTagName(joname)[0];
        el = parentXML;
    } else {
        el = doc.createElement(joname);
        parentXML.appendChild(el);
    }
    if (nameattr) {
        $(el).attr("name",nameattr);
    }
    var jt = typeof(json);
    if (jt === 'object') {
        if (isArray(json)) {
            var aind, alen;
            for (aind=0, alen=json.length; aind<alen; ++aind) {
                var jsonarrel = json[aind];
                var jtarr = typeof(jsonarrel);
                if (jtarr === 'object') {
                    _convertJSON2XML((isArray(jsonarrel) ? "array" : "complexobject"),nameattr,jsonarrel,el,doc);
                } else {
                    var memberElement = doc.createElement("member");
                    $(memberElement).attr("value",jsonarrel);
                    el.appendChild(memberElement);                    
                }                
            }
        } else {
            var key;
            for (key in json) {
                if (json.hasOwnProperty(key)) {
                    var jsonel = json[key];
                    var jet = typeof(jsonel);
                    if (jet === 'object') {
                        _convertJSON2XML((isArray(jsonel) ? "array" : "complexobject"),key,jsonel,el,doc);
                    } else {
                        var propertyElement = doc.createElement("property");
                        $(propertyElement).attr("name",key);
                        $(propertyElement).attr("value",jsonel);
                        el.appendChild(propertyElement);
                    }
                }
            }
        }
    }
    
    return doc;
}

function _checkPropertyValue(propertyName, propertyValue, parameterName, parameterType)
{
    return propertyName === parameterName && propertyValue != appConfiguration[parameterName] && typeof propertyValue === parameterType;
}

// It is expected that the file referenced by path (json.js file) contains JS variable called dataObj
// This variable is JSON containing the data to be loaded into the form. 
// E.g. the file content could look like: var dataObj = {"n1":33,"n2":44,"str1":"mystr","bln1":true};
function _loadData(filePath){
   var script = getScript(filePath);
   if (script) {
      script.parentNode.removeChild(script);
   }
   loadScript(filePath,function(){mockupDataOK(filePath);},function(){mockupDataFailed(filePath);});   
}

function mockupDataOK(mockupPath) {
   try {
      var datamerged = $.extend(formioForm.submission.data,dataObj);
      console.log('MERGED WITH MOCK-UP DATA='+JSON.stringify(datamerged));   
      formioForm.submission={"data":datamerged};
   } catch (err) {
      var msg = "Error occurred when loading mock-up data "+mockupPath+"!";
      msg+="\n\nError name: "+err.name;
      msg+="\n\nError message: "+err.message;
      msg+=(err.stack!=null ? "\n\nError stack: "+err.stack : "");
      msg+="\n\nForm data: "+(formioForm.submission.data!=null ? JSON.stringify(formioForm.submission.data) : null);
      
      console.log(msg);
      alert(msg);
   }
}

function mockupDataFailed(mockupPath) {
   var msg = "Error occurred when loading mock-up data "+mockupPath+"!";   
   console.log(msg);
   alert(msg);
}

// NOTE: it works properly on Chrome and Opera. Other browsers are opening files if the extension is known
function downloadURI(uri, name) 
{
    if (!name) {
        name = "myfile";
    }
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    //link.target="_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Performs calculation as specified in APP configuration.
 * It can be executed either in the browser or by performing
 * an ajax call to an APIs 
 */
function performCalculation()
{
    if (appConfiguration.calcJsPath && appConfiguration.calcApiPath)
    {
        if (ADAL)
        {
            _performCalculationRemotely();
        }
        else
        {
            _performCalculationLocally();
        }
    }
    else if (!appConfiguration.calcJsPath && appConfiguration.calcApiPath && ADAL)
    {
        _performCalculationRemotely();
    }
    else if (appConfiguration.calcJsPath && !appConfiguration.calcApiPath)
    {
        _performCalculationLocally();
    }
}

function _performCalculationRemotely()
{
    var payload = {"data": formioForm.submission.data};
    if (appConfiguration.calcJsPath)
    {
        payload["calculation"] = appConfiguration.calcJsPath;
    }
    
    if (appConfiguration.calcJsSetting)
    {
        payload["calculation_SettingName"] = appConfiguration.calcJsSetting;
    }
    
    if (appConfiguration.calcConfPath)
    {
        payload["Configuration"] = appConfiguration.calcConfPath;
    }
    
    if (appConfiguration.calcConfSetting)
    {
        payload["Configuration_SettingName"] = appConfiguration.calcConfSetting;
    }
    
    executeAjaxRequestWithAdalLogic(ADAL.config.clientId, executeAjaxRequest, appConfiguration.calcApiPath, payload, {},onsuccess_calc,onfailure_generic);
}

function _performCalculationLocally()
{
    if (getScript(appConfiguration.calcJsPath))
    {
        applyCalculation();
    }
    else
    {
        _calculate(appConfiguration.calcJsPath);
    }
}

function _calculate(calcPath) {
   var script = getScript(calcPath);
   if (script) {
      script.parentNode.removeChild(script);
   }
   loadScript(calcPath,function(){calcScriptOK(calcPath);},function(){calcScriptFailed(calcPath);});
}

function getScript(url) {
    if (!url) return null;
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length; i--;) {
        if (scripts[i].src == url) return scripts[i];
    }
    return null;
}

function calcScriptOK(calcPath) {
   try {
      applyCalculation();
   } catch (err) {
      var msg = "Error occurred when executing calculation "+calcPath+"!";
      msg+="\n\nError name: "+err.name;
      msg+="\n\nError message: "+err.message;
      msg+=(err.stack!=null ? "\n\nError stack: "+err.stack : "");
      msg+="\n\nForm data: "+(formioForm.submission.data!=null ? JSON.stringify(formioForm.submission.data) : null);
      
      console.log(msg);
      alert(msg);
   }
}

function applyCalculation()
{
    var initdata = calc.calculate(formioForm.submission.data);
    var jsond = JSON.parse(initdata);
    var datamerged = $.extend(formioForm.submission.data,jsond);
    console.log('MERGED WITH CALCULATION DATA='+JSON.stringify(datamerged));
    calculationResultSet = true;
    formioForm.submission={"data":datamerged};
}

function calcScriptFailed(calcPath) {
   var msg = "Error occurred when loading calculation "+calcPath+"!";   
   console.log(msg);
   alert(msg);
}

function handleADALError() {
}

function _sendReceiveOrHandOver(operation,isSendReceive) {
   var additionalCfg = {"isSendReceive" : isSendReceive,"operation":operation};
   var url = appConfiguration.home+'/'+operation;
   var data = {"data":formioForm.submission.data};
   if (appConfiguration.home && appConfiguration.home!='') {
      if (typeof ADAL!== 'undefined' && ADAL) {
         executeAjaxRequestWithAdalLogic(ADAL.config.clientId,executeAjaxRequest,url,data,additionalCfg,onsuccess_sendReceiveOrHandover,onfailure_generic,handleADALError);
      } else {
         executeAjaxRequest(null,url,data,additionalCfg,onsuccess_sendReceiveOrHandover,onfailure_generic,handleADALError);
      } 
   } else {
      alert("It is not possible to perform operation '"+operation+"' since base URL for the API call is not specified!");
   }
   
}

function onsuccess_calc(token,url,formdata,additionalConfiguration,data,textStatus,request) {
   console.log("Successfully executed calculation");
   var datamerged = $.extend(formioForm.submission.data,data.calcResult);
   console.log('MERGED DATA for calculation='+JSON.stringify(datamerged));
   calculationResultSet = true;
   formioForm.submission={"data":datamerged};
}

function onsuccess_sendReceiveOrHandover(token,url,formdata,additionalConfiguration,data,textStatus,request) {
   var msgPart = ((additionalConfiguration && additionalConfiguration.isSendReceive) ? "sendReceiveFormData" : "handOverFormData")+" operation '"+additionalConfiguration.operation+"' against base API '"+appConfiguration.home+"'";
   console.log("Successfully executed "+msgPart+".");
   if (additionalConfiguration && additionalConfiguration.isSendReceive) {
      var datamerged = $.extend(formioForm.submission.data,data.data);
      console.log('MERGED DATA for sendreceive='+JSON.stringify(datamerged));   
      formioForm.submission={"data":datamerged};
   }
}

function onfailure_generic(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown) {
   var msg = "Error occurred when executing request against url "+url+"!";
   msg+="\n\nError type: "+textStatus;
   msg+="\nError status: "+err.status + (err.statusText && err.statusText!='' ? " - "+err.statusText : "");
   msg+="\n\nForm data: "+(formdata!=null ? JSON.stringify(formdata) : null);
   msg+=(err.responseText!=null || err.responseXML!=null) ? ("\n\nResponse: "+(err.responseText!=null ? err.responseText : err.responseXML)) : "";

   console.log(msg);
   alert(msg);
}

function executeAjaxRequest(token,url,formdata,additionalConfiguration,onsuccess,onfailure) {
   var settings = {
     "crossDomain": true,     
     "url": url,
     "timeout":30000,
     "method": "POST",
     "headers": {
       "content-type": "application/json",
       "cache-control": "no-cache"
     },
     "data": JSON.stringify(formdata),
     "dataType": 'json',
     "contentType": 'application/json'                          
   };
   if (token) {   
      settings.headers.authorization = "Bearer "+token;
   }

   $.ajax(settings).done(function (data,textStatus,request) {
      onsuccess(token,url,formdata,additionalConfiguration,data,textStatus,request);
   }).fail(function (err, textStatus, errorThrown) {
      onfailure(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown);
   });
}
