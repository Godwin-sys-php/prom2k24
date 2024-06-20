const express = require("express");
const bodyParser = require("body-parser");
const status = require("./status");
const Votes = require("./Models/Votes.js");
const Tables_list = require("./Models/Tables_list");

const app = express();

const server = require("http").Server(app);

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.static(__dirname + "/dist"));

// get api/status
app.get("/api/status", (req, res) => {
  res.json({ status });
});

app.get("/api/table/:tableId", async (req, res) => {
  try {
    const tableId = req.params.tableId;
    const table = await Tables_list.findOne({ numero: tableId });
    if (table.length === 0) {
      return res.status(404).json({ error: "Table " + tableId + " introuvable" });
    }
    const valid = await Votes.findOne({ nTable: tableId });
    if (valid.length === 12) {
      return res.status(400).json({ error: "Les votes pour la table " + tableId + " sont déjà clos" });
    }
    return res.status(200).json({ correct: true, table: tableId, });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Une erreur inconnue a eu lieu" });
  }
});

app.post("/api/vote", async (req, res) => {
  try {
    const toInsert = {
      userAgent: req.headers["user-agent"],
      roi: req.body.roi,
      reine: req.body.reine,
      costume: req.body.costume,
      robe: req.body.robe,
      nTable: req.body.table,
      timestamp: Date.now(),
    };
  
    const checkTable = await Tables_list.findOne({ numero: toInsert.nTable });
    const checkTableVotes = await Votes.findOne({ nTable: toInsert.nTable });
    if (checkTableVotes.length === 12) {
      return res.status(400).json({ error: "Les votes pour la table " + toInsert.nTable + " sont déjà clos" });
    } else if (checkTable.length === 0) {
      return res.status(400).json({ error: "Une erreur inconnue a eu lieu" });
    }
    const vote = await Votes.insertOne(toInsert);

    return res.json({ correct: true, });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Une erreur inconnue a eu lieu" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

server.listen(2024, function () {
  console.debug(`listening on port 2024`);
});
