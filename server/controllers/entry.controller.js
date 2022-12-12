const mongoose = require("mongoose")
const Entry = require("../models/entry.model")

// Get all entries
const getEntries = async (req, res) => {
  const user_id = req.user._id;
  const entries = await Entry.find({ user_id }).sort({ createdAt: -1 });
  res.status(200).json(entries);
};

// Get a single entry
const getEntry = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such entry" });
  }
  const entry = await Entry.findById(id);
  if (!entry) {
    return res.status(404).json({ error: "No such entry" });
  }
  res.status(200).json(entry);
};

// Create a new entry
const createEntry = async (req, res) => {
  const { 
    place,
    feel,
    feelWhy,
    energizedHow,
    grateful,
    gratefulWhy,
    topPriority,
    topPriorityWhy,
    topPriorityAction,
    stopWorkingTime,
    stopWorkingTimeAmPm,
    brainDump,
    morningPlan,
    afternoonPlan,
    eveningPlan,
    sleepTime,
    sleepTimeAmPm,
    seeds,
    weeds,
  } = req.body;
  let emptyFields = [];
  if (!place) {
    emptyFields.push("place");
  }
  if (!feel) {
    emptyFields.push("feel");
  }
  if (!feelWhy) {
    emptyFields.push("feelWhy");
  }
  if (!energizedHow) {
    emptyFields.push("energizedHow");
  }
  if (!grateful) {
    emptyFields.push("grateful");
  }
  if (!gratefulWhy) {
    emptyFields.push("gratefulWhy");
  }
  if (!topPriority) {
    emptyFields.push("topPriority");
  }
  if (!topPriorityWhy) {
    emptyFields.push("topPriorityWhy");
  }
  if (!topPriorityAction) {
    emptyFields.push("topPriorityAction");
  }
  if (stopWorkingTime.length === 0) {
    emptyFields.push("stopWorkingTime");
  }
  if (!stopWorkingTimeAmPm) {
    emptyFields.push("stopWorkingTimeAmPm");
  }
  if (!brainDump) {
    emptyFields.push("brainDump");
  }
  if (!morningPlan) {
    emptyFields.push("morningPlan");
  }
  if (!afternoonPlan) {
    emptyFields.push("afternoonPlan");
  }
  if (!eveningPlan) {
    emptyFields.push("eveningPlan");
  }
  if (sleepTime.length === 0) {
    emptyFields.push("sleepTime");
  }
  if (!sleepTimeAmPm) {
    emptyFields.push("sleepTimeAmPm");
  }
  if (!seeds) {
    emptyFields.push("seeds");
  }
  if (!weeds) {
    emptyFields.push("weeds");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }
  // Add doc to db
  try {
    const user_id = req.user._id;
    const entry = await Entry.create({ 
      place,
      feel,
      feelWhy,
      energizedHow,
      grateful,
      gratefulWhy,
      topPriority,
      topPriorityWhy,
      topPriorityAction,
      stopWorkingTime,
      stopWorkingTimeAmPm,
      brainDump,
      morningPlan,
      afternoonPlan,
      eveningPlan,
      sleepTime,
      sleepTimeAmPm,
      seeds,
      weeds,
      user_id,
    });
    res.status(200).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a single entry
const deleteEntry = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such entry" });
  }
  const entry = await Entry.findOneAndDelete({ _id: id });
  if (!entry) {
    return res.status(404).json({ error: "No such entry" });
  }
  res.status(200).json(entry);
};

// Update a single entry
const updateEntry = async (req, res) => {
  const { id } = req.params;
  const { 
    place,
    feel,
    feelWhy,
    energizedHow,
    grateful,
    gratefulWhy,
    topPriority,
    topPriorityWhy,
    topPriorityAction,
    stopWorkingTime,
    stopWorkingTimeAmPm,
    brainDump,
    morningPlan,
    afternoonPlan,
    eveningPlan,
    sleepTime,
    sleepTimeAmPm,
    seeds,
    weeds,
  } = req.body;
  let emptyFields = [];
  if (!place) {
    emptyFields.push("place");
  }
  if (!feel) {
    emptyFields.push("feel");
  }
  if (!feelWhy) {
    emptyFields.push("feelWhy");
  }
  if (!energizedHow) {
    emptyFields.push("energizedHow");
  }
  if (!grateful) {
    emptyFields.push("grateful");
  }
  if (!gratefulWhy) {
    emptyFields.push("gratefulWhy");
  }
  if (!topPriority) {
    emptyFields.push("topPriority");
  }
  if (!topPriorityWhy) {
    emptyFields.push("topPriorityWhy");
  }
  if (!topPriorityAction) {
    emptyFields.push("topPriorityAction");
  }
  if (stopWorkingTime.length === 0) {
    emptyFields.push("stopWorkingTime");
  }
  if (!stopWorkingTimeAmPm) {
    emptyFields.push("stopWorkingTimeAmPm");
  }
  if (!brainDump) {
    emptyFields.push("brainDump");
  }
  if (!morningPlan) {
    emptyFields.push("morningPlan");
  }
  if (!afternoonPlan) {
    emptyFields.push("afternoonPlan");
  }
  if (!eveningPlan) {
    emptyFields.push("eveningPlan");
  }
  if (sleepTime.length === 0) {
    emptyFields.push("sleepTime");
  }
  if (!sleepTimeAmPm) {
    emptyFields.push("sleepTimeAmPm");
  }
  if (!seeds) {
    emptyFields.push("seeds");
  }
  if (!weeds) {
    emptyFields.push("weeds");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such entry" });
  }
  const entry = await Entry.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!entry) {
    return res.status(404).json({ error: "No such entry" });
  }
  res.status(200).json(entry);
};

module.exports = {
  getEntries,
  getEntry,
  createEntry,
  deleteEntry,
  updateEntry,
};
