import express from "express";
import connectToMongo from "./db.mjs";
import cors from 'cors';
import router from './Routs/router.mjs'
connectToMongo();

const app = express()
const port = 3001

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, ()=> console.log(`App is running on port: ${port}`))
