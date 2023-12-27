const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log("req made...", req.url);
//   console.log("req made method", req.method);
//   // ? send plat text
//   // res.setHeader("Content-type", "text/plain");
//   // res.write("hello world");

//   // ? send HTML content
//   // res.setHeader("content-type", "text/html");
//   // res.write("<head><link rel='stylesheet' href='#'></head>");
//   // res.write("<p>hello world sandeep</p>");
//   // res.write("<p>hello world sandeep again</p>");
//   // res.end();

//   // ? send HTML template
//   res.setHeader("Content-type", "text/html");
//   fs.readFile(
//     "D:/CAREER/nodeJs-notes/clients-and-servers/views/index.html",
//     (err, data) => {
//       if (err) {
//         console.log("err:", err);
//         res.end();
//       } else {
//         // ?we can also use res.end(data) in case of only on write() line
//         // res.write(data);
//         // res.end();
//       }
//     }
//   );
// });

// server.listen(3000, "localhost", () => {
//   console.log("listening for request on port number: 3000");
// });

// TODO Basic Routing Example, Status Code , Redirects
// ? Status code describe what kind of response sent to the browser
// ? 200 - ok
// ? 301 - resource moved
// ? 404 - Not Found
// ? 500 - Internal serve error

// ? Status Ranges
// ? 100 Range - Informational response
// ? 200 Range - Success codes
// ? 300 Range - codes for redirects
// ? 400 Range - user and client error codes
// ? 500 Range - server error codes

const server = http.createServer((req, res) => {
  console.log("req made...", req.url);
  console.log("req made method", req.method);

  // ? Routing Example
  let path = "D:/CAREER/nodeJs-notes/clients-and-servers/views/";
  res.setHeader("Content-type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200; //? Code for success
    path += "index.html";
    res.statusCode = 200;
  } else if (req.url === "/about") {
    res.statusCode = 301; //? Code for redirects
    path += "about.html";
  } else if (req.url === "/about-me") {
    //? Redirect Url
    res.statusCode = 301;
    res.setHeader("Location", "/about");
    res.end();
  } else {
    res.statusCode = 400; //? user and client error codes
    path += "404.html";
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("err:", err);
      res.end();
    } else {
      // ? we can also use res.end(data) in case of only on write() line
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port number: 3000");
});
