const express = require("express");
const {
  httpGetContacts,
  httpAddNewContact,
  httpRemoveContact,
  httpUpdateContact,
  httpGetContactById,
} = require("./contacts.controller");

contactsRouter = express.Router();

contactsRouter.get("/:id", httpGetContactById);
contactsRouter.get("/", httpGetContacts);
contactsRouter.post("/", httpAddNewContact);
contactsRouter.delete("/:id", httpRemoveContact);
contactsRouter.put("/:id", httpUpdateContact);

module.exports = { contactsRouter };
