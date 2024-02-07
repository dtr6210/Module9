const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//http://localhost:8081/api/likes - POST adds a like
router.post("/:id", (req, res) => {
  console.log("Trying to add a like");
  Controllers.likeController.addLike(req.body, res);
});

// http://localhost:8081/api/likes/:id - DELETE destroys like by id
router.delete("/:id", (req, res) => {
  console.log("Trying to delete a like");
  Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
