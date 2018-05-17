var formObj={
	"type": "form",
	"tags": [],
	"owner": "599d5130a0434200072250ab",
	"components": [{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"inputType": "text",
		"inputMask": "",
		"label": "API for adding 2 numbers",
		"key": "url",
		"placeholder": "",
		"prefix": "",
		"suffix": "",
		"multiple": false,
		"defaultValue": "https://sasa-test-ete-fnc.azurewebsites.net/Add",
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
			
		},
		"lockKey": true
	},
	{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"inputType": "number",
		"label": "Number 1",
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
			
		},
		"lockKey": true
	},
	{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"inputType": "number",
		"label": "Number 2",
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
		"lockKey": true
	},
	{
		"autofocus": false,
		"input": true,
		"label": "load data1",
		"tableView": false,
		"key": "loaddata1",
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
      "custom1": "TogFormViewer.loadData('../data/datasmall.json.js');",
      "custom2": "TogFormViewer.loadData('https://sasa-formio-pdf.azurewebsites.net/data/data.json.js');",
      "custom": "TogFormViewer.loadData('../data/datagrid.json.js');",
	},
	{
		"autofocus": false,
		"input": true,
		"label": "Add",
		"tableView": false,
		"key": "submit",
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
		"custom": "console.log('FSDG1='+JSON.stringify(formioForm.submission.data));TogFormViewer.calculate('https://sasa-test-misc-wap.azurewebsites.net/calc/calc_amulbintocwithotherchanges.js')"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "Add (Get)",
		"tableView": false,
		"key": "addGet",
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
		"custom": "console.log('FSDG2='+JSON.stringify(formioForm.submission.data));TogFormViewer.calculate('../calc/calc_aplusbintoc.js')"
	},
	{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"inputType": "number",
		"label": "Result",
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
		"disabled": true
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
			
		}
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
	"title": "Add2Numbers",
	"display": "form",
	"settings": {
		
	},
	"name": "add2Numbers",
	"path": "add2numbers",
	"project": "599d5201a0434200072250b3",
	"modified": "2018-04-24T08:37:23.044Z",
	"machineName": "ewhyjxtmcncdriz:add2Numbers"
};