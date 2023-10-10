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

  const dropMenu = document.createElement("select");
  dropMenu.className = "drop-select";

  allIngredients.forEach((ingredient) => {
    const optionDrop = document.createElement("option");
    optionDrop.value = ingredient;
    optionDrop.text = ingredient;
    dropMenu.appendChild(optionDrop);
  });

  filterIngredients.appendChild(dropMenu);
  dropMenu.addEventListener("change", function () {
    filterRecipes();
  });
}

function filterAppliances() {
  const filterAppliances = document.querySelector(".filter-appliances");
  const allAppliances = new Set();

  recipes.forEach((recipe) => {
    allAppliances.add(recipe.appliance);
  });

  const dropMenu = document.createElement("select");
  dropMenu.className = "drop-select";

  // Ajoutez une option par appareil unique au menu déroulant
  allAppliances.forEach((appliance) => {
    const optionDrop = document.createElement("option");
    optionDrop.value = appliance;
    optionDrop.text = appliance;
    dropMenu.appendChild(optionDrop);
  });

  filterAppliances.appendChild(dropMenu);
  dropMenu.addEventListener("change", function () {
    filterRecipes();
  });
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

  allUstensils.forEach((ustensil) => {
    const optionDrop = document.createElement("option");
    optionDrop.value = ustensil;
    optionDrop.text = ustensil;
    dropMenu.appendChild(optionDrop);
  });
  filterUstensils.appendChild(dropMenu);
  dropMenu.addEventListener("change", function () {
    filterRecipes();
  });
}

function filterRecipes() {
  const selectedIngredient = document.querySelector(
    ".filter-ingredients .drop-select"
  ).value;
  const selectedAppliance = document.querySelector(
    ".filter-appliances .drop-select"
  ).value;
  const selectedUstensil = document.querySelector(
    ".filter-ustensils .drop-select"
  ).value;
  const recipeContainers = document.querySelectorAll(".recipe");

  recipeContainers.forEach((recipeContainer) => {
    const ingredientSelect = recipeContainer.querySelector(
      ".filter-ingredients .drop-select"
    );
    const applianceSelect = recipeContainer.querySelector(
      ".filter-appliances .drop-select"
    );
    const ustensilSelect = recipeContainer.querySelector(
      ".filter-ustensils .drop-select"
    );
    const recipeIngredient = ingredientSelect.value;
    const recipeAppliance = applianceSelect.value;
    const recipeUstensil = ustensilSelect.value;

    if (
      (selectedIngredient === "" || selectedIngredient === recipeIngredient) &&
      (selectedAppliance === "" || selectedAppliance === recipeAppliance) &&
      (selectedUstensil === "" || selectedUstensil === recipeUstensil)
    ) {
      recipeContainer.style.display = "block";
    } else {
      recipeContainer.style.display = "none";
    }
  });
}

getFilterJson();
