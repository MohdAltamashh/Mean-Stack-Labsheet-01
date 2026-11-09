const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/slow") {
    const end = Date.now() + 5000;
    while (Date.now() < end) {} // Deliberate blocking loop for this practical only.
    res.end("Slow route finished after blocking the event loop.");
  } else if (req.url === "/fast") {
    res.end("Fast route response.");
  } else {
    res.end("Open /fast or /slow");
  }
});
server.listen(3000, () => console.log("Server: http://localhost:3000"));
