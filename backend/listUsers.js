import mongoose from "mongoose";
import { config } from "dotenv";
import { User } from "./models/userSchema.js";

config({ path: "./config/config.env" });

const listUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
    });

    console.log("=== ALL USERS IN DATABASE ===\n");

    const users = await User.find({});
    
    if (users.length === 0) {
      console.log("No users found in database!");
    } else {
      users.forEach((user, index) => {
        console.log(`User ${index + 1}:`);
        console.log(`Name: ${user.firstName} ${user.lastName}`);
        console.log(`Email: ${user.email}`);
        console.log(`Role: ${user.role}`);
        console.log(`Phone: ${user.phone}`);
        if (user.doctorDepartment) {
          console.log(`Department: ${user.doctorDepartment}`);
        }
        console.log("---");
      });
      console.log(`\nTotal users: ${users.length}`);
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

listUsers();
