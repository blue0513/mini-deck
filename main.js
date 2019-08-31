const { shell } = require('electron');

initialize();

function initialize() {
  const webview = getWebview();
  webview.addEventListener('dom-ready', function() {
    registerToOpenUrl(webview, shell);
  });
}

function getWebview() {
  const webview = document.getElementsByTagName('webview')[0]
  return webview;
}

function registerToOpenUrl(webview, shell) {
  // Hack: remove EventListener if already added
  webview.removeEventListener('new-window', openExternalUrl);
  webview.addEventListener('new-window', openExternalUrl);
}

function openExternalUrl(event){
  const url = event.url;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    shell.openExternal(url);
  }
};
