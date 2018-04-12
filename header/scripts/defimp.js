/**
 * Application configuration parameters. This object contains runtime values, no matter where
 * the info come from (parameter / config entry / custom property / hardcoded default / etc.)
 */
var appConfiguration;

/**
 * Used to avoid infinite loop when performing calculations on field change.
 */
var calculationResultSet = false;

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
        formObj: {"type":"form","tags":[],"access":[{"roles":["5a05516e35677f0001aeef6f","5a05516e35677f0001aeef70","5a05516e35677f0001aeef71"],"type":"read_all"}],"submissionAccess":[],"owner":"594fd15f7684cc005c2280ae","components":[{"hideLabel":false,"clearOnHide":false,"components":[{"hideLabel":false,"clearOnHide":false,"columns":[{"pull":0,"push":0,"offset":0,"width":6,"components":[{"hideLabel":false,"lockKey":true,"properties":{"formhelp":"This example shows how to add two numbers","fieldhelp":"The first number to add","elearninglink":"https://en.wikipedia.org/wiki/Operation_(mathematics)","elearningimagelink":"http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg","processimagelink":"https://i.stack.imgur.com/MjNuE.gif","processlink":"https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers"},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"number","validate":{"required":false,"min":0,"max":9999,"step":"any","integer":"","multiple":"","custom":""},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"a","label":"Number 1","inputType":"number","tableView":true,"input":true,"labelPosition":"top"}]},{"pull":0,"push":0,"offset":0,"width":6,"components":[{"hideLabel":false,"lockKey":true,"properties":{"elearninglink":"https://en.wikipedia.org/wiki/Operation_(mathematics)","elearningimagelink":"http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg","fieldhelp":"The second number to add","formhelp":"This example shows how to add two numbers","processimagelink":"https://i.stack.imgur.com/MjNuE.gif","processlink":"https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers"},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"number","validate":{"required":false,"min":0,"max":9999,"step":"any","integer":"","multiple":"","custom":""},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"b","label":"Number 2","inputType":"number","tableView":true,"input":true,"labelPosition":"top"}]}],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"columns","key":"columns","tableView":false,"input":false},{"hideLabel":false,"custom":"function addtwonumbers(url,formdata){\n   executeAjaxRequestWithAdalLogic(ADAL.config.clientId,addtwonumbersnoadal,url,formdata);\n}\n\nfunction addtwonumbersnoadal(token,url,formdata) {\n   var settings = {\n     \"crossDomain\": true,     \n     \"url\": url,\n     \"timeout\":30000,\n     \"method\": \"POST\",\n     \"headers\": {\n       \"content-type\": \"application/json\",\n       \"authorization\": \"Bearer \"+token,\n       \"cache-control\": \"no-cache\"\n     },\n     \"data\": JSON.stringify(formdata),\n     \"dataType\": 'json',\n     \"contentType\": 'application/json'                          \n   }\n\n   $.ajax(settings).done(function (data,textStatus,request) {\n      document.getElementById('mymessage').innerHTML='Calculation successfully performed!';\n      //console.log('data='+JSON.stringify(data));\n      //console.log('formdata='+JSON.stringify(formdata));\n      var datamerged = $.extend(formdata.data,data.data);\n      var datamergedstring = JSON.stringify(datamerged);\n      //console.log('datamerged='+datamergedstring);\n      var initjson = JSON.parse('{\"data\":'+datamergedstring+'}');\n      \n      form.submission = initjson;      \n   }).fail(function (err, textStatus, errorThrown) {\n      document.getElementById('mymessage').innerHTML='Failed to calculate two numbers!';\n      console.log(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n      alert(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n   });\n}\n\naddtwonumbers(form.submission.data['API_add_url'],{\"data\":form.submission.data});","input":true,"label":"Add two numbers","tableView":false,"key":"addtwonumbers","size":"md","leftIcon":"","rightIcon":"","block":false,"action":"custom","disableOnInvalid":false,"theme":"primary","type":"button","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"event":"add2numbers","lockKey":true},{"hideLabel":false,"input":true,"tableView":true,"inputType":"number","label":"Result","key":"c","placeholder":"","prefix":"","suffix":"","defaultValue":"","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":"","required":false},"type":"number","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"lockKey":true,"disabled":true,"labelPosition":"top"},{"hideLabel":false,"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"button","theme":"success","disableOnInvalid":false,"action":"submit","block":false,"rightIcon":"","leftIcon":"","size":"md","key":"submit","tableView":false,"label":"Do all the crazy things in green","input":true}],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Complete Test","input":false,"key":"panel"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Encryption","input":false,"key":"panel27"},{"hideLabel":false,"clearOnHide":false,"components":[],"key":"panel24","input":false,"title":"All form.io Controls","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""}},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Current User","input":false,"key":"panel21"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Branding","input":false,"key":"panel20"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Language","input":false,"key":"panel19"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Header Features","input":false,"key":"panel18"},{"hideLabel":false,"clearOnHide":false,"components":[],"key":"panel25","input":false,"title":"CDN Content","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""}},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"CDN Token","input":false,"key":"panel2"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Event Grid","input":false,"key":"panel3"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Service Bus","input":false,"key":"panel23"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Mail","input":false,"key":"panel4"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"PDF","input":false,"key":"panel5"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"SMS","input":false,"key":"panel6"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"WhatsApp","input":false,"key":"panel7"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Slack","input":false,"key":"panel9"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Teams","input":false,"key":"panel10"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Excel Calculation","input":false,"key":"panel8"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"WebBase Cache","input":false,"key":"panel11"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"SQL Server","input":false,"key":"panel12"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Preview","input":false,"key":"panel15"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"DokStore","input":false,"key":"panel14"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"CosmosDB","input":false,"key":"panel13"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Polizze erzeugen","input":false,"key":"panel16"},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Schaden erzeugen","input":false,"key":"panel17"},{"hideLabel":false,"clearOnHide":false,"components":[],"key":"panel26","input":false,"title":"Dokument ablegen","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""}},{"hideLabel":false,"clearOnHide":false,"components":[],"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"In context translation","input":false,"key":"panel22"}],"created":"2017-11-12T12:49:28.153Z","revisions":"","_vid":0,"_id":"5a08435835677f0001af052d","machineName":"nezcjzowfnfwzny:end2end","modified":"2018-02-02T02:51:31.574Z","title":"Formviewer for MS Azure and Office 365","display":"form","name":"end2end","path":"end2end","project":"5a05516e35677f0001aeef6e","properties":{"formtitle":"Tog Formviewer"}},
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
        maximizeBrowserWindow: false,
        formWidthPercent: 100,
        environment: true,
        notifications: true,
        settings: true,
        help: true,
        account: true,
        themeSettings: false,
        phraseApp: "false",
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
        calcApiPath: ""
    };
}

(
    function ()
    {
        resetAppConfiguration();
        var appDef = appConfiguration.appDefPath;
        
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
        
        loadScript(appDef, checkAppCofig);
    }
)();

/**
 * Loads script from specified URL by creating a new script element and appending it to the head part of the html.
 * Runs a callback function when the script gets loaded. Runs the errorHandler function if the script fails to load.
 */
function loadScript(url, callback, errorHandler)
{
    var scriptElement = document.createElement("script");
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
    var paramRegex = new RegExp("[?&]" + encodeURIComponent(parameterName) + "(=([^&#]*)|&|#|$)");
    var paramValue = paramRegex.exec(window.location.href);
    if (paramValue && paramValue[2])
    {
        return decodeURIComponent(paramValue[2].replace(/\+/g, " "));
    }
    
    return null;
}

/**
 * Checks if app config is already defined. If so loads other definitions.
 * Otherwise looks for the app configuration on another hardcoded location.
 */
function checkAppCofig()
{
    var appDefinition = document.getElementById("appdef");
    
    // Check if appObj is defined. If not try with a new hardcoded value
    if (typeof appObj === "undefined")
    {
        appConfiguration.appDefPath = "./defs/app.json.js";
        loadScript("./defs/app.json.js", loadFormDefinition);
    }
    else
    {
        loadFormDefinition();
    }
}

/**
 * Loads form definition, then loads brand, customization and header definitions
 * and sets up the app once everything is loaded including the document itself.
 */
function loadFormDefinition()
{
    var formDef = appConfiguration.formDefPath;
    
    // Check if we have an URI paramater which specifies
    // a path to the form definition. If so we'll use it.
    var formRegex = new RegExp("[?&]form(=([^&#]*)|&|#|$)");
    var formDefParam = formRegex.exec(window.location.href);
    var formSet = false;
    if (formDefParam && formDefParam[2])
    {
        var formUriParam = decodeURIComponent(formDefParam[2].replace(/\+/g, " "));
        if (formUriParam === "/")
        {
            formDef = appConfiguration.formDefPath = "../forms/form.json.js";
        }
        else if ((formUriParam.startsWith && (formUriParam.startsWith("http://") || formUriParam.startsWith("https://")))
            || (formUriParam.indexOf && (formUriParam.indexOf("http://") === 0 || formUriParam.indexOf("https://") === 0)))
        {
            formDef = appConfiguration.formDefPath = formUriParam;
        }
        else
        {
            formDef = appConfiguration.formDefPath = "../forms/" + formUriParam + "/form.json.js";
        }
        
        formSet = true;
    }
    
    if (typeof appObj !== 'undefined')
    {
        // We have found app.json.js so we will use it to load other definitions
        // If we have form definition already defined in query parameter we will use it
        if (!formSet && appObj["formdefinition"])
        {
            formDef = appConfiguration.formDefPath = appObj["formdefinition"];
        }
    }
    
    loadScript(formDef, formObjLoaded, loadDefaultForm);
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
    appConfiguration.formObj = formObj;
    
    // Set up form display mode
    var formDisplay = checkForUrlParameter("display");
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
    var titleUrl = checkForUrlParameter("title");
    if (titleUrl)
    {
        appConfiguration.title = titleUrl;
    }
    else if (formObj && formObj.hasOwnProperty("title"))
    {
        appConfiguration.title = formObj["title"];
    }
    
    // Set up form title
    if (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("formtitle"))
    {
        appConfiguration.formtitle = formObj.properties.formtitle;
    }
    
    document.title = appConfiguration.formtitle;
    
    // Set up default form help (can be overridden with component level "formhelp" property)
    if (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("formhelp"))
    {
        appConfiguration.formhelp = formObj.properties["formhelp"];
    }
    
    // Set up default process link which user can open when click on the process image in help menu
    // (can be overridden with component level "processimagelink" property)
    if (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("processimagelink"))
    {
        appConfiguration.processimagelink = formObj.properties["processimagelink"];
    }
    
    // Set up default process image in help menu (can be overridden with component level "processlink" property)
    if (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("processlink"))
    {
        appConfiguration.processlink = formObj.properties["processlink"];
    }
    
    // Set up default e-learning link which user can open when click on the e-learning image in help menu
    // (can be overridden with component level "elearningimagelink" property)
    if (formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("elearningimagelink"))
    {
        appConfiguration.elearningimagelink = formObj.properties["elearningimagelink"];
    }
    
    // Set up default e-learning image in help menu (can be overridden with component "elearninglink" property)
    if ((formObj && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("elearninglink")))
    {
        appConfiguration.elearninglink = formObj.properties["elearninglink"];
    }
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
    window.formObj = appConfiguration.formObj;
    loadConfigurations();
}

/**
 * Loads brand, customization and header definitions and sets up the app
 * once everything is loaded including the document itself.
 */
function loadConfigurations()
{
    var brandDef;
    var customizationDef;
    var headerConfig;
    
    // Check if we have an URI paramater which specifies
    // a path to the brand definition. If so we'll use it.
    var brandRegex = new RegExp("[?&]brand(=([^&#]*)|&|#|$)")
    var brandDefParam = brandRegex.exec(window.location.href);
    var brandSet = false;
    if (brandDefParam && brandDefParam[2])
    {
        var brandUriParam = decodeURIComponent(brandDefParam[2].replace(/\+/g, " "));
        if (brandUriParam === "/")
        {
            brandDef = appConfiguration.brandDefPath = "../brands/brand.json.js";
        }
        else
        {
            brandDef = appConfiguration.brandDefPath = "../brands/" + brandUriParam + "/brand.json.js";
        }
        
        brandSet = true;
    }
    
    // Check if we have an URI paramater which specifies
    // a path to the customization definition. If so we'll use it.
    var cstmzRegex = new RegExp("[?&]cstmz(=([^&#]*)|&|#|$)")
    var cstmzDefParam = cstmzRegex.exec(window.location.href);
    var cstmzSet = false;
    if (cstmzDefParam && cstmzDefParam[2])
    {
        var cstmzUriParam = decodeURIComponent(cstmzDefParam[2].replace(/\+/g, " "));
        if (cstmzUriParam === "/")
        {
            customizationDef = appConfiguration.customizationDefPath = "../cstmzs/customization.json.js";
        }
        else
        {
            customizationDef = appConfiguration.customizationDefPath = "../cstmzs/" + cstmzUriParam + "/customization.json.js";
        }
        
        cstmzSet = true;
    }
            
    // Check if we have an URI paramater which specifies
    // a path to the header configuration. If so we'll use it.
    var hdrcnfRegex = new RegExp("[?&]hdrcnf(=([^&#]*)|&|#|$)")
    var hdrcnfDefParam = hdrcnfRegex.exec(window.location.href);
    var hdrcnfSet = false;
    if (hdrcnfDefParam && hdrcnfDefParam[2])
    {
        var hdrcnfUriParam = decodeURIComponent(hdrcnfDefParam[2].replace(/\+/g, " "));
        if (hdrcnfUriParam === "/")
        {
            headerConfig = appConfiguration.headerConfPath = "../hdrcnfs/header.json.js";
        }
        else
        {
            headerConfig = appConfiguration.headerConfPath = "../hdrcnfs/" + hdrcnfUriParam + "/header.json.js";
        }
        
        hdrcnfSet = true;
    }
    
    if (typeof formObj !== 'undefined' && formObj != null && formObj.hasOwnProperty("properties"))
    {
        // We have a form defition loaded so we will use it to get paths for other definition files
        // If we have brand definition already defined in query parameter we will use it
        if (!brandSet && formObj.properties["branddefinition"])
        {
            brandDef = appConfiguration.brandDefPath = formObj.properties["branddefinition"];
            brandSet = true;
        }
        
        // If we have customization definition already defined in query parameter we will use it
        if (!cstmzSet && formObj.properties["customizationdefinition"])
        {
            customizationDef = appConfiguration.customizationDefPath = formObj.properties["customizationdefinition"];
            cstmzSet = true;
        }
        
        // If we have header definition already defined in query parameter we will use it
        if (!hdrcnfSet && formObj.properties["headerconfiguration"])
        {
            headerConfig = appConfiguration.headerConfPath = formObj.properties["headerconfiguration"];
            hdrcnfSet = true;
        }
    }
    
    if (typeof appObj !== 'undefined')
    {
        // We have found app.json.js so we will use it to load other definitions
        // If we have brand definition already defined in query parameter or in form definition
        // we will use it. Otherwise we use the value from the app.json.js
        if (!brandSet && appObj["branddefinition"])
        {
            brandDef = appConfiguration.brandDefPath = appObj["branddefinition"];
        }
        
        // If we have customization definition already defined in query parameter or in form
        // definition we will use it. Otherwise we use the value from the app.json.js
        if (!cstmzSet && appObj["customizationdefinition"])
        {
            customizationDef = appConfiguration.customizationDefPath = appObj["customizationdefinition"];
        }
        
        // If we have header configuration already defined in query parameter or in form definition
        // we will use it. Otherwise we use the value from the app.json.js
        if (!hdrcnfSet && appObj["headerconfiguration"])
        {
            headerConfig = appConfiguration.headerConfPath = appObj["headerconfiguration"];
        }
    }
    
    if (brandDef)
    {
        loadScript(brandDef, brandObjLoaded, loadDefaultBrand);
    }
    else 
    {
        loadDefaultBrand();
    }
    
    if (customizationDef)
    {
        loadScript(customizationDef, customizationObjLoaded, loadDefaultCustomization);
    }
    else
    {
        loadDefaultCustomization();
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

/**
 * Runs when the brand definition has been loaded. Parses the loaded brand object
 * and calculates final brand configurations.
 */
function brandObjLoaded()
{
    setupBrandConfiguration();
    checkForAppSetup();
}

/**
 * Sets up brand configuration
 */
function setupBrandConfiguration()
{
    // Set up main logo
    var mainLogoUrl = checkForUrlParameter("mainlogopath");
    if (mainLogoUrl)
    {
        appConfiguration.mainlogopath = mainLogoUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["mainlogopath"])
    {
        appConfiguration.mainlogopath = formObj.properties["mainlogopath"];
    }
    else if (typeof brandObj !== 'undefined' && brandObj != null && brandObj["mainlogopath"])
    {
        appConfiguration.mainlogopath = brandObj["mainlogopath"];
    }
    
    // Set up side logo
    var sideLogoUrl = checkForUrlParameter("sidelogopath");
    if (sideLogoUrl)
    {
        appConfiguration.sidelogopath = sideLogoUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("sidelogopath"))
    {
        appConfiguration.sidelogopath = formObj.properties["sidelogopath"];
    }
    else if (typeof brandObj !== 'undefined' && brandObj != null && brandObj["sidelogopath"])
    {
        appConfiguration.sidelogopath = brandObj["sidelogopath"];
    }
    
    // Set up favicon
    var faviconUrl = checkForUrlParameter("faviconpath");
    if (faviconUrl)
    {
        appConfiguration.faviconpath = faviconUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["faviconpath"])
    {
        appConfiguration.faviconpath = formObj.properties["faviconpath"];
    }
    else if (typeof customizationObj !== 'undefined' && customizationObj !== null && customizationObj["faviconpath"])
    {
        appConfiguration.faviconpath = customizationObj["faviconpath"];
    }
    else if (typeof brandObj !== 'undefined' && brandObj != null && brandObj["faviconpath"])
    {
        appConfiguration.faviconpath = brandObj["faviconpath"];
    }
    
    // Set up Bootswatch theme
    var bootswatchThemeUrl = checkForUrlParameter("bootswatchtheme");
    if (bootswatchThemeUrl)
    {
        appConfiguration.bootswatchtheme = bootswatchThemeUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties")
        && formObj.properties.hasOwnProperty("bootswatchtheme") && themesMap.hasOwnProperty(formObj.properties["bootswatchtheme"]))
    {
        appConfiguration.bootswatchtheme = formObj.properties["bootswatchtheme"];
    }
    else if (typeof brandObj !== 'undefined' && brandObj != null && brandObj.hasOwnProperty("bootswatchtheme")
        && themesMap.hasOwnProperty(brandObj["bootswatchtheme"]))
    {
        appConfiguration.bootswatchtheme = brandObj["bootswatchtheme"];
    }
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
    checkForAppSetup();
}

/**
 * Sets up customization configuration
 */
function setupCustomizationConfiguration()
{
    // Check set up of favicon
    var faviconUrl = checkForUrlParameter("faviconpath");
    if (faviconUrl)
    {
        appConfiguration.faviconpath = faviconUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["faviconpath"])
    {
        appConfiguration.faviconpath = formObj.properties["faviconpath"];
    }
    else if (typeof customizationObj !== 'undefined' && customizationObj !== null && customizationObj["faviconpath"])
    {
        appConfiguration.faviconpath = customizationObj["faviconpath"];
    }
    
    // Set up client's logo (customization logo)
    var customizationLogoUrl = checkForUrlParameter("customizationlogopath");
    if (customizationLogoUrl)
    {
        appConfiguration.customizationlogopath = customizationLogoUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("customizationlogopath"))
    {
        appConfiguration.customizationlogopath = formObj.properties["customizationlogopath"];
    }
    else if (typeof customizationObj !== 'undefined' && customizationObj !== null && customizationObj["customizationlogopath"])
    {
        appConfiguration.customizationlogopath = customizationObj["customizationlogopath"];
    }
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
    checkForAppSetup();
}

/**
 * Sets up header configuration
 */
function setupHeaderConfiguration()
{
    // Check if we should enable the app launcher button
    var appLauncherUrl = checkForUrlParameter("app launcher");
    if (appLauncherUrl === "false" || appLauncherUrl === "true")
    {
        if (appLauncherUrl === "false")
        {
            appConfiguration.appLauncher = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("app launcher"))
    {
        if (formObj.properties["app launcher"] == false)
        {
            appConfiguration.appLauncher = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("app launcher") && headerObj["app launcher"] === false)
    {
        appConfiguration.appLauncher = false;
    }
    
    // Check if we should maximize the browser window (IE only)
    var maximizeBrowserWindowUrl = checkForUrlParameter("maximize");
    if (maximizeBrowserWindowUrl === "false" || maximizeBrowserWindowUrl === "true")
    {
        if (maximizeBrowserWindowUrl === "true")
        {
            appConfiguration.maximizeBrowserWindow = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("maximize"))
    {
        if (formObj.properties["maximize"] === true)
        {
            appConfiguration.maximizeBrowserWindow = true;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("maximize") && headerObj["maximize"] === true)
    {
        appConfiguration.maximizeBrowserWindow = true;
    }
    
    // Set up the form width percent
    var formWidthPercentUrl = checkForUrlParameter("form width percent");
    if (formWidthPercentUrl)
    {
        if (!isNaN(formWidthPercentUrl) && 0.1 < formWidthPercentUrl && formWidthPercentUrl <= 100)
        {
            appConfiguration.formWidthPercent = formWidthPercentUrl;
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
    var hasEnvironmentsUrl = checkForUrlParameter("environment");
    if (hasEnvironmentsUrl === "false" || hasEnvironmentsUrl === "true")
    {
        if (hasEnvironmentsUrl === "false")
        {
            appConfiguration.environment = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("environment"))
    {
        if (formObj.properties["environment"] === false)
        {
            appConfiguration.environment = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("environment") && headerObj["environment"] === false)
    {
        appConfiguration.environment = false;
    }
    
    // Check if we should show notifications menu
    var hasNotificationsUrl = checkForUrlParameter("notifications");
    if (hasNotificationsUrl === "false" || hasNotificationsUrl === "true")
    {
        if (hasNotificationsUrl === "false")
        {
            appConfiguration.notifications = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("notifications"))
    {
        if (formObj.properties["notifications"] === false)
        {
            appConfiguration.notifications = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("notifications") && headerObj["notifications"] === false)
    {
        appConfiguration.notifications = false;
    }
    
    // Check if we should show settings menu
    var hasSettingsUrl = checkForUrlParameter("settings");
    if (hasSettingsUrl === "false" || hasSettingsUrl === "true")
    {
        if (hasSettingsUrl === "false")
        {
            appConfiguration.settings = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("settings"))
    {
        if (formObj.properties["settings"] === false)
        {
            appConfiguration.settings = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("settings") && headerObj["settings"] === false)
    {
        appConfiguration.settings = false;
    }
    
    // Check if we should show help menu
    var hasHelpUrl = checkForUrlParameter("help");
    if (hasHelpUrl === "false" || hasHelpUrl === "true")
    {
        if (hasHelpUrl === "false")
        {
            appConfiguration.help = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("help"))
    {
        if (formObj.properties["help"] === false)
        {
            appConfiguration.help = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("help") && headerObj["help"] === false)
    {
        appConfiguration.help = false;
    }
    
    // Check if we should show the account menu
    var hasAccountUrl = checkForUrlParameter("account");
    if (hasAccountUrl === "false" || hasAccountUrl === "true")
    {
        if (hasAccountUrl === "false")
        {
            appConfiguration.account = false;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("account"))
    {
        if (formObj.properties["account"] === false)
        {
            appConfiguration.account = false;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("account") && headerObj["account"] === false)
    {
        appConfiguration.account = false;
    }
    
    // Check if we should show theme selection option in the settings menu
    var hasThemeSettingsUrl = checkForUrlParameter("theme settings");
    if (hasThemeSettingsUrl === "false" || hasThemeSettingsUrl === "true")
    {
        if (hasThemeSettingsUrl === "true")
        {
            appConfiguration.themeSettings = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("theme settings"))
    {
        if (formObj.properties["theme settings"] === true)
        {
            appConfiguration.themeSettings = true;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("theme settings") && headerObj["theme settings"] === true)
    {
        appConfiguration.themeSettings = true;
    }

    // If the themes definition path has been specified
    var themesUrl = checkForUrlParameter("themes");
    if (themesUrl)
    {
        appConfiguration.themes = themesUrl;
    }
    if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["themes"])
    {
        appConfiguration.themes = formObj.properties["themes"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("themes") && headerObj["themes"])
    {
        appConfiguration.themes = headerObj["themes"];
    }
    
    // Check if we should show the PhraseApp settings
    var hasPhraseAppSettings = false;
    var phraseAppSettingsOn = false;
    var hasPhraseAppSettingsUrl = checkForUrlParameter("phraseapp");
    if (hasPhraseAppSettingsUrl === "false" || hasPhraseAppSettingsUrl === "true" || hasPhraseAppSettingsUrl === "on" || hasPhraseAppSettingsUrl === "off")
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
    
    // Check if we should show the button which opens the feedback form
    var hasFeedbackUrl = checkForUrlParameter("feedback");
    if (hasFeedbackUrl === "false" || hasFeedbackUrl === "true")
    {
        if (hasFeedbackUrl === "true")
        {
            appConfiguration.feedback = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("feedback"))
    {
        if (formObj.properties["feedback"])
        {
            appConfiguration.feedback = true;
        }
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("feedback") && headerObj["feedback"] === true)
    {
        appConfiguration.feedback = true;
    }

    // Make sure that we have a home parameter and if there is an additional parameter(relativepath) create complete feedback url
    var hasHomeUrlParam = checkForUrlParameter('Appl-Home');
    var hasFeedbackUrlParam = checkForUrlParameter('feedbackurl');
    if (hasHomeUrlParam)
    {
        appConfiguration.home = hasHomeUrlParam;
    }
    
    if (hasFeedbackUrlParam)
    {
        appConfiguration.feedbackurl = hasFeedbackUrlParam;   
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("feedbackurl") && formObj.properties["feedbackurl"])
    {
        appConfiguration.feedbackurl = formObj["feedbackurl"];    
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj.hasOwnProperty("feedbackurl") && headerObj["feedbackurl"])
    {
        appConfiguration.feedbackurl = headerObj["feedbackurl"];
    }
    
    if (appConfiguration.home && appConfiguration.feedbackurl) 
    {
        appConfiguration.feedbackUrlAbsolutePath = appConfiguration.home + "/" + appConfiguration.feedbackurl; 
    }
    else if (appConfiguration.home && !appConfiguration.feedbackurl)
    {
        appConfiguration.feedbackUrlAbsolutePath = appConfiguration.home + "/Feedback";
    }    

    // Check if we should use outlook mailbox settings for language and time zone
    var useOutlookSettingsUrl = checkForUrlParameter("use outlook settings");
    if (useOutlookSettingsUrl === "false" || useOutlookSettingsUrl === "true")
    {
        if (useOutlookSettingsUrl === "true")
        {
            appConfiguration.useOutlookSettings = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj != null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("use outlook settings"))
    {
        appConfiguration.useOutlookSettings = (formObj.properties["use outlook settings"] === true);
    }
    else if (typeof headerObj !== 'undefined' && headerObj != null && headerObj.hasOwnProperty("use outlook settings"))
    {
        appConfiguration.useOutlookSettings = (headerObj["use outlook settings"] === true);
    }
    
    // Check if we should use user property extensions for theme (and language and time zone if not stored in the mailbox)
    var useUserPropertyExtensionsUrl = checkForUrlParameter("use user property extensions");
    if (useUserPropertyExtensionsUrl === "false" || useUserPropertyExtensionsUrl === "true")
    {
        if (useUserPropertyExtensionsUrl === "true")
        {
            appConfiguration.useUserPropertyExtensions = true;
        }
    }
    else if (typeof formObj !== 'undefined' && formObj != null && formObj.hasOwnProperty("properties") && formObj.properties.hasOwnProperty("use user property extensions"))
    {
        appConfiguration.useUserPropertyExtensions = (formObj.properties["use user property extensions"] === true);
    }
    else if (typeof headerObj !== 'undefined' && headerObj != null && headerObj.hasOwnProperty("use user property extensions"))
    {
        appConfiguration.useUserPropertyExtensions = (headerObj["use user property extensions"] === true);
    }
    
    // Set up process text in help menu
    var processTextUrl = checkForUrlParameter("processtext");
    if (processTextUrl)
    {
        appConfiguration.processtext = processTextUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["processtext"])
    {
        appConfiguration.processtext = formObj.properties["processtext"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj != null && headerObj["processtext"])
    {
        appConfiguration.processtext = headerObj["processtext"];
    }
    
    // Set up e-learning text in help menu
    var eLearningTextUrl = checkForUrlParameter("elearningtext");
    if (eLearningTextUrl)
    {
        appConfiguration.elearningtext = eLearningTextUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["elearningtext"])
    {
        appConfiguration.elearningtext = formObj.properties["elearningtext"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj != null && headerObj["elearningtext"])
    {
        appConfiguration.elearningtext = headerObj["elearningtext"];
    }
    
    // Set up property which specifies if we perform auto calculation modes.
    // Possible values are an empty string (default), "fieldchange" and "focuschange"
    var autoCalculationUrl = checkForUrlParameter("autocalc");
    if (autoCalculationUrl)
    {
        appConfiguration.autocalc = autoCalculationUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["autocalc"])
    {
        appConfiguration.autocalc = formObj.properties["autocalc"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj["autocalc"])
    {
        appConfiguration.autocalc = headerObj["autocalc"];
    }
    
    // Set up path or URL to calculation file
    var calcJsPathUrl = checkForUrlParameter("calc_js_path");
    if (calcJsPathUrl)
    {
        appConfiguration.calcJsPath = calcJsPathUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["calc_js_path"])
    {
        appConfiguration.calcJsPath = formObj.properties["calc_js_path"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj["calc_js_path"])
    {
        appConfiguration.calcJsPath = headerObj["calc_js_path"];
    }
    
    // Set up calculation setting name
    var calcJsSettingUrl = checkForUrlParameter("calc_js_setting");
    if (calcJsSettingUrl)
    {
        appConfiguration.calcJsSetting = calcJsSettingUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["calc_js_setting"])
    {
        appConfiguration.calcJsSetting = formObj.properties["calc_js_setting"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj["calc_js_setting"])
    {
        appConfiguration.calcJsSetting = headerObj["calc_js_setting"];
    }
    
    // Set up calculation configuration
    var calcConfPathUrl = checkForAppSetup("calc_conf_path");
    if (calcConfPathUrl)
    {
        appConfiguration.calcConfPath = calcConfPathUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["calc_conf_path"])
    {
        appConfiguration.calcConfPath = formObj.properties["calc_conf_path"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj["calc_conf_path"])
    {
        appConfiguration.calcConfPath = headerObj["calc_conf_path"];
    }
    
    // Set up calculation configuration setting name
    var calcConfSettingUrl = checkForUrlParameter("calc_conf_setting");
    if (calcConfSettingUrl)
    {
        appConfiguration.calcConfSetting = calcConfSettingUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["calc_conf_setting"])
    {
        appConfiguration.calcConfSetting = formObj.properties["calc_conf_setting"];
    }
    else if (typeof headerObj !== 'úndefined' && headerObj !== null && headerObj["calc_conf_setting"])
    {
        appConfiguration.calcConfSetting = headerObj["calc_conf_setting"];
    }
    
    // Set up calculation API path
    var calcApiPathUrl = checkForUrlParameter("calc_api_path");
    if (calcApiPathUrl)
    {
        appConfiguration.calcApiPath = calcApiPathUrl;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["calc_api_path"])
    {
        appConfiguration.calcApiPath = formObj.properties["calc_api_path"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj["calc_api_path"])
    {
        appConfiguration.calcApiPath = headerObj["calc_api_path"];
    }
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
    checkForAppSetup();
}

/**
 * Sets up themes configuration
 */
function setThemesConfiguration()
{
    // Update the themesMap to override the hardcoded values
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
 * Flag which indicates if the themes definition (themes.json.js) loading has been started
 */
var themeLoadStarted = false;

/**
 * Checks if all definition files has been loaded.
 * If so adds the app setup function as listener for the window load event
 * or runs the app setup if the window load event is already fired.
 */
function checkForAppSetup()
{
    // Check if the themes.json.js should be loaded
    if (!themeLoadStarted && typeof headerObj !== 'undefined' && headerObj != null && typeof formObj !== 'undefined' && formObj != null)
    {
        if (appConfiguration.themes)
        {
            loadScript(appConfiguration.themes, themesLoaded, loadDefaultThemes);
        }
        
        themeLoadStarted = true;
    }
    
    if (typeof headerObj !== 'undefined' && typeof customizationObj !== 'undefined' && typeof brandObj !== 'undefined' && typeof formObj !== 'undefined'
        && (typeof themesObj !== 'undefined' || (typeof headerObj !== 'undefined' && headerObj != null && !(headerObj["themes"])
            && typeof formObj !== 'undefined' && formObj != null && (!formObj.hasOwnProperty("properties") || !(formObj.properties["themes"])))))
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
    if (!appConfiguration.home)
    {
        // We don't have the base URL for the API call so we don't perform a call
        setupApp();
        
        return;
    }
    
    // We found home URL and it is a base address for our call
    // Now we need to find a relative path
    var loadingActionPath;
    var loadingActionUrlParam = checkForUrlParameter("action loading");
    if (loadingActionUrlParam)
    {
        loadingActionPath = loadingActionUrlParam;
    }
    else if (typeof formObj !== 'undefined' && formObj !== null && formObj.hasOwnProperty("properties") && formObj.properties["action loading"])
    {
        loadingActionPath = formObj.properties["action loading"];
    }
    else if (typeof headerObj !== 'undefined' && headerObj !== null && headerObj["action loading"])
    {
        loadingActionPath = headerObj["action loading"];
    }
    
    if (loadingActionPath)
    {
        // Replace placeholders in relative path with available settings
        var placeholders = {};
        for (let key in placeholders) {
            return loadingActionPath.replace(/({([^}]+)})/g, function(i) {
                let key = i.replace(/{/, '').replace(/}/, '');
                if (!placeholders[key]) {
                    return i;
                }

                return placeholders[key];
            });
        }
        
        var url = appConfiguration.home + "/" + loadingActionPath;
        
        performLoadingCallback();
    }
    else
    {
        setupApp();
    }
}

/**
 * Calls loading callback and set up the APP
 */
function performLoadingCallback(url)
{
    var payload = {
        "plugin": "form.io",
        "appObj": appObj,
        "header": headerObj,
        "customization": customizationObj,
        "brand": brandObj,
        "form": formObj
    };
    
    // TODO: Perform loading API call with the given callback
}

/**
 * Updates form definition
 */
function updateFormDefinition(formPath)
{
    // First show the spinner
    $('.header-border').hide();
    $('.content-wrapper').hide();
    $('.overlay').show();
    
    var absolutePath = formPath;
    if (!(formPath.startsWith && (formPath.startsWith("http://") || formPath.startsWith("https://")))
        && !(formPath.indexOf && (formPath.indexOf("http://") === 0 || formPath.indexOf("https://") === 0)))
    {
        absolutePath = appConfiguration.formDefPath = "../forms/" + formPath + "/form.json.js";
    }
    
    // Load new form definition
    loadScript(absolutePath, formUpdated, updateFormFailed);
}

/**
 * Runs when a new form definition has been loaded. Updates rendered form and header properties.
 * Applies updated properties to the layout.
 */
function formUpdated()
{
    resetAppConfiguration();
    
    // Update header properties
    setupFormConfiguration();
    setupBrandConfiguration();
    setupCustomizationConfiguration();
    setupHeaderConfiguration();
    
    // Update the form
    formioForm.destroy();
    setupApp();
}

/**
 * Runs when a new form definition fails to load. Hides the spinner and shows the old form again.
 */
function updateFormFailed()
{
    // First show the spinner
    $('.header-border').show();
    $('.content-wrapper').show();
    $('.overlay').hide();
}

var TogFormViewer =
{
    FormioPlugIn:
    {
        setProperty: function(propName, propValue)
        {
            if (propName === "form")
            {
                updateFormDefinition(propValue);
            }
            else if (propName === "formWidthPercent" && propValue != appConfiguration.formWidthPercent) 
            {
                appConfiguration.formWidthPercent = propValue;
                $('.body-content').width(propValue);
            }
            else if(propName === "formhelp" && propValue != appConfiguration.formhelp)
            {
                appConfiguration.formhelp = propValue;
            }
            else if(propName === "formtitle" && propValue != appConfiguration.formtitle)
            {
                appConfiguration.formtitle = propValue;
                document.title = appConfiguration.formtitle;
            }
            else if(propName === "processtext" && propValue != appConfiguration.processtext)
            {
                appConfiguration.processtext = propValue;
            }
            else if(propName === "processlink" && propValue != appConfiguration.processlink)
            {
                appConfiguration.processlink = propValue;
            }
            else if(propName === "processimagelink" && propValue != appConfiguration.processimagelink)
            {
                appConfiguration.processimagelink = propValue;
            }
            else if(propName === "elearningtext" && propValue != appConfiguration.elearningtext)
            {
                appConfiguration.elearningtext = propValue;
            }
            else if(propName === "elearninglink" && propValue != appConfiguration.elearninglink)
            {
                appConfiguration.elearninglink = propValue;
            }
            else if(propName === "elearningimagelink" && propValue != appConfiguration.elearningimagelink)
            {
                appConfiguration.elearningimagelink = propValue;
            }
        }
    },
    
    loadForm: function(formPath, data)
    {
        updateFormDefinition(formPath);
        formioForm.submission = {"data": data};
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
   
    // filename and target attributes are not utilized...don't know if there is a way to set the title of the window to the "filename"...don't know what would be the meaning of "target"
    openFile: function(filePath,filename,target)
    {
        window.open(filePath);
    },
    
    downloadFile: function(filePath,filename)
    {
        downloadURI(filePath,filename);
    },
    
    loadData: function(filePath)
    {
        _loadData(filePath);
    }
}

// It is expected that the file referenced by path (json.js file) contains JS variable called mockupFormDataObj
// This variable is JSON containing the data to be loaded into the form. 
// E.g. the file content could look like: var mockupFormDataObj = {"n1":33,"n2":44,"str1":"mystr","bln1":true};
function _loadData(filePath){
   var script = getScript(filePath);
   if (script) {
      script.parentNode.removeChild(script);
   }
   loadScript(filePath,function(){mockupDataOK(filePath);},function(){mockupDataFailed(filePath);});   
}

function mockupDataOK(mockupPath) {
   try {
      var datamerged = $.extend(formioForm.submission.data,mockupFormDataObj);
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
    
    var additionalConfiguration =
    {
        "isSendReceive": true,
        "operation": "Calculate"
    };
    executeAjaxRequestWithAdalLogic(ADAL.config.clientId, executeAjaxRequest, appConfiguration.calcApiPath, payload, additionalConfiguration,onsuccess_calc,onfailure_generic);
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
   var datamerged = $.extend(formdata.data,data.calcResult);
   console.log('MERGED DATA for calculation='+JSON.stringify(datamerged));
   calculationResultSet = true;
   formioForm.submission={"data":datamerged};
}

function onsuccess_sendReceiveOrHandover(token,url,formdata,additionalConfiguration,data,textStatus,request) {
   var msgPart = ((additionalConfiguration && additionalConfiguration.isSendReceive) ? "sendReceiveFormData" : "handOverFormData")+" operation '"+additionalConfiguration.operation+"' against base API '"+appConfiguration.home+"'";
   console.log("Successfully executed "+msgPart+".");
   if (additionalConfiguration && additionalConfiguration.isSendReceive) {
      var datamerged = $.extend(formdata.data,data.data);
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
