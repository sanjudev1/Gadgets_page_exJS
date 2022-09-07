const express = require("express");
const app = express();
const responseFile = app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
module.exports = responseFile;
