const http = require("http");
const fs = require("fs");

let homeContent = '';
let projectContent = '';

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});
fs.readFile("registration.html", (err,registration ) => {
    if (err) {
      throw err;
    }
    registrationContent = registration;
  });
http.createServer((request, response) => {
  let url = request.url;
  response.writeHead(200, { "Content-Type": "text/html" });

  switch (url) {
    case "/project":
      response.write(projectContent);
      response.end();
      break;
    case "/registration":
      response.write(registrationContent);
      response.end();
    break;
    default:
      response.write(homeContent);
      response.end();
      break;
  }
})
.listen(3033, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log("Server is listening on port http://localhost:3033");
  }
});
