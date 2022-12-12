require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
const entryRoutes = require("./routes/entry.routes");
app.use("/api/entry", entryRoutes);
const userRoutes = require("./routes/user.routes");
app.use("/api/user", userRoutes);

app.use(cors);

require("./config/mongoose.config");
app.listen(8000, () => {
  console.log(`Listening at PORT 8000`);
});
