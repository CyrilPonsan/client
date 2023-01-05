const express = require("express");
const { contactsRouter } = require("./contacts/contacts.router");

const v1Router = express.Router();

v1Router.use("/contacts", contactsRouter);

module.exports = v1Router;
