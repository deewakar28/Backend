import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"}))
app.use(bodyParser.urlencoded({exptended:true}))
app.use(express.static("public"))

app.use(cookieParser());

//routes 
import userRouter from './routes/user.routes.js';

app.use("/api/v1/users", userRouter);

export {app, port}