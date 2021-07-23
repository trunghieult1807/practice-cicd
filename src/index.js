import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import countryRoute from "../src/routes/country";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api/", countryRoute);

app.get("/", (req, res) => {
    res.send({message: "Welcome to the homepage!"})
})

app.listen(port, () => {
    console.log(`Server is running on ${port}...`)
})