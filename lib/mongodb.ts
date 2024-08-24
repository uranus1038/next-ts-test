import mongoose from "mongoose";
 const connectMongoDB = async () => {
    try {
        if (typeof process.env.MONGODB_URI == 'string') {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("connected to mongodb")
        }
    } catch(error)
    {
        console.log("Error connected to mongodb " ,error )
    }
}
export default connectMongoDB ;