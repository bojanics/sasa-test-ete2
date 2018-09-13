var formObj = {
	"type": "form",
	"tags": [],
	"owner": "599d5130a0434200072250ab",
	"components": [    {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Event MSG",
        "key": "msg",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "spellcheck": true,
        "validate": {
            "required": false,
            "minLength": "",
            "maxLength": "",
            "pattern": "",
            "custom": "",
            "customPrivate": false
        },
        "conditional": {
            "show": "",
            "when": null,
            "eq": ""
        },
        "type": "textfield",
        "inDataGrid": true,
        "labelPosition": "top",
        "tags": [],
        "properties": {
            "action change":"",
            "aaction change local script":""
        }
    },
    {
		"autofocus": false,
		"input": true,
		"tableView": true,
		"inputType": "number",
		"label": "Number a",
		"key": "a",
		"placeholder": "",
		"prefix": "",
		"suffix": "",
		"defaultValue": "",
		"protected": false,
		"persistent": true,
		"hidden": false,
		"clearOnHide": true,
		"validate": {
			"required": false,
			"min": "",
			"max": "",
			"step": "any",
			"integer": "",
			"multiple": "",
			"custom": "valid = (input>=1 && input<=100) ? true : 'Must be between 1 and 100'"
		},
		"type": "number",
		"labelPosition": "top",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
            "aaction focus local script":"testFocus2(togFormViewerEvent);",
            "aaction blur local script":"testBlur2(togFormViewerEvent);",			
            "action change":"",
            "aaction click local script":"testClick2(togFormViewerEvent);",
            "aaction dblclick local script":"testDblClick2(togFormViewerEvent);",
            "aaction mouseover local script":"testMouseover2(togFormViewerEvent);",
            "aaction mousedown local script":"testMousedown2(togFormViewerEvent);",
            "aaction mouseout local script":"testMouseout2(togFormViewerEvent);",
            "aaction mouseup local script":"testMouseup2(togFormViewerEvent);",
            "aaction mousemove local script":"testMousemove2(togFormViewerEvent);",
            "aaction mouseenter local script":"testMouseenter2(togFormViewerEvent);",
            "aaction mouseleave local script":"testMouseleave2(togFormViewerEvent);",
            "aaction keypress local script":"testKeypress2(togFormViewerEvent);",
            "aaction keyup local script":"testKeyup2(togFormViewerEvent);",
            "aaction keydown local script":"testKeydown2(togFormViewerEvent);",
            "aaction input local script":"testInput2(togFormViewerEvent);",
            "aaction componentError local script": "testComponenterror2(togFormViewerEvent);",
            "aaction select local script": "testSelect2(togFormViewerEvent);",
            "aaction contextMenu local script":"testContextmenu2(togFormViewerEvent);",
            "aaction wheel local script":"testWheel2(togFormViewerEvent);",
            "aaction cut local script":"testCut2(togFormViewerEvent);",
            "aaction copy local script":"testCopy2(togFormViewerEvent);",
            "aaction paste local script":"testPaste2(togFormViewerEvent);",
            "aaction scroll local script":"testScroll2(togFormViewerEvent);",
            "aaction keyup":"Form('{formname}/{formversion}')/KeyUp",
            "aaction keydown":"Form('{formname}/{formversion}')/KeyDown",
            "aaction keypress":"Form('{formname}/{formversion}')/KeyPress",
            "aaction componentError":"Form('{formname}/{formversion}')/ComponentError",
            "aaction mousemove":"Form('{formname}/{formversion}')/MouseMove",
            "aaction mouseenter":"Form('{formname}/{formversion}')/MouseMove",
            "aaction mouseleave":"Form('{formname}/{formversion}')/MouseMove",
            "aaction mouseout":"Form('{formname}/{formversion}')/MouseOut",
            "aaction mouseover":"Form('{formname}/{formversion}')/MouseOver",
            "aaction select":"Form('{formname}/{formversion}')/Search",
            "aaction contextMenu":"Form('{formname}/{formversion}')/ContextMenu",
            "aaction wheel":"Form('{formname}/{formversion}')/Wheel",
            "aaction cut":"Form('{formname}/{formversion}')/Wheel",
            "aaction copy":"Form('{formname}/{formversion}')/Wheel",
            "aaction paste":"Form('{formname}/{formversion}')/Wheel",
            "aaction scroll":"Form('{formname}/{formversion}')/Wheel"
		},
		"lockKey": true
	},
	{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"inputType": "number",
		"label": "Number b",
		"key": "b",
		"placeholder": "",
		"prefix": "",
		"suffix": "",
		"defaultValue": "",
		"protected": false,
		"persistent": true,
		"hidden": false,
		"clearOnHide": true,
		"validate": {
			"required": false,
			"min": "",
			"max": "",
			"step": "any",
			"integer": "",
			"multiple": "",
			"custom": "valid = (input>=1 && input<=10) ? true : 'Must be between 1 and 10'"
		},
		"type": "number",
		"labelPosition": "top",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
            "action change local script":"testChange2(togFormViewerEvent);"			
		},
		"lockKey": true,
		"isNew": false
	},
	{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"inputType": "number",
		"label": "Result c",
		"key": "c",
		"placeholder": "",
		"prefix": "",
		"suffix": "",
		"defaultValue": "",
		"protected": false,
		"persistent": true,
		"hidden": false,
		"clearOnHide": true,
		"validate": {
			"required": false,
			"min": "",
			"max": "",
			"step": "any",
			"integer": "",
			"multiple": "",
			"custom": ""
		},
		"type": "number",
		"labelPosition": "top",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
		"lockKey": true,
		"disabled": true,
		"isNew": false
	},
	{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"label": "Select predefined",
		"key": "selectpredefined",
		"placeholder": "",
		"data": {
			"values": [],
			"json": "",
			"url": "",
			"resource": "",
			"custom": ""
		},
		"dataSrc": "values",
		"valueProperty": "",
		"defaultValue": "outPatient",
		"refreshOn": "",
		"filter": "",
		"authenticate": false,
		"template": "<span>{{ item.label }}</span>",
		"multiple": false,
		"protected": false,
		"unique": false,
		"persistent": true,
		"hidden": false,
		"clearOnHide": true,
		"validate": {
			"required": false
		},
		"type": "select",
		"labelPosition": "top",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
            "action search local script":"testSearch2(togFormViewerEvent);"
		}
	},    
	{
		"autofocus": false,
		"input": true,
		"label": "Submit",
		"tableView": false,
		"key": "submit",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "submit",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button"
	},
{
		"autofocus": false,
		"input": true,
		"label": "Post to URL(with headers that don't work)",
		"tableView": false,
		"key": "posttoUrl",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "url",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
		"headers": [{
			"value": "v1",
			"header": "h1"
		},
		{
			"value": "v2",
			"header": "h2"
		}],
		"url": "https://sasa-test-misc.azurewebsites.net/Add"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "Show data (JSON)",
		"tableView": false,
		"key": "showdata",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "custom",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
      "custom": "TogFormViewer.showData();"
	},    
	{
		"autofocus": false,
		"input": true,
		"label": "Show data (XML)",
		"tableView": false,
		"key": "showdata",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "custom",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
      "custom": "TogFormViewer.showDataXML('../xslt/defaultPre.xsl.js');"
	},    
    {
		"autofocus": false,
		"input": true,
		"label": "a2n direct call",
		"tableView": false,
		"key": "a2ndircall",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "custom",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
      "custom": "executeAjaxRequestWithAdalLogic(ADAL.config.clientId, executeAjaxRequest, 'https://sasa-test-ete-fnc.azurewebsites.net/Add', {'data':{'a':formioForm.submission.data.a,'b':formioForm.submission.data.b}}, {'isSendReceive' : true,'operation':'test'},onsuccess_sendReceiveOrHandover,onfailure_generic)"
	},    
	{
		"autofocus": false,
		"input": true,
		"label": "Add using executeCustomEvent",
		"tableView": false,
		"key": "addusingcexeccustev",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "custom",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
      "custom": "TogFormViewer.executeCustomAction('https://sasa-test-ete-fnc.azurewebsites.net/Add');"
	},
    
		{
		"autofocus": false,
		"input": true,
		"label": "Load form uploadFile",
		"tableView": false,
		"key": "loadformupldfile",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "custom",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
      "custom": "TogFormViewer.loadForm('fileupload',{'a':133,'b':155});"
	},    
	{
		"autofocus": false,
		"input": true,
		"label": "Load form shwdata",
		"tableView": false,
		"key": "loadformshwdata",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "custom",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
      "custom": "TogFormViewer.loadForm('shwdata',{'a':33,'b':55});"
	},    
	{
		"autofocus": false,
		"input": true,
		"label": "Load form calcsimple",
		"tableView": false,
		"key": "loadformcalcsimple",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "custom",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
      "custom": "TogFormViewer.loadForm('calcsimple',{'a':333,'b':555});"
	},    
    {
        "input": true,
        "label": "Multiply",
        "tableView": false,
        "key": "mul",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "event",
        "disableOnInvalid": false,
        "theme": "primary",
        "type": "button",
        "tags": [],
        "conditional": {
            "show": "",
            "when": null,
            "eq": ""
        },
        "properties": {
            "action": "Form('{formname}/{formversion}')/Multiplication"
        },
        "event": "Multiply",
        "lockKey": true,
        "customConditional": "show",
        "disableOnInvalid": true,
        "hideLabel": false,
        "autofocus": false
    },
    {
        "input": true,
        "label": "Add",
        "tableView": false,
        "key": "add",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "event",
        "disableOnInvalid": false,
        "theme": "primary",
        "type": "button",
        "tags": [],
        "conditional": {
            "show": "",
            "when": null,
            "eq": ""
        },
        "properties": {
            "action": "Form('{formname}/{formversion}')/FailureTest"
        },
        "event": "",
        "lockKey": true,
        "customConditional": "show",
        "hideLabel": false,
        "autofocus": false
    },
    {
        "input": true,
        "label": "Do nothing",
        "tableView": false,
        "key": "donothing",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "event",
        "disableOnInvalid": false,
        "theme": "primary",
        "type": "button",
        "tags": [],
        "conditional": {
            "show": "",
            "when": null,
            "eq": ""
        },
        "properties": {
            "action": ""
        },
        "event": "donothing",
        "lockKey": true,
        "customConditional": "show",
        "hideLabel": false,
        "autofocus": false
    },
	{
		"autofocus": false,
		"input": true,
		"label": "Print appinfo",
		"tableView": false,
		"key": "addusingcexeccustev",
		"size": "md",
		"leftIcon": "",
		"rightIcon": "",
		"block": false,
		"action": "custom",
		"disableOnInvalid": false,
		"theme": "primary",
		"type": "button",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
        "custom": "console.log(TogFormViewer.getAppInfo());"
	},
    {
        "input": true,
        "label": "Do default",
        "tableView": false,
        "key": "dodefault",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "event",
        "disableOnInvalid": false,
        "theme": "primary",
        "type": "button",
        "tags": [],
        "conditional": {
            "show": "",
            "when": null,
            "eq": ""
        },
        "properties": {
        },
        "event": "dodefault",
        "lockKey": true,
        "customConditional": "show",
        "hideLabel": false,
        "autofocus": false
    }    
    ],
	"revisions": "",
	"_vid": 0,
	"access": [{
		"roles": ["599d5201a0434200072250b4",
		"599d5201a0434200072250b5",
		"599d5201a0434200072250b6"],
		"type": "read_all"
	}],
	"submissionAccess": [],
	"created": "2018-03-30T09:24:56.684Z",
	"_id": "5abe0268fad38b108803fb44",
	"title": "Calculate 2 numbers (V2)",
	"display": "form",
	"settings": {
		
	},
	"name": "calc",
	"path": "calc",
	"project": "599d5201a0434200072250b3",
	"modified": "2018-03-30T10:28:25.934Z",
	"machineName": "ewhyjxtmcncdriz:calc",
    "action":"Form('{formname}/{formversion}')/Subtraction",
   "properties": {
    "customScript": "../custscripts/custom.js",
    "aaction local script":"test3(togFormViewerEvent);",
    "action change local script":"testChange1(togFormViewerEvent);",
    "aaction focus local script":"testFocus1(togFormViewerEvent);",
    "aaction blur local script":"testBlur1(togFormViewerEvent);",
    "aaction search local script":"testSearch1(togFormViewerEvent);",
    "aaction showDropdown local script":"testShowDropdown1(togFormViewerEvent);",
    "aaction click local script":"testClick1(togFormViewerEvent);",
    "aaction dblclick local script":"testDblClick1(togFormViewerEvent);",
    "aaction mouseover local script":"testMouseover1(togFormViewerEvent);",
    "aaction mousedown local script":"testMousedown1(togFormViewerEvent);",
    "aaction mouseout local script":"testMouseout1(togFormViewerEvent);",
    "aaction mouseup local script":"testMouseup1(togFormViewerEvent);",
    "aaction mousemove local script":"testMousemove1(togFormViewerEvent);",
    "aaction mouseenter local script":"testMouseenter1(togFormViewerEvent);",
    "aaction mouseleave local script":"testMouseleave1(togFormViewerEvent);",
    "aaction keypress local script":"testKeypress1(togFormViewerEvent);",
    "aaction keyup local script":"testKeyup1(togFormViewerEvent);",
    "aaction keydown local script":"testKeydown1(togFormViewerEvent);",
    "Aaction input local script":"testInput1(togFormViewerEvent);",
    "Aaction prevPage local script": "testPrevpage1(togFormViewerEvent);",
    "Aaction nextPage local script": "testNextpage1(togFormViewerEvent);",
    "Aaction componentError local script": "testComponenterror1(togFormViewerEvent);",
    "Aaction beforeprint local script":"testBeforeprint1(togFormViewerEvent);",
    "Aaction afterprint local script":"testAfterprint1(togFormViewerEvent);",
    "Aaction resize local script":"testResize2(togFormViewerEvent);",
    "Aaction select local script":"testSelect1(togFormViewerEvent);",
    "Aaction contextMenu local script":"testContextmenu1(togFormViewerEvent);",
    "Aaction wheel local script":"testWheel1(togFormViewerEvent);",
    "Aaction cut local script":"testCut1(togFormViewerEvent);",
    "Aaction copy local script":"testCopy1(togFormViewerEvent);",
    "Aaction paste local script":"testPaste1(togFormViewerEvent);",
    "action scroll local script":"testScroll1(togFormViewerEvent);",
    "aaction click":"Form('{formname}/{formversion}')/Click",
    "aaction input":"Form('{formname}/{formversion}')/Input",
    "aaction beforeprint":"Form('{formname}/{formversion}')/BeforePrint",
    "aaction afterprint":"Form('{formname}/{formversion}')/AfterPrint",
    "aaction resize":"Form('{formname}/{formversion}')/Resize",
    "aaction select":"Form('{formname}/{formversion}')/Select",
    "aaction contextMenu":"Form('{formname}/{formversion}')/ContextMenu",
    "aaction wheel":"Form('{formname}/{formversion}')/Wheel",
    "aaction cut":"Form('{formname}/{formversion}')/Cut",
    "aaction copy":"Form('{formname}/{formversion}')/Copy",
    "aaction paste":"Form('{formname}/{formversion}')/Paste",
    "aaction scroll":"Form('{formname}/{formversion}')/Scroll",
    "formtitle": "Calculate 2 numbers",
    "acalc_api_path": "Calculation('{calcname}/{calcversion}')/Calculate",
    "formhelp": "<p>Ovdje se nalazi usporedna analiza ponuda za kasko osiguranje prema parametrima kao &scaron;to su iznos financiranja, valuta i vrsta leasinga.<br />\n<br />\nUspoređena su osiguravajuća dru&scaron;tva Uniqa osiguranje i Wiener osiguranje VIG i iskazane su premije osiguranja.<br />\n<br />\nUkoliko želite tiskani primjerak ponude, možete ga dobiti pritiskom na.</p>\n",
    "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
    "elearningimagelink": "../logos/elearn.png",
    "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers",
    "processimagelink": "../logos/process.png",
    "loadingScript1": "TogFormViewer.loadData('../data/data.json.js');TogFormViewer.calculate('../calc/calc_aplusbintoc.js');",
    "disableActionSpinner":"true"
    }   
};