const express = require("express");
const session = require("express-session");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.set("port", process.env.PORT || 8080);
app.use("/", express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use((req, res, next) => {
  if (process.env.NODE_ENV == "production") {
    morgan("combined")(req, res, next);
  } else {
    morgan("dev")(req, res, next);
  }
});
app.get("/theme", (req, res) => {
  let theme;
  if (req.cookies.theme) {
    theme = req.cookies.theme;
    // if (req.cookies.theme == "dark") {
    //   theme = "light";
    // } else if (req.cookies.theme == "light") {
    //   theme = "dark";
    // }
    // console.log(req.cookies.theme);
  } else {
    theme = "light";
  }
  res.send({ theme });
  // res.end();
});

app.get("/change/theme", (req, res) => {
  let theme;
  if (req.cookies.theme == "dark") {
    theme = "light";
  } else if (req.cookies.theme == "light") {
    theme = "dark";
  }
  res.cookie("theme", theme);
  res.send({ theme });
});
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    secret: process.env.COOKIE_SECRET,
    name: "session",
  })
);
app.listen(app.get("port"), () => {
  console.log("서버 열음");
});
