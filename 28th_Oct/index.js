const express = require("express");
const PORT = 5555;
const app = express();
const productRoute = require("./routes/product.js");
const userRoute = require("./routes/user.js");

app.use(express.json());

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

//MVC - MODEL VIEW CONTROLLER (ARCHITECTURE)

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
