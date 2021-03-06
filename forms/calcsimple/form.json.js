var formObj={
	"type": "form",
	"tags": [],
	"owner": "599d5130a0434200072250ab",
	"components": [{
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
			"custom": "console.log('cva');valid=true;"
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
		"lockKey": true
	},
{
                              "autofocus": false,
                              "input": true,
                              "tableView": true,
                              "label": "Versicherungssumme Strafrechtsschutz (EUR)",
                              "key": "sum_insured_srs",
                              "placeholder": "Bitte auswählen",
                              "data": {
                                "values": [
                                  {
                                    "value": "VS500000",
                                    "label": "€ 500.000,-",
                                    "$$hashKey": "object:6339"
                                  },
                                  {
                                    "value": "VS1000000",
                                    "label": "€ 1.000.000,-",
                                    "$$hashKey": "object:6340"
                                  }
                                ],
                                "json": "",
                                "url": "",
                                "resource": "",
                                "custom": ""
                              },
                              "dataSrc": "values",
                              "valueProperty": "",
                              "defaultValue": "",
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
                              "properties": {},
                              "tooltip": "Bitte die Höhe der gewünschten Versicheurngssumme auswählen",
                              "description": "z.B.: 1.000.000,-",
                              "lockKey": true,
                              "$$hashKey": "object:6299"
                            }
    ,	{
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
	},	{
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
      "custom": "TogFormViewer.loadForm('fileupload',{'a':33,'b':55});"
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
		"label": "Load form calcsimple2",
		"tableView": false,
		"key": "loadformcalcsimple2",
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
      "custom": "TogFormViewer.loadForm('calcsimple2',{'a':3333,'b':5555});"
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
	"_id": "5abe0268fad38b108803fb43",
	"title": "Calculate 2 numbers",
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
    "formtitle": "Calculate 2 numbers",
    "formhelp": "<p>Ovdje se nalazi usporedna analiza ponuda za kasko osiguranje prema parametrima kao &scaron;to su iznos financiranja, valuta i vrsta leasinga.<br />\n<br />\nUspoređena su osiguravajuća dru&scaron;tva Uniqa osiguranje i Wiener osiguranje VIG i iskazane su premije osiguranja.<br />\n<br />\nUkoliko želite tiskani primjerak ponude, možete ga dobiti pritiskom na.</p>\n",
    "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
    "elearningimagelink": "../logos/elearn.png",
    "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers",
    "processimagelink": "../logos/process.png",
    "loadingScript1": "TogFormViewer.loadData('../data/data.json.js');TogFormViewer.calculate('../calc/calc_aplusbintoc.js');",    
  }   
};