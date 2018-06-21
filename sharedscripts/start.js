


(
    function () {
        // Add here enything that needs to be executed imadiatelly
       
        formioForm.getComponent("outPatientCheckBox").on('change', checkBoxActionCallback1);
        formioForm.getComponent("dentistCheckBox").on('change', checkBoxActionCallback2);
        formioForm.getComponent("inPatientCheckBox").on('change', checkBoxActionCallback3);
        formioForm.getComponent("columns2Select").on('change', checkBoxActionCallback4);

        formioForm.getComponent("columnsSelect").on('change', searchPerformed);
        formioForm.getComponent("columnsSelect2").on('change', function (e) {
            if (e.changed && e.changed.component.key === 'columnsSelect2')
            {
                if (formioForm.submission.data["columnsSelect2"]) {

                    // First remove previous added clinic
                    try {
                        MapPlugIn.removeLocation(manualClinicLocation.lat, manualClinicLocation.lon);
                        $('.Infobox').hide();
                        document.getElementById('pushpinDetails').innerHTML = ""; // Clear location info
                    } catch (err) { }
                    
                    if (formioForm.data['columnsSelect2'] === "-") // If we choose "-" then return; (i.e. do not attemp to add new location on the map)
                    { 
                        return;
                    }
                    
                    manualClinicLocation = { lat: formioForm.submission.data["columnsSelect2"].latitude, lon: formioForm.submission.data["columnsSelect2"].longitude };
                    
                    MapPlugIn.addLocation(formioForm.submission.data["columnsSelect2"].latitude, formioForm.submission.data["columnsSelect2"].longitude, formioForm.submission.data["columnsSelect2"].name, '', formioForm.submission.data["columnsSelect2"], null, infoBoxDetails);
                    
                    // check for position and zoom of map 
                    changePositionAndZoomOnMap();
                }
            }
        });
        
        determinesWhichArraysToUse(programID);
        FillClinicsForSearch();
    }
)();





