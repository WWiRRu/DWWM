/*
 * Copyright (c) 2024. Made by WWiRRu
 */
const text = [
    'Monde de merde.',
    "Excuse-moi de te dire ça, mon pauvre José, mais tu confonds un peu tout. Tu fais un amalgame entre la coquetterie et la classe. Tu es fou. Tu dépenses tout ton argent dans les habits et accessoires de mode mais tu es ridicule. Enfin si ça te plaît. C'est toi qui les portes. Mais moi, si tu veux mon opinion, ça fait un peu… has been.",
    "Tu n'es vraiment pas très sympa. Mais le train de tes injures roule sur le rail de mon indifférence. Je préfère partir plutôt que d'entendre ça plutôt que d'être sourd.",
    'Tiens, regarde ! Les Anglais ont débarqué. On va être obligés de passer par derrière. Tu sais, par ce tunnel tout sombre qui sent pas très bon.',
    "On va manger... des chips ! T'entends ?!? Des chips ! C'est tout ce que ça te fait quand je te dis qu'on va manger des chips ? Mais qu'est-ce qui t'arrive? Pourquoi tu dis rien, tu fais la tronche ou quoi?",
    'Parce que si on réfléchit bien, moi je suis un vrai démocrate. George est un fasciste de merde. Un fasciste de merde !',
    "À l'époque, j'étais moi-même cowboy, je vivais avec Jacques, un bon copain. Il y avait rien de sexuel entre nous. Je dis ça parce que je me suis souvent fait traiter de pédale, de salope. Et c'est facile de traiter les gens de pédés, tout ça parce que deux garçons vivent ensemble dans un ranch et portent des pantalons en cuir.",
    "J'ai connu un mec de droite une fois, il avait dix fois plus de classe.",
    'Moi je veux être connu. Tu sais pourquoi ? Pour niquer les gonzesses. Quand tu es célèbre, tu niques plein de gonzesses.'
];

const pContainer = document.querySelector(".text-container");
const form = document.querySelector("#form");
let lastItem = "";

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const amount = parseInt(formData.get('amount'), 10);

    pContainer.innerHTML = '';

    if (!amount || amount < 1 || amount > 9) {
        let randomItem;
        do {
            randomItem = Math.floor(Math.random() * text.length);
        } while (text[randomItem] === lastItem);
        lastItem = text[randomItem];
        pContainer.innerHTML = `<p>${lastItem}</p>`;
    } else {
        for (let i = 0; i < amount; i++) {
            pContainer.insertAdjacentHTML('beforeend', `<p>${text[i]}</p>`);
        }
    }

    ev.target.reset();
});
