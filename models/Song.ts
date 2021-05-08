export default interface Song{
    title: string;
    duration: string;
    thumbnail: string;
    videoid: string;
    onOptionPress?: boolean;
    onAudioPress?: boolean;
    activeSong?: false,
    isPlaying?: false,
}