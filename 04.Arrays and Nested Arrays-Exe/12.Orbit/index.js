function orbit(){
    let [rows, cols, x, y] = [...arguments];
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(0);
        }
    }
    matrix[x][y] = 1;
    let num = 1;
    let counter = 1;
    while (true) {
        let isFilled = false;
        for (let i = x - counter; i <= x + counter; i++) {
            for (let j = y - counter; j <= y + counter; j++) {
                if (i >= 0 && i < rows && j >= 0 && j < cols) {
                    if (matrix[i][j] === 0) {
                        matrix[i][j] = num + 1;
                        isFilled = true;
                    }
                }
            }
        }
        if (!isFilled) {
            break;
        }
        num++;
        counter++;
    }
    matrix.forEach(row => console.log(row.join(' ')));
}
orbit(4, 4, 0, 0);
orbit(5, 5, 2, 2);
orbit(3, 3, 2, 2);