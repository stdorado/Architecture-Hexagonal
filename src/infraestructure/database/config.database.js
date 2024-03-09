import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const mongoUri = process.env.DATA_BASE_URI

const mongooseDb = mongoose.connect(mongoUri, {
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  
  export default mongooseDb ;