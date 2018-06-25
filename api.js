const http = require('http');
http.createServer((req, res) => {
    if (req.url == '/about') {
        res.write('<p>this is the about page.</p>');
        res.end();
    } 

}).listen(3000, () => console.log('Server up and running. localhost:3000'));