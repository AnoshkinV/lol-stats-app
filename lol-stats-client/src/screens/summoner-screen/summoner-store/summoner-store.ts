import { makeAutoObservable } from "mobx";

interface Summoner {
    puuid: string,
    gameName: string,
    tagLine: string
}

export class SummonerStore {
    region: string = "europe";
    gameName: string = "";
    tagLine: string = "";
    puuid: string = "";
    result: Summoner | null = null;
    loading = false;
    error: string | null = null;

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
                `http://localhost:5000/api/${this.region}/summoner/${this.gameName}/${this.tagLine}`
            )
            if (!response.ok) {
                throw new Error("Summoner not found");
            }

            this.result = await response.json();
        } catch (e: any) {
            this.error = e.message;
        } finally {
            this.loading = false;
        }
    }

}

export const summonerStore = new SummonerStore();