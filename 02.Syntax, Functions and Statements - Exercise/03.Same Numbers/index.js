function sameNumbers(number) {
    let isSame = true;
    let sum = 0;
    let firstDigit = number % 10;
    while (number) {
        let digit = number % 10;
        sum += digit;
        if (digit !== firstDigit) {
            isSame = false;
        }
        number = Math.floor(number / 10);
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222);