import mongoose from "mongoose";

export default async function connectDb() {
    try {
        await mongoose.connect("<your-mongodb-connection-string>");
        console.log("Database connected"); 
    } catch (error){
        console.log("Database connection failed");
    }
}