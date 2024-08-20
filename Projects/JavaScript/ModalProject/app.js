let modal = document.querySelector(".modal");
let btn = document.querySelector(".modal-btn");
let close = document.querySelector(".close-btn");
btn.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
window.onkeydown = function (e){
    if(e.key === "Escape" && modal.style.display === "block"){
        modal.style.display = "none";
    }
}
