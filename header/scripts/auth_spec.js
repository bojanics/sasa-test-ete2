(function () {
    // parsing the query string into JSON 
    var adal_tenant = null;
    var adal_clientId = null;
    var query = window.location.search.substring(1);
    var qs = '{}';
    var offline = false;
    if (query!=null && query!='') {
        qs = parse_query_string(query);        
        if (qs['offline'] && qs['offline']=='true') {
            offline = true;
        }
        adal_clientId = qs['client'];
        if (adal_clientId==null && !offline) {
           var token = qs['token'];
           if (token) {
               try {
                  var parsedToken = parseJwt(token);
                  adal_clientId = parsedToken.aud;
                  adal_tenant = parsedToken.tid;
                  var newq = query.replace('token='+token,'client='+adal_clientId+'&tenant='+adal_tenant);
                  var firstredir=[window.location.protocol, '//', window.location.host, window.location.pathname].join('')+'?'+newq;
                  window.location.href=firstredir;
                  return;
               } catch(e) {
                  console.log('Invalid token parameter: '+token);
               }
           }
        } else {
            adal_tenant = qs['tenant'];
        }
        // must check if the storageObj is defined (in Edge when opening file locally it won't be defined)
        if (storageObj) storageObj.setItem('adal_clientId',adal_clientId);
        if (storageObj)storageObj.setItem('adal_tenant',adal_tenant);
    } else {
       // must check if the storageObj is defined (in Edge when opening file locally it won't be defined)
       if (storageObj) adal_tenant = storageObj.getItem('adal_tenant');
       if (storageObj) adal_clientId = storageObj.getItem('adal_clientId');
    }
    if (adal_tenant==null) {
       adal_tenant = 'common';
    }
    
    var isIfrm = isIframe();
    var isCallback = isADALCallback();
    console.log('isIframe: '+isIfrm+', isADALInitialized: '+isSignedInUser()+', isCallback='+isCallback+', offline='+offline+', query string: '+query);
    
    // check and use ADAL if we have signed in user or we need to initialize it
    // NOTE: ADAL should be used if this is running inside iFrame (it means it is refreshing the ID token), or if we already have signed-in user, 
    // or we are in process of initialization (callback), or if we have the query parameter 'client' or query parameter 'token'
    var shouldUseADAL = !offline && (isIfrm || isSignedInUser() || isCallback || adal_clientId!=null);
    console.log('should use ADAL: '+shouldUseADAL);
    if (shouldUseADAL) {
         if (ADAL==null) {
            ADAL = new AuthenticationContext({
                instance: 'https://login.microsoftonline.com/',
                tenant: adal_tenant,//'b4a7cf6c-8876-456a-b97f-1e2bbeb7579a', //COMMON OR YOUR TENANT ID
                clientId: adal_clientId,//'0b2d8b43-929e-412c-b6d4-2d536ffc1e92', //REPLACE WITH YOUR CLIENT ID
                redirectUri: [window.location.protocol, '//', window.location.host, window.location.pathname].join(''), // THE CDN URI
                cacheLocation: isIEBrowser() ? 'localStorage' : 'sessionStorage', // enable this for IE, as sessionStorage does not work for localhost.
                //endpoints: endpoints,
                postLogoutRedirectUri: 'https://www.office.com/?ref=logout', 
                popUp: false
            });   
         }
       
        // doing ADAL logic
        console.log('iscallback='+isCallback);
        if (isCallback) {
            ADAL.handleWindowCallback();	
        }
        
        if (isCallback && !ADAL.getLoginError()) {
            console.log('Now redirecting to original URL');
            window.location = ADAL._getItem(ADAL.CONSTANTS.STORAGE.LOGIN_REQUEST);
            return;
        }	

        if (!ADAL.getCachedUser()) {
            console.log('Redirect to login-page...');
            ADAL.login();
            return;
        } else {
           if (!isIfrm) {
               writeADALInitTime();
               initAfterADALSetup();
           }
        }
    } else {
        initAfterADALSetup();
    }        
})();

function isSignedInUser () {
    return ADAL!=null && ADAL.getCachedUser()!=null;
}

function fillUserInfo() {
    var signeduser = ADAL!=null ? ADAL.getCachedUser() : null;
    if (signeduser) {
        if (signeduser.profile.upn) {
            // For work or school accounts (tenant members)
            currentUser.member = true;
            currentUser.personal = false;
            currentUser.uid = signeduser.profile.upn;
            $('.useremail').html(signeduser.profile.upn);
            $('#usersettingslinklist').append('<div><div class="user-settings-link-wrapper"><a id="myProfileLink" class="user-settings-link" role="link" href="https://delve.office.com/" target="_blank"><span class="user-settings-link-label" lang-tran="My profile">My profile</span></a></div><div class="user-settings-link-wrapper"><a id="myAccountLink" class="user-settings-link" role="link" href="https://portal.office.com/account/" target="_blank"><span class="user-settings-link-label" lang-tran="My account">My account</span></a></div><div class="user-settings-link-wrapper"><a id="signOutLink" class="user-settings-link" role="link" href="javascript:void(0);" onclick="ADAL.logOut();"><span class="user-settings-link-label" lang-tran="Sign out">Sign out</span></a></div></div>');
            $('#myProfileSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="https://delve.office.com/" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="My profile" target="_blank">My profile</a></div>');
            $('#myAccountSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="https://portal.office.com/account/" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="My account" target="_blank">My account</a></div>');
            $('#signOutSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="javascript:void(0);" onclick="ADAL.logOut();" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="Sign out">Sign out</a></div>');
        } else if (signeduser.profile.idp === "live.com") {
            // For personal accounts
            currentUser.member = false;
            currentUser.personal = true;
            currentUser.uid = signeduser.profile.email;
            $('.useremail').html(signeduser.profile.email);
            $('#usersettingslinklist').append('<div><div class="user-settings-link-wrapper"><a id="myProfileLink" class="user-settings-link" role="link" href="https://account.microsoft.com/profile/" target="_blank"><span class="user-settings-link-label" lang-tran="My profile">My profile</span></a></div><div class="user-settings-link-wrapper"><a id="myAccountLink" class="user-settings-link" role="link" href="https://account.microsoft.com/" target="_blank"><span class="user-settings-link-label" lang-tran="My account">My account</span></a></div><div class="user-settings-link-wrapper"><a id="signOutLink" class="user-settings-link" role="link" href="javascript:void(0);" onclick="ADAL.logOut();"><span class="user-settings-link-label" lang-tran="Sign out">Sign out</span></a></div></div>');
            $('#myProfileSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="https://account.microsoft.com/profile/" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="My profile" target="_blank">My profile</a></div>');
            $('#myAccountSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="https://account.microsoft.com/" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="My account" target="_blank">My account</a></div>');
            $('#signOutSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="javascript:void(0);" onclick="ADAL.logOut();" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="Sign out">Sign out</a></div>');
            $("#officeHomeLink").attr("href", "https://www.office.com/login?IdentityProvider=live.com&login_hint=" + signeduser.profile.email.replace("@", "%40"));
        } else {
            // For work or school accounts which are guests
            currentUser.member = false;
            currentUser.personal = false;
            currentUser.uid = signeduser.profile.email;
            $('.useremail').html(signeduser.profile.email);
            $('#usersettingslinklist').append('<div><div class="user-settings-link-wrapper"><a id="myProfileLink" class="user-settings-link" role="link" href="https://delve.office.com/" target="_blank"><span class="user-settings-link-label" lang-tran="My profile">My profile</span></a></div><div class="user-settings-link-wrapper"><a id="myAccountLink" class="user-settings-link" role="link" href="https://portal.office.com/account/" target="_blank"><span class="user-settings-link-label" lang-tran="My account">My account</span></a></div><div class="user-settings-link-wrapper"><a id="signOutLink" class="user-settings-link" role="link" href="javascript:void(0);" onclick="ADAL.logOut();"><span class="user-settings-link-label" lang-tran="Sign out">Sign out</span></a></div></div>');
            $('#myProfileSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="https://delve.office.com/" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="My profile" target="_blank">My profile</a></div>');
            $('#myAccountSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="https://portal.office.com/account/" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="My account" target="_blank">My account</a></div>');
            $('#signOutSmallWrapper').append('<div class="user-settings-small-menu-item"><a href="javascript:void(0);" onclick="ADAL.logOut();" class="header-common user-settings-small-menu-item-wrapper user-settings-small-menu-link" lang-tran="Sign out">Sign out</a></div>');
        }
        
        $("#allAppsLink").attr("href", "https://account.activedirectory.windowsazure.com/r?tenantId=" + ADAL.config.tenant + "#/applications");
        currentUser.name = signeduser.profile.name;
        $('.username').html(signeduser.profile.name);
        if (appConfiguration.mailboxPhoto) {
            getuserphotometadata();
        } else {
            getUserThumbnailPhoto();
        }
    }
}

function executeAjaxRequestWithAdalLogic(resource, callbackfunc, ajaxurl, ajaxjsondata, additionalConfiguration, callbackfunc_oncsuccessfnc, callbackfunc_onfailurefnc, adalerrorcallback) {
    console.log("EXEC AJAX REQ With ADAL Logic for res="+resource+", url="+ajaxurl+", ADALERRORCALLBACK="+adalerrorcallback);
    ADAL.acquireToken(resource, function (error, token, errcode) {
        console.log("ENTERING: EXEC AJAX REQ With ADAL Logic for res="+resource+", url="+ajaxurl+", ADALERRORCALLBACK="+adalerrorcallback);
        // Handle ADAL Error
        if (error || errcode || !token) {
            var msg = '';
            if (error || errcode) {
               msg+='Error '+(errcode!=null ? '"'+errcode+'"' : '')+' occurred when acquiring token for the resource "'+resource+'" for calling function "'+getFunctionName(callbackfunc)+'" with ajax url "'+ajaxurl+'".';
               msg+='\n\nError details:\n'+error;
            }
            var dologin = false;
            var aelc = null;
            // ADAL login attempt will happen only in the case of the following error codes/errors
            if (errcode=='login_required' || errcode=='account_selection_required' || errcode=='consent_required' || errcode=='access_denied' || (errcode=='interaction_required' && error && error.indexOf('AADSTS16000')>-1)) {
               dologin = true;
            }
            
            if (dologin) {
               aelc = readRecursionInfo(resource,errcode);
            }
            // ADAL login attempt will not happen if the recursion is detected
            if (dologin && aelc==0) {
               var msgpart = '';
               if (errcode=='interaction_required') {
                  msgpart ='Multiple user identities are available for the current context. Please sign-out from non-desired account(s) and sign-in into the wanted one.\n';
               } else if (error && error.indexOf('AADSTS50058')>-1) {
                  msgpart ='It might be that session cookie has expired (or deleted due to the log-out from another browser window) or some unexpected error happened.\n';
               } else {
                  msgpart ='Some unexpected error happened.\n';
               }
               msgpart+='You will be redirected to the login page in order to try to solve this issue.\n\n';
               msg = msgpart + msg;
            } else if (errcode=='Token Renewal Failed') {               
               var msgpart = 'Please try again latter.\n'
               msgpart+='If it occures many times in a row, you may try to close the browser and open the page again (maybe the session data is missing for some reason).\n\n';
               msg=msgpart+msg;
            } else {
               var msgpart = '';
               var specmsg = '\nYou may try to close the browser and open the page again.\n';
               if (error && error.indexOf('AADSTS50058')>-1) {
                  specmsg+='It seems either the session cookie has expired (or deleted due to the log-out from another browser window) or some unexpected error happened';
               } else {               
                  specmsg+='The token can\'t be acquired until the user consents, or if not possible, until administrator fixes the problem with App registration';
               }
               if (errcode=='resource is required') {
                  msgpart='The application is not providing resource to ADAL call. The application developers should fix the code';
               } else if (errcode=='invalid_resource') {
                  msgpart='The application is trying to use invalid resource "'+resource+'". The resource, if it exists, has not been configured in the tenant';
               } else if (errcode=='unsupported_response_type') {
                  msgpart='The application authentication setting must be adjusted to support implicit flow';
               } else if (errcode=='interaction_required') {
                  if (dologin) {
                     msgpart='Detected possible ADAL login recursion after redirecting you to the login-page in order to sign-out from non-desired account(s) and sign-in into the wanted one. Wait for 1 minute or close the browser and then try to access the page again. If you don\'t know how to sign-out\n';
                  } else {
                     msgpart='It might be that App registration settings are incorrect - administrative action is required.';
                     msgpart+=specmsg;
                  }
               } else if (dologin) {
                  msgpart='Detected possible ADAL login recursion after redirecting you to the login-page in order to try to solve the problem.\n';
                  msgpart+=specmsg;
               } else if (errcode=='invalid_request' || errcode=='unsupported_response_type') {
                  msgpart='This is a development error';
               } else if (errcode=='server_error' || errcode=='temporarily_unavailable') {
                  var msgpart = 'Please try again latter.\n'
                  msgpart+='A server-side error happened. If it occures many times in a row';
               } else {
                  msgpart = 'Unknown error happened';
               }
               msgpart+=' - please contact the support and send the screenshot(s) of the full content of this dialog.\n\n'
               msg=msgpart+msg;
            }
            if (!token) {
               msg = 'Token is not acquired!\n\n'+msg;
            }

            console.log(msg);
            if (dologin) {
               // Only if ADAL login is not in progress we will handle login attempt
               if (!ADAL.loginInProgress()) {
                  if (aelc==0) {
                     // here we check if adal error is reported...in the case it is we don't want to do another login because this means there were several requests failing and                     
                     if (!adalErrorReported) {
                        // user is being notified about ADAL error
                        aelc = aelc+1;
                        alert(msg);
                        writeRecursionInfo(resource,errcode,aelc);
                        ADAL.login();
                     }
                  } else {
                     if (!adalErrorReported) {
                        // user is being notified about ADAL error
                        alert(msg);
                        adalErrorReported=true;
                     }
                     // we wait for some time before resetting adal error, otherwise if this happens during initial application startup we would get several MSG alerts in a row
                     window.setTimeout(function() {
                        console.log('reseting error reported indicator (resource='+resource+', errcode='+errcode+')');
                        adalErrorReported = false;
                     }, 1500);
                     // also, adal recursion info is reseted because user already has warned
                     window.setTimeout(function() {
                        resetRecursionInfo(resource,errcode);
                     }, 15000);
                  }
               } else {
                  console.log('Doing nothing since ADAL login operation is in progress');
               }
            } else {
               if (!adalErrorReported) {
                  // user is being notified about ADAL error
                  alert(msg);
                  adalErrorReported=true;
               }
               // we wait for some time before resetting adal error, otherwise if this happens during initial application startup we would get several MSG alerts in a row
               window.setTimeout(function() {
                  console.log('reseting error reported indicator (resource='+resource+', errcode='+errcode+')');
                  adalErrorReported = false;
               }, 1500);
            }
            if (typeof adalerrorcallback !== 'undefined') {
                console.log("NOW ERROR CALLBACK WILL BE EXEC FOR res="+resource+", url="+ajaxurl+", ADALERRORCALLBACK="+adalerrorcallback);
                adalerrorcallback();
            }
            return;
        } else {
            console.log('Token for the resource "'+resource+'" is valid. Now executing function "'+getFunctionName(callbackfunc)+'" with ajax url "'+ajaxurl+'"'+(ajaxjsondata!=null ? ' and JSON data '+JSON.stringify(ajaxjsondata) : '')+'.');
        }
        if (ajaxurl==null) {
           var noaurlmsg = 'The function "'+getFunctionName(callbackfunc)+'" will not be called because URL is not provided!';
           console.log(noaurlmsg);
        } else {
           callbackfunc(token, ajaxurl, ajaxjsondata, additionalConfiguration, callbackfunc_oncsuccessfnc, callbackfunc_onfailurefnc);
        }
    });
}

