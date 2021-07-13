document.getElementById("generate-idea").addEventListener('click', function(){
    let output = document.getElementById("suggestion-output");

    Promise.all([(fetch("http://www.boredapi.com/api/activity/?price=0.0").then(response => response.json()))])
        .then(response => {
            // activity
            console.log(response[0]);
            console.log(response[0].activity);
            // type
            console.log(response[0].type);
            // participants
            console.log(response[0].participants);
 
        });

})