var udp = require('dgram');
const readline = require('readline')
const Parser = require('../parser/parser')
var client = udp.createSocket('udp4');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.addListener('line', line => {
    const operationParams = Parser.parseMsg(line);
    if (!operationParams) {
        console.log('Invalid parameters')
        return;
    }

    client.send(operationParams, 8081, '127.0.0.1')
})

client.on('message', (msg) => {
    console.log(msg[0].toString());
})