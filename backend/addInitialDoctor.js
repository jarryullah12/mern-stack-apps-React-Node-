import mongoose from "mongoose";
import { config } from "dotenv";
import { User } from "./models/userSchema.js";

config({ path: "./config/config.env" });

const addDoctor = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
    });

    console.log("=== DOCTOR CREATION ===");
    console.log("Connected to database!");

    // Check if doctor already exists
    const existingDoctor = await User.findOne({ email: "admin@gmail.com" });
    if (existingDoctor) {
      console.log("❌ Doctor with email admin@gmail.com already exists!");
      console.log("Existing doctor details:");
      console.log("Name:", existingDoctor.firstName, existingDoctor.lastName);
      console.log("Email:", existingDoctor.email);
      console.log("Role:", existingDoctor.role);
      process.exit(0);
    }

    // Create doctor
    const doctor = await User.create({
      firstName: "Admin",
      lastName: "Doctor",
      email: "admin@gmail.com",
      phone: "03009876543", // 11 digits required
      nic: "9876543210987", // 13 digits required
      dob: "1985-01-01",
      gender: "Male",
      password: "@Pakistan123",
      role: "Doctor",
      doctorDepartment: "General Medicine",
      docAvatar: {
        public_id: "default_avatar",
        url: "https://via.placeholder.com/150",
      },
    });

    console.log("✅ Doctor created successfully!");
    console.log("Name:", doctor.firstName, doctor.lastName);
    console.log("Email:", doctor.email);
    console.log("Password: @Pakistan123");
    console.log("Role:", doctor.role);
    console.log("Department:", doctor.doctorDepartment);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

addDoctor();
