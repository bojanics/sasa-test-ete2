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
      "custom": " function handleSuccess(token,url,formdata,additionalConfiguration,data,textStatus,request) {\r\n  var datamerged = $.extend(formdata.data,data.data);\r\n  console.log(\'DATAMERGED=\'+JSON.stringify(datamerged));   \r\n  form.submission = {\'data\':datamerged}; \r\n}\r\n\r\nfunction handleFailure(token,url,formdata,additionalConfiguration,err,textStatus,errorThrown) {\r\n  console.log(\"AJAX REQUEST FAILED:\"+err.toString()+\',textStatus=\'+textStatus+\', errorThrown=\'+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\r\n  alert(\"AJAX REQUEST FAILED:\"+err.toString()+\',textStatus=\'+textStatus+\', errorThrown=\'+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\r\n}\r\n\r\nfunction handleADALError() {\r\n  alert(\'ADAL error happened\');\r\n}\r\n\r\nfunction addtwonumbers(url,formdata){\r\n  executeAjaxRequestWithAdalLogic(ADAL.config.clientId, executeAjaxRequest, url, formdata, {}, handleSuccess, handleFailure, handleADALError);\r\n}\r\n\r\n\/\/ HERE WE START\r\nif (typeof ADAL!== \'undefined\' && ADAL!=null) {\r\n   addtwonumbers(form.submission.data[\'url\'],{\"data\":form.submission.data}); \r\n} else {\r\n   alert(\"To execute this action, user must be authenticated by ADAL!\");\r\n} \r\n"
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
   "machineName": "ewhyjxtmcncdriz:add2Numbers"
};
