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
		"lockKey": true,
		"isNew": false
	},
	{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"inputType": "number",
		"label": "Number x",
		"key": "x",
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
		"label": "Number y",
		"key": "y",
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
		"disabled": true,
		"isNew": false
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
      "custom": "TogFormViewer.loadForm('shwdata',{'a':3,'b':5});"
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
      "custom": "formioForm.submission={'data':{}};"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "Calculate(local)",
		"tableView": false,
		"key": "calculate1",
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
      "custom": "TogFormViewer.calculate('../calc/calc_v12ab.js');",
	},
	{
		"autofocus": false,
		"input": true,
		"label": "Calculate(remote)",
		"tableView": false,
		"key": "calculate2",
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
      "custom": "TogFormViewer.calculate('https://sasa-test-misc-wap.azurewebsites.net/calc/calc_amulbintoc.js');",
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
      "custom": "TogFormViewer.loadData('../data/datasmall.json.js');",
      "custom2": "TogFormViewer.loadData('https://sasa-formio-pdf.azurewebsites.net/data/data.json.js');"
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
		"label": "show data (JSON window)",
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
      "custom": "TogFormViewer.showData('jsonsdwin');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "show data (XML plain)",
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
      "custom": "TogFormViewer.showDataXML('xmlsdwin');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "show data (XML pre xsl)",
		"tableView": false,
		"key": "showdata4",
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
      "custom": "TogFormViewer.showDataXML('xmlsdwin','../xslt/defaultPre.xsl.js');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "show data (XML pre xsl remote)",
		"tableView": false,
		"key": "showdata5",
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
      "custom": "TogFormViewer.showDataXML('xmlsdwin','http://sasa-formio-pdf.azurewebsites.net/xsl/defaultPre.xsl.js');"
	},    
	{
		"autofocus": false,
		"input": true,
		"label": "open pdf",
		"tableView": false,
		"key": "openpdf",
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
      "custom": "TogFormViewer.openFile('../docs/Leave#Request.pdf','myfile.pdf');",
      "custom2": "TogFormViewer.openFile('http://sasaboy-asus:8080/sleasing.pdf','myfile.pdf');",
      "custom3": "TogFormViewer.openFile('http://sasaboy-asus:8080/sleasing.pdf');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "open txt",
		"tableView": false,
		"key": "opentxt",
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
      "custom": "TogFormViewer.openFile(escape('../docs/Leave#Request.txt'),'myfile.txt');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "open jpg",
		"tableView": false,
		"key": "openjpg",
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
      "custom": "TogFormViewer.openFile('../docs/Leave Request.jpg','myfile.jpg');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "open zip",
		"tableView": false,
		"key": "openzip",
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
      "custom": "TogFormViewer.openFile('../docs/Leave request.zip','myfile.zip');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "download pdf",
		"tableView": false,
		"key": "downloadpdf",
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
      "custom" : "TogFormViewer.downloadFile(escape('../docs/Leave#request.pdf'));"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "download txt",
		"tableView": false,
		"key": "downloadtxt",
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
      "custom" : "TogFormViewer.downloadFile(escape('../docs/Leave#Request.txt'),'mytxtfile.txt');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "download jpg",
		"tableView": false,
		"key": "downloadjpg",
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
      "custom" : "TogFormViewer.downloadFile(escape('../docs/Leave#Request.jpg'),'myjpgfile');",
      "custom2" : "TogFormViewer.downloadFile('../docs/greco-erste.png','myfile.png');",
      "custom3" : "TogFormViewer.downloadFile('http://sasa-formio-pdf.azurewebsites.net/img/greco-erste.png','myfile.png');",
      "custom4" : "TogFormViewer.downloadFile('http://sasaboy-asus:8080/xsl/images/VMG_Logo.jpg','myfile.jpg');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "download zip",
		"tableView": false,
		"key": "downloadzip",
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
      "custom" : "TogFormViewer.downloadFile('../docs/Leave request.zip','myzipfile.zip');"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "download log",
		"tableView": false,
		"key": "downloadlog",
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
      "custom" : "TogFormViewer.downloadFile(escape('../docs/Leave#request.rog'),'myfile.rog');"
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
      "custom": "TogFormViewer.sendReceiveFormData('Add');",
      "custom0": "TogFormViewer.calculate('https://sasa-formio-pdf.azurewebsites.net/calc/calc_v12.js');TogFormViewer.sendReceiveFormData('Add');",
      "custom1": "TogFormViewer.calculate('https://sasa-formio-pdf.azurewebsites.net/calc/calc_v12.js');",
      "custom2": "TogFormViewer.calculate('../calc/calc_v12ab.js');",
      "custom3": "TogFormViewer.openFile(escape('../docs/Leave#Request.pdf'),'mypdf.pdf');",
      "custom4" : "TogFormViewer.downloadFile('../docs/Leave Request.zip','myfile.zip');",
      "custom5": "TogFormViewer.openFile('http://sasaboy-asus:8080/sleasing.pdf','sasa.pdf')"
	},
	{
		"autofocus": false,
		"input": true,
		"label": "Add(GET)",
		"tableView": false,
		"key": "submit_get",
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
      "custom": "TogFormViewer.calculate('https://sasaboy-asus:8444/calc/calc_v12ab.js')"
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
	"modified": "2018-03-30T10:28:25.934Z",
	"machineName": "ewhyjxtmcncdriz:add2Numbers",
   "properties": {
    "formtitle": "Ponuda osiguranja",
    "formhelp": "<p>Ovdje se nalazi usporedna analiza ponuda za kasko osiguranje prema parametrima kao &scaron;to su iznos financiranja, valuta i vrsta leasinga.<br />\n<br />\nUspoređena su osiguravajuća dru&scaron;tva Uniqa osiguranje i Wiener osiguranje VIG i iskazane su premije osiguranja.<br />\n<br />\nUkoliko želite tiskani primjerak ponude, možete ga dobiti pritiskom na.</p>\n",
    "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
    "elearningimagelink": "../logos/elearn.png",
    "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers",
    "processimagelink": "../logos/process.png",
    "loadingScriptS": "alert('ssa');",
    "loadingScript2": "alert('ssa');TogFormViewer.loadData('../data/datasmall.json.js');TogFormViewer.calculate('../calc/calc_v12abc.js');",
    "loadingScript3": "TogFormViewer.loadData('../data/datasmall.json.js');",
    "loadingScript4": "TogFormViewer.loadData('../data/datagrid.json.js');TogFormViewer.calculate('../calc/calc_v12abc.js');",    
  }   
};