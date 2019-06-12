const express = require("express")
const port = process.env.PORT || 8000
const app = express();

app.use(express.static(__dirname + "/dist"));

app.get("/.*/", (req, res, next) => {
    res.sendFile(__dirname + "/dist/index.html");
})

app.listen(port)

console.log("server started")