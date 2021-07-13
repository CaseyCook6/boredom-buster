document.getElementById("generate-idea").addEventListener('click', function(){
    let outputActivity = document.querySelector("#suggestion-output .activity span");
    let outputParticipants = document.querySelector("#suggestion-output .participants span");
    let outputActivityType = document.querySelector("#suggestion-output .activity-type span");

    //use promise.all to make mutli-call expansion easier
    Promise.all([(fetch("http://www.boredapi.com/api/activity/?price=0.0").then(response => response.json()))])
        .then(response => {
            outputActivity.innerText = response[0].activity;
            outputParticipants.innerText = response[0].participants;
            outputActivityType.innerText = response[0].type;
        });
})