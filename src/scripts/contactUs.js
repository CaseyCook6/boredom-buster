document.getElementById("submit-comment-button").addEventListener('click', function(){
  let errors = validateForm(document.querySelector('#contact-us-form form'));
  let submitterName = document.querySelector("#contact-us-form #name").value;
  let thankYou = document.querySelector("#thank-you p");

  if (!errors) {
    thankYou.innerText = `Thank you ${submitterName} for your comment!`;
  } else {
    alert(errors);
  }
});