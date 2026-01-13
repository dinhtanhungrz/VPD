const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');


const productRoute = require("./routes/product"); 

dotenv.config();


mongoose.connect("mongodb+srv://root:%40Hungcute18.@cluster0.jpbkrmy.mongodb.net/Connection_DB")
    .then(() => { console.log("Connect to MongoDB success!"); })
    .catch((err) => { console.error("Connect failed:", err); });

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));



app.use("/v1/product", productRoute);

app.listen(8000, () => {
    console.log("Server is running...");
});