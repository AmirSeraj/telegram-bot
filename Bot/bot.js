const express = require("express")
const app = express()
const cors = require("cors");
const { Console } = require("console");
const http = require('http').Server(app);
const PORT = 8000
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.use(cors())
let users = []

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)  
    socket.on("id", data => {
      socketIO.emit("idResponse", data)
      console.log("userId:", data)
    })

    socket.on("tap", data => {
      socketIO.emit("tap", data.level);
      console.log(data)
    }
    )

    socket.on("submit", data => {
      socketIO.emit("submitted");
      console.log(data)
    }
    )

    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
      users = users.filter(user => user.socketID !== socket.id)
      socketIO.emit("newUserResponse", users)
      socket.disconnect()
    });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
