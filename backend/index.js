const mongoose = require("mongoose");
const express = require("express");
const artgalleryRoutes = require("./artGalleryRoutes/artgalleryRoutes");

const cors = require("cors");

const app = express();
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://mohd12tayyab:mohd12tayyab@cluster0.v3iqy06.mongodb.net/School"
);

const db = mongoose.connection;
db.on("open", () => {
  console.log("database connected");
});
db.on("error", () => {
  console.log("Error in connecting");
});
app.use(express.json());
app.use(cors());
app.use("/api/gallery", artgalleryRoutes);

const port = 5500;

app.listen(port, () => {
  console.log("server statrted on " + port);
});
