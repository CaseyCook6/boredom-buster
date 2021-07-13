document.getElementById("idea-button").addEventListener('click', function(){
  let submitterName = document.querySelector("#submit-a-form #name").value;
  let ideaConfirmation = document.querySelector("#idea-confirmation p");

  ideaConfirmation.innerText = `Thank you ${submitterName} for your idea!`;
  
});