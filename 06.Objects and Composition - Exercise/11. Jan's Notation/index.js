function jansNotation(numbers){
    let result = [];
    let isInvalid = false;
    for (const number of numbers) {
        if (typeof number === 'number') {
            result.push(number);
        } else {
            if (result.length < 2) {
                console.log('Error: not enough operands!');
                isInvalid = true;
                break;
            }
            let secondOperand = result.pop();
            let firstOperand = result.pop();
            let resultOfOperation = 0;
            switch (number) {
                case '+':
                    resultOfOperation = firstOperand + secondOperand;
                    break;
                case '-':
                    resultOfOperation = firstOperand - secondOperand;
                    break;
                case '*':
                    resultOfOperation = firstOperand * secondOperand;
                    break;
                case '/':
                    resultOfOperation = firstOperand / secondOperand;
                    break;
            }
            result.push(resultOfOperation);
        }
    }
    if (result.length > 1) {
        console.log('Error: too many operands!');
        isInvalid = true;
    }
    if (!isInvalid) {
        console.log(result[0]);
    }
}