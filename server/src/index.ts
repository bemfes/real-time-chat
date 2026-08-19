import express from "express";
import http from "http";
import { Server } from "socket.io";
import router from "./router.ts";
import { addUser, getUser } from "./users.ts";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(router);

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("user is connected");

  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);
    const result = addUser({ id: socket.id, name, room });

    if ("error" in result) return callback(result.error);

    socket.join(result.room);

    socket.emit("message", {
      user: "admin",
      text: `${result.name} welcome to the romm ${result.room}`,
    });

    socket.broadcast
      .to(result.room)
      .emit("message", { user: "admin", text: `${result.name} has joined!` });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    if (!user) {
      return callback("User is not found");
    }

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("user is disconnected");
  });
});

httpServer.listen(PORT, () =>
  console.log(`server has started on port ${PORT}`),
);
