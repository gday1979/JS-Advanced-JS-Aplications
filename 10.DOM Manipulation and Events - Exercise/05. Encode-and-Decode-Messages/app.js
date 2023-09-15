function encodeAndDecodeMessages() {
    const encodeBtn = document.querySelectorAll('button')[0];
    const decodeBtn = document.querySelectorAll('button')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        const message = document.querySelectorAll('textarea')[0].value;
        let encodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(message.charCodeAt(i) + 1);
        }

        document.querySelectorAll('textarea')[0].value = '';
        document.querySelectorAll('textarea')[1].value = encodedMessage;
    }

    function decode() {
        const message = document.querySelectorAll('textarea')[1].value;
        let decodedMessage = '';

        for (let i = 0; i < message.length; i++) {
            decodedMessage += String.fromCharCode(message.charCodeAt(i) - 1);
        }

        document.querySelectorAll('textarea')[1].value = decodedMessage;
    }
}