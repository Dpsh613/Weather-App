const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (html, js, css, images)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
