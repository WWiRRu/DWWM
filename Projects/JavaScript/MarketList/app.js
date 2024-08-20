// ****** DOM ******
const form = document.querySelector(".grocery-form");
const clearBtn = document.querySelector(".clear-btn");
const alert = document.querySelector(".alert");
const container = document.querySelector(".grocery-container");
const submitBtn = document.querySelector(".submit-btn");
const list = document.querySelector(".grocery-list");

// ****** SÉLECTIONNE LES ÉLÉMENTS **********

// Options d'édition
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
// Soumettre le formulaire
form.addEventListener("submit", handleSubmit);

// Vider la liste
clearBtn.addEventListener("click", clearItems);

// charger les éléments
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FONCTIONS **********
/**
 * @param id
 * @param value
 */
function addItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", removeItem);
  editBtn.addEventListener("click", editItem);
  list.appendChild(element);
}
/**
 * @param {Event} e
 */
function removeItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  console.log(element);
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("Élément supprimé", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
}
/**
 * @param {Event} e
 */
function handleSubmit(e) {
  e.preventDefault();
  const value = grocery.value.trim();
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    addItem(id, value);
    displayAlert("Élément ajouté à la liste", "success");
    container.classList.add("show-container");
    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("Élément modifié", "success");
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("Veuillez entrer une valeur", "danger");
  }
}

/**
 * @param {string} text
 * @param {string} action
 */
function displayAlert(text, action) {
  switch (action) {
    case "success":
      alert.style.display = "block";
      alert.textContent = text;
      alert.style.background = "#93C572";
      alert.style.color = "green";
      setTimeout(function () {
        alert.style.display = "none";
        alert.style.color = "white";
        alert.textContent = "";
      }, 10000);
      break;
    case "danger":
      alert.style.display = "block";
      alert.style.background = "#ff0000";
      alert.textContent = text;
      alert.style.color = "#f89191";
      setTimeout(function () {
        alert.style.display = "none";
        alert.style.color = "white";
        alert.textContent = "";
      }, 10000);
      break;
  }
}
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "Ajouter";
}
function clearItems() {
  if (!localStorage.getItem("grocery-list")) {
    displayAlert("Votre liste est vide.", "danger");
    return;
  }
  localStorage.removeItem("grocery-list");
  list.innerHTML = "";
  container.classList.remove("show-container");
  displayAlert("Votre liste a été supprimée.", "success");
}

/**
 * @param {Event} e
 */
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "Éditer";
}

// ****** LOCAL STORAGE **********

/**
 * @param {string} id
 * @param {string} value
 */
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("grocery-list", JSON.stringify(items));
}
/**
 * @param {string} id
 */
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("grocery-list", JSON.stringify(items));
}

/**
 * @param {string} id
 * @param {string} value
 */
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("grocery-list", JSON.stringify(items));
}

/**
 * @returns {Array<Object>}
 */
function getLocalStorage() {
  return localStorage.getItem("grocery-list")
    ? JSON.parse(localStorage.getItem("grocery-list"))
    : [];
}

// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      addItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}
