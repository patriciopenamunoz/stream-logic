var selected_live_image = 'null';
var process_counter = 0;

const path = require('path');

exports.setLiveImage = function(new_image) {
  selected_live_image = new_image;
  process_counter++;
}

function getUrlProperties(url) {
  return url.match(/[^\/].*?(?=\/|$)/gm);
}

var quit = function () {
    var ipc = require('electron').ipcRenderer
    return ipc.sendSync("app", "quit")[0];
};

// server handler
window.addEventListener("load", function () {
    var ipc = require('electron').ipcRenderer;
    ipc.on("request", function (event, req, port) {
      var url_properties = getUrlProperties(req.url);
      var send = '';
      var request_path = '';
      var headers = {};

      switch (url_properties[0]) {
        case 'properties':
            send = JSON.stringify({
              process_counter: process_counter,
              media_content_type: 'image'
            });
            headers = {"content-type": "application/json"};
          break;
        case 'media':
            send = selected_live_image;
            headers = {"content-type": "image/*"};
          break;
        case 'live':
          request_path = path.join(__dirname,'/response.html');
          headers = {"content-type": "text/html;charset=UTF-8"};
          send = fs.readFileSync(request_path);
        default:
          request_path = path.join(__dirname,'/response.html');
          headers = {"content-type": "text/html;charset=UTF-8"};
          send = fs.readFileSync(request_path);
      }
      ipc.send(port, 200, headers, send);
    });
}, false);
