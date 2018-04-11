function executeLoadingRequest() {
   if (typeof ADAL!== 'undefined' && ADAL) {
      var additionalCfg = {};
      var url = appConfiguration.home+'/Form(\'s/2\')/Loading';
      var data = {"header":headerObj,"appConfiguration":appConfiguration};
      
      if (appConfiguration.home && appConfiguration.home!='') {
         executeAjaxRequestWithAdalLogic(ADAL.config.clientId,executeLoadingRequestNoAdal,url,data,additionalCfg);         
      } else {
         alert("It is not possible to perform operation '"+operation+"' since base URL for the API call is not specified!");
      }
   }
}

function executeLoadingRequestNoAdal(token,url,alldata,additionalConfiguration) {
   var settings = {
     "crossDomain": true,     
     "url": url,
     "timeout":30000,
     "method": "POST",
     "headers": {
       "content-type": "application/json",
       "cache-control": "no-cache"
     },
     "data": JSON.stringify(alldata),
     "dataType": 'json',
     "contentType": 'application/json'                          
   };
   if (token) {   
      settings.headers.authorization = "Bearer "+token;
   }

   var msgPart = "loading operation against base API '"+appConfiguration.home+"'";
   $.ajax(settings).done(function (data,textStatus,request) {
      console.log("Successfully executed "+msgPart+".");
         console.log('DATA received ='+JSON.stringify(data));
      }
   }).fail(function (err, textStatus, errorThrown) {
      var msg = "Error occurred when executing "+msgPart+"!";
      msg+="\n\nError type: "+textStatus;
      msg+="\nError status: "+err.status + (err.statusText && err.statusText!='' ? " - "+err.statusText : "");
      msg+="\n\nForm data: "+(alldata!=null ? JSON.stringify(alldata) : null);
      msg+=(err.responseText!=null || err.responseXML!=null) ? ("\n\nResponse: "+(err.responseText!=null ? err.responseText : err.responseXML)) : "";
      
      console.log(msg);
      alert(msg);
   });
}
