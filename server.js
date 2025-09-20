// Simple Express server for backend support
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Contact form endpoint
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New Contact Submission:", { name, email, message });
  res.json({ success: true, message: "Message received. Thank you!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
