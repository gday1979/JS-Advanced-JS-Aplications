function addItem() {
    let input = document.getElementById('newItemText');
    let li = document.createElement('li');
    li.textContent = input.value;
    let a = document.createElement('a');
    a.textContent = '[Delete]';
    a.href = '#';
    a.addEventListener('click', deleteItem);
    li.appendChild(a);
    let ul = document.getElementById('items');
    ul.appendChild(li);
    input.value = '';

    function deleteItem() {
        li.remove();
    }
}