$(document).ready(function () {
    //listen for save button clicks
    $('.saveBtn').on('click', function () {
        //get nearby values

        //save in localStorage

        //Show notificatnion that item was saved to localStorage by adding class 'show'

        //Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    })

        
    });

    function hourUpdater () {
        //get current number of hours

        // loop over time blocks ---> https:api.jquery.com/each
            //inside this loop, check if we've moved past this time. If we have, make the row grey. 
            //If it's future, make it green. If it's past, make it red. 

    }

    hourUpdater();

    //set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
