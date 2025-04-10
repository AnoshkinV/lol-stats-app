import express from "express";
import cors from "cors";
import router from "./routes/summoner.router";

const app = express();
const PORT = 5000;

app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
    console.log("SERVER STARTED ", PORT)
})
