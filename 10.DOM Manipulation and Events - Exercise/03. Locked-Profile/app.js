function lockedProfile() {
    const buttons = document.querySelectorAll('button');
    for (let button of buttons) {
        button.addEventListener('click', onClick);

    }
    function onClick(event) {
        const profile = event.target.parentNode;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        if (isActive) {
            const hiddenInfo = profile.querySelector('div');
            if (hiddenInfo.style.display == 'block') {
                hiddenInfo.style.display = 'none';
                event.target.textContent = 'Show more';
            } else {
                hiddenInfo.style.display = 'block';
                event.target.textContent = 'Hide it';
            }
        }
    }
}