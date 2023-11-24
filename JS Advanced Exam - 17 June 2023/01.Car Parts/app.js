window.addEventListener('load', solve);

function solve() {
    const carModelElement = document.getElementById('car-model');
    const carYearElement = document.getElementById('car-year');
    const partNameElement=document.getElementById('part-name');
    const partNumberElement=document.getElementById('part-number');
    const conditionElement=document.getElementById('condition');

    const nextButtonElement = document.getElementById('next-btn');

    nextButtonElement.addEventListener('click', next);

    function next(e) {
      e.preventDefault();

      const carModel = carModelElement.value;
      const carYear = carYearElement.value;
      const partName=partNameElement.value;
      const partNumber=partNumberElement.value;
      const condition=conditionElement.value;

      if (
        carModel.trim() === "" ||
        isNaN(carYear) ||
        carYear < 1980 ||
        carYear > 2023 ||
        partName.trim() === "" ||
        partNumber.trim() === "" ||
        condition.trim() === ""
      ) {
        return;
      }

      const ulInfoListElement = document.querySelector('.info-list');

      const liElement = document.createElement('li');
      liElement.classList.add('part-content');

      const articleElement = document.createElement('article');
      const pCarModelElement = document.createElement('p');
      pCarModelElement.textContent = `Model: ${carModel}`;

      const pCarYearElement = document.createElement('p');
      pCarYearElement.textContent = `Year: ${carYear}`;

      const pPartNameElement = document.createElement('p');
      pPartNameElement.textContent = `Name: ${partName}`;

      const pPartNumberElement = document.createElement('p');
      pPartNumberElement.textContent = `Number: ${partNumber}`;

      const pConditionElement = document.createElement('p');
      pConditionElement.textContent = `Condition: ${condition}`;

      const editButton = document.createElement('button');
      editButton.classList.add('edit-btn');
      editButton.textContent = 'Edit';

      const continueButton = document.createElement('button');
      continueButton.classList.add('continue-btn');
      continueButton.textContent = 'Continue';

      articleElement.appendChild(pCarModelElement);
      articleElement.appendChild(pCarYearElement);
      articleElement.appendChild(pPartNameElement);
      articleElement.appendChild(pPartNumberElement);
      articleElement.appendChild(pConditionElement);

      liElement.appendChild(articleElement);
      liElement.appendChild(editButton);
      liElement.appendChild(continueButton);

      ulInfoListElement.appendChild(liElement);

      carModelElement.value = '';
      carYearElement.value = '';
      partNameElement.value='';
      partNumberElement.value='';
      conditionElement.value='';

      editButton.addEventListener('click', edit);

      nextButtonElement.disabled = true;

      function edit(){
        carModelElement.value=carModel;
        carYearElement.value=carYear;
        partNameElement.value=partName;
        partNumberElement.value=partNumber;
        conditionElement.value=condition;

        liElement.remove();
        nextButtonElement.disabled = false;
      }
      continueButton.addEventListener('click', continueFunction);

      function continueFunction(){
        const ulConfirmListElement = document.querySelector(".confirm-list");

        editButton.classList.remove("edit-btn");
        editButton.classList.add("confirm-btn");
        editButton.textContent = "Confirm";

        continueButton.classList.remove("continue-btn");
        continueButton.classList.add("cancel-btn");
        continueButton.textContent = "Cancel";

        ulConfirmListElement.appendChild(liElement);

        const h1VerificationElement = document.querySelector("#verification");

        editButton.addEventListener("click", confirm);



        function confirm(){
          liElement.remove();
          editButton.disabled = false;
          h1VerificationElement.add("confirm-order");
          h1VerificationElement.textContent = "Confirmed.";

          carModelElement.value = "";
          carYearElement.value = "";
          partNameElement.value="";
          partNumberElement.value="";
          conditionElement.value="";


        }
        continueButton.addEventListener('click', cancel);
        function cancel(){
          liElement.remove();
          nextButton.disabled = false;
          h1VerificationElement.add("cancel-order");
          h1VerificationElement.textContent = "Canceled.";

          carModelElement.value = "";
          carYearElement.value = "";
          partNameElement.value="";
          partNumberElement.value="";
          conditionElement.value="";
        }


      }

    }
}


    
    
