const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const Calculator = require('../calculator/calculator')

server.on('message', (msg, rinfo) => {
    const result = Calculator.simpleCalculation(msg);
    server.send(Buffer.from(result), 0, result.length, rinfo.port, rinfo.address)
});

server.on('error',function(error){
    console.log('Error: ' + error);
});

server.bind(8081, '127.0.0.1');
