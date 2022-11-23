const { app, BrowserView, BrowserWindow } = require("electron");
const width = 500;
const height = 300;

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width,
    height,
    alwaysOnTop: true,
    hasShadow: false,
    titleBarStyle: "hidden",
  });
  const view = new BrowserView();

  win.setWindowButtonVisibility(false);
  win.setBrowserView(view);

  view.setBounds({
    x: 0,
    y: 0,
    width,
    height,
  });
  view.setAutoResize({
    width: true,
    height: true,
  });

  view.webContents.loadURL("https://tweetdeck.com");
  view.webContents.on("did-finish-load", () => {
    view.webContents.insertCSS("body { -webkit-app-region: drag; }");
  });
});
