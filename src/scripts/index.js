document.getElementById("generate-idea").addEventListener('click', function(){
    Promise.all([(fetch("http://www.boredapi.com/api/activity/?price=0.0").then(response => response.json()))])
        .then(response => console.log(response));

})