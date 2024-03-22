import mongoose from 'mongoose'

// Set up function for connecting to Mongo database
const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log(`MongoDB connected ${connection.connection.host}`)
};

// Export function for use in server file
export default connectDB