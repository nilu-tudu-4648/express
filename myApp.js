let express = require('express');
let app = express();
const dotenv = require('dotenv')
dotenv.config()

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
            message: "Hello World".toUpperCase()
        })
    } else {
        res.json({
            message: "Hello World"
        })
    }
});





































module.exports = app;
