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
                  "key": "id",
                  "customDefaultValue": "function uuidv4() {\n  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>\n    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)\n  )\n}\n\nvalue = uuidv4();"
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
                  "key": "objectId"
                },
                {
                  "label": "Environment ID",
                  "disabled": true,
                  "type": "textfield",
                  "clearOnHide": false,
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
      "key": "columnsTopNames",
      "type": "columns",
      "columns": [
        {
          "width": 10,
          "type": "column",
          "key": "middle",
          "components": [
            {
              "type": "textarea",
              "key": "warning",
              "label": "Warning",
              "placeholder": "You can enter a warning text here, it will be displayed in highlighted color and a little bit bigger, you can add more than one line using ENTER...",
              "customClass": "warningarea",
              "tooltip": "Just a text that everybody should see first.",
              "description": "e.g. This is a special contact of Peter, please contact with him before approaching this contact.",
              "rows": 2
            },
            {
              "key": "columnsTopNames",
              "type": "columns",
              "columns": [
                {
                  "type": "column",
                  "key": "left",
                  "width": 8,
                  "components": [
                    {
                      "type": "textfield",
                      "key": "displayName",
                      "multiple": true,
                      "label": "Display Name",
                      "addAnother": " ",
                      "placeholder": "Please enter the display name here, you can add more lines too...",
                      "description": "e.g. Miller, Contoso & Partners Public Company Limited - or - Miller Robert, Dr.",
                      "tooltip": "The name of the contact that gets displayed e.g. in lists or on top of forms, some lines from the top or all of the lines might get displayed.",
                      "validate": {"required": true}
                    }
                  ]
                },
                {
                  "width": 4,
                  "type": "column",
                  "key": "middle",
                  "components": [
                    {
                      "type": "textfield",
                      "key": "shortNames",
                      "multiple": true,
                      "label": "Short Names",
                      "description": "e.g. MCP",
                      "addAnother": " ",
                      "placeholder": "Please enter a shortname here, you can add more than one line...",
                      "tooltip": "Provide optional shortname(s) for easy searching."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "width": 2,
          "type": "column",
          "key": "right",
          "components": [
            {
              "type": "htmlelement",
              "tag": "br"
            },
            {
              "label": "Favorite",
              "type": "checkbox",
              "key": "favorite",
              "tooltip": "Is this a favorite contact of yours ?"
            },
            {
              "labelPosition": "right-left",
              "label": "VIP",
              "type": "checkbox",
              "key": "vip",
              "conditional": {
                "show": true,
                "eq": "person",
                "json": "",
                "when": "contactType"
              }
            },
            {
              "attrs": [
                {
                  "attr": "src",
                  "value": "../logos/logo_or_photo.jpg"
                },
                {
                  "attr": "alt",
                  "value": "logo or photo"
                },
                {
                  "attr": "height",
                  "value": "130"
                },
                {
                  "attr": "width",
                  "value": "220"
                }
              ],
              "label": "none",
              "hideLabel": true,
              "tag": "img",
              "type": "htmlelement",
              "key": "logoPhoto"
            }
          ]
        }
      ]
    },    
    
    {
      "type": "htmlelement",
      "key": "topLine",
      "tag": "br"
    },
    {
      "type": "tabs",
      "key": "mainTabs",
      "components": [
        {
          "label": "Contact",
          "key": "contactTab",
          "type": "tab",
          "components": [
            {
              "type": "columns",
              "key": "columnsContactHeader",
              "columns": [
                {
                  "type": "column",
                  "key": "left",
                  "width": 6,
                  "components": [
                    {
                      "type": "select",
                      "key": "contactType",
                      "label": "Type",
                      "tooltip": "The type of the contact, it can be a natural person or an organisation. Enter a sole proprietor company as an organisation, the private person behind it as a natural person if you want to separte the two roles.",
                      "widget": "html5",
                      "defaultValue": "organisation",
                      "description": "Please select 'Organisation' for companies and groups or 'Natural Person' for people",
                      "data": {
                        "values": [
                          {
                            "label": "Organisation",
                            "value": "organisation"
                          },
                          {
                            "label": "Natural Person",
                            "value": "person"
                          }
                        ]
                      },
                      "validate": {
                        "required": true
                      }
                    }
                  ]
                },
                {
                  "components": [
                  ],
                  "width": 6,
                  "type": "column",
                  "key": "right"
                }
              ]
            },
            {
              "type": "fieldset",
              "key": "fieldSetPerson",
              "components": [
                {
                  "key": "columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Titles",
                          "placeholder": "Please enter a title here...",
                          "description": "e.g. Dr.",
                          "multiple": true,
                          "addAnother": " ",
                          "tooltip": "The academic title(s) of the person.",
                          "type": "textfield",
                          "key": "titles"
                        }
                      ],
                      "width": 6,
                      "type": "column"
                    },
                    {
                      "components": [
                        {
                          "label": "Firstnames",
                          "placeholder": "Please enter a firstname here...",
                          "multiple": true,
                          "description": "e.g. John",
                          "addAnother": " ",
                          "type": "textfield",
                          "key": "firstnames",
                          "validate": {
                            "required": true
                          }
                        }
                      ],
                      "width": 6,
                      "type": "column"
                    }
                  ]
                },
                {
                  "key": "columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Lastname",
                          "placeholder": "Please enter the lastname here...",
                          "description": "e.g. Miller",
                          "type": "textfield",
                          "key": "lastname",
                          "validate": {"required": true}
                        },
                        {
                          "label": "Titles after Name",
                          "placeholder": "Please enter a title here...",
                          "description": "e.g. MSc",
                          "multiple": true,
                          "addAnother": " ",
                          "type": "textfield",
                          "key": "titlesAfterName"
                        },
                        {
                          "label": "Lastname at birth",
                          "placeholder": "Please enter the name here...",
                          "description": "e.g. Smith",
                          "type": "textfield",
                          "key": "lastnameAtBirth"
                        }
                      ],
                      "width": 6,
                      "type": "column"
                    },
                    {
                      "components": [
                        {
                          "label": "Middle Initial(s) or Name",
                          "placeholder": "Please enter the middle initial(s) or name here...",
                          "description": "e.g. H.S.",
                          "type": "textfield",
                          "key": "middleInitial"
                        },
                        {
                          "label": "Nicknames",
                          "placeholder": "Please enter a nickname here...",
                          "description": "e.g. Al",
                          "type": "textfield",
                          "addAnother": " ",
                          "multiple": true,
                          "key": "nicknames"
                        },
                        {
                          "label": "Maiden Name",
                          "placeholder": "Please enter the name here...",
                          "description": "e.g. Johnson",
                          "type": "textfield",
                          "key": "maidenName"
                        }
                      ],
                      "width": 6,
                      "type": "column"
                    }
                  ]
                },
                {
                  "key": "columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Gender",
                          "type": "select",
                          "key": "gender",
                          "tooltip": "The gender of the contact.",
                          "placeholder": "Please select the gender here...",
                          "description": "e.g. Male",
                          "widget": "html5",
                          "data": {
                            "values": [
                              {"label":"Male", "value": "male"},
                              {"label":"Female", "value": "female"},
                              {"label":"Other", "value": "other"}
                            ]
                          },
                          "valueProperty": "value"
                        },
                        {
                          "label": "Salutation",
                          "type": "textfield",
                          "description": "e.g. Dear Dr. John Miller,",
                          "placeholder": "Please enter a salutation here...",
                          "key": "salutation"
                        },
                        {
                          "label": "Legal Status",
                          "mask": false,
                          "type": "select",
                          "input": true,
                          "widget": "html5",
                          "key": "status",
                          "defaultValue": "adult",
                          "placeholder": "You can select a legal status here...",
                          "description": "e.g. Minor",
                          "data": {
                            "values": [
                              {"label": "Adult", "value": "adult"},
                              {"label": "Minor", "value": "minor"},
                              {"label": "Deceased", "value": "deceased"},
                              {"label": "Guardian appointed", "value": "guardian"}
                            ]
                          },
                          "valueProperty": "value"
                        }
                      ],
                      "width": 6,
                      "type": "column"
                    },
                    {
                      "components": [
                        {
                          "label": "Gender Comment",
                          "type": "textfield",
                          "description": "e.g. Non-binary",
                          "placeholder": "You can enter a comment here...",
                          "key": "genderComment"
                        },
                        {
                          "label": "Personal Salutation",
                          "type": "textfield",
                          "description": "e.g. Dear Al,",
                          "placeholder": "Please enter a personal salutation here...",
                          "key": "personalSalutation",
                          "tooltip": "When a letter is written by / in the name of the current user then this salutation is used in the letter."
                        },
                        {
                          "type": "textfield",
                          "label": "UserID",
                          "key": "userId",
                          "description": "e.g. james.smith@contoso-miller.com",
                          "disabled": true,
                          "conditional": {
                            "show": true,
                            "eq": "person",
                            "json": "",
                            "when": "contactType"
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
                    }
                  ]
                }          
              ],
              "conditional": {
                "show": true,
                "eq": "person",
                "json": "",
                "when": "contactType"
              },
              "customConditional": ""
            },
            {
              "label": "Field Set",
              "mask": false,
              "type": "fieldset",
              "input": false,
              "key": "fieldSetOrganisation",
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
                          "label": "Name",
                          "placeholder": "Please enter the organisations full (registered) name here...",
                          "description": "e.g. Contoso, Miller, Partners & Co. Public Limited Company",
                          "tooltip": "The legal / registered full name of the organisation without any abbreviations should be entered here.",
                          "allowMultipleMasks": false,
                          "inputMasks": [
                            {
                              "label": "",
                              "mask": ""
                            }
                          ],
                          "showWordCount": false,
                          "showCharCount": false,
                          "autofocus": true,
                          "type": "textfield",
                          "input": true,
                          "key": "name",
                          "validate": {
                            "required": true
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
                          "label": "Legal Entity Type",
                          "type": "select",
                          "key": "legalType",
                          "tooltip": "The type of the legal entity (if any).",
                          "description": "e.g. AT - Gesellschaft mit beschränkter Haftung",
                          "data": {
                            "values": []
                          },
                          "valueProperty": "value"
                        }
                      ],
                      "width": 6,
                      "type": "column",
                      "key": ""
                    }
                  ]
                },                
                {
                  "input": false,
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Name lines in addressing",
                          "placeholder": "Please enter a line of the name here...",
                          "multiple": true,
                          "addAnother": " ",
                          "description": "e.g. Contoso, Miller, Partners & Co. ... in the first line ... and ... Public Limited Company ...in the second line",
                          "tooltip": "If the name is long and would be splitted into two lines e.g. when used in a letters address block, you can manually split the name into two or more lines to make it look better.",
                          "inputMasks": [
                            {
                              "label": "",
                              "mask": ""
                            }
                          ],
                          "showWordCount": false,
                          "showCharCount": false,
                          "type": "textfield",
                          "input": true,
                          "key": "nameLines"
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
                          "label": "Legal Status",
                          "mask": false,
                          "type": "select",
                          "input": true,
                          "defaultValue": "active",
                          "key": "status",
                          "widget": "html5",
                          "tooltip": "The legal status of the organisation. Liquidators or Successors can be set under the tab 'Relations'.",
                          "description": "e.g. active",
                          "data": {
                            "values": [
                              {"label":"in course of formation", "value":"formation"},
                              {"label":"active", "value":"active"},
                              {"label":"dormant", "value":"dormant"},
                              {"label":"in liquidation", "value":"liquidation"},
                              {"label":"liquidated", "value":"liquidated"},
                              {"label":"merged", "value":"merged"}
                            ]
                          },
                          "valueProperty": "value"
                        },
                        {
                          "type": "textfield",
                          "key": "aadTenantId",
                          "label": "Azure Active Directory Tenant Id",
                          "disabled": true,
                          "description": "e.g. 1176fcd9-372f-40cb-8578-f775f4f0662b",
                          "tooltip": "If this organization is using this application then in which AAD e.g. to create user groups ?"
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
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                          
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
              "conditional": {
                "show": true,
                "eq": "organisation",
                "json": "",
                "when": "contactType"
              },
              "customConditional": ""
            }          
          ]
        },
        {
          "label": "Infos",
          "key": "infos",
          "components": [
            {
              "key": "alls",
              "type": "fieldset",
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
                          "type": "textfield",
                          "key": "originCity",
                          "placeholder": "Please enter a city name here...",
                          "label": "City of Origin, Foundation or Birth",
                          "description": "e.g. Vienna"
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
                          "label": "Country of Origin, Foundation or Birth",
                          "type": "select",
                          "key": "originCountry",
                          "tooltip": "The country the person was born or the organisation was founded in.",
                          "description": "e.g. Austria (AUT)",
                          "placeholder": "Please select a country, you can search by typing...",
                          "data": {
                            "values": [
                              {"label": "Afghanistan (AFG)", "value": "AFG"},
                              {"label": "Aland Islands (ALA)", "value": "ALA"},
                              {"label": "Albania (ALB)", "value": "ALB"},
                              {"label": "Algeria (DZA)", "value": "DZA"},
                              {"label": "American Samoa (ASM)", "value": "ASM"},
                              {"label": "Andorra (AND)", "value": "AND"},
                              {"label": "Angola (AGO)", "value": "AGO"},
                              {"label": "Anguilla (AIA)", "value": "AIA"},
                              {"label": "Antarctica (ATA)", "value": "ATA"},
                              {"label": "Antigua and Barbuda (ATG)", "value": "ATG"},
                              {"label": "Argentina (ARG)", "value": "ARG"},
                              {"label": "Armenia (ARM)", "value": "ARM"},
                              {"label": "Aruba (ABW)", "value": "ABW"},
                              {"label": "Australia (AUS)", "value": "AUS"},
                              {"label": "Austria (AUT)", "value": "AUT"},
                              {"label": "Azerbaijan (AZE)", "value": "AZE"},
                              {"label": "Bahamas (BHS)", "value": "BHS"},
                              {"label": "Bahrain (BHR)", "value": "BHR"},
                              {"label": "Bangladesh (BGD)", "value": "BGD"},
                              {"label": "Barbados (BRB)", "value": "BRB"},
                              {"label": "Belarus (BLR)", "value": "BLR"},
                              {"label": "Belgium (BEL)", "value": "BEL"},
                              {"label": "Belize (BLZ)", "value": "BLZ"},
                              {"label": "Benin (BEN)", "value": "BEN"},
                              {"label": "Bermuda (BMU)", "value": "BMU"},
                              {"label": "Bhutan (BTN)", "value": "BTN"},
                              {"label": "Bolivia (BOL)", "value": "BOL"},
                              {"label": "Bosnia and Herzegovina (BIH)", "value": "BIH"},
                              {"label": "Botswana (BWA)", "value": "BWA"},
                              {"label": "Bouvet Island (BVT)", "value": "BVT"},
                              {"label": "Brazil (BRA)", "value": "BRA"},
                              {"label": "British Virgin Islands (VGB)", "value": "VGB"},
                              {"label": "British Indian Ocean Territory (IOT)", "value": "IOT"},
                              {"label": "Brunei Darussalam (BRN)", "value": "BRN"},
                              {"label": "Bulgaria (BGR)", "value": "BGR"},
                              {"label": "Burkina Faso (BFA)", "value": "BFA"},
                              {"label": "Burundi (BDI)", "value": "BDI"},
                              {"label": "Cambodia (KHM)", "value": "KHM"},
                              {"label": "Cameroon (CMR)", "value": "CMR"},
                              {"label": "Canada (CAN)", "value": "CAN"},
                              {"label": "Cape Verde (CPV)", "value": "CPV"},
                              {"label": "Cayman Islands (CYM)", "value": "CYM"},
                              {"label": "Central African Republic (CAF)", "value": "CAF"},
                              {"label": "Chad (TCD)", "value": "TCD"},
                              {"label": "Chile (CHL)", "value": "CHL"},
                              {"label": "China (CHN)", "value": "CHN"},
                              {"label": "Hong Kong, SAR China (HKG)", "value": "HKG"},
                              {"label": "Macao, SAR China (MAC)", "value": "MAC"},
                              {"label": "Christmas Island (CXR)", "value": "CXR"},
                              {"label": "Cocos (Keeling) Islands (CCK)", "value": "CCK"},
                              {"label": "Colombia (COL)", "value": "COL"},
                              {"label": "Comoros (COM)", "value": "COM"},
                              {"label": "Congo (Brazzaville) (COG)", "value": "COG"},
                              {"label": "Congo, (Kinshasa) (COD)", "value": "COD"},
                              {"label": "Cook Islands (COK)", "value": "COK"},
                              {"label": "Costa Rica (CRI)", "value": "CRI"},
                              {"label": "Côte d'Ivoire (CIV)", "value": "CIV"},
                              {"label": "Croatia (HRV)", "value": "HRV"},
                              {"label": "Cuba (CUB)", "value": "CUB"},
                              {"label": "Cyprus (CYP)", "value": "CYP"},
                              {"label": "Czech Republic (CZE)", "value": "CZE"},
                              {"label": "Denmark (DNK)", "value": "DNK"},
                              {"label": "Djibouti (DJI)", "value": "DJI"},
                              {"label": "Dominica (DMA)", "value": "DMA"},
                              {"label": "Dominican Republic (DOM)", "value": "DOM"},
                              {"label": "Ecuador (ECU)", "value": "ECU"},
                              {"label": "Egypt (EGY)", "value": "EGY"},
                              {"label": "El Salvador (SLV)", "value": "SLV"},
                              {"label": "Equatorial Guinea (GNQ)", "value": "GNQ"},
                              {"label": "Eritrea (ERI)", "value": "ERI"},
                              {"label": "Estonia (EST)", "value": "EST"},
                              {"label": "Ethiopia (ETH)", "value": "ETH"},
                              {"label": "Falkland Islands (Malvinas) (FLK)", "value": "FLK"},
                              {"label": "Faroe Islands (FRO)", "value": "FRO"},
                              {"label": "Fiji (FJI)", "value": "FJI"},
                              {"label": "Finland (FIN)", "value": "FIN"},
                              {"label": "France (FRA)", "value": "FRA"},
                              {"label": "French Guiana (GUF)", "value": "GUF"},
                              {"label": "French Polynesia (PYF)", "value": "PYF"},
                              {"label": "French Southern Territories (ATF)", "value": "ATF"},
                              {"label": "Gabon (GAB)", "value": "GAB"},
                              {"label": "Gambia (GMB)", "value": "GMB"},
                              {"label": "Georgia (GEO)", "value": "GEO"},
                              {"label": "Germany (DEU)", "value": "DEU"},
                              {"label": "Ghana (GHA)", "value": "GHA"},
                              {"label": "Gibraltar (GIB)", "value": "GIB"},
                              {"label": "Greece (GRC)", "value": "GRC"},
                              {"label": "Greenland (GRL)", "value": "GRL"},
                              {"label": "Grenada (GRD)", "value": "GRD"},
                              {"label": "Guadeloupe (GLP)", "value": "GLP"},
                              {"label": "Guam (GUM)", "value": "GUM"},
                              {"label": "Guatemala (GTM)", "value": "GTM"},
                              {"label": "Guernsey (GGY)", "value": "GGY"},
                              {"label": "Guinea (GIN)", "value": "GIN"},
                              {"label": "Guinea-Bissau (GNB)", "value": "GNB"},
                              {"label": "Guyana (GUY)", "value": "GUY"},
                              {"label": "Haiti (HTI)", "value": "HTI"},
                              {"label": "Heard and Mcdonald Islands (HMD)", "value": "HMD"},
                              {"label": "Holy See (Vatican City State) (VAT)", "value": "VAT"},
                              {"label": "Honduras (HND)", "value": "HND"},
                              {"label": "Hungary (HUN)", "value": "HUN"},
                              {"label": "Iceland (ISL)", "value": "ISL"},
                              {"label": "India (IND)", "value": "IND"},
                              {"label": "Indonesia (IDN)", "value": "IDN"},
                              {"label": "Iran, Islamic Republic of (IRN)", "value": "IRN"},
                              {"label": "Iraq (IRQ)", "value": "IRQ"},
                              {"label": "Ireland (IRL)", "value": "IRL"},
                              {"label": "Isle of Man (IMN)", "value": "IMN"},
                              {"label": "Israel (ISR)", "value": "ISR"},
                              {"label": "Italy (ITA)", "value": "ITA"},
                              {"label": "Jamaica (JAM)", "value": "JAM"},
                              {"label": "Japan (JPN)", "value": "JPN"},
                              {"label": "Jersey (JEY)", "value": "JEY"},
                              {"label": "Jordan (JOR)", "value": "JOR"},
                              {"label": "Kazakhstan (KAZ)", "value": "KAZ"},
                              {"label": "Kenya (KEN)", "value": "KEN"},
                              {"label": "Kiribati (KIR)", "value": "KIR"},
                              {"label": "Korea (North) (PRK)", "value": "PRK"},
                              {"label": "Korea (South) (KOR)", "value": "KOR"},
                              {"label": "Kuwait (KWT)", "value": "KWT"},
                              {"label": "Kyrgyzstan (KGZ)", "value": "KGZ"},
                              {"label": "Lao PDR (LAO)", "value": "LAO"},
                              {"label": "Latvia (LVA)", "value": "LVA"},
                              {"label": "Lebanon (LBN)", "value": "LBN"},
                              {"label": "Lesotho (LSO)", "value": "LSO"},
                              {"label": "Liberia (LBR)", "value": "LBR"},
                              {"label": "Libya (LBY)", "value": "LBY"},
                              {"label": "Liechtenstein (LIE)", "value": "LIE"},
                              {"label": "Lithuania (LTU)", "value": "LTU"},
                              {"label": "Luxembourg (LUX)", "value": "LUX"},
                              {"label": "Macedonia, Republic of (MKD)", "value": "MKD"},
                              {"label": "Madagascar (MDG)", "value": "MDG"},
                              {"label": "Malawi (MWI)", "value": "MWI"},
                              {"label": "Malaysia (MYS)", "value": "MYS"},
                              {"label": "Maldives (MDV)", "value": "MDV"},
                              {"label": "Mali (MLI)", "value": "MLI"},
                              {"label": "Malta (MLT)", "value": "MLT"},
                              {"label": "Marshall Islands (MHL)", "value": "MHL"},
                              {"label": "Martinique (MTQ)", "value": "MTQ"},
                              {"label": "Mauritania (MRT)", "value": "MRT"},
                              {"label": "Mauritius (MUS)", "value": "MUS"},
                              {"label": "Mayotte (MYT)", "value": "MYT"},
                              {"label": "Mexico (MEX)", "value": "MEX"},
                              {"label": "Micronesia, Federated States of (FSM)", "value": "FSM"},
                              {"label": "Moldova (MDA)", "value": "MDA"},
                              {"label": "Monaco (MCO)", "value": "MCO"},
                              {"label": "Mongolia (MNG)", "value": "MNG"},
                              {"label": "Montenegro (MNE)", "value": "MNE"},
                              {"label": "Montserrat (MSR)", "value": "MSR"},
                              {"label": "Morocco (MAR)", "value": "MAR"},
                              {"label": "Mozambique (MOZ)", "value": "MOZ"},
                              {"label": "Myanmar (MMR)", "value": "MMR"},
                              {"label": "Namibia (NAM)", "value": "NAM"},
                              {"label": "Nauru (NRU)", "value": "NRU"},
                              {"label": "Nepal (NPL)", "value": "NPL"},
                              {"label": "Netherlands (NLD)", "value": "NLD"},
                              {"label": "Netherlands Antilles (ANT)", "value": "ANT"},
                              {"label": "New Caledonia (NCL)", "value": "NCL"},
                              {"label": "New Zealand (NZL)", "value": "NZL"},
                              {"label": "Nicaragua (NIC)", "value": "NIC"},
                              {"label": "Niger (NER)", "value": "NER"},
                              {"label": "Nigeria (NGA)", "value": "NGA"},
                              {"label": "Niue (NIU)", "value": "NIU"},
                              {"label": "Norfolk Island (NFK)", "value": "NFK"},
                              {"label": "Northern Mariana Islands (MNP)", "value": "MNP"},
                              {"label": "Norway (NOR)", "value": "NOR"},
                              {"label": "Oman (OMN)", "value": "OMN"},
                              {"label": "Pakistan (PAK)", "value": "PAK"},
                              {"label": "Palau (PLW)", "value": "PLW"},
                              {"label": "Palestinian Territory (PSE)", "value": "PSE"},
                              {"label": "Panama (PAN)", "value": "PAN"},
                              {"label": "Papua New Guinea (PNG)", "value": "PNG"},
                              {"label": "Paraguay (PRY)", "value": "PRY"},
                              {"label": "Peru (PER)", "value": "PER"},
                              {"label": "Philippines (PHL)", "value": "PHL"},
                              {"label": "Pitcairn (PCN)", "value": "PCN"},
                              {"label": "Poland (POL)", "value": "POL"},
                              {"label": "Portugal (PRT)", "value": "PRT"},
                              {"label": "Puerto Rico (PRI)", "value": "PRI"},
                              {"label": "Qatar (QAT)", "value": "QAT"},
                              {"label": "Réunion (REU)", "value": "REU"},
                              {"label": "Romania (ROU)", "value": "ROU"},
                              {"label": "Russian Federation (RUS)", "value": "RUS"},
                              {"label": "Rwanda (RWA)", "value": "RWA"},
                              {"label": "Saint-Barthélemy (BLM)", "value": "BLM"},
                              {"label": "Saint Helena (SHN)", "value": "SHN"},
                              {"label": "Saint Kitts and Nevis (KNA)", "value": "KNA"},
                              {"label": "Saint Lucia (LCA)", "value": "LCA"},
                              {"label": "Saint-Martin (French part) (MAF)", "value": "MAF"},
                              {"label": "Saint Pierre and Miquelon (SPM)", "value": "SPM"},
                              {"label": "Saint Vincent and Grenadines (VCT)", "value": "VCT"},
                              {"label": "Samoa (WSM)", "value": "WSM"},
                              {"label": "San Marino (SMR)", "value": "SMR"},
                              {"label": "Sao Tome and Principe (STP)", "value": "STP"},
                              {"label": "Saudi Arabia (SAU)", "value": "SAU"},
                              {"label": "Senegal (SEN)", "value": "SEN"},
                              {"label": "Serbia (SRB)", "value": "SRB"},
                              {"label": "Seychelles (SYC)", "value": "SYC"},
                              {"label": "Sierra Leone (SLE)", "value": "SLE"},
                              {"label": "Singapore (SGP)", "value": "SGP"},
                              {"label": "Slovakia (SVK)", "value": "SVK"},
                              {"label": "Slovenia (SVN)", "value": "SVN"},
                              {"label": "Solomon Islands (SLB)", "value": "SLB"},
                              {"label": "Somalia (SOM)", "value": "SOM"},
                              {"label": "South Africa (ZAF)", "value": "ZAF"},
                              {"label": "South Georgia and the South Sandwich Islands (SGS)", "value": "SGS"},
                              {"label": "South Sudan (SSD)", "value": "SSD"},
                              {"label": "Spain (ESP)", "value": "ESP"},
                              {"label": "Sri Lanka (LKA)", "value": "LKA"},
                              {"label": "Sudan (SDN)", "value": "SDN"},
                              {"label": "Suriname (SUR)", "value": "SUR"},
                              {"label": "Svalbard and Jan Mayen Islands (SJM)", "value": "SJM"},
                              {"label": "Swaziland (SWZ)", "value": "SWZ"},
                              {"label": "Sweden (SWE)", "value": "SWE"},
                              {"label": "Switzerland (CHE)", "value": "CHE"},
                              {"label": "Syrian Arab Republic (Syria) (SYR)", "value": "SYR"},
                              {"label": "Taiwan, Republic of China (TWN)", "value": "TWN"},
                              {"label": "Tajikistan (TJK)", "value": "TJK"},
                              {"label": "Tanzania, United Republic of (TZA)", "value": "TZA"},
                              {"label": "Thailand (THA)", "value": "THA"},
                              {"label": "Timor-Leste (TLS)", "value": "TLS"},
                              {"label": "Togo (TGO)", "value": "TGO"},
                              {"label": "Tokelau (TKL)", "value": "TKL"},
                              {"label": "Tonga (TON)", "value": "TON"},
                              {"label": "Trinidad and Tobago (TTO)", "value": "TTO"},
                              {"label": "Tunisia (TUN)", "value": "TUN"},
                              {"label": "Turkey (TUR)", "value": "TUR"},
                              {"label": "Turkmenistan (TKM)", "value": "TKM"},
                              {"label": "Turks and Caicos Islands (TCA)", "value": "TCA"},
                              {"label": "Tuvalu (TUV)", "value": "TUV"},
                              {"label": "Uganda (UGA)", "value": "UGA"},
                              {"label": "Ukraine (UKR)", "value": "UKR"},
                              {"label": "United Arab Emirates (ARE)", "value": "ARE"},
                              {"label": "United Kingdom (GBR)", "value": "GBR"},
                              {"label": "United States of America (USA)", "value": "USA"},
                              {"label": "US Minor Outlying Islands (UMI)", "value": "UMI"},
                              {"label": "Uruguay (URY)", "value": "URY"},
                              {"label": "Uzbekistan (UZB)", "value": "UZB"},
                              {"label": "Vanuatu (VUT)", "value": "VUT"},
                              {"label": "Venezuela (Bolivarian Republic) (VEN)", "value": "VEN"},
                              {"label": "Viet Nam (VNM)", "value": "VNM"},
                              {"label": "Virgin Islands, US (VIR)", "value": "VIR"},
                              {"label": "Wallis and Futuna Islands (WLF)", "value": "WLF"},
                              {"label": "Western Sahara (ESH)", "value": "ESH"},
                              {"label": "Yemen (YEM)", "value": "YEM"},
                              {"label": "Zambia (ZMB)", "value": "ZMB"},
                              {"label": "Zimbabwe (ZWE)", "value": "ZWE"}
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
                  ]
                },
                {
                  "input": false,
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "key": "languages",
                          "label": "Languages",
                          "hideLabel": true,
                          "type": "datagrid",
                          "addAnother": " ",
                          "tooltip": "The languages that this contact is speaking / people in this organisation are speaking. The first one that you enter is used as default.",
                          "description": "e.g. German (Austria) (de-AT) but also lots of native speaking Hungarians.",
                          "components": [
                            {
                              "label": "Languages",
                              "type": "select",
                              "key": "language",
                              "tooltip": "The language that this contact is speaking / people in this organisation are speaking. The first one that you enter is used as default.",
                              "placeholder": "Please a languages / locale, you can search by typing...",
                              "data": {
                                "values": [
                                  {"label": "Afrikaans (South Africa) (af-ZA)", "value": "af-ZA"},
                                  {"label": "Arabic (U.A.E.) (ar-AE)", "value": "ar-AE"},
                                  {"label": "Arabic (Bahrain) (ar-BH)", "value": "ar-BH"},
                                  {"label": "Arabic (Algeria) (ar-DZ)", "value": "ar-DZ"},
                                  {"label": "Arabic (Egypt) (ar-EG)", "value": "ar-EG"},
                                  {"label": "Arabic (Iraq) (ar-IQ)", "value": "ar-IQ"},
                                  {"label": "Arabic (Jordan) (ar-JO)", "value": "ar-JO"},
                                  {"label": "Arabic (Kuwait) (ar-KW)", "value": "ar-KW"},
                                  {"label": "Arabic (Lebanon) (ar-LB)", "value": "ar-LB"},
                                  {"label": "Arabic (Libya) (ar-LY)", "value": "ar-LY"},
                                  {"label": "Arabic (Morocco) (ar-MA)", "value": "ar-MA"},
                                  {"label": "Arabic (Oman) (ar-OM)", "value": "ar-OM"},
                                  {"label": "Arabic (Qatar) (ar-QA)", "value": "ar-QA"},
                                  {"label": "Arabic (Saudi Arabia) (ar-SA)", "value": "ar-SA"},
                                  {"label": "Arabic (Syria) (ar-SY)", "value": "ar-SY"},
                                  {"label": "Arabic (Tunisia) (ar-TN)", "value": "ar-TN"},
                                  {"label": "Arabic (Yemen) (ar-YE)", "value": "ar-YE"},
                                  {"label": "Azeri (Cyrillic, Azerbaijan) (az-Cyrl-AZ)", "value": "az-Cyrl-AZ"},
                                  {"label": "Azeri (Latin, Azerbaijan) (az-Latn-AZ)", "value": "az-Latn-AZ"},
                                  {"label": "Belarusian (Belarus) (be-BY)", "value": "be-BY"},
                                  {"label": "Bulgarian (Bulgaria) (bg-BG)", "value": "bg-BG"},
                                  {"label": "Bosnian (Bosnia and Herzegovina) (bs-Latn-BA)", "value": "bs-Latn-BA"},
                                  {"label": "Catalan (Catalan) (ca-ES)", "value": "ca-ES"},
                                  {"label": "Czech (Czech Republic) (cs-CZ)", "value": "cs-CZ"},
                                  {"label": "Welsh (United Kingdom) (cy-GB)", "value": "cy-GB"},
                                  {"label": "Danish (Denmark) (da-DK)", "value": "da-DK"},
                                  {"label": "German (Austria) (de-AT)", "value": "de-AT"},
                                  {"label": "German (Switzerland) (de-CH)", "value": "de-CH"},
                                  {"label": "German (Germany) (de-DE)", "value": "de-DE"},
                                  {"label": "German (Liechtenstein) (de-LI)", "value": "de-LI"},
                                  {"label": "German (Luxembourg) (de-LU)", "value": "de-LU"},
                                  {"label": "Divehi (Maldives) (dv-MV)", "value": "dv-MV"},
                                  {"label": "Greek (Greece) (el-GR)", "value": "el-GR"},
                                  {"label": "English (Caribbean) (en-029)", "value": "en-029"},
                                  {"label": "English (Australia) (en-AU)", "value": "en-AU"},
                                  {"label": "English (Belize) (en-BZ)", "value": "en-BZ"},
                                  {"label": "English (Canada) (en-CA)", "value": "en-CA"},
                                  {"label": "English (United Kingdom) (en-GB)", "value": "en-GB"},
                                  {"label": "English (Ireland) (en-IE)", "value": "en-IE"},
                                  {"label": "English (Jamaica) (en-JM)", "value": "en-JM"},
                                  {"label": "English (New Zealand) (en-NZ)", "value": "en-NZ"},
                                  {"label": "English (Republic of the Philippines) (en-PH)", "value": "en-PH"},
                                  {"label": "English (Trinidad and Tobago) (en-TT)", "value": "en-TT"},
                                  {"label": "English (United States) (en-US)", "value": "en-US"},
                                  {"label": "English (South Africa) (en-ZA)", "value": "en-ZA"},
                                  {"label": "English (Zimbabwe) (en-ZW)", "value": "en-ZW"},
                                  {"label": "Spanish (Argentina) (es-AR)", "value": "es-AR"},
                                  {"label": "Spanish (Bolivia) (es-BO)", "value": "es-BO"},
                                  {"label": "Spanish (Chile) (es-CL)", "value": "es-CL"},
                                  {"label": "Spanish (Colombia) (es-CO)", "value": "es-CO"},
                                  {"label": "Spanish (Costa Rica) (es-CR)", "value": "es-CR"},
                                  {"label": "Spanish (Dominican Republic) (es-DO)", "value": "es-DO"},
                                  {"label": "Spanish (Ecuador) (es-EC)", "value": "es-EC"},
                                  {"label": "Spanish (Spain) (es-ES)", "value": "es-ES"},
                                  {"label": "Spanish (Guatemala) (es-GT)", "value": "es-GT"},
                                  {"label": "Spanish (Honduras) (es-HN)", "value": "es-HN"},
                                  {"label": "Spanish (Mexico) (es-MX)", "value": "es-MX"},
                                  {"label": "Spanish (Nicaragua) (es-NI)", "value": "es-NI"},
                                  {"label": "Spanish (Panama) (es-PA)", "value": "es-PA"},
                                  {"label": "Spanish (Peru) (es-PE)", "value": "es-PE"},
                                  {"label": "Spanish (Puerto Rico) (es-PR)", "value": "es-PR"},
                                  {"label": "Spanish (Paraguay) (es-PY)", "value": "es-PY"},
                                  {"label": "Spanish (El Salvador) (es-SV)", "value": "es-SV"},
                                  {"label": "Spanish (Uruguay) (es-UY)", "value": "es-UY"},
                                  {"label": "Spanish (Venezuela) (es-VE)", "value": "es-VE"},
                                  {"label": "Estonian (Estonia) (et-EE)", "value": "et-EE"},
                                  {"label": "Basque (Basque) (eu-ES)", "value": "eu-ES"},
                                  {"label": "Persian (Iran) (fa-IR)", "value": "fa-IR"},
                                  {"label": "Finnish (Finland) (fi-FI)", "value": "fi-FI"},
                                  {"label": "Faroese (Faroe Islands) (fo-FO)", "value": "fo-FO"},
                                  {"label": "French (Belgium) (fr-BE)", "value": "fr-BE"},
                                  {"label": "French (Canada) (fr-CA)", "value": "fr-CA"},
                                  {"label": "French (Switzerland) (fr-CH)", "value": "fr-CH"},
                                  {"label": "French (France) (fr-FR)", "value": "fr-FR"},
                                  {"label": "French (Luxembourg) (fr-LU)", "value": "fr-LU"},
                                  {"label": "French (Principality of Monaco) (fr-MC)", "value": "fr-MC"},
                                  {"label": "Galician (Galician) (gl-ES)", "value": "gl-ES"},
                                  {"label": "Gujarati (India) (gu-IN)", "value": "gu-IN"},
                                  {"label": "Hebrew (Israel) (he-IL)", "value": "he-IL"},
                                  {"label": "Hindi (India) (hi-IN)", "value": "hi-IN"},
                                  {"label": "Croatian (Bosnia and Herzegovina) (hr-BA)", "value": "hr-BA"},
                                  {"label": "Croatian (Croatia) (hr-HR)", "value": "hr-HR"},
                                  {"label": "Hungarian (Hungary) (hu-HU)", "value": "hu-HU"},
                                  {"label": "Armenian (Armenia) (hy-AM)", "value": "hy-AM"},
                                  {"label": "Indonesian (Indonesia) (id-ID)", "value": "id-ID"},
                                  {"label": "Icelandic (Iceland) (is-IS)", "value": "is-IS"},
                                  {"label": "Italian (Switzerland) (it-CH)", "value": "it-CH"},
                                  {"label": "Italian (Italy) (it-IT)", "value": "it-IT"},
                                  {"label": "Japanese (Japan) (ja-JP)", "value": "ja-JP"},
                                  {"label": "Georgian (Georgia) (ka-GE)", "value": "ka-GE"},
                                  {"label": "Kazakh (Kazakhstan) (kk-KZ)", "value": "kk-KZ"},
                                  {"label": "Kannada (India) (kn-IN)", "value": "kn-IN"},
                                  {"label": "Korean (Korea) (ko-KR)", "value": "ko-KR"},
                                  {"label": "N Konkani (India) (kok-I)", "value": "kok-I"},
                                  {"label": "Kyrgyz (Kyrgyzstan) (ky-KG)", "value": "ky-KG"},
                                  {"label": "Lithuanian (Lithuania) (lt-LT)", "value": "lt-LT"},
                                  {"label": "Latvian (Latvia) (lv-LV)", "value": "lv-LV"},
                                  {"label": "Maori (New Zealand) (mi-NZ)", "value": "mi-NZ"},
                                  {"label": "Macedonian (Former Yugoslav Republic of Macedonia) (mk-MK)", "value": "mk-MK"},
                                  {"label": "Mongolian (Cyrillic, Mongolia) (mn-MN)", "value": "mn-MN"},
                                  {"label": "Marathi (India) (mr-IN)", "value": "mr-IN"},
                                  {"label": "Malay (Brunei Darussalam) (ms-BN)", "value": "ms-BN"},
                                  {"label": "Malay (Malaysia) (ms-MY)", "value": "ms-MY"},
                                  {"label": "Maltese (Malta) (mt-MT)", "value": "mt-MT"},
                                  {"label": "Norwegian, Bokmal (Norway) (nb-NO)", "value": "nb-NO"},
                                  {"label": "Dutch (Belgium) (nl-BE)", "value": "nl-BE"},
                                  {"label": "Dutch (Netherlands) (nl-NL)", "value": "nl-NL"},
                                  {"label": "Norwegian, Nynorsk (Norway) (nn-NO)", "value": "nn-NO"},
                                  {"label": "Northern Sotho (South Africa) (ns-ZA)", "value": "ns-ZA"},
                                  {"label": "Punjabi (India) (pa-IN)", "value": "pa-IN"},
                                  {"label": "Polish (Poland) (pl-PL)", "value": "pl-PL"},
                                  {"label": "Portuguese (Brazil) (pt-BR)", "value": "pt-BR"},
                                  {"label": "Portuguese (Portugal) (pt-PT)", "value": "pt-PT"},
                                  {"label": "Quechua (Bolivia) (quz-BO)", "value": "quz-BO"},
                                  {"label": "Quechua (Ecuador) (quz-EC)", "value": "quz-EC"},
                                  {"label": "Quechua (Peru) (quz-PE)", "value": "quz-PE"},
                                  {"label": "Romanian (Romania) (ro-RO)", "value": "ro-RO"},
                                  {"label": "Russian (Russia) (ru-RU)", "value": "ru-RU"},
                                  {"label": "Sanskrit (India) (sa-IN)", "value": "sa-IN"},
                                  {"label": "Sami (Northern) (Finland) (se-FI)", "value": "se-FI"},
                                  {"label": "Sami (Northern) (Norway) (se-NO)", "value": "se-NO"},
                                  {"label": "Sami (Northern) (Sweden) (se-SE)", "value": "se-SE"},
                                  {"label": "Slovak (Slovakia) (sk-SK)", "value": "sk-SK"},
                                  {"label": "Slovenian (Slovenia) (sl-SI)", "value": "sl-SI"},
                                  {"label": "Sami (Southern) (Norway) (sma-NO)", "value": "sma-NO"},
                                  {"label": "Sami (Southern) (Sweden) (sma-SE)", "value": "sma-SE"},
                                  {"label": "Sami (Lule) (Norway) (smj-NO)", "value": "smj-NO"},
                                  {"label": "Sami (Lule) (Sweden) (smj-SE)", "value": "smj-SE"},
                                  {"label": "Sami (Inari) (Finland) (smn-FI)", "value": "smn-FI"},
                                  {"label": "Sami (Skolt) (Finland) (sms-FI)", "value": "sms-FI"},
                                  {"label": "Albanian (Albania) (sq-AL)", "value": "sq-AL"},
                                  {"label": "Serbian (Cyrillic) (Bosnia and Herzegovina) (sr-Cyrl-BA)", "value": "sr-Cyrl-BA"},
                                  {"label": "Serbian (Cyrillic, Serbia) (sr-Cyrl-CS)", "value": "sr-Cyrl-CS"},
                                  {"label": "Serbian (Latin) (Bosnia and Herzegovina) (sr-Latn-BA)", "value": "sr-Latn-BA"},
                                  {"label": "Serbian (Latin, Serbia) (sr-Latn-CS)", "value": "sr-Latn-CS"},
                                  {"label": "Swedish (Finland) (sv-FI)", "value": "sv-FI"},
                                  {"label": "Swedish (Sweden) (sv-SE)", "value": "sv-SE"},
                                  {"label": "Kiswahili (Kenya) (sw-KE)", "value": "sw-KE"},
                                  {"label": "Syriac (Syria) (syr-SY)", "value": "syr-SY"},
                                  {"label": "Tamil (India) (ta-IN)", "value": "ta-IN"},
                                  {"label": "Telugu (India) (te-IN)", "value": "te-IN"},
                                  {"label": "Thai (Thailand) (th-TH)", "value": "th-TH"},
                                  {"label": "Tswana (South Africa) (tn-ZA)", "value": "tn-ZA"},
                                  {"label": "Turkish (Turkey) (tr-TR)", "value": "tr-TR"},
                                  {"label": "Tatar (Russia) (tt-RU)", "value": "tt-RU"},
                                  {"label": "Ukrainian (Ukraine) (uk-UA)", "value": "uk-UA"},
                                  {"label": "Urdu (Islamic Republic of Pakistan) (ur-PK)", "value": "ur-PK"},
                                  {"label": "Uzbek (Cyrillic, Uzbekistan) (uz-Cyrl-UZ)", "value": "uz-Cyrl-UZ"},
                                  {"label": "Uzbek (Latin, Uzbekistan) (uz-Latn-UZ)", "value": "uz-Latn-UZ"},
                                  {"label": "Vietnamese (Vietnam) (vi-VN)", "value": "vi-VN"},
                                  {"label": "Xhosa (South Africa) (xh-ZA)", "value": "xh-ZA"},
                                  {"label": "Chinese (Simplified) (zh-CHS)", "value": "zh-CHS"},
                                  {"label": "Chinese (Traditional) (zh-CHT)", "value": "zh-CHT"},
                                  {"label": "Chinese (People's Republic of China) (zh-CN)", "value": "zh-CN"},
                                  {"label": "Chinese (Hong Kong S.A.R.) (zh-HK)", "value": "zh-HK"},
                                  {"label": "Chinese (Macao S.A.R.) (zh-MO)", "value": "zh-MO"},
                                  {"label": "Chinese (Singapore) (zh-SG)", "value": "zh-SG"},
                                  {"label": "Chinese (Taiwan) (zh-TW)", "value": "zh-TW"},
                                  {"label": "Zulu (South Africa) (zu-ZA)", "value": "zu-ZA"}                         
                                ]
                              },
                              "valueProperty": "value"
                            },
                            {
                              "type": "textfield",
                              "label": "Comment",
                              "key": "comment"
                            }                            
                          ]
                        },
                        {
                          "label": "Contact Information Origin",
                          "type": "textfield",
                          "multiple": true,
                          "addAnother": " ",
                          "tooltip": "Where did the initial information about this contact come from ?",
                          "description": "e.g. named by Robert",
                          "placeholder": "Please enter the origin here, you can add more lines too...",
                          "key": "origins"
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
                          "input": true,
                          "key": "currencies",
                          "label": "Currencies",
                          "description": "e.g. USD for international trading",
                          "type": "datagrid",
                          "hideLabel": true,
                          "addAnother": " ",
                          "components": [
                            {
                              "label": "Currencies",
                              "placeholder": "Please select a currency, you can search by typing...",
                              "tooltip": "Please select the main currencies of this contact. The first one that you enter is used as default.",
                              "type": "select",
                              "key": "currency",
                              "data": {
                                "values": [
                                  {
                                    "label": "AED - United Arab Emirates Dirham",
                                    "value": "AED"
                                  },
                                  {
                                    "label": "AFN - Afghanistan Afghani",
                                    "value": "AFN"
                                  },
                                  {
                                    "label": "ALL - Albania Lek",
                                    "value": "ALL"
                                  },
                                  {
                                    "label": "AMD - Armenia Dram",
                                    "value": "AMD"
                                  },
                                  {
                                    "label": "ANG - Netherlands Antilles Guilder",
                                    "value": "ANG"
                                  },
                                  {
                                    "label": "AOA - Angola Kwanza",
                                    "value": "AOA"
                                  },
                                  {
                                    "label": "ARS - Argentina Peso",
                                    "value": "ARS"
                                  },
                                  {
                                    "label": "AUD - Australia Dollar",
                                    "value": "AUD"
                                  },
                                  {
                                    "label": "AWG - Aruba Guilder",
                                    "value": "AWG"
                                  },
                                  {
                                    "label": "AZN - Azerbaijan Manat",
                                    "value": "AZN"
                                  },
                                  {
                                    "label": "BAM - Bosnia and Herzegovina Convertible Marka",
                                    "value": "BAM"
                                  },
                                  {
                                    "label": "BBD - Barbados Dollar",
                                    "value": "BBD"
                                  },
                                  {
                                    "label": "BDT - Bangladesh Taka",
                                    "value": "BDT"
                                  },
                                  {
                                    "label": "BGN - Bulgaria Lev",
                                    "value": "BGN"
                                  },
                                  {
                                    "label": "BHD - Bahrain Dinar",
                                    "value": "BHD"
                                  },
                                  {
                                    "label": "BIF - Burundi Franc",
                                    "value": "BIF"
                                  },
                                  {
                                    "label": "BMD - Bermuda Dollar",
                                    "value": "BMD"
                                  },
                                  {
                                    "label": "BND - Brunei Darussalam Dollar",
                                    "value": "BND"
                                  },
                                  {
                                    "label": "BOB - Bolivia Bolíviano",
                                    "value": "BOB"
                                  },
                                  {
                                    "label": "BRL - Brazil Real",
                                    "value": "BRL"
                                  },
                                  {
                                    "label": "BSD - Bahamas Dollar",
                                    "value": "BSD"
                                  },
                                  {
                                    "label": "BTN - Bhutan Ngultrum",
                                    "value": "BTN"
                                  },
                                  {
                                    "label": "BWP - Botswana Pula",
                                    "value": "BWP"
                                  },
                                  {
                                    "label": "BYN - Belarus Ruble",
                                    "value": "BYN"
                                  },
                                  {
                                    "label": "BZD - Belize Dollar",
                                    "value": "BZD"
                                  },
                                  {
                                    "label": "CAD - Canada Dollar",
                                    "value": "CAD"
                                  },
                                  {
                                    "label": "CDF - Congo/Kinshasa Franc",
                                    "value": "CDF"
                                  },
                                  {
                                    "label": "CHF - Switzerland Franc",
                                    "value": "CHF"
                                  },
                                  {
                                    "label": "CLP - Chile Peso",
                                    "value": "CLP"
                                  },
                                  {
                                    "label": "CNY - China Yuan Renminbi",
                                    "value": "CNY"
                                  },
                                  {
                                    "label": "COP - Colombia Peso",
                                    "value": "COP"
                                  },
                                  {
                                    "label": "CRC - Costa Rica Colon",
                                    "value": "CRC"
                                  },
                                  {
                                    "label": "CUC - Cuba Convertible Peso",
                                    "value": "CUC"
                                  },
                                  {
                                    "label": "CUP - Cuba Peso",
                                    "value": "CUP"
                                  },
                                  {
                                    "label": "CVE - Cape Verde Escudo",
                                    "value": "CVE"
                                  },
                                  {
                                    "label": "CZK - Czech Republic Koruna",
                                    "value": "CZK"
                                  },
                                  {
                                    "label": "DJF - Djibouti Franc",
                                    "value": "DJF"
                                  },
                                  {
                                    "label": "DKK - Denmark Krone",
                                    "value": "DKK"
                                  },
                                  {
                                    "label": "DOP - Dominican Republic Peso",
                                    "value": "DOP"
                                  },
                                  {
                                    "label": "DZD - Algeria Dinar",
                                    "value": "DZD"
                                  },
                                  {
                                    "label": "EGP - Egypt Pound",
                                    "value": "EGP"
                                  },
                                  {
                                    "label": "ERN - Eritrea Nakfa",
                                    "value": "ERN"
                                  },
                                  {
                                    "label": "ETB - Ethiopia Birr",
                                    "value": "ETB"
                                  },
                                  {
                                    "label": "EUR - Euro Member Countries",
                                    "value": "EUR"
                                  },
                                  {
                                    "label": "FJD - Fiji Dollar",
                                    "value": "FJD"
                                  },
                                  {
                                    "label": "FKP - Falkland Islands (Malvinas) Pound",
                                    "value": "FKP"
                                  },
                                  {
                                    "label": "GBP - United Kingdom Pound",
                                    "value": "GBP"
                                  },
                                  {
                                    "label": "GEL - Georgia Lari",
                                    "value": "GEL"
                                  },
                                  {
                                    "label": "GGP - Guernsey Pound",
                                    "value": "GGP"
                                  },
                                  {
                                    "label": "GHS - Ghana Cedi",
                                    "value": "GHS"
                                  },
                                  {
                                    "label": "GIP - Gibraltar Pound",
                                    "value": "GIP"
                                  },
                                  {
                                    "label": "GMD - Gambia Dalasi",
                                    "value": "GMD"
                                  },
                                  {
                                    "label": "GNF - Guinea Franc",
                                    "value": "GNF"
                                  },
                                  {
                                    "label": "GTQ - Guatemala Quetzal",
                                    "value": "GTQ"
                                  },
                                  {
                                    "label": "GYD - Guyana Dollar",
                                    "value": "GYD"
                                  },
                                  {
                                    "label": "HKD - Hong Kong Dollar",
                                    "value": "HKD"
                                  },
                                  {
                                    "label": "HNL - Honduras Lempira",
                                    "value": "HNL"
                                  },
                                  {
                                    "label": "HRK - Croatia Kuna",
                                    "value": "HRK"
                                  },
                                  {
                                    "label": "HTG - Haiti Gourde",
                                    "value": "HTG"
                                  },
                                  {
                                    "label": "HUF - Hungary Forint",
                                    "value": "HUF"
                                  },
                                  {
                                    "label": "IDR - Indonesia Rupiah",
                                    "value": "IDR"
                                  },
                                  {
                                    "label": "ILS - Israel Shekel",
                                    "value": "ILS"
                                  },
                                  {
                                    "label": "IMP - Isle of Man Pound",
                                    "value": "IMP"
                                  },
                                  {
                                    "label": "INR - India Rupee",
                                    "value": "INR"
                                  },
                                  {
                                    "label": "IQD - Iraq Dinar",
                                    "value": "IQD"
                                  },
                                  {
                                    "label": "IRR - Iran Rial",
                                    "value": "IRR"
                                  },
                                  {
                                    "label": "ISK - Iceland Krona",
                                    "value": "ISK"
                                  },
                                  {
                                    "label": "JEP - Jersey Pound",
                                    "value": "JEP"
                                  },
                                  {
                                    "label": "JMD - Jamaica Dollar",
                                    "value": "JMD"
                                  },
                                  {
                                    "label": "JOD - Jordan Dinar",
                                    "value": "JOD"
                                  },
                                  {
                                    "label": "JPY - Japan Yen",
                                    "value": "JPY"
                                  },
                                  {
                                    "label": "KES - Kenya Shilling",
                                    "value": "KES"
                                  },
                                  {
                                    "label": "KGS - Kyrgyzstan Som",
                                    "value": "KGS"
                                  },
                                  {
                                    "label": "KHR - Cambodia Riel",
                                    "value": "KHR"
                                  },
                                  {
                                    "label": "KMF - Comorian Franc",
                                    "value": "KMF"
                                  },
                                  {
                                    "label": "KPW - Korea (North) Won",
                                    "value": "KPW"
                                  },
                                  {
                                    "label": "KRW - Korea (South) Won",
                                    "value": "KRW"
                                  },
                                  {
                                    "label": "KWD - Kuwait Dinar",
                                    "value": "KWD"
                                  },
                                  {
                                    "label": "KYD - Cayman Islands Dollar",
                                    "value": "KYD"
                                  },
                                  {
                                    "label": "KZT - Kazakhstan Tenge",
                                    "value": "KZT"
                                  },
                                  {
                                    "label": "LAK - Laos Kip",
                                    "value": "LAK"
                                  },
                                  {
                                    "label": "LBP - Lebanon Pound",
                                    "value": "LBP"
                                  },
                                  {
                                    "label": "LKR - Sri Lanka Rupee",
                                    "value": "LKR"
                                  },
                                  {
                                    "label": "LRD - Liberia Dollar",
                                    "value": "LRD"
                                  },
                                  {
                                    "label": "LSL - Lesotho Loti",
                                    "value": "LSL"
                                  },
                                  {
                                    "label": "LYD - Libya Dinar",
                                    "value": "LYD"
                                  },
                                  {
                                    "label": "MAD - Morocco Dirham",
                                    "value": "MAD"
                                  },
                                  {
                                    "label": "MDL - Moldova Leu",
                                    "value": "MDL"
                                  },
                                  {
                                    "label": "MGA - Madagascar Ariary",
                                    "value": "MGA"
                                  },
                                  {
                                    "label": "MKD - Macedonia Denar",
                                    "value": "MKD"
                                  },
                                  {
                                    "label": "MMK - Myanmar (Burma) Kyat",
                                    "value": "MMK"
                                  },
                                  {
                                    "label": "MNT - Mongolia Tughrik",
                                    "value": "MNT"
                                  },
                                  {
                                    "label": "MOP - Macau Pataca",
                                    "value": "MOP"
                                  },
                                  {
                                    "label": "MRU - Mauritania Ouguiya",
                                    "value": "MRU"
                                  },
                                  {
                                    "label": "MUR - Mauritius Rupee",
                                    "value": "MUR"
                                  },
                                  {
                                    "label": "MVR - Maldives (Maldive Islands) Rufiyaa",
                                    "value": "MVR"
                                  },
                                  {
                                    "label": "MWK - Malawi Kwacha",
                                    "value": "MWK"
                                  },
                                  {
                                    "label": "MXN - Mexico Peso",
                                    "value": "MXN"
                                  },
                                  {
                                    "label": "MYR - Malaysia Ringgit",
                                    "value": "MYR"
                                  },
                                  {
                                    "label": "MZN - Mozambique Metical",
                                    "value": "MZN"
                                  },
                                  {
                                    "label": "NAD - Namibia Dollar",
                                    "value": "NAD"
                                  },
                                  {
                                    "label": "NGN - Nigeria Naira",
                                    "value": "NGN"
                                  },
                                  {
                                    "label": "NIO - Nicaragua Cordoba",
                                    "value": "NIO"
                                  },
                                  {
                                    "label": "NOK - Norway Krone",
                                    "value": "NOK"
                                  },
                                  {
                                    "label": "NPR - Nepal Rupee",
                                    "value": "NPR"
                                  },
                                  {
                                    "label": "NZD - New Zealand Dollar",
                                    "value": "NZD"
                                  },
                                  {
                                    "label": "OMR - Oman Rial",
                                    "value": "OMR"
                                  },
                                  {
                                    "label": "PAB - Panama Balboa",
                                    "value": "PAB"
                                  },
                                  {
                                    "label": "PEN - Peru Sol",
                                    "value": "PEN"
                                  },
                                  {
                                    "label": "PGK - Papua New Guinea Kina",
                                    "value": "PGK"
                                  },
                                  {
                                    "label": "PHP - Philippines Piso",
                                    "value": "PHP"
                                  },
                                  {
                                    "label": "PKR - Pakistan Rupee",
                                    "value": "PKR"
                                  },
                                  {
                                    "label": "PLN - Poland Zloty",
                                    "value": "PLN"
                                  },
                                  {
                                    "label": "PYG - Paraguay Guarani",
                                    "value": "PYG"
                                  },
                                  {
                                    "label": "QAR - Qatar Riyal",
                                    "value": "QAR"
                                  },
                                  {
                                    "label": "RON - Romania Leu",
                                    "value": "RON"
                                  },
                                  {
                                    "label": "RSD - Serbia Dinar",
                                    "value": "RSD"
                                  },
                                  {
                                    "label": "RUB - Russia Ruble",
                                    "value": "RUB"
                                  },
                                  {
                                    "label": "RWF - Rwanda Franc",
                                    "value": "RWF"
                                  },
                                  {
                                    "label": "SAR - Saudi Arabia Riyal",
                                    "value": "SAR"
                                  },
                                  {
                                    "label": "SBD - Solomon Islands Dollar",
                                    "value": "SBD"
                                  },
                                  {
                                    "label": "SCR - Seychelles Rupee",
                                    "value": "SCR"
                                  },
                                  {
                                    "label": "SDG - Sudan Pound",
                                    "value": "SDG"
                                  },
                                  {
                                    "label": "SEK - Sweden Krona",
                                    "value": "SEK"
                                  },
                                  {
                                    "label": "SGD - Singapore Dollar",
                                    "value": "SGD"
                                  },
                                  {
                                    "label": "SHP - Saint Helena Pound",
                                    "value": "SHP"
                                  },
                                  {
                                    "label": "SLL - Sierra Leone Leone",
                                    "value": "SLL"
                                  },
                                  {
                                    "label": "SOS - Somalia Shilling",
                                    "value": "SOS"
                                  },
                                  {
                                    "label": "SPL* - Seborga Luigino",
                                    "value": "SPL*"
                                  },
                                  {
                                    "label": "SRD - Suriname Dollar",
                                    "value": "SRD"
                                  },
                                  {
                                    "label": "STN - São Tomé and Príncipe Dobra",
                                    "value": "STN"
                                  },
                                  {
                                    "label": "SVC - El Salvador Colon",
                                    "value": "SVC"
                                  },
                                  {
                                    "label": "SYP - Syria Pound",
                                    "value": "SYP"
                                  },
                                  {
                                    "label": "SZL - Swaziland Lilangeni",
                                    "value": "SZL"
                                  },
                                  {
                                    "label": "THB - Thailand Baht",
                                    "value": "THB"
                                  },
                                  {
                                    "label": "TJS - Tajikistan Somoni",
                                    "value": "TJS"
                                  },
                                  {
                                    "label": "TMT - Turkmenistan Manat",
                                    "value": "TMT"
                                  },
                                  {
                                    "label": "TND - Tunisia Dinar",
                                    "value": "TND"
                                  },
                                  {
                                    "label": "TOP - Tonga Pa'anga",
                                    "value": "TOP"
                                  },
                                  {
                                    "label": "TRY - Turkey Lira",
                                    "value": "TRY"
                                  },
                                  {
                                    "label": "TTD - Trinidad and Tobago Dollar",
                                    "value": "TTD"
                                  },
                                  {
                                    "label": "TVD - Tuvalu Dollar",
                                    "value": "TVD"
                                  },
                                  {
                                    "label": "TWD - Taiwan New Dollar",
                                    "value": "TWD"
                                  },
                                  {
                                    "label": "TZS - Tanzania Shilling",
                                    "value": "TZS"
                                  },
                                  {
                                    "label": "UAH - Ukraine Hryvnia",
                                    "value": "UAH"
                                  },
                                  {
                                    "label": "UGX - Uganda Shilling",
                                    "value": "UGX"
                                  },
                                  {
                                    "label": "USD - United States Dollar",
                                    "value": "USD"
                                  },
                                  {
                                    "label": "UYU - Uruguay Peso",
                                    "value": "UYU"
                                  },
                                  {
                                    "label": "UZS - Uzbekistan Som",
                                    "value": "UZS"
                                  },
                                  {
                                    "label": "VEF - Venezuela Bolívar",
                                    "value": "VEF"
                                  },
                                  {
                                    "label": "VND - Viet Nam Dong",
                                    "value": "VND"
                                  },
                                  {
                                    "label": "VUV - Vanuatu Vatu",
                                    "value": "VUV"
                                  },
                                  {
                                    "label": "WST - Samoa Tala",
                                    "value": "WST"
                                  },
                                  {
                                    "label": "XAF - Communauté Financière Africaine (BEAC) CFA Franc BEAC",
                                    "value": "XAF"
                                  },
                                  {
                                    "label": "XCD - East Caribbean Dollar",
                                    "value": "XCD"
                                  },
                                  {
                                    "label": "XDR - International Monetary Fund (IMF) Special Drawing Rights",
                                    "value": "XDR"
                                  },
                                  {
                                    "label": "XOF - Communauté Financière Africaine (BCEAO) Franc",
                                    "value": "XOF"
                                  },
                                  {
                                    "label": "XPF - Comptoirs Français du Pacifique (CFP) Franc",
                                    "value": "XPF"
                                  },
                                  {
                                    "label": "YER - Yemen Rial",
                                    "value": "YER"
                                  },
                                  {
                                    "label": "ZAR - South Africa Rand",
                                    "value": "ZAR"
                                  },
                                  {
                                    "label": "ZMW - Zambia Kwacha",
                                    "value": "ZMW"
                                  },
                                  {
                                    "label": "ZWD - Zimbabwe Dollar",
                                    "value": "ZWD"
                                  }
                                ]
                              },
                              "valueProperty": "value"
                            },
                            {
                              "type": "textfield",
                              "label": "Comment",
                              "key": "comment"
                            }
                          ]
                        },
                        {
                          "label": "Projects",
                          "multiple": true,
                          "type": "textfield",
                          "placeholder": "Please enter a project name here, you can add more projects too",
                          "description": "e.g. Reorganization of xx",
                          "addAnother": " ",
                          "key": "projects"
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
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Sphere of action",
                          "type": "select",
                          "key": "actionSphere",
                          "widget": "html5",
                          "tooltip": "Where this contact is acting and / or doing business ?",
                          "description": "e.g. national",
                          "placeholder": "Please select an entry...",
                          "data": {
                            "values": [
                              {"label": "local", "value": "local"},
                              {"label": "regional", "value": "regional"},
                              {"label": "national", "value": "national"},
                              {"label": "multinational", "value": "multinational"},
                              {"label": "continent", "value": "continent"},
                              {"label": "multicontinent", "value": "multicontinent"},
                              {"label": "worldwide", "value": "worldwide"}
                            ]
                          },
                          "valueProperty": "value"
                        },                        
                        {
                          "label": "About",
                          "placeholder": "Enter some text describing this contact",
                          "description": "e.g. Interesting company in the area of textiles",
                          "type": "textarea",
                          "input": true,
                          "rows": 6,
                          "key": "about",
                          "tooltip": "Some descriptive text everybody should know."
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
                          "key": "actionCountries",
                          "label": "Countries of action",
                          "hideLabel": true,
                          "type": "datagrid",
                          "addAnother": " ",
                          "tooltip": "Where this contact is acting and / or doing business ? The first one that you enter is used as default.",
                          "description": "e.g. Austria (AUT) only Sales",
                          "saveRow": "^",
                          "templates": {
                            "row": "<div class=\"row\">\n  {% util.eachComponent(components, function(component) { %}\n    <div class=\"col-sm-2\">\n      {{ getView(component, row[component.key]) }}\n    </div>\n  {% }) %}\n  <div class=\"col-sm-2\">\n    <div class=\"btn-group pull-right\">\n      <button class=\"btn btn-default editRow\">\n        <i class=\" glyphicon glyphicon-edit\"></i>\n      </button>\n      <button class=\"btn btn-danger removeRow\">\n        <i class=\" glyphicon glyphicon-remove-circle\"></i>\n      </button>\n    </div>\n  </div>\n</div>"
                          },
                          "components": [
                            {
                              "label": "Countries of action",
                              "type": "select",
                              "key": "country",
                              "tooltip": "Where this contact is acting and / or doing business ? The first one that you enter is used as default.",
                              "placeholder": "Please select a country, you can search by typing...",
                              "data": {
                                "values": [
                                  {"label": "Afghanistan (AFG)", "value": "AFG"},
                                  {"label": "Aland Islands (ALA)", "value": "ALA"},
                                  {"label": "Albania (ALB)", "value": "ALB"},
                                  {"label": "Algeria (DZA)", "value": "DZA"},
                                  {"label": "American Samoa (ASM)", "value": "ASM"},
                                  {"label": "Andorra (AND)", "value": "AND"},
                                  {"label": "Angola (AGO)", "value": "AGO"},
                                  {"label": "Anguilla (AIA)", "value": "AIA"},
                                  {"label": "Antarctica (ATA)", "value": "ATA"},
                                  {"label": "Antigua and Barbuda (ATG)", "value": "ATG"},
                                  {"label": "Argentina (ARG)", "value": "ARG"},
                                  {"label": "Armenia (ARM)", "value": "ARM"},
                                  {"label": "Aruba (ABW)", "value": "ABW"},
                                  {"label": "Australia (AUS)", "value": "AUS"},
                                  {"label": "Austria (AUT)", "value": "AUT"},
                                  {"label": "Azerbaijan (AZE)", "value": "AZE"},
                                  {"label": "Bahamas (BHS)", "value": "BHS"},
                                  {"label": "Bahrain (BHR)", "value": "BHR"},
                                  {"label": "Bangladesh (BGD)", "value": "BGD"},
                                  {"label": "Barbados (BRB)", "value": "BRB"},
                                  {"label": "Belarus (BLR)", "value": "BLR"},
                                  {"label": "Belgium (BEL)", "value": "BEL"},
                                  {"label": "Belize (BLZ)", "value": "BLZ"},
                                  {"label": "Benin (BEN)", "value": "BEN"},
                                  {"label": "Bermuda (BMU)", "value": "BMU"},
                                  {"label": "Bhutan (BTN)", "value": "BTN"},
                                  {"label": "Bolivia (BOL)", "value": "BOL"},
                                  {"label": "Bosnia and Herzegovina (BIH)", "value": "BIH"},
                                  {"label": "Botswana (BWA)", "value": "BWA"},
                                  {"label": "Bouvet Island (BVT)", "value": "BVT"},
                                  {"label": "Brazil (BRA)", "value": "BRA"},
                                  {"label": "British Virgin Islands (VGB)", "value": "VGB"},
                                  {"label": "British Indian Ocean Territory (IOT)", "value": "IOT"},
                                  {"label": "Brunei Darussalam (BRN)", "value": "BRN"},
                                  {"label": "Bulgaria (BGR)", "value": "BGR"},
                                  {"label": "Burkina Faso (BFA)", "value": "BFA"},
                                  {"label": "Burundi (BDI)", "value": "BDI"},
                                  {"label": "Cambodia (KHM)", "value": "KHM"},
                                  {"label": "Cameroon (CMR)", "value": "CMR"},
                                  {"label": "Canada (CAN)", "value": "CAN"},
                                  {"label": "Cape Verde (CPV)", "value": "CPV"},
                                  {"label": "Cayman Islands (CYM)", "value": "CYM"},
                                  {"label": "Central African Republic (CAF)", "value": "CAF"},
                                  {"label": "Chad (TCD)", "value": "TCD"},
                                  {"label": "Chile (CHL)", "value": "CHL"},
                                  {"label": "China (CHN)", "value": "CHN"},
                                  {"label": "Hong Kong, SAR China (HKG)", "value": "HKG"},
                                  {"label": "Macao, SAR China (MAC)", "value": "MAC"},
                                  {"label": "Christmas Island (CXR)", "value": "CXR"},
                                  {"label": "Cocos (Keeling) Islands (CCK)", "value": "CCK"},
                                  {"label": "Colombia (COL)", "value": "COL"},
                                  {"label": "Comoros (COM)", "value": "COM"},
                                  {"label": "Congo (Brazzaville) (COG)", "value": "COG"},
                                  {"label": "Congo, (Kinshasa) (COD)", "value": "COD"},
                                  {"label": "Cook Islands (COK)", "value": "COK"},
                                  {"label": "Costa Rica (CRI)", "value": "CRI"},
                                  {"label": "Côte d'Ivoire (CIV)", "value": "CIV"},
                                  {"label": "Croatia (HRV)", "value": "HRV"},
                                  {"label": "Cuba (CUB)", "value": "CUB"},
                                  {"label": "Cyprus (CYP)", "value": "CYP"},
                                  {"label": "Czech Republic (CZE)", "value": "CZE"},
                                  {"label": "Denmark (DNK)", "value": "DNK"},
                                  {"label": "Djibouti (DJI)", "value": "DJI"},
                                  {"label": "Dominica (DMA)", "value": "DMA"},
                                  {"label": "Dominican Republic (DOM)", "value": "DOM"},
                                  {"label": "Ecuador (ECU)", "value": "ECU"},
                                  {"label": "Egypt (EGY)", "value": "EGY"},
                                  {"label": "El Salvador (SLV)", "value": "SLV"},
                                  {"label": "Equatorial Guinea (GNQ)", "value": "GNQ"},
                                  {"label": "Eritrea (ERI)", "value": "ERI"},
                                  {"label": "Estonia (EST)", "value": "EST"},
                                  {"label": "Ethiopia (ETH)", "value": "ETH"},
                                  {"label": "Falkland Islands (Malvinas) (FLK)", "value": "FLK"},
                                  {"label": "Faroe Islands (FRO)", "value": "FRO"},
                                  {"label": "Fiji (FJI)", "value": "FJI"},
                                  {"label": "Finland (FIN)", "value": "FIN"},
                                  {"label": "France (FRA)", "value": "FRA"},
                                  {"label": "French Guiana (GUF)", "value": "GUF"},
                                  {"label": "French Polynesia (PYF)", "value": "PYF"},
                                  {"label": "French Southern Territories (ATF)", "value": "ATF"},
                                  {"label": "Gabon (GAB)", "value": "GAB"},
                                  {"label": "Gambia (GMB)", "value": "GMB"},
                                  {"label": "Georgia (GEO)", "value": "GEO"},
                                  {"label": "Germany (DEU)", "value": "DEU"},
                                  {"label": "Ghana (GHA)", "value": "GHA"},
                                  {"label": "Gibraltar (GIB)", "value": "GIB"},
                                  {"label": "Greece (GRC)", "value": "GRC"},
                                  {"label": "Greenland (GRL)", "value": "GRL"},
                                  {"label": "Grenada (GRD)", "value": "GRD"},
                                  {"label": "Guadeloupe (GLP)", "value": "GLP"},
                                  {"label": "Guam (GUM)", "value": "GUM"},
                                  {"label": "Guatemala (GTM)", "value": "GTM"},
                                  {"label": "Guernsey (GGY)", "value": "GGY"},
                                  {"label": "Guinea (GIN)", "value": "GIN"},
                                  {"label": "Guinea-Bissau (GNB)", "value": "GNB"},
                                  {"label": "Guyana (GUY)", "value": "GUY"},
                                  {"label": "Haiti (HTI)", "value": "HTI"},
                                  {"label": "Heard and Mcdonald Islands (HMD)", "value": "HMD"},
                                  {"label": "Holy See (Vatican City State) (VAT)", "value": "VAT"},
                                  {"label": "Honduras (HND)", "value": "HND"},
                                  {"label": "Hungary (HUN)", "value": "HUN"},
                                  {"label": "Iceland (ISL)", "value": "ISL"},
                                  {"label": "India (IND)", "value": "IND"},
                                  {"label": "Indonesia (IDN)", "value": "IDN"},
                                  {"label": "Iran, Islamic Republic of (IRN)", "value": "IRN"},
                                  {"label": "Iraq (IRQ)", "value": "IRQ"},
                                  {"label": "Ireland (IRL)", "value": "IRL"},
                                  {"label": "Isle of Man (IMN)", "value": "IMN"},
                                  {"label": "Israel (ISR)", "value": "ISR"},
                                  {"label": "Italy (ITA)", "value": "ITA"},
                                  {"label": "Jamaica (JAM)", "value": "JAM"},
                                  {"label": "Japan (JPN)", "value": "JPN"},
                                  {"label": "Jersey (JEY)", "value": "JEY"},
                                  {"label": "Jordan (JOR)", "value": "JOR"},
                                  {"label": "Kazakhstan (KAZ)", "value": "KAZ"},
                                  {"label": "Kenya (KEN)", "value": "KEN"},
                                  {"label": "Kiribati (KIR)", "value": "KIR"},
                                  {"label": "Korea (North) (PRK)", "value": "PRK"},
                                  {"label": "Korea (South) (KOR)", "value": "KOR"},
                                  {"label": "Kuwait (KWT)", "value": "KWT"},
                                  {"label": "Kyrgyzstan (KGZ)", "value": "KGZ"},
                                  {"label": "Lao PDR (LAO)", "value": "LAO"},
                                  {"label": "Latvia (LVA)", "value": "LVA"},
                                  {"label": "Lebanon (LBN)", "value": "LBN"},
                                  {"label": "Lesotho (LSO)", "value": "LSO"},
                                  {"label": "Liberia (LBR)", "value": "LBR"},
                                  {"label": "Libya (LBY)", "value": "LBY"},
                                  {"label": "Liechtenstein (LIE)", "value": "LIE"},
                                  {"label": "Lithuania (LTU)", "value": "LTU"},
                                  {"label": "Luxembourg (LUX)", "value": "LUX"},
                                  {"label": "Macedonia, Republic of (MKD)", "value": "MKD"},
                                  {"label": "Madagascar (MDG)", "value": "MDG"},
                                  {"label": "Malawi (MWI)", "value": "MWI"},
                                  {"label": "Malaysia (MYS)", "value": "MYS"},
                                  {"label": "Maldives (MDV)", "value": "MDV"},
                                  {"label": "Mali (MLI)", "value": "MLI"},
                                  {"label": "Malta (MLT)", "value": "MLT"},
                                  {"label": "Marshall Islands (MHL)", "value": "MHL"},
                                  {"label": "Martinique (MTQ)", "value": "MTQ"},
                                  {"label": "Mauritania (MRT)", "value": "MRT"},
                                  {"label": "Mauritius (MUS)", "value": "MUS"},
                                  {"label": "Mayotte (MYT)", "value": "MYT"},
                                  {"label": "Mexico (MEX)", "value": "MEX"},
                                  {"label": "Micronesia, Federated States of (FSM)", "value": "FSM"},
                                  {"label": "Moldova (MDA)", "value": "MDA"},
                                  {"label": "Monaco (MCO)", "value": "MCO"},
                                  {"label": "Mongolia (MNG)", "value": "MNG"},
                                  {"label": "Montenegro (MNE)", "value": "MNE"},
                                  {"label": "Montserrat (MSR)", "value": "MSR"},
                                  {"label": "Morocco (MAR)", "value": "MAR"},
                                  {"label": "Mozambique (MOZ)", "value": "MOZ"},
                                  {"label": "Myanmar (MMR)", "value": "MMR"},
                                  {"label": "Namibia (NAM)", "value": "NAM"},
                                  {"label": "Nauru (NRU)", "value": "NRU"},
                                  {"label": "Nepal (NPL)", "value": "NPL"},
                                  {"label": "Netherlands (NLD)", "value": "NLD"},
                                  {"label": "Netherlands Antilles (ANT)", "value": "ANT"},
                                  {"label": "New Caledonia (NCL)", "value": "NCL"},
                                  {"label": "New Zealand (NZL)", "value": "NZL"},
                                  {"label": "Nicaragua (NIC)", "value": "NIC"},
                                  {"label": "Niger (NER)", "value": "NER"},
                                  {"label": "Nigeria (NGA)", "value": "NGA"},
                                  {"label": "Niue (NIU)", "value": "NIU"},
                                  {"label": "Norfolk Island (NFK)", "value": "NFK"},
                                  {"label": "Northern Mariana Islands (MNP)", "value": "MNP"},
                                  {"label": "Norway (NOR)", "value": "NOR"},
                                  {"label": "Oman (OMN)", "value": "OMN"},
                                  {"label": "Pakistan (PAK)", "value": "PAK"},
                                  {"label": "Palau (PLW)", "value": "PLW"},
                                  {"label": "Palestinian Territory (PSE)", "value": "PSE"},
                                  {"label": "Panama (PAN)", "value": "PAN"},
                                  {"label": "Papua New Guinea (PNG)", "value": "PNG"},
                                  {"label": "Paraguay (PRY)", "value": "PRY"},
                                  {"label": "Peru (PER)", "value": "PER"},
                                  {"label": "Philippines (PHL)", "value": "PHL"},
                                  {"label": "Pitcairn (PCN)", "value": "PCN"},
                                  {"label": "Poland (POL)", "value": "POL"},
                                  {"label": "Portugal (PRT)", "value": "PRT"},
                                  {"label": "Puerto Rico (PRI)", "value": "PRI"},
                                  {"label": "Qatar (QAT)", "value": "QAT"},
                                  {"label": "Réunion (REU)", "value": "REU"},
                                  {"label": "Romania (ROU)", "value": "ROU"},
                                  {"label": "Russian Federation (RUS)", "value": "RUS"},
                                  {"label": "Rwanda (RWA)", "value": "RWA"},
                                  {"label": "Saint-Barthélemy (BLM)", "value": "BLM"},
                                  {"label": "Saint Helena (SHN)", "value": "SHN"},
                                  {"label": "Saint Kitts and Nevis (KNA)", "value": "KNA"},
                                  {"label": "Saint Lucia (LCA)", "value": "LCA"},
                                  {"label": "Saint-Martin (French part) (MAF)", "value": "MAF"},
                                  {"label": "Saint Pierre and Miquelon (SPM)", "value": "SPM"},
                                  {"label": "Saint Vincent and Grenadines (VCT)", "value": "VCT"},
                                  {"label": "Samoa (WSM)", "value": "WSM"},
                                  {"label": "San Marino (SMR)", "value": "SMR"},
                                  {"label": "Sao Tome and Principe (STP)", "value": "STP"},
                                  {"label": "Saudi Arabia (SAU)", "value": "SAU"},
                                  {"label": "Senegal (SEN)", "value": "SEN"},
                                  {"label": "Serbia (SRB)", "value": "SRB"},
                                  {"label": "Seychelles (SYC)", "value": "SYC"},
                                  {"label": "Sierra Leone (SLE)", "value": "SLE"},
                                  {"label": "Singapore (SGP)", "value": "SGP"},
                                  {"label": "Slovakia (SVK)", "value": "SVK"},
                                  {"label": "Slovenia (SVN)", "value": "SVN"},
                                  {"label": "Solomon Islands (SLB)", "value": "SLB"},
                                  {"label": "Somalia (SOM)", "value": "SOM"},
                                  {"label": "South Africa (ZAF)", "value": "ZAF"},
                                  {"label": "South Georgia and the South Sandwich Islands (SGS)", "value": "SGS"},
                                  {"label": "South Sudan (SSD)", "value": "SSD"},
                                  {"label": "Spain (ESP)", "value": "ESP"},
                                  {"label": "Sri Lanka (LKA)", "value": "LKA"},
                                  {"label": "Sudan (SDN)", "value": "SDN"},
                                  {"label": "Suriname (SUR)", "value": "SUR"},
                                  {"label": "Svalbard and Jan Mayen Islands (SJM)", "value": "SJM"},
                                  {"label": "Swaziland (SWZ)", "value": "SWZ"},
                                  {"label": "Sweden (SWE)", "value": "SWE"},
                                  {"label": "Switzerland (CHE)", "value": "CHE"},
                                  {"label": "Syrian Arab Republic (Syria) (SYR)", "value": "SYR"},
                                  {"label": "Taiwan, Republic of China (TWN)", "value": "TWN"},
                                  {"label": "Tajikistan (TJK)", "value": "TJK"},
                                  {"label": "Tanzania, United Republic of (TZA)", "value": "TZA"},
                                  {"label": "Thailand (THA)", "value": "THA"},
                                  {"label": "Timor-Leste (TLS)", "value": "TLS"},
                                  {"label": "Togo (TGO)", "value": "TGO"},
                                  {"label": "Tokelau (TKL)", "value": "TKL"},
                                  {"label": "Tonga (TON)", "value": "TON"},
                                  {"label": "Trinidad and Tobago (TTO)", "value": "TTO"},
                                  {"label": "Tunisia (TUN)", "value": "TUN"},
                                  {"label": "Turkey (TUR)", "value": "TUR"},
                                  {"label": "Turkmenistan (TKM)", "value": "TKM"},
                                  {"label": "Turks and Caicos Islands (TCA)", "value": "TCA"},
                                  {"label": "Tuvalu (TUV)", "value": "TUV"},
                                  {"label": "Uganda (UGA)", "value": "UGA"},
                                  {"label": "Ukraine (UKR)", "value": "UKR"},
                                  {"label": "United Arab Emirates (ARE)", "value": "ARE"},
                                  {"label": "United Kingdom (GBR)", "value": "GBR"},
                                  {"label": "United States of America (USA)", "value": "USA"},
                                  {"label": "US Minor Outlying Islands (UMI)", "value": "UMI"},
                                  {"label": "Uruguay (URY)", "value": "URY"},
                                  {"label": "Uzbekistan (UZB)", "value": "UZB"},
                                  {"label": "Vanuatu (VUT)", "value": "VUT"},
                                  {"label": "Venezuela (Bolivarian Republic) (VEN)", "value": "VEN"},
                                  {"label": "Viet Nam (VNM)", "value": "VNM"},
                                  {"label": "Virgin Islands, US (VIR)", "value": "VIR"},
                                  {"label": "Wallis and Futuna Islands (WLF)", "value": "WLF"},
                                  {"label": "Western Sahara (ESH)", "value": "ESH"},
                                  {"label": "Yemen (YEM)", "value": "YEM"},
                                  {"label": "Zambia (ZMB)", "value": "ZMB"},
                                  {"label": "Zimbabwe (ZWE)", "value": "ZWE"}
                                ]
                              },
                              "valueProperty": "value"
                            },
                            {
                              "key": "comment",
                              "label": "Comment",
                              "type": "textfield"
                            }
                          ]
                        }, 
                        {
                          "key": "anniversaries",
                          "label": "Anniversaries",
                          "hideLabel": true,
                          "addAnother": " ",
                          "type": "datagrid",
                          "description": "e.g. 1.1.1988 Acquisition of Contoso",
                          "components": [
                            {
                              "inputsLabelPosition": "top",
                              "label": "Anniversaries",
                              "hideInputLabels": true,
                              "fields": {
                                "day": {
                                  "hide": false,
                                  "type": "number"
                                },
                                "month": {
                                  "hide": false,
                                  "type": "select"
                                },
                                "year": {
                                  "hide": false,
                                  "type": "number"
                                }
                              },
                              "useLocaleSettings": true,
                              "type": "day",
                              "key": "date"
                            },
                            {
                              "input": true,
                              "key": "comment",
                              "label": "Comment",
                              "type": "textfield"
                            }
                          ]
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
              ]
            },
            {
              "key": "orgs",
              "type": "fieldset",
              "conditional": {
                "show": true,
                "eq": "organisation",
                "json": "",
                "when": "contactType"
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
                          "type": "datagrid",
                          "label": "SIC Codes",
                          "hideLabel": true,
                          "key": "sicCodes",
                          "tooltip": "Areas this organisation is doing business / acting in.",
                          "description": "e.g. 0116 - Agricultural Crop Growth - Soy bean",
                          "addAnother": " ",
                          "components": [
                            {
                              "label": "SIC Codes",
                              "type": "select",
                              "tooltip": "Area this organisation is doing business / acting in.",
                              "placeholder": "Please select a SIC code, you can search by typing...",
                              "input": true,
                              "key": "sicCode",
                              "data": {
                                "values": [
                                  {"label": "0111 - Agricultural Crop Growth - Wheat", "value": "0111"},
                                  {"label": "0112 - Agricultural Crop Growth - Rice", "value": "0112"},
                                  {"label": "0115 - Agricultural Crop Growth - Corn", "value": "0115"},
                                  {"label": "0116 - Agricultural Crop Growth - Soy bean", "value": "0116"},
                                  {"label": "0119 - Agricultural Crop Growth - other cash grains", "value": "0119"},
                                  {"label": "0131 - Agricultural Crop Growth - Cotton", "value": "0131"},
                                  {"label": "0132 - Agricultural Crop Growth - Tobacco", "value": "0132"},
                                  {"label": "0133 - Agricultural Crop Growth - Sugar beet, - cane", "value": "0133"},
                                  {"label": "0134 - Agricultural Crop Growth - Potatos", "value": "0134"},
                                  {"label": "0139 - Agricultural Crop Growth - other field crops (without cash grains)", "value": "0139"},
                                  {"label": "0161 - Agricultural Crop Growth - vegetables and melon", "value": "0161"},
                                  {"label": "0171 - Agricultural Crop Growth - Berries", "value": "0171"},
                                  {"label": "0172 - Agricultural Crop Growth - Grapes", "value": "0172"},
                                  {"label": "0173 - Agricultural Crop Growth - Nuts", "value": "0173"},
                                  {"label": "0174 - Agricultural Crop Growth - Citrus fruit", "value": "0174"},
                                  {"label": "0175 - Agricultural Crop Growth - Deciduous Tree Fruits", "value": "0175"},
                                  {"label": "0179 - Agricultural Crop Growth - Other fruits", "value": "0179"},
                                  {"label": "0181 - Agricultural Crop Growth - flower- and plant nursery, seed store", "value": "0181"},
                                  {"label": "0182 - Agricultural Crop Growth - Forcing house products", "value": "0182"},
                                  {"label": "0189 - Agricultural Crop Growth - Market garden products, others", "value": "0189"},
                                  {"label": "0191 - Agricultural Crop Growth - Agricultural products, in general", "value": "0191"},
                                  {"label": "0211 - Agriculture and Stock Breeding - Cattles, only cattles out at feed", "value": "0211"},
                                  {"label": "0212 - Agriculture and Stock Breeding - Cattles, in general", "value": "0212"},
                                  {"label": "0213 - Agriculture and Stock Breeding - Swines", "value": "0213"},
                                  {"label": "0214 - Agriculture and Stock Breeding - Sheeps and goats", "value": "0214"},
                                  {"label": "0219 - Agriculture and Stock Breeding - Stock farming, others", "value": "0219"},
                                  {"label": "0241 - Agriculture and Stock Breeding - Dairy farming", "value": "0241"},
                                  {"label": "0251 - Agriculture and Stock Breeding - Chicken", "value": "0251"},
                                  {"label": "0252 - Agriculture and Stock Breeding - Hen´s eggs", "value": "0252"},
                                  {"label": "0253 - Agriculture and Stock Breeding - Turkey hen and turkey eggs", "value": "0253"},
                                  {"label": "1011 - Mining of Metals - Iron", "value": "1011"},
                                  {"label": "1021 - Mining of Metals - Copper", "value": "1021"},
                                  {"label": "1031 - Mining of Metals - Lead and Zinc", "value": "1031"},
                                  {"label": "1041 - Mining of Metals - Gold", "value": "1041"},
                                  {"label": "1044 - Mining of Metals - Silver", "value": "1044"},
                                  {"label": "1051 - Mining of Metals - Aluminium, bauxite", "value": "1051"},
                                  {"label": "1061 - Mining of Metals - Iron alloy", "value": "1061"},
                                  {"label": "1081 - Mining of Metals - Services for metal mining", "value": "1081"},
                                  {"label": "1092 - Mining of Metals - Mercurial", "value": "1092"},
                                  {"label": "1094 - Mining of Metals - Uranium and Radium", "value": "1094"},
                                  {"label": "1099 - Mining of Metals - Metals, others", "value": "1099"},
                                  {"label": "1111 - Mining of Anthracite - Anthracite", "value": "1111"},
                                  {"label": "1112 - Mining of Anthracite - Services for Anthracite extraction", "value": "1112"},
                                  {"label": "1211 - Mining of Black Coal - Bituminous Coal and Lignite Surface Mining", "value": "1211"},
                                  {"label": "1213 - Mining of Black Coal - Services for  Bituminous Coal and Lignite Surface Mining", "value": "1213"},
                                  {"label": "1311 - Oil and Gas Production - Crude oil and natural gas", "value": "1311"},
                                  {"label": "1321 - Oil and Gas Production - Liquid gas", "value": "1321"},
                                  {"label": "1381 - Oil and Gas Production - Oil- and gas boring", "value": "1381"},
                                  {"label": "1382 - Oil and Gas Production - Exploration of oil- and gas sources", "value": "1382"},
                                  {"label": "1389 - Oil and Gas Production - Extraction of oil and gas", "value": "1389"},
                                  {"label": "1411 - Mines and Quarries - stone blocs", "value": "1411"},
                                  {"label": "1422 - Mines and Quarries - Stones, hackled", "value": "1422"},
                                  {"label": "1423 - Mines and Quarries - Granite, hackled", "value": "1423"},
                                  {"label": "1429 - Mines and Quarries - stones, others", "value": "1429"},
                                  {"label": "1442 - Mines and Quarries - Construction Sand and Gravel", "value": "1442"},
                                  {"label": "1446 - Mines and Quarries - Industry sand", "value": "1446"},
                                  {"label": "1452 - Mines and Quarries - Smectite", "value": "1452"},
                                  {"label": "1453 - Mines and Quarries - chamotte", "value": "1453"},
                                  {"label": "1454 - Mines and Quarries - Fullers earth", "value": "1454"},
                                  {"label": "1455 - Mines and Quarries - Kaolin, potter´s clay", "value": "1455"},
                                  {"label": "1459 - Mines and Quarries - Clay, ceramic and fire proof minerals", "value": "1459"},
                                  {"label": "1472 - Mines and Quarries - Barite", "value": "1472"},
                                  {"label": "1473 - Mines and Quarries - fluorite", "value": "1473"},
                                  {"label": "1474 - Mines and Quarries - Potash, Soda, and Borate Minerals", "value": "1474"},
                                  {"label": "1475 - Mines and Quarries - Phosphate", "value": "1475"},
                                  {"label": "1476 - Mines and Quarries - Rock salt", "value": "1476"},
                                  {"label": "1477 - Mines and Quarries - Brimstone", "value": "1477"},
                                  {"label": "1479 - Mines and Quarries - Minerals for chemistry and dung, others", "value": "1479"},
                                  {"label": "1481 - Mines and Quarries - wagework for stones and terra", "value": "1481"},
                                  {"label": "1492 - Mines and Quarries - Cement", "value": "1492"},
                                  {"label": "1496 - Mines and Quarries - Talcum, soapstone", "value": "1496"},
                                  {"label": "1499 - Mines and Quarries - Stones and ground, others", "value": "1499"},
                                  {"label": "1521 - Gen. Construction companies - One-family house", "value": "1521"},
                                  {"label": "1522 - Gen. Construction companies - Apartment house", "value": "1522"},
                                  {"label": "1531 - Gen. Construction companies - Operative Builders", "value": "1531"},
                                  {"label": "1542 - Gen. Construction companies - Building, others", "value": "1542"},
                                  {"label": "1611 - Building and Underground Construction - Freeways and highways", "value": "1611"},
                                  {"label": "1622 - Building and Underground Construction - Bridge-, tunnel-, highway building construction", "value": "1622"},
                                  {"label": "1623 - Building and Underground Construction - Water, Sewer, Pipeline, and Communications and Power Line", "value": "1623"},
                                  {"label": "1629 - Building and Underground Construction - Heavy Construction, Not Elsewhere Classified", "value": "1629"},
                                  {"label": "1711 - Building Companies - installations, heating construction", "value": "1711"},
                                  {"label": "1721 - Building Companies - decorating", "value": "1721"},
                                  {"label": "1731 - Building Companies - Electrical Work", "value": "1731"},
                                  {"label": "1741 - Building Companies - Masonry, Stone Setting, and Other Stone Work", "value": "1741"},
                                  {"label": "1742 - Building Companies - Plastering, Drywall, Acoustical, and Insulation Work", "value": "1742"},
                                  {"label": "1743 - Building Companies - Terrazzo, Tile, Marble, and Mosaic Work", "value": "1743"},
                                  {"label": "1751 - Building Companies - Carpentry Work", "value": "1751"},
                                  {"label": "2655 - Paper - Fiber Cans, Tubes, Drums, and Similar Products", "value": "2655"},
                                  {"label": "2661 - Paper - building board, -panel", "value": "2661"},
                                  {"label": "2711 - Printers and Publishers - daily newspaper, publisher and print", "value": "2711"},
                                  {"label": "2721 - Printers and Publishers - magazines, publisher and print", "value": "2721"},
                                  {"label": "2731 - Printers and Publishers - books, publisher and print", "value": "2731"},
                                  {"label": "2732 - Printers and Publishers - print shop: books", "value": "2732"},
                                  {"label": "2741 - Printers and Publishers - publishing company, several", "value": "2741"},
                                  {"label": "2751 - Printers and Publishers - letter press and screen printing", "value": "2751"},
                                  {"label": "2752 - Printers and Publishers - Commercial Printing, Lithographic", "value": "2752"},
                                  {"label": "2753 - Printers and Publishers - gravure printing", "value": "2753"},
                                  {"label": "2754 - Printers and Publishers - engraving", "value": "2754"},
                                  {"label": "2761 - Printers and Publishers - business form, several", "value": "2761"},
                                  {"label": "2771 - Printers and Publishers - Greeting Cards", "value": "2771"},
                                  {"label": "2782 - Printers and Publishers - Blankbooks, Looseleaf Binders and Devices", "value": "2782"},
                                  {"label": "2789 - Printers and Publishers - bindery", "value": "2789"},
                                  {"label": "2791 - Printers and Publishers - case room", "value": "2791"},
                                  {"label": "2793 - Printers and Publishers - photoengraving", "value": "2793"},
                                  {"label": "2794 - Printers and Publishers - printing plate", "value": "2794"},
                                  {"label": "2795 - Printers and Publishers - lithographic plates", "value": "2795"},
                                  {"label": "2812 - Chemicals - Alkalies and Chlorine", "value": "2812"},
                                  {"label": "2813 - Chemicals - Industrial Gases", "value": "2813"},
                                  {"label": "2816 - Chemicals - Inorganic Pigments", "value": "2816"},
                                  {"label": "2819 - Chemicals - Industrial Inorganic Chemicals, Not Elsewhere Classified", "value": "2819"},
                                  {"label": "2821 - Chemicals - Plastics Materials, Synthetic Resins, and Nonvulcanizable Elastomers", "value": "2821"},
                                  {"label": "2822 - Chemicals - synthetic gum", "value": "2822"},
                                  {"label": "2823 - Chemicals - synthetic fiber of cellulose", "value": "2823"},
                                  {"label": "2824 - Chemicals - Manmade Organic Fibers, Except Cellulosic", "value": "2824"},
                                  {"label": "2831 - Chemicals - biological products", "value": "2831"},
                                  {"label": "2141 - Tabacco Industry - Tobacco Stemming and Redrying", "value": "2141"},
                                  {"label": "2211 - Textile Industry - Fabric of cotton", "value": "2211"},
                                  {"label": "2221 - Textile Industry - Fabric of synthetic fiber, silk", "value": "2221"},
                                  {"label": "2231 - Textile Industry - Fabric of wool", "value": "2231"},
                                  {"label": "2241 - Textile Industry - Narrow Fabric and Other Smallwares Mills: Cotton, Wool, Silk", "value": "2241"},
                                  {"label": "2251 - Textile Industry - Women's Full-Length and Knee-Length Hosiery, Except Socks", "value": "2251"},
                                  {"label": "2252 - Textile Industry - Hosiery, Not Elsewhere Classified", "value": "2252"},
                                  {"label": "2253 - Textile Industry - Hosiery, Not Elsewhere Classified", "value": "2253"},
                                  {"label": "2254 - Textile Industry - Knit Underwear and Nightwear Mills", "value": "2254"},
                                  {"label": "2257 - Textile Industry - Weft Knit Fabric Mills", "value": "2257"},
                                  {"label": "2258 - Textile Industry - Lace and Warp Knit Fabric Mills", "value": "2258"},
                                  {"label": "2259 - Textile Industry - Knitting Mills, Not Elsewhere Classified", "value": "2259"},
                                  {"label": "2261 - Textile Industry - Finishers of Broadwoven Fabrics of Cotton", "value": "2261"},
                                  {"label": "2262 - Textile Industry - Finishers of Broadwoven Fabrics of Manmade Fiber and Silk", "value": "2262"},
                                  {"label": "2269 - Textile Industry - Finishers of Textiles, Not elsewhere Classified", "value": "2269"},
                                  {"label": "2271 - Textile Industry - carpeting, woven", "value": "2271"},
                                  {"label": "2272 - Textile Industry - tufting carpeting", "value": "2272"},
                                  {"label": "2279 - Textile Industry - carpeting, others", "value": "2279"},
                                  {"label": "2281 - Textile Industry - Yarn Spinning Mills", "value": "2281"},
                                  {"label": "2282 - Textile Industry - Yarn Texturizing, Throwing, Twisting, and Winding Mills", "value": "2282"},
                                  {"label": "2283 - Textile Industry - yarn factory, wool", "value": "2283"},
                                  {"label": "2284 - Textile Industry - thread, sewing silk", "value": "2284"},
                                  {"label": "2291 - Textile Industry - felt products", "value": "2291"},
                                  {"label": "2292 - Textile Industry - laces", "value": "2292"},
                                  {"label": "2293 - Textile Industry - wadding and cushions", "value": "2293"},
                                  {"label": "2294 - Textile Industry - textile filling waste, processing", "value": "2294"},
                                  {"label": "2295 - Textile Industry - Coated Fabrics, Not Rubberized", "value": "2295"},
                                  {"label": "2296 - Textile Industry - Tire Cord and Fabrics", "value": "2296"},
                                  {"label": "2297 - Textile Industry - Non-woven Fabrics", "value": "2297"},
                                  {"label": "2298 - Textile Industry - Cordage and Twine", "value": "2298"},
                                  {"label": "2299 - Textile Industry - yarns and fabrics, others", "value": "2299"},
                                  {"label": "2311 - Production of Cloth - suits, jackets ( men and boys )", "value": "2311"},
                                  {"label": "2321 - Production of Cloth - shirts, nightdress ( men and boys )", "value": "2321"},
                                  {"label": "2322 - Production of Cloth - Underwear ( men and boys )", "value": "2322"},
                                  {"label": "2323 - Production of Cloth - Ties, scarfs ( men and boys )", "value": "2323"},
                                  {"label": "2325 - Production of Cloth - Trousers ( men and boys )", "value": "2325"},
                                  {"label": "2326 - Production of Cloth - Working clothes ( men and boys )", "value": "2326"},
                                  {"label": "2329 - Production of Cloth - other clothes ( men and boys )", "value": "2329"},
                                  {"label": "2331 - Production of Cloth - Blouses ( ladies and girls )", "value": "2331"},
                                  {"label": "2335 - Production of Cloth - Dresses ( ladies and girls )", "value": "2335"},
                                  {"label": "2337 - Production of Cloth - Suits ( ladies and girls )", "value": "2337"},
                                  {"label": "2339 - Production of Cloth - Sportswear and other clothes ( ladies and girls )", "value": "2339"},
                                  {"label": "2341 - Production of Cloth - Underwear ( ladies and girls )", "value": "2341"},
                                  {"label": "2342 - Production of Cloth - Corsages", "value": "2342"},
                                  {"label": "2351 - Production of Cloth - Millinery", "value": "2351"},
                                  {"label": "2352 - Production of Cloth - Hats and canopies", "value": "2352"},
                                  {"label": "2361 - Production of Cloth - Children clothes, -blouses, -skirts", "value": "2361"},
                                  {"label": "2363 - Production of Cloth - Children coats, -suits", "value": "2363"},
                                  {"label": "2369 - Production of Cloth - Children wear, others", "value": "2369"},
                                  {"label": "2371 - Production of Cloth - Fur products", "value": "2371"},
                                  {"label": "2381 - Production of Cloth - Gloves", "value": "2381"},
                                  {"label": "2384 - Production of Cloth - Robes and Dressing Gowns", "value": "2384"},
                                  {"label": "2385 - Production of Cloth - Rain clothes", "value": "2385"},
                                  {"label": "2386 - Production of Cloth - Leather and Sheep-Lined Clothing", "value": "2386"},
                                  {"label": "2387 - Production of Cloth - Belts", "value": "2387"},
                                  {"label": "2514 - Furniture - fitted kitchen, furnishing made of metal", "value": "2514"},
                                  {"label": "2515 - Furniture - mattresses", "value": "2515"},
                                  {"label": "2517 - Furniture - wood closet for TV, radio etc.", "value": "2517"},
                                  {"label": "2519 - Furniture - furnishing, others", "value": "2519"},
                                  {"label": "2521 - Furniture - office furniture made of wood", "value": "2521"},
                                  {"label": "2522 - Furniture - office furniture made of metal", "value": "2522"},
                                  {"label": "2531 - Furniture - furniture for public buildings ( schools, theatres etc. )", "value": "2531"},
                                  {"label": "2541 - Furniture - office equipment, shelves ( wood )", "value": "2541"},
                                  {"label": "2542 - Furniture - office equipment, shelves ( metal )", "value": "2542"},
                                  {"label": "2591 - Furniture - decorating materials, sunshades", "value": "2591"},
                                  {"label": "2599 - Furniture - fitments, others", "value": "2599"},
                                  {"label": "2611 - Paper - cellulose", "value": "2611"},
                                  {"label": "2621 - Paper - paper mill", "value": "2621"},
                                  {"label": "2631 - Paper - board mill", "value": "2631"},
                                  {"label": "2641 - Paper - paper coat, lables", "value": "2641"},
                                  {"label": "2642 - Paper - Envelopes", "value": "2642"},
                                  {"label": "2643 - Paper - Bags ( except fabric )", "value": "2643"},
                                  {"label": "2645 - Paper - Paper products, pressed, cardboard", "value": "2645"},
                                  {"label": "2646 - Paper - Paper products, pressed and formed", "value": "2646"},
                                  {"label": "2647 - Paper - Paper products for sanitarian purposes", "value": "2647"},
                                  {"label": "2648 - Paper - Stationary", "value": "2648"},
                                  {"label": "2649 - Paper - processed paper products ( wallpapers etc. )", "value": "2649"},
                                  {"label": "2651 - Paper - folding of paper boxes", "value": "2651"},
                                  {"label": "2652 - Paper - Setup Paperboard Boxes", "value": "2652"},
                                  {"label": "2653 - Paper - crinkled cardboard", "value": "2653"},
                                  {"label": "2654 - Paper - milk- and food container", "value": "2654"},
                                  {"label": "0254 - Agriculture and Stock Breeding - hatcheries ( poultry )", "value": "0254"},
                                  {"label": "0259 - Agriculture and Stock Breeding - Other poultry farming", "value": "0259"},
                                  {"label": "0271 - Agriculture and Stock Breeding - Fur-bearing animals and rabbits", "value": "0271"},
                                  {"label": "0272 - Agriculture and Stock Breeding - Horses and related animals", "value": "0272"},
                                  {"label": "0279 - Agriculture and Stock Breeding - Animals, others", "value": "0279"},
                                  {"label": "0291 - Agriculture and Stock Breeding - Stock breeding, general", "value": "0291"},
                                  {"label": "0711 - Agricutlural services - Cultivation (plowing, manuring etc.)", "value": "0711"},
                                  {"label": "0721 - Agricutlural services - Plant culivation, pest management", "value": "0721"},
                                  {"label": "0722 - Agricutlural services - Harvesting, automatic", "value": "0722"},
                                  {"label": "0723 - Agricutlural services - Food processing", "value": "0723"},
                                  {"label": "0729 - Agricutlural services - agricultural work, in general", "value": "0729"},
                                  {"label": "0751 - Agricutlural services - Services for stock breeding, in general", "value": "0751"},
                                  {"label": "0752 - Agricutlural services - Services for pets, in general", "value": "0752"},
                                  {"label": "0761 - Agricutlural services - Commission processing for agriculture", "value": "0761"},
                                  {"label": "0762 - Agricutlural services - Agricultural consulting", "value": "0762"},
                                  {"label": "0781 - Agricutlural services - Landscape architecture", "value": "0781"},
                                  {"label": "0782 - Agricutlural services - lawn- and garden fosterage", "value": "0782"},
                                  {"label": "0783 - Agricutlural services - tree fostering", "value": "0783"},
                                  {"label": "0811 - Forestry - Timber woods", "value": "0811"},
                                  {"label": "0821 - Forestry - Tree nursery", "value": "0821"},
                                  {"label": "0843 - Forestry - Tapping", "value": "0843"},
                                  {"label": "0849 - Forestry - Forest products, others", "value": "0849"},
                                  {"label": "0851 - Forestry - Forestry Services", "value": "0851"},
                                  {"label": "0912 - Hunting and Fishery - Fishing", "value": "0912"},
                                  {"label": "0913 - Hunting and Fishery - Crustaceans", "value": "0913"},
                                  {"label": "0919 - Hunting and Fishery - Sea products, others", "value": "0919"},
                                  {"label": "0921 - Hunting and Fishery - Fish farming", "value": "0921"},
                                  {"label": "0971 - Hunting and Fishery - Hunt, game protection", "value": "0971"},
                                  {"label": "1752 - Building Companies - Floor Laying and Other Floor Work, Not Elsewhere Classified", "value": "1752"},
                                  {"label": "1761 - Building Companies - tilers and plumbers", "value": "1761"},
                                  {"label": "1771 - Building Companies - Concrete Work", "value": "1771"},
                                  {"label": "1781 - Building Companies - Water Well Drilling", "value": "1781"},
                                  {"label": "1791 - Building Companies - Structural Steel Erection", "value": "1791"},
                                  {"label": "1793 - Building Companies - Glass and Glazing Work", "value": "1793"},
                                  {"label": "1794 - Building Companies - Excavation Work", "value": "1794"},
                                  {"label": "1795 - Building Companies - demolition works", "value": "1795"},
                                  {"label": "1796 - Building Companies - building lot equipment", "value": "1796"},
                                  {"label": "1799 - Building Companies - construction works, others", "value": "1799"},
                                  {"label": "2011 - Foods and related Products - Butcher", "value": "2011"},
                                  {"label": "2013 - Foods and related Products - Sausage, meat products", "value": "2013"},
                                  {"label": "2016 - Foods and related Products - Poultry - slaughting and processing", "value": "2016"},
                                  {"label": "2017 - Foods and related Products - Poultry and Eggs, working up", "value": "2017"},
                                  {"label": "2021 - Foods and related Products - Butter", "value": "2021"},
                                  {"label": "2022 - Foods and related Products - Cheese", "value": "2022"},
                                  {"label": "2023 - Foods and related Products - Milk concentrate", "value": "2023"},
                                  {"label": "2024 - Foods and related Products - Ice cream, deep-frozen desserts", "value": "2024"},
                                  {"label": "2026 - Foods and related Products - Milk", "value": "2026"},
                                  {"label": "2032 - Foods and related Products - Preserve specialities", "value": "2032"},
                                  {"label": "2033 - Foods and related Products - Fruit- and Vegetables preserve", "value": "2033"},
                                  {"label": "2034 - Foods and related Products - dried fruits and vegetables", "value": "2034"},
                                  {"label": "2035 - Foods and related Products - Sauces, mustard, sandwiched fruits", "value": "2035"},
                                  {"label": "2037 - Foods and related Products - deep frozen fruit and vegetables", "value": "2037"},
                                  {"label": "2038 - Foods and related Products - deep frozen food, except fruit and vegetables", "value": "2038"},
                                  {"label": "2041 - Foods and related Products - flour, mill products", "value": "2041"},
                                  {"label": "2043 - Foods and related Products - Breakfast products of cereals", "value": "2043"},
                                  {"label": "2045 - Foods and related Products - Baking mix, doughs", "value": "2045"},
                                  {"label": "2046 - Foods and related Products - corn products, starch", "value": "2046"},
                                  {"label": "2047 - Foods and related Products - Animal food - pets", "value": "2047"},
                                  {"label": "2048 - Foods and related Products - Animal food, other animals", "value": "2048"},
                                  {"label": "2051 - Foods and related Products - Bread products, cakes", "value": "2051"},
                                  {"label": "2052 - Foods and related Products - Biscuits and crackers", "value": "2052"},
                                  {"label": "2061 - Foods and related Products - Cane sugar", "value": "2061"},
                                  {"label": "2062 - Foods and related Products - Refinement of cane sugar", "value": "2062"},
                                  {"label": "2063 - Foods and related Products - Beet sugar", "value": "2063"},
                                  {"label": "2065 - Foods and related Products - Candies", "value": "2065"},
                                  {"label": "2066 - Foods and related Products - Chocolate, cacao products", "value": "2066"},
                                  {"label": "2067 - Foods and related Products - Chewing gum", "value": "2067"},
                                  {"label": "2076 - Foods and related Products - other vegetable oils", "value": "2076"},
                                  {"label": "2077 - Foods and related Products - Fats and oil (animal)", "value": "2077"},
                                  {"label": "2079 - Foods and related Products - Margarine, oil", "value": "2079"},
                                  {"label": "2082 - Foods and related Products - Beer, malt drinks", "value": "2082"},
                                  {"label": "2083 - Foods and related Products - Malt", "value": "2083"},
                                  {"label": "2084 - Foods and related Products - Wine, brandy", "value": "2084"},
                                  {"label": "2085 - Foods and related Products - Spirits", "value": "2085"},
                                  {"label": "2086 - Foods and related Products - Drinks ( nonalcoholic)", "value": "2086"},
                                  {"label": "2087 - Foods and related Products - Aroma essence, sirup", "value": "2087"},
                                  {"label": "2091 - Foods and related Products - Fish preserves, kipper", "value": "2091"},
                                  {"label": "2092 - Foods and related Products - Fish - packed and frozen", "value": "2092"},
                                  {"label": "2095 - Foods and related Products - Roast coffee", "value": "2095"},
                                  {"label": "2097 - Foods and related Products - Ice cream", "value": "2097"},
                                  {"label": "2098 - Foods and related Products - Pasta", "value": "2098"},
                                  {"label": "2099 - Foods and related Products - Food, others", "value": "2099"},
                                  {"label": "2111 - Tabacco Industry - Cigarettes", "value": "2111"},
                                  {"label": "2121 - Tabacco Industry - Cigars", "value": "2121"},
                                  {"label": "2131 - Tabacco Industry - Tobacco", "value": "2131"},
                                  {"label": "2389 - Production of Cloth - other clothing products", "value": "2389"},
                                  {"label": "2391 - Production of Cloth - Curtains, decoration materials", "value": "2391"},
                                  {"label": "2392 - Production of Cloth - Home textiles, except curtains", "value": "2392"},
                                  {"label": "2393 - Production of Cloth - Textile Bags", "value": "2393"},
                                  {"label": "2394 - Production of Cloth - canvas, tents, canvas cover", "value": "2394"},
                                  {"label": "2395 - Production of Cloth - Pleating, Decorative and Novelty Stitching, and Tucking for the Trade", "value": "2395"},
                                  {"label": "2396 - Production of Cloth - lining, border etc.", "value": "2396"},
                                  {"label": "2397 - Production of Cloth - stitchery", "value": "2397"},
                                  {"label": "2399 - Production of Cloth - textiles, others", "value": "2399"},
                                  {"label": "2411 - Wood Products - Logging", "value": "2411"},
                                  {"label": "2421 - Wood Products - Sawmills and Planing Mills, General", "value": "2421"},
                                  {"label": "2426 - Wood Products - Hardwood Dimension and Flooring Mills", "value": "2426"},
                                  {"label": "2429 - Wood Products - Special Product Sawmills, Not Elsewhere Classified", "value": "2429"},
                                  {"label": "2431 - Wood Products - doors, window frames", "value": "2431"},
                                  {"label": "2434 - Wood Products - built-in closet, timber kitchen", "value": "2434"},
                                  {"label": "2435 - Wood Products - veneer and ply wood ( hard )", "value": "2435"},
                                  {"label": "2436 - Wood Products - veneer and ply wood ( soft )", "value": "2436"},
                                  {"label": "2439 - Wood Products - trusses, arbors", "value": "2439"},
                                  {"label": "2441 - Wood Products - timber cartons", "value": "2441"},
                                  {"label": "2448 - Wood Products - pallets", "value": "2448"},
                                  {"label": "2449 - Wood Products - wooden boxes", "value": "2449"},
                                  {"label": "2451 - Wood Products - campmobile ( timber )", "value": "2451"},
                                  {"label": "2452 - Wood Products - prefabricated house ( timber )", "value": "2452"},
                                  {"label": "2491 - Wood Products - wood impregnation", "value": "2491"},
                                  {"label": "2492 - Wood Products - chipboard", "value": "2492"},
                                  {"label": "2499 - Wood Products - wood products, others", "value": "2499"},
                                  {"label": "2511 - Furniture - furnishing made of wood", "value": "2511"},
                                  {"label": "2512 - Furniture - upholstery made of wood", "value": "2512"},
                                  {"label": "2833 - Chemicals - pharmaceuticals ( botanical remedies )", "value": "2833"},
                                  {"label": "2834 - Chemicals - pharmaceuticals ( medicaments )", "value": "2834"},
                                  {"label": "2841 - Chemicals - soap and cleaning agent", "value": "2841"},
                                  {"label": "2842 - Chemicals - cleaning supplies", "value": "2842"},
                                  {"label": "2843 - Chemicals - Surface Active Agents, Finishing Agents, Sulfonated Oils", "value": "2843"},
                                  {"label": "2844 - Chemicals - cosmetics, perfumes, toilet articles", "value": "2844"},
                                  {"label": "2851 - Chemicals - coloring and finish, etc.", "value": "2851"},
                                  {"label": "2861 - Chemicals - chemicals made of resin and wood", "value": "2861"},
                                  {"label": "2865 - Chemicals - organic coloring", "value": "2865"},
                                  {"label": "2869 - Chemicals - organic industry chemicals", "value": "2869"},
                                  {"label": "2873 - Chemicals - nitrogen fertiliser", "value": "2873"},
                                  {"label": "2874 - Chemicals - phosphate fertiliser", "value": "2874"},
                                  {"label": "2875 - Chemicals - fertiliser, blend", "value": "2875"},
                                  {"label": "2879 - Chemicals - chemicals for agriculture, others", "value": "2879"},
                                  {"label": "2891 - Chemicals - emplastic, sealant", "value": "2891"},
                                  {"label": "2892 - Chemicals - explosives", "value": "2892"},
                                  {"label": "2893 - Chemicals - printing ink", "value": "2893"},
                                  {"label": "2895 - Chemicals - carbon black", "value": "2895"},
                                  {"label": "2899 - Chemicals - chemical products, others", "value": "2899"},
                                  {"label": "2911 - Crude Oil Industry - crude oil refinery", "value": "2911"},
                                  {"label": "2951 - Crude Oil Industry - asphalt, tarmacs", "value": "2951"},
                                  {"label": "2952 - Crude Oil Industry - roofing cardboard, tarmac- coat", "value": "2952"},
                                  {"label": "2992 - Crude Oil Industry - lubes and fats", "value": "2992"},
                                  {"label": "2999 - Crude Oil Industry - mineral oil -and coal products, others", "value": "2999"},
                                  {"label": "3011 - Rubber and Plastic Products - tires and tubes", "value": "3011"},
                                  {"label": "3021 - Rubber and Plastic Products - gum- and plastic shoes", "value": "3021"},
                                  {"label": "3031 - Rubber and Plastic Products - gum recovery", "value": "3031"},
                                  {"label": "3041 - Rubber and Plastic Products - gum- and plastic tubes, belts", "value": "3041"},
                                  {"label": "3069 - Rubber and Plastic Products - gum products, others", "value": "3069"},
                                  {"label": "3079 - Rubber and Plastic Products - synthetic products, others", "value": "3079"},
                                  {"label": "3111 - Leather and Leather Products - leather tannery and processing", "value": "3111"},
                                  {"label": "3131 - Leather and Leather Products - shoe leather and accessories", "value": "3131"},
                                  {"label": "3142 - Leather and Leather Products - slippers", "value": "3142"},
                                  {"label": "3143 - Leather and Leather Products - men´s shoes", "value": "3143"},
                                  {"label": "3144 - Leather and Leather Products - ladies´shoes", "value": "3144"},
                                  {"label": "3149 - Leather and Leather Products - chaussure, sport shoes in general", "value": "3149"},
                                  {"label": "3151 - Leather and Leather Products - leather gloves", "value": "3151"},
                                  {"label": "3161 - Leather and Leather Products - leather suitcase and - bags", "value": "3161"},
                                  {"label": "3171 - Leather and Leather Products - handbags and purses ( ladies )", "value": "3171"},
                                  {"label": "3172 - Leather and Leather Products - leather articles for your individual demand", "value": "3172"},
                                  {"label": "3199 - Leather and Leather Products - leather products, others", "value": "3199"},
                                  {"label": "3211 - Stone, Clay, Glass and Concrete Products - Flat Glass", "value": "3211"},
                                  {"label": "3221 - Stone, Clay, Glass and Concrete Products - Glass Containers", "value": "3221"},
                                  {"label": "3229 - Stone, Clay, Glass and Concrete Products - Pressed and Blown Glass and Glassware, Not Elsewhere Classified", "value": "3229"},
                                  {"label": "3231 - Stone, Clay, Glass and Concrete Products - Glass Products, Made of Purchased Glass", "value": "3231"},
                                  {"label": "3241 - Stone, Clay, Glass and Concrete Products - cement", "value": "3241"},
                                  {"label": "3251 - Stone, Clay, Glass and Concrete Products - bricks and building blocks", "value": "3251"},
                                  {"label": "3253 - Stone, Clay, Glass and Concrete Products - ceramic flagstones", "value": "3253"},
                                  {"label": "3255 - Stone, Clay, Glass and Concrete Products - fire proofed materials made of potter´s clay", "value": "3255"},
                                  {"label": "3259 - Stone, Clay, Glass and Concrete Products - other potter´s clay manufactures", "value": "3259"},
                                  {"label": "3261 - Stone, Clay, Glass and Concrete Products - chinaware armatures and accessories", "value": "3261"},
                                  {"label": "3262 - Stone, Clay, Glass and Concrete Products - dishware", "value": "3262"},
                                  {"label": "3263 - Stone, Clay, Glass and Concrete Products - Fine Earthenware (Whiteware) Table and Kitchen Articles", "value": "3263"},
                                  {"label": "3264 - Stone, Clay, Glass and Concrete Products - Porcelain Electrical Supplies", "value": "3264"},
                                  {"label": "3269 - Stone, Clay, Glass and Concrete Products - products of ceramics, others", "value": "3269"},
                                  {"label": "3271 - Stone, Clay, Glass and Concrete Products - concrete stones, concrete blocks", "value": "3271"},
                                  {"label": "3272 - Stone, Clay, Glass and Concrete Products - concrete products, except blocks and bricks", "value": "3272"},
                                  {"label": "3273 - Stone, Clay, Glass and Concrete Products - ready-mixed concrete", "value": "3273"},
                                  {"label": "3274 - Stone, Clay, Glass and Concrete Products - lime", "value": "3274"},
                                  {"label": "3275 - Stone, Clay, Glass and Concrete Products - gypsum products", "value": "3275"},
                                  {"label": "3281 - Stone, Clay, Glass and Concrete Products - slabs, marble", "value": "3281"},
                                  {"label": "3291 - Stone, Clay, Glass and Concrete Products - abradant", "value": "3291"},
                                  {"label": "3292 - Stone, Clay, Glass and Concrete Products - asbestos products", "value": "3292"},
                                  {"label": "3293 - Stone, Clay, Glass and Concrete Products - sealant", "value": "3293"},
                                  {"label": "3295 - Stone, Clay, Glass and Concrete Products - minerals, kibbled etc.", "value": "3295"},
                                  {"label": "3296 - Stone, Clay, Glass and Concrete Products - Mineral Wool", "value": "3296"},
                                  {"label": "3297 - Stone, Clay, Glass and Concrete Products - fire resistant products ( except clay )", "value": "3297"},
                                  {"label": "3299 - Stone, Clay, Glass and Concrete Products - Nonmetallic Mineral Products, Not Elsewhere Classified", "value": "3299"},
                                  {"label": "3312 - Metal working business - Steel Works, Blast Furnaces (Including Coke Ovens), and Rolling", "value": "3312"},
                                  {"label": "3313 - Metal working business - Electrometallurgical Products, Except Steel", "value": "3313"},
                                  {"label": "3315 - Metal working business - Steel Wiredrawing and Steel Nails and Spikes", "value": "3315"},
                                  {"label": "3316 - Metal working business - Cold-Rolled Steel Sheet, Strip, and Bars", "value": "3316"},
                                  {"label": "3317 - Metal working business - steel pipes", "value": "3317"},
                                  {"label": "3321 - Metal working business - Cold-Rolled Steel Sheet, Strip, and Bars", "value": "3321"},
                                  {"label": "3322 - Metal working business - Malleable Iron Foundries", "value": "3322"},
                                  {"label": "3324 - Metal working business - Steel Investment Foundries", "value": "3324"},
                                  {"label": "3325 - Metal working business - Steel Foundries, Not Elsewhere Classified", "value": "3325"},
                                  {"label": "3331 - Metal working business - melting of copper", "value": "3331"},
                                  {"label": "3332 - Metal working business - melting of lead", "value": "3332"},
                                  {"label": "3333 - Metal working business - melting of zinc", "value": "3333"},
                                  {"label": "3334 - Metal working business - aluminium extraction", "value": "3334"},
                                  {"label": "3339 - Metal working business - Primary Smelting and Refining of Nonferrous Metals, Except Copper", "value": "3339"},
                                  {"label": "3341 - Metal working business - Secondary Smelting and Refining of Nonferrous Metals", "value": "3341"},
                                  {"label": "3351 - Metal working business - Rolling, Drawing, and Extruding Of Copper", "value": "3351"},
                                  {"label": "3353 - Metal working business - Aluminum Sheet, Plate, and Foil", "value": "3353"},
                                  {"label": "3354 - Metal working business - Aluminum Extruded Products", "value": "3354"},
                                  {"label": "3355 - Metal working business - Aluminum Rolling and Drawing, Not Elsewhere Classified", "value": "3355"},
                                  {"label": "3356 - Metal working business - Rolling, Drawing, and Extruding Of Nonferrous Metals, Except copper and aluminium", "value": "3356"},
                                  {"label": "3357 - Metal working business - Drawing and Insulating of Nonferrous Wire", "value": "3357"},
                                  {"label": "3361 - Metal working business - aluminium foundry", "value": "3361"},
                                  {"label": "3362 - Metal working business - brass-, bronze-, copper foundries", "value": "3362"},
                                  {"label": "3369 - Metal working business - Nonferrous Foundries, Except Aluminum and Copper", "value": "3369"},
                                  {"label": "3398 - Metal working business - Heat treatment of metal", "value": "3398"},
                                  {"label": "3399 - Metal working business - Primary Metal Products, Not Elsewhere Classified", "value": "3399"},
                                  {"label": "3411 - Metal products, without machines and transport - Metal Cans", "value": "3411"},
                                  {"label": "3412 - Metal products, without machines and transport - Metal Shipping Barrels, Drums, Kegs, and Pails", "value": "3412"},
                                  {"label": "3421 - Metal products, without machines and transport - Knifes, scissors, cutleries", "value": "3421"},
                                  {"label": "3423 - Metal products, without machines and transport - tools, except machines", "value": "3423"},
                                  {"label": "3425 - Metal products, without machines and transport - handsaw", "value": "3425"},
                                  {"label": "3429 - Metal products, without machines and transport - iron products, others", "value": "3429"},
                                  {"label": "3431 - Metal products, without machines and transport - Enameled Iron and Metal Sanitary Ware", "value": "3431"},
                                  {"label": "3432 - Metal products, without machines and transport - fittings ( brass )", "value": "3432"},
                                  {"label": "3433 - Metal products, without machines and transport - heater ( except electrical stuff )", "value": "3433"},
                                  {"label": "3441 - Metal products, without machines and transport - Fabricated Structural Metal", "value": "3441"},
                                  {"label": "3442 - Metal products, without machines and transport - Metal Doors, Sash, Frames, Molding, and Trim", "value": "3442"},
                                  {"label": "3443 - Metal products, without machines and transport - Fabricated Plate Work (Boiler Shops)", "value": "3443"},
                                  {"label": "3444 - Metal products, without machines and transport - Sheet Metal Work", "value": "3444"},
                                  {"label": "3446 - Metal products, without machines and transport - Architectural and Ornamental Metal Work", "value": "3446"},
                                  {"label": "3448 - Metal products, without machines and transport - finish part made of metal", "value": "3448"},
                                  {"label": "3449 - Metal products, without machines and transport - Miscellaneous Structural Metal Work", "value": "3449"},
                                  {"label": "3451 - Metal products, without machines and transport - Screw Machine Products", "value": "3451"},
                                  {"label": "3452 - Metal products, without machines and transport - bolts, nuts, rivets", "value": "3452"},
                                  {"label": "3462 - Metal products, without machines and transport - Iron and Steel Forgings", "value": "3462"},
                                  {"label": "3463 - Metal products, without machines and transport - Nonferrous Forgings", "value": "3463"},
                                  {"label": "3465 - Metal products, without machines and transport - Automotive Stampings", "value": "3465"},
                                  {"label": "3466 - Metal products, without machines and transport - Crowns and Closures", "value": "3466"},
                                  {"label": "3469 - Metal products, without machines and transport - Metal Stampings, Not Elsewhere Classified", "value": "3469"},
                                  {"label": "3471 - Metal products, without machines and transport - Electroplating, Plating, Polishing, Anodizing, and Coloring", "value": "3471"},
                                  {"label": "3479 - Metal products, without machines and transport - Coating, Engraving, and Allied Services, Not Elsewhere Classified", "value": "3479"},
                                  {"label": "3482 - Metal products, without machines and transport - munitions ( hand-gun )", "value": "3482"},
                                  {"label": "3483 - Metal products, without machines and transport - munition ( except hand-gun )", "value": "3483"},
                                  {"label": "3484 - Metal products, without machines and transport - hand-guns", "value": "3484"},
                                  {"label": "3489 - Metal products, without machines and transport - weapons and accessories, others", "value": "3489"},
                                  {"label": "3493 - Metal products, without machines and transport - Steel Springs, Except Wire", "value": "3493"},
                                  {"label": "3494 - Metal products, without machines and transport - Valves and Pipe Fittings, Not Elsewhere Classified", "value": "3494"},
                                  {"label": "3495 - Metal products, without machines and transport - Wire Springs", "value": "3495"},
                                  {"label": "3496 - Metal products, without machines and transport - conductor products, others", "value": "3496"},
                                  {"label": "3497 - Metal products, without machines and transport - Metal Foil and Leaf", "value": "3497"},
                                  {"label": "3498 - Metal products, without machines and transport - metal pipes and accessories", "value": "3498"},
                                  {"label": "3499 - Metal products, without machines and transport - metal products, others", "value": "3499"},
                                  {"label": "3511 - Production of machines general - turbine", "value": "3511"},
                                  {"label": "3519 - Production of machines general - combustion engine, others", "value": "3519"},
                                  {"label": "3523 - Production of machines general - Farm Machinery and Equipment", "value": "3523"},
                                  {"label": "3524 - Production of machines general - Lawn and Garden Tractors and Home Lawn and Garden Equipment", "value": "3524"},
                                  {"label": "3531 - Production of machines general - Construction Machinery and Equipment", "value": "3531"},
                                  {"label": "3532 - Production of machines general - Mining Machinery and Equipment, Except Oil and Gas Field", "value": "3532"},
                                  {"label": "3533 - Production of machines general - Oil and Gas Field Machinery and Equipment", "value": "3533"},
                                  {"label": "3534 - Production of machines general - lifts, escalators", "value": "3534"},
                                  {"label": "3535 - Production of machines general - Conveyors and Conveying Equipment", "value": "3535"},
                                  {"label": "3536 - Production of machines general - Overhead Traveling Cranes, Hoists, and Monorail Systems", "value": "3536"},
                                  {"label": "3537 - Production of machines general - Industrial Trucks, Tractors, Trailers, and Stackers", "value": "3537"},
                                  {"label": "3541 - Production of machines general - Machine Tools, Metal Cutting Types", "value": "3541"},
                                  {"label": "3542 - Production of machines general - Machine Tools, Metal Forming Types", "value": "3542"},
                                  {"label": "3544 - Production of machines general - special tools", "value": "3544"},
                                  {"label": "3545 - Production of machines general - Cutting Tools, Machine Tool Accessories, and Machinists'Precision", "value": "3545"},
                                  {"label": "3546 - Production of machines general - Power-Driven Handtools", "value": "3546"},
                                  {"label": "3547 - Production of machines general - Rolling Mill Machinery and Equipment", "value": "3547"},
                                  {"label": "3549 - Production of machines general - Metalworking Machinery, Not Elsewhere Classified", "value": "3549"},
                                  {"label": "3551 - Production of machines general - machinery for food industry", "value": "3551"},
                                  {"label": "3552 - Production of machines general - Textile Machinery", "value": "3552"},
                                  {"label": "3553 - Production of machines general - machines for wood processing", "value": "3553"},
                                  {"label": "3554 - Production of machines general - machines for paper industry", "value": "3554"},
                                  {"label": "3555 - Production of machines general - print shop machines", "value": "3555"},
                                  {"label": "3559 - Production of machines general - industry machines, others", "value": "3559"},
                                  {"label": "3561 - Production of machines general - pumps", "value": "3561"},
                                  {"label": "3562 - Production of machines general - Ball and Roller Bearings", "value": "3562"},
                                  {"label": "3563 - Production of machines general - compressor", "value": "3563"},
                                  {"label": "3564 - Production of machines general - blowers, ventilator", "value": "3564"},
                                  {"label": "3565 - Production of machines general - Packaging Machinery", "value": "3565"},
                                  {"label": "3566 - Production of machines general - gear change, gear", "value": "3566"},
                                  {"label": "3567 - Production of machines general - industrial furnace", "value": "3567"},
                                  {"label": "3568 - Production of machines general - Mechanical Power Transmission Equipment, Not Elsewhere Classified", "value": "3568"},
                                  {"label": "3569 - Production of machines general - General Industrial Machinery and Equipment, Not Elsewhere", "value": "3569"},
                                  {"label": "3572 - Production of machines general - typewriter", "value": "3572"},
                                  {"label": "3573 - Production of machines general - computer", "value": "3573"},
                                  {"label": "3574 - Production of machines general - calculator, except computer", "value": "3574"},
                                  {"label": "3576 - Production of machines general - balances", "value": "3576"},
                                  {"label": "3579 - Production of machines general - office machine, others", "value": "3579"},
                                  {"label": "3581 - Production of machines general - Automatic Vending Machines", "value": "3581"},
                                  {"label": "3582 - Production of machines general - Commercial Laundry, Drycleaning, and Pressing Machines", "value": "3582"},
                                  {"label": "3585 - Production of machines general - Air-Conditioning and Warm Air Heating Equipment and Commercial", "value": "3585"},
                                  {"label": "3586 - Production of machines general - Measuring and Dispensing Pumps", "value": "3586"},
                                  {"label": "3589 - Production of machines general - car washer, cooker, cleaning machine", "value": "3589"},
                                  {"label": "3592 - Production of machines general - Carburetors, Pistons, Piston Rings, and Valves", "value": "3592"},
                                  {"label": "3599 - Production of machines general - Industrial and Commercial Machinery and Equipment, Not Elsewhere", "value": "3599"},
                                  {"label": "3612 - Machines, electric - transformer", "value": "3612"},
                                  {"label": "3613 - Machines, electric - Switchgear and Switchboard Apparatus", "value": "3613"},
                                  {"label": "3621 - Machines, electric - engines and generators", "value": "3621"},
                                  {"label": "3622 - Machines, electric - start- and control devices", "value": "3622"},
                                  {"label": "3623 - Machines, electric - electric welding machine", "value": "3623"},
                                  {"label": "3624 - Machines, electric - Carbon and Graphite Products", "value": "3624"},
                                  {"label": "3629 - Machines, electric - Electrical Industrial Apparatus, Not Elsewhere Classified", "value": "3629"},
                                  {"label": "3631 - Machines, electric - cooker and boiling apparatus ( household )", "value": "3631"},
                                  {"label": "3632 - Machines, electric - refrigerators ( household )", "value": "3632"},
                                  {"label": "3633 - Machines, electric - washing machine ( household )", "value": "3633"},
                                  {"label": "3634 - Machines, electric - electrical household appliances", "value": "3634"},
                                  {"label": "3635 - Machines, electric - hoover ( household )", "value": "3635"},
                                  {"label": "3636 - Machines, electric - sewing machine", "value": "3636"},
                                  {"label": "3639 - Machines, electric - household appliance, others", "value": "3639"},
                                  {"label": "3641 - Machines, electric - electric lamp", "value": "3641"},
                                  {"label": "3643 - Machines, electric - Current-Carrying Wiring Devices", "value": "3643"},
                                  {"label": "3644 - Machines, electric - Noncurrent-Carrying Wiring Devices", "value": "3644"},
                                  {"label": "3645 - Machines, electric - table- wall- and garden lamps", "value": "3645"},
                                  {"label": "3646 - Machines, electric - Commercial, Industrial, and Institutional Electric Lighting Fixtures", "value": "3646"},
                                  {"label": "3647 - Machines, electric - vehicle shiners", "value": "3647"},
                                  {"label": "3648 - Machines, electric - lighting, others", "value": "3648"},
                                  {"label": "3651 - Machines, electric - radio and television", "value": "3651"},
                                  {"label": "3652 - Machines, electric - records, tapes", "value": "3652"},
                                  {"label": "3661 - Machines, electric - telephone, teleprinter", "value": "3661"},
                                  {"label": "3662 - Machines, electric - broadcast equipments", "value": "3662"},
                                  {"label": "3671 - Machines, electric - Electron Tubes for radio and TV", "value": "3671"},
                                  {"label": "3672 - Machines, electric - Printed Circuit Boards", "value": "3672"},
                                  {"label": "3673 - Machines, electric - thermionic tubes for industrial purposes", "value": "3673"},
                                  {"label": "3674 - Machines, electric - Semiconductors and Related Devices", "value": "3674"},
                                  {"label": "3675 - Machines, electric - Electronic Capacitors", "value": "3675"},
                                  {"label": "3676 - Machines, electric - Electronic Resistors", "value": "3676"},
                                  {"label": "3677 - Machines, electric - Electronic Coils, Transformers, and Other Inductors", "value": "3677"},
                                  {"label": "3678 - Machines, electric - Electronic Connectors", "value": "3678"},
                                  {"label": "3679 - Machines, electric - Electronic Components, Not Elsewhere Classified", "value": "3679"},
                                  {"label": "3691 - Machines, electric - Batteries", "value": "3691"},
                                  {"label": "3693 - Machines, electric - X-ray and electric-medical equipments", "value": "3693"},
                                  {"label": "3694 - Machines, electric - Electrical Equipment for Internal Combustion Engines", "value": "3694"},
                                  {"label": "3699 - Machines, electric - Electrical Machinery, Equipment, and Supplies, Not Elsewhere", "value": "3699"},
                                  {"label": "3711 - Transport Devices - Motor Vehicles and Passenger Car Bodies", "value": "3711"},
                                  {"label": "3713 - Transport Devices - Truck and Bus Bodies", "value": "3713"},
                                  {"label": "3714 - Transport Devices - Motor Vehicle Parts and Accessories", "value": "3714"},
                                  {"label": "3715 - Transport Devices - Truck Trailers", "value": "3715"},
                                  {"label": "3721 - Transport Devices - airplanes", "value": "3721"},
                                  {"label": "3724 - Transport Devices - airplane engine", "value": "3724"},
                                  {"label": "3728 - Transport Devices - Aircraft Parts and Auxiliary Equipment, Not Elsewhere Classified", "value": "3728"},
                                  {"label": "3731 - Transport Devices - shipbuilding and repair", "value": "3731"},
                                  {"label": "3732 - Transport Devices - boatbuilding and -repair", "value": "3732"},
                                  {"label": "3743 - Transport Devices - rail", "value": "3743"},
                                  {"label": "3751 - Transport Devices - motor bikes, bicycles", "value": "3751"},
                                  {"label": "3761 - Transport Devices - Guided Missiles and Space Vehicles", "value": "3761"},
                                  {"label": "3792 - Transport Devices - trailer", "value": "3792"},
                                  {"label": "3795 - Transport Devices - armored vehicle", "value": "3795"},
                                  {"label": "3799 - Transport Devices - vehicles, not elsewhere classified", "value": "3799"},
                                  {"label": "3811 - Special Instruments - scientific instruments", "value": "3811"},
                                  {"label": "3822 - Special Instruments - instruments for temperature and humidity", "value": "3822"},
                                  {"label": "3823 - Special Instruments - instruments for industrial purposes", "value": "3823"},
                                  {"label": "3824 - Special Instruments - liquid counter, counting train", "value": "3824"},
                                  {"label": "3825 - Special Instruments - Instruments for Measuring and Testing of Electricity and Electrical", "value": "3825"},
                                  {"label": "3829 - Special Instruments - Measuring and Controlling Devices, Not Elsewhere Classified", "value": "3829"},
                                  {"label": "3832 - Special Instruments - optical instruments, lenses", "value": "3832"},
                                  {"label": "3841 - Special Instruments - Surgical and Medical Instruments and Apparatus", "value": "3841"},
                                  {"label": "3842 - Special Instruments - Orthopedic, Prosthetic, and Surgical Appliances and Supplies", "value": "3842"},
                                  {"label": "3843 - Special Instruments - Dental Equipment and Supplies", "value": "3843"},
                                  {"label": "3851 - Special Instruments - eye optic articles", "value": "3851"},
                                  {"label": "3861 - Special Instruments - Photographic Equipment and Supplies", "value": "3861"},
                                  {"label": "3873 - Special Instruments - Watches, Clocks, Clockwork Operated Devices, and Parts", "value": "3873"},
                                  {"label": "3911 - Divers Manufacturing Companies - jewellery", "value": "3911"},
                                  {"label": "3914 - Divers Manufacturing Companies - silverware", "value": "3914"},
                                  {"label": "3915 - Divers Manufacturing Companies - jeweller requirement", "value": "3915"},
                                  {"label": "3931 - Divers Manufacturing Companies - Musical Instruments", "value": "3931"},
                                  {"label": "3942 - Divers Manufacturing Companies - dolls, stuffed animals", "value": "3942"},
                                  {"label": "3944 - Divers Manufacturing Companies - games, toys", "value": "3944"},
                                  {"label": "3949 - Divers Manufacturing Companies - sports goods, not elsewhere classified", "value": "3949"},
                                  {"label": "3951 - Divers Manufacturing Companies - fountain-pen, mechanical pencil", "value": "3951"},
                                  {"label": "3952 - Divers Manufacturing Companies - pencils and colored pencils", "value": "3952"},
                                  {"label": "3953 - Divers Manufacturing Companies - Marking Devices", "value": "3953"},
                                  {"label": "3955 - Divers Manufacturing Companies - Carbon Paper and Inked Ribbons", "value": "3955"},
                                  {"label": "3961 - Divers Manufacturing Companies - costume jewellery", "value": "3961"},
                                  {"label": "3962 - Divers Manufacturing Companies - silk flowers, plumes", "value": "3962"},
                                  {"label": "3963 - Divers Manufacturing Companies - buttons", "value": "3963"},
                                  {"label": "3964 - Divers Manufacturing Companies - needles, hook, eye, etc.", "value": "3964"},
                                  {"label": "3991 - Divers Manufacturing Companies - Brooms and Brushes", "value": "3991"},
                                  {"label": "3993 - Divers Manufacturing Companies - Signs and Advertising Specialties", "value": "3993"},
                                  {"label": "3995 - Divers Manufacturing Companies - Burial Caskets", "value": "3995"},
                                  {"label": "3996 - Divers Manufacturing Companies - Linoleum, Asphalted-Felt-Base, and Other Hard Surface Floor", "value": "3996"},
                                  {"label": "3999 - Divers Manufacturing Companies - Manufacturing Industries, Not Elsewhere Classified", "value": "3999"},
                                  {"label": "4011 - Railway Transport - Railroads, Line-Haul Operating", "value": "4011"},
                                  {"label": "4013 - Railway Transport - Railroad Switching and Terminal Establishments", "value": "4013"},
                                  {"label": "4041 - Railway Transport - railway express service", "value": "4041"},
                                  {"label": "4111 - Transport of passengers on rail and road - public local traffic, busses", "value": "4111"},
                                  {"label": "4119 - Transport of passengers on rail and road - round trips, hire-cars", "value": "4119"},
                                  {"label": "4121 - Transport of passengers on rail and road - Taxicabs", "value": "4121"},
                                  {"label": "4131 - Transport of passengers on rail and road - Intercity and Rural Bus Transportation", "value": "4131"},
                                  {"label": "4141 - Transport of passengers on rail and road - Local Bus Charter Service", "value": "4141"},
                                  {"label": "4142 - Transport of passengers on rail and road - Bus Charter Service, Except Local", "value": "4142"},
                                  {"label": "4151 - Transport of passengers on rail and road - School Buses", "value": "4151"},
                                  {"label": "4171 - Transport of passengers on rail and road - bus terminal", "value": "4171"},
                                  {"label": "4172 - Transport of passengers on rail and road - service for busses", "value": "4172"},
                                  {"label": "4212 - Road haulage and Storage - Local Trucking Without Storage", "value": "4212"},
                                  {"label": "4213 - Road haulage and Storage - Trucking, Except Local", "value": "4213"},
                                  {"label": "4214 - Road haulage and Storage - short haul road service with storage", "value": "4214"},
                                  {"label": "4221 - Road haulage and Storage - Farm Product Warehousing and Storage", "value": "4221"},
                                  {"label": "4222 - Road haulage and Storage - Refrigerated Warehousing and Storage", "value": "4222"},
                                  {"label": "4224 - Road haulage and Storage - storage of household goods", "value": "4224"},
                                  {"label": "4225 - Road haulage and Storage - storage, in general", "value": "4225"},
                                  {"label": "4226 - Road haulage and Storage - Special Warehousing and Storage, Not Elsewhere Classified", "value": "4226"},
                                  {"label": "4231 - Road haulage and Storage - motor truck stations with service", "value": "4231"},
                                  {"label": "4311 - Postal Services - United States Postal Service", "value": "4311"},
                                  {"label": "4411 - Water Transport - overseas shipping", "value": "4411"},
                                  {"label": "4422 - Water Transport - coastal shipping", "value": "4422"},
                                  {"label": "4441 - Water Transport - inland-, river-, and canal water transportation", "value": "4441"},
                                  {"label": "4452 - Water Transport - ferries", "value": "4452"},
                                  {"label": "4459 - Water Transport - round trips", "value": "4459"},
                                  {"label": "4463 - Water Transport - harbor site", "value": "4463"},
                                  {"label": "4464 - Water Transport - canal operation", "value": "4464"},
                                  {"label": "4469 - Water Transport - shipping services, not elsewhere classified", "value": "4469"},
                                  {"label": "4511 - Air Transport - air transportation (passenger and freight)", "value": "4511"},
                                  {"label": "4582 - Air Transport - airports", "value": "4582"},
                                  {"label": "4583 - Air Transport - airport services", "value": "4583"},
                                  {"label": "4612 - Pipelines, without natural gas - Crude Petroleum Pipelines", "value": "4612"},
                                  {"label": "4613 - Pipelines, without natural gas - Refined Petroleum Pipelines", "value": "4613"},
                                  {"label": "4619 - Pipelines, without natural gas - piplines, not elsewhere classified", "value": "4619"},
                                  {"label": "4712 - Transport Service - dispatch departments and cargo", "value": "4712"},
                                  {"label": "4722 - Transport Service - travel agencies, tickets", "value": "4722"},
                                  {"label": "4723 - Transport Service - cargo agency", "value": "4723"},
                                  {"label": "4782 - Transport Service - examination and weighing", "value": "4782"},
                                  {"label": "4783 - Transport Service - Packing and Crating for transportation", "value": "4783"},
                                  {"label": "4784 - Transport Service - tollgate", "value": "4784"},
                                  {"label": "4789 - Transport Service - haulage services, not elsewhere classified", "value": "4789"},
                                  {"label": "4811 - Telecommunication Devices - telephone exchange", "value": "4811"},
                                  {"label": "4821 - Telecommunication Devices - telex exchange", "value": "4821"},
                                  {"label": "4832 - Telecommunication Devices - Radio Broadcasting Stations", "value": "4832"},
                                  {"label": "4833 - Telecommunication Devices - TV stations", "value": "4833"},
                                  {"label": "4899 - Telecommunication Devices - Communications Services, Not Elsewhere Classified", "value": "4899"},
                                  {"label": "4911 - Electric, Gas, Water Plants etc. - electricity companies", "value": "4911"},
                                  {"label": "4922 - Electric, Gas, Water Plants etc. - Natural Gas Transmission", "value": "4922"},
                                  {"label": "4923 - Electric, Gas, Water Plants etc. - natural gas conductor and -distribution", "value": "4923"},
                                  {"label": "4924 - Electric, Gas, Water Plants etc. - Natural Gas Distribution", "value": "4924"},
                                  {"label": "4925 - Electric, Gas, Water Plants etc. - Mixed, Manufactured, or Liquefied Petroleum Gas Production", "value": "4925"},
                                  {"label": "4931 - Electric, Gas, Water Plants etc. - electric power station with other services", "value": "4931"},
                                  {"label": "4932 - Electric, Gas, Water Plants etc. - Gas and Other Services Combined", "value": "4932"},
                                  {"label": "4939 - Electric, Gas, Water Plants etc. - gas- and electricity supply, not elsewhere classified", "value": "4939"},
                                  {"label": "4941 - Electric, Gas, Water Plants etc. - water supply companies", "value": "4941"},
                                  {"label": "4952 - Electric, Gas, Water Plants etc. - waste water disposal", "value": "4952"},
                                  {"label": "4953 - Electric, Gas, Water Plants etc. - waste disposal", "value": "4953"},
                                  {"label": "4959 - Electric, Gas, Water Plants etc. - street cleaning not elsewhere classified", "value": "4959"},
                                  {"label": "4961 - Electric, Gas, Water Plants etc. - Steam and Air-Conditioning Supply", "value": "4961"},
                                  {"label": "4971 - Electric, Gas, Water Plants etc. - aquifer", "value": "4971"},
                                  {"label": "5012 - Durable goods - Automobiles and Other Motor Vehicles", "value": "5012"},
                                  {"label": "5013 - Durable goods - motor vehicle replacement and accessories", "value": "5013"},
                                  {"label": "5014 - Durable goods - tires and tubes", "value": "5014"},
                                  {"label": "5021 - Durable goods - Furniture", "value": "5021"},
                                  {"label": "5023 - Durable goods - home furnishing", "value": "5023"},
                                  {"label": "5031 - Durable goods - Lumber, Plywood, Millwork, and Wood Panels", "value": "5031"},
                                  {"label": "5039 - Durable goods - Construction Materials, Not Elsewhere Classified", "value": "5039"},
                                  {"label": "5041 - Durable goods - sports equipment", "value": "5041"},
                                  {"label": "5042 - Durable goods - toys", "value": "5042"},
                                  {"label": "5043 - Durable goods - photo supply", "value": "5043"},
                                  {"label": "5051 - Durable goods - hardware, tube- and steel container, ball bearing, antifriction bearing, alum.production and alloys", "value": "5051"},
                                  {"label": "5052 - Durable goods - Coal and Other Minerals and Ores", "value": "5052"},
                                  {"label": "5063 - Durable goods - Electrical Apparatus and Equipment", "value": "5063"},
                                  {"label": "5064 - Durable goods - Electrical Appliances, Television and Radio Sets", "value": "5064"},
                                  {"label": "5065 - Durable goods - electronical parts, radio parts", "value": "5065"},
                                  {"label": "5072 - Durable goods - Hardware", "value": "5072"},
                                  {"label": "5074 - Durable goods - installation- and heating materials", "value": "5074"},
                                  {"label": "5075 - Durable goods - hot air heating and air condition", "value": "5075"},
                                  {"label": "5078 - Durable goods - Refrigeration Equipment and Supplies", "value": "5078"},
                                  {"label": "5081 - Durable goods - office machines", "value": "5081"},
                                  {"label": "5082 - Durable goods - construction machines", "value": "5082"},
                                  {"label": "5083 - Durable goods - Farm and Garden Machinery and Equipment", "value": "5083"},
                                  {"label": "5084 - Durable goods - Industrial Machinery and Equipment", "value": "5084"},
                                  {"label": "5085 - Durable goods - Industrial Supplies, packing material", "value": "5085"},
                                  {"label": "5086 - Durable goods - commercial apparatus", "value": "5086"},
                                  {"label": "5087 - Durable goods - Service Establishment Equipment and Supplies", "value": "5087"},
                                  {"label": "5088 - Durable goods - Transportation Equipment and Supplies, Except Motor Vehicles", "value": "5088"},
                                  {"label": "5093 - Durable goods - Scrap and Waste Materials", "value": "5093"},
                                  {"label": "5094 - Durable goods - Jewelry, Watches, Precious Stones, and Precious Metals", "value": "5094"},
                                  {"label": "5099 - Durable goods - durable goods, not elsewhere classified", "value": "5099"},
                                  {"label": "5111 - Consumer products - Printing and Writing Paper", "value": "5111"},
                                  {"label": "5112 - Consumer products - Stationery and Office Supplies", "value": "5112"},
                                  {"label": "5113 - Consumer products - industry- and houshold paper products", "value": "5113"},
                                  {"label": "5122 - Consumer products - Drugs, Drug Proprietaries, and Druggists'Sundries", "value": "5122"},
                                  {"label": "5133 - Consumer products - cut goods (fabrics)", "value": "5133"},
                                  {"label": "5134 - Consumer products - haberdashery, tricot goods", "value": "5134"},
                                  {"label": "5136 - Consumer products - Men's and Boy's Clothing and Furnishings", "value": "5136"},
                                  {"label": "5137 - Consumer products - ladies- and kids wear", "value": "5137"},
                                  {"label": "5139 - Consumer products - Footwear", "value": "5139"},
                                  {"label": "5141 - Consumer products - food, in general", "value": "5141"},
                                  {"label": "5142 - Consumer products - Packaged Frozen Foods", "value": "5142"},
                                  {"label": "5143 - Consumer products - Dairy Products, Except Dried or Canned", "value": "5143"},
                                  {"label": "5144 - Consumer products - Poultry and Poultry Products", "value": "5144"},
                                  {"label": "5145 - Consumer products - Confectionery", "value": "5145"},
                                  {"label": "5146 - Consumer products - Fish and Seafoods (without cans)", "value": "5146"},
                                  {"label": "5147 - Consumer products - Meats and Meat Products (without cans)", "value": "5147"},
                                  {"label": "5148 - Consumer products - fresh fruit and vegetable", "value": "5148"},
                                  {"label": "5149 - Consumer products - food ( incl. cans ), others", "value": "5149"},
                                  {"label": "5152 - Consumer products - cotton", "value": "5152"},
                                  {"label": "5153 - Consumer products - cereals", "value": "5153"},
                                  {"label": "5154 - Consumer products - Livestock", "value": "5154"},
                                  {"label": "5159 - Consumer products - Farm-Product Raw Materials, Not Elsewhere Classified", "value": "5159"},
                                  {"label": "5161 - Consumer products - chemical products", "value": "5161"},
                                  {"label": "5171 - Consumer products - oil products", "value": "5171"},
                                  {"label": "5172 - Consumer products - oil products", "value": "5172"},
                                  {"label": "5181 - Consumer products - Beer and Ale", "value": "5181"},
                                  {"label": "5182 - Consumer products - wine and spirits", "value": "5182"},
                                  {"label": "5191 - Consumer products - Farm Supplies", "value": "5191"},
                                  {"label": "5194 - Consumer products - Tobacco and Tobacco Products", "value": "5194"},
                                  {"label": "5198 - Consumer products - colours, finisher, wallpapers", "value": "5198"},
                                  {"label": "5199 - Consumer products - Nondurable Goods, Not Elsewhere Classified", "value": "5199"},
                                  {"label": "5211 - Building materials, Hardware, Caravan - building materials", "value": "5211"},
                                  {"label": "5231 - Building materials, Hardware, Caravan - Paint, Glass, and Wallpaper", "value": "5231"},
                                  {"label": "5251 - Building materials, Hardware, Caravan - hardware", "value": "5251"},
                                  {"label": "5261 - Building materials, Hardware, Caravan - gardening tool", "value": "5261"},
                                  {"label": "5271 - Building materials, Hardware, Caravan - Mobile Home", "value": "5271"},
                                  {"label": "5311 - Goods of all kinds - Department Stores", "value": "5311"},
                                  {"label": "5399 - Goods of all kinds - Miscellaneous General Merchandise Stores", "value": "5399"},
                                  {"label": "5411 - Food Stores - food", "value": "5411"},
                                  {"label": "5422 - Food Stores - frozen meat, canned meat", "value": "5422"},
                                  {"label": "5423 - Food Stores - meat- and fish market", "value": "5423"},
                                  {"label": "5431 - Food Stores - fruit- and vegetable market", "value": "5431"},
                                  {"label": "5441 - Food Stores - Candy, Nut, and Confectionery Stores", "value": "5441"},
                                  {"label": "5451 - Food Stores - dairy products", "value": "5451"},
                                  {"label": "5462 - Food Stores - bakeries", "value": "5462"},
                                  {"label": "5463 - Food Stores - sale of bakery products", "value": "5463"},
                                  {"label": "5499 - Food Stores - health food , not elsewhere classified", "value": "5499"},
                                  {"label": "5511 - Car Dealers, Petrol Stations - Motor Vehicle Dealers (New and Used)", "value": "5511"},
                                  {"label": "5521 - Car Dealers, Petrol Stations - Motor Vehicle Dealers (Used Only)", "value": "5521"},
                                  {"label": "5531 - Car Dealers, Petrol Stations - car component", "value": "5531"},
                                  {"label": "5541 - Car Dealers, Petrol Stations - petrol stations", "value": "5541"},
                                  {"label": "5551 - Car Dealers, Petrol Stations - Boat Dealers", "value": "5551"},
                                  {"label": "5561 - Car Dealers, Petrol Stations - trailer, hanger", "value": "5561"},
                                  {"label": "5571 - Car Dealers, Petrol Stations - motor cycle dealers", "value": "5571"},
                                  {"label": "5599 - Car Dealers, Petrol Stations - Automotive Dealers, Not Elsewhere Classified", "value": "5599"},
                                  {"label": "5611 - Clothing, Access, Haberdashery - Men's and Boys'Clothing and Accessory Stores", "value": "5611"},
                                  {"label": "5621 - Clothing, Access, Haberdashery - Women's Clothing Stores", "value": "5621"},
                                  {"label": "5631 - Clothing, Access, Haberdashery - ladies wear, not elsewhere classified", "value": "5631"},
                                  {"label": "5641 - Clothing, Access, Haberdashery - kids- and baby wear", "value": "5641"},
                                  {"label": "5651 - Clothing, Access, Haberdashery - Family Clothing Stores", "value": "5651"},
                                  {"label": "5661 - Clothing, Access, Haberdashery - Shoe Stores", "value": "5661"},
                                  {"label": "5681 - Clothing, Access, Haberdashery - peltmonger, fur products", "value": "5681"},
                                  {"label": "5699 - Clothing, Access, Haberdashery - clothing, not elsewhere classified", "value": "5699"},
                                  {"label": "5712 - Furniture, Furnishings, Equipment - Furniture Stores", "value": "5712"},
                                  {"label": "5713 - Furniture, Furnishings, Equipment - floor covering", "value": "5713"},
                                  {"label": "5714 - Furniture, Furnishings, Equipment - curtains, upholstered furniture", "value": "5714"},
                                  {"label": "5719 - Furniture, Furnishings, Equipment - fitments", "value": "5719"},
                                  {"label": "5722 - Furniture, Furnishings, Equipment - Household Appliance Stores", "value": "5722"},
                                  {"label": "5732 - Furniture, Furnishings, Equipment - radio- and TV set", "value": "5732"},
                                  {"label": "5733 - Furniture, Furnishings, Equipment - music shop", "value": "5733"},
                                  {"label": "5812 - Restaurants and Wine bars - restaurants", "value": "5812"},
                                  {"label": "5813 - Restaurants and Wine bars - cafe´s, bars, etc.", "value": "5813"},
                                  {"label": "5912 - Various Goods - drugstore, pharmacy", "value": "5912"},
                                  {"label": "5921 - Various Goods - Liquor Stores", "value": "5921"},
                                  {"label": "5931 - Various Goods - second hand shop", "value": "5931"},
                                  {"label": "5941 - Various Goods - Sporting Goods Stores and Bicycle Shops", "value": "5941"},
                                  {"label": "5942 - Various Goods - book store", "value": "5942"},
                                  {"label": "5943 - Various Goods - Stationery Stores", "value": "5943"},
                                  {"label": "5944 - Various Goods - jewelers", "value": "5944"},
                                  {"label": "5945 - Various Goods - toyshop", "value": "5945"},
                                  {"label": "5946 - Various Goods - photo shop", "value": "5946"},
                                  {"label": "5947 - Various Goods - gifts", "value": "5947"},
                                  {"label": "5948 - Various Goods - Luggage and Leather Goods Stores", "value": "5948"},
                                  {"label": "5949 - Various Goods - Sewing, Needlework, and Piece Goods Stores", "value": "5949"},
                                  {"label": "5961 - Various Goods - catalogue company", "value": "5961"},
                                  {"label": "5962 - Various Goods - Automatic Merchandising Machine Operators", "value": "5962"},
                                  {"label": "5963 - Various Goods - house delivery", "value": "5963"},
                                  {"label": "5982 - Various Goods - timber- and coal shops", "value": "5982"},
                                  {"label": "5983 - Various Goods - Fuel Oil Dealers", "value": "5983"},
                                  {"label": "5984 - Various Goods - Liquefied Petroleum Gas (Bottled Gas) Dealers", "value": "5984"},
                                  {"label": "5992 - Various Goods - Florists", "value": "5992"},
                                  {"label": "5993 - Various Goods - tobacconist", "value": "5993"},
                                  {"label": "5994 - Various Goods - news agent", "value": "5994"},
                                  {"label": "5999 - Various Goods - Miscellaneous Retail Stores, Not Elsewhere Classified", "value": "5999"},
                                  {"label": "6022 - Financial Institutions - State Commercial Banks", "value": "6022"},
                                  {"label": "6032 - Financial Institutions - provident bank", "value": "6032"},
                                  {"label": "6042 - Financial Institutions - trust company", "value": "6042"},
                                  {"label": "6052 - Financial Institutions - bank for foreign currency", "value": "6052"},
                                  {"label": "6112 - Institutions for real estate loans regulated by public law - building association", "value": "6112"},
                                  {"label": "6145 - Institutions for real estate loans regulated by public law - Credit intermediary", "value": "6145"},
                                  {"label": "6149 - Institutions for real estate loans regulated by public law - private- and credit institution", "value": "6149"},
                                  {"label": "6153 - Institutions for real estate loans regulated by public law - credit cards ( current credits )", "value": "6153"},
                                  {"label": "6159 - Institutions for real estate loans regulated by public law - Miscellaneous business Credit Institutions", "value": "6159"},
                                  {"label": "6163 - Institutions for real estate loans regulated by public law - bond intermediary", "value": "6163"},
                                  {"label": "6211 - Broker for Funds and Commodities, Stock exchanges - securities broker", "value": "6211"},
                                  {"label": "6221 - Broker for Funds and Commodities, Stock exchanges - Commodity Contracts Brokers and Dealers", "value": "6221"},
                                  {"label": "6311 - Insurances - life insurance", "value": "6311"},
                                  {"label": "6321 - Insurances - Accident and Health Insurance", "value": "6321"},
                                  {"label": "6331 - Insurances - Fire, Marine, and Casualty Insurance", "value": "6331"},
                                  {"label": "6351 - Insurances - Surety Insurance", "value": "6351"},
                                  {"label": "6371 - Insurances - Pension insurance", "value": "6371"},
                                  {"label": "6399 - Insurances - Insurance Carriers, Not Elsewhere Classified", "value": "6399"},
                                  {"label": "6411 - Insurance Agencies - insurance agency", "value": "6411"},
                                  {"label": "6512 - Real Estate - Operators of Nonresidential Buildings", "value": "6512"},
                                  {"label": "6513 - Real Estate - Operators of Apartment Buildings", "value": "6513"},
                                  {"label": "6515 - Real Estate - administration of camping grounds", "value": "6515"},
                                  {"label": "6519 - Real Estate - leasing of real estates", "value": "6519"},
                                  {"label": "6531 - Real Estate - real estate company, general", "value": "6531"},
                                  {"label": "6552 - Real Estate - parcelling", "value": "6552"},
                                  {"label": "6711 - Holding and other Investment Agencies - holding-company", "value": "6711"},
                                  {"label": "6722 - Holding and other Investment Agencies - Investment companies", "value": "6722"},
                                  {"label": "6732 - Holding and other Investment Agencies - foundations ( cultural and religious)", "value": "6732"},
                                  {"label": "6733 - Holding and other Investment Agencies - foundations, not elsewhere classified", "value": "6733"},
                                  {"label": "6793 - Holding and other Investment Agencies - product futures trading", "value": "6793"},
                                  {"label": "6794 - Holding and other Investment Agencies - Patent Owners and Lessors", "value": "6794"},
                                  {"label": "6799 - Holding and other Investment Agencies - investors, not elsewhere classified", "value": "6799"},
                                  {"label": "7011 - Hotels, Guesthouses - Hotels and Motels", "value": "7011"},
                                  {"label": "7021 - Hotels, Guesthouses - Rooming and Boarding Houses", "value": "7021"},
                                  {"label": "7032 - Hotels, Guesthouses - Sporting and Recreational Camps", "value": "7032"},
                                  {"label": "7033 - Hotels, Guesthouses - campground", "value": "7033"},
                                  {"label": "7041 - Hotels, Guesthouses - Organization Hotels and Lodging Houses, on Membership Basis", "value": "7041"},
                                  {"label": "7211 - Personal Service Delivery - Power Laundries, Family and Commercial", "value": "7211"},
                                  {"label": "7212 - Personal Service Delivery - ironing shop", "value": "7212"},
                                  {"label": "7213 - Personal Service Delivery - clothes rental", "value": "7213"},
                                  {"label": "7215 - Personal Service Delivery - Coin-Operated Laundries and Drycleaning", "value": "7215"},
                                  {"label": "7216 - Personal Service Delivery - Drycleaning Plants, Except Rug Cleaning", "value": "7216"},
                                  {"label": "7217 - Personal Service Delivery - Carpet and Upholstery Cleaning", "value": "7217"},
                                  {"label": "7218 - Personal Service Delivery - industry laundry", "value": "7218"},
                                  {"label": "7219 - Personal Service Delivery - clothes services", "value": "7219"},
                                  {"label": "7221 - Personal Service Delivery - Photographic Studios, Portrait", "value": "7221"},
                                  {"label": "7231 - Personal Service Delivery - beauty parlor, coiffeur", "value": "7231"},
                                  {"label": "7241 - Personal Service Delivery - Barber Shops", "value": "7241"},
                                  {"label": "7251 - Personal Service Delivery - Shoe Repair Shops and Shoeshine Parlors", "value": "7251"},
                                  {"label": "7261 - Personal Service Delivery - Funeral Service and Crematories", "value": "7261"},
                                  {"label": "7299 - Personal Service Delivery - personal services, not elsewhere classified", "value": "7299"},
                                  {"label": "7311 - Commercial Service Delivery - advertising agency", "value": "7311"},
                                  {"label": "7312 - Commercial Service Delivery - Outdoor Advertising Services", "value": "7312"},
                                  {"label": "7313 - Commercial Service Delivery - Radio, Television, and Publishers'Advertising Representatives", "value": "7313"},
                                  {"label": "7319 - Commercial Service Delivery - Advertising, Not Elsewhere Classified", "value": "7319"},
                                  {"label": "7321 - Commercial Service Delivery - encashment companies", "value": "7321"},
                                  {"label": "7331 - Commercial Service Delivery - Direct Mail Advertising Services", "value": "7331"},
                                  {"label": "7332 - Commercial Service Delivery - Copy Shop", "value": "7332"},
                                  {"label": "7333 - Commercial Service Delivery - industry photographer, graphic", "value": "7333"},
                                  {"label": "7339 - Commercial Service Delivery - typing services", "value": "7339"},
                                  {"label": "7341 - Commercial Service Delivery - window cleaner", "value": "7341"},
                                  {"label": "7342 - Commercial Service Delivery - Disinfecting and Pest Control Services", "value": "7342"},
                                  {"label": "7349 - Commercial Service Delivery - Building Cleaning and Maintenance Services, Not Elsewhere", "value": "7349"},
                                  {"label": "7351 - Commercial Service Delivery - news services", "value": "7351"},
                                  {"label": "7361 - Commercial Service Delivery - recruiting agency", "value": "7361"},
                                  {"label": "7362 - Commercial Service Delivery - letting agency for part time worker", "value": "7362"},
                                  {"label": "7369 - Commercial Service Delivery - recruitment offices", "value": "7369"},
                                  {"label": "7372 - Commercial Service Delivery - Prepackaged Software", "value": "7372"},
                                  {"label": "7374 - Commercial Service Delivery - data processing", "value": "7374"},
                                  {"label": "7391 - Commercial Service Delivery - research- and development offices", "value": "7391"},
                                  {"label": "7392 - Commercial Service Delivery - consulting", "value": "7392"},
                                  {"label": "7393 - Commercial Service Delivery - detective offices, guard organisations", "value": "7393"},
                                  {"label": "7394 - Commercial Service Delivery - leasing of equipments", "value": "7394"},
                                  {"label": "7395 - Commercial Service Delivery - photo laboratory", "value": "7395"},
                                  {"label": "7397 - Commercial Service Delivery - goods test laboratory", "value": "7397"},
                                  {"label": "7399 - Commercial Service Delivery - commercial services, not elsewhere classified", "value": "7399"},
                                  {"label": "7512 - Motor Repairs, Leasing, etc. - leasing of passenger cars", "value": "7512"},
                                  {"label": "7513 - Motor Repairs, Leasing, etc. - leasing of trucks", "value": "7513"},
                                  {"label": "7519 - Motor Repairs, Leasing, etc. - Utility Trailer and Recreational Vehicle Rental", "value": "7519"},
                                  {"label": "7523 - Motor Repairs, Leasing, etc. - parking lots", "value": "7523"},
                                  {"label": "7525 - Motor Repairs, Leasing, etc. - parking block", "value": "7525"},
                                  {"label": "7531 - Motor Repairs, Leasing, etc. - car body shops", "value": "7531"},
                                  {"label": "7534 - Motor Repairs, Leasing, etc. - reformation", "value": "7534"},
                                  {"label": "7535 - Motor Repairs, Leasing, etc. - car varnish", "value": "7535"},
                                  {"label": "7538 - Motor Repairs, Leasing, etc. - General Automotive Repair Shops", "value": "7538"},
                                  {"label": "7542 - Motor Repairs, Leasing, etc. - Carwashes", "value": "7542"},
                                  {"label": "7549 - Motor Repairs, Leasing, etc. - Automotive Services, not elsewhere classified", "value": "7549"},
                                  {"label": "7622 - Various Repair Services - Radio and Television Repair Shops", "value": "7622"},
                                  {"label": "7623 - Various Repair Services - Refrigeration and Air-Conditioning Service and Repair Shops", "value": "7623"},
                                  {"label": "7629 - Various Repair Services - Electrical and Electronic Repair Shops, Not Elsewhere Classified", "value": "7629"},
                                  {"label": "7631 - Various Repair Services - repair of watches and jewellery", "value": "7631"},
                                  {"label": "7641 - Various Repair Services - Reupholstery and Furniture Repair", "value": "7641"},
                                  {"label": "7692 - Various Repair Services - Welding Repair", "value": "7692"},
                                  {"label": "7699 - Various Repair Services - Repair Shops and Related Services, Not Elsewhere Classified", "value": "7699"},
                                  {"label": "7813 - Film and Cinema - film production except TV", "value": "7813"},
                                  {"label": "7814 - Film and Cinema - film production for TV", "value": "7814"},
                                  {"label": "7819 - Film and Cinema - Services Allied to Motion Picture Production", "value": "7819"},
                                  {"label": "7823 - Film and Cinema - film distribution ( except TV)", "value": "7823"},
                                  {"label": "7824 - Film and Cinema - film distribution for TV", "value": "7824"},
                                  {"label": "7829 - Film and Cinema - Services Allied to Motion Picture Distribution", "value": "7829"},
                                  {"label": "7832 - Film and Cinema - Motion Picture Theaters, Except Drive-In", "value": "7832"},
                                  {"label": "7833 - Film and Cinema - drive in cinema", "value": "7833"},
                                  {"label": "7911 - Entertainment and Recreational Institutions - ballroom, dancing school", "value": "7911"},
                                  {"label": "7922 - Entertainment and Recreational Institutions - Theatrical Producers (Except Motion Picture) and Miscellaneous", "value": "7922"},
                                  {"label": "7929 - Entertainment and Recreational Institutions - Bands, Orchestras, Actors, and Other Entertainers and Entertainment", "value": "7929"},
                                  {"label": "7932 - Entertainment and Recreational Institutions - billiard- and gamble saloon", "value": "7932"},
                                  {"label": "7933 - Entertainment and Recreational Institutions - Bowling Centers", "value": "7933"},
                                  {"label": "7941 - Entertainment and Recreational Institutions - professional sport club, promotion", "value": "7941"},
                                  {"label": "7948 - Entertainment and Recreational Institutions - race courses", "value": "7948"},
                                  {"label": "7992 - Entertainment and Recreational Institutions - golf course, public", "value": "7992"},
                                  {"label": "7993 - Entertainment and Recreational Institutions - Coin-Operated Amusement Devices", "value": "7993"},
                                  {"label": "7996 - Entertainment and Recreational Institutions - Amusement Parks", "value": "7996"},
                                  {"label": "7997 - Entertainment and Recreational Institutions - sports club", "value": "7997"},
                                  {"label": "7999 - Entertainment and Recreational Institutions - Amusement and Recreation Services, Not Elsewhere Classified", "value": "7999"},
                                  {"label": "8011 - Health Services - Offices and Clinics of Doctors of Medicine", "value": "8011"},
                                  {"label": "8021 - Health Services - Offices and Clinics of Dentists", "value": "8021"},
                                  {"label": "8049 - Health Services - Offices and Clinics of Health Practitioners", "value": "8049"},
                                  {"label": "8051 - Health Services - Health resort", "value": "8051"},
                                  {"label": "8059 - Health Services - foster home", "value": "8059"},
                                  {"label": "8062 - Health Services - General Medical and Surgical Hospitals", "value": "8062"},
                                  {"label": "8071 - Health Services - Medical Laboratories", "value": "8071"},
                                  {"label": "8072 - Health Services - Dental Laboratories", "value": "8072"},
                                  {"label": "8081 - Health Services - Outpatient Facilities", "value": "8081"},
                                  {"label": "8091 - Health Services - Miscellaneous Health And Allied Services", "value": "8091"},
                                  {"label": "8911 - Various Service Delivery - Engineering and architectural services", "value": "8911"},
                                  {"label": "8922 - Various Service Delivery - Research, Development, And Testing Services", "value": "8922"},
                                  {"label": "8931 - Various Service Delivery - Accounting, Auditing, And Bookkeeping Services", "value": "8931"},
                                  {"label": "8999 - Various Service Delivery - Other services", "value": "8999"},
                                  {"label": "0741 - Agricutlural services - Veterinary Services for Livestock, including animal hospitals", "value": "0741"},
                                  {"label": "0742 - Agricutlural services - Veterinary Services for Animal Specialties", "value": "0742"},
                                  {"label": "1541 - Gen. Construction companies - General Contractors-Industrial Buildings and Warehouses", "value": "1541"},
                                  {"label": "3577 - Production of machines general - computer - accessories", "value": "3577"},
                                  {"label": "3663 - Machines, electric - Radio and Television Broadcasting and Communications Equipment", "value": "3663"},
                                  {"label": "3669 - Machines, electric - Communications Equipment, Not Elsewhere Classified", "value": "3669"},
                                  {"label": "4215 - Road haulage and Storage - Courier Services, Except by Air", "value": "4215"},
                                  {"label": "5091 - Durable goods - Sporting and Recreational Goods and Supplies", "value": "5091"},
                                  {"label": "5092 - Durable goods - toys", "value": "5092"},
                                  {"label": "5734 - Furniture, Furnishings, Equipment - computer and software stores", "value": "5734"},
                                  {"label": "6099 - Financial Institutions - facility services, not elsewhere classified", "value": "6099"},
                                  {"label": "7291 - Personal Service Delivery - tax consultant", "value": "7291"},
                                  {"label": "7382 - Commercial Service Delivery - Security Systems Services", "value": "7382"},
                                  {"label": "7991 - Entertainment and Recreational Institutions - Physical Fitness Facilities", "value": "7991"},
                                  {"label": "8111 - Legal Services - Legal Services", "value": "8111"},
                                  {"label": "8211 - Schools and University Institutions - Elementary and Secondary Schools", "value": "8211"},
                                  {"label": "8221 - Schools and University Institutions - Colleges, Universities, and Professional Schools", "value": "8221"},
                                  {"label": "8299 - Schools and University Institutions - Schools and Educational Services, Not Elsewhere Classified", "value": "8299"},
                                  {"label": "8399 - Social Services - Social Services, Not Elsewhere Classified", "value": "8399"},
                                  {"label": "8699 - Non-profit Organisations - Membership Organizations, Not Elsewhere Classified", "value": "8699"},
                                  {"label": "9131 - Public Administration - Executive and Legislative Offices Combined", "value": "9131"},
                                  {"label": "9224 - Courts, Police, Law Enforcement, Fire Brigades - fire brigade", "value": "9224"},
                                  {"label": "9229 - Courts, Police, Law Enforcement, Fire Brigades - Public Order and Safety, Not Elsewhere Classified", "value": "9229"},
                                  {"label": "9511 - Environmental Institutions - Air and Water Resource and Solid Waste Management", "value": "9511"},
                                  {"label": "0273 - Agriculture and Stock Breeding - livestock breeding ( water animals, without fishes )", "value": "0273"},
                                  {"label": "0724 - Agricutlural services - to core cotton", "value": "0724"},
                                  {"label": "1221 - Mining of Black Coal - Coal, brown coal ( strip mining )", "value": "1221"},
                                  {"label": "1222 - Mining of Black Coal - Coal, brown coal ( mining )", "value": "1222"},
                                  {"label": "2044 - Foods and related Products - Rice products", "value": "2044"},
                                  {"label": "2053 - Foods and related Products - frozen food ( without bread )", "value": "2053"},
                                  {"label": "2068 - Foods and related Products - Nuts ( salted )", "value": "2068"},
                                  {"label": "2074 - Foods and related Products - Cottonseed Oil Mills", "value": "2074"},
                                  {"label": "2075 - Foods and related Products - Soy bean oil", "value": "2075"},
                                  {"label": "2096 - Foods and related Products - Potatoe chips, snacks", "value": "2096"},
                                  {"label": "2263 - Textile Industry - other textile finishing", "value": "2263"},
                                  {"label": "2656 - Paper - paper container ( food )", "value": "2656"},
                                  {"label": "2657 - Paper - Folding Paperboard Boxes, Including Sanitary", "value": "2657"},
                                  {"label": "2671 - Paper - Packaging Paper and Plastics Film, Coated and Laminated", "value": "2671"},
                                  {"label": "2672 - Paper - Coated and Laminated Paper, Not Elsewhere Classified", "value": "2672"},
                                  {"label": "2673 - Paper - Plastics, Foil, and Coated Paper Bags", "value": "2673"},
                                  {"label": "2674 - Paper - Uncoated Paper and Multiwall Bags", "value": "2674"},
                                  {"label": "2675 - Paper - Die-Cut Paper and Paperboard and Cardboard", "value": "2675"},
                                  {"label": "2676 - Paper - Paper ( hygiene )", "value": "2676"},
                                  {"label": "2677 - Paper - Envelopes", "value": "2677"},
                                  {"label": "2678 - Paper - letter paper", "value": "2678"},
                                  {"label": "2679 - Paper - other paper products", "value": "2679"},
                                  {"label": "2759 - Printers and Publishers - Commercial Printing, Not Elsewhere Classified", "value": "2759"},
                                  {"label": "2835 - Chemicals - In Vitro and In Vivo Diagnostic Substances", "value": "2835"},
                                  {"label": "2836 - Chemicals - Biological Products, Except Diagnostic Substances", "value": "2836"},
                                  {"label": "2920 - Crude Oil Industry - power generation", "value": "2920"},
                                  {"label": "3052 - Rubber and Plastic Products - tubes, straps (gum, plastic)", "value": "3052"},
                                  {"label": "3053 - Rubber and Plastic Products - Gaskets, Packing, and Sealing Devices", "value": "3053"},
                                  {"label": "3061 - Rubber and Plastic Products - gum products (mechanics)", "value": "3061"},
                                  {"label": "3081 - Rubber and Plastic Products - Unsupported Plastics Film and Sheet", "value": "3081"},
                                  {"label": "3082 - Rubber and Plastic Products - Unsupported Plastics Profile Shapes", "value": "3082"},
                                  {"label": "3083 - Rubber and Plastic Products - Laminated Plastics Plate, Sheet, and Profile Shapes", "value": "3083"},
                                  {"label": "3084 - Rubber and Plastic Products - pipes ( plastics )", "value": "3084"},
                                  {"label": "3085 - Rubber and Plastic Products - bottles ( plastic )", "value": "3085"},
                                  {"label": "3086 - Rubber and Plastic Products - foam plastic, foam plastic products", "value": "3086"},
                                  {"label": "3087 - Rubber and Plastic Products - Custom Compounding of Purchased Plastics Resins", "value": "3087"},
                                  {"label": "3088 - Rubber and Plastic Products - Plastics Plumbing Fixtures", "value": "3088"},
                                  {"label": "3230 - Stone, Clay, Glass and Concrete Products - glass processing", "value": "3230"},
                                  {"label": "3364 - Metal working business - Nonferrous Die-Castings, Except Aluminum", "value": "3364"},
                                  {"label": "3366 - Metal working business - Copper Foundries", "value": "3366"},
                                  {"label": "3491 - Metal products, without machines and transport - valves ( industry )", "value": "3491"},
                                  {"label": "3492 - Metal products, without machines and transport - Fluid Power Valves and Hose Fittings", "value": "3492"},
                                  {"label": "3543 - Production of machines general - model making", "value": "3543"},
                                  {"label": "3548 - Production of machines general - welding apparatus", "value": "3548"},
                                  {"label": "3556 - Production of machines general - engineering ( food )", "value": "3556"},
                                  {"label": "3575 - Production of machines general - computer ( terminals )", "value": "3575"},
                                  {"label": "3578 - Production of machines general - calculator, accounting machine", "value": "3578"},
                                  {"label": "3593 - Production of machines general - Fluid Power Cylinders and Actuators", "value": "3593"},
                                  {"label": "3594 - Production of machines general - Fluid Power Pumps and Motors", "value": "3594"},
                                  {"label": "3596 - Production of machines general - Scales and Balances, Except Laboratory", "value": "3596"},
                                  {"label": "3625 - Machines, electric - Relays and Industrial Controls", "value": "3625"},
                                  {"label": "3692 - Machines, electric - Primary Batteries, Dry and Wet", "value": "3692"},
                                  {"label": "3695 - Machines, electric - Magnetic And Optical Recording Media", "value": "3695"},
                                  {"label": "3716 - Transport Devices - campmobile", "value": "3716"},
                                  {"label": "3764 - Transport Devices - Guided Missile and Space Vehicle Propulsion Units and Propulsion", "value": "3764"},
                                  {"label": "3769 - Transport Devices - other space vehicle parts", "value": "3769"},
                                  {"label": "3821 - Special Instruments - laboratory apparatus, labor construction", "value": "3821"},
                                  {"label": "3826 - Special Instruments - devices for analyses", "value": "3826"},
                                  {"label": "3827 - Special Instruments - Optical Instruments and Lenses", "value": "3827"},
                                  {"label": "3844 - Special Instruments - X-Ray Apparatus and Tubes and Related Irradiation Apparatus", "value": "3844"},
                                  {"label": "3845 - Special Instruments - Electromedical and Electrotherapeutic Apparatus", "value": "3845"},
                                  {"label": "3965 - Divers Manufacturing Companies - Haberdashery", "value": "3965"},
                                  {"label": "4430 - Water Transport - marine transport", "value": "4430"},
                                  {"label": "4481 - Water Transport - Deep Sea Transportation of Passengers, Except by Ferry", "value": "4481"},
                                  {"label": "4482 - Water Transport - ferry", "value": "4482"},
                                  {"label": "4489 - Water Transport - Water Transportation of Passengers, Not Elsewhere Classified", "value": "4489"},
                                  {"label": "4491 - Water Transport - Marine Cargo Handling", "value": "4491"},
                                  {"label": "4492 - Water Transport - Towing and Tugboat Services", "value": "4492"},
                                  {"label": "4493 - Water Transport - marina", "value": "4493"},
                                  {"label": "4499 - Water Transport - Water Transportation Services, Not Elsewhere Classified", "value": "4499"},
                                  {"label": "4513 - Air Transport - Air Courier Services", "value": "4513"},
                                  {"label": "4725 - Transport Service - tour operator", "value": "4725"},
                                  {"label": "4729 - Transport Service - other tourist traffic", "value": "4729"},
                                  {"label": "4730 - Transport Service - freight transportation", "value": "4730"},
                                  {"label": "4740 - Transport Service - leased waggons", "value": "4740"},
                                  {"label": "4785 - Transport Service - inspection services", "value": "4785"},
                                  {"label": "4812 - Telecommunication Devices - cellular phone services", "value": "4812"},
                                  {"label": "4813 - Telecommunication Devices - Telephone Communications, Except Radiotelephone", "value": "4813"},
                                  {"label": "4840 - Telecommunication Devices - cable TV", "value": "4840"},
                                  {"label": "5015 - Durable goods - Motor Vehicle Parts, Used", "value": "5015"},
                                  {"label": "5032 - Durable goods - Brick, Stone, and Related Construction Materials", "value": "5032"},
                                  {"label": "5033 - Durable goods - Roofing, Siding, and Insulation Materials", "value": "5033"},
                                  {"label": "5044 - Durable goods - Office Equipment", "value": "5044"},
                                  {"label": "5045 - Durable goods - Computers and Computer Peripheral Equipment and Software", "value": "5045"},
                                  {"label": "5046 - Durable goods - Commercial Equipment, Not Elsewhere Classified", "value": "5046"},
                                  {"label": "5047 - Durable goods - Medical, Dental, and Hospital Equipment and Supplies", "value": "5047"},
                                  {"label": "5048 - Durable goods - Ophthalmic Goods", "value": "5048"},
                                  {"label": "5049 - Durable goods - Professional Equipment and Supplies, Not Elsewhere Classified", "value": "5049"},
                                  {"label": "5131 - Consumer products - Piece Goods, Notions, and Other Dry Good", "value": "5131"},
                                  {"label": "5162 - Consumer products - Plastics Materials and Basic Forms and Shapes", "value": "5162"},
                                  {"label": "5169 - Consumer products - Chemicals and Allied Products, Not Elsewhere Classified", "value": "5169"},
                                  {"label": "5192 - Consumer products - Books, Periodicals, and Newspapers", "value": "5192"},
                                  {"label": "5193 - Consumer products - Flowers, Nursery Stock, and Florists'Supplies", "value": "5193"},
                                  {"label": "5330 - Goods of all kinds - one-line shop", "value": "5330"},
                                  {"label": "5490 - Food Stores - supermarket ( divers )", "value": "5490"},
                                  {"label": "5989 - Various Goods - Fuel Dealers, Not Elsewhere Classified", "value": "5989"},
                                  {"label": "5995 - Various Goods - Optical Goods Stores", "value": "5995"},
                                  {"label": "6011 - Financial Institutions - Federal Reserve Banks", "value": "6011"},
                                  {"label": "6162 - Institutions for real estate loans regulated by public law - Mortgage Bankers and Loan Correspondents", "value": "6162"},
                                  {"label": "6230 - Broker for Funds and Commodities, Stock exchanges - stock exchange, commodities", "value": "6230"},
                                  {"label": "6280 - Broker for Funds and Commodities, Stock exchanges - stock exchange services, commodity services", "value": "6280"},
                                  {"label": "6282 - Broker for Funds and Commodities, Stock exchanges - Investment Advice", "value": "6282"},
                                  {"label": "6289 - Broker for Funds and Commodities, Stock exchanges - other stock exchange services", "value": "6289"},
                                  {"label": "6324 - Insurances - hospitalisation insurance", "value": "6324"},
                                  {"label": "6360 - Insurances - surety insurance", "value": "6360"},
                                  {"label": "6380 - Insurances - Reinsurance", "value": "6380"},
                                  {"label": "6514 - Real Estate - building administration ( flats, except apartments)", "value": "6514"},
                                  {"label": "6517 - Real Estate - rail terrain (administration)", "value": "6517"},
                                  {"label": "6792 - Holding and other Investment Agencies - Oil Royalty Traders", "value": "6792"},
                                  {"label": "6798 - Holding and other Investment Agencies - Real Estate Investment Trusts", "value": "6798"},
                                  {"label": "7334 - Commercial Service Delivery - Photocopying and Duplicating Services", "value": "7334"},
                                  {"label": "7335 - Commercial Service Delivery - photographer ( commercial)", "value": "7335"},
                                  {"label": "7336 - Commercial Service Delivery - advertising art", "value": "7336"},
                                  {"label": "7338 - Commercial Service Delivery - Secretarial and Court Reporting Services", "value": "7338"},
                                  {"label": "7352 - Commercial Service Delivery - medical equipment (leasing)", "value": "7352"},
                                  {"label": "7353 - Commercial Service Delivery - Heavy Construction Equipment Rental and Leasing", "value": "7353"},
                                  {"label": "7359 - Commercial Service Delivery - Equipment Rental and Leasing, Not Elsewhere Classified", "value": "7359"},
                                  {"label": "7375 - Commercial Service Delivery - Information Retrieval Services", "value": "7375"},
                                  {"label": "7376 - Commercial Service Delivery - Computer Facilities Management Services", "value": "7376"},
                                  {"label": "7377 - Commercial Service Delivery - Computer Rental and Leasing", "value": "7377"},
                                  {"label": "7378 - Commercial Service Delivery - Computer Maintenance and Repair", "value": "7378"},
                                  {"label": "7379 - Commercial Service Delivery - computer services, not elsewhere classified", "value": "7379"},
                                  {"label": "7381 - Commercial Service Delivery - Detective, Guard, and Armored Car Services", "value": "7381"},
                                  {"label": "7515 - Motor Repairs, Leasing, etc. - Passenger Car Leasing", "value": "7515"},
                                  {"label": "7822 - Film and Cinema - film distribution, tape distribution", "value": "7822"},
                                  {"label": "8041 - Health Services - Offices and Clinics of Chiropractors", "value": "8041"},
                                  {"label": "8042 - Health Services - Offices and Clinics of Optometrists", "value": "8042"},
                                  {"label": "8043 - Health Services - Offices and Clinics of Podiatrists", "value": "8043"},
                                  {"label": "8052 - Health Services - Intermediate Care Facilities", "value": "8052"},
                                  {"label": "8063 - Health Services - Psychiatric Hospitals", "value": "8063"},
                                  {"label": "8069 - Health Services - Specialty Hospitals, Except Psychiatric", "value": "8069"},
                                  {"label": "8092 - Health Services - Kidney Dialysis Centers", "value": "8092"},
                                  {"label": "8093 - Health Services - Specialty Outpatient Facilities, Not Elsewhere Classified", "value": "8093"},
                                  {"label": "8099 - Health Services - Health and Allied Services, Not Elsewhere Classified", "value": "8099"},
                                  {"label": "8222 - Schools and University Institutions - Junior Colleges and Technical Institutes", "value": "8222"},
                                  {"label": "8231 - Schools and University Institutions - Libraries", "value": "8231"},
                                  {"label": "8241 - Schools and University Institutions - Vocational Schools", "value": "8241"},
                                  {"label": "8243 - Schools and University Institutions - Data Processing Schools", "value": "8243"},
                                  {"label": "8244 - Schools and University Institutions - Business and Secretarial Schools", "value": "8244"},
                                  {"label": "8249 - Schools and University Institutions - Vocational Schools, Not Elsewhere Classified", "value": "8249"},
                                  {"label": "8320 - Social Services - Individual and Family Social Services", "value": "8320"},
                                  {"label": "8330 - Social Services - Job Training and Vocational Rehabilitation Services", "value": "8330"},
                                  {"label": "8350 - Social Services - Child Day Care Services", "value": "8350"},
                                  {"label": "8360 - Social Services - Residential Care", "value": "8360"},
                                  {"label": "8410 - Museums and Galleries - museums, galleries", "value": "8410"},
                                  {"label": "8420 - Museums and Galleries - Arboreta and Botanical or Zoological Gardens", "value": "8420"},
                                  {"label": "8510 - Science, Research and Development - research and development", "value": "8510"},
                                  {"label": "8521 - Science, Research and Development - natural sciences", "value": "8521"},
                                  {"label": "8522 - Science, Research and Development - biomedical sciences", "value": "8522"},
                                  {"label": "8525 - Science, Research and Development - social science and behavior science", "value": "8525"},
                                  {"label": "8526 - Science, Research and Development - business economics and information sciences", "value": "8526"},
                                  {"label": "8529 - Science, Research and Development - sciences not elsewhere classified", "value": "8529"},
                                  {"label": "8611 - Non-profit Organisations - Business Associations", "value": "8611"},
                                  {"label": "8621 - Non-profit Organisations - Professional Membership Organizations", "value": "8621"},
                                  {"label": "8631 - Non-profit Organisations - Labor Unions and Similar Labor Organizations", "value": "8631"},
                                  {"label": "8641 - Non-profit Organisations - Civic, Social, and Fraternal Associations", "value": "8641"},
                                  {"label": "8651 - Non-profit Organisations - Political Organizations", "value": "8651"},
                                  {"label": "8661 - Non-profit Organisations - Religious Organizations", "value": "8661"},
                                  {"label": "8711 - Technique, Management - Engineering Services", "value": "8711"},
                                  {"label": "8712 - Technique, Management - Architectural Services", "value": "8712"},
                                  {"label": "8713 - Technique, Management - Surveying Services", "value": "8713"},
                                  {"label": "8731 - Technique, Management - Commercial Physical and Biological Research", "value": "8731"},
                                  {"label": "8732 - Technique, Management - Commercial Economic, Sociological, and Educational Research", "value": "8732"},
                                  {"label": "8733 - Technique, Management - Noncommercial Research Organizations", "value": "8733"},
                                  {"label": "8734 - Technique, Management - Testing Laboratories", "value": "8734"},
                                  {"label": "8741 - Technique, Management - Management Services", "value": "8741"},
                                  {"label": "8742 - Technique, Management - Management Consulting Services", "value": "8742"},
                                  {"label": "8743 - Technique, Management - Public Relations Services", "value": "8743"},
                                  {"label": "8744 - Technique, Management - Facilities Support Management Services", "value": "8744"},
                                  {"label": "8748 - Technique, Management - Business Consulting Services, Not Elsewhere Classified", "value": "8748"},
                                  {"label": "9111 - Public Administration - Executive Offices", "value": "9111"},
                                  {"label": "9121 - Public Administration - Legislative Bodies", "value": "9121"},
                                  {"label": "9191 - Public Administration - General Government, Not Elsewhere Classified", "value": "9191"},
                                  {"label": "9211 - Courts, Police, Law Enforcement, Fire Brigades - Courts", "value": "9211"},
                                  {"label": "9221 - Courts, Police, Law Enforcement, Fire Brigades - Police Protection", "value": "9221"},
                                  {"label": "9222 - Courts, Police, Law Enforcement, Fire Brigades - Legal Counsel and Prosecution", "value": "9222"},
                                  {"label": "9223 - Courts, Police, Law Enforcement, Fire Brigades - Correctional Institutions", "value": "9223"},
                                  {"label": "9411 - Public Social Administration - Administration of Educational Programs", "value": "9411"},
                                  {"label": "9431 - Public Social Administration - Administration of Public Health Programs", "value": "9431"},
                                  {"label": "9441 - Public Social Administration - Administration of Social, Human Resource and Income Maintenance", "value": "9441"},
                                  {"label": "9451 - Public Social Administration - Administration of Veterans'Affairs", "value": "9451"},
                                  {"label": "9512 - Environmental Institutions - Land, Mineral, Wildlife, and Forest Conservation", "value": "9512"},
                                  {"label": "9611 - Economic Institutions - Administration of General Economic Programs", "value": "9611"},
                                  {"label": "9621 - Economic Institutions - Regulation and Administration of Transportation Programs", "value": "9621"},
                                  {"label": "9631 - Economic Institutions - Regulation and Administration of Communications, Electric, Gas", "value": "9631"},
                                  {"label": "9641 - Economic Institutions - Regulation of Agricultural Marketing and Commodities", "value": "9641"},
                                  {"label": "9711 - Defense, Foreign Affairs - National Security", "value": "9711"},
                                  {"label": "9721 - Defense, Foreign Affairs - foreign policy", "value": "9721"},
                                  {"label": "9811 - Other Service Delivery - Other services (non-profit)", "value": "9811"},
                                  {"label": "4741 - Transport Service - Rental of Railroad Cars", "value": "4741"},
                                  {"label": "0831 - Forestry - Forest nurseries and gathering of forest products", "value": "0831"},
                                  {"label": "1241 - Mining of Black Coal - Coal mining services", "value": "1241"},
                                  {"label": "2015 - Foods and related Products - Poultry Slaughtering & Processing", "value": "2015"},
                                  {"label": "2064 - Foods and related Products - Candy and other Confectionery Products", "value": "2064"},
                                  {"label": "2273 - Textile Industry - Carpets and Rugs", "value": "2273"},
                                  {"label": "2493 - Wood Products - Reconstituted Wood Products", "value": "2493"},
                                  {"label": "2796 - Printers and Publishers - Platemaking Services", "value": "2796"},
                                  {"label": "3089 - Rubber and Plastic Products - Plastics Products, not elsewhere classified", "value": "3089"},
                                  {"label": "3363 - Metal working business - Aluminum Die Castings", "value": "3363"},
                                  {"label": "3365 - Metal working business - Aluminum Foundries", "value": "3365"},
                                  {"label": "3571 - Production of machines general - Electronic Computers", "value": "3571"},
                                  {"label": "3812 - Special Instruments - Search, Detection, Navigation and Guidance equipment", "value": "3812"},
                                  {"label": "4173 - Transport of passengers on rail and road - Bus terminal and service facilities", "value": "4173"},
                                  {"label": "4412 - Water Transport - Deep Sea Foreign Transport of Freight", "value": "4412"},
                                  {"label": "4424 - Water Transport - Deep Sea Domestic Transport of Freight", "value": "4424"},
                                  {"label": "4432 - Water Transport - Freight Transport on The Great Lakes", "value": "4432"},
                                  {"label": "4449 - Water Transport - Water Transportation of Freight, not elsewhere classified", "value": "4449"},
                                  {"label": "4512 - Air Transport - Scheduled air transportation", "value": "4512"},
                                  {"label": "4522 - Air Transport - Nonscheduled air transportation", "value": "4522"},
                                  {"label": "4581 - Air Transport - Airports, flying fields and services", "value": "4581"},
                                  {"label": "4724 - Transport Service - Travel Agencies", "value": "4724"},
                                  {"label": "4731 - Transport Service - Freight transportation arrangement", "value": "4731"},
                                  {"label": "5331 - Goods of all kinds - Variety Stores", "value": "5331"},
                                  {"label": "5421 - Food Stores - Meat and fish markets", "value": "5421"},
                                  {"label": "5632 - Clothing, Access, Haberdashery - Women's Accessory and Specialty Stores", "value": "5632"},
                                  {"label": "5731 - Furniture, Furnishings, Equipment - Radio, Television and electronic stores", "value": "5731"},
                                  {"label": "5735 - Furniture, Furnishings, Equipment - Record and Prerecorded Tape Stores", "value": "5735"},
                                  {"label": "5736 - Furniture, Furnishings, Equipment - Musical Instrument Stores", "value": "5736"},
                                  {"label": "5932 - Various Goods - Used Merchandise Stores", "value": "5932"},
                                  {"label": "6021 - Financial Institutions - National Commercial Banks", "value": "6021"},
                                  {"label": "6019 - Financial Institutions - Central reserve depository institutions, not elsewhere classified", "value": "6019"},
                                  {"label": "6029 - Financial Institutions - Commercial Banks, not elsewhere classified", "value": "6029"},
                                  {"label": "6111 - Institutions for real estate loans regulated by public law - Federal and Federally Sponsored Credit Agencies", "value": "6111"},
                                  {"label": "6141 - Institutions for real estate loans regulated by public law - Personal credit institutions", "value": "6141"},
                                  {"label": "6231 - Broker for Funds and Commodities, Stock exchanges - Security and Commodity Exchanges", "value": "6231"},
                                  {"label": "6712 - Holding and other Investment Agencies - Bank holding companies", "value": "6712"},
                                  {"label": "6719 - Holding and other Investment Agencies - Holding companies, not elsewhere classified", "value": "6719"},
                                  {"label": "6726 - Holding and other Investment Agencies - Investment Offices, not elsewhere classified", "value": "6726"},
                                  {"label": "7322 - Commercial Service Delivery - Adjustment and Collection Services", "value": "7322"},
                                  {"label": "7323 - Commercial Service Delivery - Credit Reporting Services", "value": "7323"},
                                  {"label": "7363 - Commercial Service Delivery - Help Supply Services", "value": "7363"},
                                  {"label": "7371 - Commercial Service Delivery - Custom Computer Programming Services", "value": "7371"},
                                  {"label": "7373 - Commercial Service Delivery - Computer Integrated Systems Design", "value": "7373"},
                                  {"label": "7383 - Commercial Service Delivery - News Syndicates", "value": "7383"},
                                  {"label": "7384 - Commercial Service Delivery - Photo Finishing Laboratories", "value": "7384"},
                                  {"label": "7389 - Commercial Service Delivery - Business services, not elsewhere classified", "value": "7389"},
                                  {"label": "7514 - Motor Repairs, Leasing, etc. - Passenger Car Rental", "value": "7514"},
                                  {"label": "7521 - Motor Repairs, Leasing, etc. - Automobile Parking", "value": "7521"},
                                  {"label": "7539 - Motor Repairs, Leasing, etc. - Automotive Repair Shops, not elsewhere classified", "value": "7539"},
                                  {"label": "7812 - Film and Cinema - Motion picture/video production", "value": "7812"},
                                  {"label": "7841 - Film and Cinema - Video Tape Rental", "value": "7841"},
                                  {"label": "8322 - Social Services - Individual and family social services", "value": "8322"},
                                  {"label": "8351 - Social Services - Child Day Care Services", "value": "8351"},
                                  {"label": "8361 - Social Services - Residential Care", "value": "8361"},
                                  {"label": "8412 - Museums and Galleries - Museums and art galleries", "value": "8412"},
                                  {"label": "8422 - Museums and Galleries - Botanical or zoological gardens", "value": "8422"},
                                  {"label": "8721 - Technique, Management - Accounting, auditing and bookkeeping services", "value": "8721"},
                                  {"label": "8811 - Private Households - Private Households", "value": "8811"}                   
                                ]
                              },
                              "valueProperty": "value"
                            },
                            {
                              "type": "textfield",
                              "label": "Comment",
                              "key": "comment"
                            } 
                          ]
                        },
                        
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
                          "inputsLabelPosition": "top",
                          "label": "Balance sheet day",
                          "hideInputLabels": true,
                          "description": "e.g. 12th of January",
                          "fields": {
                            "day": {
                              "placeholder": "Day",
                              "hide": false,
                              "type": "number"
                            },
                            "month": {
                              "placeholder": "Month",
                              "hide": false,
                              "type": "select"
                            },
                            "year": {
                              "hide": true,
                              "type": "number"
                            }
                          },
                          "useLocaleSettings": true,
                          "tooltip": "Please enter the date of balance here.",
                          "mask": false,
                          "type": "day",
                          "input": true,
                          "key": "balanceSheetDay"
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
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "S&P Rating",
                          "type": "select",
                          "key": "sandpRating",
                          "widget": "html5",
                          "tooltip": "Long-term rating",
                          "description": "e.g. AA+",
                          "data": {
                            "values": [
                              {"label": "AAA", "value": "AAA"},
                              {"label": "AA+", "value": "AA+"},
                              {"label": "AA", "value": "AA"},
                              {"label": "AA-", "value": "AA-"},
                              {"label": "A+", "value": "A+"},
                              {"label": "A", "value": "A"},
                              {"label": "A-", "value": "A-"},
                              {"label": "BBB+", "value": "BBB+"},
                              {"label": "BBB", "value": "BBB"},
                              {"label": "BBB-", "value": "BBB-"},
                              {"label": "BB+", "value": "BB+"},
                              {"label": "BB", "value": "BB"},
                              {"label": "BB-", "value": "BB-"},
                              {"label": "B+", "value": "B+"},
                              {"label": "B", "value": "B"},
                              {"label": "B-", "value": "B-"},
                              {"label": "CCC+", "value": "CCC+"},
                              {"label": "CCC", "value": "CCC"},
                              {"label": "CCC-", "value": "CCC-"},
                              {"label": "CC", "value": "CC"},
                              {"label": "C", "value": "C"},
                              {"label": "RD", "value": "RD"},
                              {"label": "SD", "value": "SD"},
                              {"label": "D", "value": "D"}
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
                    },
                    {
                      "components": [
                        {
                          "inputsLabelPosition": "top",
                          "label": "Date of Foundation",
                          "hideInputLabels": true,
                          "description": "e.g. 12th of January 1968",
                          "fields": {
                            "day": {
                              "placeholder": "Day",
                              "hide": false,
                              "type": "number"
                            },
                            "month": {
                              "placeholder": "Month",
                              "hide": false,
                              "type": "select"
                            },
                            "year": {
                              "placeholder": "Year",
                              "hide": false,
                              "type": "number"
                            }
                          },
                          "useLocaleSettings": true,
                          "tooltip": "Please enter the date of balance here.",
                          "mask": false,
                          "type": "day",
                          "input": true,
                          "key": "balanceSheetDay"
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
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Moody's Rating",
                          "type": "select",
                          "key": "moodyRating",
                          "widget": "html5",
                          "tooltip": "Long-term rating",
                          "description": "e.g. Aa1",
                          "data": {
                            "values": [
                              {"label": "Aaa", "value": "Aaa"},
                              {"label": "Aa1", "value": "Aa1"},
                              {"label": "Aa2", "value": "Aa2"},
                              {"label": "Aa3", "value": "Aa3"},
                              {"label": "A1", "value": "A1"},
                              {"label": "A2", "value": "A2"},
                              {"label": "A3", "value": "A3"},
                              {"label": "Baa1", "value": "Baa1"},
                              {"label": "Baa2", "value": "Baa2"},
                              {"label": "Baa3", "value": "Baa3"},
                              {"label": "Ba1", "value": "Ba1"},
                              {"label": "Ba2", "value": "Ba2"},
                              {"label": "Ba3", "value": "Ba3"},
                              {"label": "B1", "value": "B1"},
                              {"label": "B2", "value": "B2"},
                              {"label": "B3", "value": "B3"},
                              {"label": "Caa1", "value": "Caa1"},
                              {"label": "Caa2", "value": "Caa2"},
                              {"label": "Caa3", "value": "Caa3"},
                              {"label": "Ca", "value": "Ca"},
                              {"label": "C", "value": "C"}
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
                    },
                    {
                      "components": [
                        {
                          "label": "Fitch Rating",
                          "type": "select",
                          "key": "fitchRating",
                          "widget": "html5",
                          "tooltip": "Long-term rating",
                          "description": "e.g. AA+",
                          "data": {
                            "values": [
                              {"label": "AAA", "value": "AAA"},
                              {"label": "AA+", "value": "AA+"},
                              {"label": "AA", "value": "AA"},
                              {"label": "AA-", "value": "AA-"},
                              {"label": "A+", "value": "A+"},
                              {"label": "A", "value": "A"},
                              {"label": "A-", "value": "A-"},
                              {"label": "BBB+", "value": "BBB+"},
                              {"label": "BBB", "value": "BBB"},
                              {"label": "BBB-", "value": "BBB-"},
                              {"label": "BB+", "value": "BB+"},
                              {"label": "BB", "value": "BB"},
                              {"label": "BB-", "value": "BB-"},
                              {"label": "B+", "value": "B+"},
                              {"label": "B", "value": "B"},
                              {"label": "B-", "value": "B-"},
                              {"label": "CCC+", "value": "CCC+"},
                              {"label": "CCC", "value": "CCC"},
                              {"label": "CCC-", "value": "CCC-"},
                              {"label": "CC", "value": "CC"},
                              {"label": "C", "value": "C"},
                              {"label": "DDD", "value": "DDD"},
                              {"label": "DD", "value": "DD"},
                              {"label": "D", "value": "D"}
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
                  ]
                }   
              ]
            },
            {
              "key": "perss",
              "type": "fieldset",
              "conditional": {
                "show": true,
                "eq": "person",
                "json": "",
                "when": "contactType"
              },
              "components": [
                {
                  "key": "columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Marital Status",
                          "type": "select",
                          "tooltip": "The marital status of the contact, use 'Other' and the comment field for special cases.",
                          "description": "e.g. married",
                          "placeholder": "Please select a marital status here...",
                          "key": "maritalStatus",
                          "widget": "html5",
                          "data": {
                            "values": [
                              {"label": "Single", "value": "single"},
                              {"label": "Married", "value": "married"},
                              {"label": "Divorced", "value": "divorced"},
                              {"label": "Widowed", "value": "widowed"},
                              {"label": "Civil union", "value": "civilUnion"},
                              {"label": "Domestic partnership", "value": "domesticPartnership"},
                              {"label": "Other", "value": "other"}
                            ]
                          },
                          "valueProperty": "value"
                        }
                      ],
                      "width": 6,
                      "type": "column"
                    },
                    {
                      "components": [
                        {
                          "label": "Marital Status Comment",
                          "placeholder": "Please enter a comment here...",
                          "description": "e.g. living separated",
                          "type": "textfield",
                          "key": "maritalStatusComment"
                        }
                      ],
                      "width": 6,
                      "type": "column"
                    }
                  ]
                },                
                {
                  "input": false,
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Interests, Hobbies and Sports",
                          "multiple": true,
                          "type": "textfield",
                          "addAnother": " ",
                          "key": "interests"
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
                          "label": "Skills and Expertise",
                          "multiple": true,
                          "type": "textfield",
                          "addAnother": " ",
                          "key": "skills"
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
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "inputsLabelPosition": "top",
                          "label": "Birthday",
                          "hideInputLabels": true,
                          "description": "e.g. 13th of January 1968",
                          "fields": {
                            "day": {
                              "hide": false,
                              "type": "number"
                            },
                            "month": {
                              "hide": false,
                              "type": "select"
                            },
                            "year": {
                              "hide": false,
                              "type": "number"
                            }
                          },
                          "useLocaleSettings": true,
                          "type": "day",
                          "key": "birthday"
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
                          "type": "number",
                          "key": "height",
                          "label": "Height in cm"
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
                  "key": "columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Occupations",
                          "type": "textfield",
                          "multiple": true,
                          "addAnother": " ",
                          "description": "e.g. CEO",
                          "placeholder": "Please enter a occupation here...",
                          "key": "occupations"
                        }
                      ],
                      "width": 6,
                      "type": "column",
                      "key": ""
                    },
                    {
                      "components": [
                        {
                          "key": "citizenships",
                          "label": "Citizenships",
                          "type": "datagrid",
                          "addAnother": " ",
                          "description": "e.g. Austria (AUT) since 2018",
                          "components": [
                            {
                              "label": "Country",
                              "type": "select",
                              "description": "e.g. Austria (AUT)",
                              "placeholder": "Please select a country, you can search by typing...",
                              "key": "country",
                              "data": {
                                "values": [
                                  {"label": "Afghanistan (AFG)", "value": "AFG"},
                                  {"label": "Aland Islands (ALA)", "value": "ALA"},
                                  {"label": "Albania (ALB)", "value": "ALB"},
                                  {"label": "Algeria (DZA)", "value": "DZA"},
                                  {"label": "American Samoa (ASM)", "value": "ASM"},
                                  {"label": "Andorra (AND)", "value": "AND"},
                                  {"label": "Angola (AGO)", "value": "AGO"},
                                  {"label": "Anguilla (AIA)", "value": "AIA"},
                                  {"label": "Antarctica (ATA)", "value": "ATA"},
                                  {"label": "Antigua and Barbuda (ATG)", "value": "ATG"},
                                  {"label": "Argentina (ARG)", "value": "ARG"},
                                  {"label": "Armenia (ARM)", "value": "ARM"},
                                  {"label": "Aruba (ABW)", "value": "ABW"},
                                  {"label": "Australia (AUS)", "value": "AUS"},
                                  {"label": "Austria (AUT)", "value": "AUT"},
                                  {"label": "Azerbaijan (AZE)", "value": "AZE"},
                                  {"label": "Bahamas (BHS)", "value": "BHS"},
                                  {"label": "Bahrain (BHR)", "value": "BHR"},
                                  {"label": "Bangladesh (BGD)", "value": "BGD"},
                                  {"label": "Barbados (BRB)", "value": "BRB"},
                                  {"label": "Belarus (BLR)", "value": "BLR"},
                                  {"label": "Belgium (BEL)", "value": "BEL"},
                                  {"label": "Belize (BLZ)", "value": "BLZ"},
                                  {"label": "Benin (BEN)", "value": "BEN"},
                                  {"label": "Bermuda (BMU)", "value": "BMU"},
                                  {"label": "Bhutan (BTN)", "value": "BTN"},
                                  {"label": "Bolivia (BOL)", "value": "BOL"},
                                  {"label": "Bosnia and Herzegovina (BIH)", "value": "BIH"},
                                  {"label": "Botswana (BWA)", "value": "BWA"},
                                  {"label": "Bouvet Island (BVT)", "value": "BVT"},
                                  {"label": "Brazil (BRA)", "value": "BRA"},
                                  {"label": "British Virgin Islands (VGB)", "value": "VGB"},
                                  {"label": "British Indian Ocean Territory (IOT)", "value": "IOT"},
                                  {"label": "Brunei Darussalam (BRN)", "value": "BRN"},
                                  {"label": "Bulgaria (BGR)", "value": "BGR"},
                                  {"label": "Burkina Faso (BFA)", "value": "BFA"},
                                  {"label": "Burundi (BDI)", "value": "BDI"},
                                  {"label": "Cambodia (KHM)", "value": "KHM"},
                                  {"label": "Cameroon (CMR)", "value": "CMR"},
                                  {"label": "Canada (CAN)", "value": "CAN"},
                                  {"label": "Cape Verde (CPV)", "value": "CPV"},
                                  {"label": "Cayman Islands (CYM)", "value": "CYM"},
                                  {"label": "Central African Republic (CAF)", "value": "CAF"},
                                  {"label": "Chad (TCD)", "value": "TCD"},
                                  {"label": "Chile (CHL)", "value": "CHL"},
                                  {"label": "China (CHN)", "value": "CHN"},
                                  {"label": "Hong Kong, SAR China (HKG)", "value": "HKG"},
                                  {"label": "Macao, SAR China (MAC)", "value": "MAC"},
                                  {"label": "Christmas Island (CXR)", "value": "CXR"},
                                  {"label": "Cocos (Keeling) Islands (CCK)", "value": "CCK"},
                                  {"label": "Colombia (COL)", "value": "COL"},
                                  {"label": "Comoros (COM)", "value": "COM"},
                                  {"label": "Congo (Brazzaville) (COG)", "value": "COG"},
                                  {"label": "Congo, (Kinshasa) (COD)", "value": "COD"},
                                  {"label": "Cook Islands (COK)", "value": "COK"},
                                  {"label": "Costa Rica (CRI)", "value": "CRI"},
                                  {"label": "Côte d'Ivoire (CIV)", "value": "CIV"},
                                  {"label": "Croatia (HRV)", "value": "HRV"},
                                  {"label": "Cuba (CUB)", "value": "CUB"},
                                  {"label": "Cyprus (CYP)", "value": "CYP"},
                                  {"label": "Czech Republic (CZE)", "value": "CZE"},
                                  {"label": "Denmark (DNK)", "value": "DNK"},
                                  {"label": "Djibouti (DJI)", "value": "DJI"},
                                  {"label": "Dominica (DMA)", "value": "DMA"},
                                  {"label": "Dominican Republic (DOM)", "value": "DOM"},
                                  {"label": "Ecuador (ECU)", "value": "ECU"},
                                  {"label": "Egypt (EGY)", "value": "EGY"},
                                  {"label": "El Salvador (SLV)", "value": "SLV"},
                                  {"label": "Equatorial Guinea (GNQ)", "value": "GNQ"},
                                  {"label": "Eritrea (ERI)", "value": "ERI"},
                                  {"label": "Estonia (EST)", "value": "EST"},
                                  {"label": "Ethiopia (ETH)", "value": "ETH"},
                                  {"label": "Falkland Islands (Malvinas) (FLK)", "value": "FLK"},
                                  {"label": "Faroe Islands (FRO)", "value": "FRO"},
                                  {"label": "Fiji (FJI)", "value": "FJI"},
                                  {"label": "Finland (FIN)", "value": "FIN"},
                                  {"label": "France (FRA)", "value": "FRA"},
                                  {"label": "French Guiana (GUF)", "value": "GUF"},
                                  {"label": "French Polynesia (PYF)", "value": "PYF"},
                                  {"label": "French Southern Territories (ATF)", "value": "ATF"},
                                  {"label": "Gabon (GAB)", "value": "GAB"},
                                  {"label": "Gambia (GMB)", "value": "GMB"},
                                  {"label": "Georgia (GEO)", "value": "GEO"},
                                  {"label": "Germany (DEU)", "value": "DEU"},
                                  {"label": "Ghana (GHA)", "value": "GHA"},
                                  {"label": "Gibraltar (GIB)", "value": "GIB"},
                                  {"label": "Greece (GRC)", "value": "GRC"},
                                  {"label": "Greenland (GRL)", "value": "GRL"},
                                  {"label": "Grenada (GRD)", "value": "GRD"},
                                  {"label": "Guadeloupe (GLP)", "value": "GLP"},
                                  {"label": "Guam (GUM)", "value": "GUM"},
                                  {"label": "Guatemala (GTM)", "value": "GTM"},
                                  {"label": "Guernsey (GGY)", "value": "GGY"},
                                  {"label": "Guinea (GIN)", "value": "GIN"},
                                  {"label": "Guinea-Bissau (GNB)", "value": "GNB"},
                                  {"label": "Guyana (GUY)", "value": "GUY"},
                                  {"label": "Haiti (HTI)", "value": "HTI"},
                                  {"label": "Heard and Mcdonald Islands (HMD)", "value": "HMD"},
                                  {"label": "Holy See (Vatican City State) (VAT)", "value": "VAT"},
                                  {"label": "Honduras (HND)", "value": "HND"},
                                  {"label": "Hungary (HUN)", "value": "HUN"},
                                  {"label": "Iceland (ISL)", "value": "ISL"},
                                  {"label": "India (IND)", "value": "IND"},
                                  {"label": "Indonesia (IDN)", "value": "IDN"},
                                  {"label": "Iran, Islamic Republic of (IRN)", "value": "IRN"},
                                  {"label": "Iraq (IRQ)", "value": "IRQ"},
                                  {"label": "Ireland (IRL)", "value": "IRL"},
                                  {"label": "Isle of Man (IMN)", "value": "IMN"},
                                  {"label": "Israel (ISR)", "value": "ISR"},
                                  {"label": "Italy (ITA)", "value": "ITA"},
                                  {"label": "Jamaica (JAM)", "value": "JAM"},
                                  {"label": "Japan (JPN)", "value": "JPN"},
                                  {"label": "Jersey (JEY)", "value": "JEY"},
                                  {"label": "Jordan (JOR)", "value": "JOR"},
                                  {"label": "Kazakhstan (KAZ)", "value": "KAZ"},
                                  {"label": "Kenya (KEN)", "value": "KEN"},
                                  {"label": "Kiribati (KIR)", "value": "KIR"},
                                  {"label": "Korea (North) (PRK)", "value": "PRK"},
                                  {"label": "Korea (South) (KOR)", "value": "KOR"},
                                  {"label": "Kuwait (KWT)", "value": "KWT"},
                                  {"label": "Kyrgyzstan (KGZ)", "value": "KGZ"},
                                  {"label": "Lao PDR (LAO)", "value": "LAO"},
                                  {"label": "Latvia (LVA)", "value": "LVA"},
                                  {"label": "Lebanon (LBN)", "value": "LBN"},
                                  {"label": "Lesotho (LSO)", "value": "LSO"},
                                  {"label": "Liberia (LBR)", "value": "LBR"},
                                  {"label": "Libya (LBY)", "value": "LBY"},
                                  {"label": "Liechtenstein (LIE)", "value": "LIE"},
                                  {"label": "Lithuania (LTU)", "value": "LTU"},
                                  {"label": "Luxembourg (LUX)", "value": "LUX"},
                                  {"label": "Macedonia, Republic of (MKD)", "value": "MKD"},
                                  {"label": "Madagascar (MDG)", "value": "MDG"},
                                  {"label": "Malawi (MWI)", "value": "MWI"},
                                  {"label": "Malaysia (MYS)", "value": "MYS"},
                                  {"label": "Maldives (MDV)", "value": "MDV"},
                                  {"label": "Mali (MLI)", "value": "MLI"},
                                  {"label": "Malta (MLT)", "value": "MLT"},
                                  {"label": "Marshall Islands (MHL)", "value": "MHL"},
                                  {"label": "Martinique (MTQ)", "value": "MTQ"},
                                  {"label": "Mauritania (MRT)", "value": "MRT"},
                                  {"label": "Mauritius (MUS)", "value": "MUS"},
                                  {"label": "Mayotte (MYT)", "value": "MYT"},
                                  {"label": "Mexico (MEX)", "value": "MEX"},
                                  {"label": "Micronesia, Federated States of (FSM)", "value": "FSM"},
                                  {"label": "Moldova (MDA)", "value": "MDA"},
                                  {"label": "Monaco (MCO)", "value": "MCO"},
                                  {"label": "Mongolia (MNG)", "value": "MNG"},
                                  {"label": "Montenegro (MNE)", "value": "MNE"},
                                  {"label": "Montserrat (MSR)", "value": "MSR"},
                                  {"label": "Morocco (MAR)", "value": "MAR"},
                                  {"label": "Mozambique (MOZ)", "value": "MOZ"},
                                  {"label": "Myanmar (MMR)", "value": "MMR"},
                                  {"label": "Namibia (NAM)", "value": "NAM"},
                                  {"label": "Nauru (NRU)", "value": "NRU"},
                                  {"label": "Nepal (NPL)", "value": "NPL"},
                                  {"label": "Netherlands (NLD)", "value": "NLD"},
                                  {"label": "Netherlands Antilles (ANT)", "value": "ANT"},
                                  {"label": "New Caledonia (NCL)", "value": "NCL"},
                                  {"label": "New Zealand (NZL)", "value": "NZL"},
                                  {"label": "Nicaragua (NIC)", "value": "NIC"},
                                  {"label": "Niger (NER)", "value": "NER"},
                                  {"label": "Nigeria (NGA)", "value": "NGA"},
                                  {"label": "Niue (NIU)", "value": "NIU"},
                                  {"label": "Norfolk Island (NFK)", "value": "NFK"},
                                  {"label": "Northern Mariana Islands (MNP)", "value": "MNP"},
                                  {"label": "Norway (NOR)", "value": "NOR"},
                                  {"label": "Oman (OMN)", "value": "OMN"},
                                  {"label": "Pakistan (PAK)", "value": "PAK"},
                                  {"label": "Palau (PLW)", "value": "PLW"},
                                  {"label": "Palestinian Territory (PSE)", "value": "PSE"},
                                  {"label": "Panama (PAN)", "value": "PAN"},
                                  {"label": "Papua New Guinea (PNG)", "value": "PNG"},
                                  {"label": "Paraguay (PRY)", "value": "PRY"},
                                  {"label": "Peru (PER)", "value": "PER"},
                                  {"label": "Philippines (PHL)", "value": "PHL"},
                                  {"label": "Pitcairn (PCN)", "value": "PCN"},
                                  {"label": "Poland (POL)", "value": "POL"},
                                  {"label": "Portugal (PRT)", "value": "PRT"},
                                  {"label": "Puerto Rico (PRI)", "value": "PRI"},
                                  {"label": "Qatar (QAT)", "value": "QAT"},
                                  {"label": "Réunion (REU)", "value": "REU"},
                                  {"label": "Romania (ROU)", "value": "ROU"},
                                  {"label": "Russian Federation (RUS)", "value": "RUS"},
                                  {"label": "Rwanda (RWA)", "value": "RWA"},
                                  {"label": "Saint-Barthélemy (BLM)", "value": "BLM"},
                                  {"label": "Saint Helena (SHN)", "value": "SHN"},
                                  {"label": "Saint Kitts and Nevis (KNA)", "value": "KNA"},
                                  {"label": "Saint Lucia (LCA)", "value": "LCA"},
                                  {"label": "Saint-Martin (French part) (MAF)", "value": "MAF"},
                                  {"label": "Saint Pierre and Miquelon (SPM)", "value": "SPM"},
                                  {"label": "Saint Vincent and Grenadines (VCT)", "value": "VCT"},
                                  {"label": "Samoa (WSM)", "value": "WSM"},
                                  {"label": "San Marino (SMR)", "value": "SMR"},
                                  {"label": "Sao Tome and Principe (STP)", "value": "STP"},
                                  {"label": "Saudi Arabia (SAU)", "value": "SAU"},
                                  {"label": "Senegal (SEN)", "value": "SEN"},
                                  {"label": "Serbia (SRB)", "value": "SRB"},
                                  {"label": "Seychelles (SYC)", "value": "SYC"},
                                  {"label": "Sierra Leone (SLE)", "value": "SLE"},
                                  {"label": "Singapore (SGP)", "value": "SGP"},
                                  {"label": "Slovakia (SVK)", "value": "SVK"},
                                  {"label": "Slovenia (SVN)", "value": "SVN"},
                                  {"label": "Solomon Islands (SLB)", "value": "SLB"},
                                  {"label": "Somalia (SOM)", "value": "SOM"},
                                  {"label": "South Africa (ZAF)", "value": "ZAF"},
                                  {"label": "South Georgia and the South Sandwich Islands (SGS)", "value": "SGS"},
                                  {"label": "South Sudan (SSD)", "value": "SSD"},
                                  {"label": "Spain (ESP)", "value": "ESP"},
                                  {"label": "Sri Lanka (LKA)", "value": "LKA"},
                                  {"label": "Sudan (SDN)", "value": "SDN"},
                                  {"label": "Suriname (SUR)", "value": "SUR"},
                                  {"label": "Svalbard and Jan Mayen Islands (SJM)", "value": "SJM"},
                                  {"label": "Swaziland (SWZ)", "value": "SWZ"},
                                  {"label": "Sweden (SWE)", "value": "SWE"},
                                  {"label": "Switzerland (CHE)", "value": "CHE"},
                                  {"label": "Syrian Arab Republic (Syria) (SYR)", "value": "SYR"},
                                  {"label": "Taiwan, Republic of China (TWN)", "value": "TWN"},
                                  {"label": "Tajikistan (TJK)", "value": "TJK"},
                                  {"label": "Tanzania, United Republic of (TZA)", "value": "TZA"},
                                  {"label": "Thailand (THA)", "value": "THA"},
                                  {"label": "Timor-Leste (TLS)", "value": "TLS"},
                                  {"label": "Togo (TGO)", "value": "TGO"},
                                  {"label": "Tokelau (TKL)", "value": "TKL"},
                                  {"label": "Tonga (TON)", "value": "TON"},
                                  {"label": "Trinidad and Tobago (TTO)", "value": "TTO"},
                                  {"label": "Tunisia (TUN)", "value": "TUN"},
                                  {"label": "Turkey (TUR)", "value": "TUR"},
                                  {"label": "Turkmenistan (TKM)", "value": "TKM"},
                                  {"label": "Turks and Caicos Islands (TCA)", "value": "TCA"},
                                  {"label": "Tuvalu (TUV)", "value": "TUV"},
                                  {"label": "Uganda (UGA)", "value": "UGA"},
                                  {"label": "Ukraine (UKR)", "value": "UKR"},
                                  {"label": "United Arab Emirates (ARE)", "value": "ARE"},
                                  {"label": "United Kingdom (GBR)", "value": "GBR"},
                                  {"label": "United States of America (USA)", "value": "USA"},
                                  {"label": "US Minor Outlying Islands (UMI)", "value": "UMI"},
                                  {"label": "Uruguay (URY)", "value": "URY"},
                                  {"label": "Uzbekistan (UZB)", "value": "UZB"},
                                  {"label": "Vanuatu (VUT)", "value": "VUT"},
                                  {"label": "Venezuela (Bolivarian Republic) (VEN)", "value": "VEN"},
                                  {"label": "Viet Nam (VNM)", "value": "VNM"},
                                  {"label": "Virgin Islands, US (VIR)", "value": "VIR"},
                                  {"label": "Wallis and Futuna Islands (WLF)", "value": "WLF"},
                                  {"label": "Western Sahara (ESH)", "value": "ESH"},
                                  {"label": "Yemen (YEM)", "value": "YEM"},
                                  {"label": "Zambia (ZMB)", "value": "ZMB"},
                                  {"label": "Zimbabwe (ZWE)", "value": "ZWE"}
                                ]                              },
                              "valueProperty": "value"
                            },
                            {
                              "key": "comment",
                              "label": "Comment",
                              "type": "textfield",
                              "placeholder": "You can enter a comment here...",
                              "description": "e.g. since 2018"
                            }
                          ]
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
              ]
            }
          ]
        },
        {
          "label": "Identifiers",
          "key": "identifiers",
          "components": [
            {
              "label": "Identifications",
              "mask": false,
              "type": "editgrid",
              "key": "identifications",
              "conditional": {
                "when": "contactType",
                "eq": "person",
                "show": true
              },
              "components": [
                {
                  "type": "select",
                  "key": "type",
                  "label": "Type",
                  "widget": "html5",
                  "defaultValue": "passport",
                  "data": {
                    "values": [
                      {
                        "label": "Passport",
                        "value": "passport"
                      },
                      {
                        "label": "Driver license",
                        "value": "driverLicense"
                      },
                      {
                        "label": "ID Card",
                        "value": "idCard"
                      },
                      {
                        "label": "Work Permit",
                        "value": "workPermit"
                      },
                      {
                        "label": "Other",
                        "value": "other"
                      }
                    ]
                  },
                  "validate": {
                    "required": true
                  }
                },
                {
                  "label": "Number",
                  "type": "textfield",
                  "input": true,
                  "key": "number"
                },
                {
                  "label": "Authority",
                  "type": "textfield",
                  "input": true,
                  "key": "authorityName"
                },
                {
                  "label": "Authority Location",
                  "type": "textfield",
                  "input": true,
                  "key": "authorityLocation"
                },
                {
                  "label": "Country",
                  "type": "select",
                  "key": "country",
                  "description": "e.g. Austria (AUT)",
                  "data": {
                    "values": [
                      {"label": "Afghanistan (AFG)", "value": "AFG"},
                      {"label": "Aland Islands (ALA)", "value": "ALA"},
                      {"label": "Albania (ALB)", "value": "ALB"},
                      {"label": "Algeria (DZA)", "value": "DZA"},
                      {"label": "American Samoa (ASM)", "value": "ASM"},
                      {"label": "Andorra (AND)", "value": "AND"},
                      {"label": "Angola (AGO)", "value": "AGO"},
                      {"label": "Anguilla (AIA)", "value": "AIA"},
                      {"label": "Antarctica (ATA)", "value": "ATA"},
                      {"label": "Antigua and Barbuda (ATG)", "value": "ATG"},
                      {"label": "Argentina (ARG)", "value": "ARG"},
                      {"label": "Armenia (ARM)", "value": "ARM"},
                      {"label": "Aruba (ABW)", "value": "ABW"},
                      {"label": "Australia (AUS)", "value": "AUS"},
                      {"label": "Austria (AUT)", "value": "AUT"},
                      {"label": "Azerbaijan (AZE)", "value": "AZE"},
                      {"label": "Bahamas (BHS)", "value": "BHS"},
                      {"label": "Bahrain (BHR)", "value": "BHR"},
                      {"label": "Bangladesh (BGD)", "value": "BGD"},
                      {"label": "Barbados (BRB)", "value": "BRB"},
                      {"label": "Belarus (BLR)", "value": "BLR"},
                      {"label": "Belgium (BEL)", "value": "BEL"},
                      {"label": "Belize (BLZ)", "value": "BLZ"},
                      {"label": "Benin (BEN)", "value": "BEN"},
                      {"label": "Bermuda (BMU)", "value": "BMU"},
                      {"label": "Bhutan (BTN)", "value": "BTN"},
                      {"label": "Bolivia (BOL)", "value": "BOL"},
                      {"label": "Bosnia and Herzegovina (BIH)", "value": "BIH"},
                      {"label": "Botswana (BWA)", "value": "BWA"},
                      {"label": "Bouvet Island (BVT)", "value": "BVT"},
                      {"label": "Brazil (BRA)", "value": "BRA"},
                      {"label": "British Virgin Islands (VGB)", "value": "VGB"},
                      {"label": "British Indian Ocean Territory (IOT)", "value": "IOT"},
                      {"label": "Brunei Darussalam (BRN)", "value": "BRN"},
                      {"label": "Bulgaria (BGR)", "value": "BGR"},
                      {"label": "Burkina Faso (BFA)", "value": "BFA"},
                      {"label": "Burundi (BDI)", "value": "BDI"},
                      {"label": "Cambodia (KHM)", "value": "KHM"},
                      {"label": "Cameroon (CMR)", "value": "CMR"},
                      {"label": "Canada (CAN)", "value": "CAN"},
                      {"label": "Cape Verde (CPV)", "value": "CPV"},
                      {"label": "Cayman Islands (CYM)", "value": "CYM"},
                      {"label": "Central African Republic (CAF)", "value": "CAF"},
                      {"label": "Chad (TCD)", "value": "TCD"},
                      {"label": "Chile (CHL)", "value": "CHL"},
                      {"label": "China (CHN)", "value": "CHN"},
                      {"label": "Hong Kong, SAR China (HKG)", "value": "HKG"},
                      {"label": "Macao, SAR China (MAC)", "value": "MAC"},
                      {"label": "Christmas Island (CXR)", "value": "CXR"},
                      {"label": "Cocos (Keeling) Islands (CCK)", "value": "CCK"},
                      {"label": "Colombia (COL)", "value": "COL"},
                      {"label": "Comoros (COM)", "value": "COM"},
                      {"label": "Congo (Brazzaville) (COG)", "value": "COG"},
                      {"label": "Congo, (Kinshasa) (COD)", "value": "COD"},
                      {"label": "Cook Islands (COK)", "value": "COK"},
                      {"label": "Costa Rica (CRI)", "value": "CRI"},
                      {"label": "Côte d'Ivoire (CIV)", "value": "CIV"},
                      {"label": "Croatia (HRV)", "value": "HRV"},
                      {"label": "Cuba (CUB)", "value": "CUB"},
                      {"label": "Cyprus (CYP)", "value": "CYP"},
                      {"label": "Czech Republic (CZE)", "value": "CZE"},
                      {"label": "Denmark (DNK)", "value": "DNK"},
                      {"label": "Djibouti (DJI)", "value": "DJI"},
                      {"label": "Dominica (DMA)", "value": "DMA"},
                      {"label": "Dominican Republic (DOM)", "value": "DOM"},
                      {"label": "Ecuador (ECU)", "value": "ECU"},
                      {"label": "Egypt (EGY)", "value": "EGY"},
                      {"label": "El Salvador (SLV)", "value": "SLV"},
                      {"label": "Equatorial Guinea (GNQ)", "value": "GNQ"},
                      {"label": "Eritrea (ERI)", "value": "ERI"},
                      {"label": "Estonia (EST)", "value": "EST"},
                      {"label": "Ethiopia (ETH)", "value": "ETH"},
                      {"label": "Falkland Islands (Malvinas) (FLK)", "value": "FLK"},
                      {"label": "Faroe Islands (FRO)", "value": "FRO"},
                      {"label": "Fiji (FJI)", "value": "FJI"},
                      {"label": "Finland (FIN)", "value": "FIN"},
                      {"label": "France (FRA)", "value": "FRA"},
                      {"label": "French Guiana (GUF)", "value": "GUF"},
                      {"label": "French Polynesia (PYF)", "value": "PYF"},
                      {"label": "French Southern Territories (ATF)", "value": "ATF"},
                      {"label": "Gabon (GAB)", "value": "GAB"},
                      {"label": "Gambia (GMB)", "value": "GMB"},
                      {"label": "Georgia (GEO)", "value": "GEO"},
                      {"label": "Germany (DEU)", "value": "DEU"},
                      {"label": "Ghana (GHA)", "value": "GHA"},
                      {"label": "Gibraltar (GIB)", "value": "GIB"},
                      {"label": "Greece (GRC)", "value": "GRC"},
                      {"label": "Greenland (GRL)", "value": "GRL"},
                      {"label": "Grenada (GRD)", "value": "GRD"},
                      {"label": "Guadeloupe (GLP)", "value": "GLP"},
                      {"label": "Guam (GUM)", "value": "GUM"},
                      {"label": "Guatemala (GTM)", "value": "GTM"},
                      {"label": "Guernsey (GGY)", "value": "GGY"},
                      {"label": "Guinea (GIN)", "value": "GIN"},
                      {"label": "Guinea-Bissau (GNB)", "value": "GNB"},
                      {"label": "Guyana (GUY)", "value": "GUY"},
                      {"label": "Haiti (HTI)", "value": "HTI"},
                      {"label": "Heard and Mcdonald Islands (HMD)", "value": "HMD"},
                      {"label": "Holy See (Vatican City State) (VAT)", "value": "VAT"},
                      {"label": "Honduras (HND)", "value": "HND"},
                      {"label": "Hungary (HUN)", "value": "HUN"},
                      {"label": "Iceland (ISL)", "value": "ISL"},
                      {"label": "India (IND)", "value": "IND"},
                      {"label": "Indonesia (IDN)", "value": "IDN"},
                      {"label": "Iran, Islamic Republic of (IRN)", "value": "IRN"},
                      {"label": "Iraq (IRQ)", "value": "IRQ"},
                      {"label": "Ireland (IRL)", "value": "IRL"},
                      {"label": "Isle of Man (IMN)", "value": "IMN"},
                      {"label": "Israel (ISR)", "value": "ISR"},
                      {"label": "Italy (ITA)", "value": "ITA"},
                      {"label": "Jamaica (JAM)", "value": "JAM"},
                      {"label": "Japan (JPN)", "value": "JPN"},
                      {"label": "Jersey (JEY)", "value": "JEY"},
                      {"label": "Jordan (JOR)", "value": "JOR"},
                      {"label": "Kazakhstan (KAZ)", "value": "KAZ"},
                      {"label": "Kenya (KEN)", "value": "KEN"},
                      {"label": "Kiribati (KIR)", "value": "KIR"},
                      {"label": "Korea (North) (PRK)", "value": "PRK"},
                      {"label": "Korea (South) (KOR)", "value": "KOR"},
                      {"label": "Kuwait (KWT)", "value": "KWT"},
                      {"label": "Kyrgyzstan (KGZ)", "value": "KGZ"},
                      {"label": "Lao PDR (LAO)", "value": "LAO"},
                      {"label": "Latvia (LVA)", "value": "LVA"},
                      {"label": "Lebanon (LBN)", "value": "LBN"},
                      {"label": "Lesotho (LSO)", "value": "LSO"},
                      {"label": "Liberia (LBR)", "value": "LBR"},
                      {"label": "Libya (LBY)", "value": "LBY"},
                      {"label": "Liechtenstein (LIE)", "value": "LIE"},
                      {"label": "Lithuania (LTU)", "value": "LTU"},
                      {"label": "Luxembourg (LUX)", "value": "LUX"},
                      {"label": "Macedonia, Republic of (MKD)", "value": "MKD"},
                      {"label": "Madagascar (MDG)", "value": "MDG"},
                      {"label": "Malawi (MWI)", "value": "MWI"},
                      {"label": "Malaysia (MYS)", "value": "MYS"},
                      {"label": "Maldives (MDV)", "value": "MDV"},
                      {"label": "Mali (MLI)", "value": "MLI"},
                      {"label": "Malta (MLT)", "value": "MLT"},
                      {"label": "Marshall Islands (MHL)", "value": "MHL"},
                      {"label": "Martinique (MTQ)", "value": "MTQ"},
                      {"label": "Mauritania (MRT)", "value": "MRT"},
                      {"label": "Mauritius (MUS)", "value": "MUS"},
                      {"label": "Mayotte (MYT)", "value": "MYT"},
                      {"label": "Mexico (MEX)", "value": "MEX"},
                      {"label": "Micronesia, Federated States of (FSM)", "value": "FSM"},
                      {"label": "Moldova (MDA)", "value": "MDA"},
                      {"label": "Monaco (MCO)", "value": "MCO"},
                      {"label": "Mongolia (MNG)", "value": "MNG"},
                      {"label": "Montenegro (MNE)", "value": "MNE"},
                      {"label": "Montserrat (MSR)", "value": "MSR"},
                      {"label": "Morocco (MAR)", "value": "MAR"},
                      {"label": "Mozambique (MOZ)", "value": "MOZ"},
                      {"label": "Myanmar (MMR)", "value": "MMR"},
                      {"label": "Namibia (NAM)", "value": "NAM"},
                      {"label": "Nauru (NRU)", "value": "NRU"},
                      {"label": "Nepal (NPL)", "value": "NPL"},
                      {"label": "Netherlands (NLD)", "value": "NLD"},
                      {"label": "Netherlands Antilles (ANT)", "value": "ANT"},
                      {"label": "New Caledonia (NCL)", "value": "NCL"},
                      {"label": "New Zealand (NZL)", "value": "NZL"},
                      {"label": "Nicaragua (NIC)", "value": "NIC"},
                      {"label": "Niger (NER)", "value": "NER"},
                      {"label": "Nigeria (NGA)", "value": "NGA"},
                      {"label": "Niue (NIU)", "value": "NIU"},
                      {"label": "Norfolk Island (NFK)", "value": "NFK"},
                      {"label": "Northern Mariana Islands (MNP)", "value": "MNP"},
                      {"label": "Norway (NOR)", "value": "NOR"},
                      {"label": "Oman (OMN)", "value": "OMN"},
                      {"label": "Pakistan (PAK)", "value": "PAK"},
                      {"label": "Palau (PLW)", "value": "PLW"},
                      {"label": "Palestinian Territory (PSE)", "value": "PSE"},
                      {"label": "Panama (PAN)", "value": "PAN"},
                      {"label": "Papua New Guinea (PNG)", "value": "PNG"},
                      {"label": "Paraguay (PRY)", "value": "PRY"},
                      {"label": "Peru (PER)", "value": "PER"},
                      {"label": "Philippines (PHL)", "value": "PHL"},
                      {"label": "Pitcairn (PCN)", "value": "PCN"},
                      {"label": "Poland (POL)", "value": "POL"},
                      {"label": "Portugal (PRT)", "value": "PRT"},
                      {"label": "Puerto Rico (PRI)", "value": "PRI"},
                      {"label": "Qatar (QAT)", "value": "QAT"},
                      {"label": "Réunion (REU)", "value": "REU"},
                      {"label": "Romania (ROU)", "value": "ROU"},
                      {"label": "Russian Federation (RUS)", "value": "RUS"},
                      {"label": "Rwanda (RWA)", "value": "RWA"},
                      {"label": "Saint-Barthélemy (BLM)", "value": "BLM"},
                      {"label": "Saint Helena (SHN)", "value": "SHN"},
                      {"label": "Saint Kitts and Nevis (KNA)", "value": "KNA"},
                      {"label": "Saint Lucia (LCA)", "value": "LCA"},
                      {"label": "Saint-Martin (French part) (MAF)", "value": "MAF"},
                      {"label": "Saint Pierre and Miquelon (SPM)", "value": "SPM"},
                      {"label": "Saint Vincent and Grenadines (VCT)", "value": "VCT"},
                      {"label": "Samoa (WSM)", "value": "WSM"},
                      {"label": "San Marino (SMR)", "value": "SMR"},
                      {"label": "Sao Tome and Principe (STP)", "value": "STP"},
                      {"label": "Saudi Arabia (SAU)", "value": "SAU"},
                      {"label": "Senegal (SEN)", "value": "SEN"},
                      {"label": "Serbia (SRB)", "value": "SRB"},
                      {"label": "Seychelles (SYC)", "value": "SYC"},
                      {"label": "Sierra Leone (SLE)", "value": "SLE"},
                      {"label": "Singapore (SGP)", "value": "SGP"},
                      {"label": "Slovakia (SVK)", "value": "SVK"},
                      {"label": "Slovenia (SVN)", "value": "SVN"},
                      {"label": "Solomon Islands (SLB)", "value": "SLB"},
                      {"label": "Somalia (SOM)", "value": "SOM"},
                      {"label": "South Africa (ZAF)", "value": "ZAF"},
                      {"label": "South Georgia and the South Sandwich Islands (SGS)", "value": "SGS"},
                      {"label": "South Sudan (SSD)", "value": "SSD"},
                      {"label": "Spain (ESP)", "value": "ESP"},
                      {"label": "Sri Lanka (LKA)", "value": "LKA"},
                      {"label": "Sudan (SDN)", "value": "SDN"},
                      {"label": "Suriname (SUR)", "value": "SUR"},
                      {"label": "Svalbard and Jan Mayen Islands (SJM)", "value": "SJM"},
                      {"label": "Swaziland (SWZ)", "value": "SWZ"},
                      {"label": "Sweden (SWE)", "value": "SWE"},
                      {"label": "Switzerland (CHE)", "value": "CHE"},
                      {"label": "Syrian Arab Republic (Syria) (SYR)", "value": "SYR"},
                      {"label": "Taiwan, Republic of China (TWN)", "value": "TWN"},
                      {"label": "Tajikistan (TJK)", "value": "TJK"},
                      {"label": "Tanzania, United Republic of (TZA)", "value": "TZA"},
                      {"label": "Thailand (THA)", "value": "THA"},
                      {"label": "Timor-Leste (TLS)", "value": "TLS"},
                      {"label": "Togo (TGO)", "value": "TGO"},
                      {"label": "Tokelau (TKL)", "value": "TKL"},
                      {"label": "Tonga (TON)", "value": "TON"},
                      {"label": "Trinidad and Tobago (TTO)", "value": "TTO"},
                      {"label": "Tunisia (TUN)", "value": "TUN"},
                      {"label": "Turkey (TUR)", "value": "TUR"},
                      {"label": "Turkmenistan (TKM)", "value": "TKM"},
                      {"label": "Turks and Caicos Islands (TCA)", "value": "TCA"},
                      {"label": "Tuvalu (TUV)", "value": "TUV"},
                      {"label": "Uganda (UGA)", "value": "UGA"},
                      {"label": "Ukraine (UKR)", "value": "UKR"},
                      {"label": "United Arab Emirates (ARE)", "value": "ARE"},
                      {"label": "United Kingdom (GBR)", "value": "GBR"},
                      {"label": "United States of America (USA)", "value": "USA"},
                      {"label": "US Minor Outlying Islands (UMI)", "value": "UMI"},
                      {"label": "Uruguay (URY)", "value": "URY"},
                      {"label": "Uzbekistan (UZB)", "value": "UZB"},
                      {"label": "Vanuatu (VUT)", "value": "VUT"},
                      {"label": "Venezuela (Bolivarian Republic) (VEN)", "value": "VEN"},
                      {"label": "Viet Nam (VNM)", "value": "VNM"},
                      {"label": "Virgin Islands, US (VIR)", "value": "VIR"},
                      {"label": "Wallis and Futuna Islands (WLF)", "value": "WLF"},
                      {"label": "Western Sahara (ESH)", "value": "ESH"},
                      {"label": "Yemen (YEM)", "value": "YEM"},
                      {"label": "Zambia (ZMB)", "value": "ZMB"},
                      {"label": "Zimbabwe (ZWE)", "value": "ZWE"}
                    ]
                  },
                  "valueProperty": "value",
                  "input": true
                },
                {
                  "inputsLabelPosition": "top",
                  "label": "Issued",
                  "hideInputLabels": true,
                  "fields": {
                    "day": {
                      "hide": false,
                      "type": "number"
                    },
                    "month": {
                      "hide": false,
                      "type": "select"
                    },
                    "year": {
                      "hide": false,
                      "type": "number"
                    }
                  },
                  "useLocaleSettings": true,
                  "type": "day",
                  "key": "issued"
                },
                {
                  "inputsLabelPosition": "top",
                  "label": "Expiry",
                  "hideInputLabels": true,
                  "fields": {
                    "day": {
                      "hide": false,
                      "type": "number"
                    },
                    "month": {
                      "hide": false,
                      "type": "select"
                    },
                    "year": {
                      "hide": false,
                      "type": "number"
                    }
                  },
                  "useLocaleSettings": true,
                  "type": "day",
                  "key": "expiry"
                },
                {
                  "label": "Comment",
                  "allowMultipleMasks": false,
                  "inputMasks": [
                    {
                      "label": "",
                      "mask": ""
                    }
                  ],
                  "showWordCount": false,
                  "showCharCount": false,
                  "type": "textfield",
                  "input": true,
                  "key": "comment"
                }
              ],
              "tab": 2
            },  
            {
              "columns": [
                {
                  "components": [
                    {
                      "label": "VAT Number",
                      "placeholder": "Please enter the VAT number here...",
                      "description": "e.g. ATU12345678",
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "vatNumber"
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
                      "label": "ID or Registration Number",
                      "placeholder": "Please enter the ID or registration number here...",
                      "description": "e.g. 12345-9875-8765",
                      "tooltip": "The ID number of the contact",
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "allowMultipleMasks": false,
                      "input": true,
                      "key": "idNumber",
                      "validate": {
                        "maxLength": 40,
                        "unique": false,
                        "customMessage": "",
                        "json": ""
                      }
                    },
                    {
                      "label": "Registration Authority",
                      "placeholder": "Please enter the name of the registration authority here...",
                      "description": "e.g. Court of Smallville",
                      "tooltip": "The registration authority, city hall, court, whatever.",
                      "type": "textfield",
                      "key": "regsitrationAuthority"
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
              "key": "columns"
            },
            {
              "input": false,
              "key": "columns",
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Statistic Number",
                      "placeholder": "Please enter the statistic number here...",
                      "description": "e.g. 975-2345/555",
                      "tooltip": "The national statistic number of the contact",
                      "allowMultipleMasks": false,
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "statisticNumber",
                      "validate": {
                        "maxLength": 40,
                        "unique": false,
                        "customMessage": "",
                        "json": ""
                      }
                    },
                    {
                      "label": "Statistic Authority",
                      "placeholder": "Please enter the statistic authority name here...",
                      "description": "e.g. Statistic Authority X",
                      "tooltip": "The national statistic authority of the contact",
                      "allowMultipleMasks": false,
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "statisticAuthority"
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
                      "label": "Reference Number",
                      "type": "textfield",
                      "tooltip": "If the contact information is coming from e.g. some other system enter the ID of the record here.",
                      "description": "e.g. 1836754/335",
                      "key": "referenceNumber"
                    },
                    {
                      "label": "Reference System",
                      "type": "textfield",
                      "tooltip": "If the contact information is coming from e.g. some other system enter the name of the system here.",
                      "description": "e.g. Database X",
                      "key": "referenceSystem"
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
              "key": "columns",
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Tax number",
                      "placeholder": "Please enter tax number here...",
                      "description": "e.g. 6789/3464/7",
                      "tooltip": "The tax number of the contact.",
                      "allowMultipleMasks": false,
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "taxNumber",
                      "validateOn": "blur",
                      "validate": {
                        "minLength": 3,
                        "unique": false,
                        "customMessage": "",
                        "json": "",
                        "maxLength": 20
                      }
                    },
                    {
                      "label": "Tax Authority",
                      "placeholder": "Please enter tax authority name here...",
                      "description": "e.g. Tax authority X",
                      "tooltip": "The tax authority of the contact.",
                      "type": "textfield",
                      "key": "taxAuthority"
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
                      "label": "External Number",
                      "placeholder": "Please enter an optional external number here",
                      "description": "e.g. 7653769",
                      "tooltip": "This field is for your free use for referencing a number in an external system",
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "externalNumber"
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
              "key": "columns",
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Old Number",
                      "placeholder": "Please enter an optional old systems number here...",
                      "description": "e.g. 999-8754322",
                      "tooltip": "If you are migrating from an old system you can enter thee entities number of the old system here...",
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "oldNumber"
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
                      "label": "Social Insurance Number",
                      "allowMultipleMasks": false,
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "socialInsuranceNumber"
                    },
                    {
                      "label": "Social Insurance",
                      "allowMultipleMasks": false,
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "socialInsurance"
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
              "key": "columns",
              "label": "Columns",
              "type": "columns",
              "columns": [
                {
                  "components": [
                    {
                      "label": "Accounting Number",
                      "description": "e.g. 12098",
                      "tooltip": "Please enter an optional accounting system number here",
                      "inputMasks": [
                        {
                          "label": "",
                          "mask": ""
                        }
                      ],
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "accountingNumber"
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
                      "label": "D-U-N-S Number",
                      "tooltip": "Dun & Bradstreet number, nine digits",
                      "inputMask": "999999999",
                      "allowMultipleMasks": false,
                      "showWordCount": false,
                      "showCharCount": false,
                      "description": "e.g.",
                      "type": "textfield",
                      "input": true,
                      "key": "dunsNumber",
                      "defaultValue": "",
                      "validateOn": "blur",
                      "validate": {
                        "minLength": 9,
                        "unique": false,
                        "customMessage": "",
                        "json": "",
                        "maxLength": 9
                      }
                    },
                    {
                      "label": "Chamber Registration Number",
                      "type": "textfield",
                      "key": "chamberRegistrationNumber"
                    },
                    {
                      "type": "textfield",
                      "key": "chamber",
                      "label": "Chamber"
                    },
                    {
                      "type": "datagrid",
                      "label": "Other Identifiers",
                      "hideLabel": true,
                      "key": "otherIdentifiers",
                      "components": [
                        {
                          "type": "textfield",
                          "label": "Other Identifier Numbers",
                          "key": "number"
                        },
                        {
                          "type": "textfield",
                          "label": "Description",
                          "key": "description"
                        }
                      ]
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
              "label": "Accounts",
              "mask": false,
              "type": "editgrid",
              "input": true,
              "key": "accounts",
              "components": [
                {
                  "type": "select",
                  "key": "type",
                  "label": "Type",
                  "widget": "html5",
                  "defaultValue": "business",
                  "data": {
                    "values": [
                      {
                        "label": "Private",
                        "value": "private"
                      },
                      {
                        "label": "Business",
                        "value": "business"
                      },
                      {
                        "label": "Other",
                        "value": "other"
                      }
                    ]
                  },
                  "validate": {
                    "required": true
                  }
                },
                {
                  "label": "Bank Number",
                  "type": "textfield",
                  "key": "bankNumber"
                },
                {
                  "label": "Swift Code",
                  "type": "textfield",
                  "key": "swiftCode"
                },
                {
                  "label": "Bank Name",
                  "type": "textfield",
                  "key": "bankName"
                },
                {
                  "label": "Address",
                  "type": "textfield",
                  "key": "address"
                },
                {
                  "key": "name",
                  "label": "Account / Card Name",
                  "type": "textfield"
                },
                {
                  "label": "Account / Card Number",
                  "type": "textfield",
                  "key": "number"
                },
                {
                  "type": "select",
                  "key": "ardIssuer",
                  "label": "Card Issuer",
                  "widget": "html5",
                  "data": {
                    "values": [
                      {
                        "label": "Visa",
                        "value": "visa"
                      },
                      {
                        "label": "MasterCard",
                        "value": "masterCard"
                      },
                      {
                        "label": "Chase",
                        "value": "chase"
                      },
                      {
                        "label": "American Express",
                        "value": "americanExpress"
                      },
                      {
                        "label": "Discover",
                        "value": "discover"
                      },
                      {
                        "label": "Citibank",
                        "value": "citibank"
                      },
                      {
                        "label": "Capital One",
                        "value": "capitalOne"
                      },
                      {
                        "label": "Bank of America",
                        "value": "bankOfAmerica"
                      },
                      {
                        "label": "Wells Fargo",
                        "value": "wellsFargo"
                      },
                      {
                        "label": "US Bank",
                        "value": "usBank"
                      }
                    ]
                  }
                },
                {
                  "label": "IBAN",
                  "type": "textfield",
                  "key": "iban"
                },
                {
                  "inputsLabelPosition": "top",
                  "label": "Expiry",
                  "hideInputLabels": true,
                  "fields": {
                    "day": {
                      "hide": false,
                      "type": "number"
                    },
                    "month": {
                      "hide": false,
                      "type": "select"
                    },
                    "year": {
                      "hide": false,
                      "type": "number"
                    }
                  },
                  "useLocaleSettings": true,
                  "type": "day",
                  "key": "expiry"
                },
            {
                  "label": "Comment",
                  "type": "textfield",
                  "key": "comment"
                }
              ],
              "tab": 2
            }                            
          ]
        },
        {
          "label": "Addresses",
          "key": "addresses",
          "components": [
            {
              "label": "Addresses",
              "placeholder": "Add some addresses here...",
              "description": "e.g.",
              "tooltip": "The first address will be automatically used when writing letters.",
              "mask": false,
              "type": "datagrid",
              "input": true,
              "key": "addresses",
              "components": [
                {
                  "type": "select",
                  "key": "type",
                  "label": "Type",
                  "widget": "html5",
                  "defaultValue": "home",
                  "data": {
                    "values": [
                      {
                        "label": "Home",
                        "value": "home"
                      },
                      {
                        "label": "Business",
                        "value": "business"
                      },
                      {
                        "label": "Other",
                        "value": "other"
                      }
                    ]
                  },
                  "validate": {
                    "required": true
                  }
                },
                {
                  "label": "Street",
                  "allowMultipleMasks": false,
                  "inputMasks": [
                    {
                      "label": "",
                      "mask": ""
                    }
                  ],
                  "showWordCount": false,
                  "showCharCount": false,
                  "type": "textfield",
                  "input": true,
                  "key": "street"
                },
                {
                  "input": false,
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "House",
                          "allowMultipleMasks": false,
                          "inputMasks": [
                            {
                              "label": "",
                              "mask": ""
                            }
                          ],
                          "showWordCount": false,
                          "showCharCount": false,
                          "type": "textfield",
                          "input": true,
                          "key": "house"
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
                          "label": "Block/Floor/Door",
                          "allowMultipleMasks": false,
                          "inputMasks": [
                            {
                              "label": "",
                              "mask": ""
                            }
                          ],
                          "showWordCount": false,
                          "showCharCount": false,
                          "type": "textfield",
                          "input": true,
                          "key": "blockFloorDoor"
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
                  "label": "Additional address lines",
                  "allowMultipleMasks": false,
                  "multiple": true,
                  "inputMasks": [
                    {
                      "label": "",
                      "mask": ""
                    }
                  ],
                  "showWordCount": false,
                  "showCharCount": false,
                  "type": "textfield",
                  "input": true,
                  "key": "additionalLines"
                },
                {
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "ZIP Code",
                          "allowMultipleMasks": false,
                          "inputMasks": [
                            {
                              "label": "",
                              "mask": ""
                            }
                          ],
                          "showWordCount": false,
                          "showCharCount": false,
                          "type": "textfield",
                          "input": true,
                          "key": "zipCode"
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
                          "label": "City",
                          "allowMultipleMasks": false,
                          "inputMasks": [
                            {
                              "label": "",
                              "mask": ""
                            }
                          ],
                          "showWordCount": false,
                          "showCharCount": false,
                          "type": "textfield",
                          "input": true,
                          "key": "city"
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
                  "label": "ZIP Code",
                  "mask": false,
                  "type": "columns",
                  "input": false,
                  "key": "zipCode"
                },
                {
                  "input": false,
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "State",
                          "allowMultipleMasks": false,
                          "inputMasks": [
                            {
                              "label": "",
                              "mask": ""
                            }
                          ],
                          "showWordCount": false,
                          "showCharCount": false,
                          "type": "textfield",
                          "input": true,
                          "key": "state"
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
                          "label": "Country",
                          "type": "select",
                          "key": "country",
                          "description": "e.g. Austria (AUT)",
                          "validate": {
                            "required": true
                          },
                          "data": {
                            "values": [
                              {"label": "Afghanistan (AFG)", "value": "AFG"},
                              {"label": "Aland Islands (ALA)", "value": "ALA"},
                              {"label": "Albania (ALB)", "value": "ALB"},
                              {"label": "Algeria (DZA)", "value": "DZA"},
                              {"label": "American Samoa (ASM)", "value": "ASM"},
                              {"label": "Andorra (AND)", "value": "AND"},
                              {"label": "Angola (AGO)", "value": "AGO"},
                              {"label": "Anguilla (AIA)", "value": "AIA"},
                              {"label": "Antarctica (ATA)", "value": "ATA"},
                              {"label": "Antigua and Barbuda (ATG)", "value": "ATG"},
                              {"label": "Argentina (ARG)", "value": "ARG"},
                              {"label": "Armenia (ARM)", "value": "ARM"},
                              {"label": "Aruba (ABW)", "value": "ABW"},
                              {"label": "Australia (AUS)", "value": "AUS"},
                              {"label": "Austria (AUT)", "value": "AUT"},
                              {"label": "Azerbaijan (AZE)", "value": "AZE"},
                              {"label": "Bahamas (BHS)", "value": "BHS"},
                              {"label": "Bahrain (BHR)", "value": "BHR"},
                              {"label": "Bangladesh (BGD)", "value": "BGD"},
                              {"label": "Barbados (BRB)", "value": "BRB"},
                              {"label": "Belarus (BLR)", "value": "BLR"},
                              {"label": "Belgium (BEL)", "value": "BEL"},
                              {"label": "Belize (BLZ)", "value": "BLZ"},
                              {"label": "Benin (BEN)", "value": "BEN"},
                              {"label": "Bermuda (BMU)", "value": "BMU"},
                              {"label": "Bhutan (BTN)", "value": "BTN"},
                              {"label": "Bolivia (BOL)", "value": "BOL"},
                              {"label": "Bosnia and Herzegovina (BIH)", "value": "BIH"},
                              {"label": "Botswana (BWA)", "value": "BWA"},
                              {"label": "Bouvet Island (BVT)", "value": "BVT"},
                              {"label": "Brazil (BRA)", "value": "BRA"},
                              {"label": "British Virgin Islands (VGB)", "value": "VGB"},
                              {"label": "British Indian Ocean Territory (IOT)", "value": "IOT"},
                              {"label": "Brunei Darussalam (BRN)", "value": "BRN"},
                              {"label": "Bulgaria (BGR)", "value": "BGR"},
                              {"label": "Burkina Faso (BFA)", "value": "BFA"},
                              {"label": "Burundi (BDI)", "value": "BDI"},
                              {"label": "Cambodia (KHM)", "value": "KHM"},
                              {"label": "Cameroon (CMR)", "value": "CMR"},
                              {"label": "Canada (CAN)", "value": "CAN"},
                              {"label": "Cape Verde (CPV)", "value": "CPV"},
                              {"label": "Cayman Islands (CYM)", "value": "CYM"},
                              {"label": "Central African Republic (CAF)", "value": "CAF"},
                              {"label": "Chad (TCD)", "value": "TCD"},
                              {"label": "Chile (CHL)", "value": "CHL"},
                              {"label": "China (CHN)", "value": "CHN"},
                              {"label": "Hong Kong, SAR China (HKG)", "value": "HKG"},
                              {"label": "Macao, SAR China (MAC)", "value": "MAC"},
                              {"label": "Christmas Island (CXR)", "value": "CXR"},
                              {"label": "Cocos (Keeling) Islands (CCK)", "value": "CCK"},
                              {"label": "Colombia (COL)", "value": "COL"},
                              {"label": "Comoros (COM)", "value": "COM"},
                              {"label": "Congo (Brazzaville) (COG)", "value": "COG"},
                              {"label": "Congo, (Kinshasa) (COD)", "value": "COD"},
                              {"label": "Cook Islands (COK)", "value": "COK"},
                              {"label": "Costa Rica (CRI)", "value": "CRI"},
                              {"label": "Côte d'Ivoire (CIV)", "value": "CIV"},
                              {"label": "Croatia (HRV)", "value": "HRV"},
                              {"label": "Cuba (CUB)", "value": "CUB"},
                              {"label": "Cyprus (CYP)", "value": "CYP"},
                              {"label": "Czech Republic (CZE)", "value": "CZE"},
                              {"label": "Denmark (DNK)", "value": "DNK"},
                              {"label": "Djibouti (DJI)", "value": "DJI"},
                              {"label": "Dominica (DMA)", "value": "DMA"},
                              {"label": "Dominican Republic (DOM)", "value": "DOM"},
                              {"label": "Ecuador (ECU)", "value": "ECU"},
                              {"label": "Egypt (EGY)", "value": "EGY"},
                              {"label": "El Salvador (SLV)", "value": "SLV"},
                              {"label": "Equatorial Guinea (GNQ)", "value": "GNQ"},
                              {"label": "Eritrea (ERI)", "value": "ERI"},
                              {"label": "Estonia (EST)", "value": "EST"},
                              {"label": "Ethiopia (ETH)", "value": "ETH"},
                              {"label": "Falkland Islands (Malvinas) (FLK)", "value": "FLK"},
                              {"label": "Faroe Islands (FRO)", "value": "FRO"},
                              {"label": "Fiji (FJI)", "value": "FJI"},
                              {"label": "Finland (FIN)", "value": "FIN"},
                              {"label": "France (FRA)", "value": "FRA"},
                              {"label": "French Guiana (GUF)", "value": "GUF"},
                              {"label": "French Polynesia (PYF)", "value": "PYF"},
                              {"label": "French Southern Territories (ATF)", "value": "ATF"},
                              {"label": "Gabon (GAB)", "value": "GAB"},
                              {"label": "Gambia (GMB)", "value": "GMB"},
                              {"label": "Georgia (GEO)", "value": "GEO"},
                              {"label": "Germany (DEU)", "value": "DEU"},
                              {"label": "Ghana (GHA)", "value": "GHA"},
                              {"label": "Gibraltar (GIB)", "value": "GIB"},
                              {"label": "Greece (GRC)", "value": "GRC"},
                              {"label": "Greenland (GRL)", "value": "GRL"},
                              {"label": "Grenada (GRD)", "value": "GRD"},
                              {"label": "Guadeloupe (GLP)", "value": "GLP"},
                              {"label": "Guam (GUM)", "value": "GUM"},
                              {"label": "Guatemala (GTM)", "value": "GTM"},
                              {"label": "Guernsey (GGY)", "value": "GGY"},
                              {"label": "Guinea (GIN)", "value": "GIN"},
                              {"label": "Guinea-Bissau (GNB)", "value": "GNB"},
                              {"label": "Guyana (GUY)", "value": "GUY"},
                              {"label": "Haiti (HTI)", "value": "HTI"},
                              {"label": "Heard and Mcdonald Islands (HMD)", "value": "HMD"},
                              {"label": "Holy See (Vatican City State) (VAT)", "value": "VAT"},
                              {"label": "Honduras (HND)", "value": "HND"},
                              {"label": "Hungary (HUN)", "value": "HUN"},
                              {"label": "Iceland (ISL)", "value": "ISL"},
                              {"label": "India (IND)", "value": "IND"},
                              {"label": "Indonesia (IDN)", "value": "IDN"},
                              {"label": "Iran, Islamic Republic of (IRN)", "value": "IRN"},
                              {"label": "Iraq (IRQ)", "value": "IRQ"},
                              {"label": "Ireland (IRL)", "value": "IRL"},
                              {"label": "Isle of Man (IMN)", "value": "IMN"},
                              {"label": "Israel (ISR)", "value": "ISR"},
                              {"label": "Italy (ITA)", "value": "ITA"},
                              {"label": "Jamaica (JAM)", "value": "JAM"},
                              {"label": "Japan (JPN)", "value": "JPN"},
                              {"label": "Jersey (JEY)", "value": "JEY"},
                              {"label": "Jordan (JOR)", "value": "JOR"},
                              {"label": "Kazakhstan (KAZ)", "value": "KAZ"},
                              {"label": "Kenya (KEN)", "value": "KEN"},
                              {"label": "Kiribati (KIR)", "value": "KIR"},
                              {"label": "Korea (North) (PRK)", "value": "PRK"},
                              {"label": "Korea (South) (KOR)", "value": "KOR"},
                              {"label": "Kuwait (KWT)", "value": "KWT"},
                              {"label": "Kyrgyzstan (KGZ)", "value": "KGZ"},
                              {"label": "Lao PDR (LAO)", "value": "LAO"},
                              {"label": "Latvia (LVA)", "value": "LVA"},
                              {"label": "Lebanon (LBN)", "value": "LBN"},
                              {"label": "Lesotho (LSO)", "value": "LSO"},
                              {"label": "Liberia (LBR)", "value": "LBR"},
                              {"label": "Libya (LBY)", "value": "LBY"},
                              {"label": "Liechtenstein (LIE)", "value": "LIE"},
                              {"label": "Lithuania (LTU)", "value": "LTU"},
                              {"label": "Luxembourg (LUX)", "value": "LUX"},
                              {"label": "Macedonia, Republic of (MKD)", "value": "MKD"},
                              {"label": "Madagascar (MDG)", "value": "MDG"},
                              {"label": "Malawi (MWI)", "value": "MWI"},
                              {"label": "Malaysia (MYS)", "value": "MYS"},
                              {"label": "Maldives (MDV)", "value": "MDV"},
                              {"label": "Mali (MLI)", "value": "MLI"},
                              {"label": "Malta (MLT)", "value": "MLT"},
                              {"label": "Marshall Islands (MHL)", "value": "MHL"},
                              {"label": "Martinique (MTQ)", "value": "MTQ"},
                              {"label": "Mauritania (MRT)", "value": "MRT"},
                              {"label": "Mauritius (MUS)", "value": "MUS"},
                              {"label": "Mayotte (MYT)", "value": "MYT"},
                              {"label": "Mexico (MEX)", "value": "MEX"},
                              {"label": "Micronesia, Federated States of (FSM)", "value": "FSM"},
                              {"label": "Moldova (MDA)", "value": "MDA"},
                              {"label": "Monaco (MCO)", "value": "MCO"},
                              {"label": "Mongolia (MNG)", "value": "MNG"},
                              {"label": "Montenegro (MNE)", "value": "MNE"},
                              {"label": "Montserrat (MSR)", "value": "MSR"},
                              {"label": "Morocco (MAR)", "value": "MAR"},
                              {"label": "Mozambique (MOZ)", "value": "MOZ"},
                              {"label": "Myanmar (MMR)", "value": "MMR"},
                              {"label": "Namibia (NAM)", "value": "NAM"},
                              {"label": "Nauru (NRU)", "value": "NRU"},
                              {"label": "Nepal (NPL)", "value": "NPL"},
                              {"label": "Netherlands (NLD)", "value": "NLD"},
                              {"label": "Netherlands Antilles (ANT)", "value": "ANT"},
                              {"label": "New Caledonia (NCL)", "value": "NCL"},
                              {"label": "New Zealand (NZL)", "value": "NZL"},
                              {"label": "Nicaragua (NIC)", "value": "NIC"},
                              {"label": "Niger (NER)", "value": "NER"},
                              {"label": "Nigeria (NGA)", "value": "NGA"},
                              {"label": "Niue (NIU)", "value": "NIU"},
                              {"label": "Norfolk Island (NFK)", "value": "NFK"},
                              {"label": "Northern Mariana Islands (MNP)", "value": "MNP"},
                              {"label": "Norway (NOR)", "value": "NOR"},
                              {"label": "Oman (OMN)", "value": "OMN"},
                              {"label": "Pakistan (PAK)", "value": "PAK"},
                              {"label": "Palau (PLW)", "value": "PLW"},
                              {"label": "Palestinian Territory (PSE)", "value": "PSE"},
                              {"label": "Panama (PAN)", "value": "PAN"},
                              {"label": "Papua New Guinea (PNG)", "value": "PNG"},
                              {"label": "Paraguay (PRY)", "value": "PRY"},
                              {"label": "Peru (PER)", "value": "PER"},
                              {"label": "Philippines (PHL)", "value": "PHL"},
                              {"label": "Pitcairn (PCN)", "value": "PCN"},
                              {"label": "Poland (POL)", "value": "POL"},
                              {"label": "Portugal (PRT)", "value": "PRT"},
                              {"label": "Puerto Rico (PRI)", "value": "PRI"},
                              {"label": "Qatar (QAT)", "value": "QAT"},
                              {"label": "Réunion (REU)", "value": "REU"},
                              {"label": "Romania (ROU)", "value": "ROU"},
                              {"label": "Russian Federation (RUS)", "value": "RUS"},
                              {"label": "Rwanda (RWA)", "value": "RWA"},
                              {"label": "Saint-Barthélemy (BLM)", "value": "BLM"},
                              {"label": "Saint Helena (SHN)", "value": "SHN"},
                              {"label": "Saint Kitts and Nevis (KNA)", "value": "KNA"},
                              {"label": "Saint Lucia (LCA)", "value": "LCA"},
                              {"label": "Saint-Martin (French part) (MAF)", "value": "MAF"},
                              {"label": "Saint Pierre and Miquelon (SPM)", "value": "SPM"},
                              {"label": "Saint Vincent and Grenadines (VCT)", "value": "VCT"},
                              {"label": "Samoa (WSM)", "value": "WSM"},
                              {"label": "San Marino (SMR)", "value": "SMR"},
                              {"label": "Sao Tome and Principe (STP)", "value": "STP"},
                              {"label": "Saudi Arabia (SAU)", "value": "SAU"},
                              {"label": "Senegal (SEN)", "value": "SEN"},
                              {"label": "Serbia (SRB)", "value": "SRB"},
                              {"label": "Seychelles (SYC)", "value": "SYC"},
                              {"label": "Sierra Leone (SLE)", "value": "SLE"},
                              {"label": "Singapore (SGP)", "value": "SGP"},
                              {"label": "Slovakia (SVK)", "value": "SVK"},
                              {"label": "Slovenia (SVN)", "value": "SVN"},
                              {"label": "Solomon Islands (SLB)", "value": "SLB"},
                              {"label": "Somalia (SOM)", "value": "SOM"},
                              {"label": "South Africa (ZAF)", "value": "ZAF"},
                              {"label": "South Georgia and the South Sandwich Islands (SGS)", "value": "SGS"},
                              {"label": "South Sudan (SSD)", "value": "SSD"},
                              {"label": "Spain (ESP)", "value": "ESP"},
                              {"label": "Sri Lanka (LKA)", "value": "LKA"},
                              {"label": "Sudan (SDN)", "value": "SDN"},
                              {"label": "Suriname (SUR)", "value": "SUR"},
                              {"label": "Svalbard and Jan Mayen Islands (SJM)", "value": "SJM"},
                              {"label": "Swaziland (SWZ)", "value": "SWZ"},
                              {"label": "Sweden (SWE)", "value": "SWE"},
                              {"label": "Switzerland (CHE)", "value": "CHE"},
                              {"label": "Syrian Arab Republic (Syria) (SYR)", "value": "SYR"},
                              {"label": "Taiwan, Republic of China (TWN)", "value": "TWN"},
                              {"label": "Tajikistan (TJK)", "value": "TJK"},
                              {"label": "Tanzania, United Republic of (TZA)", "value": "TZA"},
                              {"label": "Thailand (THA)", "value": "THA"},
                              {"label": "Timor-Leste (TLS)", "value": "TLS"},
                              {"label": "Togo (TGO)", "value": "TGO"},
                              {"label": "Tokelau (TKL)", "value": "TKL"},
                              {"label": "Tonga (TON)", "value": "TON"},
                              {"label": "Trinidad and Tobago (TTO)", "value": "TTO"},
                              {"label": "Tunisia (TUN)", "value": "TUN"},
                              {"label": "Turkey (TUR)", "value": "TUR"},
                              {"label": "Turkmenistan (TKM)", "value": "TKM"},
                              {"label": "Turks and Caicos Islands (TCA)", "value": "TCA"},
                              {"label": "Tuvalu (TUV)", "value": "TUV"},
                              {"label": "Uganda (UGA)", "value": "UGA"},
                              {"label": "Ukraine (UKR)", "value": "UKR"},
                              {"label": "United Arab Emirates (ARE)", "value": "ARE"},
                              {"label": "United Kingdom (GBR)", "value": "GBR"},
                              {"label": "United States of America (USA)", "value": "USA"},
                              {"label": "US Minor Outlying Islands (UMI)", "value": "UMI"},
                              {"label": "Uruguay (URY)", "value": "URY"},
                              {"label": "Uzbekistan (UZB)", "value": "UZB"},
                              {"label": "Vanuatu (VUT)", "value": "VUT"},
                              {"label": "Venezuela (Bolivarian Republic) (VEN)", "value": "VEN"},
                              {"label": "Viet Nam (VNM)", "value": "VNM"},
                              {"label": "Virgin Islands, US (VIR)", "value": "VIR"},
                              {"label": "Wallis and Futuna Islands (WLF)", "value": "WLF"},
                              {"label": "Western Sahara (ESH)", "value": "ESH"},
                              {"label": "Yemen (YEM)", "value": "YEM"},
                              {"label": "Zambia (ZMB)", "value": "ZMB"},
                              {"label": "Zimbabwe (ZWE)", "value": "ZWE"}
                            ]
                          },
                          "valueProperty": "value",
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
                  ]
                },
                {
                  "label": "Comment",
                  "allowMultipleMasks": false,
                  "inputMasks": [
                    {
                      "label": "",
                      "mask": ""
                    }
                  ],
                  "showWordCount": false,
                  "showCharCount": false,
                  "type": "textfield",
                  "input": true,
                  "key": "comment"
                }
              ],
              "tab": 2
            },
            {
              "label": "Telephone Numbers",
              "mask": false,
              "type": "datagrid",
              "input": true,
              "key": "telephoneNumbers",
              "components": [
                {
                  "type": "select",
                  "key": "type",
                  "label": "Type",
                  "widget": "html5",
                  "defaultValue": "private",
                  "data": {
                    "values": [
                      {
                        "label": "Home",
                        "value": "home"
                      },
                      {
                        "label": "Business",
                        "value": "business"
                      },
                      {
                        "label": "Mobile",
                        "value": "mobile"
                      },
                      {
                        "label": "Pager",
                        "value": "pager"
                      },
                      {
                        "label": "Organisation main",
                        "value": "main"
                      },
                      {
                        "label": "Assistant",
                        "value": "assistant"
                      },
                      {
                        "label": "Callback",
                        "value": "callback"
                      },
                      {
                        "label": "Radio",
                        "value": "radio"
                      },
                      {
                        "label": "Telex",
                        "value": "telex"
                      },
                      {
                        "label": "TTY/TDD",
                        "value": "ttytdd"
                      },
                      {
                        "label": "Other",
                        "value": "other"
                      }
                    ]
                  },
                  "validate": {
                    "required": true
                  }
                },
                {
                  "input": false,
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Country Code",
                          "type": "textfield",
                          "prefix": "+",
                          "key": "countryCode"
                        }
                      ],
                      "width": 3,
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
                          "label": "Area Code",
                          "type": "textfield",
                          "prefix": "(",
                          "suffix": ")",
                          "key": "areaCode"
                        }
                      ],
                      "width": 3,
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
                          "label": "Number",
                          "type": "textfield",
                          "key": "number"
                        }
                      ],
                      "width": 3,
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
                          "label": "Extension",
                          "type": "textfield",
                          "prefix": "-",
                          "key": "extension"
                        }
                      ],
                      "width": 3,
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
                  "label": "Comment",
                  "type": "textfield",
                  "input": true,
                  "key": "comment"
                }
              ],
              "tab": 2
            },
            {
              "label": "Fax Numbers",
              "mask": false,
              "type": "datagrid",
              "input": true,
              "key": "faxNumbers",
              "components": [
                {
                  "type": "select",
                  "key": "type",
                  "label": "Type",
                  "widget": "html5",
                  "defaultValue": "business",
                  "data": {
                    "values": [
                      {
                        "label": "Home",
                        "value": "home"
                      },
                      {
                        "label": "Business",
                        "value": "business"
                      },
                      {
                        "label": "Other",
                        "value": "other"
                      }
                    ]
                  },
                  "validate": {
                    "required": true
                  }
                },
                {
                  "input": false,
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
                    {
                      "components": [
                        {
                          "label": "Country Code",
                          "type": "textfield",
                          "prefix": "+",
                          "key": "countryCode"
                        }
                      ],
                      "width": 3,
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
                          "label": "Area Code",
                          "type": "textfield",
                          "prefix": "(",
                          "suffix": ")",
                          "key": "areaCode"
                        }
                      ],
                      "width": 3,
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
                          "label": "Number",
                          "type": "textfield",
                          "key": "number"
                        }
                      ],
                      "width": 3,
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
                          "label": "Extension",
                          "type": "textfield",
                          "prefix": "-",
                          "key": "extension"
                        }
                      ],
                      "width": 3,
                      "offset": 0,
                      "push": 0,
                      "pull": 0,
                      "type": "column",
                      "input": true,
                      "key": "",
                      "label": ""
                    }
                  ]
                },                {
                  "label": "Comment",
                  "allowMultipleMasks": false,
                  "inputMasks": [
                    {
                      "label": "",
                      "mask": ""
                    }
                  ],
                  "showWordCount": false,
                  "showCharCount": false,
                  "type": "textfield",
                  "input": true,
                  "key": "comment"
                }
              ],
              "tab": 2
            },
            {
              "label": "EMail Addresses",
              "mask": false,
              "type": "datagrid",
              "input": true,
              "key": "emailAddresses",
              "components": [
                {
                  "type": "select",
                  "key": "type",
                  "label": "Type",
                  "widget": "html5",
                  "defaultValue": "business",
                  "data": {
                    "values": [
                      {
                        "label": "Private",
                        "value": "private"
                      },
                      {
                        "label": "Business",
                        "value": "business"
                      },
                      {
                        "label": "Other",
                        "value": "other"
                      }
                    ]
                  },
                  "validate": {
                    "required": true
                  }
                },
                {
                  "input": true,
                  "key": "email",
                  "label": "Email",
                  "type": "email"
                },
                {
                  "label": "Display as",
                  "type": "textfield",
                  "input": true,
                  "key": "displayAs"
                },
                {
                  "label": "Comment",
                  "allowMultipleMasks": false,
                  "inputMasks": [
                    {
                      "label": "",
                      "mask": ""
                    }
                  ],
                  "showWordCount": false,
                  "showCharCount": false,
                  "type": "textfield",
                  "input": true,
                  "key": "comment"
                }
              ],
              "tab": 2
            }            
          ]
        },
        {
          "label": "Relations",
          "key": "relations",
          "components": [
            {
              "input": false,
              "key": "alls2",
              "label": "Field Set",
              "type": "fieldset",
              "components": [
                {
                  "input": false,
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
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
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
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
                }
              ]
            },
            {
              "input": false,
              "key": "perss2",
              "label": "Field Set",
              "type": "fieldset",
              "conditional": {
                "show": true,
                "eq": "person",
                "json": "",
                "when": "contactType"
              },
              "components": [
                {
                  "input": true,
                  "key": "jobs",
                  "label": "Jobs",
                  "type": "datagrid",
                  "components": [
                    {
                      "label": "Company",
                      "type": "textfield",
                      "input": true,
                      "key": "company"
                    },
                    {
                      "label": "Job Title",
                      "type": "textfield",
                      "input": true,
                      "description": "e.g. Director",
                      "key": "jobTitle"
                    },
                    {
                      "label": "Job Title important",
                      "shortcut": "",
                      "mask": false,
                      "type": "checkbox",
                      "input": true,
                      "key": "jobTitleImportant"
                    },
                    {
                      "label": "Location",
                      "type": "textfield",
                      "input": true,
                      "key": "location"
                    },
                    {
                      "label": "Department",
                      "type": "textfield",
                      "input": true,
                      "key": "department"
                    },
                    {
                      "label": "Office",
                      "type": "textfield",
                      "input": true,
                      "key": "office"
                    },
                    {
                      "label": "Manager",
                      "type": "textfield",
                      "input": true,
                      "key": "manager"
                    },
                    {
                      "label": "Assistant",
                      "type": "textfield",
                      "input": true,
                      "key": "assistant"
                    },
                    {
                      "label": "Comment",
                      "type": "textfield",
                      "input": true,
                      "key": "comment"
                    }
                  ]
                },
                {
                  "label": "Persons",
                  "mask": false,
                  "type": "datagrid",
                  "input": true,
                  "key": "relationsPerson",
                  "validate": {
                    "unique": false,
                    "customMessage": "",
                    "json": ""
                  },
                  "conditional": {
                    "json": ""
                  },
                  "components": [
                    {
                      "label": "Type",
                      "mask": false,
                      "type": "select",
                      "input": true,
                      "key": "type",
                      "defaultValue": "",
                      "data": {
                        "values": [
                          {
                            "label": "has Guardian",
                            "value": "guardian"
                          },
                          {
                            "label": "has Heir",
                            "value": "heir"
                          },
                          {
                            "label": "has Significant Other",
                            "value": "significantOther"
                          },
                          {
                            "label": "has Father",
                            "value": "father"
                          },
                          {
                            "label": "has Mother",
                            "value": "mother"
                          },
                          {
                            "label": "has Stepfather",
                            "value": "stepFather"
                          },
                          {
                            "label": "has Stepmother",
                            "value": "stepMother"
                          },
                          {
                            "label": "has Child",
                            "value": "child"
                          },
                          {
                            "label": "has Grandchild",
                            "value": "grandChild"
                          },
                          {
                            "label": "has Greatgrandchild",
                            "value": "greatGrandChild"
                          },
                          {
                            "label": "has Cousin",
                            "value": "cousin"
                          },
                          {
                            "label": "has Uncle",
                            "value": "uncle"
                          },
                          {
                            "label": "has Aunt",
                            "value": "aunt"
                          },
                          {
                            "label": "has Nephew",
                            "value": "nephew"
                          },
                          {
                            "label": "has Niece",
                            "value": "niece"
                          },
                          {
                            "label": "has Friend",
                            "value": "friend"
                          },
                          {
                            "label": "has Business Partner",
                            "value": "businessPartner"
                          },
                          {
                            "label": "has Son",
                            "value": "son"
                          },
                          {
                            "label": "has Daughter",
                            "value": "daughter"
                          },
                          {
                            "label": "has Grandson",
                            "value": "grandSon"
                          },
                          {
                            "label": "has Granddaughter",
                            "value": "grandDaughter"
                          },
                          {
                            "label": "has Greatgrandson",
                            "value": "greatGrandSon"
                          },
                          {
                            "label": "has Greatgranddaughter",
                            "value": "greatGrandDaughter"
                          },
                          {
                            "label": "has Grandfather",
                            "value": "grandFather"
                          },
                          {
                            "label": "has Grandmother",
                            "value": "grandMother"
                          },
                          {
                            "label": "has Grandparent",
                            "value": "grandParent"
                          },
                          {
                            "label": "has Greatgrandfather",
                            "value": "greatGrandFather"
                          },
                          {
                            "label": "has Greatgrandmother",
                            "value": "greatGrandMother"
                          },
                          {
                            "label": "has Greatgrandparent",
                            "value": "greatGrandParent"
                          },
                          {
                            "label": "has Parent",
                            "value": "parent"
                          },
                          {
                            "label": "has Stepparent",
                            "value": "stepParent"
                          },
                          {
                            "label": "has Brother in law",
                            "value": "brotherInLaw"
                          },
                          {
                            "label": "has Sister in law",
                            "value": "sisterInLaw"
                          },
                          {
                            "label": "has Brother",
                            "value": "brother"
                          },
                          {
                            "label": "has Sister",
                            "value": "sister"
                          },
                          {
                            "label": "has Sibling",
                            "value": "sibling"
                          },
                          {
                            "label": "has Spouse",
                            "value": "spouse"
                          },
                          {
                            "label": "has Partner",
                            "value": "partner"
                          },
                          {
                            "label": "has Assistant",
                            "value": "assistant"
                          },
                          {
                            "label": "has Maid",
                            "value": "maid"
                          },
                          {
                            "label": "has Driver",
                            "value": "driver"
                          },
                          {
                            "label": "has Gardener",
                            "value": "gardener"
                          },
                          {
                            "label": "has Manager",
                            "value": "manager"
                          },
                          {
                            "label": "has Lawyer",
                            "value": "lawyer"
                          },
                          {
                            "label": "has other relation",
                            "value": "other"
                          }
                        ]
                      },
                      "valueProperty": "value"
                    },
                    {
                      "label": "Name",
                      "allowMultipleMasks": false,
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "name"
                    },
                    {
                      "label": "Related",
                      "mask": false,
                      "type": "select",
                      "input": true,
                      "key": "related",
                      "data": {
                        "values": []
                      },
                      "valueProperty": "value"
                    },
                    {
                      "label": "Year",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "year",
                      "validateOn": "blur",
                      "validate": {
                        "customMessage": "",
                        "json": "",
                        "min": 1900,
                        "max": 2100
                      }
                    },
                    {
                      "label": "Percentage",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "percentage",
                      "validate": {
                        "min": 0,
                        "customMessage": "",
                        "json": "",
                        "max": 100
                      }
                    },
                    {
                      "label": "Comment",
                      "allowMultipleMasks": false,
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "comment"
                    }
                  ],
                  "properties": [
                    {
                      "key": "",
                      "value": ""
                    }
                  ],
                  "rowClass": "",
                  "addAnother": " ",
                  "saveRow": "",
                  "removeRow": "",
                  "customConditional": ""
                },
                {
                  "label": "Organisations",
                  "mask": false,
                  "type": "datagrid",
                  "input": true,
                  "key": "relationsOrganisations",
                  "validate": {
                    "unique": false,
                    "customMessage": "",
                    "json": ""
                  },
                  "conditional": {
                    "json": ""
                  },
                  "components": [
                    {
                      "label": "Type",
                      "mask": false,
                      "type": "select",
                      "input": true,
                      "key": "type",
                      "defaultValue": "",
                      "data": {
                        "values": [
                          {
                            "label": "attended School",
                            "value": "school"
                          },
                          {
                            "label": "is member of Association",
                            "value": "association"
                          },
                          {
                            "label": "is member of Group",
                            "value": "group"
                          },
                          {
                            "label": "has Lawfirm",
                            "value": "lawfirm"
                          },
                          {
                            "label": "is owner of",
                            "value": "owner"
                          },
                          {
                            "label": "has other relation",
                            "value": "other"
                          }
                        ]
                      },
                      "valueProperty": "value"
                    },
                    {
                      "label": "Name",
                      "allowMultipleMasks": false,
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "name"
                    },
                    {
                      "label": "Related",
                      "mask": false,
                      "type": "select",
                      "input": true,
                      "key": "related",
                      "data": {
                        "values": []
                      },
                      "valueProperty": "value"
                    },
                    {
                      "label": "Year",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "year",
                      "validateOn": "blur",
                      "validate": {
                        "customMessage": "",
                        "json": "",
                        "min": 1900,
                        "max": 2100
                      }
                    },
                    {
                      "label": "Percentage",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "percentage",
                      "validate": {
                        "min": 0,
                        "customMessage": "",
                        "json": "",
                        "max": 100
                      }
                    },
                    {
                      "label": "Comment",
                      "allowMultipleMasks": false,
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "comment"
                    }
                  ],
                  "properties": [
                    {
                      "key": "",
                      "value": ""
                    }
                  ],
                  "rowClass": "",
                  "addAnother": " ",
                  "saveRow": "",
                  "removeRow": "",
                  "customConditional": ""
                }
              ]
            },
            {
              "input": false,
              "key": "orgs2",
              "label": "Field Set",
              "type": "fieldset",
              "conditional": {
                "show": true,
                "eq": "organisation",
                "json": "",
                "when": "contactType"
              },
              "components": [
                {
                  "input": true,
                  "key": "units",
                  "label": "Units",
                  "type": "datagrid",
                  "components": [
                    {
                      "label": "Name",
                      "type": "textfield",
                      "input": true,
                      "key": "name"
                    },
                    {
                      "label": "Location",
                      "type": "textfield",
                      "input": true,
                      "key": "location"
                    },
                    {
                      "label": "Department",
                      "type": "textfield",
                      "input": true,
                      "key": "department"
                    },
                    {
                      "label": "Office",
                      "type": "textfield",
                      "input": true,
                      "key": "office"
                    },
                    {
                      "label": "Manager",
                      "type": "textfield",
                      "input": true,
                      "key": "manager"
                    },
                    {
                      "label": "Assistant",
                      "type": "textfield",
                      "input": true,
                      "key": "assistant"
                    },
                    {
                      "label": "Comment",
                      "type": "textfield",
                      "input": true,
                      "key": "comment"
                    }
                  ]
                },        
                {
                  "input": true,
                  "key": "staff",
                  "label": "Staff",
                  "type": "datagrid",
                  "components": [
                    {
                      "label": "Name",
                      "type": "textfield",
                      "input": true,
                      "key": "name"
                    },
                    {
                      "label": "Job title",
                      "type": "textfield",
                      "input": true,
                      "description": "e.g. Director",
                      "key": "jobTitle"
                    },
                    {
                      "label": "Job Title",
                      "type": "textfield",
                      "input": true,
                      "description": "e.g. Director",
                      "key": "jobTitle"
                    },
                    {
                      "label": "Location",
                      "type": "textfield",
                      "input": true,
                      "key": "location"
                    },
                    {
                      "label": "Department",
                      "type": "textfield",
                      "input": true,
                      "key": "department"
                    },
                    {
                      "label": "Office",
                      "type": "textfield",
                      "input": true,
                      "key": "office"
                    },
                    {
                      "label": "Manager",
                      "type": "textfield",
                      "input": true,
                      "key": "manager"
                    },
                    {
                      "label": "Assistant",
                      "type": "textfield",
                      "input": true,
                      "key": "assistant"
                    },
                    {
                      "label": "Comment",
                      "type": "textfield",
                      "input": true,
                      "key": "comment"
                    }
                  ]
                },                
                {
                  "label": "Persons",
                  "mask": false,
                  "type": "datagrid",
                  "input": true,
                  "key": "relationsPerson",
                  "validate": {
                    "unique": false,
                    "customMessage": "",
                    "json": ""
                  },
                  "conditional": {
                    "json": ""
                  },
                  "components": [
                    {
                      "label": "Type",
                      "mask": false,
                      "type": "select",
                      "input": true,
                      "key": "type",
                      "defaultValue": "",
                      "data": {
                        "values": [
                          {
                            "label": "has Liquidator",
                            "value": "liquidator"
                          },
                          {
                            "label": "has Lawyer",
                            "value": "lawyer"
                          },
                          {
                            "label": "has other relation",
                            "value": "other"
                          }
                        ]
                      },
                      "valueProperty": "value"
                    },
                    {
                      "label": "Name",
                      "allowMultipleMasks": false,
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "name"
                    },
                    {
                      "label": "Related",
                      "mask": false,
                      "type": "select",
                      "input": true,
                      "key": "related",
                      "data": {
                        "values": []
                      },
                      "valueProperty": "value"
                    },
                    {
                      "label": "Year",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "year",
                      "validateOn": "blur",
                      "validate": {
                        "customMessage": "",
                        "json": "",
                        "min": 1900,
                        "max": 2100
                      }
                    },
                    {
                      "label": "Percentage",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "percentage",
                      "validate": {
                        "min": 0,
                        "customMessage": "",
                        "json": "",
                        "max": 100
                      }
                    },
                    {
                      "label": "Comment",
                      "allowMultipleMasks": false,
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "comment"
                    }
                  ],
                  "properties": [
                    {
                      "key": "",
                      "value": ""
                    }
                  ],
                  "rowClass": "",
                  "addAnother": " ",
                  "saveRow": "",
                  "removeRow": "",
                  "customConditional": ""
                },
                {
                  "label": "Organisations",
                  "mask": false,
                  "type": "datagrid",
                  "input": true,
                  "key": "relationsOrganisation",
                  "validate": {
                    "unique": false,
                    "customMessage": "",
                    "json": ""
                  },
                  "conditional": {
                    "json": ""
                  },
                  "components": [
                    {
                      "label": "Type",
                      "mask": false,
                      "type": "select",
                      "input": true,
                      "key": "type",
                      "defaultValue": "",
                      "data": {
                        "values": [
                          {
                            "label": "has Successor",
                            "value": "successor"
                          },
                          {
                            "label": "has Lawfirm",
                            "value": "lawfirm"
                          },
                          {
                            "label": "is owner of",
                            "value": "owner"
                          },
                          {
                            "label": "has other relation",
                            "value": "other"
                          }
                        ]
                      },
                      "valueProperty": "value"
                    },
                    {
                      "label": "Name",
                      "allowMultipleMasks": false,
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "name"
                    },
                    {
                      "label": "Related",
                      "mask": false,
                      "type": "select",
                      "input": true,
                      "key": "related",
                      "data": {
                        "values": []
                      },
                      "valueProperty": "value"
                    },
                    {
                      "label": "Year",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "year",
                      "validateOn": "blur",
                      "validate": {
                        "customMessage": "",
                        "json": "",
                        "min": 1900,
                        "max": 2100
                      }
                    },
                    {
                      "label": "Percentage",
                      "mask": false,
                      "type": "number",
                      "input": true,
                      "key": "percentage",
                      "validate": {
                        "min": 0,
                        "customMessage": "",
                        "json": "",
                        "max": 100
                      }
                    },
                    {
                      "label": "Comment",
                      "allowMultipleMasks": false,
                      "showWordCount": false,
                      "showCharCount": false,
                      "type": "textfield",
                      "input": true,
                      "key": "comment"
                    }
                  ],
                  "properties": [
                    {
                      "key": "",
                      "value": ""
                    }
                  ],
                  "rowClass": "",
                  "addAnother": " ",
                  "saveRow": "",
                  "removeRow": "",
                  "customConditional": ""
                },
                {
                  "input": false,
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
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
                  "key": "columns",
                  "label": "Columns",
                  "type": "columns",
                  "columns": [
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
                }
              ]
            }
          ]
        },
        {
          "label": "Notes",
          "key": "notes",
          "components": [
            {
              "label": "Notes",
              "placeholder": "Here you can enter some text notes...",
              "description": "e.g. \"We had some very interesting case here...\"",
              "tooltip": "Some additional notes that you might want to take...",
              "rows": 5,
              "type": "textarea",
              "input": true,
              "key": "notes",
              "multiple": true,
              "wysiwyg": ""
            }
          ]
        },
        {
          "label": "Activities",
          "key": "activities",
          "components": [
            {
              "type": "datagrid",
              "label": "Activities",
              "hideLabel": true,
              "key": "activities",
              "components": [
                {
                  "type": "datetime",
                  "label": "When",
                  "key": "when",
                  "validate": { "required": true}
                },
                {
                  "type": "textfield",
                  "label": "Who",
                  "key": "who",
                  "validate": { "required": true}
                },
                {
                  "type": "textfield",
                  "label": "What",
                  "key": "what",
                  "validate": { "required": true}
                }
              ]
            }          ]
        },
        {
          "label": "Projects",
          "key": "projects",
          "components": [
          ]
        },
        {
          "label": "Properties",
          "key": "properties",
          "components": [
          ]
        },
        {
          "label": "Timeline",
          "key": "timeline",
          "components": [
          ]
        }
      ]
    },
    {
      "type": "htmlelement",
      "tag": "br"
    },
    {
      "key": "columns",
      "type": "columns",
      "columns": [
        {
          "components": [
            {
              "label": "Valid from",
              "useLocaleSettings": true,
              "description": "e.g. 1.1.2019",
              "type": "datetime",
              "key": "validFrom",
              "enableTime": false,
              "datePicker": {
                "startingDay": 1,
                "yearRows": "4",
                "yearColumns": "5"
              },
              "customDefaultValue": "value=moment()"
            }
          ],
          "width": 3,
          "type": "column"
        },
        {
          "components": [
            {
              "label": "Change comment",
              "description": "e.g. Name change",
              "type": "textfield",
              "placeholder": "Please enter a change comment here...",
              "key": "comment"
            }
          ],
          "width": 9,
          "type": "column"
        }
      ]
    },
    {
      "key": "columns",
      "type": "columns",
      "columns": [
        {
          "components": [
            {
              "label": " Save ",
              "leftIcon": "glyphicon glyphicon-floppy-save",
              "tooltip": "Creates or updates the contact.",
              "disableOnInvalid": true,
              "theme": "success",
              "shortcut": "Enter",
              "type": "button",
              "key": "save",
              "showValidations": true
            }
          ],
          "width": 3,
          "type": "column"
        },
        {
          "components": [
            {
              "label": " Reload ",
              "action": "custom",
              "custom": "var data=new Object();data['clientInfo']=new Object();data['clientInfo']['correlationId']=formioForm.submission.data['clientInfo']['correlationId'];data['id']=formioForm.submission.data['id'];TogFormViewer.loadForm('../forms/contact-edit/v1',data);/*history.pushState({},'','index.html?form=../forms/contact-edit/v1');*/",
              "leftIcon": "glyphicon glyphicon-refresh",
              "tooltip": "Reloads this form and abandons any changes done.",
              "disableOnInvalid": false,
              "theme": "warning",
              "shortcut": "Esc",
              "type": "button",
              "key": "reload",
              "customConditional": "show=TogFormViewer.dirty;"
            }
          ],
          "width": 3,
          "type": "column"
        }
      ]
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
    "formtitle": "Contacts",
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
    "debug": "on"
  },
  "title": "Contacts",
  "name": "contact-edit"
};