var formObj={
	"type": "form",
	"tags": [],
	"owner": "599d5130a0434200072250ab",
	"components": [{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"label": "MyFile",
		"key": "myFile",
		"image": false,
		"imageSize": "200",
		"placeholder": "",
		"multiple": false,
		"defaultValue": "",
		"protected": false,
		"persistent": true,
		"hidden": false,
		"clearOnHide": true,
		"filePattern": "*",
		"fileMinSize": "0KB",
		"fileMaxSize": "1GB",
		"type": "file",
		"labelPosition": "top",
		"tags": [],
		"conditional": {
			"show": "",
			"when": null,
			"eq": ""
		},
		"properties": {
			
		},
		"storage": "base64"
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
		"label": "Open file from Base64 url",
		"tableView": false,
		"key": "openfilefrombase64url",
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
      "custom": "window.open(formioForm.submission.data['myFile'][0].url);"
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
      "custom": "TogFormViewer.loadForm('calcsimple',{'a':13,'b':15});"
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
      "custom": "console.log(JSON.stringify(TogFormViewer.getAppInfo(),null,2));"
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
	"created": "2018-05-17T14:09:29.751Z",
	"_id": "5afd8d193d9869084433f28e",
	"title": "uploadfile",
	"display": "form",
	"settings": {
		
	},
	"name": "uploadfile",
	"path": "uploadfile",
	"project": "599d5201a0434200072250b3",
	"modified": "2018-05-17T14:13:14.102Z",
	"machineName": "ewhyjxtmcncdriz:uploadfile"
};