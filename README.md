# Collaborative Playlist Application 🎵 
📦 🚀  React-Native application creates a collaborative playlist by integrates songs from youtube.

## Features

-   ✨ Share your playlist with people 
-   🐝 Let others contribute to your playlist
-   🌀  Two modes available: Contributor / Owner 

## Short description  
The application is a music application. Create your playlist. Share it with your friends. Contribute to each other's playlists. The application integrates resources from Youtube. 

Two modes are available: Contributor and Owner. Owner mode allows you to add and delete songs. Contributor mode only allows users to add songs to a specific playlist. The playlist can be found through the Playlist Id.

<!-- In the Owner mode, people can share a playlist and add songs to a playlist but only the owner will have complete control over which songs will be accepted to the playlist and which will not be accepted. This will be perfect in for example Event-based scenarios where there might be multiple people who might request songs constantly, for example, a house party. In the Contributor mode, all people are able to add and manipulate the playlist and also play the playlist on their own -->


## Integrated Technologies
- React Native
- Firebase Auth
- Firebase Firestore - Database Storage with Realtime Data Changes 
- Redux - For Data 
- Third-party Component called react-native-youtube-iframe which can be found [here](https://www.npmjs.com/package/react-native-youtube-iframe)
- Youtube API for Searching Song
- Redux Thunk for Asynchronous API calls and adding to Redux

## App Features
- Log in ✓
- Sign up ✓
- Sign out ✓
- Player for playing and controlling Songs ✓
- Slider for Scrolling within a Song ✓
- Add and remove Playlists ✓
- Share Playlists ✓
- Songs List View ✓
- Youtube API integration ✓ 
- Add song using Youtube Search API ✓
- Remove songs from firebase and UI✓
- Contributor able to Add Song ✓
- Different levels of authentications: owner, contributor✓
- Playlist sharing with Contributors ✓
- UX Design suitable for both Android and IOS ✓
 


                   

## Install
### Android
```
npm install
npm start
npx react-native run-android
```

### IOS (XCode needed)
```
cd ios && pod install
npx react-native start
npx react-native run-ios
```

## Architecture/code
The main idea is that we leverage the Model-View-Presenter structure with an added components folder. Views represent entire Screens while Components represent a small reusable Component in that screen. Therefore you will only see 5 Views that represent each Screen and around 10+ components that represent smaller components within those screens. Since we are using Redux this is essentially our model. We do have a model folder but it is only used for Typescript definition that we might use. Presenters are where we connect Redux with our components and views, they also contain some API calls.

In the view folder, you can see the Views for our application.

In the presenters folder, you can see the Presenters for our application.

In the components, you can see smaller components that are used to build up a view.

In the model folder, you can see some Typescript typing used to define some objects that we use. 

In the store we describe redux store which is essentially our "model" in the MVP and how we leverage redux in our application.

We also have a util folder that describes our API call. 

In the android folder is the actual android project which is built and used for testing

In the IOS folder is the actual IOS project which is built and used for testing

### Navigation

We leverage [React Native Navigation](https://github.com/wix/react-native-navigation) for the navigation. You will see that in [App.tsx](https://github.com/penguin-squad/playlist-app-rn/blob/master/App.tsx) in here you will see different <Screen> components and they link to specific Views. In the code you will see the use of  **props.navigation.navigate("Home")** which helps us navigate throughout the code.


# Web APIs
We used a single source which was the [Youtube Search API](https://developers.google.com/youtube/v3/docs/search/list). We used it to help people search for songs and add them to the playlist. 

We also leverage Firebase Auth and Firestore. We also leverage the Real-time activity you can have in firestore.

We have a loader which should pop up whenever we do login, register, search song, get playlists and loading of the next Song in the playlist(since we use a youtube iframe for playing the song)

We store the data in firestore which makes it persist and we are also able to share playlist between devices and they are able to add songs as well and only delete songs if they are the owner.

# Usability/User experience/ improve usability
The target group is for people that enjoy music. This application works the best in-home party situation where you might want people to add songs to your playlists.

System status is visible through text popups and loading screens.

These are the user feedback we have acted upon:

* Username was switched to Email to more clearly reflect what was needed for input, this was implemented in Login and SignUp
* A simple way to share playlists was added by being able to copy the playlist id to the clipboard
* Initially we had 3 dots which was an option button where you could delete the songs, we changed it so that you could swipe an element in a songlist to delete it. 
* Text in Songlist was unclear changed from "search for songs" to + "search for new song to add"
* Initially we could access the song player from playlist view and song view however it was changed so that only songlist had access to player
* logout changed the design to not take away the from the main functionality. But always be available on all views. 
* Changed to calmer design and added to Playlists, Songs, and player views
* Changed so that you cant click back to the login screen


# Group cooperation
Tanveer has worked with Youtube Search API, (Youtube, SoundCloud (issues), Spotify (issues)), application testing for the entire workflow to discover bugs, integrated third-party component for playing a song from Youtube within React Native.

Taqui worked on the Redux logic for User and Playlist with Redux Thunk, Firebase Auth with Login and SignUp, Firestore setup the initial database structure for Playlists and integrated with Redux Thunk, worked on the Player Logic (play, pause, next and get current for a song), Integrated Youtube API into the platform with Search and Displayed the Search Results, fixed bugs regarding the logic of the application, implemented some of the Loading Logic.

Jiatong worked on building the views of sign-in and sign-up. Explore the toasts, loading, menu, and contributor view, worked with Modals for Contributor View, worked on making StartPage cleaner,  Fix small bugs to make the whole app run smoother. Implemented Loading in SignUp and Login.

Anna implemented on functionality, looks, Firebase and Redux/Thunk logic of Playlists, Songs, Player Views. Firebase and redux logic for deleting playlists, Songs, Logout auth. Playlist app for IOS. UX and UI compliable with best practices for both Android and IOS. Migration to libraries that work on both Android and IOS

Araman worked on making sure we leverage MVP in the application, worked on the implementation of the user page in the application and fixed the readme file on the Github repo with animation which shows how the application works, worked on initial research of Redux, Changed the application to leverage React Native CLI from Expo CLI because we needed some Native Components.


## Screenshots
## Android version
![Android](https://user-images.githubusercontent.com/42935270/118625677-82c29880-b7ca-11eb-9c07-2b84a6d1d2c3.gif)




## IOS version
![IOS](https://user-images.githubusercontent.com/42935270/118562101-5f690080-b76c-11eb-95a1-d3fdf48461f1.gif)


## Usage

#### If you have a previous version uninstall it first 
You install the app by going to our dropbox link: https://www.dropbox.com/sh/1nuyj9t6i3n6hcx/AAADj-RZDiVlB9yunuT02Mura?dl=0

APK for the android version
IPA for the IOS version

### Android version
You will need to change your android settings to allow unknown sources to install third-party apps. You will then install the APK in the dropbox link. You can follow this tutorial for how to install it on Android https://www.youtube.com/watch?v=r9aikSC5rw8.



1. Download the APK from the dropbox link provided above.
2. You need a way to traverse the file system on Android. I recommend the App My Files which most likely some of you have. I use https://play.google.com/store/apps/details?id=com.sec.android.app.myfiles&hl=en&gl=US
3. Find where the APK is stored.
4. Click on the APK. A window will pop up telling you that you are not allowed to install apps from unknown sources.
5. Click on Setting in this Window.
6. A new window will pop up. Enable allow from these sources in the settings.
7. Use My Files to traverse to the apk again.
8. Click on it and press install
9. Then click open and it should work.

### IOS version

You will then install the .ipa from the dropbox link. 

#### If you have iTunes ( strongly RECOMENDED!)
You can follow this tutorial for how to install https://youtu.be/69391Thxoeg?t=128

1. Download .ipa from dropbox to you Mac
2. Import it to iTunes (make sure you iPhoneis connected)
3. Go to App section in iTunes --> find AppPlaylist--> push install --> apply

#### Installation with appCake

You can follow this tutorial for how to install it on https://www.youtube.com/watch?v=xhRWuNr_Xoc .

1. Download the .ipa file from the dropbox link provided above.
2. Get appCake app (if you don´t have it already)
3. Settings --> general --> Profiles and devise managers --> enterprise app--> appCake--> trust
4. Click on the .ipa A window will pop up telling you that you are not allowed to install apps from unknown sources.
5. Settings --> general --> Profiles and devise managers --> enterprise app--> playlistApp--> trust
6. Got oappCake --> select you playlistApp --> press install
7. Click to open
****

## Creators
- Internet-Person-IP
- annsudo
- ikirito98612
- Arman1989
- SkYiiR

