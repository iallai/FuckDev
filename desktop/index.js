/**
 * Created by iallai on 27/9/15.
 */

var Hapi = require('hapi');
var Vision = require('vision');
var HapiReactViews = require('hapi-react-views');


var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
    // Create the browser window.


    var server = new Hapi.Server();
    server.connection({
        host: '0.0.0.0',
        port: 8000
    });
    server.register(
        [
            {
                register: require('hapi-sequelized'),
                options: {
                    database: 'tchar',
                    user: 'root',
                    pass: 'zxl223322',
                    dialect: 'mysql',
                    port: 3306
                    //models: 'models/**/*.js',
                    //sequelize: {
                    //    define: {
                    //        underscoredAll: true
                    //    }
                    //}
                }
            },
        ], function(err) {
            if (err) {
                console.error('failed to load plugin');
            }

        }
    );
    server.register(Vision, function (err) {

        if (err) {
            console.log('Failed to load vision.');
        }

        server.views({
            engines: {
                jsx: HapiReactViews
            },
            relativeTo: __dirname,
            path: '../views'
        });

        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, reply) {

                reply.view('index');
            }
        });

        server.route({
            method: 'GET',
            path: '/battle',
            handler: function (request, reply) {
                var db = request.server.plugins['hapi-sequelized'].db.sequelize;
                db.query("SELECT * FROM `characters`", { type: db.QueryTypes.SELECT})
                    .then(function(users) {
                        reply.view('battle',{users:users});
                    });
            }
        });
        server.route({
            method: 'GET',
            path: '/battle/wow',
            handler: function (request, reply) {
                var db = request.server.plugins['hapi-sequelized'].db.sequelize;
                //db.query("SELECT * FROM `characters`", { type: db.QueryTypes.SELECT})
                //    .then(function(users) {
                reply.view('wow');
                //console.log(users)
                //});




            }
        });


        server.route({
            method: 'GET',
            path: '/battle/dota2',
            handler: function (request, reply) {
                reply.view('dota2');
            }
        });
        server.start(function (err) {

            if (err) {
                throw err;
            }

            console.log('Server is listening at ' + server.info.uri);
        });
    });




    mainWindow = new BrowserWindow({width: 800, height: 600});

    // and load the index.html of the app.
    mainWindow.loadUrl('http://localhost:8000');
    mainWindow.openDevTools();
    // Open the DevTools.


    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});