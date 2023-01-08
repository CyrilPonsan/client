require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const v1Router = require("./router/v1.router");
const { mongoConnect } = require("./services/mongo.service");
const PORT = 3000;
const app = express();

async function startServer() {
  await mongoConnect();
}

app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use("/v1", v1Router);

app.listen(PORT, () => console.log(`Serveur démarré sur le port: ${PORT}`));

startServer();
