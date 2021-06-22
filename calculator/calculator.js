exports.formatMessage = (msg) => {
    msg = msg.toString();
    const params = msg.split(' ');
    if (!validateInput(params)) {
        return;
    }
    return {param1: Number(params[0]), param2: Number(params[2]), operator: params[1]}
}

function validateInput(params) {
    if (
            params.length !== 3
            || (isNaN(params[0]) || isNaN(params[2]))
            || (params[1] !== '*' && params[1] !== '/' && params[1] !== '+' && params[1] !== '-')
        ) {
        return false;
    }
    return true;
}

exports.calculate = (opeartionParams) => {
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

exports.simpleCalculation = (msg) => {
    let result = new Uint16Array(1);
    switch(msg[2]) {
        case 1:
            result[0] = msg[0] + msg[1]
            break;
        case 2:
            result[0] = msg[0] - msg[1]
            break;
        case 3:
            result[0] = msg[0] * msg[1]
            break;
        case 4:
            result[0] = msg[0] / msg[1]
        break;
        default:
            result[0] = undefined;
    }
    return result;
}