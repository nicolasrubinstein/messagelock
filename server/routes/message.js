const router = require("express").Router();
const mongoose = require("mongoose");
const Message = require("../models/Message.js");
const uuid = require("uuid");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const requested = await Message.findOne({ uid: id });
  if (requested) res.json(requested);
  else {
    res.send("");
  }
});

router.post("", async (req, res) => {
  const { text } = req.body;
  const uid = uuid.v4().substring(0, 7);
  const newMessage = new Message({ text, uid });
  await newMessage.save();
  res.status(201).send(newMessage);
});

router.get("/all/ysNRyneCe2005", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

module.exports = router;
