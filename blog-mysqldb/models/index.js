"use strict";

const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");

async function init() {
  await User.sync(); // sync the model
  await Post.sync();
  await Comment.sync();
}

init();

module.exports = {
  // export the model
  User,
  Post,
  Comment,
};
