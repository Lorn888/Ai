import express from 'express';  
import * as dotenv from 'dotenv';
import cors from 'cors' 

import connectDB from './mongodb/connect.js'

dotenv.config()
const app = express()   
app.use(cors())
app.use(express.json({ limit: '50mb' }))


app.get('/', async (req, res) => {
    res.send('Hello from DALL-E')
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(8085, () =>{console.log('server has started on port http://10.55.0.1:8085/')})
    } catch (error) {
      console.log(error)  
    }



}

startServer()