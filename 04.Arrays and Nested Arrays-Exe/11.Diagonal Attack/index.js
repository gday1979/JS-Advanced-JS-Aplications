function diagonalAttack(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumFirstDiagonal += matrix[i][i];
        sumSecondDiagonal += matrix[i][matrix.length - 1 - i];
    }

    if (sumFirstDiagonal === sumSecondDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++)
                if (row !== col && col !== matrix.length - 1 - row) {
                    matrix[row][col] = sumFirstDiagonal;
                }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}