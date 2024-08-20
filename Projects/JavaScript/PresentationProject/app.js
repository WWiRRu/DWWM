const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Développeuse Web',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text: "La formation était incroyable ! J'ai appris tellement de choses sur React et Node.js. Les instructeurs étaient très compétents et toujours prêts à aider. Je recommande vivement cette formation à tous ceux qui veulent se lancer dans le développement web.",
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'Web designer',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text: "Cette formation m'a vraiment aidé à améliorer mes compétences en design et en développement web mobile. Les projets pratiques étaient particulièrement utiles pour comprendre comment appliquer les concepts théoriques. Un must pour tous les designers souhaitant se perfectionner.",
    },
    {
        id: 3,
        name: 'Peter Jones',
        job: 'Stagiaire',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text: "En tant que stagiaire, cette formation m'a permis de gagner en confiance et en compétences techniques. J'ai particulièrement apprécié les sessions sur MongoDB et Express.js. Les mentors étaient très encourageants et ont vraiment aidé à rendre le processus d'apprentissage fluide.",
    },
    {
        id: 4,
        name: 'Bill Anderson',
        job: 'Développeur Full-Stack',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text: "Je suis vraiment impressionné par la qualité de cette formation. Les cours étaient bien structurés et couvraient tous les aspects essentiels du développement web et mobile. Grâce à cette formation, j'ai pu décrocher un emploi en tant que développeur full-stack.",
    },
];

const refreshBtn = document.querySelector('.random-btn');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
let currentItem = "";
let lastItem = "";
let randomItem = 0;
function showPerson() {
    randomItem = Math.floor(Math.random() * reviews.length);
    currentItem = reviews[randomItem];
    while (currentItem === lastItem) {
        randomItem = Math.floor(Math.random() * reviews.length);
        item = reviews[randomItem];
        currentItem = reviews[randomItem];
    }
    lastItem = currentItem;
    setItem(currentItem.img, currentItem.name, currentItem.job, currentItem.text);

}
function setItem(image, auth, jb, inf){
    img.src = image;
    author.textContent = auth;
    job.textContent = jb;
    info.textContent = inf;
}
document.addEventListener('DOMContentLoaded', function () {
    showPerson();
});
refreshBtn.addEventListener('click', function () {
    showPerson();
});
nextBtn.addEventListener('click', function () {
    randomItem++;
    if (randomItem > reviews.length - 1) {
        randomItem = 0;
    }
    currentItem = reviews[randomItem];
    setItem(currentItem.img, currentItem.name, currentItem.job, currentItem.text);
});
prevBtn.addEventListener('click', function () {
    randomItem--;
    if (randomItem < 0) {
        randomItem = reviews.length - 1;
    }
    currentItem = reviews[randomItem];
    setItem(currentItem.img, currentItem.name, currentItem.job, currentItem.text);
})