require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");


const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionModel } = require("./model/PositionsModel");
const { OrderModel } = require("./model/OrdersModel");


const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;


const app = express();


app.use( cors() );
app.use(bodyParser.json());
app.use("/auth", AuthRouter );


app.get("/allHoldings", async (req, res) => {

    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);

})


app.get("/allPositions", async (req, res) => {

    let allPositions = await PositionModel.find({});
    res.json(allPositions);

})


app.get("/allOrders", async (req, res) => {

  let allOrders = await OrderModel.find({});
  res.json(allOrders);

})


app.post("/newOrder", async (req, res) => {
  
    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
  
    await newOrder.save();
  
    res.send("Order saved!");

});

// Debugging
app.get("/ping", (req, res) => {
  res.send("PONG");
} )


app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(url);
  console.log("DB Connected!");
});
