import { observer } from "mobx-react-lite"
import { summonerStore } from "./summoner-store/summoner-store"


const SummonerScreen = observer(() => {

    const {
        result,
        loading,
        error,
        setSummonerNameWithTag,
        fetchSummoner,
    } = summonerStore;

    return (
        <div>
            <h2>Summoner Info</h2>
            <div>
                <label>
                    Game Name:{" "}
                    <input
                        type="text"
                        onChange={(e) => setSummonerNameWithTag(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <button onClick={() => fetchSummoner()} disabled={loading}>
                    {loading ? "Loading..." : "Get Info"}
                </button>
            </div>

            {error && <div style={{ color: "red" }}>Error: {error}</div>}

            {result && (
                <div>
                    <h3>Result:</h3>
                    <p>Summoner {result.gameName}#{result.tagLine}</p>
                    <p>PUUID: {result.puuid}</p>
                </div>
            )}
        </div>
    )
})

export default SummonerScreen