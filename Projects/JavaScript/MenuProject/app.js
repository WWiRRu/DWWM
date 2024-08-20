/*
 * Copyright (c) 2024. Made by WWiRRu
 */

const menu = [
    {
        id: 1,
        title: 'Pancakes au lait caillé',
        category: 'petit-déjeuner',
        price: 15.99,
        img: './images/item-1.jpeg',
        desc: `Pancakes moelleux préparés avec du lait caillé, servis avec du sirop d'érable, des fruits frais et un soupçon de sucre glace.`,
    },
    {
        id: 2,
        title: 'Double burger',
        category: 'déjeuner',
        price: 13.99,
        img: './images/item-2.jpeg',
        desc: `Deux steaks hachés de boeuf grillés, garnis de fromage cheddar fondant, laitue croquante, tomates fraîches et sauce spéciale, le tout dans un pain brioché.`,
    },
    {
        id: 3,
        title: 'Milkshake godzilla',
        category: 'milkshakes',
        price: 6.99,
        img: './images/item-3.jpeg',
        desc: `Milkshake épais au chocolat, mélangé avec des morceaux de biscuits, crème chantilly maison et un soupçon de sirop au chocolat.`,
    },
    {
        id: 4,
        title: 'Délice campagnard',
        category: 'petit-déjeuner',
        price: 20.99,
        img: './images/item-4.jpeg',
        desc: `Assiette généreuse de bacon croustillant, œufs brouillés, pommes de terre sautées, et toast au beurre.`,
    },
    {
        id: 5,
        title: 'Attaque des œufs',
        category: 'déjeuner',
        price: 22.99,
        img: './images/item-5.jpeg',
        desc: `Oeufs bénédictine servis sur un muffin anglais avec du jambon, nappés d'une sauce hollandaise crémeuse.`,
    },
    {
        id: 6,
        title: 'Rêve Oreo',
        category: 'milkshakes',
        price: 18.99,
        img: './images/item-6.jpeg',
        desc: `Milkshake riche en saveur Oreo avec morceaux de biscuits, crème glacée à la vanille et garniture de chantilly.`,
    },
    {
        id: 7,
        title: 'Débordement de bacon',
        category: 'petit-déjeuner',
        price: 8.99,
        img: './images/item-7.jpeg',
        desc: `Petite assiette de bacon croustillant accompagné d'œufs au plat et de pain grillé.`,
    },
    {
        id: 8,
        title: 'Classique américain',
        category: 'déjeuner',
        price: 12.99,
        img: './images/item-8.jpeg',
        desc: `Burger traditionnel avec un steak de boeuf, laitue, tomates, cornichons et ketchup, servi avec des frites.`,
    },
    {
        id: 9,
        title: 'Compagnon de quarantaine',
        category: 'milkshakes',
        price: 16.99,
        img: './images/item-9.jpeg',
        desc: `Milkshake crémeux à la vanille avec des morceaux de chocolat, garniture de crème chantilly et un coulis de caramel.`,
    }
];

const menuItemsContainer = document.querySelector(".menu-items");
const btnContainer = document.querySelector(".btn-container")

const uniqueCategories = new Set();
menu.forEach(item => uniqueCategories.add(item.category));
const categoriesArray = Array.from(uniqueCategories);
const allButton = document.createElement('button');
allButton.textContent = 'Tout';
allButton.classList.add('filter-btn');
allButton.dataset.category = 'all';
btnContainer.appendChild(allButton);
categoriesArray.forEach(function(category) {
    const button = document.createElement('button');
    button.textContent = category;
    button.classList.add('filter-btn');
    button.dataset.category = category;
    btnContainer.appendChild(button);
});
function displayMenuItems(category) {
    menuItemsContainer.innerHTML = '';
    const filteredMenu = category === 'all' ? menu : menu.filter(item => item.category === category);
    filteredMenu.forEach(function(item) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.img}" alt="Image of ${item.title}">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}€</h4>
                </header>
                <p class="item-text">${item.desc}</p>
            </div>
        `;
        menuItemsContainer.appendChild(menuItem);
    });
}
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.category;
        displayMenuItems(category);
    });
});
displayMenuItems('all');
