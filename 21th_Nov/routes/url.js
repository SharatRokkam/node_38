const express = require("express");
const {
  handleGeneratedShortUrl,
  handleGetAnalytics,
} = require("../controller/url.js");

const router = express.Router();

router.post("/", handleGeneratedShortUrl);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
