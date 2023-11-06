const express = require("express");
const router = express.Router();
const Artist = require("../schema/ArtGallerySchema"); // Adjust the import path

// Route to create a new artist
router.post("/create-artist", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const artist = new Artist({ name, email, password });
    await artist.save();
    res.status(200).json({ message: "Artist added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the artist" });
  }
});

// Route for artist login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const artist = await Artist.findOne({ email, password });
    if (artist) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred during login" });
  }
});

module.exports = router;
