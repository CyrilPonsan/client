const express = require("express");
const {
  httpGetClients,
  httpAddNewClient,
  httpRemoveClient,
  httpUpdateClient,
  httpGetClientById,
} = require("./clients.controller");

clientsRouter = express.Router();

clientsRouter.get("/:id", httpGetClientById);
clientsRouter.get("/", httpGetClients);
clientsRouter.post("/", httpAddNewClient);
clientsRouter.delete("/:id", httpRemoveClient);
clientsRouter.put("/:id", httpUpdateClient);

module.exports = { clientsRouter };
