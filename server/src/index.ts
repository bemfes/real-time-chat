import express from "express";
import http from "http";
import { Server } from "socket.io";
import router from "./router.ts";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(router);

const httpServer = http.createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("user is connected");
  socket.on("disconnect", () => {
    console.log("user is disconnected");
  });
});

httpServer.listen(PORT, () =>
  console.log(`server has started on port ${PORT}`),
);
