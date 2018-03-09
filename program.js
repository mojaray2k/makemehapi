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
                path: Path.join(__dirname, 'public')
            }
        }
    });
    
    await server.start();
    console.log('Server running at:', server.info.uri);
}

start();
    
/**
 * Here the comparison with makemehapi
    const Path = require('path');
    const Hapi = require('hapi');
    const Inert = require('inert');

    (async () => {
        try {
            const server = Hapi.Server({
                host: 'localhost',
                port: process.argv[2] || 8080
            });

            await server.register(Inert);

            server.route({
                path: '/foo/bar/baz/{filename}',
                method: 'GET',
                handler: {
                    directory: {
                        path: Path.join(__dirname, 'public')
                    }
                }
            });

            await server.start();

        } catch (error) {
            console.log(error);
        }
    })();
 */