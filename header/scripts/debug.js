var debugSelector =
{    
    debugSelection: false,
    debugSwitched: false
};

/**
 * Applies changes of Debug settings
 */
function applyDebugSettingsChanges()
{
    if (debugSelector.debugSelection === true && debugSelector.debugSwitched === false)
    {
        // This will be changed when it be defined what should do with debug settings
        $("#debugSwitched").attr("debug-value", "On").html("On");
        
        TogFormViewer.debugFlag = true;
    }
    else if (debugSelector.debugSelection === false && debugSelector.debugSwitched === true)
    {
        // This will be changed when it be defined what should do with debug settings
        $("#debugSwitched").attr("debug-value", "Off").html("Off");
        
        TogFormViewer.debugFlag = false;
    }
    
    debugSelector.debugSwitched = debugSelector.debugSelection;
}

/**
 * Resets changes of Debug settings
 */
function resetDebugSettings()
{
    debugSelector.debugSelection = debugSelector.debugSwitched;
    
    // Returns checkBox to it's previous value, because "Cancel" button is pressed.
    if (debugSelector.debugSelection)
    {
        $("#debugCardCheckBox").removeClass("ms-Icon--Checkbox");
        $("#debugCardCheckBox").addClass("ms-Icon--CheckboxComposite");
    }
    else
    {
        $("#debugCardCheckBox").removeClass("ms-Icon--CheckboxComposite");
        $("#debugCardCheckBox").addClass("ms-Icon--Checkbox");
    }
}

function changeDebugSelection()
{ 
    if (debugSelector.debugSelection)
    {
        $("#debugCardCheckBox").removeClass("ms-Icon--CheckboxComposite");
        $("#debugCardCheckBox").addClass("ms-Icon--Checkbox");
        debugSelector.debugSelection = false;
    }
    else
    {
        $("#debugCardCheckBox").removeClass("ms-Icon--Checkbox");
        $("#debugCardCheckBox").addClass("ms-Icon--CheckboxComposite");
        debugSelector.debugSelection = true;
    }
}