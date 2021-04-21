# Collaborative Playlist Application 🎵 
📦 🚀  React-Native application creates collaborative playlist by integrates songs from several platforms 

## Features

-   🔎 Integrate music from multiple platforms 
-   ✨ Share your playlist with people 
-   🐝 Let others contribute to your playlist
-   🌀  Two modes availible: Controled / Free 

## Short description  
The application will be a playlist application where you will be able to share a playlist that you have made with people and they will be able to contribute to that playlist. The application will be able to integrate multiple sources such as Spotify, Youtube, and SoundCloud into a singular unified platform. The playlist will have modes one is Controlled and One is Free. In the controlled mode, people can share a playlist and add songs to a playlist but only the owner will have complete control over which songs will be accepted to the playlist and which will not be accepted. This will be perfect in for example Event-based scenarios where there might be multiple people who might request songs constantly, for example, a house party. In the free mode, all people are able to add and manipulate the playlist and also play the playlist on their own 

## App Features(completed features are marked with ✓)
- Log in page ✓
- Sign up page ✓
- Firebase auth integration ✓
- Playlist view (list interface) ✓
- Be able to play the songs ✓
- First API integration ✓ 
- Search the songs from API ✓
- Redux ✓ 
- Add song/ playlist with the link
- 2nd API integration
- Add songs/ remove songs
- Create playlist/remove playlist
- UX Design
- Connect our own playlist from different platforms
- Different levels of authentications: owner, guest
- Playlist sharing
 


                   

## Install

```
code here
```

## Project Structure
Currently, the project is a bit disorganized and we hope to improve it. The main idea is that we leverage Model-View-Presenter strucutre with an added components folder where you can find individual components and where the views represent multiple components to fill out a screen.

In the view folder you can see the Views for our application.

In the components you can see smaller components which are used to build up a view

In the model folder you can see some Typescript typing used to define some objects that we use. 

In the store we describe our current redux store which contains mock data and how we leverage redux in our application.

We also have a presenter folder which is currently not utilized.

We also have a util folder that describes our api connection. 

In the android folder is the actual android project which is built and used for testing

In the IOS folder is the actual IOS project which is built and used for testing

## Screenshots

## Usage
You install the app by going to our dropbox link: https://www.dropbox.com/s/i08puelqdbii0h4/app-release.apk?dl=0

Currently there only exists an android version for the application. You will need to change you android settings to allow unknown sources to install third party apps. You will then install the APK in the dropbox link.

## Contribution
Please send issues and pull requests with your ideas or bugs 

## Issues

Issues should be categorized using the existing labels (bug, documentation, enhancement, etc.).

They should also immediately be linked to the DECIDE project board (specifically the backlog column, i.e. the one chosen by default), so that they are visible there as well.

**IMPORTANT**: Assign yourself to an issue before you start working on it. This is to avoid having two or more people accidentally doing "double work". Make sure to coordinate with the assignee of an issue before starting to work on it yourself.

## Commits

Commit messages should always be written in an editor and not the terminal. This is to avoid the pitfall of short and non-descriptive commit messages.

```
git commit -m "Short message"       # bad
git commit                          # good
```

Note that you can [change](https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_core_editor) which editor git will open, in case you don't like the default one. To switch to *nano*, for example, use: `git config --global core.editor nano`.

That said, if a short message suffices to explain the commit, that is perfectly fine.

Commit messages should be linked to corresponding issues where applicable (this is done by referencing the issue number as `#<issue number>`). Note that commits should almost always be related to some issue (see grading criteria). If there's no related issue, one should probably be created before committing.

Commit messages should follow a prefix-convention, with the following prefixes:
* feat - for new features/functionality
* fix - for bug fixes
* doc - for documentation
* refactor - for refactoring
* format - for changing formatting such as newlines, indentation, etc.
* test - for editing or adding new tests (to already existing features, see paragraph below)
* misc - for anything not covered by prefixes above

**Note** that each commit that adds new functionality must also contain corresponding tests for that functionality (in the same commit).

**Examples:**

```
(feat) Implement LIC 7 along with corresponding unit tests, fixing #12
```

```
(test) Add additional unit test for LIC 7

This covers a previously untested edge case where X < 0. Related to #12.
```

## Branches

Branches should be linked to issues through their names, as:  
`issue-<issue number>-short-description-of-branch`

**Example:** `issue-12-lic-7` if issue 12 is related to implementing LIC 7.

(This naming convention adheres to [widely used community conventions](https://github.com/agis/git-style-guide#branches).)

## Pull requests

* Make sure to mention the issue that a pull request targets. This will close the issue automatically, when the branch is merged ([source](https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)).
* At least two people have to code review before merging.
* Merge into the `development` branch. 

Example:
```
This PR implements LIC 0.

Fixes: #6
```


## Creators
- Internet-Person-IP
- annsudo
- ikirito98612
- Arman1989
- SkYiiR

