function validateForm() {
  let name = document.querySelector("#submit-a-form #name").value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  return true;
}

document.getElementById("idea-button").addEventListener('click', function(){
  let finish = validateForm();
  if (finish) {
    let submitterName = document.querySelector("#submit-a-form #name").value;
    let ideaConfirmation = document.querySelector("#idea-confirmation p");

    ideaConfirmation.innerText = `Thank you ${submitterName} for your idea!`;
  } 
});