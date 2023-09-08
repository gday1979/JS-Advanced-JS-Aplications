function generateReport() {
    const output = document.getElementById('output');
    const checkboxes = Array.from(document.querySelectorAll('thead tr th input'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    const result = rows.map(row => {
        const obj = {};
        for (let i = 0; i < row.children.length; i++) {
            if (checkboxes[i].checked) {
                obj[checkboxes[i].name] = row.children[i].textContent;
            }
        }
        return obj;
    }).filter(obj => Object.keys(obj).length > 0);

    output.value = JSON.stringify(result, null, 2);
}
