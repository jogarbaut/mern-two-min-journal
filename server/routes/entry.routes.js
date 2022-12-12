const express = require("express");
const {
  getEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
} = require("../controllers/entry.controller");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Require auth for all entry routes
router.use(requireAuth);

// GET all entries
router.get("/", getEntries);

// GET a single entry
router.get("/:id", getEntry);

// POST a new entry
router.post("/", createEntry);

// DELETE a single entry
router.delete("/:id", deleteEntry);

// UPDATE a single entry
router.patch("/:id", updateEntry);

module.exports = router;
