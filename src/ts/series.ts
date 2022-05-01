
export interface AnimeEpisode {
    title: string;
    videoUrl: string;
    description?: string;
    resolution: {
        width: number;
        height: number;
    }
}

export default interface AnimeSeries {
    title: string;
    episodes: AnimeEpisode[];
}