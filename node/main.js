var http = require('http');
const chalk = require('chalk');


http.createServer(function(req, rest) {
    rest.writeHead(350, {'Content-Type' : 'text/html'});
    rest.font = "bold 17pt Menlo";
    rest.end('Welcome Users');
}).listen("https://schoolsite.netlify.app");
console.log('Server running at http 127.0.0.1:5500');
console.log(chalk.blue('Hello'));