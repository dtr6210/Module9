let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// http://localhost:8080/api/posts/  Adds a GET route to return all posts
router.get("/", (req, res) => {
  console.log("GET request to return all posts");
  Controllers.postController.getPosts(res);
});

//http://localhost:8080/api/posts/create   Adds a POST route to create a new post
router.post("/create", (req, res) => {
  console.log("GET request to create a new post")
  Controllers.postController.createPost(req.body, res);
});

// http://localhost:8080/api/posts/<id>   Adds a PUT route to update an existing post
router.put("/:id", (req, res) => {
  console.log("PUT request to update an existing post");
  Controllers.postController.updatePost(req, res);
});

// http://localhost:8080/api/posts/<id>   Adds a DELETE route to delete a post
router.delete("/:id", (req, res) => {
  console.log("DELETE request to delete a post");
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
