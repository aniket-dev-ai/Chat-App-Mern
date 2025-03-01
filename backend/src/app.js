const express = require("express");
const app = express();
const chats = require("./data/data");
const connectDB = require("./config/Db");
connectDB();
const UserRouter = require("./Routes/userRoute");
const ChatRouter = require("./Routes/chatRoute");
app.use(express.json());

require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const singlechat = chats.find((c) => c._id === req.params.id);
  res.send(singlechat);
});

app.use("/api/users", UserRouter);
app.use("/api/chats", ChatRouter);
module.exports = app;
