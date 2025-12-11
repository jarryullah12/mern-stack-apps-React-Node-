import mongoose from "mongoose";
import { config } from "dotenv";
import { User } from "./models/userSchema.js";

config({ path: "./config/config.env" });

const addAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
    });

    console.log("=== ADMIN CREATION ===");
    console.log("Connected to database!");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "hamza@gmail.com" });
    if (existingAdmin) {
      console.log("❌ Admin with email hamza@gmail.com already exists!");
      console.log("Existing admin details:");
      console.log("Name:", existingAdmin.firstName, existingAdmin.lastName);
      console.log("Email:", existingAdmin.email);
      console.log("Role:", existingAdmin.role);
      process.exit(0);
    }

    // Create admin
    const admin = await User.create({
      firstName: "Hamza",
      lastName: "Admin",
      email: "hamza@gmail.com",
      phone: "03001234567", // 11 digits required
      nic: "1234567890123", // 13 digits required
      dob: "1990-01-01",
      gender: "Male",
      password: "@Pakistan123",
      role: "Admin",
    });

    console.log("✅ Admin created successfully!");
    console.log("Name:", admin.firstName, admin.lastName);
    console.log("Email:", admin.email);
    console.log("Password: @Pakistan123");
    console.log("Role:", admin.role);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

addAdmin();
