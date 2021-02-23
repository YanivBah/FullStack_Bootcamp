// Change text
const li = document.querySelector(".start-here");
li.textContent = "main title";

// Add new sub title
const sub = document.createElement('li');
sub.textContent = "sub title 4";
const subList = li.nextElementSibling.firstElementChild;
subList.appendChild(sub);

// Remove last <li> element
li.parentElement.lastElementChild.remove();

// Change title
li.parentElement.firstElementChild.textContent = 'Master Of The Dom'

// Change text of <p> element
document.querySelector('p').textContent = "I want to sleep ZzZzZzZzZzZ"