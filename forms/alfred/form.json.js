var formObj = {
    "display": "form",
    "components": [
      {
        "label": "Header Infos",
        "title": "Headers Info",
        "type": "panel",
        "clearOnHide": false,
        "key": "headerInfo",
        "tooltip": "All the details you need at the beginning.",
        "components": [
          {
            "input": false,
            "key": "columns",
            "label": "Columns",
            "type": "columns",
            "clearOnHide": false,
            "columns": [
              {
                "components": [
                  {
                    "type": "container",
                    "key": "clientInfo",
                    "clearOnHide": false,
                    "components": [
                      {
                        "label": "Correlation ID",
                        "disabled": "true",
                        "type": "textfield",
                        "key": "correlationId",
                        "clearOnHide": false,
                        "customDefaultValue": "function uuidv4() {\n  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>\n    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)\n  )\n}\n\nvalue = uuidv4();"
                      },
                      {
                        "type": "container",
                        "key": "utc",
                        "clearOnHide": false,
                        "components": [
                          {
                            "label": "UTC Now",
                            "disabled": true,
                            "type": "textfield",
                            "key": "now",
                            "clearOnHide": false,
                            "customDefaultValue": "value=moment().utc().format()"
                          },
                          {
                            "label": "Timezone Offset (min)",
                            "disabled": true,
                            "type": "number",
                            "key": "timezoneOffset",
                            "clearOnHide": false,
                            "customDefaultValue": "var newdate=new Date();value=newdate.getTimezoneOffset()"
                          }
                        ]
                      },
                      {
                        "type": "container",
                        "key": "form",
                        "clearOnHide": false,
                        "components": [
                          {
                            "label": "Loading",
                            "disabled": true,
                            "type": "checkbox",
                            "key": "loading",
                            "clearOnHide": false,
                            "defaultValue": false
                          },
                          {
                            "label": "Loaded",
                            "disabled": true,
                            "type": "checkbox",
                            "key": "loaded",
                            "clearOnHide": false,
                            "defaultValue": false
                          }
                        ]
                      }
                    ]
                  }
                ],
                "width": 6,
                "type": "column",
                "key": ""
              },
              {
                "components": [
                  {
                    "label": "Document ID",
                    "disabled": "true",
                    "type": "textfield",
                    "clearOnHide": false,
                    "key": "id"
                  },
                  {
                    "label": "Label",
                    "disabled": "true",
                    "type": "textfield",
                    "clearOnHide": false,
                    "key": "label",
                    "defaultValue": "contact"
                  },
                  {
                    "label": "Object ID",
                    "disabled": "true",
                    "type": "textfield",
                    "clearOnHide": false,
                    "key": "objectId",
                    "customDefaultValue": ""
                  },
                  {
                    "label": "Environment ID",
                    "disabled": true,
                    "type": "textfield",
                    "clearOnHide": false,
                    "defaultValue":"ca9db4b2-d4d8-437a-bc40-b3b8d0d9c963",
                    "key": "environmentId"
                  }
                ],
                "width": 6,
                "type": "column",
                "key": ""
              }
            ]
          }
        ],
        "customConditional": "show=TogFormViewer.debugFlag"
      },
      {
        "key": "columns",
        "columns": [
          {
            "width": 3,
            "type": "column",
            "key": "input",
            "components": [
              {
                "label": "Search",
                "hideLabel": true,
                "placeholder": "Search Contacts",
                "type": "select",
                "key": "searchInput",
                "description": "e.g. Miller",
                "autofocus": true,
                "data": {
                  "values": [
                    {
                      "value": "some",
                      "label": "some"
                    },
                    {
                      "value": "one",
                      "label": "one"
                    }
                  ]
                },
                "valueProperty": "value"
              },
              {
                "type": "fieldset",
                "key": "selection",
                "legend": "Selections",
                "tooltip": "Search only in your favorites, partners related to you or the whole database.",
                "components": [
                  {
                    "type": "radio",
                    "key": "featuredContact",
                    "defaultValue": "favorites",
                    "hideLabel": true,
                    "values": [
                      {
                        "value": "favorites",
                        "label": "Favorites",
                        "shortcut": "F"
                      },
                      {
                        "value": "relatedToYou",
                        "label": "Related to you",
                        "shortcut": "R"
                      },
                      {
                        "value": "allPartners",
                        "label": "All Partners",
                        "shortcut": "L"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "fieldset",
                "key": "categories",
                "legend": "Categories",
                "tooltip": "Which type of partner are you searching for ?",
                "components": [
                  {
                    "type": "radio",
                    "key": "category",
                    "defaultValue": "all",
                    "hideLabel": true,
                    "values": [
                      {
                        "shortcut": "A",
                        "label": "All",
                        "value": "all"
                      },
                      {
                        "shortcut": "P",
                        "label": "Persons",
                        "value": "persons"
                      },
                      {
                        "shortcut": "R",
                        "label": "Private Clients",
                        "value": "privateClients"
                      },
                      {
                        "shortcut": "C",
                        "label": "Corporate Clients",
                        "value": "corporateClients"
                      },
                      {
                        "shortcut": "M",
                        "label": "Intermediaries",
                        "value": "intermediaries"
                      },
                      {
                        "shortcut": "I",
                        "label": "Insurers",
                        "value": "insurers"
                      },
                      {
                        "shortcut": "O",
                        "label": "Organisations",
                        "value": "organisations"
                      }
                    ]
                  }
                ]
              },
              {
                "key": "options",
                "legend": "Options",
                "type": "fieldset",
                "tooltip": "Open to get more search options presented.",
                "components": [
                  {
                    "label": "is deleted",
                    "shortcut": "D",
                    "type": "checkbox",
                    "key": "isDeleted"
                  },
                  {
                    "label": "is inactive / deceased",
                    "shortcut": "N",
                    "type": "checkbox",
                    "key": "isInactive"
                  } 
                ]
              }
            ]
          },
          {
            "components": [
                {
                    "input": false,
                    "key": "columns",
                    "label": "Columns",
                    "type": "columns",
                    "columns": [
                      {
                        "components": [
                            {
                                "label": "",
                                "action": "event",
                                "theme": "primary",
                                "leftIcon": "glyphicon glyphicon-search",
                                "shortcut": "",
                                "type": "button",
                                "key": "search",
                                "tooltip": "xxx",
                                "input": true,
                                "event": ""
                            }
                        ],
                        "width": 2,
                        "offset": 0,
                        "push": 0,
                        "pull": 0,
                        "type": "column",
                        "input": true,
                        "key": "",
                        "label": ""
                      },
                      {
                        "components": [
                            {
                                "label": " New",
                                "action": "custom",
                                "custom": "var corr=new Object();corr['clientInfo']=new Object();corr['clientInfo']['correlationId']=formioForm.submission.data['clientInfo']['correlationId'];TogFormViewer.loadForm('../forms/contact-edit/v1',corr);/*history.pushState({},'','index.html?form=../forms/contact-edit/v1');*/",
                                "theme": "primary",
                                "tooltip": "xxx",
                                "leftIcon": "glyphicon glyphicon-plus",
                                "shortcut": "N",
                                "type": "button",
                                "key": "new",
                                "properties": {"set clean": "true"}
                            }
                        ],
                        "width": 2,
                        "offset": 0,
                        "push": 0,
                        "pull": 0,
                        "type": "column",
                        "input": true,
                        "key": "",
                        "label": ""
                      }
                    ]
                },
                {
                    "type": "htmlelement",
                    "tag": "br"
                },
              {
                "condensed": true,
                "hover": true,
                "bordered": true,
                "striped": true,
                "label": "",
                "disableAddingRemovingRows": true,
                "key": "searchResult",
                "type": "datagrid",
                "components": [
                  {
                    "key": "selected",
                    "defaultValue": false,
                    "type": "checkbox",
                    "hideLabel": true,
                    "row": "0-0"
                  },
                  {
                    "key": "logo",
                    "tag": "img",
                    "attrs": [
                      {
                        "value": "https://media.giphy.com/media/3oxHQk0kupHxGiVcZO/giphy.gif",
                        "attr": "src"
                      },
                      {
                        "value": "32",
                        "attr": "height"
                      }
                    ],
                    "className": "",
                    "type": "htmlelement",
                    "hideLabel": true,
                    "row": "0-1"
                  },
                  {
                    "key": "name",
                    "label": "Name",
                    "tooltip": "xxx",
                    "className": "",
                    "type": "textfield",
                    "defaultValue": "WWWWWWW",
                    "disabled": true,
                    "hideLabel": false,
                    "row": "0-2"
                  },
                  {
                    "key": "address",
                    "className": "",
                    "type": "textfield",
                    "disabled": true,
                    "defaultValue": "WWWWWWW",
                    "label": "Address",
                    "tooltip": "xxx",
                    "row": "0-3"
                  },
                    {
                        "label": "",
                        "action": "event",
                        "theme": "primary",
                        "tooltip": "xxx",
                        "leftIcon": "glyphicon glyphicon-edit",
                        "shortcut": "",
                        "type": "button",
                        "key": "open",
                        "input": true,
                        "event": ""
                    }
                ]
              }
            ],
            "width": 9,
            "type": "column",
            "key": ""
          }
        ],
        "type": "columns"
      },
      {
        "type": "container",
        "key": "footerInfo",
        "components": [
          {
            "label": "Field Set",
            "customClass": "footer",
            "mask": false,
            "type": "fieldset",
            "input": false,
            "key": "fieldSet",
            "components": [
              {
                "key": "columns",
                "type": "columns",
                "columns": [
                  {
                    "components": [
                      {
                        "attrs": [
                          {
                            "attr": "href",
                            "value": "https://www.google.com"
                          },
                          {
                            "attr": "target",
                            "value": "_blank"
                          }
                        ],
                        "content": "Copyright",
                        "tag": "a",
                        "type": "htmlelement",
                        "key": "link2"
                      },
                      {
                        "tag": "br",
                        "type": "htmlelement"
                      },
                      {
                        "attrs": [
                          {
                            "attr": "href",
                            "value": "https://www.google.com"
                          },
                          {
                            "attr": "target",
                            "value": "_blank"
                          }
                        ],
                        "content": "Disclaimer",
                        "label": "Link",
                        "tag": "a",
                        "className": "",
                        "refreshOnChange": false,
                        "mask": false,
                        "type": "htmlelement",
                        "input": false,
                        "key": "link2"
                      },
                      {
                        "tag": "br",
                        "type": "htmlelement"
                      },
                      {
                        "attrs": [
                          {
                            "attr": "href",
                            "value": "https://www.google.com"
                          },
                          {
                            "attr": "target",
                            "value": "_blank"
                          }
                        ],
                        "content": "Terms",
                        "label": "Link",
                        "tag": "a",
                        "className": "",
                        "refreshOnChange": false,
                        "mask": false,
                        "type": "htmlelement",
                        "input": false,
                        "key": "link3"
                      }
                    ],
                    "width": 2,
                    "type": "column"
                  },
                  {
                    "components": [
                      {
                        "attrs": [
                          {
                            "attr": "href",
                            "value": "https://www.google.com"
                          },
                          {
                            "attr": "target",
                            "value": "_blank"
                          }
                        ],
                        "content": "Privacy",
                        "label": "Link",
                        "tag": "a",
                        "className": "",
                        "refreshOnChange": false,
                        "mask": false,
                        "type": "htmlelement",
                        "input": false,
                        "key": "link2"
                      },
                      {
                        "tag": "br",
                        "type": "htmlelement"
                      },
                      {
                        "attrs": [
                          {
                            "attr": "href",
                            "value": "https://www.google.com"
                          },
                          {
                            "attr": "target",
                            "value": "_blank"
                          }
                        ],
                        "content": "Status",
                        "label": "Link",
                        "tag": "a",
                        "className": "",
                        "refreshOnChange": false,
                        "mask": false,
                        "type": "htmlelement",
                        "input": false,
                        "key": "link3"
                      },
                      {
                        "tag": "br",
                        "type": "htmlelement"
                      },
                      {
                        "attrs": [
                          {
                            "attr": "href",
                            "value": "https://www.google.com"
                          },
                          {
                            "attr": "target",
                            "value": "_blank"
                          }
                        ],
                        "content": "Licenses",
                        "label": "Link",
                        "tag": "a",
                        "className": "",
                        "refreshOnChange": false,
                        "mask": false,
                        "type": "htmlelement",
                        "input": false,
                        "key": "link3"
                      }
                    ],
                    "width": 2,
                    "type": "column"
                  },        
                  {
                    "components": [
                      {
                        "label": "Correlation ID",
                        "disabled": "true",
                        "hideLabel" : true,
                        "type": "textfield",
                        "key": "correlationId",
                        "calculateValue": "value=data['clientInfo']['correlationId']",
                        "customClass": "footer-info-center"
                      },
                      {
                        "label": "Document ID",
                        "disabled": "true",
                        "hideLabel" : true,
                        "type": "textfield",
                        "key": "id",
                        "calculateValue": "value=data['id']",
                        "customClass": "footer-info-center"
                      },
                      {
                        "hideLabel": true,
                        "disabled": true,
                        "type": "textfield",
                        "key": "utcNow",
                        "calculateValue": "value=data['clientInfo']['utc']['now']+' ('+data['clientInfo']['utc']['timezoneOffset']+' min)'",
                        "customClass": "footer-info-center"
                      },
                      {
                        "hideLabel": true,
                        "disabled": true,
                        "type": "textfield",
                        "key": "home",
                        "calculateValue": "value='xxx'",
                        "customClass": "footer-info-center"
                      }
                    ],
                    "width": 4,
                    "type": "column"
                  },
                  {
                    "components": [
                      {
                        "disabled": "true",
                        "hideLabel" : true,
                        "type": "textfield",
                        "key": "ipAddress",
                        "calculateValue": "value='127.0.0.1'",
                        "customClass": "footer-info-right"
                      },         
                      {
                        "hideLabel": true,
                        "disabled": "true",
                        "type": "textfield",
                        "key": "label",
                        "calculateValue": "value=data['label']",
                        "customClass": "footer-info-right"
                      },
                      {
                        "hideLabel": true,
                        "disabled": "true",
                        "type": "textfield",
                        "key": "objectId",
                        "calculateValue": "value=data['objectId']",
                        "customClass": "footer-info-right"
                      },
                      {
                        "hideLabel": true,
                        "label": "Environment ID",
                        "disabled": true,
                        "type": "textfield",
                        "key": "environmentId",
                        "calculateValue": "value=data['environmentId']",
                        "customClass": "footer-info-right"
                      }
                    ],
                    "width": 4,
                    "type": "column"
                  }
                ]
              }        
            ]
          }
        ]
      },
      {
        "type": "container",
        "key": "debugInfo",
        "components": [
          {
            "label": "Debug Info",
            "title": "Debug Info",
            "mask": false,
            "type": "panel",
            "input": false,
            "key": "debugInfos",
            "tooltip": "All the details you need as a developer.",
            "conditional": {
              "show": "",
              "when": "",
              "json": ""
            },
            "components": [
              {
                "input": false,
                "key": "columns",
                "label": "Columns",
                "type": "columns",
                "columns": [
                  {
                    "components": [
                      {
                        "label": "Data",
                        "action": "custom",
                        "leftIcon": "glyphicon glyphicon-sunglasses",
                        "shortcut": "",
                        "mask": false,
                        "type": "button",
                        "input": true,
                        "key": "showData",
                        "showValidations": false,
                        "custom": "var dta=JSON.parse(JSON.stringify(data));delete dta.debugInfo;data['debugInfo']['dataText']=JSON.stringify(dta,null,4);formioForm.submission = formioForm.submission;"
                      },
                      {
                        "label": "dataText",
                        "hideLabel": true,
                        "placeholder": "Here goes the data...",
                        "showWordCount": false,
                        "showCharCount": false,
                        "rows": 20,
                        "type": "textarea",
                        "input": true,
                        "key": "dataText"
                      }
                    ],
                    "width": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "type": "column",
                    "input": true,
                    "key": "",
                    "label": ""
                  },
                  {
                    "components": [
                      {
                        "label": "AppInfo",
                        "action": "custom",
                        "leftIcon": "glyphicon glyphicon-sunglasses",
                        "shortcut": "",
                        "mask": false,
                        "type": "button",
                        "input": true,
                        "key": "showAppInfo",
                        "showValidations": false,
                        "custom": "var dta=JSON.parse(JSON.stringify(TogFormViewer.getAppInfo()));data['debugInfo']['appInfoText']=JSON.stringify(dta,null,4);formioForm.submission = formioForm.submission;"
                      },
                      {
                        "label": "appInfoText",
                        "hideLabel": true,
                        "placeholder": "Here goes the appInfo...",
                        "showWordCount": false,
                        "showCharCount": false,
                        "rows": 20,
                        "type": "textarea",
                        "input": true,
                        "key": "appInfoText",
                        "properties": {}
                      }
                    ],
                    "width": 6,
                    "offset": 0,
                    "push": 0,
                    "pull": 0,
                    "type": "column",
                    "input": true,
                    "key": "",
                    "label": ""
                  }
                ]
              }
            ],
            "customConditional": "show=TogFormViewer.debugFlag"
          }          
        ]
      }
    ],
    "properties": {
        "formtitle": "AllRisX - Contacts",
        "formversion": "v1",
        "formhelp": "Here goes the form help text shown in the help menu...",
        "elearninglink": "https://en.wikipedia.org/wiki/Operation_(mathematics)",
        "elearningimagelink": "http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg",
        "processimagelink": "https://i.stack.imgur.com/MjNuE.gif",
        "processlink": "https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers",
        "form width percent": "94",
        "processtext": "sdfsad sadf sf sdf sd sadfs",
        "multilanguage": "true",
        "language": "en_GB",
        "customizationlogopath ": "../logos/pws_hdr.png",
        "customCss": "../forms/contact-edit/v1/custom.css",
        "toggle menu": "true",
        "triggerResizeChange": "true",
        "debug": "on"
      },
      "title": "Contacts",
      "name": "contact-search"
  };