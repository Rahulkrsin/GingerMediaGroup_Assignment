const bodyParser = require("body-parser");
const express = require("express");
const sequelize = require("sequelize");
const path = require("path");

const { PORT } = require("./config/index");
const { City, Airport } = require("../src/models");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const StartServer = async () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
  app.use("/api", require("./routes"));

  app.use(errorHandler);

  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT} 🚀🚀`);
  });
};

StartServer();
