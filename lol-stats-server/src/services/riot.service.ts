import { config } from "../utils/config";


const CHAMPION_URL_LIST = "https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion.json"

export const fetchChampionList = async () => {
    const response = await fetch(CHAMPION_URL_LIST);
    if (!response.ok) {
        throw new Error("cannot fetch champions data");
    }
    const data = await response.json();
    console.log(data)
    return data
};

export const fetchChampionMastery = async (puuid: string) => {
    const url = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}?api_key=${config.RIOT_API_KEY}`
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("cannot get champion mastery")
    }
    return response.json();
}