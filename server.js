
const app = require('./src/app')
const server = require('http').Server(app) //import express con ESM
const io = require('socket.io')(server)
require('./src/config/connection') //import the running database connection
require("dotenv").config();

require('./src/sockets')(io)

//create port
const PORT = process.env.PORT || 3000;
//running port
server.listen(PORT, (err) => {
  if (err) {
    console.log(`error server:${err}`);
  } else {
    console.log(`server running succesfull in port: ${PORT}`);
  }
});
