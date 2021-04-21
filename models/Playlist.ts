import Song from './Song';

export default interface Playlist{
    id: string;
    name: string
    Songs: Song[];
    
}