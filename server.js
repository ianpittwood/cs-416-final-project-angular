const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/income-inequality-project"));
app.listen(process.env.PORT || 8080);
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/income-inequality-project/index.html"));
});
