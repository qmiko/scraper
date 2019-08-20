// require packages
let express = require("express");
let exphbs = require("express-handlebars");
let bodyParser = require("body-parser")
var db = require("./models");

const PORT = process.env.PORT || 8080;

// initialize express
let app = express();

// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// start server
app.listen(PORT, function(){
    console.log("App running on port:  " + PORT);
    console.log("Go: http://localhost:" + PORT);
})