window.addEventListener("load", solve);

function solve(){

    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const contNumElement = document.getElementById("contact-number");
    const classTypeElement = document.getElementById("class-type");
    const classTimeElement = document.getElementById("class-time");
    const nextButtonElement = document.getElementById("next-btn");
    const previewUlElement = document.querySelector(".class-info");
    const confirmUlElement = document.querySelector(".confirm-class");
    const mainElement = document.getElementById("main");
    const bodyElement = document.getElementById("body");
    nextButtonElement.addEventListener("click", onNext);

    function onNext(e) {
        e.preventDefault();
        if (
            nameElement.value == "" ||
            emailElement.value == "" ||
            contNumElement.value == "" ||
            classTypeElement.value == "" ||
            classTimeElement.value == ""
        ) {
            return;
        }
        const liElement = document.createElement("li");
        liElement.className = "info-item";

        const article = document.createElement("article");
        article.className = "personal-info";

        const nameParagraph = document.createElement("p");
        nameParagraph.textContent = nameElement.value;

        const emailParagraph = document.createElement("p");
        emailParagraph.textContent = emailElement.value;

        const contNumParagraph = document.createElement("p");
        contNumParagraph.textContent = contNumElement.value;

        const classTypeParagraph = document.createElement("p");
        classTypeParagraph.textContent = classTypeElement.value;

        const classTimeParagraph = document.createElement("p");
        classTimeParagraph.textContent = classTimeElement.value;

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit";

        const continueBtn = document.createElement("button");
        continueBtn.className = "continue-btn";
        continueBtn.textContent = "Continue";

        article.appendChild(nameParagraph);
        article.appendChild(emailParagraph);
        article.appendChild(contNumParagraph);
        article.appendChild(classTypeParagraph);
        article.appendChild(classTimeParagraph);

        liElement.appendChild(article);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);
        previewUlElement.appendChild(liElement);

        const editedName = nameElement.value;
        const editedEmail = emailElement.value;
        const editedContNum = contNumElement.value;
        const editedClassType = classTypeElement.value;
        const editedClassTime = classTimeElement.value;


        nameElement.value = "";
        emailElement.value = "";
        contNumElement.value = "";
        classTypeElement.value = "";
        classTimeElement.value = "";

        nextButtonElement.disabled = true;

        editBtn.addEventListener("click", onEdit);

        function onEdit(){
            nameElement.value = editedName;
            emailElement.value = editedEmail;
            contNumElement.value = editedContNum;
            classTypeElement.value = editedClassType;
            classTimeElement.value = editedClassTime;
            liElement.remove();
        }
        
        continueBtn.addEventListener("click", onContinue);
        function onContinue(){
            let liElementContinue = document.createElement("li");
            liElementContinue.setAttribute("class", "continue-info");

            let articleContinue = document.createElement("article");
            articleContinue = article;

            let cancelBtn = document.createElement("button");
            cancelBtn.setAttribute("class", "cancel-btn");
            cancelBtn.textContent = "Cancel";

            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute("class", "confirm-btn");
            confirmBtn.textContent = "Confirm";

            liElementContinue.appendChild(articleContinue);
            liElementContinue.appendChild(cancelBtn);
            liElementContinue.appendChild(confirmBtn);
            confirmUlElement.appendChild(liElementContinue);

            liElement.remove();

            cancelBtn.addEventListener("click", onCancel);
            function onCancel(){
                liElement.remove();
                nextButtonElement.disabled = false;
            }
            confirmBtn.addEventListener("click", onConfirm);
            function onConfirm(){
                mainElement.remove();
                const h1Element = document.createElement("h1");
                h1Element.textContent =
                  "Thank you for scheduling your appointment, we look forward to seeing you!";
               const backBtn = document.createElement("button");
                backBtn.textContent = "Done";
                backBtn.id = "done-btn";

                backBtn.addEventListener("click", onBack);
                bodyElement.appendChild(h1Element);
                bodyElement.appendChild(backBtn);
            }
            function onBack() {
              location.reload();
            }
        }     
    }
}