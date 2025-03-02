import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/userModel.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "nami@example.com",
    fullName: "Nami-San",
    password: "123456",
    profilePic: "",
  },
  {
    email: "robin@example.com",
    fullName: "Robin-chan",
    password: "123456",
    profilePic: "",
  },

  // Male Users
  {
    email: "zoro@example.com",
    fullName: "Roronoa Zoro",
    password: "123456",
    profilePic: "",
  },
  {
    email: "luffy@example.com",
    fullName: "Monkey D. Luffy",
    password: "123456",
    profilePic: "",
  },
  {
    email: "sanji@example.com",
    fullName: "Vinsmoke Sanji",
    password: "123456",
    profilePic: "",
  },
  {
    email: "jinwoo@example.com",
    fullName: "Sung Jinwoo",
    password: "123456",
    profilePic: "",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();