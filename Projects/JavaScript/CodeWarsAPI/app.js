const kataContainer = document.querySelector(".kata-container");

const form = document.getElementById('kata-inf');
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    kataContainer.innerHTML = '';
    const ign = document.getElementById("ign");
    await getKata(ign.value).then(data => {
        if (data) {
            const clan = data.clan ?? "Aucun";
            const languages = data.ranks.languages;
            const userCard = document.createElement("div");
            userCard.classList.add("card");
            userCard.innerHTML = `
                <h2>Utilisateur: ${data.username}</h2>
                <p>Honneur: ${data.honor}</p>
                <p>Clan: ${clan}</p>
            `;
            const languagesCard = document.createElement("div");
            languagesCard.classList.add("card");
            languagesCard.innerHTML = `<h3>Langages:</h3>`;

            for (const [key, value] of Object.entries(languages)) {
                const languageElement = document.createElement("p");
                languageElement.textContent = `${key}`;
                languageElement.style.color = value.color;
                languagesCard.appendChild(languageElement);
            }
            kataContainer.appendChild(userCard);
            kataContainer.appendChild(languagesCard);
        } else {
            const errorCard = document.createElement("div");
            errorCard.classList.add("card");
            errorCard.textContent = "Aucune donnée pour l'utilisateur.";
            kataContainer.appendChild(errorCard);
        }
    });
});
async function getRequest(link) {
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching data: ", error);
        return null;
    }
}
async function getKata(user){
    return await getRequest(`https://www.codewars.com/api/v1/users/${user}`);
}