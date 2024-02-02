"use strict";

let Models = require("../models"); // matches index.js

const addComment = (req, res) => {
  // adds a comment to a post
  console.log("Adding a comment:", req.body);
  new Models.Comment(req.body)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const deleteComment = (req, res) => {
  // deletes the comment from the post matching the ID from the param
  console.log("Deleting the comment from a post");
  Models.Comment.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  addComment,
  deleteComment,
};
