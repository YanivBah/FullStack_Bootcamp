const https = require('https');
const url = "https://api.chucknorris.io/jokes/random";

const request = https.request(url, (res) => {
  let data;
  res.on("data", (chunk) => data = chunk.toString() );

  res.on('end', () => {
    const {value} = JSON.parse(data);
    console.log(value);
  });
});

request.on('error', (err) => console.log('Oops there is an error', err));
request.end();