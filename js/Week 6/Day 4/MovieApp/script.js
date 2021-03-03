const APIKey = '81981c10';
const API = 'http://www.omdbapi.com/';
// https://www.omdbapi.com/?i=tt3896198&apikey=81981c10
// http://www.omdbapi.com/?t=Guardians+of+the+Galaxy
// http://www.omdbapi.com/?t=Guardians+of+the+Galaxy&y=2014&plot=full

const fetchData = async (name,year = '') => {
  const movieName = `?t=${name.replaceAll(' ', '+')}`;
  let movieYear = '';
  year !== '' ? movieYear = `&y=${year}` : '';
  const link = `http://www.omdbapi.com/${movieName}${movieYear}&plot=full&apikey=${APIKey}`;
  const data = await fetch(link);
  const dataJSON = await data.json();
  if (dataJSON.hasOwnProperty('Error')) {
    return console.log('Sorry');
  }
  return createElements(dataJSON);
}

const createElements = async (data) => {
  const movieData = await data;
  const title = movieData.Title;
  const year = movieData.Year;
  const genre = movieData.Genre;
  const imdbRating = movieData.imdbRating;
  let rating = `<div class="rating-imdb">
            <img src="./img/imdb.jfif" alt="IMDB" width="55px" height="30px" />
            <p>${imdbRating}/10</p>
          </div>`;
  if (movieData.Ratings !== undefined) {
    if (movieData.Ratings.length > 1) {
    rating += `<div class="rating-rotten">
            <img src="./img/rotten.png" alt="Rotten Tomatoes" width="30px" height="30px"/>
            <p>${movieData.Ratings[1].Value}</p>
          </div>`
    }
    if (movieData.Ratings.length > 2) {
      rating += `<div class="rating-metacritic">
            <img src="./img/Metacritic.png" alt="Metacritic" width="30px" height="30px"/>
            <p>${movieData.Ratings[2].Value}</p>
          </div>`
    }
  }
  
  const poster = movieData.Poster;
  const actors = movieData.Actors;
  const director = movieData.Director;
  const plot = movieData.Plot;

  const elements = `
  <div class="header">
        <h2>${title} (${year})</h2>
        <p>${genre}</p>
        <div class="rating">
          ${rating}
        </div>
      </div>
      <img src="${poster}" alt="${title} Poster"/>
      <div class="info">
        <div class="meta">
          <div>
          <span class="title">Actors</span>
          <p>${actors}</p>
          </div>
          <div>
          
          <span class="title">Director</span>
          <p>${director}</p>
          </div>
        </div>
        <p class="plot">${plot}</p>
      </div>
  `

  const container = document.querySelector('.container');
  container.innerHTML = elements;
  // container.textContent = elements;
  console.log(movieData);
}

const movieNameSearch = document.querySelector('[type="text"]#moviename');
const movieYearSearch = document.querySelector('[type="number"]#year');
const search = document.querySelector('[type="submit"]');
search.addEventListener('click', (e) => {
  const movieNameText = movieNameSearch.value;
  const movieYearText = movieYearSearch.value;
  movieNameSearch.value = '';
  movieYearSearch.value = '';
  fetchData(movieNameText,movieYearText);
})