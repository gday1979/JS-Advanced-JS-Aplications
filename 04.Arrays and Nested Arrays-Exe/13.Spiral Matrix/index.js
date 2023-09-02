function spiralMatrix(){
    let n = 5;
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
        for (let j = 0; j < n; j++) {
            matrix[i].push(0);
        }
    }

    let row = 0;
    let col = 0;
    let direction = 'right';
    for (let i = 1; i <= n * n; i++) {
        matrix[row][col] = i;
        if (direction === 'right') {
            col++;
        } else if (direction === 'down') {
            row++;
        } else if (direction === 'left') {
            col--;
        } else if (direction === 'up') {
            row--;
        }

        if (direction === 'right' && (col > n - 1 || matrix[row][col] !== 0)) {
            direction = 'down';
            col--;
            row++;
        } else if (direction === 'down' && (row > n - 1 || matrix[row][col] !== 0)) {
            direction = 'left';
            row--;
            col--;
        } else if (direction === 'left' && (col < 0 || matrix[row][col] !== 0)) {
            direction = 'up';
            col++;
            row--;
        } else if (direction === 'up' && (row < 0 || matrix[row][col] !== 0)) {
            direction = 'right';
            row++;
            col++;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}