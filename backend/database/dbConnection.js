import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
<<<<<<< HEAD
      dbName: "HOSPITAL_MANAGEMENT_SYSTEM",
=======
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
>>>>>>> 7c8db2b7a77958d96f0336c5d2de3263748e099b
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
