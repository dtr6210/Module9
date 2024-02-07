"use strict";
const Models = require("../models");

// adds a like
const addLike = (data, res) => {
    Models.Like.create(data)
      .then((data) => {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };
  
  // deletes a like
  const deleteLike = (req, res) => {
    Models.Like.destroy({ where: { id: req.params.id } })
      .then((data) => {
        res.send({ result: 200, data: data });
      })
      .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
  };
  
  module.exports = {
    addLike,
    deleteLike,
  };