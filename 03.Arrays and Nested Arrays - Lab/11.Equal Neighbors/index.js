function equalNeighbors(){
    let matrix = arguments[0];
    let counter = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        let currentRow = matrix[row];
        let nextRow = matrix[row + 1];
        for (let col = 0; col < currentRow.length; col++) {
            if (currentRow[col] === nextRow[col]) {
                counter++;
            }
            if (currentRow[col] === currentRow[col + 1]) {
                counter++;
            }
        }
    }
    return counter;
}
