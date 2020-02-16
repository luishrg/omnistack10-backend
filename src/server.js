const express = require("express");

const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
  return res.json({ body: req.body });
});

app.listen(3000);
