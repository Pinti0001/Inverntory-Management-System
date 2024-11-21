import mongoose from "mongoose";
const mongourl = "mongodb+srv://pintu008:PLCGQuy9MovSYNp1@cluster0.7omixsg.mongodb.net/IMS";

const connectToMongo = async()=>{
    try {
        mongoose.connect(mongourl);     
    } catch (error) {
        console.log(error);
    }
}


export default connectToMongo;  