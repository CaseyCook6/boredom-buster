document.getElementById("submit-comment-button").addEventListener('click', function(){
    let submitterName = document.querySelector("#contact-us-form #name").value;
    let thankYou = document.querySelector("#thank-you p");
  
    thankYou.innerText = `Thank you ${submitterName} for your comment!`;
    
  });