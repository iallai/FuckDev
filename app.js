var Hapi = require('hapi');
var Vision = require('vision');
var HapiReactViews = require('hapi-react-views');


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
                user: 'reader',
                pass: 'fuckshitcomeonbaby',
                dialect: 'mysql',
                port: 3306,
                 host: '119.18.194.6'

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
        path: 'views'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
          var db = request.server.plugins['hapi-sequelized'].db.sequelize;
          db.query("SELECT account,class,race,name,online,level FROM `characters` Where online = 1", { type: db.QueryTypes.SELECT})
              .then(function(users) {
                  reply.view('battle',{users:users});
          });
        }
    });

    // server.route({
    //     method: 'GET',
    //     path: '/battle',
    //     handler: function (request, reply) {
    //         var db = request.server.plugins['hapi-sequelized'].db.sequelize;
    //         db.query("SELECT account,class,race,name,online,level FROM `characters` Where online = 1", { type: db.QueryTypes.SELECT})
    //             .then(function(users) {
    //                 reply.view('battle',{users:users});
    //         });
    //     }
    // });
    // server.route({
    //     method: 'GET',
    //     path: '/battle/wow',
    //     handler: function (request, reply) {
    //       var db = request.server.plugins['hapi-sequelized'].db.sequelize;
    //       db.query("SELECT account,class,race,name,online,level FROM `characters` Where online = 1", { type: db.QueryTypes.SELECT})
    //           .then(function(users) {
    //               reply.view('wow',{users:users});
    //       });
    //     }
    // });
    //
    //
    // server.route({
    //     method: 'GET',
    //     path: '/battle/dota2',
    //     handler: function (request, reply) {
    //       var db = request.server.plugins['hapi-sequelized'].db.sequelize;
    //       db.query("SELECT account,class,race,name,online,level FROM `characters` Where online = 1", { type: db.QueryTypes.SELECT})
    //           .then(function(users) {
    //               reply.view('dota2',{users:users});
    //       });
    //     }
    // });
    server.start(function (err) {

        if (err) {
            throw err;
        }

        console.log('Server is listening at ' + server.info.uri);
    });
});
