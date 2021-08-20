function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    if (isNaN(event.target.innerText)) {
        if (event.target.innerText == 'C') {
            document.getElementById('typed-numbers').value = '';
        }
    }
    else {
        document.getElementById('typed-numbers').value += event.target.innerText;
    }
})

function verifyPin() {
    const displayPin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const fail = document.getElementById('notify-fail');
    const success = document.getElementById('notify-success');

    if (displayPin == typedNumbers) {
        success.style.display = 'block';
        fail.style.display = 'none';

    }

    else {
        success.style.display = 'none';
        fail.style.display = 'block';

    }

}

