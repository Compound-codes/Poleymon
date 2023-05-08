const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("home");
})
app.get("/world1", function (req, res) {
    res.render("world1");
})
app.get("/world2", function (req, res) {
    res.render("world2");
})
app.get("/world3", function (req, res) {
    res.render("world3");
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
    console.log(`Frenchfries served on table ${port}`);
});

// Export the Express API
module.exports = app