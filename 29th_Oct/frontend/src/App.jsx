import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [quotes, setQuotes] = useState([]);

  // CORS - Cross Origin Resource Sharing
  // make connection between frontend and backend
  // all, single, 2-3 network

  useEffect(() => {
    axios
      // .get("/api/quotes")
      .get("http://localhost:3000/api/quotes")
      // .then((response) => console.log(response.data))
      .then((response) => setQuotes(response.data))
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <div>
        <h1>Quotes Generator - New Project</h1>
        <p>Quotes : {quotes.length}</p>

        {quotes.map((quote, index) => (
          <div key={index}>
            <h3>{quote.author}</h3>
            <p>{quote.quote}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
