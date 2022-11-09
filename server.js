const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./src/App');
const server = http.createServer(App);
server.listen(port,()=>{console.log('apps are running on localhost : '+port)});
