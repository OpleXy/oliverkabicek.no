document.addEventListener("DOMContentLoaded", function ()
{
    /*input*/
    let button = document.getElementById("timelineMake");
    let title = document.getElementById("timelineTitleID");
    let startDate = document.getElementById("timelineDateInput1");
    let endDate = document.getElementById("timelineDateInput2");


    /*output*/
    let titleOut = document.getElementById("outputTitle");
    let startOut = document.getElementById("outputStart");
    let endOut = document.getElementById("outputEnd");
    let system = document.getElementById("systemError");
    let timeline = document.getElementById("timelineLine");

    const colorPickerBg = document.getElementById('colorPicker_bg');
    const colorBox = document.getElementById('colorBox');

    colorPickerBg.addEventListener('input', (event) =>
    {
        colorBox.style.backgroundColor = event.target.value;
    });


    const colorPickerLine = document.getElementById('colorPicker_line');
    const timelineLine = document.getElementById('timelineLine');

    colorPickerLine.addEventListener('input', (event) =>
    {
        timelineLine.style.backgroundColor = event.target.value;
    });

    timelineLine


    button.onclick = function ()
    {
        /*conerterer verdiene til lesbare dato verdier*/
        let startDateValue = new Date(startDate.value);
        let endDateValue = new Date(endDate.value)

        /*sier til systemet at tidslinjen ikke kan gå fra 2013 til 1940*/
        if (endDateValue < startDateValue)
        {
            system.innerHTML = "Start year must be before end year!";
        }
        else
        {
            system.innerHTML = null;
            /*lage en tidslinje*/
            titleOut.innerHTML = "Title: " + title.value;
            startOut.innerHTML = "Start: " + startDate.value;
            endOut.innerHTML = "End: " + endDate.value;

            title.readOnly = true;
            timelineDateInput1.readOnly = true;
            timelineDateInput2.readOnly = true;





            if (button.textContent === "Save Changes")
            {

                if (endDateValue < startDateValue)
                {
                    system.innerHTML = "Start year must be before end year!";
                }
                else
                    system.innerHTML = null;
                {
                    button.style.backgroundColor = "DarkOrange";
                    button.textContent = "Edit Timeline";
                    /*redigere en tidslinje*/






                }

            } else if (button.textContent === "Edit Timeline")
            {
                button.style.backgroundColor = "forestgreen";
                button.textContent = "Save Changes";
                /*redigere en tidslinje*/
                title.readOnly = false;
                timelineDateInput1.readOnly = false;
                timelineDateInput2.readOnly = false;


            } else
            {
                button.style.backgroundColor = "DarkOrange";
                button.textContent = "Edit Timeline";
                /*Neighter of the modes*/
            }
        }
    }

})
