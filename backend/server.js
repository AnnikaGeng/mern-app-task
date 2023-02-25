const dotenv = require("dotenv").config();  
const express = require("express");
const connectsDB = require("./config/connectsDB");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require('cors');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
    origin: ["http://localhost:3000",]
}));
app.use("/api/task", taskRoutes);


// Route
app.get("/", (req, res) => {
    res.send("home page");
});


const PORT = process.env.PORT || 5000;


const startServer = async () => {
    try {
        // connect to database first to avoid error
        await connectsDB();
        app.listen(PORT, () => {
            // backtick
            console.log(`Server running on port: ${PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
}
startServer();
