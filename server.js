const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    const operationParams = formatMessage(msg);
    if (!operationParams) {
        server.send(`Invalid parameters`, rinfo.port, rinfo.address)
        return;
    }
    const result = calculate(operationParams);
    sendResult(result, rinfo)
});

server.on('error',function(error){
    console.log('Error: ' + error);
});

const formatMessage = (msg) => {
    msg = msg.toString();
    const params = msg.split(' ');
    if (!validateInput(params)) {
        return;
    }
    return {param1: Number(params[0]), param2: Number(params[2]), operator: params[1]}
}

const validateInput = params => {

    if (
            params.length !== 3
            || (isNaN(params[0]) || isNaN(params[2]))
            || (params[1] !== '*' && params[1] !== '/' && params[1] !== '+' && params[1] !== '-')
        ) {
        return false;
    }
    return true;
}

const calculate = (opeartionParams) => {
    switch(opeartionParams.operator) {
        case "+":
            return opeartionParams.param1 + opeartionParams.param2
        case "-":
            return opeartionParams.param1 - opeartionParams.param2
        case "/":
            return opeartionParams.param1 / opeartionParams.param2
        case "*":
            return opeartionParams.param1 * opeartionParams.param2
        default:
            return "failed to calculate"
    }
}

const sendResult = (result, rinfo) => {
    server.send(result.toString(), rinfo.port, rinfo.address)
}


server.bind(8081, '127.0.0.1');
