const http = require('http');
const Users = require('../users');

// create a server
http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      return res.end();
    }
    const urlParams = req.url.substr(1).split('/');
    if (urlParams[0] === 'code' && urlParams[1].match(/^[1-9][0-9][0-9]+/)) {
      res.writeHead(urlParams[1], { 'Content-Type': 'application/json' });
    }
    if (req.method === 'GET' && urlParams[0] === 'users') {
      if (urlParams[1]) {
        const user = Users.find((u) => u.Id === urlParams[1]);
        if (user) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify({ data: user }));
        } else {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify({ error: 'NOT_FOUND' }));
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ data: Users }));
      }
    } else {
      res.write('API');
    }
    return res.end();
  })
  .listen(8080); // the server object listens on port 8080
