document.getElementById("idea-button").addEventListener('click', function(){
  let ideaConfirmation = document.querySelector("#idea-confirmation");
  let error = validateForm(document.querySelector('#submit-a-form form'));

  if (!error) {
    let submitterName = document.querySelector("#submit-a-form #name").value;
    ideaConfirmation.querySelector('.submitterName').innerText = submitterName;
    ideaConfirmation.classList.remove('hide');
  } else {
    alert(error);
  }
});