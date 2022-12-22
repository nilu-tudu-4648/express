let express = require('express');
let app = express();
const dotenv = require('dotenv')
dotenv.config()


app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
            response: "Hello World".toUpperCase()
        })
    } else {
        res.json({
            response: "Hello World"
        })
    }
});





































module.exports = app;
