
exports.parseMsg = (msg) => {
    const params = msg.split(' ');

    if (!validateMsg(params)) {
        return;
    }

    const tempArray = [Number(params[0]), Number(params[2]), parseOperator(params[1])]
    const arr = new Uint16Array(3);
    for (const [index, value] of tempArray.entries()) {
        arr[index] = value;
    }
    const parsedMsg = Buffer.from(arr);
    return parsedMsg;
}

function validateMsg(params) {
    if (
            params.length !== 3
            || (isNaN(params[0]) || isNaN(params[2]))
            || (params[1] !== '*' && params[1] !== '/' && params[1] !== '+' && params[1] !== '-')
        ) {
        return false;
    }
    return true;
}

function parseOperator(operator) {
    switch (operator) {
        case '+':
            return 1;
        case '-':
            return 2;
        case '*':
            return 3;
        case '/':
            return 4;
        default:
            return 0;
    }
}