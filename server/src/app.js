require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const v1Router = require("./router/v1.router");
const PORT = 3000;
const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/v1", v1Router);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.listen(PORT, () => console.log(`Serveur démarré sur le port: ${PORT}`));
