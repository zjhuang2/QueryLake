const functions = require("firebase-functions");
const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

var twitter = require("twitter");
const { response } = require("express");

var client = new twitter({
  consumer_key: "sw7ycnL4wVJ22MVH6ztVlcykI",
  consumer_secret: "NhFcRobfFblfZYZh22V3DeSt133asBnetsuVq59SzsPZ52kFUe",
  access_token_key: "732533688756396032-95dFbhd3Edbc0sUdeQXpDYRnkWdAXWU",
  access_token_secret: "fM2XovEvw6O43sg0NJFAIh1ScdRelerz9ZoWOcBjcqVOq",
});

const cors = require("cors");
app.use(cors({ origin: true }));

// const apiRoutes = require("./routes/api.route");

app.get("/", async (req, res, next) => {
  try {
    const id = req.query.woeid;
    const trends = await client.get("trends/place.json", {
      id: id,
    });
    res.send(trends);
  } catch (error) {
    next(error);
    // }
  }
});

// app.use("/api", apiRoutes);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

exports.twitter_api = functions.https.onRequest(app);

// exports.bigben = functions.https.onRequest((req, res) => {
//   const hours = (new Date().getHours() % 12) + 1; // London is UTC + 1hr;
//   res.status(200).send(`<!doctype html>
//     <head>
//       <title>Time</title>
//     </head>
//     <body>
//       <h1>London<h1>
//       ${"BONG ".repeat(hours)}
//     </body>
//   </html>`);
// });
