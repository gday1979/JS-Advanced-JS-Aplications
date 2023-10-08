window.addEventListener('load', solve);

function solve() {
      const nameElement=document.querySelector("#name");
      const emailElement=document.querySelector("#email");
      const contactNumberElement=document.querySelector("#contact-number");
      const classTypeElement=document.querySelector("#class-type");
      const classTimeElement=document.querySelector("#class-time");

      const nextButton=document.getquerySelector("#next-btn");
      nextButton.addEventListener("click",next);

      function next(e){
        e.preventDefault();
        const name=nameElement.value;
        const email=emailElement.value;
        const contactNumber=contactNumberElement.value;
        const  classType=classType.value;
        const classTime=classTime.value;
        if(name===""||email===""||contactNumber===""||classType===""||classTime===""){
          return;
        }   
      }


    
    

}




