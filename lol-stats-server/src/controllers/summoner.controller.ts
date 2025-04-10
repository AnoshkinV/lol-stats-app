import { Request, Response } from "express";
import { fetchSummonerByRiotId } from "../services/summoner.service";
import { fetchChampionList, fetchChampionMastery } from "../services/riot.service";


export const getSummonerByRiotId = async (req: Request, res: Response) => {
    const { region, gameName, tagLine } = req.params;
    try {
        const data = await fetchSummonerByRiotId(region, gameName, tagLine);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "failed to fetch summoner data" })
    }
};

export const getSummonerData = async (req: Request, res: Response) => {
    const { region, gameName, tagLine } = req.params;

    try {

        const summonerData = await fetchSummonerByRiotId(region, gameName, tagLine);
        const puuid = summonerData.puuid;

        const champions = await fetchChampionList();

        const championMap: Record<string, string> = {};
        for (const champ of Object.values(champions.data)) {
            championMap[(champ as any).key] = (champ as any).id;
        }

        const masteryData = await fetchChampionMastery(puuid);

        const masteryWithNames = masteryData.map((mastery: any) => ({
            ...mastery,
            championName: championMap[mastery.championId.toString()] || "Champion not found"
        }));

        res.json({
            summonerData,
            mastery: masteryWithNames
        });

    } catch (error) {
        console.error("Error fetching summoner data:", error);
        res.status(500).json({ message: "Error fetching data" });
    }
};
