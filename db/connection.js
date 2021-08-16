require("dotenv").config();
const mongoose = require("mongoose");
const { MONGODBURI } = process.env;
const config = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.connect(MONGODBURI, config);

const db = mongoose.connection;
db.on("open", () => console.log("You are connected to Mongo"));
db.on("close", () => console.log("You are disconnected to Mongo"));
db.on("error", (err) => console.log(err));

module.exports = mongoose;
