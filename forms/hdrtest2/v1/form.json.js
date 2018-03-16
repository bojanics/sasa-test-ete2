var formObj = {"type":"form","tags":[],"access":[{"roles":["5a05516e35677f0001aeef6f","5a05516e35677f0001aeef70","5a05516e35677f0001aeef71"],"type":"read_all"}],"submissionAccess":[],"owner":"594fd15f7684cc005c2280ae","components":[{"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"type":"columns","columns":[{"pull":0,"push":0,"offset":0,"width":6,"components":[{"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"Broj ponude leasinga","key":"inp_leasing_subject","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"0300422","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","hideLabel":false,"tags":[],"properties":{"":""},"tooltip":"Svaka ponuda ima jedinstveni broj ponude leasinga.","disabled":true,"lockKey":true,"autofocus":false,"spellcheck":true}]},{"pull":0,"push":0,"offset":0,"width":6,"components":[{"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"Korisnički ID","key":"uid","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"saal\\tkerezija","protected":false,"unique":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","tags":[],"properties":{"":""},"disabled":true,"tooltip":"Korisničke informacije","autofocus":false,"spellcheck":true,"labelPosition":"top"}]}],"key":"columns2","tableView":false,"input":false,"clearOnHide":false,"label":"Columns"},{"clearOnHide":false,"input":false,"tableView":false,"key":"columns4","columns":[{"components":[{"lockKey":true,"tooltip":"Vrsta leasinga može biti OL ili FL. Operativni leasing ili financijski leasing.","disabled":true,"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"type":"select","validate":{"required":false},"clearOnHide":true,"hidden":false,"persistent":true,"unique":false,"protected":false,"multiple":false,"template":"<span>{{ item.label }}</span>","authenticate":false,"filter":"","refreshOn":"","defaultValue":"OL","valueProperty":"","dataSrc":"values","data":{"custom":"","resource":"","url":"","json":"","values":[{"label":"Operativni leasing","value":"OL"},{"label":"Financijski leasing","value":"FL"}]},"placeholder":"","key":"tip_fin","label":"Vrsta leasinga","tableView":true,"input":true,"autofocus":false,"labelPosition":"top","isNew":false}],"width":6,"offset":0,"push":0,"pull":0},{"components":[{"lockKey":true,"disabled":true,"tooltip":"Vrijednosti za \"Nova vozila\" su DA ili NE.","properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"type":"select","validate":{"required":false},"clearOnHide":true,"hidden":false,"persistent":true,"unique":false,"protected":false,"multiple":false,"template":"<span>{{ item.label }}</span>","authenticate":false,"filter":"","refreshOn":"","defaultValue":"Yes","valueProperty":"","dataSrc":"values","data":{"custom":"","resource":"","url":"","json":"","values":[{"label":"Da","value":"Yes"},{"label":"Ne","value":"No"}]},"placeholder":"","key":"inp_new","label":"Novo vozilo","tableView":true,"input":true,"autofocus":false,"labelPosition":"top"}],"width":6,"offset":0,"push":0,"pull":0}],"type":"columns","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""},"label":"Columns","hideLabel":true},{"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"hideLabel":false,"type":"columns","columns":[{"pull":0,"push":0,"offset":0,"width":6,"components":[{"lockKey":true,"tooltip":"Osnovica za izracun premije je financirana vrijednost.","properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"type":"number","validate":{"custom":"","multiple":"","integer":"","step":"any","max":"","min":"","required":false},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"12221.80","suffix":"","prefix":"","placeholder":"","key":"Inp_finance_amount","label":"Osnovica za izracun premije","inputType":"number","tableView":true,"input":true,"disabled":true,"autofocus":false,"labelPosition":"top","customClass":"inp-text-right"}]},{"pull":0,"push":0,"offset":0,"width":6,"components":[{"lockKey":true,"disabled":true,"tooltip":"Valuta može biti EUR ili HRK.","properties":{"":""},"tags":[],"hideLabel":false,"type":"textfield","conditional":{"eq":"","when":null,"show":""},"validate":{"customPrivate":false,"custom":"","pattern":"","maxLength":"","minLength":"","required":false},"clearOnHide":true,"hidden":false,"persistent":true,"unique":false,"protected":false,"defaultValue":"EUR","multiple":false,"suffix":"","prefix":"","placeholder":"","key":"inp_currency","label":"Valuta","inputMask":"","inputType":"text","tableView":true,"input":true,"autofocus":false,"spellcheck":true}]}],"key":"columns","tableView":false,"input":false,"clearOnHide":false,"label":"Columns"},{"clearOnHide":false,"input":false,"tableView":false,"key":"columns5","columns":[{"components":[{"clearOnHide":false,"key":"panel","input":false,"title":"Premija za nova osobna vozila","theme":"default","tableView":false,"components":[{"clearOnHide":false,"input":false,"tableView":false,"key":"panelColumns","columns":[{"components":[{"input":true,"tableView":true,"inputType":"number","label":"Uniqa osiguranja","key":"out_uniqa","placeholder":"","prefix":"","suffix":"","defaultValue":"233.93","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"min":"","max":"","step":"any","integer":"","multiple":"","custom":""},"type":"number","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""},"disabled":true,"lockKey":true,"tooltip":"","autofocus":false,"labelPosition":"top","customClass":"inp-text-right"}],"width":6,"offset":0,"push":0,"pull":0},{"components":[{"input":true,"tableView":true,"inputType":"number","label":"Wiener osiguranje VIG","key":"out_wiener","placeholder":"","prefix":"","suffix":"","defaultValue":"251.40","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"required":false,"min":"","max":"","step":"any","integer":"","multiple":"","custom":""},"type":"number","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""},"disabled":true,"lockKey":true,"tooltip":"","autofocus":false,"labelPosition":"top","customClass":"inp-text-right"}],"width":6,"offset":0,"push":0,"pull":0}],"type":"columns","tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{},"label":"Columns","hideLabel":true}],"type":"panel","breadcrumb":"default","hideLabel":false,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""},"tooltip":"Premija određena na osnovu financirane vrijesnosti."}],"width":12,"offset":0,"push":0,"pull":0}],"type":"columns","hideLabel":false,"tags":[],"conditional":{"show":"","when":null,"eq":""},"properties":{"":""},"label":"Columns"},{"properties":{"":""},"conditional":{"eq":"","when":null,"show":""},"tags":[],"input":true,"label":"Ponuda (PDF)","tableView":false,"key":"submit","size":"md","leftIcon":"","rightIcon":"","block":false,"action":"custom","disableOnInvalid":false,"theme":"primary","type":"button","hideLabel":false,"autofocus":false,"custom":"window.open(data['home']+\"Quote/CreateDocument\"+\"?tip_fin=\"+data['tip_fin']+\"&Inp_finance_amount=\"+data['Inp_finance_amount']+\"&inp_new=\"+data['inp_new']+\"&inp_leasing_subject=\"+data['inp_leasing_subject']+\"&uid=\"+data['uid']+\"&corr=\"+data['corr'],\"offer\");"},{"autofocus":false,"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"home","key":"home","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"","protected":false,"unique":false,"persistent":true,"hidden":true,"clearOnHide":true,"spellcheck":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","labelPosition":"top","tags":[],"properties":{}},{"autofocus":false,"input":true,"tableView":true,"inputType":"text","inputMask":"","label":"corr","key":"corr","placeholder":"","prefix":"","suffix":"","multiple":false,"defaultValue":"","protected":false,"unique":false,"persistent":true,"hidden":true,"clearOnHide":true,"spellcheck":true,"validate":{"required":false,"minLength":"","maxLength":"","pattern":"","custom":"","customPrivate":false},"conditional":{"show":"","when":null,"eq":""},"type":"textfield","labelPosition":"top","tags":[],"properties":{}}],"created":"2017-11-10T12:38:10.349Z","revisions":"","_vid":0,"_id":"5a059db29499b40001380af9","machineName":"nezcjzowfnfwzny:GHR-SLE","modified":"2018-03-12T03:28:28.175Z","title":"GOS | WebQuotes - Ponuda osiguranja","display":"form","name":"GHR-SLE","path":"ghr-sle","project":"5a05516e35677f0001aeef6e","properties":{"formtitle":"- Ponuda osiguranja","formhelp":"Ovdje se nalazi usporedna analiza ponuda za kasko osiguranje prema parametrima kao što su iznos financiranja, valuta i vrsta leasinga.<br><br>Uspoređena su osiguravajuća društva Uniqa osiguranje i Wiener osiguranje VIG i iskazane su premije osiguranja.<br><br>Ukoliko želite tiskani primjerak ponude, možete ga dobiti pritiskom na<br><br><img src=\"../help/hr_HR/Button_Ponuda_PDF.jpg\" alt=\"Ponuda PDF\"><br><br><br><img src=\"../help/hr_HR/Offer_Page1_PDF.jpg\" alt=\"Offer Page 1 PDF\">"}};