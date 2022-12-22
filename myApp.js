let express = require('express');
let app = express();
require('dotenv').config()

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
            message: "Hello json".toUpperCase()
          })
      } else {
        res.json({
            message: "Hello json"
          })
      }
  });





































 module.exports = app;
