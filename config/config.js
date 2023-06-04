import mongoose from "mongoose"

const DATABASE_URL = 'mongodb+srv://bishal:bishal123@cluster.zhprlin.mongodb.net/zapierData?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL)
        console.log(`Database connected Successfully..`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB