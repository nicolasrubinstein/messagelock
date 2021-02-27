const router = require("express").Router();
const mongoose = require("mongoose");
const Message = require("../models/Message.js");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const requested = await Message.findOne({ uid: id });
  if (requested) res.json(requested);
  else {
    res.status(404).send("");
  }
});

router.post("", async (req, res) => {
  const { text } = req.body;
  const newMessage = new Message({ text });
  await newMessage.save();
  res.status(201).send(newMessage);
});

router.get("/all/ysNRyneCe2005", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

module.exports = router;
