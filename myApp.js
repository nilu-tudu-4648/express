let express = require('express');
let app = express();


app.use("/public", express.static(__dirname + "/public"));
// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/public");
//   });





































 module.exports = app;
