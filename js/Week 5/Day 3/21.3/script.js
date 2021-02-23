const users = [
{
id: 167464,
firstName: "Jimmy",
lastName: "Arnold",
email: "jimmya@gmail.com",
},
{
id: 578447,
firstName: "Martha",
lastName: "Goldman",
email: "gold@hotmail.com",
},
{
id: 864578,
firstName: "Tim",
lastName: "Burton",
email: "timmy.hotmail.com",
},
];
const ol = document.createElement('ol');
document.body.appendChild(ol);
users.forEach(el => {
  const li = document.createElement('li');
  li.innerText = `${el.firstName} ${el.lastName}`;
  li.setAttribute('data-id', el.id);
  ol.appendChild(li);
})
ol.style.listStyleType = 'none';