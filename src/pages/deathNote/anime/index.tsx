import AnimePlayer from "../../../components/animePlayer";
import Navbar from "../../../components/navbar";
import DeathNoteSeries from "../../../ts/series/deathNote";
import '../deathNote.css';

const episode = parseInt(window.location.href.split('/').pop()||'0')||0;

export default function DeathNoteAnime(props) {

    return <div className="deathNote deathNoteAnime page-block">
        <Navbar />
        <AnimePlayer currentEpisode={episode} series={DeathNoteSeries} />
    </div>

}