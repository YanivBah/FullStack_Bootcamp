const axios = require("axios").default;
const request = require("request");
const postmanRequest = require("postman-request");

const url = "https://api.chucknorris.io/jokes/random";

const fetchWithAxios = async () => {
  const {data} = await axios.get(url);
  console.log('\n','Using axios: ' + data.value);
}

const fetchWithRequest = async () => {
  const data = await request({url: url, json: true },(error,response, body) => {
    console.log("\n", "Using request: " + body.value);
  })
}

const fetchWithPostmanRequest = async () => {
  const data = await postmanRequest({ url: url, json: true }, (error, response, body) => {
    console.log("\n", "Using PostmanRequest: " + body.value);
  });
};

fetchWithAxios();
fetchWithRequest();
fetchWithPostmanRequest();