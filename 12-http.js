const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello World to my first node webpage");
    // res.end();
  }
  if (req.url === "/about") {
    res.end("About page here is our short history");
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't find the page you are looking for</p>
  <a href="/">back home</a>
  `);
});

server.listen(3000);
