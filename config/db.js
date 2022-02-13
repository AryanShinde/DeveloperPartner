const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config();
const db = process.env.MONGO_URI || config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("mongoDB connected");
  } catch (err) {
    console.log(`there was an error: ${err.message}`);
  }
};
module.exports = connectDB;
