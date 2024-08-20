const form = document.querySelector("#form");
form.addEventListener("submit", function (ev){
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const {name, password} = Object.fromEntries(formData);
    //const name = formData.get("name");
    //const password = formData.get("password");
    console.log(name, password);
    ev.target.reset();
})