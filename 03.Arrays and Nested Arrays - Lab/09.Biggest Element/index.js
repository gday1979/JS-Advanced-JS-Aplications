function biggestElement(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;
    matrix.forEach(row => row.forEach(col => biggest = Math.max(biggest, col)));
    return biggest;
}
console.log(biggestElement([[20, 50, 10], [8, 33, 145]]));