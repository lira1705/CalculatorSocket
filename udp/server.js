const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const Calculator = require('../calculator')

server.on('message', (msg, rinfo) => {
    const operationParams = Calculator.formatMessage(msg);
    if (!operationParams) {
        server.send(`Invalid parameters`, rinfo.port, rinfo.address)
        return;
    }
    const result = Calculator.calculate(operationParams);
    sendResult(result, rinfo)
});

server.on('error',function(error){
    console.log('Error: ' + error);
});

const sendResult = (result, rinfo) => {
    server.send(result.toString(), rinfo.port, rinfo.address)
}


server.bind(8081, '127.0.0.1');
