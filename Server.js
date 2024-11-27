//Creating a server
//Remove comments to run codes seperately
import http from "http";

//Test

/*
const server = http.createServer((request, response) => {
  response.write("Hello World"); //end the stream - ideally a framework will do this for you
  response.end();
});

*/

//Using HTML
/*
const server = http.createServer((request, response) => {
  response.setHeader("Content-Type", "text/html"); // Means the content we are inputing is an html file
  response.statusCode = 300; //Here we can re-configure the status codes
  response.end("<div> <h1> HTML HEADER TAG </h1></div>");
});
*/

//Short form
/*
const server = http.createServer((request, response) => {
  response.writeHead(300, { "Content-Type": "text/html" }); //Shorter method of writing the header and status codes
  response.end("<div> <h1> HTML HEADER TAG </h1></div>");
});
*/

//Using request
/*
const server = http.createServer((request, response) => {
  //console.log(request.url); //Page url
  //console.log(request.method); //It is a Get request

  response.writeHead(300, { "Content-Type": "text/html" }); //Shorter method of writing the header and status codes
  response.end(" <h1> HTML HEADER TAG </h1>");
}); //USING POSTMAN VS CODE EXTENSION

*/

//A mini Router
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1> Homepage</h1>");
  } else if (request.url === "/about") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1> About Page </h1>");
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });

    response.end("<h1> Not Found</h1>");
  }
});

//Now we have to listen on a port
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

//Go to your browser and search http://localhost:3000/ {which is the port number} you'll find 'hello world'

//We are now running server as script, check Guide.md
