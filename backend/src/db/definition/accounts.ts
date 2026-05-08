import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true, _id: true },
);

export const accountSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    skins: {
      type: Number,
      default: 0,
    },
    winRate: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    badge: {
      type: String,
      required: true,
      trim: true,
    },
    region: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    heroCount: {
      type: Number,
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: [String],
      default: [],
    },
    comments: { type: [commentSchema], default: [] },
  },
  {
    timestamps: true,
  },
);
