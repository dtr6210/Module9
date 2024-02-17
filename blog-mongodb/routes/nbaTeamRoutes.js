let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// http://localhost:8080/api/teams/   Adds a GET route to return all nba teams
router.get("/", (req, res) => {
  console.log("GET /api/teams/ - Fetching all NBA teams");
  Controllers.nbaTeamController.getNbaTeams(req, res);
});

// http://localhost:8080/api/team/<id>   Adds a GET route to return nba team by id
router.get("/:id", (req, res) => {
  console.log("GET /api/team/id - Fetching nba team by ID");
  Controllers.nbaTeamController.getNbaTeamById(req, res);
});

module.exports = router;
