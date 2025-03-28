const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const port = process.env.PORT || 3000; // Default port to listen on
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Validate environment variables
if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in your .env file");
  process.exit(1); // Exit if MONGO_URI is missing
}

// Middleware to parse request bodies
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Root route
app.get("/", (req, res) => {
  res.send("E-commerce backend successfully");
});

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("The server is not connected to MongoDB:", err.message);
    process.exit(1); // Terminate the process
  });


