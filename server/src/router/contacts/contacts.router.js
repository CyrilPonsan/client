const express = require("express");
const {
  httpGetContacts,
  httpAddNewContact,
  httpRemoveContact,
  httpUpdateContact,
} = require("./contacts.controller");

contactsRouter = express.Router();

contactsRouter.get("/", httpGetContacts);
contactsRouter.post("/", httpAddNewContact);
contactsRouter.delete("/:id", httpRemoveContact);
contactsRouter.put("/:id", httpUpdateContact);

module.exports = { contactsRouter };
