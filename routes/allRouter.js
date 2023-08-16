const router = require("express").Router();

const { Router } = require("express");
const {
    getAllStories,
    getAStory,
} 
    = require("../controllers/storyController")

    router.get("/", getAllStories)
    router.get("/:storyId", getAStory)

    module.exports = router