//require('dotenv').config({path: './env'})
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import connectDB from './db/index.js';
import { app,port } from './app.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(port , ()=>{
        console.log(`Server is runnit at: http://localhost:${port}`)
    })
})
.catch((error)=>{
    console.log(error);
})