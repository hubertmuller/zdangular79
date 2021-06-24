const http = require('http');

const server = http.createServer( (req, res) => {

    if (req.method === 'GET' && req.url === '/api/lista') {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        res.end('Czesc');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/plain');
        res.end('Nie ma takiego zasobu');
    }

});

server.listen(3200, '127.0.0.1', () => {
    console.log('uruchomiony serwer');
});
