function validateForm() {
  let name = document.querySelector("#contact-us-form #name").value;
  let comment = document.querySelector("#contact-us-form #comment").value;
  
  if (name === "" && comment === "") {
    alert("Name and Comment must be filled out.");
    return false;
  } else if (name === "") {
    alert("Name must be filled out.");
    return false;
  } else if (comment === "") {
    alert("Comment must be filled out.");
    return false;
  } else if (comment.length <= 3) {
    alert("Comment must be more than 3 characters.");
    return false;
  }
  return true;
}


document.getElementById("submit-comment-button").addEventListener('click', function(){
  let finish = validateForm();
    let submitterName = document.querySelector("#contact-us-form #name").value;
    let thankYou = document.querySelector("#thank-you p");

    if (finish) {
      thankYou.innerText = `Thank you ${submitterName} for your comment!`;
    }   
  });