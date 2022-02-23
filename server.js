const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
dotenv.config({ path: "./config.env" });
//connect mongoDB

connectDB();

//middleWare
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

//routes setup
app.use("/api/user", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profiles", require("./routes/api/profiles"));
app.use("/api/posts", require("./routes/api/posts"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
}

app.use(cors());
https: app.options("*", cors());
app.use(
  cors({
    credentials: true,
    origin: false,
    exposeHeaders: ["set-cookie"],
  })
);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`port running on ${PORT}`));
