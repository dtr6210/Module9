"use strict";

const axios = require("axios");
let Models = require("../models"); // matches index.js

//get all nba teams.  will show 10 teams per page.
const getNbaTeams = (req, res) => {
  const page = req.query.page || 1; // default page is 1
  const perPage = 10; //10 items per page
  axios
    .get("https://www.balldontlie.io/api/v1/teams", {
      params: {
        page: page - 0,
        per_page: perPage,
      },
    })
    .then((response) => {
      console.log("Fetching NBA teams");
      res.send({ result: 200, data: response.data.data });
    })
    .catch((error) => {
      console.error("Error fetching NBA Teams:", error);
      res.status(500).send({ result: 500, error: error.message });
    });
};

//get nba teams by team id
const getNbaTeamById = (req, res) => {
  const teamId = req.params.id;
  axios
    .get(`https://www.balldontlie.io/api/v1/teams/${teamId}`)
    .then((response) => {
      console.log(`Fetching NBA team by id: ${teamId}`);
      res.send({ result: 200, data: response.data });
    })
    .catch((error) => {
      console.error(`Error fetching NBA Team by id: ${teamId}`, error);
      res.status(500).send({ result: 500, error: error.message });
    });
};

module.exports = {
  getNbaTeams,
  getNbaTeamById,
};
