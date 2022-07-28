const express = require("express");
const router = express.Router();
var twitter = require("twitter");

var client = new twitter({
  consumer_key: "sw7ycnL4wVJ22MVH6ztVlcykI",
  consumer_secret: "NhFcRobfFblfZYZh22V3DeSt133asBnetsuVq59SzsPZ52kFUe",
  access_token_key: "732533688756396032-95dFbhd3Edbc0sUdeQXpDYRnkWdAXWU",
  access_token_secret: "fM2XovEvw6O43sg0NJFAIh1ScdRelerz9ZoWOcBjcqVOq",
});

// To get trending topics
router.get("/api/trends", async (req, res, next) => {
  try {
    const id = req.query.woeid;
    const trends = await client.get("trends/place.json", {
      id: 1,
    });
    res.send(trends);
  } catch (error) {
    next(error);
  }
});

router.get("/api/test", async (req, res, next) => {
  res.send("Hi! This API is running.");
});

module.exports = router;
