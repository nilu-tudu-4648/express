let express = require('express');
let app = express();


// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));





































 module.exports = app;
