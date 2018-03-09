var Hapi = require('hapi');

var server = new Hapi.Server({
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

    return 'a string in the response';
}

await server.start();
    
console.log('Server running at:', server.info.uri);