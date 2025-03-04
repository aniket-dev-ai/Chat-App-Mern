const express = require("express");
const app = express();
require("./DataBase/DataBase")();
const userRouter = require("./Routes/User");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/vi/user", userRouter);

module.exports = app;
