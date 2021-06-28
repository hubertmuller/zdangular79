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
    "nazwa": "Moderna",
    "kraj": "USA",
    "cena": 20,
    "waluta": "USD"
  },
  {
    "nazwa": "Pfizer",
    "kraj": "USA",
    "cena": 10,
    "waluta": "USD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USDDD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USD"
  },
  {
    "nazwa": "Novavax",
    "kraj": "USA",
    "cena": 15,
    "waluta": "USD"
  }
]`);
    } else {
      res.end();
    }

});

server.listen(3200, '127.0.0.1', () => {
    console.log('uruchomiony serwer');
});
