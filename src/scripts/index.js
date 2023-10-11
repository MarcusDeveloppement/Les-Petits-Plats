const styles = document.querySelectorAll(
  ".filter-appliances, .filter-ingredients, .filter-ustensils"
);

styles.forEach((style) => {
  let isRounded = false;

  style.addEventListener("click", function () {
    if (isRounded) {
      style.style.borderRadius = "10px";
    } else {
      style.style.borderRadius = "10px 10px 0 0";
    }
    isRounded = !isRounded;
  });
});
function filterRecipesByTag(tagType, selectedTag) {
  const recipeCards = document.querySelectorAll(".global");

  recipeCards.forEach((card) => {
    const tags = card.querySelector(`.${tagType}`).textContent;

    if (tags.includes(selectedTag) || selectedTag === "Tous") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
