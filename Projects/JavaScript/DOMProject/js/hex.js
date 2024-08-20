const container = document.body;
const btn = document.querySelector('.btn');
const span = document.querySelector('span');
let lastColor = "";
const generateRandomHex = () =>  "#" + Math.floor(Math.random() * 16777215 ).toString(16).padEnd(6, '0');
btn.addEventListener('click', function () {
    let color = generateRandomHex();
    while(color === lastColor) {
        color = generateRandomHex();
    }
    span.textContent = color;
    container.style.backgroundColor = color;
    lastColor = color;
});