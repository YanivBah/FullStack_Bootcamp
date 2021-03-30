# 19.1 - Simple Fetch

Lets do a simple fetch calling the star wars api to get a specific movie. We
will be using this URL: `https://swapi.dev/api/films/1/`

1. Call the API when the component mounts on the screen.

2. Display the movies title and director.

---

# 19.2 - Countries of The World

Lets call this API end point when the component mounts to the screen.
`https://restcountries.eu/rest/v2/all` To get the list of countries of the
world.

Display all the countries in a simple list.

A user is able to filter the countries from an input.

---

# 19.3 - Alogolia API

Lets fetch some data from the Algolia API. We will be using this URL:
`https://hn.algolia.com/api/v1/search?query={YOUR QUERY}`

1. Have a default query that will be called when the component mounts to the
   screen. The default query should be “hooks”.

2. The user is able to change the query with an input field. But the api should
   only be fired once you click on a “search” button.

3. Have error handling when calling your api with try and catch.

4. Display an error message if there is an error.5. Display a spinner when
   fetching data.

---

# 19.4 - Refactor API Call

Refactor either 12.1-Chuck Norris exercises or 13.2-avatar using hooks.
