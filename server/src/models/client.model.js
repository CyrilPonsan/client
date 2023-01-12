const clientDB = require("./mongo.db.models/client.db.model");

const DEFAULT_CLIENT_ID = 1;

async function addNewClient(newClient) {
  try {
    await clientDB.findOneAndUpdate(
      {
        id: await _getLatestClientId(),
      },
      newClient,
      { upsert: true }
    );
  } catch (err) {
    console.log(err);
  }
}

async function getAllClients() {
  try {
    return await clientDB.find({}, { _id: 0, _v: 0 }).sort({ nom: 1 });
  } catch (err) {
    console.log(err);
  }
}

async function getClientById(clientId) {
  try {
    const clientToUpdate = await clientDB.findOne({ id: clientId });
    return clientToUpdate;
  } catch (err) {
    console.log(err);
  }
}

async function updateClient(clientId, client) {
  try {
    const updatedclient = await clientDB.findOneAndUpdate(
      { id: clientId },
      client
    );
    return updatedclient;
  } catch (err) {
    console.log(err);
  }
}

async function deleteClient(clientId) {
  try {
    const deletedclient = await clientDB.deleteOne({ id: clientId });
    if (!deletedclient) {
      return false;
    }
    return deletedclient;
  } catch (err) {
    console.log(err);
  }
}

async function _getLatestClientId() {
  const latestClient = await clientDB.findOne().sort("-id");
  if (!latestClient) {
    return +DEFAULT_CLIENT_ID;
  }
  return +latestClient.id + 1;
}

module.exports = {
  addNewClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
};
