import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/MongoDB1");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Failed to connect to MongoDB", err);
    }
};

export default connectDb;