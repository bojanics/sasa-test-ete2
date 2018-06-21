var formObj = {
  "type": "form",
  "tags": [],
  "components": [
    {
      "clearOnHide": false,
      "label": "Columns",
      "input": false,
      "tableView": false,
      "key": "columns",
      "columns": [
        {
          "components": [
	{
		"autofocus": false,
		"input": true,
		"label": "Add using executeCustomEvent",
		"tableView": false,
		"key": "addusingcexeccustev",
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
      "custom": "TogFormViewer.executeCustomAction('https://sasa-test-ete-fnc.azurewebsites.net/Add');"
	},
            {
              "autofocus": false,
              "input": true,
              "inputType": "checkbox",
              "tableView": true,
              "label": "Амбулаторно- поликлиническая помощь",
              "dataGridLabel": false,
              "key": "outPatientCheckBox",
              "defaultValue": false,
              "protected": false,
              "persistent": true,
              "hidden": false,
              "name": "",
              "value": "",
              "clearOnHide": false,
              "validate": {
                "required": false,
                "custom": ""
              },
              "type": "checkbox",
              "labelPosition": "right",
              "hideLabel": false,
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "properties": {},
              "tooltip": "",
              "lockKey": true,
              "customError": "Microsoft is not defined",
              "customConditional": "show = !appConfiguration.toggleMenu || TogFormViewer.FormioPlugIn.getProperty(\"jumpWidth\") < window.innerWidth || TogFormViewer.toggleMenuOpened",
              "$$hashKey": "object:4778"
            },
            {
              "autofocus": false,
              "input": true,
              "inputType": "checkbox",
              "tableView": true,
              "label": "Стоматологическое обслуживание",
              "dataGridLabel": false,
              "key": "dentistCheckBox",
              "defaultValue": false,
              "protected": false,
              "persistent": true,
              "hidden": false,
              "name": "",
              "value": "",
              "clearOnHide": false,
              "validate": {
                "required": false,
                "custom": ""
              },
              "type": "checkbox",
              "labelPosition": "right",
              "hideLabel": false,
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "properties": {},
              "tooltip": "",
              "customClass": "",
              "lockKey": true,
              "customError": "Microsoft is not defined",
              "customConditional": "show = !appConfiguration.toggleMenu || TogFormViewer.FormioPlugIn.getProperty(\"jumpWidth\") < window.innerWidth || TogFormViewer.toggleMenuOpened",
              "$$hashKey": "object:4779"
            },
            {
              "autofocus": false,
              "input": true,
              "inputType": "checkbox",
              "tableView": true,
              "label": "Госпитализация по плановым и экстренным показаниям",
              "dataGridLabel": false,
              "key": "inPatientCheckBox",
              "defaultValue": false,
              "protected": false,
              "persistent": true,
              "hidden": false,
              "name": "",
              "value": "",
              "clearOnHide": false,
              "validate": {
                "required": false,
                "custom": ""
              },
              "type": "checkbox",
              "labelPosition": "right",
              "hideLabel": false,
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "properties": {},
              "tooltip": "",
              "lockKey": true,
              "customError": "Microsoft is not defined",
              "customConditional": "show = !appConfiguration.toggleMenu || TogFormViewer.FormioPlugIn.getProperty(\"jumpWidth\") < window.innerWidth || TogFormViewer.toggleMenuOpened",
              "$$hashKey": "object:4780",
              "isNew": false
            },
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "label": "Расстояние",
              "key": "columns2Select",
              "placeholder": "",
              "data": {
                "values": [
                  {
                    "value": "5",
                    "label": "< 5км",
                    "$$hashKey": "object:483"
                  },
                  {
                    "value": "10",
                    "label": "< 10км",
                    "$$hashKey": "object:484"
                  },
                  {
                    "value": "15",
                    "label": "< 15км",
                    "$$hashKey": "object:485"
                  },
                  {
                    "value": "20",
                    "label": "< 20км",
                    "$$hashKey": "object:486"
                  },
                  {
                    "value": "больше",
                    "label": "> 20км",
                    "$$hashKey": "object:487"
                  }
                ],
                "json": "",
                "url": "",
                "resource": "",
                "custom": ""
              },
              "dataSrc": "values",
              "valueProperty": "",
              "defaultValue": "10",
              "refreshOn": "",
              "filter": "",
              "authenticate": false,
              "template": "<span>{{ item.label }}</span>",
              "multiple": false,
              "protected": false,
              "unique": false,
              "persistent": true,
              "hidden": false,
              "clearOnHide": false,
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
              "lockKey": true,
              "customError": "Microsoft is not defined",
              "hideLabel": true,
              "customConditional": "show = !appConfiguration.toggleMenu || TogFormViewer.FormioPlugIn.getProperty(\"jumpWidth\") < window.innerWidth || TogFormViewer.toggleMenuOpened",
              "$$hashKey": "object:4781"
            },
            {
              "key": "columnsContent3",
              "label": "Content",
              "input": false,
              "tag": "div",
              "attrs": [
                {
                  "value": "pushpinDetails",
                  "attr": "id"
                }
              ],
              "className": "",
              "content": "",
              "type": "htmlelement",
              "hideLabel": true,
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "properties": {},
              "lockKey": true,
              "customConditional": "show = !appConfiguration.toggleMenu || TogFormViewer.FormioPlugIn.getProperty(\"jumpWidth\") < window.innerWidth || TogFormViewer.toggleMenuOpened",
              "$$hashKey": "object:4782"
            }
          ],
          "width": 3,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "$$hashKey": "object:4772"
        },
        {
          "components": [
            {
              "autofocus": false,
              "input": true,
              "label": "Мое местонахождение",
              "tableView": false,
              "key": "columnsColumns2",
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
              "properties": {},
              "customClass": "web-hidden",
              "custom": "getCurrentLocation(function(position){ nativeLocation = true; setUserLocation(position.coords.latitude, position.coords.longitude);})",
              "$$hashKey": "object:1767"
            },
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "label": "Поиск /Найти",
              "key": "columnsSelect",
              "placeholder": "Поиск",
              "data": {
                "values": [
                  {
                    "value": "",
                    "label": "",
                    "$$hashKey": "object:4923"
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
              "clearOnHide": false,
              "validate": {
                "required": false,
                "custom": ""
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
                  "action search local script": "searchLocations(togFormViewerEvent);"
              },
              "customError": "Microsoft is not defined",
              "customClass": "",
              "customConditional": "show = !appConfiguration.toggleMenu || TogFormViewer.FormioPlugIn.getProperty(\"jumpWidth\") < window.innerWidth || !TogFormViewer.toggleMenuOpened",
              "$$hashKey": "object:4818"
            },
            {
              "autofocus": false,
              "input": true,
              "tableView": true,
              "label": "Поиск клиники/поиск медцентра",
              "key": "columnsSelect2",
              "placeholder": "Поиск",
              "data": {
                "values": [
                  {
                    "value": "",
                    "label": "",
                    "$$hashKey": "object:4925"
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
              "clearOnHide": false,
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
              "customConditional": "show = !appConfiguration.toggleMenu || TogFormViewer.FormioPlugIn.getProperty(\"jumpWidth\") < window.innerWidth || !TogFormViewer.toggleMenuOpened",
              "$$hashKey": "object:4819"
            },
            {
              "key": "columnsContent",
              "input": false,
              "html": "<div id=\"map\" style=\"width: 100%;\"></div>",
              "type": "content",
              "tags": [],
              "conditional": {
                "show": "",
                "when": null,
                "eq": ""
              },
              "properties": {},
              "label": "columnsContent",
              "hideLabel": true,
              "customConditional": "show = !appConfiguration.toggleMenu || TogFormViewer.FormioPlugIn.getProperty(\"jumpWidth\") < window.innerWidth || !TogFormViewer.toggleMenuOpened",
              "$$hashKey": "object:4820"
            }
          ],
          "width": 9,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "$$hashKey": "object:4773"
        }
      ],
      "type": "columns",
      "$$hashKey": "object:317",
      "hideLabel": true,
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "properties": {}
    },
    {
      "key": "content",
      "label": "Content",
      "input": false,
      "tag": "br",
      "attrs": [
        {
          "value": "",
          "attr": ""
        }
      ],
      "className": "",
      "content": "",
      "type": "htmlelement",
      "$$hashKey": "object:6484",
      "hideLabel": true,
      "tags": [],
      "conditional": {
        "show": "",
        "when": null,
        "eq": ""
      },
      "properties": {},
      "customConditional": "show = !appConfiguration.toggleMenu || TogFormViewer.FormioPlugIn.getProperty(\"jumpWidth\") < window.innerWidth || !TogFormViewer.toggleMenuOpened"
    }
  ],
  "title": "My Health Insurance",
  "display": "form",
  "name": "GRU-EBH",
  "path": "gih-dro",
  "page": 0,
  "properties": {
    "formtitle": "- Insurance",
    "formhelp": "<p>And here goes the help text of the form...</p>\n",
    "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
    "elearningimagelink": "../logos/elearn.png",
    "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers",
    "processimagelink": "../logos/process.png",
    "form width percent": "100",
    "map wrapper id": "map",
    "bing maps key": "AgR_N0SKJAbPaXKgZ2LxrvcWfC-4HtmyVCUVVqK8_90-3grweb9jCD_YLyub6gqp",
    "map center latitude": "55.756962",
    "map center longitude": "37.615009",
    "map zoom": "9",
    "map center pushpin": false,
    "map route info wrapper id": "routeInfo",
    "loadedScript": "loadScript(\"../sharedscripts/start.js\", function(){}); loadScript(\"../sharedscripts/favorites.js\", function(){});",
    "toggle menu": true,
    "atriggerResizeChange": true,
    "customScript": "",
    "userlangs":"",
    "ashowClientMenu": true,
    "amenus": "../nav/user/menus.json.js",
    "alangmenustop": "../nav/user/lang-menu-top.json.js",
    "alangmenusbottom": "../nav/user/lang-menu-bottom.json.js"
  }
};