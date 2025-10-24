const dotenv = require('dotenv');
dotenv.config(); 

const express = require('express');
const app = express();

const connectDB = require('./config/connectiondb');
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use("/recipe",require('./routes/recipes'))
app.use("/user",require('./routes/user'))



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})