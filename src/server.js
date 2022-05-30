const Hapi = require('@hapi/hapi');
const routes = require('./routes');
// const hapiMongodb = require('hapi-mongodb');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
            origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();

    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();


// mongodb+srv://Mafia:Dicoding123@andopt-api.pif6x.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://andopt-app:0987poiu@cluster0.nmek0.mongodb.net/?retryWrites=true&w=majority
// process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0'