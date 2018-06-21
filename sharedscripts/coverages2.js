(
    function ()
    {

        // Add here enything that needs to be executed imadiatelly
		arrCoverages = [];
        FillArrayOfCoverages();
        document.getElementsByName("data[dlPrograms]")[0].parentElement.nextSibling.childNodes[0].addEventListener("keyup", function()
        {
            var query = document.getElementsByName("data[dlPrograms]")[0].parentElement.nextSibling.childNodes[0].value;
            searchCoverages(query, 10, arrCoverages);
        });
        formioForm.getComponent("dlPrograms").on('change', searchPerformed);
    }
)();


function searchPerformed(e)
{
    if (e.changed && e.changed.component.key === 'dlPrograms' && e.changed.value) {
        console.log(e);

        if (IsJsonString(e.data.dlPrograms)) {

            //var test = "{"dlPrograms":"homeCare","form\':\'../forms/insure/v1\'}";
            formioForm.submission = { "data": JSON.parse(e.data.dlPrograms) }
            //formioForm.submission = formioForm.submission;	


            /* Fill coverages to default values */
            formioForm.submission.data['dlPrograms'] = "";
            formioForm.getComponent("dlPrograms").component.data.values = [];

            FillInitialValues(programID);

            formioForm.getComponent('dlPrograms').triggerUpdate();
        }
    }
}
