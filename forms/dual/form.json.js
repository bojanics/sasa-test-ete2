var formObj = {
  "display": "form",
  "title": "D & O + Strafrechtsschutz",
  "name": "GAT-DUA",
  "properties": {
    "formtitle": "Dual AT D&O + SRS",
    "formversion": "v1",
    "aaction change local script": "dirtyFlagChangedListener(togFormViewerEvent)",
    "form width percent": "95",
    "acalc_js_path": "../calc/quote/v1/calc.js",
    "acalc_api_path": "Calculation/Calculate",
    "calc_js_path": "../calc/calc-dual.js",
    "acalc_api_path": "Calculation/Calculate",
    "customCss": "../customcss/customCSS.css",
    "customScript": "../customscripts/movePanel.js"
  },
  "components": [
    {
      "label": "Panel",
      "title": "Tarifierung",
      "type": "panel",
      "key": "trfpanel",
      "components": [
        {
          "input": false,
          "key": "htmlelement",
          "type": "htmlelement",
          "content": "<b>Bitte die gewünschte(n) Sparte(n) auswählen:</b>",
          "label": "",
          "attrs": []
        },
        {
          "label": "D & O",
          "key": "select_insurance_cover_do",
          "type": "checkbox",
          "tooltip": "Bitte hier auswählen wenn Sie eine D & O-Versicherung berechnen wollen.",
          "properties": {
            "aaction change local script": "doCheckBoxAction();dirtyFlagChangedListener(togFormViewerEvent);"
          },
          "input": true
        },
        {
          "label": "Strafrechtsschutz",
          "key": "select_insurance_cover_srs",
          "type": "checkbox",
          "tooltip": "Bitte hier auswählen wenn Sie eine Strafrechtsschutz-Versicherung berechnen wollen.",
          "properties": {
            "aaction change local script": "srsCheckBoxAction();dirtyFlagChangedListener(togFormViewerEvent);"
          },
          "input": true
        },
        {
          "label": "Columns",
          "type": "columns",
          "key": "columns",
          "columns": [
            {
              "components": [
                {
                  "label": "Panel",
                  "title": "D & O",
                  "type": "panel",
                  "key": "dopanel",
                  "customConditional": "show=data['select_insurance_cover_do']==true",
                  "components": [
                    {
                      "label": "turnover_do STRING (HIDDEN)",
                      "key": "turnover_do",
                      "hidden": true,
                      "type": "textfield",
                      "calculateValue": "if (typeof data !== 'undefined') { var val = data['turnover_do_number'] + ''; value = val.replace('.', ','); }",
                      "input": true
                    },
                    {
                      "label": "Konsolidierter Jahresumsatz (in EUR)",
                      "placeholder": "Bitte eine Zahl zwischen 1 und 75.000.000 eingeben",
                      "clearOnHide": false,
                      "mask": false,
                      "tooltip": "Der konsolidierte Jahresumsatz ist die Berechnungsbasis für die Prämie.",
                      "type": "number",
                      "inputType": "number",
                      "key": "turnover_do_number",
                      "validate": {
                        "required": true,
                        "max": 75000000,
                        "customMessage": "Bitte geben Sie einen konsolidierten Jahresumsatz zwischen EUR 1,- und EUR 75.000.000,- ein.",
                        "min": 1,
                        "json": ""
                      },
                      "delimiter": true,
                      "input": true,
                      "properties": {
                        "autocalc": "fieldchange"
                      }
                    },
                    {
                      "label": "Versicherungssumme D & O (in EUR)",
                      "type": "select",
                      "key": "sum_insured_do",
                      "clearOnHide": false,
                      "placeholder": "Bitte auswählen",
                      "dataSrc": "custom",
                      "validate": {
                        "required": true,
                        "customMessage": "Bitte eine Versicherungssumme auswählen !"
                      },
                      "data": {
                        "custom": "if (data['turnover_do_number'] <= 5000000)\r\n{\r\n    values = [{label: '500.000,--', value: 'VS500000'}, {label: '1.000.000,--', value: 'VS1000000'}, {label: '1.500.000,--', value: 'VS1500000'}, {label: '2.000.000,--', value: 'VS2000000'}];\r\n}\r\nelse if (data['turnover_do_number'] <= 10000000)\r\n{\r\n    values = [{label: '500.000,--', value: 'VS500000'}, {label: '1.000.000,--', value: 'VS1000000'}, {label: '1.500.000,--', value: 'VS1500000'}, {label: '2.000.000,--', value: 'VS2000000'}, {label: '2.500.000,--', value: 'VS2500000'}, {label: '3.000.000,--', value: 'VS3000000'}, {label: '4.000.000,--', value: 'VS4000000'}, {label: '5.000.000,--', value: 'VS5000000'}];\r\n}\r\nelse if (data['turnover_do_number'] <= 25000000)\r\n{\r\n    values = [{label: '500.000,--', value: 'VS500000'}, {label: '1.000.000,--', value: 'VS1000000'}, {label: '1.500.000,--', value: 'VS1500000'}, {label: '2.000.000,--', value: 'VS2000000'}, {label: '2.500.000,--', value: 'VS2500000'}, {label: '3.000.000,--', value: 'VS3000000'}, {label: '4.000.000,--', value: 'VS4000000'}, {label: '5.000.000,--', value: 'VS5000000'}, {label: '7.500.000,--', value: 'VS7500000'}, {label: '10.000.000,--', value: 'VS10000000'}];\r\n}\r\nelse if (data['turnover_do_number'] <= 50000000)\r\n{\r\n    values = [{label: '1.000.000,--', value: 'VS1000000'}, {label: '1.500.000,--', value: 'VS1500000'}, {label: '2.000.000,--', value: 'VS2000000'}, {label: '2.500.000,--', value: 'VS2500000'}, {label: '3.000.000,--', value: 'VS3000000'}, {label: '4.000.000,--', value: 'VS4000000'}, {label: '5.000.000,--', value: 'VS5000000'}, {label: '7.500.000,--', value: 'VS7500000'}, {label: '10.000.000,--', value: 'VS10000000'}];\r\n}\r\nelse if (data['turnover_do_number'] <= 75000000)\r\n{\r\n    values = [{label: '1.000.000,--', value: 'VS1000000'}, {label: '1.500.000,--', value: 'VS1500000'}, {label: '2.000.000,--', value: 'VS2000000'}, {label: '2.500.000,--', value: 'VS2500000'}, {label: '3.000.000,--', value: 'VS3000000'}, {label: '4.000.000,--', value: 'VS4000000'}, {label: '5.000.000,--', value: 'VS5000000'}, {label: '7.500.000,--', value: 'VS7500000'}, {label: '10.000.000,--', value: 'VS10000000'}];\r\n}",
                        "values": []
                      },
                      "valueProperty": "value",
                      "properties": {
                        "autocalc": "fieldchange"
                      },
                      "tooltip": "Bitte die Höhe der gewünschten Versicherungssumme auswählen.",
                      "input": true
                    },
                    {
                      "label": "Jahresbruttoprämie D & O (in EUR)",
                      "key": "premium_do_gros_string",
                      "clearOnHide": false,
                      "type": "textfield",
                      "disabled": true,
                      "customConditional": "show=data['premium_do_gros_string']!='INVALID'&&data['premium_do_gros_string']!=''",
                      "tooltip": "Die Prämie vorbehaltlich einer Prüfung der Antragsfragen.",
                      "input": true
                    }
                  ],
                  "input": false
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
                  "label": "Panel",
                  "title": "Strafrechtsschutz",
                  "type": "panel",
                  "key": "srspanel",
                  "customConditional": "show=data['select_insurance_cover_srs']==true",
                  "components": [
                    {
                      "label": "Number employees STRING (HIDDEN)",
                      "key": "number_employees_srs",
                      "hidden": true,
                      "type": "textfield",
                      "calculateValue": "if (typeof data !== 'undefined') value = data['number_employees_srs_number']",
                      "input": true
                    },
                    {
                      "label": "Anzahl der Mitarbeiter",
                      "placeholder": "Bitte eine Zahl zwischen 1 und 500 eingeben",
                      "clearOnHide": false,
                      "mask": false,
                      "tooltip": "Die Mitarbeiteranzahl ist die Berechnungsbasis für die Prämie.",
                      "type": "number",
                      "key": "number_employees_srs_number",
                      "inputType": "number",
                      "decimalLimit": 0,
                      "validate": {
                        "required": true,
                        "max": 500,
                        "customMessage": "Bitte geben Sie eine Mitarbeiteranzahl zwischen 1 und 500 ein.",
                        "min": 1,
                        "json": ""
                      },
                      "input": true,
                      "properties": {
                        "autocalc": "fieldchange"
                      }
                    },
                    {
                      "label": "Versicherungssumme Strafrechtsschutz (in EUR)",
                      "key": "sum_insured_srs",
                      "clearOnHide": false,
                      "type": "select",
                      "placeholder": "Bitte auswählen",
                      "data": {
                        "values": [
                          {
                            "value": "VS500000",
                            "label": "500.000,--"
                          },
                          {
                            "value": "VS1000000",
                            "label": "1.000.000,--"
                          }
                        ]
                      },
                      "properties": {
                        "autocalc": "fieldchange"
                      },
                      "valueProperty": "value",
                      "validate": {
                        "required": true,
                        "customMessage": "Bitte eine Versicherungssumme auswählen !"
                      },
                      "tooltip": "Bitte die Höhe der gewünschten Versicherungssumme auswählen.",
                      "input": true
                    },
                    {
                      "label": "Jahresbruttoprämie Strafrechtsschutz (in EUR)",
                      "key": "premium_srs_gros_string",
                      "clearOnHide": false,
                      "type": "textfield",
                      "disabled": true,
                      "customConditional": "show=data['premium_srs_gros_string']!='INVALID'&&data['premium_srs_gros_string']!=''",
                      "tooltip": "Die Prämie vorbehaltlich einer Prüfung der Antragsfragen.",
                      "input": true
                    }
                  ],
                  "input": false
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
          ],
          "input": false
        }
      ],
      "input": false
    },
    {
      "label": "Panel",
      "title": "Offerterstellung und Fragebogen",
      "mask": false,
      "type": "panel",
      "key": "ofrpanel",
      "customConditional": "if (data['select_insurance_cover_do'] && data['select_insurance_cover_srs'])\r\n{\r\n    show = (data['premium_do_gros_string']!=''&&data['premium_do_gros_string']!='INVALID'&&data['premium_do_gros_string']!=undefined) && (data['premium_srs_gros_string']!=''&&data['premium_srs_gros_string']!='INVALID'&&data['premium_srs_gros_string']!=undefined);\r\n}\r\nelse if (data['select_insurance_cover_do'])\r\n{\r\n    show = data['premium_do_gros_string']!=''&&data['premium_do_gros_string']!='INVALID'&&data['premium_do_gros_string']!=undefined;\r\n}\r\nelse if (data['select_insurance_cover_srs'])\r\n{\r\n    show = data['premium_srs_gros_string']!=''&&data['premium_srs_gros_string']!='INVALID'&&data['premium_srs_gros_string']!=undefined;\r\n}\r\nelse\r\n{\r\n    show = false;\r\n}",
      "components": [
        {
          "label": "Panel",
          "title": "Layout und Versicherungsnehmer",
          "type": "panel",
          "key": "polholderpanel",
          "components": [
            {
              "label": "Columns",
              "type": "columns",
              "key": "columns2",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Vermittler",
                      "placeholder": "Bitte wählen Sie eine Firma aus",
                      "clearOnHide": false,
                      "mask": false,
                      "tooltip": "Zur Erzeugung eines Offerts wählen Sie bitte eine Firma für das Layout aus.",
                      "type": "select",
                      "key": "branding",
                      "data": {
                        "values": [
                          {
                            "label": "GrECo International AG",
                            "value": "GrECo"
                          },
                          {
                            "label": "VMG Versicherungsmakler GmbH",
                            "value": "VMG"
                          },
                          {
                            "label": "Ecclesia GrECo Hospital GmbH",
                            "value": "EGHV"
                          },
                          {
                            "label": "GrECo JLT Risk Consulting GmbH",
                            "value": "GJRC"
                          },
                          {
                            "label": "CMV GmbH",
                            "value": "CMV"
                          }
                        ]
                      },
                      "validate": {
                        "required": true,
                        "customMessage": "Zur Erzeugung eines Dokuments wählen Sie bitte eine Firma für das Layout aus !"
                      },
                      "customConditional": "",
                      "input": true,
                      "defaultValue": "GrECo",
                      "valueProperty": "value"
                    },
                    {
                      "label": "Straße",
                      "key": "street_client",
                      "clearOnHide": false,
                      "placeholder": "Bitte hier sie Straße+Hausnummer, etc. eingeben",
                      "validate": {
                        "required": true,
                        "customMessage": "Zur Erzeugung eines Offerts bitte die Straße eingeben !"
                      },
                      "type": "textfield",
                      "tooltip": "Zur Erzeugung eines Offerts bitte die Straße eingeben.",
                      "input": true
                    },
                    {
                      "label": "Ort",
                      "key": "city_client",
                      "clearOnHide": false,
                      "placeholder": "Bitte hier sie Stadt eingeben",
                      "validate": {
                        "required": true,
                        "customMessage": "Zur Erzeugung eines Offerts bitte die Stadt eingeben !"
                      },
                      "type": "textfield",
                      "tooltip": "Zur Erzeugung eines Offerts bitte die Stadt eingeben.",
                      "input": true
                    },
                    {
                      "label": "Postleitzahl",
                      "key": "zip_client",
                      "clearOnHide": false,
                      "placeholder": "Bitte hier die Postleitzahl eingeben",
                      "inputMask": "9999",
                      "validate": {
                        "required": true,
                        "minlength": 4,
                        "maxlength": 4,
                        "pattern": "[1-9][0-9][0-9][0-9]",
                        "customMessage": "Zur Erzeugung eines Offerts bitte eine Postleitzahl eingeben !"
                      },
                      "type": "textfield",
                      "tooltip": "Zur Erzeugung eines Offerts bitte eine Postleitzahl eingeben.",
                      "input": true
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
                      "label": "Firmenbuchnummer",
                      "key": "trade_register_no_client",
                      "clearOnHide": false,
                      "placeholder": "Bitte hier die Firmenbuchnummer eingeben",
                      "validate": {
                        "required": true,
                        "minlength": 5,
                        "maxlength": 7,
                        "customMessage": "Zur Erzeugung eines Offerts bitte eine Firmenbuchnummer eingeben !"
                      },
                      "type": "textfield",
                      "tooltip": "Zur Erzeugung eines Offerts bitte eine Firmenbuchnummer eingeben.",
                      "input": true
                    },
                    {
                      "label": "Name Versicherungsnehmer",
                      "key": "name_client",
                      "clearOnHide": false,
                      "placeholder": "Bitte hier den Firmennamen eingeben",
                      "validate": {
                        "required": true,
                        "customMessage": "Zur Erzeugung eines Offerts bitte den Firmennamen eingeben !"
                      },
                      "type": "textfield",
                      "tooltip": "Zur Erzeugung eines Offerts bitte den Firmennamen eingeben.",
                      "input": true
                    },
                    {
                      "label": "E-Mail Addresse",
                      "placeholder": "Bitte die E-Mail Adresse eingeben",
                      "errorLabel": "Ungültige E-Mail",
                      "clearOnHide": false,
                      "tooltip": "An die hier eingegebene E-Mail Adresse werden die Dokumente Fragebogen, Polizze und Rechnung geschickt.",
                      "type": "email",
                      "input": true,
                      "key": "email_client",
                      "properties": [
                        {
                          "key": "",
                          "value": ""
                        }
                      ],
                      "tags": [],
                      "validate": {
                        "unique": false,
                        "customMessage": "Ungültige E-Mail",
                        "json": "",
                        "required": true
                      },
                      "defaultValue": ""
                    },
                    {
                      "label": "Land",
                      "clearOnHide": false,
                      "mask": false,
                      "disabled": true,
                      "type": "select",
                      "input": true,
                      "key": "country_client",
                      "defaultValue": "austria",
                      "validate": {
                        "required": true,
                        "unique": false
                      },
                      "data": {
                        "values": [
                          {
                            "label": "Österreich",
                            "value": "austria"
                          }
                        ]
                      },
                      "valueProperty": "value"
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
              ],
              "input": false
            }
          ],
          "input": false
        },
        {
          "label": "Panel",
          "title": "Polizze",
          "mask": false,
          "type": "panel",
          "input": false,
          "key": "policyPanel",
          "components": [
            {
              "columns": [
                {
                  "components": [
                    {
                      "label": "Panel",
                      "mask": false,
                      "type": "panel",
                      "input": false,
                      "key": "policyDOPanel",
                      "components": [
                        {
                          "label": "Versicherungsbeginn D & O",
                          "format": "dd.MM.yyyy",
                          "placeholder": "Gewünschten Versicherungsbeginn eingeben",
                          "description": "z.B.: 15.06.2018",
                          "mask": false,
                          "clearOnHide": false,
                          "tooltip": "Hier können Sie den gewünschten Versicherungsbeginn für Ihre D & O Versicherung eingeben.\nFormat vom Datum ist TT.MM.JJJJ",
                          "type": "datetime",
                          "input": true,
                          "key": "begin_date_do",
                          "datePicker": {
                            "startingDay": 1,
                            "minDate": "moment()",
                            "datepickerMode": "day",
                            "yearRows": "4",
                            "yearColumns": "5"
                          },
                          "tags": [],
                          "conditional": {
                            "show": ""
                          },
                          "properties": {
                            "autocalc": "fieldchange"
                          },
                          "lockKey": true,
                          "$$hashKey": "object:48179",
                          "suffix": true,
                          "enableTime": false,
                          "timePicker": {
                            "showMeridian": false
                          }
                        },
                        {
                          "label": "Fälligkeitsdatum D & O",
                          "placeholder": "Nächste Hauptfälligkeit eingeben",
                          "description": "z.B.: 01.04.",
                          "inputMask": "99.99.",
                          "clearOnHide": false,
                          "allowMultipleMasks": false,
                          "showWordCount": false,
                          "showCharCount": false,
                          "tooltip": "Hier können Sie die gewünschten nächste Hauptfälligkeit Ihrer D & O Versicherung eingeben.\nFormat vom Datum ist TT.MM.",
                          "type": "textfield",
                          "key": "due_date_do",
                          "input": true,
                          "defaultValue": "",
                          "validate": {
                            "unique": false,
                            "customMessage": "Die Eingabe muss TT.MM. entsprechen und ist daher mit 31.12. maximiert.",
                            "json": "",
                            "pattern": "((0[1-9]|[1-2][0-9]|3(0|1))[.](0(1|3|5|7|8)|10|12)|(0[1-9]|[1-2][0-9]|30)[.](0(4|6|9)|11)|(0[1-9]|[1-2][0-9])[.]02)[.]"
                          },
                          "properties": {
                            "autocalc": "fieldchange"
                          },
                          "inputFormat": "plain"
                        },
                        {
                          "columns": [
                            {
                              "components": [
                                {
                                  "label": "Polizze DO herunterladen",
                                  "showValidations": false,
                                  "custom": "TogFormViewer.openFile(TogFormViewer.getAppInfo().resolvedProperties.home+\"/Quote(\"+TogFormViewer.getAppInfo().dataObj.id+\")/PolizzeDO\",\"dualpolicydo\")",
                                  "customClass": "buttonCustom1",
                                  "mask": false,
                                  "action": "custom",
                                  "theme": "primary",
                                  "type": "button",
                                  "key": "downloadPolicyDO",
                                  "customConditional": "show= !policyChanged && data['pathPolicyDO'] != undefined;",
                                  "input": true,
                                  "conditional": {
                                    "json": ""
                                  }
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
                                  "label": "Rechnung DO herunterladen",
                                  "showValidations": false,
                                  "custom": "TogFormViewer.openFile(TogFormViewer.getAppInfo().resolvedProperties.home+\"/Quote(\"+TogFormViewer.getAppInfo().dataObj.id+\")/RechnungDO\",\"dualinvoicedo\")",
                                  "customClass": "butttonCustom1",
                                  "mask": false,
                                  "action": "custom",
                                  "theme": "primary",
                                  "type": "button",
                                  "input": true,
                                  "key": "invoicePolicyDO",
                                  "properties": [
                                    {
                                      "key": "",
                                      "value": ""
                                    }
                                  ],
                                  "tags": [],
                                  "conditional": {
                                    "json": ""
                                  },
                                  "customConditional": "show= !policyChanged && data['pathPolicyDO'] != undefined;"
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
                          ],
                          "label": "Columns",
                          "mask": false,
                          "type": "columns",
                          "input": false,
                          "key": "policyDOButtonsColumns",
                          "properties": [
                            {
                              "key": "",
                              "value": ""
                            }
                          ],
                          "tags": []
                        }
                      ],
                      "properties": [
                        {
                          "key": "",
                          "value": ""
                        }
                      ],
                      "tags": [],
                      "conditional": {
                        "json": ""
                      },
                      "customConditional": "show = data['select_insurance_cover_do'];"
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
                      "label": "Panel",
                      "mask": false,
                      "type": "panel",
                      "input": false,
                      "key": "policySRSPanel",
                      "components": [
                        {
                          "label": "Versicherungsbeginn Strafrechtsschutz",
                          "format": "dd.MM.yyyy",
                          "placeholder": "Gewünschten Versicherungsbeginn eingeben",
                          "description": "z.B.: 20.07.2018",
                          "mask": false,
                          "clearOnHide": false,
                          "tooltip": "Hier können Sie den gewünschten Versicherungsbeginn für Ihre Strafrechtsschutz Versicherung eingeben.\nFormat vom Datum ist TT.MM.JJJJ",
                          "type": "datetime",
                          "input": true,
                          "key": "begin_date_srs",
                          "datePicker": {
                            "startingDay": 1,
                            "minDate": "moment()",
                            "datepickerMode": "day",
                            "yearRows": "4",
                            "yearColumns": "5"
                          },
                          "tags": [],
                          "conditional": {
                            "show": ""
                          },
                          "properties": {
                            "autocalc": "fieldchange"
                          },
                          "lockKey": true,
                          "$$hashKey": "object:3545",
                          "suffix": true,
                          "enableTime": false,
                          "timePicker": {
                            "showMeridian": false
                          }
                        },
                        {
                          "label": "Fälligkeitsdatum Strafrechtsschutz",
                          "placeholder": "Nächste Hauptfälligkeit eingeben",
                          "description": "z.B.: 01.08.",
                          "inputMask": "99.99.",
                          "clearOnHide": false,
                          "allowMultipleMasks": false,
                          "showWordCount": false,
                          "showCharCount": false,
                          "tooltip": "Hier können Sie die gewünschten nächste Hauptfälligkeit Ihrer Strafrechtsschutz Versicherung eingeben.\nFormat vom Datum ist TT.MM.",
                          "type": "textfield",
                          "key": "due_date_srs",
                          "input": true,
                          "validate": {
                            "pattern": "((0[1-9]|[1-2][0-9]|3(0|1))[.](0(1|3|5|7|8)|10|12)|(0[1-9]|[1-2][0-9]|30)[.](0(4|6|9)|11)|(0[1-9]|[1-2][0-9])[.]02)[.]",
                            "unique": false,
                            "customMessage": "Die Eingabe muss TT.MM. entsprechen und ist daher mit 31.12. maximiert.",
                            "json": ""
                          },
                          "conditional": {
                            "json": ""
                          },
                          "properties": {
                            "autocalc": "fieldchange"
                          },
                          "customConditional": ""
                        },
                        {
                          "columns": [
                            {
                              "components": [
                                {
                                  "label": "Polizze SRS herunterladen",
                                  "showValidations": false,
                                  "custom": "TogFormViewer.openFile(TogFormViewer.getAppInfo().resolvedProperties.home+\"/Quote(\"+TogFormViewer.getAppInfo().dataObj.id+\")/PolizzeSRS\",\"dualpolicysrs\")",
                                  "customClass": "buttonCustom1",
                                  "mask": false,
                                  "action": "custom",
                                  "theme": "primary",
                                  "type": "button",
                                  "key": "downloadPolicySRS",
                                  "customConditional": "show= !policyChanged && data['pathPolicySRS'] != undefined;",
                                  "input": true,
                                  "conditional": {
                                    "json": ""
                                  }
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
                                  "label": "Rechnung SRS herunterladen",
                                  "showValidations": false,
                                  "custom": "TogFormViewer.openFile(TogFormViewer.getAppInfo().resolvedProperties.home+\"/Quote(\"+TogFormViewer.getAppInfo().dataObj.id+\")/RechnungSRS\",\"dualinvoicesrs\")",
                                  "customClass": "buttonCustom1",
                                  "mask": false,
                                  "action": "custom",
                                  "theme": "primary",
                                  "type": "button",
                                  "input": true,
                                  "key": "invoicePolicySRS",
                                  "properties": [
                                    {
                                      "key": "",
                                      "value": ""
                                    }
                                  ],
                                  "tags": [],
                                  "conditional": {
                                    "json": ""
                                  },
                                  "customConditional": "show= !policyChanged && data['pathPolicySRS'] != undefined;"
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
                          ],
                          "label": "Columns",
                          "mask": false,
                          "type": "columns",
                          "input": false,
                          "key": "policySRSButtonsColumns",
                          "properties": [
                            {
                              "key": "",
                              "value": ""
                            }
                          ],
                          "tags": []
                        }
                      ],
                      "properties": [
                        {
                          "key": "",
                          "value": ""
                        }
                      ],
                      "tags": [],
                      "conditional": {
                        "json": ""
                      },
                      "customConditional": "show = data['select_insurance_cover_srs'];"
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
              ],
              "label": "Columns",
              "mask": false,
              "type": "columns",
              "input": false,
              "key": "dateDoColumns",
              "conditional": {
                "json": ""
              },
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "customConditional": "",
              "tags": []
            },
            {
              "columns": [
                {
                  "components": [
                    {
                      "columns": [
                        {
                          "components": [
                            {
                              "label": "Polizze & Rechnung erstellen",
                              "action": "event",
                              "showValidations": false,
                              "theme": "primary",
                              "customClass": "buttonCustom1",
                              "mask": false,
                              "type": "button",
                              "input": true,
                              "key": "createPolicy",
                              "properties": {
                                "action": "Quote/CreatePolicy",
                                "aaction click local script": "dirtyFlagChangedListener(togFormViewerEvent)"
                              },
                              "tags": [],
                              "validate": {
                                "unique": false,
                                "customMessage": "",
                                "json": ""
                              },
                              "conditional": {
                                "json": ""
                              },
                              "customConditional": "if (data['select_insurance_cover_do'] && data['select_insurance_cover_srs'])\r\n{\r\n    show = policyChanged && data['begin_date_do']!='' && data['due_date_do']!='' && data['begin_date_srs']!='' && data['due_date_srs']!='' && formioForm.getComponent('due_date_do').errors.length==0 && formioForm.getComponent('due_date_srs').errors.length==0;\r\n}\r\nelse if (data['select_insurance_cover_do'])\r\n{\r\n    show = policyChanged && data['begin_date_do']!='' && data['due_date_do']!='' && formioForm.getComponent('due_date_do').errors.length==0;\r\n}\r\nelse if (data['select_insurance_cover_srs'])\r\n{\r\n    show = policyChanged && data['begin_date_srs']!='' && data['due_date_srs']!='' && formioForm.getComponent('due_date_srs').errors.length==0;\r\n}\r\nelse\r\n{\r\n    show = false;\r\n}"
                            },
                            {
                              "label": "Polizze & Rechnung senden",
                              "showValidations": false,
                              "customClass": "buttonCustom1",
                              "mask": false,
                              "action": "event",
                              "theme": "primary",
                              "type": "button",
                              "input": true,
                              "key": "sendPolicy",
                              "properties": {
                                "action": "Quote/SendPolicyClient"
                              },
                              "tags": [],
                              "conditional": {
                                "json": ""
                              },
                              "customConditional": "show=!policyChanged && (data['pathPolicyDO'] != undefined || data['pathPolicySRS'] != undefined);"
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
                          "components": [],
                          "width": 6,
                          "offset": 0,
                          "push": 0,
                          "pull": 0,
                          "type": "column",
                          "input": true,
                          "key": "",
                          "label": ""
                        }
                      ],
                      "label": "Columns",
                      "mask": false,
                      "type": "columns",
                      "input": false,
                      "key": "policyButtonsSubColumns",
                      "properties": [
                        {
                          "key": "",
                          "value": ""
                        }
                      ],
                      "tags": []
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
                  "components": [],
                  "width": 6,
                  "offset": 0,
                  "push": 0,
                  "pull": 0,
                  "type": "column",
                  "input": true,
                  "key": "",
                  "label": ""
                }
              ],
              "label": "Columns",
              "mask": false,
              "type": "columns",
              "input": false,
              "key": "policyButtonsColumns",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": [],
              "conditional": {
                "json": ""
              },
              "customConditional": ""
            },
            {
              "input": false,
              "key": "policySubColumns1",
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Konsolidiertes Eigenkapital (in EUR)",
                      "placeholder": "Bitte hier das konsolidierte Eigenkapital (in EUR) eingeben",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "balance_sheet_total_equity_do",
                      "tooltip": "Das Eigenkapital ist ein Kriterium für die D&O Polizze.",
                      "validate": {
                        "min": 0,
                        "customMessage": "Ein negatives Eigenkapital ist anfragepflichtig"
                      }
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
                      "label": "Konsolidierter Bilanzsumme (in EUR)",
                      "placeholder": "Bitte hier die konsolidierte Bilanzsumme (in EUR) eingeben",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "balance_sheet_total_assets_do",
                      "tooltip": "Die Bilanzsumme ist ein Kriterium für die D&O Polizze"
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
            },
            {
              "input": false,
              "key": "policySubColumns2",
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "optionsLabelPosition": "right",
                      "values": [
                        {
                          "label": "Ja",
                          "value": "ja",
                          "shortcut": "J"
                        },
                        {
                          "shortcut": "N",
                          "label": "Nein",
                          "value": "nein"
                        }
                      ],
                      "label": "Bestehende D & O Vorversicherung",
                      "inline": true,
                      "mask": false,
                      "type": "radio",
                      "input": true,
                      "key": "preinsurance_do",
                      "defaultValue": "",
                      "validate": {
                        "unique": false
                      }
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
                  "components": [],
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
            },
            {
              "input": false,
              "key": "policySubColumns3",
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Versicherungssumme bei Abschluß (in EUR)",
                      "placeholder": "Bitte eine Zahl zwischen 500.000,- und 20.000.000,- eingeben",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "sum_insured_preinsurance_do",
                      "validate": {
                        "min": 500000,
                        "customMessage": "Bitte eine Zahl zwischen 500.000,- und 20.000.000,- eingeben",
                        "json": "",
                        "max": 20000000
                      },
                      "customConditional": "show = data['preinsurance_do'] == 'ja';"
                    },
                    {
                      "label": "Vertrag besteht seit",
                      "format": "dd.MM.yyyy",
                      "placeholder": "Beginndatum  des vorvertrages eingeben",
                      "mask": false,
                      "type": "datetime",
                      "input": true,
                      "key": "begin_date_preinsurance_do",
                      "suffix": true,
                      "validate": {
                        "unique": false
                      },
                      "enableTime": false,
                      "datePicker": {
                        "startingDay": 1,
                        "yearRows": "4",
                        "yearColumns": "5"
                      },
                      "timePicker": {
                        "showMeridian": false
                      },
                      "customConditional": "show = data['preinsurance_do'] == 'ja';"
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
                      "label": "Versicherungssummenerhöhung auf (in EUR)",
                      "placeholder": "Bitte eine Zahl zwischen 500.000,- und 20.000.000,- eingeben",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "sum_insured_preinsurance_increase_do",
                      "validate": {
                        "min": 500000,
                        "customMessage": "Bitte eine Zahl zwischen 500.000,- und 20.000.000,- eingeben",
                        "json": "",
                        "max": 20000000
                      },
                      "customConditional": "show = data['preinsurance_do'] == 'ja';"
                    },
                    {
                      "label": "Erhöhung seit",
                      "format": "dd.MM.yyyy",
                      "placeholder": "Datum der Erhöhung eingeben",
                      "mask": false,
                      "type": "datetime",
                      "input": true,
                      "key": "begin_date_preinsurance_increase_do",
                      "suffix": true,
                      "defaultValue": "",
                      "validate": {
                        "unique": false,
                        "customMessage": "",
                        "json": ""
                      },
                      "enableTime": false,
                      "datePicker": {
                        "startingDay": 1,
                        "yearRows": "4",
                        "yearColumns": "5"
                      },
                      "timePicker": {
                        "showMeridian": false
                      },
                      "customConditional": "show = data['preinsurance_do'] == 'ja';"
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
            },
            {
              "label": "Branche/Tätigkeitsbeschreibung",
              "placeholder": "Bitte geben Sie hier Ihre Tätigkeitsbeschreibung ein.",
              "rows": 4,
              "type": "textarea",
              "input": true,
              "key": "industryJobSpecification",
              "tooltip": "Die Eingabe der Branche in der Sie tätig sind mit der dazugehörigen Tätigkeitsbeschreibung ist eine notwendige Risikoinformation für die Antragsannahme.",
              "defaultValue": "",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              },
              "inputFormat": "plain",
              "properties": {},
              "tags": []
            }
          ],
          "properties": [
            {
              "key": "",
              "value": ""
            }
          ],
          "tags": [],
          "conditional": {
            "json": ""
          }
        },
        {
          "columns": [
            {
              "components": [
                {
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Offert herunterladen",
                          "customClass": "buttonCustom1",
                          "key": "downloadOffer",
                          "action": "custom",
                          "theme": "primary",
                          "type": "button",
                          "customConditional": "show=data['pathOffer']!=undefined",
                          "custom": "TogFormViewer.openFile(TogFormViewer.getAppInfo().resolvedProperties.home+\"/Quote(\"+TogFormViewer.getAppInfo().dataObj.id+\")/Offert\",\"dualoffer\")",
                          "input": true
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
                          "label": "Fragebogen herunterladen",
                          "key": "downloadQuestionaire",
                          "action": "custom",
                          "theme": "primary",
                          "type": "button",
                          "customConditional": "show=data['pathQuestionaire']!=undefined",
                          "custom": "TogFormViewer.openFile(TogFormViewer.getAppInfo().resolvedProperties.home+\"/Quote(\"+TogFormViewer.getAppInfo().dataObj.id+\")/Fragebogen\",\"dualquest\")",
                          "input": true
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
                  ],
                  "label": "Columns",
                  "mask": false,
                  "type": "columns",
                  "input": false,
                  "key": "downloadDocumentSubColumns1",
                  "properties": {},
                  "tags": []
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
              "components": [],
              "width": 6,
              "offset": 0,
              "push": 0,
              "pull": 0,
              "type": "column",
              "input": true,
              "key": "",
              "label": ""
            }
          ],
          "label": "Columns",
          "mask": false,
          "type": "columns",
          "input": false,
          "key": "downloadDocumentColumns",
          "properties": {},
          "tags": []
        }
      ],
      "input": false
    },
    {
      "label": "Columns",
      "type": "columns",
      "key": "columns",
      "columns": [
        {
          "components": [
            {
              "label": "Dokument(e) erstellen",
              "key": "saveOffer",
              "action": "event",
              "theme": "primary",
              "type": "button",
              "customConditional": "show=offerChanged&&(!data['select_insurance_cover_do']||(data['premium_do_gros_string']!='INVALID'&&data['premium_do_gros_string']!=''&&data['premium_do_gros_string']!=undefined))&&(!data['select_insurance_cover_srs']||(data['premium_srs_gros_string']!='INVALID'&&data['premium_srs_gros_string']!=''&&data['premium_srs_gros_string']!=undefined))&&(data['select_insurance_cover_do']||data['select_insurance_cover_srs'])&&data['name_client']!=''&&data['street_client']!=''&&data['zip_client']!=''&&data['city_client']!=''&&data['trade_register_no_client']!=''&&data['branding']!=undefined",
              "properties": {
                "action": "Quote",
                "set clean": "true",
                "aaction click local script": "dirtyFlagChangedListener(togFormViewerEvent)"
              },
              "input": true
            },
            {
              "label": "Dokument(e) senden",
              "showValidations": false,
              "customClass": "buttonCustom2",
              "mask": false,
              "action": "event",
              "theme": "primary",
              "type": "button",
              "key": "sendEmail",
              "customConditional": "show=!offerChanged && (data['pathOffer']!=undefined || data['pathQuestionaire']!=undefined) && data['email_client']!='' && formioForm.getComponent('email_client').value && formioForm.getComponent('email_client').errors.length==0;",
              "input": true,
              "conditional": {
                "json": ""
              },
              "properties": {
                "action": "Quote/SendOfferClient"
              }
            },
            {
              "label": " ",
              "hideLabel": true,
              "refreshOnChange": false,
              "mask": false,
              "type": "content",
              "input": false,
              "key": "cntSendEmailError",
              "html": "<p>&lt;p style=\"color:red;\"&gt;Send email error&lt;/p&gt;</p>",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": [],
              "conditional": {
                "json": ""
              },
              "customConditional": "show = (TogFormViewer.extendedServerData !== undefined && TogFormViewer.extendedServerData.errorEmailSent !== undefined && TogFormViewer.extendedServerData.errorEmailSent !== null)"
            },
            {
              "label": "id",
              "key": "idTemp",
              "type": "textfield",
              "hideLabel": true,
              "disabled": true,
              "hidden": true,
              "input": true,
              "clearOnHide": false
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
          "components": [],
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
          "components": [],
          "width": 8,
          "offset": 0,
          "push": 0,
          "pull": 0,
          "type": "column",
          "input": true,
          "key": "",
          "label": ""
        }
      ],
      "input": false
    },
    {
      "label": "Panel",
      "title": "Fragebogen D&O und Unternehmens-Strafrechtsschutzversicherung ",
      "mask": false,
      "type": "panel",
      "input": false,
      "key": "questionnairePanel",
      "components": [
        {
          "mask": false,
          "numRows": 13,
          "numCols": 2,
          "type": "table",
          "input": false,
          "key": "table",
          "label": "",
          "rows": [
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "clearOnHide": false,
                    "persistent": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "content1",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Versicherungsnehmerin</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "clearOnHide": false,
                    "persistent": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "content2",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>MnM Gmbh, Hauptstrasse 23, 2222 Wien, Hn1235689</p>"
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q1",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Der Versicherungsnehmer ist in einem der im Anhang aufgelisteten Bereiche tätig?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ1",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q2",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Die Versicherungsnehmerin ist ein \"junges\" Unternehmen (d.h. seit weniger als 2 Jahren im Firmenbuch eingetragen)?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ2",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q3",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Es werden Anteile der Versicherungsnehmerin oder einer Tochtergesellschaft an einer Börse gehandelt und/oder es ist ein Börsengang geplant?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ3",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q4",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Die Versicherungsnehmerin hat Tochterunternehmen in den USA/Kanada, deren (Gesamt-) Bilanzsumme 20% der konsolidierten Unternehmensbilanzsumme übersteigen?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ4",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q5",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Die Versicherungsnehmerin hat in den letzten zwei Geschäftsjahren einen (konsolidierten) Jahresüberschuss erwirtschaftet.</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ5",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q6",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Bestehende D&amp;O Vorversicherung</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ6",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q7",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Wurden Schadenmeldungen zu bestehenden oder früher abgeschlossenen D&amp;O Versicherungsverträgen gemacht?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ7",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q8",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Sind in den letzten 3 Jahren Mitglieder der Geschäftsführung vorzeitig entlassen oder gekündigt worden?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ8",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q9",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>In den vergangenen 5 Jahren wurde gegen eine der zu versichernden Personen Ansprüche im Sinne der beantragten D&amp;O-Deckung geltend gemacht?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ9",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q10",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Dem Antragssteller oder den zu versichernden Personen sind Sachverhalte bekannt, die zu einer Inanspruchnahme der beantragten Deckung führen könnten, z.B. Pflichtverletzungen im Zusammenhang mit seiner/ihrer beruflichen Tätigkeit oder unzureichender Überwachung oder Auswahl von Mitarbeitern, mangelhafter Organisation von Arbeitsprozessen oder sonstigen Tätigkeiten?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ10",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q11",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Es wurden im Zeitraum der vergangenen 5 Jahre außerhalb des Straßenverkehrs Straf- oder Verwaltungsstrafverfahren eingeleitet?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ11",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ],
            [
              {
                "components": [
                  {
                    "refreshOnChange": false,
                    "mask": false,
                    "type": "content",
                    "input": false,
                    "key": "q12",
                    "label": "",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": [],
                    "html": "<p>Dem Antragssteller oder den zu versichernden Personen sind Anzeichen für bevorstehende Strafoder Verwaltungsstrafverfahren außerhalb des Straßenverkehrs bekannt?</p>"
                  }
                ]
              },
              {
                "components": [
                  {
                    "optionsLabelPosition": "left",
                    "values": [
                      {
                        "label": "Ja",
                        "value": "ja",
                        "shortcut": "J"
                      },
                      {
                        "label": "Nein",
                        "value": "nein",
                        "shortcut": "N"
                      }
                    ],
                    "hideLabel": true,
                    "inline": true,
                    "mask": false,
                    "type": "radio",
                    "input": true,
                    "key": "rbQ12",
                    "label": "Radio",
                    "properties": [
                      {
                        "key": "",
                        "value": ""
                      }
                    ],
                    "tags": []
                  }
                ]
              }
            ]
          ],
          "header": []
        }
      ],
      "properties": [
        {
          "key": "",
          "value": ""
        }
      ],
      "tags": [],
      "conditional": {
        "json": ""
      },
      "customConditional": "show = data[\"docId\"] > 0;"
    },
    {
      "label": "Panel",
      "title": "Fragebogen hochladen",
      "mask": false,
      "type": "panel",
      "input": false,
      "key": "uploadFilePanel",
      "components": [
        {
          "label": "Hochladen",
          "hideLabel": true,
          "mask": false,
          "type": "file",
          "input": true,
          "key": "uploadFileComponent",
          "defaultValue": [],
          "storage": "base64",
          "properties": [
            {
              "key": "",
              "value": ""
            }
          ],
          "tags": []
        },
        {
          "label": "Hochladen",
          "headers": [
            {
              "header": "",
              "value": ""
            }
          ],
          "mask": false,
          "action": "event",
          "theme": "primary",
          "type": "button",
          "input": true,
          "key": "uploadFile",
          "properties": {
            "action": "UploadQuestionnaire"
          },
          "tags": [],
          "showValidations": false,
          "dataGridLabel": false,
          "customConditional": "show = typeof formioForm !== 'undefined' && formioForm.getComponent(\"uploadFileComponent\").value.length != 0;"
        }
      ],
      "customConditional": "show = !offerChanged && (data['pathOffer']!=undefined || data['pathQuestionaire']!=undefined);",
      "conditional": {
        "json": ""
      }
    },
    {
      "columns": [
        {
          "components": [
            {
              "label": "begin_date_do_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "begin_date_do_string",
              "conditional": {
                "json": ""
              },
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "customConditional": "",
              "tags": []
            },
            {
              "label": "end_date_do_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "end_date_do_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "premium_do_net_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "premium_do_net_string",
              "validate": {
                "unique": false,
                "customMessage": "",
                "json": ""
              },
              "inputFormat": "plain",
              "defaultValue": "",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "tax11_premium_do_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "tax11_premium_do_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "premium_do_net_prorata_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "premium_do_net_prorata_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "premium_do_gros_prorata_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "premium_do_gros_prorata_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "tax11_premium_do_prorata_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "tax11_premium_do_prorata_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
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
              "label": "begin_date_srs_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "begin_date_srs_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "end_date_srs_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "end_date_srs_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "premium_srs_net_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "premium_srs_net_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "tax11_premium_srs_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "tax11_premium_srs_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "premium_srs_net_prorata_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "premium_srs_net_prorata_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "premium_srs_gros_prorata_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "premium_srs_gros_prorata_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
            },
            {
              "label": "tax11_premium_srs_prorata_string (HIDDEN)",
              "allowMultipleMasks": false,
              "showWordCount": false,
              "showCharCount": false,
              "hidden": true,
              "type": "textfield",
              "input": true,
              "key": "tax11_premium_srs_prorata_string",
              "properties": [
                {
                  "key": "",
                  "value": ""
                }
              ],
              "tags": []
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
      ],
      "label": "Columns",
      "hidden": true,
      "mask": false,
      "type": "columns",
      "input": false,
      "key": "hiddenFieldsColumns",
      "properties": [
        {
          "key": "",
          "value": ""
        }
      ],
      "tags": []
    },
    {
      "label": "Show data",
      "key": "showData",
      "action": "custom",
      "theme": "primary",
      "type": "button",
      "custom": "TogFormViewer.showData()",
      "customConditional": "",
      "input": true
    }
  ]
};