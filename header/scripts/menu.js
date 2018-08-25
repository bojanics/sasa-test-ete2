var stopHidingNavTooltip = false;
var prevHoveredMenuKey = null;
var hoveredMenuKey = null;
var primaryLeftMenuHovered = false;
var menuKeyPrimaryKeyMap = [];
var stopHidingNavTooltipTopMenu = false;
var prevHoveredTopMenuKey = null;
var hoveredTopMenuKey = null;
var primaryTopMenuHovered; 

function loadMenus(update)
{
    var countSubmenu = 0;
    configureMenuKeysMap();
    
    if (TogFormViewer.getProperty("menuPosition") === "top")
    {
        for(propName in menusObj) 
        {
            if (menusObj[propName].hasOwnProperty("submenus")) 
            {
                countSubmenu++;
            }
        }

        if (countSubmenu != 0) 
        {
            var divPrimaryMenu = '<div id="primaryDiv"' + (typeof update !== 'undefined' && update ? '' : ' style="display:none"') + '  class="primary-menu-region flex-column"> <div class="flex-column"> <div id="primaryMenu" class="primary-menu-top flex-row"></div></div></div>';
            $('.overlay').after(divPrimaryMenu);
            $(".content-wrapper").addClass("top-menu");
        }
        else 
        {
            configureSimpleTopMenu(update);
        }
    }
    else if (TogFormViewer.getProperty("menuPosition") === "left")
    {
        var sideNavMenu = '<div id="menuWrapper" class="side-navigation-wrapper">'
            + '<div id="primaryMenu" class="side-navigation-itm-wrapper"></div>'
            + '<div class="side-navigation-separator"><div class="side-navigation-separator-line"></div></div>'
            + '<div id="sideNavExp" class="side-navigation-noshrink">'
                + '<div style="width: 100%"><span class="side-navigation-shrink-command-wrapper" onclick="expandOrCollapseMenu()">'
                    + '<div class="side-navigation-shrink-command">'
                        + '<span id="sideNavArrL" class="side-navigation-shrink-glyph-wrapper"><i class="ms-Icon ms-Icon--DoubleChevronLeft side-navigation-shrink-glyph"></i></span>'
                        + '<span id="sideNavArrR" class="side-navigation-shrink-glyph-wrapper hidden"><i class="ms-Icon ms-Icon--DoubleChevronRight side-navigation-shrink-glyph"></i></span>'
                    + '</div>'
                + '</span></div>'
            + '</div></div>';
        $(".content-wrapper").prepend(sideNavMenu);
        $(".content-wrapper").removeAttr("style");
        $(".content-wrapper").addClass("side-menu");
        $(".body-content").addClass("side-menu-body");
    }
    else if (TogFormViewer.getProperty("menuPosition") === "bottom")
    {
        var divBottomMenu = '<div id="bottomMenu" class="tabbar"></div>';
        $('#formio').after(divBottomMenu);
    }
    else
    {
        return;
    }

    for (propName in menusObj)
    {
        if (TogFormViewer.getProperty("menuPosition") === "top")
        {
            if (countSubmenu != 0) 
            {
                var topMenuPrimaryTitle;
                if (typeof langTopMenusObj === 'object' && Object.keys(langTopMenusObj).length !== 0 && langTopMenusObj != null && langTopMenusObj[languageSelector.currentLanguage] && langTopMenusObj[languageSelector.currentLanguage].hasOwnProperty(propName))
                {
                    topMenuPrimaryTitle = langTopMenusObj[languageSelector.currentLanguage][propName];
                }
                else
                {
                    // Use propName if we don't have translation for current language
                    topMenuPrimaryTitle = propName;
                }
                
                $('#primaryMenu').append('<div id="primaryTab'  + propName + '" aria-expanded="false" class="commandbar-primary-menu-item"> <a class="commandbar-primary-menu-link-navigation" lang-tran-menu-top="' + propName + '">' + topMenuPrimaryTitle +'</a></div>');
            }
        }
        else if (TogFormViewer.getProperty("menuPosition") === "left")
        {
            var leftMenuPrimaryTitle;
            if (typeof langLeftMenusObj === 'object' && Object.keys(langLeftMenusObj).length !== 0 && langLeftMenusObj != null && langLeftMenusObj[languageSelector.currentLanguage] && langLeftMenusObj[languageSelector.currentLanguage].hasOwnProperty(propName))
            {
                leftMenuPrimaryTitle = langLeftMenusObj[languageSelector.currentLanguage][propName];
            }
            else
            {
                // Use propName if we don't have translation for current language
                leftMenuPrimaryTitle = propName;
            }
            
            $('#primaryMenu').append('<div class="nav-wrapper" id="primaryTab' + propName + '"><a class="navlinks"><span class="navimg"><div class="navimg-wrapper"><i class="' + menusObj[propName]["icon class"] + '"></i></div></span><span class="navtitle" lang-tran-menu-left="' + propName + '">' + leftMenuPrimaryTitle + '</span></a></div>');
        }
    }

    if (TogFormViewer.getProperty("menuPosition") === "bottom")
    {
        var firstPrimaryKey;

        if (TogFormViewer.activeMenuKey) 
        {
            firstPrimaryKey = menuKeyPrimaryKeyMap[TogFormViewer.activeMenuKey];
        }
        else
        {
            firstPrimaryKey = Object.keys(menuKeyPrimaryKeyMap)[0];

            if (menusObj[firstPrimaryKey].hasOwnProperty("submenus"))
            {
                TogFormViewer.activeMenuKey = getFirstSecondaryMenuKey(firstPrimaryKey);
            }
            else 
            {
                TogFormViewer.activeMenuKey = firstPrimaryKey;
            }            
        }

        if (menusObj[firstPrimaryKey].hasOwnProperty("submenus")) 
        {
            configureBottomSecondaryMenu(firstPrimaryKey, "secondary", update);
        }
        else 
        {
            configureBottomSecondaryMenu(firstPrimaryKey, "primary", false, true);
        }
    }
    
    // Set active tab and configure submenu if exists
    if (TogFormViewer.getProperty("menuPosition") === "top") 
    {
        if (countSubmenu != 0) 
        {
            configureSecondaryMenu(update);
        
            // Set to display submenu on hover primary tab
            $("div.commandbar-primary-menu-item").hover(
            function() 
            {
                primaryTopMenuHovered = true;
                var idPrimaryTab = $(this).attr('id').slice(10);
                addSubmenuOnHover(idPrimaryTab);
                hoveredTopMenuKey = idPrimaryTab;
                $("#submenu").hover( preventHidingExtendedSubmenuTooltipTopMenu, reactivateHidingExtendedSubmenuTooltipTopMenu);
            }, hideExtendedSubmenuTooltipTopMenu);
        }
    }
    else if (TogFormViewer.getProperty("menuPosition") === "left") 
    {
        configureLeftSecondaryMenu(update);
        
        if (TogFormViewer.activeMenuKey)
        {
            // Adds a class to the currently active menu item.
            $('#primaryTab' + TogFormViewer.activeMenuKey).addClass('active-tab');
        }
        else
        {
            // Sets activeMenuKey to first element of our current menu
            TogFormViewer.activeMenuKey = Object.keys(menusObj)[0];
            
            // Adds a class to the currently active menu item.
            $('#primaryTab' + TogFormViewer.activeMenuKey).addClass('active-tab');
        }
        
        $('.nav-wrapper').hover(showExpandedNavigationTooltip, hideExtendedNavigationTooltip);
    }
    else if (TogFormViewer.getProperty("menuPosition") === "bottom")
    {
        // Adds a class to the currently active menu item.
        if (TogFormViewer.activeMenuKey)
        {
            $('#primaryTab' + TogFormViewer.activeMenuKey).addClass('active-tab-bottom'); 
        }
        else
        {
            // Sets activeMenuKey to first element of our current menu
            TogFormViewer.activeMenuKey = Object.keys(menusObj)[0];
            
            // Adds a class to the currently active menu item.
            $('#primaryTab' + TogFormViewer.activeMenuKey).addClass('active-tab-bottom');
        }
    }
    
    $("div.commandbar-primary-menu-item").click(function() 
    {
        var primaryTabPropName = $(this).attr('id').slice(10);
        evalMenuTabScript(primaryTabPropName, "primaryTab");
    });

    addTabWrapperListener(); 
}

function configureMenu(update) 
{
    $("#menuWrapper, #primaryDiv, #bottomMenu, .back-div").remove();
    $("#submenu, #extNavTooltip, #navTooltip").remove();
    $(".content-wrapper").removeClass("side-menu top-menu top-menu-with-submenu bottom-menu bottom-menu-back-button");
    $(".body-content").removeClass("side-menu-body");
    if (typeof menusObj === 'object' && Object.keys(menusObj).length !== 0 && menusObj != null && typeof langTopMenusObj === 'object' && Object.keys(langTopMenusObj).length !== 0 && langTopMenusObj != null) 
    {
        loadMenus(update);
    }
}

function updateMenu()
{
    configureMenu(true);
}

function openTab(menuId) 
{
    if (!$('#' + menuId).hasClass("active-tab") && !$('#' + menuId).hasClass("active-tab-bottom")) 
    {
        var propertyName = menuId.slice(10);
        eval(menusObj[propertyName]["script"]);
    }
}

function showNavigationTooltip(event)
{
    var navWrapper = event.currentTarget;
    if (navWrapper)
    {
        if (navWrapper.classList.contains("active-tab") || navWrapper.classList.contains("sub-nav") || navWrapper.classList.contains("displayed-primary-nav"))
        {
            var navTitles = navWrapper.getElementsByClassName("navtitle");
            if (navTitles && navTitles.length === 1)
            {
                var title = navTitles[0].innerHTML;
                var wrapperPos = navWrapper.getBoundingClientRect();
                var tooltip = '<div class="tooltip fade right in" role="tooltip" id="navTooltip" style="top: '
                    + (wrapperPos.top + 12) + 'px; left: 48px; display: block;"><div class="tooltip-arrow" style="top: 50%;"></div><div class="tooltip-inner">'
                    + title + '</div></div>';
                $(".body-content").append(tooltip);
            }
        }
        else
        {
            hoveredMenuKey = navWrapper.id.substring(10);
            if (prevHoveredMenuKey === hoveredMenuKey)
            {
                return;
            }
            
            if (hoveredMenuKey && menusObj.hasOwnProperty(hoveredMenuKey))
            {
                primaryLeftMenuHovered = true;
            }
            
            $("#extNavTooltip").remove();
            if (menusObj.hasOwnProperty(hoveredMenuKey) && menusObj[hoveredMenuKey].hasOwnProperty("submenus"))
            {
                var wrapperPos = navWrapper.getBoundingClientRect();
                var submenu = '<div id="extNavTooltip" class="nav-tooltip-wrapper" style="left: 47px; top: ' + wrapperPos.top + 'px;"><div class="nav-tooltip-inner-wrapper"><div class="nav-tooltip-list-wrapper"><div class="nav-tooltip-list-inner-wrapper">';
                submenu += '<ul class="nav-tooltip-list">';
                submenu += '<li class="nav-tooltip-list-item unclickable"><div style="width: 100%"><a class="nav-tooltip-list-link main-title"><div class="nav-tooltip-list-link-inner-wrapper">';
                submenu += '<span class="nav-tooltip-list-item-title main-title">';
                submenu += $(navWrapper).find('.navtitle').html();
                submenu += '</span></div></a></div></li>';
                var submenuItems = menusObj[hoveredMenuKey]["submenus"];
                if (submenuItems)
                {
                    for (propName in submenuItems)
                    {
                        var topTitle;
                        if (langTopMenusObj[languageSelector.currentLanguage] && langTopMenusObj[languageSelector.currentLanguage].hasOwnProperty(propName))
                        {
                            topTitle = langTopMenusObj[languageSelector.currentLanguage][propName];
                        }
                        else
                        {
                            topTitle = propName;
                        }
                        
                        submenu += '<li id="tooltipSubmenu' + propName + '" class="nav-tooltip-list-item"><div style="width: 100%"><a class="nav-tooltip-list-link"><div class="nav-tooltip-list-link-inner-wrapper">';
                        submenu += '<i class="';
                        submenu += submenuItems[propName]["icon class"];
                        submenu += ' nav-tooltip-list-item-img"></i>';
                        submenu += '<span class="nav-tooltip-list-item-title">';
                        submenu += topTitle;
                        submenu += '</span></div></a></div></li>';
                    }
                }
                
                submenu += '</ul>';
                submenu += '</div></div></div></div>';
                $(".body-content").append(submenu);
                $("ul.nav-tooltip-list li").click(function() 
                {
                    var dropdownSubmenuId = $(this).attr('id').slice(14);
                    evalLeftSubMenuOnHover(dropdownSubmenuId);
                });
                $(".unclickable").unbind("click");
                $("#extNavTooltip").hover(preventHidingExtendedNavigationTooltip, reactivateHidingExtendedNavigationTooltip);
            }
        }
    }
}

function hideNavigationTooltip(event)
{
    $("#navTooltip").remove();
    hideExtendedNavigationTooltip(event);
}

function showExpandedNavigationTooltip(event)
{
    var navWrapper = event.currentTarget;
    if (navWrapper)
    {
        hoveredMenuKey = navWrapper.id.substring(10);
        if (prevHoveredMenuKey === hoveredMenuKey)
        {
            return;
        }
        
        if (navWrapper.classList.contains("active-tab"))
        {
            return;
        }
        
        if (hoveredMenuKey && menusObj.hasOwnProperty(hoveredMenuKey))
        {
            primaryLeftMenuHovered = true;
        }
        
        $("#extNavTooltip").remove();
        if (menusObj.hasOwnProperty(hoveredMenuKey) && menusObj[hoveredMenuKey].hasOwnProperty("submenus") && !navWrapper.classList.contains("displayed-primary-nav"))
        {
            var wrapperPos = navWrapper.getBoundingClientRect();
            var submenu = '<div id="extNavTooltip" class="nav-tooltip-wrapper" style="left: 259px; top: ' + wrapperPos.top + 'px;"><div class="nav-tooltip-inner-wrapper"><div class="nav-tooltip-list-wrapper"><div class="nav-tooltip-list-inner-wrapper">';
            submenu += '<ul class="nav-tooltip-list">';
            var submenuItems = menusObj[hoveredMenuKey]["submenus"];
            if (submenuItems)
            {
                for (propName in submenuItems)
                {
                    var topTitle;
                    if (langTopMenusObj[languageSelector.currentLanguage] && langTopMenusObj[languageSelector.currentLanguage].hasOwnProperty(propName))
                    {
                        topTitle = langTopMenusObj[languageSelector.currentLanguage][propName];
                    }
                    else
                    {
                        topTitle = propName;
                    }
                    
                    submenu += '<li id="tooltipSubmenu' + propName + '" class="nav-tooltip-list-item"><div style="width: 100%"><a class="nav-tooltip-list-link"><div class="nav-tooltip-list-link-inner-wrapper">';
                    submenu += '<i class="';
                    submenu += submenuItems[propName]["icon class"];
                    submenu += ' nav-tooltip-list-item-img"></i>';
                    submenu += '<span class="nav-tooltip-list-item-title">';
                    submenu += topTitle;
                    submenu += '</span></div></a></div></li>';
                }
            }
            
            submenu += '</ul>';
            submenu += '</div></div></div></div>';
            $(".body-content").append(submenu);
            $("ul.nav-tooltip-list li").click(function() 
            {
                var dropdownSubmenuId = $(this).attr('id').slice(14);
                evalLeftSubMenuOnHover(dropdownSubmenuId);
            });
            $("#extNavTooltip").hover(preventHidingExtendedNavigationTooltip, reactivateHidingExtendedNavigationTooltip);
        }
    }
}

function hideExtendedNavigationTooltip(event)
{
    var navWrapper = event.currentTarget;
    if (navWrapper)
    {
        if (navWrapper.classList.contains("active-tab"))
        {
            return;
        }
    }
    
    primaryLeftMenuHovered = false;
    setTimeout(function()
    { 
        if (!primaryLeftMenuHovered)
        {
            hoveredMenuKey = null;
        }
        
        if (!stopHidingNavTooltip)
        {
            prevHoveredMenuKey = null;
            if (!primaryLeftMenuHovered)
            {
                $("#extNavTooltip").remove();
            }
        }
    }, 100);
}

function preventHidingExtendedNavigationTooltip()
{
    stopHidingNavTooltip = true;
    prevHoveredMenuKey = hoveredMenuKey;
}

function reactivateHidingExtendedNavigationTooltip()
{
    stopHidingNavTooltip = false;
    
    setTimeout(function(oldHoveredMenuKey)
    {
        return function()
        {
            if (hoveredMenuKey == null || oldHoveredMenuKey != hoveredMenuKey)
            {
                prevHoveredMenuKey = null;
                $("#extNavTooltip").remove();
            }
        }
    }(prevHoveredMenuKey), 100);
}

function expandOrCollapseMenu()
{
    if ($("#menuWrapper").hasClass("collapsed-menu"))
    {
        expandSideMenu();
    }
    else
    {
        collapseSideMenu();
    }
}

function collapseSideMenu()
{
    $('.nav-wrapper').unbind('mouseenter mouseleave');
    $("#sideNavArrL").addClass("hidden");
    $("#sideNavArrR").removeClass("hidden");
    $(".navtitle").addClass("hidden");
    $("#menuWrapper").addClass("collapsed-menu");
    $(".nav-wrapper").hover(showNavigationTooltip, hideNavigationTooltip);
    prevHoveredMenuKey = null;
    hoveredMenuKey = null;
}

function expandSideMenu()
{
    $('.nav-wrapper').unbind('mouseenter mouseleave');
    $('.nav-wrapper').hover(showExpandedNavigationTooltip, hideExtendedNavigationTooltip);
    $("#menuWrapper").removeClass("collapsed-menu");
    $(".navtitle").removeClass("hidden");
    $("#sideNavArrR").addClass("hidden");
    $("#sideNavArrL").removeClass("hidden");
    prevHoveredMenuKey = null;
    hoveredMenuKey = null;
}

function configureSecondaryMenu(update, activeKey, levelOfMenu) 
{
    $('#menuWrapper').remove(); 
    var activePrimaryTab;
    
    if (activeKey && levelOfMenu === "primaryTab")
    {
        activePrimaryTab = activeKey;
    }
    else if (activeKey && levelOfMenu === "secondaryTab") 
    {
        activePrimaryTab = menuKeyPrimaryKeyMap[activeKey];
    }
    else if (TogFormViewer.activeMenuKey) 
    {
       activePrimaryTab = menuKeyPrimaryKeyMap[TogFormViewer.activeMenuKey]; 
    }
    else 
    {
        activePrimaryTab = Object.keys(menusObj)[0];
    }
    
    $("div.tab-wrapper").removeClass('active-tab');
    $("div.commandbar-primary-menu-item").removeClass('displayed-primary-menu');
    
    // If we have a submenu in the active primary tab, we configure the secondary menu.
    if (menusObj[activePrimaryTab].hasOwnProperty("submenus")) 
    {
        var divSecondaryMenu = '<div id="menuWrapper" ' + (typeof update !== 'undefined' && update ? '' : ' style="display:none"') + '><div id="tabMenu" class="tab"></div></div>';
        $('#primaryDiv').after(divSecondaryMenu);
        
        for (secondaryMenuPropName in menusObj[activePrimaryTab]["submenus"]) 
        {
            var secondaryMenu;
            var secondaryMenuTitle;
            
            // Use propName if we don't have translation for current language
            if (langTopMenusObj[languageSelector.currentLanguage] && langTopMenusObj[languageSelector.currentLanguage].hasOwnProperty(secondaryMenuPropName))
            {
                secondaryMenuTitle = langTopMenusObj[languageSelector.currentLanguage][secondaryMenuPropName];
            }
            else
            {
                secondaryMenuTitle = secondaryMenuPropName;
            }
            
            secondaryMenu = '<div class="tab-wrapper" id="secondaryTab' + secondaryMenuPropName + '"> <a class="tablinks" lang-tran-menu-top="' + secondaryMenuPropName + '">' + secondaryMenuTitle + '</a></div>';
            $(".content-wrapper").removeClass("top-menu");
            $(".content-wrapper").addClass("top-menu-with-submenu");
            $('#tabMenu').append(secondaryMenu);
        }

        if (activeKey && levelOfMenu === "secondaryTab")
        {
            TogFormViewer.activeMenuKey = activeKey;
        }
        else 
        {
            var submenusKeys2 = menusObj[activePrimaryTab]["submenus"];
            TogFormViewer.activeMenuKey = Object.keys(submenusKeys2)[0];
        }
        
        $('#' + 'secondaryTab' + TogFormViewer.activeMenuKey).addClass('active-tab');
        $('#' + 'primaryTab' + activePrimaryTab).addClass('displayed-primary-menu');
        addTabWrapperListener();
    }
    else 
    {
        TogFormViewer.activeMenuKey = activePrimaryTab;
        $('#' + 'primaryTab' + TogFormViewer.activeMenuKey).addClass('displayed-primary-menu');
        $(".content-wrapper").removeClass("top-menu-with-submenu");
        $(".content-wrapper").addClass("top-menu");
    }
}

function configureSimpleTopMenu(update, activeTab) 
{
    var divMenuWithoutSubmenu = '<div id="menuWrapper" ' + (typeof update !== 'undefined' && update ? '' : ' style="display:none"') + '><div id="tabMenu" class="tab"></div></div>';
    $('.overlay').after(divMenuWithoutSubmenu);
    
    for (propName in menusObj) 
    {
        var topMenu;
        var topMenuTitle;
        
        // Use propName if we don't have translation for current language
        if (langTopMenusObj[languageSelector.currentLanguage] && langTopMenusObj[languageSelector.currentLanguage].hasOwnProperty(propName))
        {
            topMenuTitle = langTopMenusObj[languageSelector.currentLanguage][propName];
        }
        else
        {
            topMenuTitle = propName;
        }
        
        topMenu = '<div class="tab-wrapper" id="topMenuTab' + propName + '"> <a class="tablinks" lang-tran-menu-top="' + propName + '">' + topMenuTitle + '</a></div>';
        $(".content-wrapper").addClass("top-menu");
        $('#tabMenu').append(topMenu);
    }

    if (activeTab)
    {
        TogFormViewer.activeMenuKey = activeTab;
    }
    else if (!TogFormViewer.activeMenuKey || !menusObj[TogFormViewer.activeMenuKey])
    {
        TogFormViewer.activeMenuKey = Object.keys(menuKeyPrimaryKeyMap)[0];
    }

    $('#topMenuTab' + TogFormViewer.activeMenuKey).addClass('active-tab');
}

function configureLeftSecondaryMenu(activeKey, levelOfMenu)
{
    var activePrimaryTab;
    
    if (activeKey && levelOfMenu === "primaryTab")
    {
        activePrimaryTab = activeKey;
    }
    else if (activeKey && levelOfMenu === "secondaryTab") 
    {
        activePrimaryTab = menuKeyPrimaryKeyMap[activeKey];
    }
    else if (TogFormViewer.activeMenuKey) 
    {
       activePrimaryTab = menuKeyPrimaryKeyMap[TogFormViewer.activeMenuKey]; 
    }
    else 
    {
        activePrimaryTab = Object.keys(menusObj)[0];
    }
    
    $('.nav-wrapper').removeClass('displayed-primary-nav');
    $('.nav-wrapper').removeClass('active-tab');
    $('.sub-nav').remove();
    
    // If we have a submenu in the active primary tab, we configure the secondary menu.
    if (menusObj[activePrimaryTab].hasOwnProperty("submenus")) 
    {
        var prevElemId = 'primaryTab' + activePrimaryTab;
        for (secondaryMenuPropName in menusObj[activePrimaryTab]["submenus"]) 
        {
            var secondaryMenuTitle;
            
            // Use propName if we don't have translation for current language
            if (typeof langLeftMenusObj === 'object' && Object.keys(langLeftMenusObj).length !== 0 && langLeftMenusObj != null
                && langLeftMenusObj[languageSelector.currentLanguage] && langLeftMenusObj[languageSelector.currentLanguage].hasOwnProperty(secondaryMenuPropName))
            {
                secondaryMenuTitle = langLeftMenusObj[languageSelector.currentLanguage][secondaryMenuPropName];
            }
            else
            {
                secondaryMenuTitle = secondaryMenuPropName;
            }
            
            var secondaryMenu = '<div class="nav-wrapper sub-nav" id="secondaryTab' + secondaryMenuPropName + '"><a class="navlinks"><span class="navimg"><div class="navimg-wrapper"><i class="' + menusObj[activePrimaryTab]["submenus"][secondaryMenuPropName]["icon class"] + '" aria-hidden="true"></i></div></span><span class="navtitle" lang-tran-menu-left="' + secondaryMenuPropName + '">' + secondaryMenuTitle + '</span></a></div>';
            $('#' + prevElemId).after(secondaryMenu);
            prevElemId = 'secondaryTab' + secondaryMenuPropName;
        }
        
        if (activeKey && levelOfMenu === "secondaryTab")
        {
            TogFormViewer.activeMenuKey = activeKey;
        }
        else 
        {
            var submenusKeys2 = menusObj[activePrimaryTab]["submenus"];
            TogFormViewer.activeMenuKey = Object.keys(submenusKeys2)[0];
        }
        
        $('#secondaryTab' + TogFormViewer.activeMenuKey).addClass('active-tab');
        $('#primaryTab' + activePrimaryTab).addClass('displayed-primary-nav');
        $("div.nav-wrapper").unbind("click");
        $("div.nav-wrapper").click(function() 
        {
            if ($(this).hasClass('sub-nav'))
            {
                var tabKey = $(this).attr('id').slice(12);
                evalLeftMenuTabScript(tabKey, "secondaryTab");
            }
            else
            {
                var tabKey = $(this).attr('id').slice(10);
                evalLeftMenuTabScript(tabKey, "primaryTab");
            }
        });
    }
}

//If primary tab has submenu we confgure dropdown submenu on hover 
function addSubmenuOnHover(idPrimary) 
{
    $('#submenu').remove();
    if (menusObj[idPrimary].hasOwnProperty("submenus")) 
    {
        var submenuDiv = '<div id="submenu"><div class="submenu-layer">';
        submenuDiv += '<div class="submenu-layer-content">';
        submenuDiv += '<div class="submenu-container">';
        submenuDiv += '<div id="divPositionOfSubmenus" class="submenu-callout">';
        submenuDiv += '<div class="submenu-callout-main">';
        submenuDiv += '<div class="submenu-list">';
        submenuDiv += '<div class="submenu-focus-zone">';
        submenuDiv += '<ul id="submenuDropDownList" class="submenu-dropdown-list"></ul>';
        submenuDiv += '</div></div></div></div></div></div></div></div>';
        $('body').append(submenuDiv);
        
        for(submenuPropName in menusObj[idPrimary]["submenus"]) 
        {
            var submenuTitle;

            // Use propName if we don't have translation for current language
            if (langTopMenusObj[languageSelector.currentLanguage] && langTopMenusObj[languageSelector.currentLanguage].hasOwnProperty(submenuPropName))
            {
                submenuTitle = langTopMenusObj[languageSelector.currentLanguage][submenuPropName];
            }
            else
            {
                submenuTitle = submenuPropName;
            }
            
            // Calculate position
            var positionOfPrimaryTab = $('#primaryTab' + idPrimary).position();
            var submenuTab = '<li id="dropdownSubmenu' + submenuPropName + '" class="submenu-item"><div>';
            submenuTab += '<a name="' + submenuPropName + '" class="submenu-link" aria-disabled="false">';
            submenuTab += '<div><span lang-tran-menu-top="' + submenuPropName +'">' + submenuTitle + '</span></div>';
            submenuTab += '</a></div></li>';
            $('#submenuDropDownList').append(submenuTab);
            $('#divPositionOfSubmenus').css("left", positionOfPrimaryTab.left);
        }
        
        $('#submenu').show();
        
        $("ul.submenu-dropdown-list li").click(function() 
        {
            var dropdownSubmenuId = $(this).attr('id').slice(15);
            evalSubMenuOnHover(dropdownSubmenuId);
            configureSecondaryMenu(true, dropdownSubmenuId, "secondaryTab");
        });
    }
}

function evalSubMenuOnHover(subMenuId) 
{
    evalMenuTabScript(subMenuId, "secondaryTab");
    $('#primaryTab' + menuKeyPrimaryKeyMap[subMenuId]).addClass('displayed-primary-menu');
}

function evalMenuTabScript(menuId, menuType) 
{
    var firstSubKey;

    if (menusObj[menuId] && menusObj[menuId].hasOwnProperty("submenus"))
    {
        firstSubKey = getFirstSecondaryMenuKey(menuId);
    }

    if (menuType === "primaryTab" && !$('#' + menuType + menuId).hasClass("displayed-primary-menu")) 
    {
        configureSecondaryMenu(true, menuId, menuType);
        
        if (menusObj[menuId].hasOwnProperty("submenus")) 
        {
            eval(menusObj[menuId]["submenus"][firstSubKey]["script"]);
        }
        else 
        {
            eval(menusObj[menuId]["script"]);
        }
    }
    else if (menuType === "secondaryTab" && !$('#' + menuType + menuId).hasClass("active-tab")) 
    {
        $("div.tab-wrapper").removeClass('active-tab');
        eval(menusObj[menuKeyPrimaryKeyMap[menuId]]["submenus"][menuId]["script"]);
        $('#' + menuType + menuId).addClass('active-tab');
        TogFormViewer.activeMenuKey = menuId;
    }
    else if (menuType === "topMenuTab" && !$('#' + menuType + menuId).hasClass("active-tab"))
    {
        $("div.tab-wrapper").removeClass('active-tab');
        eval(menusObj[menuId]["script"]);
        $('#' + menuType + menuId).addClass('active-tab');
        TogFormViewer.activeMenuKey = menuId;
    }
    else if (menuType === "tabBottom" && !$('#' + menuType + menuId).hasClass("active-tab-bottom")) 
    {
        $(".tabbar-button").removeClass('active-tab-bottom');
        
        if(menusObj[menuId])
        {
            if (menusObj[menuId].hasOwnProperty("submenus")) 
            {
                eval(menusObj[menuId]["submenus"][firstSubKey]["script"]);
            }
            else 
            {
                eval(menusObj[menuId]["script"]);
            }
        }
        else
        {
            eval(menusObj[menuKeyPrimaryKeyMap[menuId]]["submenus"][menuId]["script"]);
        }
    }
}

function evalLeftSubMenuOnHover(subMenuId) 
{
    evalLeftMenuTabScript(subMenuId, "secondaryTab");
}

function evalLeftMenuTabScript(menuId, menuType) 
{
    if (menuType === "primaryTab" && !$('#' + menuType + menuId).hasClass("displayed-primary-nav")) 
    {
        if (menusObj[menuId].hasOwnProperty("submenus")) 
        {
            var subKeys = menusObj[menuId]["submenus"];
            var firstSubKey = Object.keys(subKeys)[0];
            eval(menusObj[menuId]["submenus"][firstSubKey]["script"]);
            configureLeftSecondaryMenu(firstSubKey, "secondaryTab");
            TogFormViewer.activeMenuKey = firstSubKey;
        }
        else 
        {
            $("div.nav-wrapper").removeClass('active-tab');
            $('.nav-wrapper').removeClass('displayed-primary-nav');
            $('.sub-nav').remove();
            $('#' + menuType + menuId).addClass('active-tab');
            eval(menusObj[menuId]["script"]);
            TogFormViewer.activeMenuKey = menuId;
        }
    }
    else if (menuType === "secondaryTab" && !$('#' + menuType + menuId).hasClass("active-tab")) 
    {
        eval(menusObj[menuKeyPrimaryKeyMap[menuId]]["submenus"][menuId]["script"]);
        TogFormViewer.activeMenuKey = menuId;
        configureLeftSecondaryMenu(menuId, "secondaryTab");
    }
}

function configureMenuKeysMap() 
{
    for (k in menusObj) 
    {
        if (!menusObj[k].hasOwnProperty("submenus")) 
        {
           menuKeyPrimaryKeyMap[k] = k; 
        }
        else 
        {
            for (x in menusObj[k]["submenus"]) 
            {
                menuKeyPrimaryKeyMap[k] = k; 
                menuKeyPrimaryKeyMap[x] = k;
            }
        }
    }
}

function preventHidingExtendedSubmenuTooltipTopMenu()
{
    stopHidingNavTooltipTopMenu = true;
    prevHoveredTopMenuKey = hoveredTopMenuKey;
}

function reactivateHidingExtendedSubmenuTooltipTopMenu()
{
    stopHidingNavTooltipTopMenu = false;
    primaryTopMenuHovered = false;
    
    setTimeout(function(oldHoveredMenuKey)
    {
        return function()
        {
            if (hoveredTopMenuKey == null || oldHoveredMenuKey != hoveredTopMenuKey)
            {
                prevHoveredTopMenuKey = null;
                
                if (primaryTopMenuHovered === false) 
                {
                    $("#submenu").remove();
                }
            }
        }
    }(prevHoveredTopMenuKey), 100);
}

function hideExtendedSubmenuTooltipTopMenu()
{
    primaryTopMenuHovered = false;
    
    setTimeout(function()
    { 
        hoveredTopMenuKey = null;
        if (!stopHidingNavTooltipTopMenu)
        {
            prevHoveredTopMenuKey = null;
            
            if (primaryTopMenuHovered === false) 
            {
                $("#submenu").remove();
            }
        }
    }, 100);
}

function configureBottomSecondaryMenu(primaryTab, levelOfBottomMenu, backButton, primaryMenuCreate) 
{
    if ((menusObj[primaryTab] && menusObj[primaryTab].hasOwnProperty("submenus")) || primaryMenuCreate === true) 
    {
        $('#bottomMenu').empty();
        $('.back-div').remove();
        var menuObject;

        if (levelOfBottomMenu === "primary")
        {
            menuObject = menusObj;
        }
        else if (levelOfBottomMenu === "secondary")
        {
            menuObject = menusObj[primaryTab]["submenus"];
        }

        for (propName in menuObject)
        {
            var bottomMenuTitle;
            var bottomMenuButton;

            // If object langBottomMenusObj undefined we use langTopMenusObj object for bottom menu.
            if (typeof langBottomMenusObj === 'object' && Object.keys(langBottomMenusObj).length !== 0 && langBottomMenusObj != null && langBottomMenusObj[languageSelector.currentLanguage] && langBottomMenusObj[languageSelector.currentLanguage].hasOwnProperty(propName)) 
            {
                bottomMenuTitle = langBottomMenusObj[languageSelector.currentLanguage][propName];
            }
            else 
            {
                if (langTopMenusObj[languageSelector.currentLanguage] && langTopMenusObj[languageSelector.currentLanguage].hasOwnProperty(propName)) 
                {
                    bottomMenuTitle = langTopMenusObj[languageSelector.currentLanguage][propName];
                }
                else
                {
                    bottomMenuTitle = propName;
                }
            }
            
            bottomMenuButton = '<button id="'+ "tabBottom" + propName + '" class="tabbar-button"> <div class="tabbar-icon"> <i class="' + menuObject[propName]["icon class"] + '" aria-hidden="true"></i> </div><div class="tabbar-label" lang-tran-menu-bottom="' + propName + '"> ' + bottomMenuTitle + '</div></button>';
    
            $('#bottomMenu').append(bottomMenuButton);
        }

        if (levelOfBottomMenu === "secondary") 
        {
            var backButtonTitle;

            if (typeof langBottomMenusObj === 'object' && Object.keys(langBottomMenusObj).length !== 0 && langBottomMenusObj != null && langBottomMenusObj[languageSelector.currentLanguage] && langBottomMenusObj[languageSelector.currentLanguage].hasOwnProperty(primaryTab)) 
            {
                backButtonTitle = langBottomMenusObj[languageSelector.currentLanguage][primaryTab];
            }
            else 
            {
                backButtonTitle = primaryTab;
            }

            var backButtonDiv = '<div class="back-div"' + (typeof backButton !== 'undefined' && backButton ? '' : ' style="display:none"') + '> <div class="back-button" id="backButton' + primaryTab +'">';
            backButtonDiv += '<i class="ms-Icon ms-Icon--ChevronLeft back-icon" aria-hidden="true"></i>';
            backButtonDiv += '<p class="back-title" lang-tran-menu-top="' + primaryTab + '">' + backButtonTitle + '';
            backButtonDiv += '</p></div></div>';
            $('.overlay').after(backButtonDiv);
            $(".content-wrapper").removeClass("bottom-menu");
            $('.content-wrapper').addClass('bottom-menu-back-button');
            addBackButtonListener(); 
        }
        else 
        {
            $('.content-wrapper').removeClass('bottom-menu-back-button');
            $(".content-wrapper").addClass("bottom-menu");
        }

        addTabbarListener();
    }
    else 
    {
        TogFormViewer.activeMenuKey = primaryTab; 
    }

    $('#tabBottom' + TogFormViewer.activeMenuKey).addClass('active-tab-bottom');

    if (!$('#userMenuOverlay').hasClass('header-hidden-element'))
    {
        $('#bottomMenu').addClass('shrink');
    }
    else 
    {
        $('#bottomMenu').removeClass('shrink');
    }
}

function addTabbarListener() 
{
    $("button.tabbar-button").click(function()
    {
        var bottomMenuId2 = $(this).attr('id').slice(9);

        if ((menusObj[bottomMenuId2] && !menusObj[bottomMenuId2].hasOwnProperty("submenus")) || !menusObj[bottomMenuId2])
        {
            evalMenuTabScript(bottomMenuId2, "tabBottom");
        }
        
        configureBottomSecondaryMenu(bottomMenuId2, "secondary", true);
    });
}

function addTabWrapperListener() 
{
    $("div.tab-wrapper").click(function()
    {
        var tabPropName;

        if ($(this).attr('id').substring( 0, 12) === "secondaryTab") 
        {
            tabPropName = $(this).attr('id').slice(12);
            evalMenuTabScript(tabPropName, "secondaryTab");
        }
        else 
        {
            tabPropName = $(this).attr('id').slice(10);
            evalMenuTabScript(tabPropName, "topMenuTab");
        }
    });
}

function addBackButtonListener() 
{
    $('.back-button').click(function()
    {
        var bottomPrimaryMenuId = $(this).attr('id').slice(10);
        $('.back-div').remove();
        configureBottomSecondaryMenu (bottomPrimaryMenuId, "primary");
    });
}

function getFirstSecondaryMenuKey(primaryKey) 
{
    var subKeys = menusObj[primaryKey]["submenus"];
    var firstSubKey = Object.keys(subKeys)[0];
    return firstSubKey;
}