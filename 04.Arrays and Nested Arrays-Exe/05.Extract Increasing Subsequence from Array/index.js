function extractIncreasingSubsequenceFromArray(input) {
    let result = [];
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggestNumber) {
            result.push(input[i]);
            biggestNumber = input[i];
        }
    }

    return result;
}
console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));