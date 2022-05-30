const Hapi = require('@hapi/hapi');
const hapiMongodb = require('hapi-mongodb');
const routes = require('./routes');

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.register({
        plugin: hapiMongodb,
        options: {
          url: 'mongodb+srv://Mafia:Dicoding123@andopt-api.pif6x.mongodb.net/?retryWrites=true&w=majority',
          settings: {
              useUnifiedTopology: true
          },
          decorate: true
        }
    });

    server.route(routes);

    await server.start();
    // console.log('Server running on %s', server.info.uri);
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();  