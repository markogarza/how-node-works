const EventEmmiter = require("events");
const http = require("http");

class Sales extends EventEmmiter {
  constructor() {
    super();
  }
}

const myEmmiter = new Sales();

myEmmiter.on("newSale", () => {
  console.log("There is a new sale");
});

myEmmiter.on("newSale", () => {
  console.log("Customer name: Marco");
});

myEmmiter.on("newSale", (stock) => {
  console.log(`There are ${stock} items in stock`);
});

myEmmiter.emit("newSale", 9);

///////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received!");
  console.log(req.url);
  res.end("request received");
});

server.on("request", (req, res) => {
  console.log("Another request received");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", (req, res) => {
  console.log("Waiting for requests...");
});
