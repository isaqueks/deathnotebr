import { useState } from "react";
import AnimePlayer from "../../../components/animePlayer";
import CommentSection from "../../../components/commentSection";
import Navbar from "../../../components/navbar";
import Padding from "../../../components/padding";
import EpisodeContextProvider from "../../../contexts/episodeContext";
import { AnimeEpisode } from "../../../ts/series";
import DeathNoteSeries from "../../../ts/series/deathNote";
import '../deathNote.css';

function setTitle(ep: AnimeEpisode) {
    document.title = `${ep.title} (Dublado) - Death Note - DeathNoteBR`;
}

export default function DeathNoteAnime(props) {

    const [ episodeIndex, setEpisode ] = useState(parseInt(window.location?.href?.split('/')?.pop().replace('html', '')||'0')||0);

    const goToEpisode = n => {
        window.history?.pushState(null, null, `/watch/${n}`);
        return setEpisode(n);
    }

    const currEp = DeathNoteSeries.episodes[episodeIndex];

    setTitle(currEp);

    return <div className="deathNote deathNoteAnime page-block">
        <EpisodeContextProvider navigationContext={{
            currentEpisodeIndex: episodeIndex,
            setCurrentEpisodeIndex: n => goToEpisode(n),
        }}>
            <Navbar title={currEp.title} />
            <AnimePlayer currentEpisode={episodeIndex} series={DeathNoteSeries} />
            <Padding>
                <CommentSection title={`${currEp.title} - Death Note - DeathNoteBR`} identifier={currEp.title} />
            </Padding>
        </EpisodeContextProvider>
    </div>

}