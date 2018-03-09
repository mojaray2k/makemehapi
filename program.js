const Hapi = require('hapi');

const server = new Hapi.Server({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/{name?}', 
    method:'GET', 
    handler: handler
});

function handler(request, h) {
    
    // Request has all information
    // a string can be returned
    
    return `Hello ${request.params.name} `;
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
                path: '/{name}',
                method: 'GET',
                handler: function (request, h) {
                    return `Hello ${request.params.name} `;

                    // a more secure alternative is this:
                    //
                    // return `Hello ${encodeURIComponent(request.params.name)}`;
                    //
                    // encodeURIComponent escapes all characters except the following: alphabetic, decimal digits, - _ . ! ~ * ' ( )
                    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
                    // for more details why you should call encodeURIComponent on any user-entered parameter
                }
        });

    await server.start();
 */