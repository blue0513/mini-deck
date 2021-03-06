# Mini Deck

This provides always-on-top & mini TweetDeck viewer.

[![Image from Gyazo](https://i.gyazo.com/a1c9e9061181e2e70902e6e15734b027.gif)](https://gyazo.com/a1c9e9061181e2e70902e6e15734b027)

NOTES: currently only macOS is supported

## Releases

You can download the application [here](https://github.com/blue0513/mini-deck/releases).

+ [v0.1.0](https://github.com/blue0513/mini-deck/releases/tag/0.1.0): Application distribution for macOS

## Features

+ Mini-size & frame-less window
+ Always on top
+ Resizable, movable, Zoomable
+ Usability as usual

## Usage

### On GUI App

Just start the app.

### On CLI

1. Run `npm install` to install packages
2. Run `npm start` in terminal

## Development Requirements

+ Twitter Account
+ Electron: `v6.x` or above

## Build as Application

### Build for Mac

1. Run `node build/build-mac.js`
2. In `./dist/mac`, you can find `mini-deck.app`
3. Double click `mini-deck.app` and start the app

### WIP: Build for Windows

1. Run `node build/build-win.js`
2. In `./dist/`, you can find `mini-deck Setup.exe`
3. Double click `mini-deck Setup.exe` and start the app

## Contribute

You can use [issues](https://github.com/blue0513/mini-deck/issues) as you like.
Not only suggestions but also questions are welcome!
