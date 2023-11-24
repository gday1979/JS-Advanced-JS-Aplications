window.addEventListener("load", solve);

function solve() {
    const gemNameElement = document.getElementById("gem-name");
    const colorElement = document.getElementById("color");
    const caratsElement = document.getElementById("carats");
    const priceElement = document.getElementById("price");
    const typeElement = document.getElementById("type");

    const previewUlElement = document.getElementById("preview-list");
    const collectionUlElement = document.getElementById("collection");
    const addBtnElement = document.getElementById("add-btn");
    addBtnElement.addEventListener("click", onPublish);

    function onPublish(e) {
        e.preventDefault();

        if(gemNameElement.value == "" || colorElement.value == "" || caratsElement.value == "" || priceElement.value == "" || typeElement.value == "") {
            return;
        }
        const liElement = document.createElement("li");
        liElement.className = "gem-info";

        const articleElement = document.createElement("article");
        const gemName = document.createElement("h4");
        gemName.textContent = `${gemNameElement.value}`;
        const carats = document.createElement("p");
        carats.textContent = `Carats: ${caratsElement.value}`;
        const color = document.createElement("p");
        color.textContent = `Color: ${colorElement.value}`;
        const price = document.createElement("p");
        price.textContent = `Price: ${priceElement.value} $`;
        const type = document.createElement("p");
        type.textContent = `Type: ${typeElement.value}`;

        const saveBtn = document.createElement("button");
        saveBtn.className = "save-btn";
        saveBtn.textContent = "Save to Collection";

        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Edit Information";

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "cancel-btn";
        deleteBtn.textContent = "Cancel";

        articleElement.appendChild(gemName);
        articleElement.appendChild(carats);
        articleElement.appendChild(color);
        articleElement.appendChild(price);
        articleElement.appendChild(type);

        liElement.appendChild(articleElement);
        liElement.appendChild(saveBtn);
        liElement.appendChild(editBtn);
        liElement.appendChild(deleteBtn);

        previewUlElement.appendChild(liElement);

        const editedGemName= gemNameElement.value;
        const editedColor = colorElement.value;
        const editedCarats = caratsElement.value;
        const editedPrice = priceElement.value;
        const editedType = typeElement.value;


        gemNameElement.value = "";
        colorElement.value = "";
        caratsElement.value = "";
        priceElement.value = "";
        typeElement.value = "";
         
        addBtnElement.disabled = true;
        editBtn.addEventListener("click", onEdit);
        function onEdit(){
            gemNameElement.value = editedGemName;
            colorElement.value = editedColor;
            caratsElement.value = editedCarats;
            priceElement.value = editedPrice;
            typeElement.value = editedType;
            liElement.remove();
        }
        saveBtn.addEventListener("click", onSave);
        function onSave(){
            const liElement= document.createElement("li");
            const pElement = document.createElement("p");
            pElement.setAttribute("class", "colection-item");
            pElement.textContent=`${gemNameElement.value} - Color: ${colorElement.value}/ Carats: ${caratsElement.value}/ Price: ${priceElement.value}$/ Type: ${typeElement.value}`;
            liElement.appendChild(pElement);
            collectionUlElement.appendChild(liElement);

            const previewLiElement = document.querySelector(".gem-info");
            previewLiElement.remove();
            addBtnElement.disabled = false;

            editBtn.addEventListener("click", onEdit);
            function onEdit(){

                gemNameElement.value = editedGemName;
                colorElement.value = editedColor;
                caratsElement.value = editedCarats;
                priceElement.value = editedPrice;
                typeElement.value = editedType;

                liElement.remove();
                addBtnElement.disabled = false;
            }
            deleteBtn.addEventListener("click", onDelete);
            function onDelete(){
                liElement.remove();
                addBtnElement.disabled = false;
            } 
        }
    }
}
