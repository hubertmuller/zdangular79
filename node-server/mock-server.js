const http = require('http');

const server = http.createServer( (req, res) => {

  console.log("metoda:" + req.method);
  res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    if (req.method === 'GET' && req.url === '/api/lista') {
        res.statusCode = 200;
        res.end(`[
          {
            "id": 91,
            "nazwa": "Moderna",
            "kraj": "USA",
            "cena": 20,
            "waluta": "USD"
          },
          {
            "id": 52,
            "nazwa": "Pfizer",
            "kraj": "USA",
            "cena": 10,
            "waluta": "USD"
          },
          {
            "id": 13,
            "nazwa": "Novavax",
            "kraj": "USA",
            "cena": 15,
            "waluta": "USD"
          }
      ]`);
    } else if (req.method === 'DELETE' && req.url.startsWith('/api/osoba/')) {
      res.statusCode = 200;
      res.end();
    } else {
      res.end();
    }

});

server.listen(3200, '127.0.0.1', () => {
    console.log('uruchomiony serwer');
});
