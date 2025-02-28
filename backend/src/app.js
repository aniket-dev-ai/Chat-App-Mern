const express = require("express");
const app = express();
const chats = require("./data/data");   
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
    const singlechat = chats.find((c) => c._id === req.params.id);
    res.send(singlechat);
})
module.exports = app;
