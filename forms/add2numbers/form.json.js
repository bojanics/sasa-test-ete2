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
		"custom": "function addtwonumbersnoadal(token,url,formdata,additionalConfiguration) {\n   var settings = {\n     \"crossDomain\": true,     \n     \"url\": url,\n     \"timeout\":30000,\n     \"method\": \"POST\",\n     \"headers\": {\n       \"content-type\": \"application/json\",\n       \"authorization\": \"Bearer \"+token,\n       \"cache-control\": \"no-cache\"\n     },\n     \"data\": JSON.stringify(formdata),\n     \"dataType\": 'json',\n     \"contentType\": 'application/json'                          \n   }\n\n   $.ajax(settings).done(function (data,textStatus,request) {\n      var datamerged = $.extend(formdata,data);\n      console.log('DATAMERGED='+JSON.stringify(datamerged));   \n      form.submission = datamerged;\n   }).fail(function (err, textStatus, errorThrown) {\n      console.log(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n      alert(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n   });\n}\n\nfunction handleADALError() {\n   alert('ADAL error happened');\n}\n\nfunction addtwonumbers(url,formdata){  executeAjaxRequestWithAdalLogic(ADAL.config.clientId,addtwonumbersnoadal,url,formdata,{},handleADALError);\n}\n\nif (typeof ADAL!== 'undefined') {\n   addtwonumbers(form.submission.data['url'],{\"data\":form.submission.data});\n} else {\n   alert(\"This action can't be executed from the portal - header application with ADAL is required!\");\n}"
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
	"modified": "2018-03-30T13:16:07.775Z",
	"machineName": "ewhyjxtmcncdriz:add2Numbers"
};