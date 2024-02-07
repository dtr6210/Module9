const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


//http://localhost:8081/api/comments - POST adds a comment
router.post("/:id", (req, res) => {
  console.log("Trying to add a comment");
  Controllers.commentController.addComment(req.body, res);
});


// http://localhost:8081/api/comments/:id - DELETE destroys comment by id
router.delete("/:id", (req, res) => {
  console.log("Trying to delete a comment");
  Controllers.commentController.deleteComment(req, res);
});

module.exports = router;