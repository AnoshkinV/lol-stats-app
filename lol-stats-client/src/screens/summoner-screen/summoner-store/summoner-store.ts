import { makeAutoObservable } from "mobx";


interface Summoner {
    puuid: string,
    gameName: string,
    tagLine: string,
} 

interface Mastery {
    puuid: string;
    championId: number;
    championName: string;
    lastPlayTime: number;

}

interface SummonerData {
    summonerData: Summoner,
    mastery: Mastery[]
}

export class SummonerStore {
    region: string = "europe";
    gameName: string = "";
    tagLine: string = "";
    puuid: string = "";
    result: SummonerData | null = null;
    loading = false;
    error: string | null = null;
    mastery: Mastery[] | null = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setRegion(region: string) {
        this.region = region;
    }

   setSummonerNameWithTag(value: string) {
    const [name, tag] = value.split("#");
    this.gameName = name || "",
    this.tagLine = tag || ""
   }

    async fetchSummoner() {
        if (!this.gameName || !this.tagLine) {
            return;
        }

        this.loading = true;
        this.error = null;

        try {
            const response = await fetch(
                `http://localhost:5000/api/${this.region}/summoner-full/${this.gameName}/${this.tagLine}`
            )
            if (!response.ok) {
                throw new Error("Summoner not found");
            }
            
            this.result = await response.json();
            console.log(response)
        } catch (e: any) {
            this.error = e.message;
        } finally {
            this.loading = false;
        }
    }

}

export const summonerStore = new SummonerStore();