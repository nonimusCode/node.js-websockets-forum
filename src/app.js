const express = require("express"); //import express con ESM
const path = require('path')
const morgan = require("morgan");
const cors = require("cors"); //enable cors conecttion 


const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use(cors());

//listenig routes
app.use("/api", require("../src/router/routes_index"));
app.use(express.static(path.join(__dirname , 'public')))


module.exports = app 


