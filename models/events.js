const mongoose = require("mongoose");

let DateSchema = new mongoose.Schema({
    day: Number,
    mounth: String,
    year: Number,
  }),
  eventsSchema = new mongoose.Schema({
    name: {
      required: true,
      type: String,
    },
    date: {
      required: true,
      type: Date,
    },
    description: {
      required: true,
      type: String,
    },
    country: String,
    place: String,
    category: [String] /*{
      type: String,
      enum: [
        "History",
        "Sports",
        "Music",
        "Movies",
        "Theater",
        "Cultural",
        "Video Games",
        "Science",
        "Litterature",
        "Birthdays",
        "Anime & Manga",
      ],
    },*/,
    media: {
      cover: String,
      video: [String],
    },
    wikipediaLink: String,
  });

module.exports = mongoose.model("events", eventsSchema);
