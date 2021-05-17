# Collaborative Playlist Application 🎵 
📦 🚀  React-Native application creates collaborative playlist by integrates songs from youtube.

## Features

-   ✨ Share your playlist with people 
-   🐝 Let others contribute to your playlist
-   🌀  Two modes availible: Contributer / Owner 

## Short description  
The application will be a playlist application where you will be able to share a playlist that you have made with people and they will be able to contribute to that playlist. The application currently only intgrates youtube into the platform platform. The playlist will have modes one is Contributer and One is Owner. When you are an owner you are in Owner mode and you are able to add and delete songs to your own playlist. When you do not own the playlist you are in Contributer mode where you are allowed to add songs to a playlist.

<!-- In the Owner mode, people can share a playlist and add songs to a playlist but only the owner will have complete control over which songs will be accepted to the playlist and which will not be accepted. This will be perfect in for example Event-based scenarios where there might be multiple people who might request songs constantly, for example, a house party. In the Contributer mode, all people are able to add and manipulate the playlist and also play the playlist on their own -->


## Integrated Technologies
- React Native
- Firebase Auth
- Firebase Firestore - Database Storage with Realtime Data Changes 
- Redux - For Data 
- Thirdparty Component called which can be found [here](https://www.npmjs.com/package/react-native-youtube-iframe)
- Youtube API for Searching Song
- Redux Thunk for Asynchronous API calls and adding to Redux

## App Features
- Log in ✓
- Sign up ✓
- Player for playing the Song and Scrolling Within a Song ✓
- Playlists (list interface) ✓
- Share Playlists ✓
- Song List View ✓
- Be able to play the songs ✓
- Youtube API integration ✓ 
- Add song using Youtube Search API ✓
- Add songs/remove songs ✓
- Contributer able to Add Song ✓
- Create playlist/remove playlist ✓
- UX Design ✓
- Different levels of authentications: owner, contributer✓
- Playlist sharing with Contributers✓
 


                   

## Install

```
npm install
npm start
npx react-native run-android
```

## Architecture/code
The main idea is that we leverage Model-View-Presenter strucutre with an added components folder. Views represent entire Screens while Components represent a small Component in that screen. Therefore you will only see 5 Views which represent each Screen and around 10+ components which represent smaller components within those screens. Since we are using Redux this is essentially our model. We do have a model folder but it is only used for Typescript definition that we might use. Presenters are where we connect Redux with our components and views, they also contain our some API calls.

In the view folder you can see the Views for our application.

In the presenters folder you can see the Presenters for our application.

In the components you can see smaller components which are used to build up a view.

In the model folder you can see some Typescript typing used to define some objects that we use. 

In the store we describet redux store which is essentially our "model" in the MVP and how we leverage redux in our application.

We also have a util folder that describes our API call. 

In the android folder is the actual android project which is built and used for testing

In the IOS folder is the actual IOS project which is built and used for testing

### Navigation

We leverage [React Native Navigation](https://github.com/wix/react-native-navigation) for the navigation. You will see that in [App.tsx](https://github.com/penguin-squad/playlist-app-rn/blob/master/App.tsx) in here you will see different <Screen> components and they link to specific Views. In the code you will see the use of  **props.navigation.navigate("Home")** which helps us navigate throughout the code.


# Web APIs
We used a single source which was the [Youtube Search API](https://developers.google.com/youtube/v3/docs/search/list). We used it to help people search for songs and add them to the playlist. 

We also leverage Firabase Auth and Firestore. We also leverage the Real-time activity you can have in firestore.

We have a loader which should pop up whenever we do login, register, search song, get playlists and loading of the next Song in the playlist(since we use a youtube iframe for playing the song)

We store the data in firestore which makes it persist and we are also able to share playlist between devices and they are able to add songs aswell and only delete songs if they are the owner.

# Group cooperation
Tanveer has worked with Youtubr Search API, (Youtube, SoundCloud (issues), Spotify (issues)), application testing for the entire workflow to discover bugs, intergrated thirdparty component for playing a song from Youtube within React Native.

Taqui worked on the Redux logic for User and Playlist with Redux Thunk, Firebase Auth with Login and SignUp, Firestore setup the intial database structure for Playlists and integrated with Redux Thunk, worked on the Player Logic (play, pause, next and get current for a song), Integrated Youtube API into the platform with Search and Displayed the Search Results, fixed bugs regarding logic of the application, implemented some of the Loading Logic.

Jiatong worked on build the views of sign in and sign up. Explore the toasts, loading, menu and contributor view, worked with Modals for Contributer View, worked on making StartPage cleaner,  Fix small bugs to make the whole app run smoother. Implemented Loading in SignUp and Login.


## Screenshots
![ezgif com-gif-maker(1)](https://user-images.githubusercontent.com/42935270/118402599-df0ea680-b66a-11eb-87fe-0144476c58b3.gif)


## Usage
### DISCLAIMER: THIS APP ONLY WORKS ON ANDROID (since some of the dev team do not have macBooks and cant run virtual machine of iOS)
#### If you have a previous version uninstall it first 
You install the app by going to our dropbox link: https://www.dropbox.com/s/ld1sktshh0fs9eh/app-release.apk?dl=0

Currently there only exists an android version for the application. You will need to change you android settings to allow unknown sources to install third party apps. You will then install the APK in the dropbox link. You can follow this tutorial for how to install it on Android https://www.youtube.com/watch?v=r9aikSC5rw8.



1. Download the APK from the dropbox link provided above.
2. You need a way to traverse the file system on Android. I recommend the App My Files which most likely some of you have. I use https://play.google.com/store/apps/details?id=com.sec.android.app.myfiles&hl=en&gl=US
3. Find where the APK is stored.
4. Click on the APK. A window will pop up telling you that you are not allowed to install apps form unknown sources.
5. Click on Setting in this Window.
6. A new window will pop up. Enable allow from this sources in the settings.
7. Use My Files to traverse to the apk again.
8. Click on it and press install
9. Then click open and it should work.


## Creators
- Internet-Person-IP
- annsudo
- ikirito98612
- Arman1989
- SkYiiR

