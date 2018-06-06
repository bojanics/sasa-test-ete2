var formObj={
	"type": "form",
	"tags": [],
	"owner": "599d5130a0434200072250ab",
	"components": [{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"label": "Select with URL",
		"key": "selectwithUrl",
		"placeholder": "",
		"data": {
			"values": [{
				"value": "",
				"label": ""
			}],
			"json": "",
			"url": "https://sasa-test-misc.azurewebsites.net/api/generateCustomSelection",
			"resource": "",
			"custom": "",
			"headers": [{
				"value": "myauthkey",
				"key": "Authorization"
			}]
		},
		"dataSrc": "url",
		"valueProperty": "value",
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
			
		},
		"selectValues": "values",
		"searchField": "sasa"
	},
	{
		"autofocus": false,
		"input": true,
		"tableView": true,
		"label": "Select custom",
		"key": "selectcustom",
		"placeholder": "",
		"data": {
			"values": [{
				"value": "",
				"label": ""
			}],
			"json": "",
			"url": "",
			"resource": "",
			"custom1": "values = [\n  {\n    \"value\": \"outPatient\",\n    \"label\": \"Out Patient\"\n  },\n  {\n    \"value\": \"homeCare\",\n    \"label\": \"Home Care\"\n  },\n  {\n    \"value\": \"ambulance\",\n    \"label\": \"Ambulance\"\n  },\n  {\n    \"value\": \"injury\",\n    \"label\": \"Injury\"\n  },\n  {\n    \"value\": \"dental\",\n    \"label\": \"Dental\"\n  },\n  {\n    \"value\": \"inPatient\",\n    \"label\": \"In Patient\"\n  },\n  {\n    \"value\": \"travel\",\n    \"label\": \"Travel\"\n  },\n  {\n    \"value\": \"exclusion\",\n    \"label\": \"Exclusion\"\n  }\n];console.log('values are set for custom script');",
            "custom": "values = TogFormViewer.getCustomValues('sss');console.log('values are set for TogFormViewer custom script');",
			"headers": [{
				"value": "",
				"key": ""
			}]
		},
		"dataSrc": "custom",
		"valueProperty": "value",
		"defaultValue": "sonja",
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
            "searchAction":"doSomethingCustom",
            "searchScript":"mySearchScriptCustom"
		},
		"clearOnRefresh": false
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
            "searchAction":"doSomethingPredefined",
            "searchScript":"mySearchScriptPredefined"
		}
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
		"lockKey": true,
		"custom": "TogFormViewer.showData();"
	}],
	"revisions": "",
	"_vid": 0,
	"_id": "5b0ff18ccf913f7d91cbbfd1",
	"title": "selecttest",
	"display": "form",
	"access": [{
		"roles": ["599d5201a0434200072250b4",
		"599d5201a0434200072250b5",
		"599d5201a0434200072250b6"],
		"type": "read_all"
	}],
	"submissionAccess": [],
	"settings": {
		
	},
	"name": "selecttest",
	"path": "selecttest",
	"project": "599d5201a0434200072250b3",
	"created": "2018-05-31T12:58:52.354Z",
	"modified": "2018-06-01T05:24:02.283Z",
	"machineName": "ewhyjxtmcncdriz:selecttest"
};