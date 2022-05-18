const chatModel = require("../models/chatModel");

module.exports = {
  // obtener chats
  get: async (req, res) => {
    try {
      const chat = await chatModel.getAll();
      res.status(200).send(chat);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },

  // obtener chat por id
  getById: async (req, res) => {
    const { id } = req.params;
    console.log("POSTMAN: ", id);
    try {
      const byId = await chatModel.getById(id);
      res.status(200).send(byId);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },

  // crear mensaje
  post: async (req, res) => {
    const { body } = req;
    try {
      const ch = await chatModel.create(body);
      console.log("Mensaje enviado");
      res.status(201).send(ch);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },

  put: (req, res) => {
    res.send("ok");
  },

  // borrar mensaje
  deleteById: async (req, res) => {
    const { id } = req.params;
    try {
      const delOne = chatModel.deleteById(id);
      res.status(200).send(delOne);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },

  // borrar todos los mensajes
  deleteAll: async (req, res) => {
    try {
      const del = await chatModel.deleteAll();
      res.status(200).send(del);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};
