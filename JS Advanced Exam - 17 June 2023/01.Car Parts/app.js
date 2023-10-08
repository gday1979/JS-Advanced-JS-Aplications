window.addEventListener('load', solve);

function solution() {
  const carModelInput = document.getElementById('model');
  const carYearInput = document.getElementById('year');
  const partNameInput = document.getElementById('part-name');
  const partNumberInput = document.getElementById('part-number');
  const partConditionInput = document.getElementById('part-condition');
  const nextBtn = document.getElementById('add-btn');
  const editBtn = document.getElementById('edit-btn');
  const continueBtn = document.getElementById('continue-btn');
  const confirmBtn = document.getElementById('confirm-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const infoList = document.querySelector('.info-list');
  const confirmList = document.querySelector('.confirm-list');
  const completeImg = document.getElementById('complete-img');
  const completeText = document.getElementById('complete-text');

  nextBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (
      carModelInput.value !== '' &&
      carYearInput.value >= 1980 &&
      carYearInput.value <= 2023 &&
      partNameInput.value !== '' &&
      partNumberInput.value !== '' &&
      partConditionInput.value !== ''
    ) {
      const listItem = document.createElement('li');
      listItem.textContent = `Car model: ${carModelInput.value}
      Car year: ${carYearInput.value}
      Part name: ${partNameInput.value}
      Part number: ${partNumberInput.value}
      Condition: ${partConditionInput.value}`;
      infoList.appendChild(listItem);
      carModelInput.value = '';
      carYearInput.value = '';
      partNameInput.value = '';
      partNumberInput.value = '';
      partConditionInput.value = '';
      nextBtn.disabled = true;
      editBtn.style.display = 'inline-block';
      continueBtn.style.display = 'inline-block';
      completeImg.style.visibility = 'hidden';
      completeText.textContent = '';
    }
  });

  editBtn.addEventListener('click', function() {
    const listItem = infoList.lastElementChild;
    const values = listItem.textContent.split('\n');
    carModelInput.value = values[0].split(': ')[1];
    carYearInput.value = values[1].split(': ')[1];
    partNameInput.value = values[2].split(': ')[1];
    partNumberInput.value = values[3].split(': ')[1];
    partConditionInput.value = values[4].split(': ')[1];
    listItem.remove();
    nextBtn.disabled = false;
    editBtn.style.display = 'none';
    continueBtn.style.display = 'none';
  });

  continueBtn.addEventListener('click', function() {
    const listItem = infoList.lastElementChild;
    const values = listItem.textContent.split('\n');
    const confirmListItem = document.createElement('li');
    confirmListItem.textContent = `New part:
      Car model: ${values[0].split(': ')[1]}
      Car year: ${values[1].split(': ')[1]}
      Part name: ${values[2].split(': ')[1]}
      Part number: ${values[3].split(': ')[1]}
      Condition: ${values[4].split(': ')[1]}
      `;
    const confirmBtnsDiv = document.createElement('div');
    confirmBtnsDiv.classList.add('actions');
    const confirmBtn = document.createElement('button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.classList.add('button');
    confirmBtn.addEventListener('click', function() {
      confirmListItem.remove();
      nextBtn.disabled = false;
      completeImg.style.visibility = 'visible';
      completeText.textContent = 'Part is Ordered!';
    });
    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('button');
    cancelBtn.addEventListener('click', function() {
      confirmListItem.remove();
      nextBtn.disabled = false;
    });
    confirmBtnsDiv.appendChild(confirmBtn);
    confirmBtnsDiv.appendChild(cancelBtn);
    confirmListItem.appendChild(confirmBtnsDiv);
    confirmList.appendChild(confirmListItem);
    listItem.remove();
    nextBtn.disabled = false;
    editBtn.style.display = 'none';
    continueBtn.style.display = 'none';
  });
}


    
    
