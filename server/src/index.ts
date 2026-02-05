import buildServer from "./app";

const server = buildServer()
const PORT = Number(process.env.PORT);
const startServer = async () => {
  try {
    new Promise<void>((resolve, reject) => {
      server.listen(
        {
          port: PORT,
          host: "0.0.0.0",
        },
        () => {
          console.log(`${new Date()}`);
          console.log(`Server run in: http://localhost:${PORT}`);
        },
      );
    });
  } catch (error) {
    console.log(
        console.log(`Server crashed: ${error}`);
        process.exit(1);
    );
  }
};
startServer();
