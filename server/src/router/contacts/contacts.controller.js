let contacts = [
  {
    id: 1,
    prenom: "david",
    nom: "fereirra",
  },
  {
    id: 2,
    prenom: "roberto",
    nom: "sueiro ventoso ",
  },
];

function httpGetContacts(req, res) {
  return res.status(200).json(contacts);
}

function httpAddNewContact(req, res) {
  const contact = req.body;
  contacts = [
    ...contacts,
    { id: _getMaxId(), prenom: contact.prenom, nom: contact.nom },
  ];
  return res.status(201).json({ message: "contact ajouté", data: contact });
}

function httpRemoveContact(req, res) {
  const contactId = +req.params.id;
  const contactToRemove = contacts.find((contact) => contactId === contact.id);
  if (!contactToRemove) {
    return res.status(404).json({ message: "contact not found !" });
  }
  contacts = contacts.filter((contact) => contactId !== contact.id);
  return res
    .status(201)
    .json({ message: "contact supprimé !", contactToRemove });
}

function httpUpdateContact(req, res) {
  const contactId = +req.params.id;
  const updatedContact = req.body;
  const contactToUpdate = contacts.find((contact) => contactId === contact.id);
  if (!contactToUpdate) {
    return res.status(404).json({ message: "contact not found !" });
  }
  contacts = contacts.filter((contact) => contactId !== contact.id);
  contacts = [
    ...contacts,
    {
      id: contactToUpdate.id,
      prenom: updatedContact.prenom,
      nom: updatedContact.nom,
    },
  ];
  return res
    .status(201)
    .json({ message: "contact mis à jour !", updatedContact });
}

function _getMaxId() {
  let maxId = 1;
  contacts.forEach((contact) => {
    if (contact.id > maxId) {
      maxId = contact.id;
    }
  });
  return ++maxId;
}

module.exports = {
  httpGetContacts,
  httpAddNewContact,
  httpRemoveContact,
  httpUpdateContact,
};
