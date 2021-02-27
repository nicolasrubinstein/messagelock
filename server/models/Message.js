const { Schema, model } = require("mongoose");
const uuid = require("uuid");

messageSchema = new Schema({
  text: String,
  uid: {
    type: String,
    default: uuid.v4().substring(0, 7),
  },
});

const Message = model("Message", messageSchema);

module.exports = Message;
