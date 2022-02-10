require("./configs/mongo");
require("dotenv").config();
require("./configs/passport");
// const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session"); //sessions make data persist between http calls
const _DEVMODE = false;


const authRouter = require("./routes/auth.js")
const invadersRouter = require("./routes/invader.js");
const usersRouter = require("./routes/users.js")
const app = express();

// view engine setup

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true, // usefull when dealing with authentication
    optionsSuccessStatus: 200,
  })
);

app.use(
  session({
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION
  })
);

app.get("/", (req, res) => res.send("server is running"));

app.use("/api/invaders", invadersRouter);
app.use("/api/auth", authRouter);
app.use("api/users", usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

if (_DEVMODE === true) {
  app.use(function devMode(req, res, next) {
    req.user = {
      _id: "5de9c376fa023e21a766a606",
      username: "guillaume",
      email: "gui@foo.bar",
      avatar:
        "https://res.cloudinary.com/gdaconcept/image/upload/v1575298339/user-pictures/jadlcjjnspfhknucjfkd.png",
      role: "admin",
    };

    next();
  });
}

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  const message = err.message;
  const error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message, error });
});

console.log("http://localhost:5000");

module.exports = app;
