const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const connectsDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected`)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectsDB;