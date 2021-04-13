const http = require('http');
const fs = require('fs');

const handler = (req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(404, { "Content-type": "text/plain" });
    return res.end('Sorry, but this is not a GET method');
  }
  console.log("request ", req.url);
  if (req.url === '/') {
    const file = fs.readFileSync("./index.html");
    res.writeHead(200, {'Content-type':'text/html'});
    res.write(file);
    res.end();
  } else if (req.url === '/users') {
    const file = fs.readFileSync('./users.json');
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(file, 'utf-8');
  } else if (req.url === '/raw-html') {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<h1>Welcome</h1>");
    res.end();
  } 
  else if (req.url === "/index.css") {
    const file = fs.readFileSync("./index.css");
    res.writeHead(200, { "Content-type": "text/css" });
    res.end(file);
  } 
  else if (req.url === "/index.js") {
    const file = fs.readFileSync("./index.js");
    res.writeHead(200, { "Content-type": "text/javascript" });
    res.end(file);
  } 
  
  else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end();
  }
}

const server = http.createServer(handler);

server.listen(3000);