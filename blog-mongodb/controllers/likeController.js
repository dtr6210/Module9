"use strict";

let Models = require("../models"); // matches index.js

const likePost = (req, res) => {
  // adds a like to a post
  console.log(req.body);
  new Models.Like(req.body)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const unlikePost = (req, res) => {
  // deletes the like from the post matching the ID from the param
  console.log("Deleting the like from a post");
  Models.Like.findByIdAndDelete(req.params.id)
    .then((data) => res.status(200).send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  likePost,
  unlikePost,
};
