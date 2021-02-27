const mongoose = require("mongoose");

const connectDB = async () => {
  const connectionUrl =
    "mongodb+srv://admin:hzAlYtPAD50KbfXw@cluster0.fkp0g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  await mongoose.connect(connectionUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("DB connected");
};

module.exports = connectDB;
