const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Home</title><head>');
    res.write('<body><h1>Home Page </h1></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/about') {
    
    res.write('<html>');
    res.write('<head><title>About us</title><head>');
    res.write('<body><h1>About us page </h1></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/node') {
    
    res.write('<html>');
    res.write('<head><title>Node</title><head>');
    res.write('<body><h1>Node js page </h1></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Node</title><head>');
  res.write('<body><h1>Any other url request gets redirected here</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
