const express = require("express");
const cors = require('cors');
const routes = require("./router");
const app = express();

app.listen(3003, () => {
    console.log("Server listening on port: 3003");
});

app.use(cors());
app.use('/', routes);