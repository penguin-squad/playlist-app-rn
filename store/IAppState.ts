import Playlist from '../models/Playlist'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
export default interface IAppState {
    playlists: Playlist[],
    user:FirebaseAuthTypes.User
}