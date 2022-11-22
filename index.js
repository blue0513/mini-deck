const { app, BrowserView, BrowserWindow } = require("electron");
const width = 800;
const height = 600;

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width,
    height,
    alwaysOnTop: true,
    hasShadow: false,
    titleBarStyle: "hidden",
  });
  const view = new BrowserView();

  win.setBrowserView(view);
  view.setBounds({
    x: 0,
    y: 0,
    width,
    height,
  });

  win.loadURL("file://" + __dirname + "/index.html");
  view.webContents.loadURL("https://tweetdeck.com");
});
