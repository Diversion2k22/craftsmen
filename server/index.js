const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Routes
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection Successful"))
.catch((err)=>{
    console.log(err);
});

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend Server is running");
});
