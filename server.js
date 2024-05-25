import express from "express"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import cors from 'cors'

const app=express()
 
//parse incoming request bodies
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configure env
dotenv.config();

// database config
connectDB();

//middlewares
// app.use(express.json);
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth",authRoutes);
//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to coaching app</h1>");
});

//port
const PORT=process.env.PORT;

//middleware
app.use(morgan("dev"));

//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Coaching app</h1>");
});

//run listen
app.listen(PORT,()=>{
    console.log(`server Running on ${PORT}`)
})


