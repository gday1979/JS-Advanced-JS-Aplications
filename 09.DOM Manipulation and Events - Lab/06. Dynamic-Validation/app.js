function validate() {
   let email=document.getElementById('email');
   email.addEventListener('change',onchange);
    function onchange(event){
        let regex=/^[a-z]+@[a-z]+\.[a-z]+$/;
        if(regex.test(event.target.value)){
            event.target.className='';
        }else{
            event.target.className='error';
        }
    }
    
}