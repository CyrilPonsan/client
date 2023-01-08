const { findOneAndUpdate } = require("./mongo.db.models/contact.db.model");
const contactDB = require("./mongo.db.models/contact.db.model");

DEFAULT_CONTACT_ID = 1;

async function addNewContact(newContact) {
  try {
    await contactDB.findOneAndUpdate(
      {
        id: await _getLatestContactId(),
      },
      newContact,
      { upsert: true }
    );
  } catch (err) {
    console.log(err);
  }
}

async function getAllContacts() {
  try {
    return await contactDB.find({}, { _id: 0, _v: 0 }).sort({ nom: 1 });
  } catch (err) {
    console.log(err);
  }
}

async function _getLatestContactId() {
  const latestContact = await contactDB.findOne().sort("-id");
  if (!latestContact) {
    return +DEFAULT_CONTACT_ID;
  }
  return +latestContact.id + 1;
}

async function getContactById(contactId) {
  try {
    const contactToUpdate = await contactDB.findOne({ id: contactId });
    return contactToUpdate;
  } catch (err) {
    console.log(err);
  }
}

async function updateContact(contactId, contact) {
  try {
    const updatedContact = await contactDB.findOneAndUpdate(
      { id: contactId },
      contact
    );
    return updatedContact;
  } catch (err) {
    console.log(err);
  }
}

async function deleteContact(contactId) {
  try {
    const deletedContact = await contactDB.deleteOne({ id: contactId });
    if (!deletedContact) {
      return false;
    }
    return deletedContact;
  } catch (err) {
    console.log(err);
  }
}

async function _getLatestContactId() {
  const latestContact = await contactDB.findOne().sort("-id");
  if (!latestContact) {
    return +DEFAULT_CONTACT_ID;
  }
  return +latestContact.id + 1;
}

module.exports = {
  addNewContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};
