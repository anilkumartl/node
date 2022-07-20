let http = require("http");
let emp = { name: "anil", age: 20 };
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(emp));
  })
  .listen(process.env.PORT || 5000);
