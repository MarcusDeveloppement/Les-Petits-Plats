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

  // Créez une liste non ordonnée (ul) pour les ingrédients
  const ulIngredients = document.createElement("ul");
  ulIngredients.className = "custom-ul";
  ulIngredients.id = "mes-ingredients";

  // Ajoutez un champ de recherche
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Recherche";
  searchInput.className = "search-input";
  ulIngredients.appendChild(searchInput);

  // Fonction pour filtrer les ingrédients en fonction de la saisie utilisateur
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

  // Écoutez les changements dans le champ de recherche
  searchInput.addEventListener("input", filterList);

  // Ajoutez les ingrédients sous forme d'éléments de liste (li)
  allIngredients.forEach((ingredient) => {
    const liIngredient = document.createElement("li");
    liIngredient.className = "custom-li";
    liIngredient.textContent = ingredient;
    ulIngredients.appendChild(liIngredient);
  });

  // Ajoutez la liste d'ingrédients au conteneur de filtre
  filterIngredients.appendChild(ulIngredients);

  // Fonction pour afficher/cacher la liste d'ingrédients
  function toggleIngredientList() {
    ulIngredients.classList.toggle("visible");
  }

  // Créez un titre "Ingrédients" (h4) et ajoutez un écouteur de clic
  const titleIngredient = document.createElement("h4");
  titleIngredient.className = "title-ingredient";
  titleIngredient.innerHTML = `Ingrédients <span><i class="fa-solid fa-chevron-down"></i></span>`;
  titleIngredient.addEventListener("click", toggleIngredientList);

  // Ajoutez le titre comme premier enfant de filterIngredients
  filterIngredients.insertBefore(titleIngredient, ulIngredients);
}

function filterAppliances() {
  const filterAppliances = document.querySelector(".filter-appliances");
  const allAppliances = new Set();

  recipes.forEach((recipe) => {
    allAppliances.add(recipe.appliance);
  });

  const ulAppliances = document.createElement("ul");
  ulAppliances.className = "custom-ul";
  ulAppliances.id = "mes-appareils";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Recherche d'appareils";
  searchInput.className = "search-input";
  ulAppliances.appendChild(searchInput);

  function filterList() {
    const inputValue = searchInput.value.toLowerCase();
    const liElements = ulAppliances.querySelectorAll(".custom-li");

    liElements.forEach((li) => {
      const appliance = li.textContent.toLowerCase();
      if (appliance.includes(inputValue)) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  }
  searchInput.addEventListener("input", filterList);

  allAppliances.forEach((appliance) => {
    const liAppliance = document.createElement("li");
    liAppliance.className = "custom-li";
    liAppliance.textContent = appliance;
    ulAppliances.appendChild(liAppliance);
  });
  filterAppliances.appendChild(ulAppliances);

  function toggleApplianceList() {
    ulAppliances.classList.toggle("visible");
  }

  const titleAppliance = document.createElement("h4");
  titleAppliance.className = "title-appliance";
  titleAppliance.innerHTML = `Appareils <span><i class="fa-solid fa-chevron-down"></i></span>`;
  titleAppliance.addEventListener("click", toggleApplianceList);

  filterAppliances.insertBefore(titleAppliance, ulAppliances);
}

function filterUstensils() {
  const filterUstensils = document.querySelector(".filter-ustensils");
  const allUstensils = new Set();

  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      allUstensils.add(ustensil);
    });
  });

  const ulUstensils = document.createElement("ul");
  ulUstensils.className = "custom-ul";
  ulUstensils.id = "mes-ustensils";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Recherche";
  searchInput.className = "search-input";
  ulUstensils.appendChild(searchInput);

  function filterList() {
    const inputValue = searchInput.value.toLowerCase();
    const liElements = ulUstensils.querySelectorAll(".custom-li");

    liElements.forEach((li) => {
      const ustensil = li.textContent.toLowerCase();
      if (ustensil.includes(inputValue)) {
        li.style.display = "block";
      } else {
        li.style.display = "none";
      }
    });
  }
  searchInput.addEventListener("input", filterList);

  allUstensils.forEach((ustensil) => {
    const liUstensil = document.createElement("li");
    liUstensil.className = "custom-li";
    liUstensil.textContent = ustensil;
    ulUstensils.appendChild(liUstensil);
  });

  filterUstensils.appendChild(ulUstensils);

  function toggleUstensilList() {
    ulUstensils.classList.toggle("visible");
  }

  const titleUstensil = document.createElement("h4");
  titleUstensil.className = "title-ustensil";
  titleUstensil.innerHTML = `Ingrédients <span><i class="fa-solid fa-chevron-down"></i></span>`;
  titleUstensil.addEventListener("click", toggleUstensilList);

  filterUstensils.insertBefore(titleUstensil, ulUstensils);
}

function tags() {
  const ingredientsDropdown = document.querySelector(".filter-ingredients");
  const appliancesDropdown = document.querySelector(".filter-appliances");
  const ustensilsDropdown = document.querySelector(".filter-ustensils");
  const tagsSelectedContainer = document.getElementById("tags-selected");

  ingredientsDropdown.addEventListener("click", createTag);
  appliancesDropdown.addEventListener("click", createTag);
  ustensilsDropdown.addEventListener("click", createTag);

  function createTag(event) {
    if (event.target.classList.contains("custom-li")) {
      const selectedValue = event.target.textContent;
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
      }
    }
  }
}

getFilterJson();
tags();
