window.addEventListener("load", solve);

function solve(){
    const carModelElement = document.getElementById("car-model");
    const carYearElement = document.getElementById("car-year");
    const partNameElement=document.getElementById("part-name");
    const partNumberElement=document.getElementById("part-number");
    const conditionElement=document.getElementById("condition");
    const infoUlElement = document.querySelector(".info-list");
    const confirmUlElement = document.querySelector(".confirm-list");
    const nextButtonElement = document.getElementById("next-btn");
    nextButtonElement.addEventListener("click", next);

    function next(e){
        e.preventDefault();
        
        if(carModelElement.value == "" ||
            isNaN(carYearElement.value) ||
         carYearElement.value < 1980  ||
            carYearElement.value > 2023 || 
         partNameElement.value == "" || 
         partNumberElement.value == "" ||
          conditionElement.value == ""){
            return;
        }
        const liElement = document.createElement("li");
        liElement.className = "part-content";
        const articleElement = document.createElement("article");
        const pCarModelElement = document.createElement("p");
        pCarModelElement.textContent = `Model: ${carModelElement.value}`;
        const pCarYearElement = document.createElement("p");
        pCarYearElement.textContent = `Year: ${carYearElement.value}`;
        const pPartNameElement = document.createElement("p");
        pPartNameElement.textContent = `Name: ${partNameElement.value}`;
        const pPartNumberElement = document.createElement("p");
        pPartNumberElement.textContent = `Number: ${partNumberElement.value}`;

        const pConditionElement = document.createElement("p");
        pConditionElement.textContent = `Condition: ${conditionElement.value}`;
        const editButton = document.createElement("button");
        editButton.className = "edit-btn";
        editButton.textContent = "Edit";
        const continueButton = document.createElement("button");
        continueButton.className = "continue-btn";
        continueButton.textContent = "Continue";

        articleElement.appendChild(pCarModelElement);
        articleElement.appendChild(pCarYearElement);
        articleElement.appendChild(pPartNameElement);
        articleElement.appendChild(pPartNumberElement);
        articleElement.appendChild(pConditionElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(editButton);
        liElement.appendChild(continueButton);
        infoUlElement.appendChild(liElement);

        const editedCarModel = carModelElement.value;
        const editedCarYear = carYearElement.value;
        const editedPartName=partNameElement.value;
        const editedPartNumber=partNumberElement.value;
        const editdCondition=conditionElement.value;


        carModelElement.value="";
        carYearElement.value="";
        partNameElement.value="";
        partNumberElement.value="";
        conditionElement.value="";
        nextButtonElement.disabled=true;
        editButton.addEventListener("click", edit);

        function edit(){
            carModelElement.value=editedCarModel;
            carYearElement.value=editedCarYear;
            partNameElement.value=editedPartName;
            partNumberElement.value=editedPartNumber;
            conditionElement.value=editdCondition;
            liElement.remove();
            nextButtonElement.disabled=false;

        }
        continueButton.addEventListener("click", continueFunction);
        function continueFunction(){
           


        }
    }
}