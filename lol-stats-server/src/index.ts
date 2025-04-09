import { error } from "console";
import express, { response } from "express";

const PORT = 5000;

const app = express();

const RIOT_API_KEY = "RGAPI-3f94051e-89b0-4199-9557-c849ac3c75aa";

app.use(express.json());

app.get("/api/summoner/by-riotID/:gameName/:tagLine", async (req, res) => {
    const gameName = req.params.gameName;
    const tagLine = req.params.tagLine;

    const summonerRiotIdUrl = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${RIOT_API_KEY}`;

    try {
        const response = await fetch(summonerRiotIdUrl);
        if (response.ok) {
            const data = await response.json();
            res.json(data);
        } else {
            res.status(response.status).json({ error: "Error fetching data from API" });
        }
    } catch {
        res.status(500).json({ error: "Failed to fetch summoner data" });
    }
})

app.listen(PORT, () => console.log(`STARTED ON: ${PORT}`))