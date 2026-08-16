import express from "express";
import http from "http";
import router from "./router.ts";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(router);

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`server has started on port ${PORT}`),
);
