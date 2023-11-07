// artgalleryRoutes.js

const express = require("express");
const router = express.Router();
const Artist = require("../schema/ArtGallerySchema");

// Route to create a new artist
router.post("/create-artist", (req, res, next) => {
  Artist.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/", (req, res, next) => {
  Artist.find() // No longer accepts a callback
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      next(err);
    });
});

// Route for artist login
router.post("/login", (req, res) => {
  const { name, email, password } = req.body;
  Artist.findOne({ email: email }).then((artist) => {
    if (artist) {
      // database password === given password
      if (artist.password === password) {
        res.json("login successful");
      } else {
        res.json("Password incorrect");
      }
    } else {
      console.log("No record exists");
    }
  });
});

module.exports = router;
