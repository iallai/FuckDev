var Hapi = require('hapi');
var Vision = require('vision');
var HapiReactViews = require('hapi-react-views');


var server = new Hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 8000
});
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

            reply.view('index');
        }
    });

    server.route({
        method: 'GET',
        path: '/battle',
        handler: function (request, reply) {

            reply.view('battle');
        }
    });
    server.route({
        method: 'GET',
        path: '/battle/wow',
        handler: function (request, reply) {
          server.register({
              register: require('hapi-sequelize'),
              options: {
                  database: 'myDatabase',
                  username: null,
                  password: null,
                  host: 'localhost',
                  port: 3306,

              }
          }, function(err) {
              if (err) {
                  server.log('hapi-sequelize error: ' + err);
                  throw err;
              }

              reply.view('wow');
          });

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
