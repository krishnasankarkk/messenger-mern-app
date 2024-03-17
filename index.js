import express from 'express'
import cors from 'cors'
import { config } from 'dotenv';
config();
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 4000;
const mongo_url = process.env.MONGODB_URL


app.use(cors())
app.use(express.json())


app.get('/', async(req, res) => {
    res.send("Welcome to our nodejs server");
})


mongoose.connect(mongo_url).then(() => {
    console.log(`Mongodb connected`)
})


app.listen(PORT , () => {
    console.log(`App is running in the port ${PORT}`)
})

// global catches
app.use((err, req, res, next) => {
    res.status(500).send({
        msg: "Sorry something is wrong with our server"
    })
})