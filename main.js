const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
  const preload = path.join(__dirname, 'preload.js');

  mainWindow = new BrowserWindow(
      {width: 800, height: 600,
      webPreferences: {
          sandbox: true,
          nodeIntegration: false,
          preload: preload
      }
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }))
}

app.on('ready', createWindow)
