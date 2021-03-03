// https://api.github.com/users/

const fetchData = async (username) => {
  const data = await fetch(`https://api.github.com/users/${username}`);
  // if (!data.ok) throw new Error(`Status Code Error: ${response.status}`);
  if (!data.ok) {
    return errorMessage();
  } 
  // return data.json();
  const dataJSON = data.json();
  return info(dataJSON)

}

const info = async (data) => {
  const profileData = await data;
  console.log(profileData);
  let name = profileData.name;
  name === null ? name = '❌Name Not Found❌' : console.log(name);
  const avatar = profileData.avatar_url;
  const repos = profileData.public_repos;
  const followers = profileData.followers;
  const link = profileData.html_url;
  const lastUpdate = new Date(profileData.updated_at).toDateString();
  await createCard(link,name,avatar,repos,followers);
}

const createCard = async (link,name = 'not found',avatar,repos,followers) => {
  const aLink = document.createElement('a');
  aLink.href = link;
  aLink.target = '_blank';
  const card = document.createElement('div');
  card.classList.add('card');
  const h3 = document.createElement('h3');
  h3.textContent = name;
  const img = document.createElement('img');
  img.src = avatar;
  const infoDIV = document.createElement('div');
  infoDIV.classList.add('info');
  const infoHTML = `<p>Number of followers: <span>${followers}</span></p>
  <p>Number of public repos: <span>${repos}</span></p>`;
  infoDIV.innerHTML = infoHTML;
  card.appendChild(h3);
  card.appendChild(img);
  card.appendChild(infoDIV);
  aLink.appendChild(card);

  const container = document.querySelector('.container');
  container.appendChild(aLink);
}

const errorMessage = (err = '') => {
  const msg = document.querySelector('.msg');
  msg.classList.remove('hidden');
  const error = document.querySelector('.msg>p');
  error.textContent = err;
  setTimeout(() => {
    msg.classList.add('hidden');
  }, 2500)
}

// info(fetchData('yanivbah'));

const searchText = document.querySelector('input#profilesearch');
const searchButton = document.querySelector('input[type="submit"]');
searchText.focus();

const search = (e) => {
  e.preventDefault();
  const username = searchText.value;
  fetchData(username);
  // info(fetchData(username));
  searchText.value = '';
}
searchButton.addEventListener('click', search);
searchText.addEventListener('keyup', (e) => {
  e.key === 'Enter' ? search(e) : '';
});