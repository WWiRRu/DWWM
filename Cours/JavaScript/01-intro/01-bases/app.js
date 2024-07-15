document.querySelectorAll(".btn").forEach((btn) => {
    console.log(btn);

    btn.addEventListener("click", () => {
        alert("C'est génial");
    });
});

// affiche la console
console.log("hello word");