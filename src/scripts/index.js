const currentDate = new Date();
document.querySelector("footer p").innerText = "\251"+` Boredom Busters, LLC ${currentDate.getFullYear()}`;

// joins with commas but adds "and" for the last element
// https://stackoverflow.com/a/49289042/984078
function prettyJoin(arr) {
  return arr
    .join(', ')
    .replace(/, ([^,]*)$/, `${arr.length > 2 ? ',': ''} and $1`);
}

function validateForm(form) {
  let invalids = [];

  for(let elm of form.querySelectorAll('input, textarea')) {
    if(!elm.value) invalids.push(elm.name);
  }

  if(invalids.length) {
    return `The following fields are required: ${prettyJoin(invalids)}`;
  }

  return '';
}