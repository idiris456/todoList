import express from "express";

const buildServer = () => {
  const server = express();
  server.use(express.json());

  server.get("/", (req, res) => {
    res.json({ message: "Welcome to the Todo API!" });
  });

  return server;
};
