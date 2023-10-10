let recipes = [];

async function getFilterJson() {
  try {
    const response = await fetch("data/recipes.json");
    const data = await response.json();
    recipes = data.recipes;
    filterIngredients();
    filterAppliances();
    filterUstensils();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération ou du traitement des données :",
      error
    );
  }
}

function filterIngredients() {
  const filterIngredients = document.querySelector(".filter-ingredients");
  const allIngredients = new Set();

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredientObj) => {
      allIngredients.add(ingredientObj.ingredient);
    });
  });

  const ulIngredients = document.createElement("ul");
  ulIngredients.className = "custom-ul";

  const titleIngredient = document.createElement("h4");
  titleIngredient.className = "title-ingredient";
  titleIngredient.textContent = "Ingrédients";
  ulIngredients.appendChild(titleIngredient);

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Recherche d'ingrédients";
  searchInput.className = "search-input";
  ulIngredients.appendChild(searchInput);

  function filterList() {
    const inputValue = searchInput.value.toLowerCase();
    const liElements = ulIngredients.querySelectorAll(".custom-li");

    liElements.forEach((li) => {
      const ingredient = li.textContent.toLowerCase();
      if (ingredient.includes(inputValue)) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterList);

  allIngredients.forEach((ingredient) => {
    const liIngredient = document.createElement("li");
    liIngredient.className = "custom-li";
    liIngredient.textContent = ingredient;
    ulIngredients.appendChild(liIngredient);
  });

  filterIngredients.appendChild(ulIngredients);
  function toggleIngredientList() {
    ulIngredients.classList.toggle("visible");
  }

  titleIngredient.addEventListener("click", toggleIngredientList);
}

function filterAppliances() {
  const filterAppliances = document.querySelector(".filter-appliances");
  const allAppliances = new Set();

  recipes.forEach((recipe) => {
    allAppliances.add(recipe.appliance);
  });

  const dropMenu = document.createElement("select");
  dropMenu.className = "drop-select";

  const optionTitle = document.createElement("option");
  optionTitle.value = "";
  optionTitle.text = "Appareils";
  dropMenu.appendChild(optionTitle);

  allAppliances.forEach((appliance) => {
    const optionDrop = document.createElement("option");
    optionDrop.value = appliance;
    optionDrop.text = appliance;
    dropMenu.appendChild(optionDrop);
  });
  filterAppliances.appendChild(dropMenu);
}

function filterUstensils() {
  const filterUstensils = document.querySelector(".filter-ustensils");
  const allUstensils = new Set();

  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      allUstensils.add(ustensil);
    });
  });

  const dropMenu = document.createElement("select");
  dropMenu.className = "drop-select";

  const searchInput = document.createElement("option");
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Recherche";
  searchInput.appendChild(input);
  dropMenu.appendChild(searchInput);

  const optionTitle = document.createElement("option");
  optionTitle.value = "";
  optionTitle.text = "Ustensiles";
  dropMenu.appendChild(optionTitle);

  allUstensils.forEach((ustensil) => {
    const optionDrop = document.createElement("option");
    optionDrop.value = ustensil;
    optionDrop.text = ustensil;
    dropMenu.appendChild(optionDrop);
  });

  filterUstensils.appendChild(dropMenu);
}

function tags() {
  const ingredientsDropdown = document.querySelector(".filter-ingredients");
  const appliancesDropdown = document.querySelector(".filter-appliances");
  const ustensilsDropdown = document.querySelector(".filter-ustensils");
  const tagsSelectedContainer = document.getElementById("tags-selected");

  ingredientsDropdown.addEventListener("change", createTag);
  appliancesDropdown.addEventListener("change", createTag);
  ustensilsDropdown.addEventListener("change", createTag);

  function createTag(event) {
    const selectedValue = event.target.value;
    if (selectedValue) {
      const tag = document.createElement("div");
      tag.className = "tag";
      tag.textContent = selectedValue;
      const removeButton = document.createElement("button");
      removeButton.className = "remove-tag-button";
      removeButton.textContent = "X";
      removeButton.addEventListener("click", () => {
        tagsSelectedContainer.removeChild(tag);
      });
      tag.appendChild(removeButton);
      tagsSelectedContainer.appendChild(tag);
      event.target.value = "";
    }
  }
}

getFilterJson();
tags();
