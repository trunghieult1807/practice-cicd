import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

const app = express();
const port = 3000;//process.env.PORT;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
    res.send({message: "Welcome to the homepage!"})
})

app.listen(port, () => {
    console.log(`Server is running on ${port}...`)
})
