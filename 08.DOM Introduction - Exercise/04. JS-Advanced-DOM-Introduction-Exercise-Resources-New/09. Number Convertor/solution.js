function solve() {

    let selectMenuTo = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectMenuTo.appendChild(binaryOption);

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(hexadecimalOption);

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', convert);

    function convert() {
        let number = Number(document.getElementById('input').value);
        let result = document.getElementById('result');

        if (selectMenuTo.value === 'binary') {
            result.value = number.toString(2);
        } else if (selectMenuTo.value === 'hexadecimal') {
            result.value = number.toString(16).toUpperCase();
        }
    }
}