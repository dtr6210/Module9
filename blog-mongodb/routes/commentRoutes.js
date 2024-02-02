let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

//http://localhost:8080/api/comments   Adds a POST route to add a comment
router.post("/:id", (req, res) => {
    console.log("Trying to comment on a post")
    Controllers.commentController.addComment(req, res);
  });


//http://localhost8080/api/comments/<id>   Adds a DELETE route to delete a comment from a post
router.delete("/:id", (req, res) => {
    console.log("Trying to delete a comment")
    Controllers.commentController.deleteComment(req, res);
  });


module.exports = router;