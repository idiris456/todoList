import "dotenv/config";
import express from "express";
import globalRouter from "./routes/routes";

const buildServer = () => {
  const server = express();
  server.use(express.json());

  server.get("/", (req, res) => {
    res.json({ message: "Welcome to the Todo API!" });
  });
  server.use("/api/v1", globalRouter);
  return server;
};

export default buildServer;
