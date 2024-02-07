const express = require("express");
const app = express();

require("dotenv").config();

let dbConnect = require('./dbConnect')

// parse requests of content-type - application/json
app.use(express.json());

let userRoutes = require('./routes/userRoutes');
let postRoutes = require('./routes/postRoutes');
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


app.get("/", (req, res) => {
 res.json({ message: "Welcome to my MYSQLDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
 console.log(`Server is running on port
${PORT}.`);
});