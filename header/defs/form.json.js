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
      "customs": "TogFormViewer.calculate('https://sasa-formio-pdf.azurewebsites.net/calc/calc_v12.js');TogFormViewer.sendReceiveFormData('Add');",
      "custom2": "TogFormViewer.calculate('../calc/calc_v12ab.js');",
      "custom3": "TogFormViewer.openFile('../docs/Leave#Request.docx','mypdf.docx');",
      "custom": "TogFormViewer.downloadFile('../docs/Leave Request.txt','myfile.txt');",
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
    "customScript": "alert('sasa');",
  }   
};