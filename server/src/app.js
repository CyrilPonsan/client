const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const v1Router = require("./router/v1.router");
const PORT = 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/v1", v1Router);

app.listen(PORT, () => console.log(`Serveur démarré sur le port: ${PORT}`));
