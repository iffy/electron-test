var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
    console.log('window all closed');
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', function() {
    console.log('ready');

    // start a python server
    // var subpy = require('child_process').spawn('python', ['-u', __dirname + '/server.py']);

    // subpy.stdout.on('data', function(data) {
    //     console.log('[OUT] ' + data);
    // });
    // subpy.stderr.on('data', function(data) {
    //     console.log('[ERR] ' + data);
    // });
    // subpy.on('close', function(code) {
    //     console.log('child process exited', code);
    // })

    mainWindow = new BrowserWindow({width: 800, height: 600});

    mainWindow.loadUrl('file://' + __dirname + '/index.html');

    //mainWindow.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    })
})