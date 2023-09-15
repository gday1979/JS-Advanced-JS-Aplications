function fibonacci() {
    let first = 0;
    let second = 1;

    return function () {
        let result = first + second;
        first = second;
        second = result;
        return first;
    }
}