let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// http://localhost:8080/api/users/   Adds a GET route to return all users
router.get("/", (req, res) => {
  console.log("GET /api/users/ - Fetching all users");
  Controllers.userController.getUsers(res);
});

// http://localhost:8080/api/users/create   Adds a POST route to create a new user
router.post("/create", (req, res) => {
  // console.log("POST /api/users/create - Creating a new user with data:", req.body);
  Controllers.userController.createUser(req.body, res);
});

// http://localhost:8080/api/users/<id>   Adds a PUT route to update a user
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// http://localhost:8080/api/users/<id>   Adds a DELETE route to delete a user
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;
