const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

const start= async () => {
    await server.register(require('inert'));
    
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public',
                listing: true
            }
        }
    });
    
    await server.start();
    console.log('Server running at:', server.info.uri);
}

start();
    
/**
 * Here the comparison with makemehapi
    const Hapi = require('hapi');
    const Inert = require('inert');

    (async () => {
        try {
            const server = Hapi.Server({
                host: 'localhost',
                port: process.argv[2] || 8080,
                routes: {
                    files: {
                        relativeTo: __dirname
                    }
                }
            });

            await server.register(Inert);

            server.route({
                path: '/',
                method: 'GET',
                handler: {
                    file: 'index.html'
                }
            });

            await server.start();

        } catch (error) {
            console.log(error);
        }
    })();
 */