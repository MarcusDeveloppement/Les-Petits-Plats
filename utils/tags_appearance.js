import { filterTagsSelected } from "../src/scripts/index.js";

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
