const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EntrySchema = new Schema(
  {
    place: {
      type: String,
      required: true,
    },
    feel: {
      type: String,
      enum: ["Exhausted", "Meh", "Fine", "Good", "Energized"],
      required: true,
    },
    feelWhy: {
      type: String,
      required: true,
    },
    energizedHow: {
      type: String,
      required: true,
    },
    grateful: {
      type: String,
      required: true,
    },
    gratefulWhy: {
      type: String,
      required: true,
    },
    topPriority: {
      type: String,
      required: true,
    },
    topPriorityWhy: {
      type: String,
      required: true,
    },
    topPriorityAction: {
      type: String,
      required: true,
    },
    stopWorkingTime: {
      type: Number,
      required: true,
    },
    stopWorkingTimeAmPm: {
      type: String,
      enum: ["AM", "PM"],
      required: true,
    },
    brainDump: {
      type: String,
      required: true,
    },
    morningPlan: {
      type: String,
      required: true,
    },
    afternoonPlan: {
      type: String,
      required: true,
    },
    eveningPlan: {
      type: String,
      required: true,
    },
    sleepTime: {
      type: Number,
      required: true,
    },
    sleepTimeAmPm: {
      type: String,
      enum: ["AM", "PM"],
      required: true,
    },
    seeds: {
      type: String,
      required: true,
    },
    weeds: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Entry", EntrySchema);
