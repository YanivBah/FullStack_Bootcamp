const peopleInfo = {};
let count = 0;

const fetchData = async (url = 'http://swapi.dev/api/people/') => {
  return await fetch(url);
}

const checkStatus = (response) => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
  return response.json();
}

const printPeople = async (data) => {
  console.log('Loading data');
  for (let person of data.results) {
    peopleInfo[count] = {};
    peopleInfo[count].name = person.name;
    peopleInfo[count].height = person.height;
    peopleInfo[count].hair_color = person.hair_color;
    let planet = await fetchData(person.homeworld);
    planet = await planet.json();
    peopleInfo[count].planet = planet.name;
    peopleInfo[count].population = planet.population;
    count++;
  }
  createTable();
}

fetchData()
  .then(checkStatus)
  .then(printPeople);

const createTable = () => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const tableHeader = document.createElement('td');
  tableHeader.setAttribute('colspan','5');
  tableHeader.textContent = 'Star Wars Characters';
  tr.appendChild(tableHeader);
  thead.appendChild(tr);
  const newtr = document.createElement('tr');
  const tdHead1 = document.createElement('th');
  tdHead1.textContent = 'Name';
  newtr.appendChild(tdHead1);
  const tdHead2 = document.createElement('th');
  tdHead2.textContent = 'Hair';
  newtr.appendChild(tdHead2);
  const tdHead3 = document.createElement('th');
  tdHead3.textContent = 'Height';
  newtr.appendChild(tdHead3);
  const tdHead4 = document.createElement('th');
  tdHead4.textContent = 'Planet Name';
  newtr.appendChild(tdHead4);
  const tdHead5 = document.createElement('th');
  tdHead5.textContent = 'Planet Population';
  newtr.appendChild(tdHead5);
  thead.appendChild(newtr);
  table.appendChild(thead);
  const tbody = document.createElement('tbody');

  for (const key in peopleInfo) {
    // peopleInfo[key];
    const currentTR = document.createElement('tr');
    const nameTD = document.createElement('td');
    nameTD.textContent = `${peopleInfo[key].name}`;
    currentTR.appendChild(nameTD);
    tbody.appendChild(currentTR);
    const hair_colorTD = document.createElement('td');
    hair_colorTD.textContent = `${peopleInfo[key].hair_color}`;
    currentTR.appendChild(hair_colorTD);
    tbody.appendChild(currentTR);
    const heightTD = document.createElement('td');
    heightTD.textContent = `${peopleInfo[key].height}cm`;
    currentTR.appendChild(heightTD);
    tbody.appendChild(currentTR);
    const planetTD = document.createElement('td');
    planetTD.textContent = `${peopleInfo[key].planet}`;
    currentTR.appendChild(planetTD);
    tbody.appendChild(currentTR);
    const populationTD = document.createElement('td');
    populationTD.textContent = `${peopleInfo[key].population}`;
    currentTR.appendChild(populationTD);
    tbody.appendChild(currentTR);
  }
  table.appendChild(tbody);

  document.body.appendChild(table);
}