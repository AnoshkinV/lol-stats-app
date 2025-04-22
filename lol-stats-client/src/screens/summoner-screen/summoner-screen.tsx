import { observer } from "mobx-react-lite"
import { summonerStore } from "./summoner-store/summoner-store"
import { PageWrapper } from "../../components/page-wrapper";
import Loading from "../loading-screen/loading";


const SummonerScreen = observer(() => {

    const {
        result,
        loading
    } = summonerStore;

    // const lastTimePlayed = result &&
    //     new Date(result.mastery[0].lastPlayTime).toLocaleDateString("en-GB", {
    //         hour: "2-digit",
    //         day: "2-digit",
    //         month: "short"
    //     })


    if (loading || !result) {
        return (
            <Loading />
        )
    }

    return (
        <PageWrapper>
            <div>
                <p>Summoner: {result.summonerData.gameName}#{result.summonerData.tagLine}</p>
                {/* <p>PUUID: {result.summonerData.puuid}</p> */}
                <h4>Top Mains</h4>
                {result.mastery.slice(0, 3).map((main) => (
                    <div>
                        <p>{main.championName}</p>
                    </div>
                ))}
                {/* <p>Last time played {lastTimePlayed}</p> */}
            </div>
        </PageWrapper>
    )
})

export default SummonerScreen