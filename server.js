const os = require("os");
const logger = require("morgan");
const express = require("express");
const hbs = require("express-hbs");
const serveStatic = require("serve-static")

const app = express();

app.use(logger("dev"));

app.engine("hbs", hbs.express4());
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(serveStatic('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
	res.render("index", {
    hostname: os.hostname()
  });
});

app.set("port", process.env.PORT || 5000);

app.listen(app.get("port"), () => {
	console.log("Super Awesome Server listening on port " + app.get("port"));
});

process.on("SIGTERM", () => {
  process.exit(0);
});