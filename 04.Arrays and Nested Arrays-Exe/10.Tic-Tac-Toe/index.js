function ticTacToe(input) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]]

    let player = 'X'
    let isWinner = false
    let isDraw = false

    for (let i = 0; i < input.length; i++) {
        let [row, col] = input[i].split(' ').map(Number)

        if (dashboard[row][col] !== false) {
            console.log('This place is already taken. Please choose another!')
            continue
        }

        dashboard[row][col] = player

        // check for winner
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0] === player && dashboard[i][1] === player && dashboard[i][2] === player) {
                isWinner = true
            } else if (dashboard[0][i] === player && dashboard[1][i] === player && dashboard[2][i] === player) {
                isWinner = true
            }
        }

        if (dashboard[0][0] === player && dashboard[1][1] === player && dashboard[2][2] === player) {
            isWinner = true
        } else if (dashboard[0][2] === player && dashboard[1][1] === player && dashboard[2][0] === player) {
            isWinner = true
        }

        if (isWinner) {
            console.log(`Player ${player} wins!`)
            break
        }

        // check for draw
        let isAllTrue = true
        for (let i = 0; i < dashboard.length; i++) {
            for (let j = 0; j < dashboard[i].length; j++) {
                if (dashboard[i][j] === false) {
                    isAllTrue = false
                }
            }
        }

        if (isAllTrue) {
            isDraw = true
            break
        }

        // change player
        player = player === 'X' ? 'O' : 'X'
    }

    if (isDraw) {
        console.log('The game ended! Nobody wins :(')
    }

    for (let i = 0; i < dashboard.length; i++) {
        console.log(dashboard[i].join('\t'))
    }
}