const electron = require('electron');
const {app, BrowserWindow} = electron;

const path = require('path');
const url = require('url');
const ipc = require('electron').ipcMain;

console.log(process.versions);

function createWindow(width,height,page) {
  let window = new BrowserWindow({width: width, height:height,icon: path.join(__dirname, '/lib/img/icon.png')});
  window.loadURL(url.format({
    pathname: path.join(__dirname, page),
    protocol: 'file',
    slashes: true
  }));
  window.setResizable(false);
  window.setMenu(null);
  window.setMaximizable(false);
  return window;
}

exports.createWindow = createWindow;
var window;

app.on('ready', () => {
  ipc.on("console", function (ev) {
    var args = [].slice.call(arguments, 1);
    var r = console.log.apply(console, args);
    ev.returnValue = [r];
  });
  ipc.on("app", function (ev, msg) {
    var args = [].slice.call(arguments, 2);
    ev.returnValue = [app[msg].apply(app, args)];
  });

    window = createWindow(1500,630,'app.html');
    window.webContents.once('did-finish-load', () => {
    var http = require("http");
    var crypto = require("crypto");
    var server = http.createServer((req, res) => {
      var port = crypto.randomBytes(16).toString("hex");
      ipc.once(port, function (ev, status, head, body) {
        res.writeHead(status, head);
        res.end(body);
      });
      try {
        window.webContents.send("request", req, port);
      } catch (e) {
        console.log('error');
      }
    });
    server.listen(8349);
// uncomment this line only for development purposes.
//    window.webContents.openDevTools()
  });
});

app.on('window-all-closed', app.quit);
