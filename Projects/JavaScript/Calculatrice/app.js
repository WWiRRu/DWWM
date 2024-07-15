const display = document.querySelector('.display-screen');
const buttons = document.querySelectorAll('.boutton');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;
        if (value === 'x') {
            let dv = display.value;
            display.value = dv + '*';
        } else if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error' + e;
            }
        } else {
            display.value += value;
        }
    });
});