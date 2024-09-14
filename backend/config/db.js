import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jaylakkad1226:1234567890@cluster0.nj053.mongodb.net/food-del').then(()=>console.log("DB connected"));
}