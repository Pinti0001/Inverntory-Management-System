import mongoose from "mongoose";
const mongourl = "mongosb://127.0.0.1:27017/IMS";

const connectToMongo = async()=>{
    try {
        mongoose.connect(mongourl);     
    } catch (error) {
        console.log(error);
    }
}


export default connectToMongo;  