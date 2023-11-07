const mongoose = require("mongoose");

const ArtGallerySchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  {
    collection: "Artist",
  }
);
module.exports = mongoose.model("Artist", ArtGallerySchema);
