function addItem() {
  const inputText = document.getElementById('newItemText').value;
  const inputValue = document.getElementById('newItemValue').value;
  const option = document.createElement('option');
  option.textContent = inputText;
  option.value = inputValue;
  const select = document.getElementById('menu');
  select.appendChild(option);
  document.getElementById('newItemText').value = '';
  document.getElementById('newItemValue').value = '';
}
