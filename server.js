const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public")); // serve frontend files

// Link extraction function
const extractLinks = (text) => {
  const urlRegex = /(https?:\/\/)?(x\.com\/[^\s]+)/g;
  const matches = text.match(urlRegex);
  return matches ? [...new Set(matches)] : [];
};

// POST endpoint to extract links
app.post("/extract", (req, res) => {
  const text = req.body.text || "";
  const links = extractLinks(text);
  res.json({ links });
});

// Optional homepage route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
