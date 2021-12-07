
export interface AnimeEpisode {
    title: string;
    videoUrl: string;
    resolution: {
        width: number;
        height: number;
    }
}

export default interface AnimeSeries {
    title: string;
    episodes: AnimeEpisode[];
}