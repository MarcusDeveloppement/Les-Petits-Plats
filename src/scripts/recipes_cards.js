export async function getDataJson() {
  const response = await fetch("data/recipes.json");
  const data = await response.json();
  const recipes = data.recipes;

  for (let i = 0; i < recipes.length; i++) {
    const cards = recipes[i];

    const globalDiv = document.createElement("div");
    globalDiv.className = "global";
    globalDiv.setAttribute("data-category", JSON.stringify(cards.ingredients));
    globalDiv.setAttribute("data-category", JSON.stringify(cards.appliances));
    globalDiv.setAttribute("data-category", JSON.stringify(cards.ustensils));

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
    titleRecipe.innerText = "RECETTE";

    const recipe = document.createElement("p");
    recipe.innerText = cards.description;

    const titleIngredient = document.createElement("h4");
    titleIngredient.innerText = "INGRÉDIENTS";

    const ingredientList = document.createElement("ul");
    ingredientList.className = "global-ing";

    for (const ingredient of cards.ingredients) {
      const ingredientItem = document.createElement("li");

      let ingredientText = ingredient.ingredient;

      if (ingredient.quantity) {
        ingredientText += `: <span>${ingredient.quantity}`;
        if (ingredient.unit) {
          ingredientText += ` ${ingredient.unit}`;
        }
        ingredientText += `</span>`;
      }

      ingredientItem.innerHTML = ingredientText;
      ingredientList.appendChild(ingredientItem);
    }

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

getDataJson();
