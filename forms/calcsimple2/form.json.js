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
            "action change local script":""
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
            "action change local script":"testChange2();",
            "action change":""
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
            "action search local script":"testSearch2();",
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
            "action": "Form('{formname}/{formversion}')/Addition"
        },
        "event": "Add",
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
    "action local script":"test3();",
    "action change local script":"testChange1();",
    "action focus local script":"testFocus1();",
    "action blur local script":"testBlur1();",
    "action search local script":"testSearch1();",
    "action showDropdown local script":"testShowDropdown1();",
    "formtitle": "Calculate 2 numbers",
    "formhelp": "<p>Ovdje se nalazi usporedna analiza ponuda za kasko osiguranje prema parametrima kao &scaron;to su iznos financiranja, valuta i vrsta leasinga.<br />\n<br />\nUspoređena su osiguravajuća dru&scaron;tva Uniqa osiguranje i Wiener osiguranje VIG i iskazane su premije osiguranja.<br />\n<br />\nUkoliko želite tiskani primjerak ponude, možete ga dobiti pritiskom na.</p>\n",
    "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
    "elearningimagelink": "../logos/elearn.png",
    "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers",
    "processimagelink": "../logos/process.png",
    "loadingScript1": "TogFormViewer.loadData('../data/data.json.js');TogFormViewer.calculate('../calc/calc_aplusbintoc.js');",
    "disableActionSpinner":true
    }   
};