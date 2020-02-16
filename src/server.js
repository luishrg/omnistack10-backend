const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://omnistack:omnistack10@cluster0-84czc.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log("== Nao foi conectado ao banco de dados! ==");
    } else {
      console.log("==> Conectado ao banco de dados!");
    }
  }
);

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3000);
