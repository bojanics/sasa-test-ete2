var testSelector =
{    
    testSelection: false,
    testSwitched: false
};

/**
 * Applies changes of Test settings
 */
function applyTestSettingsChanges()
{
    if (testSelector.testSelection === true && testSelector.testSwitched === false)
    {
        // This will be changed when it be defined what should do with test settings
        $("#testSwitched").attr("test-value", "On").html("On");
        
        TogFormViewer.testFlag = true;
    }
    else if (testSelector.testSelection === false && testSelector.testSwitched === true)
    {
        // This will be changed when it be defined what should do with test settings
        $("#testSwitched").attr("test-value", "Off").html("Off");
        
        TogFormViewer.testFlag = false;
    }
    
    testSelector.testSwitched = testSelector.testSelection;
}

/**
 * Resets changes of Test settings
 */
function resetTestSettings()
{
    testSelector.testSelection = testSelector.testSwitched;
    
    // Returns checkBox to it's previous value, because "Cancel" button is pressed.
    if (testSelector.testSelection)
    {
        $("#testCardCheckBox").removeClass("ms-Icon--Checkbox");
        $("#testCardCheckBox").addClass("ms-Icon--CheckboxComposite");
    }
    else
    {
        $("#testCardCheckBox").removeClass("ms-Icon--CheckboxComposite");
        $("#testCardCheckBox").addClass("ms-Icon--Checkbox");
    }
}

function changeTestSelection()
{ 
    if (testSelector.testSelection)
    {
        $("#testCardCheckBox").removeClass("ms-Icon--CheckboxComposite");
        $("#testCardCheckBox").addClass("ms-Icon--Checkbox");
        testSelector.testSelection = false;
    }
    else
    {
        $("#testCardCheckBox").removeClass("ms-Icon--Checkbox");
        $("#testCardCheckBox").addClass("ms-Icon--CheckboxComposite");
        testSelector.testSelection = true;
    }
}