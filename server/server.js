const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socket = require("socket.io");
// const io = socket(server);
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


const connection = require("./app/Models/database");
// require user the route
const user = require("./app/routes/user");
// require the doctor route
const doctor = require("./app/routes/doctor");

// require the question route
const questions = require("./app/routes/questions.js");



app.use(cors());
// set the port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// define the user router
app.use("/users", user);
app.use("/doctor", doctor);
app.use("/questions", questions);

app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    //Handle SyntaxError here.
    return res.status(500).send({ data: "Invalid data" });
  } else {
    next();
  }
});

app.get("/", function (req, res) {
  res.send("Home Page");
});


const peers = {};

io.on('connection', socket => {  // listen to 'connection' event comes from the client
  if(!peers[socket.id]) {
    peers[socket.id] = socket.id
  }
  
  socket.emit('yourID', socket.id);//  allows you to emit custom events on the server and client
  console.log(socket.id) 

io.sockets.emit('allUsers', peers); 
console.log(peers)//will send to all the clients ......socket.broadcast.emit will send the message to all the other clients except the newly created connection

socket.on('disconnect', () => {
  delete peers[socket.id];         //after the user leave the room
})

socket.on('callUser', (data) => {
  // console.log(data)
  io.to(data.userToCall).emit('hello', {signal: data.signalData, from: data.from}); //io.to('some room').emit('some event');
})

socket.on('acceptCall', (data) => {
 // console.log(data)
  io.to(data.to).emit('callAccepted', data.signal)
})

});

server.listen(port, () => {
  console.log(`Server is Running in port:http://localhost:${port}`);
});

