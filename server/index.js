const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());

// Routing
app.use("/", require("./routes/message.js"));

// DB
require("./db.js")();

// Listen
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`Running, url http://localhost:${port}`));
