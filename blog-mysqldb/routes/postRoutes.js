const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// http://localhost:8081/api/posts - GET all posts
router.get("/", (req, res) => {
  console.log("GET request to return all posts");
  Controllers.postController.getPosts(res);
});

//http://localhost:8081/api/posts/create - POST create a new post
router.post("/create", (req, res) => {
  console.log("POST request to create a new post");
  Controllers.postController.createPost(req.body, res);
});

// http://localhost:8081/api/posts/:id - PUT update post by id
router.put("/:id", (req, res) => {
  console.log("PUT request to update a post");
  Controllers.postController.udpatePost(req, res);
});

// http://localhost:8081/api/post/:id - DELETE destroys post by id
router.delete("/:id", (req, res) => {
  console.log("DELETE request to delete a post");
  Controllers.postController.deletePost(req, res);
});

module.exports = router;
