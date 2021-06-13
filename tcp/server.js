const net = require('net')
const Calculator = require('../calculator')

const handleConnection = socket => {
    socket.on('error', (error) => {
        console.log(error)
    })

    socket.on('data', (data) => {
        const operationParams = Calculator.formatMessage(data);
        if (!operationParams) {
            socket.write(`Invalid parameters`)
            return;
        }
        const result = Calculator.calculate(operationParams);
        sendResult(result, socket)
    })
}

const sendResult = (result, socket) => {
    socket.write(result.toString())
}

const server = net.createServer(
    handleConnection
)

server.listen(4000, '127.0.0.1')