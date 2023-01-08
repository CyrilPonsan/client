const {
  addNewContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../../models/contact.model");

async function httpGetContacts(req, res) {
  const contacts = await getAllContacts();
  return res.status(200).json(contacts);
}

async function httpGetContactById(req, res) {
  const contactId = +req.params.id;
  const contact = await getContactById(contactId);
  return res.status(200).json(contact);
}

async function httpAddNewContact(req, res) {
  const contact = req.body;
  await addNewContact(contact);
  return res.status(201).json({ message: "contact ajouté", data: contact });
}

async function httpRemoveContact(req, res) {
  const contactId = +req.params.id;
  const deletedContact = await deleteContact(contactId);
  if (!deletedContact) {
    return res.status(404).json({ message: "Contact non trouvé." });
  }
  return res
    .status(201)
    .json({ message: "contact supprimé !", data: await getAllContacts() });
}

async function httpUpdateContact(req, res) {
  const contactId = +req.params.id;
  const updatedContact = req.body;

  await updateContact(contactId, updatedContact);
  return res
    .status(201)
    .json({ message: "contact mis à jour !", updatedContact });
}

module.exports = {
  httpGetContacts,
  httpAddNewContact,
  httpRemoveContact,
  httpUpdateContact,
  httpGetContactById,
};
