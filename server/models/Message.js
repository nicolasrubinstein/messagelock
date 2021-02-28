const { Schema, model } = require("mongoose");
const uuid = require("uuid");

messageSchema = new Schema({
  text: String,
  uid: String,
});

const Message = model("Message", messageSchema);

module.exports = Message;
