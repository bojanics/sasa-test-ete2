function executeLoadingRequest() {
   if (typeof ADAL!== 'undefined' && ADAL) {
      var additionalCfg = {};
      var url = appConfiguration.home+'/Form(\'s/2\')/Loading';
      
      if (appConfiguration.home && appConfiguration.home!='') {
         executeAjaxRequestWithAdalLogic(ADAL.config.clientId,executeAjaxRequest,url,appConfiguration,additionalCfg,onsuccess_loading,onfailure_generic);
      } else {
         alert("It is not possible to perform operation '"+operation+"' since base URL for the API call is not specified!");
      }
   }
}

function onsuccess_loading(token,url,formdata,additionalConfiguration,data,textStatus,request) {
   var msgPart = "loading operation against base API '"+appConfiguration.home+"'";
   console.log("Successfully executed "+msgPart+".");
   console.log('DATA received ='+JSON.stringify(data));
   appConfiguration = $.extend(appConfiguration,data.appConfiguration);
   console.log('DATA merged ='+JSON.stringify(appConfiguration));
}

