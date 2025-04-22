import { PageWrapper } from '../../components/page-wrapper'
import { summonerStore } from '../summoner-screen/summoner-store/summoner-store';
import { screenStore } from '../../stores/screen-store';
import { css } from '@emotion/css';

const HomeScreen = () => {
    const {
        loading,
        error,
        setSummonerNameWithTag,
        fetchSummoner,
    } = summonerStore;

    const handleSearchSummoner = () => {
        fetchSummoner()
        if (!error) {
            screenStore.go({ type: "summoner" })
        }

    }

    return (
        <PageWrapper>

            <input
                type="text"
                placeholder='Enter gameName + #tagLine'
                onChange={(e) => setSummonerNameWithTag(e.target.value)}
                className={css({
                    padding: "8px 12px",
                    width: "60%",
                    borderRadius: "15px"
                })}
            />


            <button onClick={handleSearchSummoner} disabled={loading}>
                Get Info
            </button>


            {error && <div style={{ color: "red" }}>Error: {error}</div>}
        </PageWrapper>
    )
}

export default HomeScreen