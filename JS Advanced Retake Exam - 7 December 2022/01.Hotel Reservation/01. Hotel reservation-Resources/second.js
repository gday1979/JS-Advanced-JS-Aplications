window.addEventListener("load", solve);

function solve(){
   // Създаване на обект със инпут Полета и техните стойности
    const inputs={
        firstName: document.getElementById("first-name"),
        lastName: document.getElementById("last-name"),
        checkIn: document.getElementById("date-in"),
        checkOut: document.getElementById("date-out"),
        guestNumber: document.getElementById("people-count")
    };
    //Създаване на обект със списъци и техните стойности
    const lists={
        reservationContent: document.querySelector(".reservation-content"),
        infoList: document.querySelector(".info-list")
    };

    //Създаване на обект със бутони и техните стойности
    document.getElementById("next-btn").addEventListener("click", next);
    document.getElementById()
    
    function next(e){
        e.preventDefault();

        const firstName = inputs.firstName.value;
        const lastName = inputs.lastName.value;
        const checkIn = inputs.checkIn.value;
        const checkOut = inputs.checkOut.value;
        const guestNumber = Number(inputs.guestNumber.value);
        if(firstName === "" || lastName === "" || checkIn === "" || checkOut === "" || guestNumber === "" || checkOut < checkIn){
            return;
        }
        const liElement = document.createElement("li");
        liElement.className = "reservation-content";
        li.innerHTML=`
          <article>
        <h3>Name: ${firstName} ${lastName}</h3>
        <p>From date: ${checkIn}</p>
        <p>To date: ${checkOut}</p>
        <p>For ${guestNumber} people</p>
          </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>
        `;
        lists.reservationContent.appendChild(li);

        inputs.firstName.value="";
        inputs.lastName.value="";
        inputs.checkIn.value="";
        inputs.checkOut.value="";
        inputs.guestNumber.value="";

        const editButton = li.querySelector(".edit");
        
        editButton.addEventListener("click", edit);
        
        function edit(){
            inputs.firstName.value=firstName;
            inputs.lastName.value=lastName;
            inputs.checkIn.value=checkIn;
            inputs.checkOut.value=checkOut;
            inputs.guestNumber.value=guestNumber;
            li.remove();

        }

    }

}