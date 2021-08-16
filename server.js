require("dotenv").config();
const { PORT = 3000 } = process.env;
// Import express
const express = require("express");
const app = express();
// Cors
const cors = require("cors");
const corsOptions = require("./configs/cors");
// Connection
const mongoose = require("./db/connection");
// Logger
const morgan = require("morgan");
// Import router
const placeRouter = require("./controllers/place");

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// Test for server
app.get("/", (req, res) => res.send("🤘🏼 Server is Working"));

// Place routes
app.use("/places", placeRouter);

app.listen(PORT, () => console.log(`👍🏼 Listening on port ${PORT}`));
