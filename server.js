var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "/dist/angular-ci-cd")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/angular-ci-cd/index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});
