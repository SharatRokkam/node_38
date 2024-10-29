import express from "express";
import cors from "cors";
const app = express();

//allow all the origins
app.use(cors());

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/quotes", (req, res) => {
  const quotes = [
    {
      id: 1,
      author: "Albert Einstein",
      quote:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    },
    {
      id: 2,
      author: "Oscar Wilde",
      quote: "Be yourself; everyone else is already taken.",
    },
    {
      id: 3,
      author: "Mark Twain",
      quote: "The secret of getting ahead is getting started.",
    },
    {
      id: 4,
      author: "Maya Angelou",
      quote:
        "You will face many defeats in life, but never let yourself be defeated.",
    },
    {
      id: 5,
      author: "Nelson Mandela",
      quote: "It always seems impossible until it's done.",
    },
  ];
  res.send(quotes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
