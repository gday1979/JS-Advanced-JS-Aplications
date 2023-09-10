function focused() {
   let inputs = document.querySelectorAll('input');
    for (let input of inputs) {
        input.addEventListener('focus', onFocus);
        input.addEventListener('blur', onBlur);
    }
    function onFocus(event) {
        event.target.parentNode.className = 'focused';
    }
    function onBlur(event) {
        event.target.parentNode.className = '';
    }

    
}