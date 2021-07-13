function validateForm() {
  let name = document.querySelector("#submit-a-form #name").value;
  let idea = document.querySelector("#submit-a-form #idea").value;
  
  if (name === "" && idea === "") {
    alert("Name and Idea must be filled out.");
    return false;
  } else if (name === "") {
    alert("Name must be filled out.");
    return false;
  } else if (idea === "") {
    alert("Idea must be filled out.");
    return false;
  } else if (idea.length <= 3) {
    alert("Idea must be more than 3 characters.");
    return false;
  }
  return true;
}

document.getElementById("idea-button").addEventListener('click', function(){
  let ideaConfirmation = document.querySelector("#idea-confirmation p");
  let finish = validateForm();

  if (finish) {
    let submitterName = document.querySelector("#submit-a-form #name").value;
    ideaConfirmation.innerText = `Thank you ${submitterName} for your idea!`;
  } 
});