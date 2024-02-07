'use strict'

const User = require('./user') //require the model

async function init() {
 await User.sync(); // sync the model
 // also sync any extra models here
 // await Post.sync(), etc.
};

init();

module.exports = {
 User, // export the model
 // also export any extra models here
 //Post,ect.
};
