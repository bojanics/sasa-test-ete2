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
		"defaultValue": "5",
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
		"defaultValue": "3",
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
        "inputType": "text",
        "inputMask": "",
        "label": "Info 1",
        "key": "info1",
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
            
        }
    },
    {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Info 2",
        "key": "info2",
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
            
        }
    },
	{
		"autofocus": false,
		"input": true,
		"tree": true,
		"components": [{
			"autofocus": false,
			"input": true,
			"inputType": "checkbox",
			"tableView": true,
			"label": "dataGridCheckboxField",
			"dataGridLabel": false,
			"key": "dataGridCheckboxField",
			"defaultValue": false,
			"protected": false,
			"persistent": true,
			"hidden": false,
			"name": "",
			"value": "",
			"clearOnHide": true,
			"validate": {
				"required": false
			},
			"type": "checkbox",
			"labelPosition": "right",
			"inDataGrid": true,
			"hideLabel": true,
			"tags": [],
			"conditional": {
				"show": "",
				"when": null,
				"eq": ""
			},
			"properties": {
				
			}
		},
		{
			"autofocus": false,
			"input": true,
			"tableView": true,
			"inputType": "text",
			"inputMask": "",
			"label": "Text",
			"key": "dataGridText",
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
				
			}
		},
		{
			"autofocus": false,
			"input": true,
			"tableView": true,
			"inputType": "number",
			"label": "Number",
			"key": "dataGridNumber",
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
			"inDataGrid": true,
			"labelPosition": "top",
			"tags": [],
			"conditional": {
				"show": "",
				"when": null,
				"eq": ""
			},
			"properties": {
				
			}
		}],
		"tableView": true,
		"label": "Data Grid",
		"key": "dataGrid",
		"protected": false,
		"persistent": true,
		"hidden": false,
		"clearOnHide": true,
		"type": "datagrid",
		"addAnotherPosition": "bottom",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
		"isNew": false
	},
{
		"input": true,
		"tree": true,
		"components": [{
			"autofocus": false,
			"input": true,
			"inputType": "checkbox",
			"tableView": true,
			"label": "containerCheckboxField",
			"dataGridLabel": false,
			"key": "containerCheckboxField",
			"defaultValue": false,
			"protected": false,
			"persistent": true,
			"hidden": false,
			"name": "",
			"value": "",
			"clearOnHide": true,
			"validate": {
				"required": false
			},
			"type": "checkbox",
			"labelPosition": "right",
			"hideLabel": true,
			"tags": [],
			"conditional": {
				"show": "",
				"when": null,
				"eq": ""
			},
			"properties": {
				
			}
		},
		{
			"autofocus": false,
			"input": true,
			"tableView": true,
			"inputType": "text",
			"inputMask": "",
			"label": "Text",
			"key": "containerText",
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
			"labelPosition": "top",
			"tags": [],
			"properties": {
				
			}
		},
		{
			"autofocus": false,
			"input": true,
			"tableView": true,
			"inputType": "number",
			"label": "Number",
			"key": "containerNumber",
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
				
			}
		}],
		"tableView": true,
		"label": "container",
		"key": "container",
		"protected": false,
		"persistent": true,
		"clearOnHide": true,
		"type": "container",
		"labelPosition": "top",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
		"hideLabel": true
	},    
	{
		"autofocus": false,
		"input": true,
		"label": "Reset form",
		"tableView": false,
		"key": "resetform",
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
      "custom": "formioForm.submission={'data':{'a':44,'c':55}};"
	},    
	{
		"autofocus": false,
		"input": true,
		"label": "Load form",
		"tableView": false,
		"key": "loadform",
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
      "custom": "TogFormViewer.loadForm('calcsimple',{'a':3,'b':5});"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "Load data",
		"tableView": false,
		"key": "loaddata",
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
      "custom": "TogFormViewer.loadData('../data/data.json.js');"
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
		"label": "Show data (plain XML)",
		"tableView": false,
		"key": "showdata2",
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
      "custom": "TogFormViewer.showDataXML('showdatawindow');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "Show appInfo",
		"tableView": false,
		"key": "showappinfo",
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
      "custom": "console.log(JSON.stringify(TogFormViewer.getAppInfo()));"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "Show data (XML with xsl (pre)transformation)",
		"tableView": false,
		"key": "showdata3",
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
      "custom": "TogFormViewer.showDataXML('showdatawindow','../xslt/defaultPre.xsl.js');"
	}],
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
	"title": "Show data",
	"display": "form",
	"settings": {
		
	},
	"name": "add2Numbers",
	"path": "add2numbers",
	"project": "599d5201a0434200072250b3",
	"modified": "2018-03-30T10:28:25.934Z",
	"machineName": "ewhyjxtmcncdriz:add2Numbers",
   "properties": {
    "formtitle": "Show data example",
    "formhelp": "<p>Ovdje se nalazi usporedna analiza ponuda za kasko osiguranje prema parametrima kao &scaron;to su iznos financiranja, valuta i vrsta leasinga.<br />\n<br />\nUspoređena su osiguravajuća dru&scaron;tva Uniqa osiguranje i Wiener osiguranje VIG i iskazane su premije osiguranja.<br />\n<br />\nUkoliko želite tiskani primjerak ponude, možete ga dobiti pritiskom na.</p>\n",
    "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
    "elearningimagelink": "../logos/elearn.png",
    "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers",
    "processimagelink": "../logos/process.png",
    "loadingScriptS": "alert('ssa');",
    "loadingScript2": "alert('ssa');TogFormViewer.loadData('../data/datasmall.json.js');TogFormViewer.calculate('../calc/calc_v12abc.js');",
    "loadingScript3": "TogFormViewer.loadData('../data/datasmall.json.js');",
    "loadingScript4": "TogFormViewer.loadData('../data/datagrid.json.js');TogFormViewer.calculate('../calc/calc_v12abc.js');",
    "loadingScript": "TogFormViewer.loadData('../data/twfdata.json.js');",
  }   
};