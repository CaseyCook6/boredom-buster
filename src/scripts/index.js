document.getElementById("generate-idea").addEventListener('click', function(){
    let output = document.querySelector("#suggestion-output > p");
    // output.innerText = " ";

    Promise.all([(fetch("http://www.boredapi.com/api/activity/?price=0.0").then(response => response.json()))])
        .then(response => {
            output.innerText = response[0].activity + response[0].type + response[0].participants; 
        });
})