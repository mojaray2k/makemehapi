const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/', 
    method:'GET', 
    handler: handler
});

function handler(request, h) {
    
    // Request has all information
    // a string can be returned

    return 'Hello World!';
}

async function start(){

    try {
        await server.start();
    }
    catch(err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

start();
    
/**
 * Here the comparison with makemehapi
    const Hapi = require('hapi');

    (async () => {
        try {
            const server = Hapi.Server({
                host: 'localhost',
                port: Number(process.argv[2] || 8080)
            });

            server.route({
                path: '/',
                method: 'GET',
                handler: (request, h) => {
                    return 'Hello World!';
                }
            });

            await server.start();

            console.log(`Server running at: ${server.info.uri}`);
        } catch (error) {
            console.log(error);
        }
    })();
 */