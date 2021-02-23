// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = document.createElement('ul');
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const li1 = document.createElement('li');
li1.innerText = "one";
const li2 = document.createElement('li');
li2.innerText = "two";
const li3 = document.createElement('li');
li3.innerText = "three";
div.appendChild(li1);
div.appendChild(li2);
div.appendChild(li3);
// create an image
const img = document.createElement('img');

// set the source to an image
img.src = "https://source.unsplash.com/random";
// set the width to 250
img.width = 250;
// add a class of cute
img.classList.add('cute');
// add an alt of Cute Puppy
img.alt = "Cute Puppy";
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const htmlString = `<div>
<p>1</p>
<p>2</p>
</div>
`;
div.insertAdjacentHTML("afterbegin", htmlString);
// add a class to the second paragraph called warning
const secondParagraph = div.firstElementChild.lastElementChild;
// remove the first paragraph
div.firstElementChild.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const generatePlayerCard = (name,age,height) => {
  const html = `<div class="playerCard">
  <h2>${name} - ${age}</h2>
  <p>He is ${height}cm and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
  </div>
  `
  return html
}

// make a new div with a class of cards
const div2 = document.createElement('div');
div2.classList.add('cards');
// make 4 player cards using generatePlayerCard
const card1 = generatePlayerCard('Thomas',21,184);
const card2 = generatePlayerCard('Lily',19,165);
const card3 = generatePlayerCard('Daniel',25,172);
const card4 = generatePlayerCard('Greta',17,157);
// append those cards to the div
div2.insertAdjacentHTML("afterbegin",card4);
div2.insertAdjacentHTML("afterbegin",card3);
div2.insertAdjacentHTML("afterbegin",card2);
div2.insertAdjacentHTML("afterbegin",card1);
// put the div into the DOM just before the wrapper element
// div.appendChild(div2);
// div.insertAdjacentElement("beforebegin", div2);
div.insertAdjacentElement("afterbegin", div2);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
const buttonStr = `<button>&times; Delete</button>`
const cards = document.querySelectorAll('.playerCard');
cards.forEach(el => el.insertAdjacentHTML("beforeend",buttonStr));
const buttons = document.querySelectorAll('button');
buttons.forEach(el => {
  el.addEventListener('click', (event) => {
    event.currentTarget.parentElement.remove();
  })
})
