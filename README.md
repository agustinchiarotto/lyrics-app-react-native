# Lyrics App - React Native

This mobile application was developed using React Native v0.63, Typescript and Redux. The data is retrieved from the https://api.lyrics.ovh/v1/ API.

This app has three sections:

- SEARCH: 
  - A screen with a form consisting of two text inputs: ‘artist’ and ‘song title’. After filling both inputs and submitting, a screen containing the song lyrics is presented.
  - Lyrics are retrieved from the https://lyricsovh.docs.apiary.io/ Rest API.
  - An error message is be displayed if the lyrics can’t be retrieved for whatever reason.
  - Below the search form, a ‘Previous search’ section showing the artist and song title of the latest lyrics successfully retrieved after a search (only if there was a previous successful search). The user is able to tap on it to see the lyrics on a new screen.
  - Search functionality is only available while having internet access.

- HISTORY:
  - A screen listing the previously retrieved songs.
  - The user must can tap on any song to see its lyrics on a new screen.
  - History section is available without internet access.
  - The history can be be cleared.

- LYRICS:
  - A screen showing the complete lyrics of the song.

## Demo Videos

- [Video on iPhone 11 Simulator](https://drive.google.com/file/d/1r4RDQ6kkwjmFrIWDGNwgvfwjFlRTFa7N/view?usp=sharing)
- [Video on Android Pixel Emulator](https://drive.google.com/file/d/1lZFhiORNRlkcu1GPH7Zpg2zbITDBVQs-/view?usp=sharing)

## Getting started

- First make sure to have `node`, `yarn` and `react-native-cli` installed on your machine.
- You will need a Mac in order to run the iOS app. In that case, make sure to have `cocoapods` installed.
- You also need to have Android Studio and XCode (if on Mac) installed.

After cloning the repository to your local machine, open a terminal on the project's root folder and execute the following command to install the needed `node_modules`:

```
$ yarn install
```

Then (if on Mac), execute this command to install the needed `Pods`:

```
$ cd ios && pod install
```

Finally, go back to the project's root folder:

```
cd ..
```

## Create the .env file

Create a `.env` file in project's root folder and write this inside the file:

```
API_URL=https://api.lyrics.ovh/v1/
```

## Launch iOS

Execute:

```
$ react-native run-ios
``` 

or launch the app from XCode opening the `.workspace` file.

## Launch Android

- Make sure to have an Android emulator running or a physical device connected to your machine. Then execute:

```
$ react-native run-android
```

## VSCode extensions

- Prettier
- ESLint
- TSLint
- Editorconfig

## Libraries used

- React Native v0.63.0

- TypeScript v3.8.3

- `react-native-config` -
This library is used to be able to access environmental variables defined in a `.env` file. On real projects, the `.env` is not committed to the repository and is a way to keep data safe, such as API's URLs, services Keys such as Google, Stripe, among other sensitive data.

- `redux` (along with `react-redux` and `redux-thunk`) -
Used for global state management on the app.

- `redux-form` -
Used for user form inputs and provides good handling of data and validation. The filled form data can be accessed from any part of the app as it is centralized in the Redux store.

- `styled-components` -
Nice way to add styles to components and write then in a very intuitive and clean way.

- `react-navigation` v5 -
Used to add navigation to the app.

- `react-native-vector-icons` -
Used to add generic, predefined and public icons in the app.

- `eslint` and `prettier` -
Used to find and fix problems in the code. Also, ensure consistency in code writing along the project.

- `husky` (along with `lint-staged`) -
Used to run specific scripts at the moment a commit is done. In the case of this project, it is used to check that there are no TypeScript errors and then, using `lint-staged` automatically fixes issues related to `prettier`

:v: **Enjoy!**
