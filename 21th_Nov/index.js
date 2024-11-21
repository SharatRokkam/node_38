const express = require("express");
const PORT = 8001;
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect.js");
const URL = require("./models/url.js");

const app = express();

connectToMongoDB("mongodb://localhost:27017/shortUrl")
  .then(() => console.log("mongoDb connected"))
  .catch((error) => console.log(error));

app.use(express.json());
app.use("/url", urlRoute);


app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  try {
    // Use findOneAndUpdate to search by shortId and update visitHistory
    const entry = await URL.findOneAndUpdate(
      { shortId }, // Query by shortId
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(), // Correct field name
          },
        },
      },
      { new: true } // Return the updated document
    );

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("Error fetching or updating URL:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
