import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose
    .connect
    ('mongodb+srv://swethassuresh08:p6d6Z8KwaVnDGrWs@cluster0.rifiib5.mongodb.net/grub-hub')
    .then(()=>console.log("Db is connected"))
}