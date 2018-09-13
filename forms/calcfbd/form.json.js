var formObj = {
  "type": "form",
  "tags": [],
  "owner": "599d5130a0434200072250ab",
  "components": [
    {
      "label": "Event MSG",
      "type": "textfield",
      "input": true,
      "key": "msg",
      "defaultValue": "sasa",
      "spellcheck": true,
      "conditional": {
        "show": ""
      },
      "inDataGrid": true,
      "tags": [],
      "properties": {
        "action change": "",
        "aaction change local script": ""
      },
      "inputFormat": "plain",
      "customDefaultValue": "value = data.a>32 ? \"je\" : \"nije\";",
      "acalculateValue": "value = data.a>32 ? \"je\" : \"nije\";"

    },
    {
      "label": "Number a",
      "autofocus": true,
      "mask": false,
      "type": "number",
      "input": true,
      "inputType": "number",
      "key": "a",
      "adefaultValue": 11,
      "validate": {
        "multiple": "",
        "custom": "valid = (input>=1 && input<=100) ? true : 'Must be between 1 and 100'"
      },
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {
        "autocalc": "fieldchange",
        "aaction focus local script": "testFocus2(togFormViewerEvent);",
        "aaction blur local script": "testBlur2(togFormViewerEvent);",
        "action change": "",
        "aaction click local script": "testClick2(togFormViewerEvent);",
        "aaction dblclick local script": "testDblClick2(togFormViewerEvent);",
        "aaction mouseover local script": "testMouseover2(togFormViewerEvent);",
        "aaction mousedown local script": "testMousedown2(togFormViewerEvent);",
        "aaction mouseout local script": "testMouseout2(togFormViewerEvent);",
        "aaction mouseup local script": "testMouseup2(togFormViewerEvent);",
        "aaction mousemove local script": "testMousemove2(togFormViewerEvent);",
        "aaction mouseenter local script": "testMouseenter2(togFormViewerEvent);",
        "aaction mouseleave local script": "testMouseleave2(togFormViewerEvent);",
        "aaction keypress local script": "testKeypress2(togFormViewerEvent);",
        "aaction keyup local script": "testKeyup2(togFormViewerEvent);",
        "aaction keydown local script": "testKeydown2(togFormViewerEvent);",
        "aaction input local script": "testInput2(togFormViewerEvent);",
        "aaction componentError local script": "testComponenterror2(togFormViewerEvent);",
        "aaction select local script": "testSelect2(togFormViewerEvent);",
        "aaction contextMenu local script": "testContextmenu2(togFormViewerEvent);",
        "aaction wheel local script": "testWheel2(togFormViewerEvent);",
        "aaction cut local script": "testCut2(togFormViewerEvent);",
        "aaction copy local script": "testCopy2(togFormViewerEvent);",
        "aaction paste local script": "testPaste2(togFormViewerEvent);",
        "aaction scroll local script": "testScroll2(togFormViewerEvent);",
        "aaction keyup": "Form('{formname}/{formversion}')/KeyUp",
        "aaction keydown": "Form('{formname}/{formversion}')/KeyDown",
        "aaction keypress": "Form('{formname}/{formversion}')/KeyPress",
        "aaction componentError": "Form('{formname}/{formversion}')/ComponentError",
        "aaction mousemove": "Form('{formname}/{formversion}')/MouseMove",
        "aaction mouseenter": "Form('{formname}/{formversion}')/MouseMove",
        "aaction mouseleave": "Form('{formname}/{formversion}')/MouseMove",
        "aaction mouseout": "Form('{formname}/{formversion}')/MouseOut",
        "aaction mouseover": "Form('{formname}/{formversion}')/MouseOver",
        "aaction select": "Form('{formname}/{formversion}')/Search",
        "aaction contextMenu": "Form('{formname}/{formversion}')/ContextMenu",
        "action wheel": "Form('{formname}/{formversion}')/Wheel",
        "aaction cut": "Form('{formname}/{formversion}')/Wheel",
        "aaction copy": "Form('{formname}/{formversion}')/Wheel",
        "aaction paste": "Form('{formname}/{formversion}')/Wheel",
        "aaction scroll": "Form('{formname}/{formversion}')/Wheel"
      },
      "lockKey": true
    },
    {
      "label": "Number b",
      "mask": false,
      "type": "number",
      "input": true,
      "inputType": "number",
      "key": "b",
      "validate": {
        "multiple": "",
        "custom": "valid = (input>=1 && input<=10) ? true : 'Must be between 1 and 10'"
      },
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {
        "autocalc": "fieldchange",
        "action change local script": "testChange2(togFormViewerEvent);"
      },
      "lockKey": true,
      "isNew": false,
      "customDefaultValue": "value = Math.floor(Math.random() * 10)"
    },
    {
      "label": "Result c",
      "mask": false,
      "disabled": true,
      "type": "number",
      "input": true,
      "inputType": "number",
      "key": "c",
      "validate": {
        "multiple": ""
      },
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "lockKey": true,
      "isNew": false,
      "acalculateValue": "value = data.a*data.b;"
    },
    {
      "input": true,
      "label": "Select predefined",
      "key": "selectpredefined",
      "data": {
        "values": []
      },
      "valueProperty": "value",
      "defaultValue": "outPatient",
      "type": "select",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {
        "action search local script": "testSearch2(togFormViewerEvent);"
      }
    },
    {
      "label": "Checkbox",
      "shortcut": "",
      "mask": false,
      "type": "checkbox",
      "input": true,
      "key": "checkbox",
      "defaultValue": true,
      "validate": {
        "unique": false,
        "customMessage": "",
        "json": ""
      },
      "conditional": {
        "show": "",
        "when": "",
        "json": ""
      },
      "properties": {},
      "tags": [],
      "logic": [],
      "customConditional": ""
    },
    {
      "optionsLabelPosition": "right",
      "values": [
        {
          "label": "r1",
          "value": "r1",
          "shortcut": ""
        },
        {
          "shortcut": "",
          "label": "r2",
          "value": "r2"
        },
        {
          "shortcut": "",
          "label": "r3",
          "value": "r3"
        }
      ],
      "label": "Radio",
      "inline": false,
      "mask": false,
      "type": "radio",
      "input": true,
      "key": "radio",
      "defaultValue": "r2",
      "validate": {
        "unique": false,
        "customMessage": "",
        "json": ""
      },
      "conditional": {
        "show": "",
        "when": "",
        "json": ""
      },
      "properties": {},
      "logic": [],
      "customConditional": "",
      "tags": []
    },
    {
      "optionsLabelPosition": "right",
      "values": [
        {
          "label": "v1",
          "value": "v1",
          "shortcut": ""
        },
        {
          "shortcut": "",
          "label": "v2",
          "value": "v2"
        },
        {
          "shortcut": "",
          "label": "v3",
          "value": "v3"
        },
        {
          "shortcut": "",
          "label": "v4",
          "value": "v4"
        }
      ],
      "label": "Radio",
      "inline": false,
      "mask": false,
      "type": "radio",
      "input": true,
      "key": "radio2",
      "defaultValue": "v3",
      "customDefaultValue": "value = \"v\"+(Math.floor(Math.random() * 3)+1).toString();"
    },
    {
      "optionsLabelPosition": "right",
      "values": [
        {
          "label": "s1",
          "value": "s1",
          "shortcut": ""
        },
        {
          "shortcut": "",
          "label": "s2",
          "value": "s2"
        },
        {
          "shortcut": "",
          "label": "s3",
          "value": "s3"
        }
      ],
      "label": "Select Boxes",
      "mask": false,
      "type": "selectboxes",
      "input": true,
      "key": "selectBoxes",
      "inputType": "checkbox",
      "defaultValue": {
        "s1": false,
        "s2": true,
        "s3": false
      }
    },
    {
      "input": true,
      "label": "Submit",
      "tableView": false,
      "key": "submit",
      "theme": "primary",
      "type": "button"
    },
    {
      "input": true,
      "label": "Set data ",
      "tableView": false,
      "key": "setdata",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "custom": "formioForm.submission={'data':{'a':null,'b':null,'c':null,'msg':'','checkbox':null,'radio':null,'radio2':null}};console.log('datais set');"
    },
    {
      "input": true,
      "label": "Post to URL(with headers that don't work)",
      "tableView": false,
      "key": "posttoUrl",
      "action": "url",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "headers": [
        {
          "value": "v1",
          "header": "h1"
        },
        {
          "value": "v2",
          "header": "h2"
        }
      ],
      "url": "https://sasa-test-misc.azurewebsites.net/Add"
    },
    {
      "input": true,
      "label": "Show data (JSON)",
      "tableView": false,
      "key": "showdata",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "custom": "TogFormViewer.showData();"
    },
    {
      "input": true,
      "label": "a2n direct call",
      "tableView": false,
      "key": "a2ndircall",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "custom": "executeAjaxRequestWithAdalLogic(ADAL.config.clientId, executeAjaxRequest, 'https://sasa-test-ete-fnc.azurewebsites.net/Add', {'data':{'a':formioForm.submission.data.a,'b':formioForm.submission.data.b}}, {'isSendReceive' : true,'operation':'test'},onsuccess_sendReceiveOrHandover,onfailure_generic)"
    },
    {
      "input": true,
      "label": "Add using executeCustomEvent",
      "tableView": false,
      "key": "addusingcexeccustev",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "custom": "TogFormViewer.executeCustomAction('https://sasa-test-ete-fnc.azurewebsites.net/Add');"
    },
    {
      "input": true,
      "label": "Load form uploadFile",
      "tableView": false,
      "key": "loadformupldfile",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "custom": "TogFormViewer.loadForm('fileupload',{'a':133,'b':155});"
    },
    {
      "input": true,
      "label": "Load form shwdata",
      "tableView": false,
      "key": "loadformshwdata",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "custom": "TogFormViewer.loadForm('shwdata',{'a':33,'b':55});"
    },
    {
      "input": true,
      "label": "Load form calcsimple",
      "tableView": false,
      "key": "loadformcalcsimple",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "custom": "TogFormViewer.loadForm('calcsimple',{'a':333,'b':555});"
    },
    {
      "input": true,
      "label": "Multiply",
      "tableView": false,
      "key": "mul",
      "action": "event",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {
        "action": "Form('{formname}/{formversion}')/Multiplication",
        "actionMethod":"PATCH"
      },
      "event": "Multiply",
      "lockKey": true,
      "customConditional": "show"
    },
    {
      "input": true,
      "label": "Add",
      "tableView": false,
      "key": "add",
      "action": "event",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {
        "action": "Form('{formname}/{formversion}')/FailureTest"
      },
      "event": "",
      "lockKey": true,
      "customConditional": "show"
    },
    {
      "input": true,
      "label": "Do nothing",
      "tableView": false,
      "key": "donothing",
      "action": "event",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {
        "action": ""
      },
      "event": "donothing",
      "lockKey": true,
      "customConditional": "show"
    },
    {
      "input": true,
      "label": "Print appinfo",
      "tableView": false,
      "key": "addusingcexeccustev",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "custom": "console.log(TogFormViewer.getAppInfo());"
    },
    {
      "input": true,
      "label": "Do default",
      "tableView": false,
      "key": "dodefault",
      "action": "event",
      "theme": "primary",
      "type": "button",
      "tags": [],
      "conditional": {
        "show": ""
      },
      "properties": {},
      "event": "dodefault",
      "lockKey": true,
      "customConditional": "show"
    }
  ],
  "revisions": "",
  "_vid": 0,
  "access": [
    {
      "roles": [
        "599d5201a0434200072250b4",
        "599d5201a0434200072250b5",
        "599d5201a0434200072250b6"
      ],
      "type": "read_all"
    }
  ],
  "submissionAccess": [],
  "created": "2018-03-30T09:24:56.684Z",
  "_id": "5abe0268fad38b108803fb44",
  "title": "Calculate 2 numbers (V2)",
  "display": "form",
  "settings": {},
  "name": "calc",
  "path": "calc",
  "project": "599d5201a0434200072250b3",
  "modified": "2018-03-30T10:28:25.934Z",
  "machineName": "ewhyjxtmcncdriz:calc",
  "action": "Form('{formname}/{formversion}')/Subtraction",
  "properties": {
    "customScript": "../custscripts/custom.js",
    "aaction local script": "test3(togFormViewerEvent);",
    "action change local script": "testChange1(togFormViewerEvent);",
    "aaction focus local script": "testFocus1(togFormViewerEvent);",
    "aaction blur local script": "testBlur1(togFormViewerEvent);",
    "aaction search local script": "testSearch1(togFormViewerEvent);",
    "aaction showDropdown local script": "testShowDropdown1(togFormViewerEvent);",
    "aaction click local script": "testClick1(togFormViewerEvent);",
    "aaction dblclick local script": "testDblClick1(togFormViewerEvent);",
    "aaction mouseover local script": "testMouseover1(togFormViewerEvent);",
    "aaction mousedown local script": "testMousedown1(togFormViewerEvent);",
    "aaction mouseout local script": "testMouseout1(togFormViewerEvent);",
    "aaction mouseup local script": "testMouseup1(togFormViewerEvent);",
    "aaction mousemove local script": "testMousemove1(togFormViewerEvent);",
    "aaction mouseenter local script": "testMouseenter1(togFormViewerEvent);",
    "aaction mouseleave local script": "testMouseleave1(togFormViewerEvent);",
    "aaction keypress local script": "testKeypress1(togFormViewerEvent);",
    "aaction keyup local script": "testKeyup1(togFormViewerEvent);",
    "aaction keydown local script": "testKeydown1(togFormViewerEvent);",
    "Aaction input local script": "testInput1(togFormViewerEvent);",
    "Aaction prevPage local script": "testPrevpage1(togFormViewerEvent);",
    "Aaction nextPage local script": "testNextpage1(togFormViewerEvent);",
    "Aaction componentError local script": "testComponenterror1(togFormViewerEvent);",
    "Aaction beforeprint local script": "testBeforeprint1(togFormViewerEvent);",
    "Aaction afterprint local script": "testAfterprint1(togFormViewerEvent);",
    "Aaction resize local script": "testResize2(togFormViewerEvent);",
    "Aaction select local script": "testSelect1(togFormViewerEvent);",
    "Aaction contextMenu local script": "testContextmenu1(togFormViewerEvent);",
    "action wheel local script": "testWheel1(togFormViewerEvent);",
    "Aaction cut local script": "testCut1(togFormViewerEvent);",
    "Aaction copy local script": "testCopy1(togFormViewerEvent);",
    "Aaction paste local script": "testPaste1(togFormViewerEvent);",
    "action scroll local script": "testScroll1(togFormViewerEvent);",
    "aaction click": "Form('{formname}/{formversion}')/Click",
    "aaction input": "Form('{formname}/{formversion}')/Input",
    "aaction beforeprint": "Form('{formname}/{formversion}')/BeforePrint",
    "aaction afterprint": "Form('{formname}/{formversion}')/AfterPrint",
    "aaction resize": "Form('{formname}/{formversion}')/Resize",
    "aaction select": "Form('{formname}/{formversion}')/Select",
    "aaction contextMenu": "Form('{formname}/{formversion}')/ContextMenu",
    "aaction wheel": "Form('{formname}/{formversion}')/Wheel",
    "aaction cut": "Form('{formname}/{formversion}')/Cut",
    "aaction copy": "Form('{formname}/{formversion}')/Copy",
    "aaction paste": "Form('{formname}/{formversion}')/Paste",
    "aaction scroll": "Form('{formname}/{formversion}')/Scroll",
    "formtitle": "Calculate 2 numbers",
    "calc_api_path": "Calculation('{calcname}/{calcversion}')/Calculate",
    "acalc_api_path": "api/Calculation-Calculate",
    "calc_conf_path":"./defaults/default.json",
    "calc_js_path": "./defaults/calc_v12ab.js",
    "calc_js_path_local": "../calc/calc_v12ab.js",
    "formhelp": "<p>Ovdje se nalazi usporedna analiza ponuda za kasko osiguranje prema parametrima kao što su iznos financiranja, valuta i vrsta leasinga.<br /><br />Uspoređena su osiguravajuća društva Uniqa osiguranje i Wiener osiguranje VIG i iskazane su premije osiguranja.<br /><br />Ukoliko želite tiskani primjerak ponude, možete ga dobiti pritiskom na.</p>",
    "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
    "elearningimagelink": "../logos/elearn.png",
    "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers",
    "processimagelink": "../logos/process.png",
    "loadingScript1": "TogFormViewer.loadData('../data/data.json.js');TogFormViewer.calculate('../calc/calc_aplusbintoc.js');",
    "disableActionSpinner": "true"
  }
};