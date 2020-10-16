const express = require("express");
const routes = require("./router");
const app = express();

app.listen(3003, () => {
    console.log("Server listening on port: 3003");
});

app.use('/', routes);