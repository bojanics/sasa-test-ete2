var formObj = {
  "display": "form",
  "components": [
    {
      "label": "Show Select",
      "shortcut": "",
      "mask": false,
      "type": "checkbox",
      "input": true,
      "key": "showSelect"
    },
    {
      "label": "Select",
      "mask": false,
      "type": "select",
      "input": true,
      "key": "select",
      "autofocus": true,
      "data": {
        "values": [
          {
            "label": "Value A",
            "value": "valueA"
          },
          {
            "label": "Value B",
            "value": "valueB"
          },
          {
            "label": "Value C",
            "value": "valueC"
          }
        ]
      },
      "defaultValue": "valueB",
      "valueProperty": "value",
      "conditional": {
        "show": true,
        "when": "showSelect",
        "eq": "true",
        "json": ""
      },
      "customConditional": ""
    },
    {
      "type": "button",
      "label": "Submit",
      "key": "submit",
      "disableOnInvalid": true,
      "theme": "primary",
      "input": true
    }
  ],
  "properties": {},
  "title": "",
  "name": ""
};