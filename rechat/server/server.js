// console.log('hello this is the first time');

// use "nodemon server" which will restart the program with every change saved
// while use "node", the server has to be restarted everytime a change is made

// to use other packages please install "npm init" --> package.json --> will keep track dependencies

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // res.write('index.js')
  // res.end('basic structure\n')
  let path = './views';
  switch (req.url){ //reroute 
    case '/':
      path += 'index.html';
      res.statusCode = 200; // tell the browser that everything is ok
      break;
    case '/redi': //redirect
      path += 'index.html';
      res.statusCode = 301; 
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404; // tell the browser that everything is not ok
      break;
  };
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log('err');
      res.end();
    }else {
      res.end(data);
    }
  });
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});


