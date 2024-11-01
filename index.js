const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product.routes");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); /*supports form submissions*/

//API Routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("This is from node api , check updated");
});

mongoose
  .connect(
    "mongodb+srv://jeddymweru:qo3dqCosOGeUk9p8@cluster0.u1i93.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connection to database successful");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection to database failed");
  });
