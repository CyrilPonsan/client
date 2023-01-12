const {
  addNewClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
} = require("../../models/client.model");

async function httpGetClients(req, res) {
  const clients = await getAllClients();
  return res.status(200).json(clients);
}

async function httpGetClientById(req, res) {
  const clientId = +req.params.id;
  const client = await getClientById(clientId);
  return res.status(200).json(client);
}

async function httpAddNewClient(req, res) {
  const client = req.body;
  await addNewClient(client);
  return res.status(201).json({ message: "client ajouté", data: client });
}

async function httpRemoveClient(req, res) {
  const clientId = +req.params.id;
  const deletedClient = await deleteClient(clientId);
  if (!deletedClient) {
    return res.status(404).json({ message: "Client non trouvé." });
  }
  return res
    .status(201)
    .json({ message: "client supprimé !", data: await getAllClients() });
}

async function httpUpdateClient(req, res) {
  const clientId = +req.params.id;
  const updatedClient = req.body;

  await updateClient(clientId, updatedClient);
  return res
    .status(201)
    .json({ message: "client mis à jour !", updatedClient });
}

module.exports = {
  httpGetClients,
  httpAddNewClient,
  httpRemoveClient,
  httpUpdateClient,
  httpGetClientById,
};
