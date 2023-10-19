import { filterTagsSelected } from "../src/scripts/index.js";
//recipes stock
let recipes = [];

// recover data
async function getFilterJson() {
  try {
    const response = await fetch("data/recipes.json");
    const data = await response.json();
    recipes = data.recipes;
    //call the dunction after data charging
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
  //select html class
  const filterIngredients = document.querySelector(".filter-ingredients");
  //Create elements for store ingredients
  const allIngredients = new Set();
  // browse the recipe and take ingredients
  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredientObj) => {
      allIngredients.add(ingredientObj.ingredient);
    });
  });

  // make a ingredient drop menu
  const ulIngredients = document.createElement("ul");
  ulIngredients.className = "custom-ul";
  ulIngredients.id = "mes-ingredients";

  // make a search field
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Recherche";
  searchInput.className = "search-input";
  ulIngredients.appendChild(searchInput);

  //ingredients filter based on user input
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

  // add listener for the search field
  searchInput.addEventListener("input", filterList);

  // create list elements for ingredients
  allIngredients.forEach((ingredient) => {
    const liIngredient = document.createElement("li");
    liIngredient.className = "custom-li";
    liIngredient.textContent = ingredient;
    ulIngredients.appendChild(liIngredient);
  });
  filterIngredients.appendChild(ulIngredients);

  //display or hide the elements list
  function toggleIngredientList() {
    ulIngredients.classList.toggle("visible");
  }

  //create drop elements with title and arrow down
  const titleIngredient = document.createElement("h4");
  titleIngredient.className = "title-ingredient";
  titleIngredient.innerHTML = `Ingrédients <span><i class="fa-solid fa-chevron-down"></i></span>`;
  titleIngredient.addEventListener("click", toggleIngredientList);

  filterIngredients.insertBefore(titleIngredient, ulIngredients);

  //************************** style effect on click*************************
  const test = document.querySelector(".title-ingredient");
  const div = document.querySelector(".filter-ingredients");
  let isRounded = false;

  test.addEventListener("click", function () {
    if (isRounded) {
      div.style.borderRadius = "10px";
    } else {
      div.style.borderRadius = "10px 10px 0 0";
    }
    isRounded = !isRounded;
  });
  //call function manage tags select
  filterTagsSelected();
}

function filterAppliances() {
  // select html element
  const filterAppliances = document.querySelector(".filter-appliances");
  //Store appliance
  const allAppliances = new Set();

  //go through the the recipe and take information about appliances
  recipes.forEach((recipe) => {
    allAppliances.add(recipe.appliance);
  });

  //make a liste for the creation of dropdown menu
  const ulAppliances = document.createElement("ul");
  ulAppliances.className = "custom-ul";
  ulAppliances.id = "mes-appareils";

  //make a field for filter appliances
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Recherche d'appareils";
  searchInput.className = "search-input";
  //add input to the list
  ulAppliances.appendChild(searchInput);

  //function for filter appliances list depending on the search
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

  //add listener for input
  searchInput.addEventListener("input", filterList);

  //add appliances in the list
  allAppliances.forEach((appliance) => {
    const liAppliance = document.createElement("li");
    liAppliance.className = "custom-li";
    liAppliance.textContent = appliance;
    ulAppliances.appendChild(liAppliance);
  });
  //add in the <ul>
  filterAppliances.appendChild(ulAppliances);

  //add class "visible"
  function toggleApplianceList() {
    ulAppliances.classList.toggle("visible");
  }

  const titleAppliance = document.createElement("h4");
  titleAppliance.className = "title-appliance";
  titleAppliance.innerHTML = `Appareils <span><i class="fa-solid fa-chevron-down"></i></span>`;
  titleAppliance.addEventListener("click", toggleApplianceList);

  filterAppliances.insertBefore(titleAppliance, ulAppliances);

  // **************************style effect on click***************************
  const test = document.querySelector(".title-appliance");
  const div = document.querySelector(".filter-appliances");
  let isRounded = false;

  test.addEventListener("click", function () {
    if (isRounded) {
      div.style.borderRadius = "10px";
    } else {
      div.style.borderRadius = "10px 10px 0 0";
    }
    isRounded = !isRounded;
  });

  //call function
  filterTagsSelected();
}

//filter ustensils and display ustensils available
export function filterUstensils() {
  const filterUstensils = document.querySelector(".filter-ustensils");
  //store ustensils
  const allUstensils = new Set();

  //browse the recipe and collect ustensils
  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((ustensil) => {
      allUstensils.add(ustensil);
    });
  });

  //make a list for display ustensils
  const ulUstensils = document.createElement("ul");
  ulUstensils.className = "custom-ul";
  ulUstensils.id = "mes-ustensils";

  //field input for filter ustensils
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Recherche";
  searchInput.className = "search-input";
  ulUstensils.appendChild(searchInput);

  //function for filter ustensils list based on search
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

  //add ustensils to the <ul> list
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

  //listener to change the display
  const titleUstensil = document.createElement("h4");
  titleUstensil.className = "title-ustensil";
  titleUstensil.innerHTML = `Ustensiles <span><i class="fa-solid fa-chevron-down"></i></span>`;
  titleUstensil.addEventListener("click", toggleUstensilList);

  filterUstensils.insertBefore(titleUstensil, ulUstensils);

  // ********************style effect on click************************
  const test = document.querySelector(".title-ustensil");
  const div = document.querySelector(".filter-ustensils");
  let isRounded = false;

  test.addEventListener("click", function () {
    if (isRounded) {
      div.style.borderRadius = "10px";
    } else {
      div.style.borderRadius = "10px 10px 0 0";
    }
    isRounded = !isRounded;
  });

  //call functions
  tags();
  filterTagsSelected();
}

export function tags() {
  // dropdown menu elements select
  const ingredientsDropdown = document.querySelector(".filter-ingredients");
  const appliancesDropdown = document.querySelector(".filter-appliances");
  const ustensilsDropdown = document.querySelector(".filter-ustensils");
  // location where the tags display
  const tagsSelectedContainer = document.getElementById("tags-selected");

  //listener for drop down menu
  ingredientsDropdown.addEventListener("click", (event) =>
    createTag(event, tagsSelectedContainer)
  );
  appliancesDropdown.addEventListener("click", (event) =>
    createTag(event, tagsSelectedContainer)
  );
  ustensilsDropdown.addEventListener("click", (event) =>
    createTag(event, tagsSelectedContainer)
  );

  //call tags list select
  createTag(null, tagsSelectedContainer);
}

//create tags function depend on the element select
export function createTag(event, tagsSelectedContainer) {
  if (event && event.target.classList.contains("custom-li")) {
    const selectedValue = event.target.textContent;

    if (selectedValue) {
      //check if the tag is already on the tags list
      const isTagAlreadySelected = Array.from(
        tagsSelectedContainer.children
      ).some((tag) => {
        return tag.textContent.trim() === selectedValue.trim();
      });
      // if the tag is not selected createa new tag
      if (!isTagAlreadySelected) {
        const tag = document.createElement("div");
        tag.className = "tag";
        tag.innerHTML = `${selectedValue} `;

        //add a remove button
        const removeButton = document.createElement("button");
        removeButton.className = "remove-tag-button";
        removeButton.innerHTML = `<i class="fa-solid fa-x"></i>`;
        removeButton.addEventListener("click", () => {
          tagsSelectedContainer.removeChild(tag);
        });
        tag.appendChild(removeButton);
        tagsSelectedContainer.appendChild(tag);
      }
    }
  }
  // event for the remove button
  const removeButtons = document.querySelectorAll(".remove-tag-button");
  const list = document.querySelectorAll(".custom-li");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      list.forEach((tag) => {
        if (tag.classList.contains("selectedList")) {
          tag.classList.remove("selectedList");
        }
      });
    });
  });

  //update tags list call after import
  filterTagsSelected();
}

getFilterJson();
