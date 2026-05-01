import express from "express";

const router = express.Router();

export const accounts = [
  {
    id: 1,
    title: "Full Skin Collector Account",
    skins: 420,
    winRate: 62.4,
    price: 1200000,
    badge: "Mythical Glory",
    region: "Mongolia",
    description:
      "Rare collector account with limited skins, event exclusives, and high-tier heroes unlocked.",
    heroCount: 112,
    isVerified: true,
    likes: [],
    comments: [],
  },
  {
    id: 2,
    title: "Smurf Account / High Winrate",
    skins: 45,
    winRate: 89.2,
    price: 150000,
    badge: "Legend",
    region: "SEA",
    description:
      "Clean smurf account designed for climbing ranks fast with high win rate heroes.",
    heroCount: 38,
    isVerified: false,
    likes: [],
    comments: [],
  },
  {
    id: 3,
    title: "Mythic Ranked Carry Account",
    skins: 210,
    winRate: 71.8,
    price: 780000,
    badge: "Mythic",
    region: "SEA",
    description:
      "Strong meta heroes unlocked, perfect for ranked grinding in Mythic tier.",
    heroCount: 95,
    isVerified: true,
    likes: [],
    comments: [],
  },
  {
    id: 4,
    title: "Epic Budget Starter Account",
    skins: 28,
    winRate: 58.1,
    price: 90000,
    badge: "Epic",
    region: "Mongolia",
    description:
      "Cheap starter account suitable for beginners learning ranked system.",
    heroCount: 25,
    isVerified: false,
    likes: [],
    comments: [],
  },
  {
    id: 5,
    title: "Mythical Immortal Whale Account",
    skins: 560,
    winRate: 76.9,
    price: 2500000,
    badge: "Mythical Immortal",
    region: "Global",
    description:
      "Top-tier whale account with all limited skins and maxed hero pool.",
    heroCount: 124,
    isVerified: true,
    likes: [],
    comments: [],
  },
];