import express from "express";
import http from "http";

const PORT = process.env.PORT || 3000;

const app = express();

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`server has started on port ${PORT}`),
);
