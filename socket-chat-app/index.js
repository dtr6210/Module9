const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("SERVER - a user connected");

  // Broadcast a message when a chat message is received
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);  // Emitting to all clients including the sender
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("chat message", {nick: "PEACE OUT DUDES", msg: "a user has disconnected"});
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
