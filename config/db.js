import mongoose from 'mongoose'

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    console.log(`MongoDB connected ${connection.connection.host}`)
};

export default connectDB