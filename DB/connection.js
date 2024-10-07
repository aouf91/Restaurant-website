import mongoose from "mongoose";

export const connectionDB = async() =>{
    try {
        await mongoose.connect(process.env.CONNECTION_DB_URI)
        console.log("connected successfully to database");
    } catch (error) {
        console.log("Error connected to database",error);  
    }
}