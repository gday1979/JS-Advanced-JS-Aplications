function deleteByEmail() {
    let input = document.querySelector('input[name="email"]').value;
    let result = document.getElementById('result');
    let table = document.querySelector('tbody');
    let rows = table.querySelectorAll('tr');
    let deleted = false;

    for (let row of rows) {
        let email = row.querySelectorAll('td')[1].textContent;
        if (email === input) {
            row.remove();
            deleted = true;
        }
    }

    if (deleted) {
        result.textContent = 'Deleted.';
    } else {
        result.textContent = 'Not found.';
    }
}