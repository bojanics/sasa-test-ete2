var formObj={
  "type": "form",
  "tags": [],
  "owner": "599d5130a0434200072250ab",
  "components": [{
    "key": "content",
    "label": "Content",
    "input": false,
    "tag": "img",
    "attrs": [{
      "value": "./outlook.jpg",
      "attr": "src"
    }],
    "className": "",
    "content": "",
    "type": "htmlelement",
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
    "key": "content2",
    "label": "Content",
    "input": false,
    "tag": "span",
    "attrs": [{
      "value": "",
      "attr": ""
    }],
    "className": "",
    "content": "&nbsp;",
    "type": "htmlelement",
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
    "clearOnHide": false,
    "label": "Columns",
    "input": false,
    "tableView": false,
    "key": "columns",
    "columns": [{
      "components": [{
        "autofocus": false,
        "input": true,
        "label": "Send",
        "tableView": false,
        "key": "columnsSend",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": true,
        "action": "custom",
        "disableOnInvalid": false,
        "theme": "default",
        "type": "button",
        "tags": [],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {
          
        },
        "custom": "alert('Your email has been sent!')"
      }],
      "width": 1,
      "offset": 0,
      "push": 0,
      "pull": 0
    },
    {
      "components": [{
        "clearOnHide": false,
        "label": "Columns",
        "input": false,
        "tableView": false,
        "key": "columnsColumns",
        "columns": [{
          "components": [{
            "autofocus": false,
            "input": true,
            "label": "To...",
            "tableView": false,
            "key": "toButton",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": true,
            "action": "custom",
            "disableOnInvalid": false,
            "theme": "default",
            "type": "button",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "custom": "alert('Select To address');",
            "lockKey": true,
            "shortcut": "T"
          },
          {
            "autofocus": false,
            "input": true,
            "label": "Cc...",
            "tableView": false,
            "key": "ccButton",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": true,
            "action": "custom",
            "disableOnInvalid": false,
            "theme": "default",
            "type": "button",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "shortcut": "C",
            "custom": "alert('Select Cc address');",
            "lockKey": true
          },
          {
            "autofocus": false,
            "input": true,
            "label": "Bcc...",
            "tableView": false,
            "key": "bccButton",
            "size": "md",
            "leftIcon": "",
            "rightIcon": "",
            "block": true,
            "action": "custom",
            "disableOnInvalid": false,
            "theme": "default",
            "type": "button",
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            },
            "shortcut": "B",
            "custom": "alert('Select Bcc address');",
            "lockKey": true
          },
          {
            "key": "columnsColumnsContent",
            "label": "Content",
            "input": false,
            "tag": "span",
            "attrs": [{
              "value": "",
              "attr": ""
            }],
            "className": "",
            "content": "Subject",
            "type": "htmlelement",
            "hideLabel": true,
            "tags": [],
            "conditional": {
              "show": "",
              "when": null,
              "eq": ""
            },
            "properties": {
              
            }
          }],
          "width": 1,
          "offset": 0,
          "push": 0,
          "pull": 0
        },
        {
          "components": [{
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "columnsColumnsText",
            "key": "toText",
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
              
            },
            "lockKey": true,
            "hideLabel": true
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "columnsColumnsText2",
            "key": "ccText",
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
              
            },
            "lockKey": true,
            "hideLabel": true
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "columnsColumnsText3",
            "key": "bccText",
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
              
            },
            "lockKey": true,
            "hideLabel": true
          },
          {
            "autofocus": false,
            "input": true,
            "tableView": true,
            "inputType": "text",
            "inputMask": "",
            "label": "Text",
            "key": "subjectText",
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
              
            },
            "hideLabel": true,
            "lockKey": true
          }],
          "width": 11,
          "offset": 0,
          "push": 0,
          "pull": 0
        }],
        "type": "columns",
        "hideLabel": true,
        "tags": [],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {
          
        }
      }],
      "width": 11,
      "offset": 0,
      "push": 0,
      "pull": 0
    }],
    "type": "columns",
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
    "label": "Text Area",
    "key": "bodyText",
    "placeholder": "",
    "prefix": "",
    "suffix": "",
    "rows": 20,
    "multiple": false,
    "defaultValue": "",
    "protected": false,
    "persistent": true,
    "hidden": false,
    "wysiwyg": false,
    "clearOnHide": true,
    "spellcheck": true,
    "validate": {
      "required": false,
      "minLength": "",
      "maxLength": "",
      "pattern": "",
      "custom": ""
    },
    "type": "textarea",
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
    "hideLabel": true
  }],
  "revisions": "",
  "_vid": 0,
  "_id": "5b0e4eb73425b3f050886608",
  "title": "outlook",
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
  "name": "outlook",
  "path": "outlook",
  "project": "599d5201a0434200072250b3",
  "created": "2018-05-30T07:11:51.264Z",
  "modified": "2018-05-31T07:12:29.252Z",
  "machineName": "ewhyjxtmcncdriz:outlook"
};