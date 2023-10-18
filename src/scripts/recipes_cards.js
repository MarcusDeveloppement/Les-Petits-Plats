export async function getDataJson() {
  // recover data from Json file
  const response = await fetch("data/recipes.json");
  const data = await response.json();
  const recipes = data.recipes;
  // Create Dom elements and iterate throught recipes
  for (let i = 0; i < recipes.length; i++) {
    const cards = recipes[i];
    const globalDiv = document.createElement("div");
    globalDiv.className = "global";

    const imgElem = document.createElement("img");
    imgElem.src = `assets/photos/${cards.image}`;

    const timer = document.createElement("p");
    timer.innerText = `${cards.time}min`;
    timer.className += "timer_card";

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "global-text";

    const titleCard = document.createElement("h2");
    titleCard.innerText = cards.name;

    const titleRecipe = document.createElement("h4");
    titleRecipe.innerText = "RECETTE ";

    const recipe = document.createElement("p");
    recipe.innerHTML = `${cards.description} <br> <i>Ustensils: ${cards.ustensils} et Appareils : ${cards.appliance} </i>`;

    const titleIngredient = document.createElement("h4");
    titleIngredient.innerText = "INGRÉDIENTS ";

    const ingredientList = document.createElement("ul");
    ingredientList.className = "global-ing";

    for (const ingredient of cards.ingredients) {
      const ingredientItem = document.createElement("li");

      let ingredientText = ingredient.ingredient;
      // make the text for ingredient here, the unit and quantity
      if (ingredient.quantity) {
        ingredientText += `: <span>${ingredient.quantity} `;
        if (ingredient.unit) {
          ingredientText += ` ${ingredient.unit} `;
        }
        ingredientText += `</span>`;
      }
      ingredientItem.innerHTML = ingredientText;
      ingredientList.appendChild(ingredientItem);
    }
    //structure with parents elements
    detailsDiv.appendChild(titleCard);
    detailsDiv.appendChild(titleRecipe);
    detailsDiv.appendChild(recipe);
    detailsDiv.appendChild(titleIngredient);
    detailsDiv.appendChild(ingredientList);

    const globalCardsDiv = document.createElement("div");
    globalCardsDiv.className = "global_cards";
    globalCardsDiv.appendChild(detailsDiv);

    globalDiv.appendChild(imgElem);
    globalDiv.appendChild(timer);
    globalDiv.appendChild(globalCardsDiv);

    const article = document.getElementById("recipes-cards");
    article.appendChild(globalDiv);
  }
}

//call the function
getDataJson();
