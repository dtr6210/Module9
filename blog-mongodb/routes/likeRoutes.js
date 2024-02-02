let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

//http://localhost:8080/api/likes   Adds a POST route to like a post
router.post("/:id", (req, res) => {
    console.log("Trying to like a post")
    Controllers.likeController.likePost(req, res);
  });


//http://localhost8080/api/likes<id>   Adds a DELETE route to delete a like from a post
router.delete("/:id", (req, res) => {
    console.log("Trying to delete a like")
    Controllers.likeController.unlikePost(req, res);
  });


module.exports = router;