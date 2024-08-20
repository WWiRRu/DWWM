const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');

let count = document.querySelector("#value");
const setColor = (count) => {
    if (count < 0) {
        return 'red';
    } else if (count > 0) {
        return 'green';
    } else {
        return '#222';
    }
};
document.addEventListener("click" , function(e) {
    let amount = parseInt(count.textContent);
    switch (e.target) {
        case increase:
            amount++;
            break;
        case decrease:
            amount--;
            break;
        case reset:
            amount = 0;
            break;
    }
    count.style.color = setColor(amount);
    count.textContent = amount;
});
document.addEventListener("keydown" , function(e) {
    let amount = parseInt(count.textContent);
    console.log(e.key)
    switch (e.key) {
        case "ArrowUp":
            amount++;
            break;
        case "ArrowDown":
            amount--;
            break;
        case "Enter":
            amount = 0;
            break;
    }
    count.style.color = setColor(amount);
    count.textContent = amount;
});