const express = require("express");
const URL = require("../models/url.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const allURLs = await URL.find({});

  return res.render("Home", {
    urls: allURLs,
  });
});

module.exports = router;
