'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 200,
    x: 0,
    y: 0,
    movable: true,
    frame: false,
    resizable: true,
    hasShadow: false,
    alwaysOnTop: true,
    titleBarStyle: 'customButtonOnHover',
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
