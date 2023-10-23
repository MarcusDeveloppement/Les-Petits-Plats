//filter tags according to list selection
export function filterTagsSelected() {
  // Sélect elements
  const tags = document.querySelectorAll(".custom-li");
  const removeBtn = document.querySelectorAll(".remove-tag-button");
  const elements = document.querySelectorAll(".global");

  // listener for remove the class
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", function () {
      for (let j = 0; j < tags.length; j++) {
        if (tags[j].classList.contains("selectedList")) {
          tags[j].classList.remove("selectedList");
        }
      }
      updateFilter();
    });
  }

  // browse the list and release the listener
  for (let i = 0; i < tags.length; i++) {
    tags[i].addEventListener("click", (event) => {
      const search = event.target.textContent.toLowerCase();
      toggleSelection(tags[i], search);
      updateFilter();
    });
  }

  function toggleSelection(tag) {
    const tagListClass = tag.classList.contains("selectedList");

    if (!tagListClass) {
      tag.classList.add("selectedList");
    }
  }

  function updateFilter() {
    for (let i = 0; i < elements.length; i++) {
      const elem = elements[i];
      const elemText = elem.textContent.toLowerCase();
      let isVisible = true;

      for (let j = 0; j < tags.length; j++) {
        if (tags[j].classList.contains("selectedList")) {
          const tagText = tags[j].textContent.toLowerCase();
          // regex search the entire word
          const wordRegEx = new RegExp("\\b" + tagText + "\\b", "i");

          if (!wordRegEx.test(elemText)) {
            isVisible = false;
            break; //get out the loop if the elements is not visible
          }
        }
      }

      elem.style.display = isVisible ? "block" : "none";
    }
  }
}
