window.addEventListener("load", solution);

function solution() {
  const employeeElement = document.getElementById("employee");
  const categoryElement = document.getElementById("category");
  const urgencyElement = document.getElementById("urgency");
  const assignedTeamElement = document.getElementById("team");
  const descriptionElement = document.getElementById("description");
  const previewUlElement = document.querySelector(".preview-list");
  const pendingUlElement = document.querySelector(".pending-list");
  const resolvedUlElement = document.querySelector(".resolved-list");
  const addBtnElement = document.getElementById("add-btn");
  addBtnElement.addEventListener("click", add);

  function add(e) {
    e.preventDefault();
    if (
      employeeElement.value == "" ||
      categoryElement.value == "" ||
      urgencyElement.value == "" ||
      assignedTeamElement.value == "" ||
      descriptionElement.value == ""
    ) {
      return;
    }
    const liElement = document.createElement("li");
    liElement.className = "problem-content";

    const articleElement = document.createElement("article");
    const pEmployeeElement = document.createElement("p");
    pEmployeeElement.textContent = `Employee: ${employeeElement.value}`;
    const pCategoryElement = document.createElement("p");
    pCategoryElement.textContent = `Category: ${categoryElement.value}`;
    const pUrgencyElement = document.createElement("p");
    pUrgencyElement.textContent = `Urgency: ${urgencyElement.value}`;
    const pAssignedTeamElement = document.createElement("p");
    pAssignedTeamElement.textContent = `Assigned to: ${assignedTeamElement.value}`;

    const pDescriptionElement = document.createElement("p");
    pDescriptionElement.textContent = `Description: ${descriptionElement.value}`;

    const editBtnElement = document.createElement("button");
    editBtnElement.className = "edit-btn";
    editBtnElement.textContent = "Edit";

    const continueBtnElement = document.createElement("button");
    continueBtnElement.className = "continue-btn";
    continueBtnElement.textContent = "Continue";

    articleElement.appendChild(pEmployeeElement);
    articleElement.appendChild(pCategoryElement);
    articleElement.appendChild(pUrgencyElement);
    articleElement.appendChild(pAssignedTeamElement);
    articleElement.appendChild(pDescriptionElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtnElement);
    liElement.appendChild(continueBtnElement);
    previewUlElement.appendChild(liElement);

    const editedEmployee = employeeElement.value;
    const editedCategory = categoryElement.value;
    const editedUrgency = urgencyElement.value;
    const editedAssignedTeam = assignedTeamElement.value;
    const editedDescription = descriptionElement.value;

    employeeElement.value = "";
    categoryElement.value = "";
    urgencyElement.value = "";
    assignedTeamElement.value = "";
    descriptionElement.value = "";

    addBtnElement.disabled = true;
    editBtnElement.addEventListener("click", edit);
    function edit() {
      employeeElement.value = editedEmployee;
      categoryElement.value = editedCategory;
      urgencyElement.value = editedUrgency;
      assignedTeamElement.value = editedAssignedTeam;
      descriptionElement.value = editedDescription;

      liElement.remove();
      addBtnElement.disabled = false;
    }
    continueBtnElement.addEventListener("click", onContinue);
    function onContinue() {
      const liElementContinue = document.createElement("li");
      liElementContinue.className = "pending-problem";
      const articleElement = document.createElement("article");

      const resolveBtnElement = document.createElement("button");
      resolveBtnElement.className = "resolve-btn";
      resolveBtnElement.textContent = "Resolved";

      articleElement.appendChild(pEmployeeElement);
      articleElement.appendChild(pCategoryElement);
      articleElement.appendChild(pUrgencyElement);
      articleElement.appendChild(pAssignedTeamElement);
      articleElement.appendChild(pDescriptionElement);

      liElementContinue.appendChild(articleElement);
      liElementContinue.appendChild(resolveBtnElement);
      pendingUlElement.appendChild(liElementContinue);

      liElement.remove();

      resolveBtnElement.addEventListener("click", resolve);
      function resolve() {
        const liElementResolve = document.createElement("li");
        liElementResolve.className = "resolved-problem";
        const articleElement = document.createElement("article");

        articleElement.appendChild(pEmployeeElement);
        articleElement.appendChild(pCategoryElement);
        articleElement.appendChild(pUrgencyElement);
        articleElement.appendChild(pAssignedTeamElement);
        articleElement.appendChild(pDescriptionElement);

        const clearBtnElement = document.createElement("button");
        clearBtnElement.className = "clear-btn";
        clearBtnElement.textContent = "Clear";
        clearBtnElement.addEventListener("click", clear);
        function clear() {
          liElementResolve.remove();
        }
        
      }
    }
  }
}
