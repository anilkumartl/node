let http = require("http");
let emp = { name: "anil", age: 20 };
http
  .createServer((req, res) => {
    res.end(JSON.stringify(emp));
  })
  .listen(process.env.PORT || 5000);
