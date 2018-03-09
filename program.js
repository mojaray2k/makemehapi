const Hapi = require('hapi');
const Path = require('path');

const server = new Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

const start= async () => {
    await server.register(require('vision'));

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'templates'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: {
            view: {
                template: 'index'
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
    const Vision = require('vision');
    const Handlebars = require('handlebars');

    (async () => {
        try {
            const serverPort = process.argv[2] || 8080;
            const server = Hapi.Server({
                host: 'localhost',
                port: process.argv[2] || 8080
            });

            await server.register(Vision);

            server.views({
                engines: {
                    html: Handlebars
                },
                path: Path.join(__dirname, 'templates')
            });

            server.route({
                path: '/',
                method: 'GET',
                handler: {
                    view: 'index.html'
                }
            });

            await server.start();

            console.log(`Server running at: ${server.info.uri}`);
        } catch (error) {
            console.log(error);
        }
    })();
 */