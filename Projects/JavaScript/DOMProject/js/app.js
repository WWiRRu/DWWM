const container = document.body;
const btn = document.querySelector('.btn');
const span = document.querySelector('span');
const colors = [
    'red',
    "#f15025",
    "green",
    "rgb(133,122,200)",
    "#123549",
    "rgba(255,0,0,0.5)",
    "hsl(0,100%,50%)",
    "hsl(120,100%,50%)",
    "hsl(240,100%,50%)",
    "hsl(300,100%,50%)",
    "hsl(180,100%,50%)",
    "hsl(60,100%,50%)",
    "hsl(30,100%,50%)",
    "hsl(90,100%,50%)",
    "hsl(210,100%,50%)",
]
let lastColor = "";

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * colors.length);
    let selectedColor = colors[random];

    while(selectedColor === lastColor) {
        random = Math.floor(Math.random() * colors.length);
        selectedColor = colors[random];
    }
    span.textContent = selectedColor;
    container.style.backgroundColor = selectedColor;
    lastColor = selectedColor;
})