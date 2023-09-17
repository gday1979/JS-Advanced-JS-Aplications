function functionalSum(a) {
    let sum = a;

    function add(b) {
        sum += b;
        return add;
    }

    add.toString = () => sum;

    return add;
}