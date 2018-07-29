# Example App

Source code for the Web & the React Native app for iOS and Android.

## Project dependencies

* NVM
* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com/)
* TypeScript

To use the version of Node set in the `.nvmrc` file run:

```sh
nvm install && nvm use
```

## Build/Run

Start React Native server:

```sh
yarn start
```

Build & Run the source-code with Typescript:

```sh
# Build & Run iOS
yarn start:ios

# Build & Run Android
yarn start:android
```

### Run multiple simulators

* `cd /Applications/Xcode.app/Contents/Developer/Applications`
* `open -n Simulator.app`
* Go to new simulator `Hardware > Device > Chosen iOS version > and choose any of the other iOS devices`

## Tests

To run the tests use:

```sh
# To run the unit tests. Report is in './.coverage'
yarn test:unit

# To update snapshots
yarn test:unit -- -u
```

# For development with TypeScript
yarn ts
```
