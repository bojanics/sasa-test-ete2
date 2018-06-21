function loadMenus()
{
    var divTabMenu = '<div id="menuWrapper" style="display:none"><div id="tabMenu" class="tab"></div></div>'; 
    $('.overlay').after(divTabMenu);
    var divBottomMenu = '<div id="bottomMenu" class="tabbar ons-tabbar__footer ons-swiper-tabbar"></div>';
    $('#formio').after(divBottomMenu);
    var countMenu = 0;
    var topOrBottomObj;
    var tabMenu;
    var bottomMenu;
    var langTran;
    
    for(propName in menusObj)
    {
        // If object langBottomMenusObj undefined we use langTopMenusObj object for bottom menu.
        if (appConfiguration.langMenusBottomPath && langBottomMenusObj[languageSelector.currentLanguage].hasOwnProperty(propName)) 
        {
            topOrBottomObj = langBottomMenusObj[languageSelector.currentLanguage][propName];
        }
        else 
        {
            topOrBottomObj = langTopMenusObj[languageSelector.currentLanguage][propName];
        }
        
        if (countMenu === 0) 
        {
            ++countMenu;
            tabMenu = '<div class="tab-wrapper active-tab" id="' + "tab" + propName + '"> <a class="tablinks" lang-tran-menu-top="' + propName + '">'+ langTopMenusObj[languageSelector.currentLanguage][propName] +'</a></div>';
            bottomMenu = '<button id="'+ "tabBottom" + propName + '" class="tabbar-button active-tab-bottom"> <div class="tabbar-icon"> <i class="' + menusObj[propName]["icon class"] + '" aria-hidden="true"></i> </div><div class="tabbar-label" lang-tran-menu-bottom="' + propName +'"> ' + topOrBottomObj + '</div></button>';
        }
        else 
        {
            ++countMenu;
            tabMenu = '<div class="tab-wrapper" id="' + "tab" + propName + '"> <a class="tablinks" lang-tran-menu-top="' + propName +'">' + langTopMenusObj[languageSelector.currentLanguage][propName] +'</a></div>';
            bottomMenu = '<button id="'+ "tabBottom" + propName + '" class="tabbar-button"> <div class="tabbar-icon"> <i class="' + menusObj[propName]["icon class"] + '" aria-hidden="true"></i> </div><div class="tabbar-label" lang-tran-menu-bottom="' + propName +'"> ' + topOrBottomObj + '</div></button>';
        }
        
        $('#tabMenu').append(tabMenu);
        $('#bottomMenu').append(bottomMenu);
    }
   
    $("div.tab-wrapper").click(function() 
    {
        var tabMenuId = $(this).attr('id');
        openTab(tabMenuId, "top");
        $("div.tab-wrapper").removeClass('active-tab');
        $(".tabbar-button").removeClass('active-tab-bottom');
        var tabKey = tabMenuId.slice(3);
        var bMenuId = "tabBottom" + tabKey;
        $('#'+ bMenuId).addClass('active-tab-bottom'); 
        $(this).addClass('active-tab');
    });
    
    $("button.tabbar-button").click(function() 
    {
        var bottomMenuId2 = $(this).attr('id');
        openTab(bottomMenuId2, "bottom");
        $(".tabbar-button").removeClass('active-tab-bottom');
        $("div.tab-wrapper").removeClass('active-tab');
        var tabBottomKey = bottomMenuId2.slice(9);
        var tMenuId2 = "tab" + tabBottomKey;
        $('#'+ tMenuId2).addClass('active-tab');
        $(this).addClass('active-tab-bottom');
    });
}

function configureMenu() 
{
    if (appConfiguration.menusPath) 
    {
        loadMenus();
    }
}

function openTab(menuId, menuType) 
{
    if (!$('#' + menuId).hasClass("active-tab") && !$('#' + menuId).hasClass("active-tab-bottom")) 
    {
        var propertyName;
        if (menuType === "top")
        {
            propertyName = menuId.slice(3);
        }
        else if (menuType === "bottom") 
        {
            propertyName = menuId.slice(9);
        }
        eval(menusObj[propertyName]["script"]);
    }
}
