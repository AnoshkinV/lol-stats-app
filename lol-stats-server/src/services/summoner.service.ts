import { config } from "../utils/config"

export const fetchSummonerByRiotId = async (region: string, gameName: string, tagLine: string) => {
    const url = `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${config.RIOT_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Error fetching data from api");
    }

    return response.json();
}