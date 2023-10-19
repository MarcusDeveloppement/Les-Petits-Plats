export function filterTagsSelected() {
  // select elements
  const tags = Array.from(document.querySelectorAll(".custom-li"));
  const removeBtn = Array.from(document.querySelectorAll(".remove-tag-button"));
  const elements = Array.from(document.querySelectorAll(".global"));

  //listener for the remove buttons that's delete the classs selectedList
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      tags.forEach((tag) => {
        if (tag.classList.contains("selectedList")) {
          tag.classList.remove("selectedList");
        }
      });
      updateFilter();
    });
  });

  //tags listener
  tags.forEach((tag) => {
    tag.addEventListener("click", (event) => {
      const search = event.target.textContent.toLowerCase();
      toggleSelection(tag, search);
      updateFilter();
    });
  });

  function toggleSelection(tag) {
    const tagListClass = tag.classList.contains("selectedList");
    if (!tagListClass) {
      tag.classList.add("selectedList");
    }
  }

  // updating the displays according to tags
  function updateFilter() {
    elements.forEach((elem) => {
      const elemText = elem.textContent.toLowerCase();
      const isVisible = tags
        .filter((tag) => tag.classList.contains("selectedList"))
        .map((tag) => tag.textContent.toLowerCase())
        .reduce((isVisible, tagText) => {
          const wordRegExp = new RegExp("\\b" + tagText + "\\b", "i");
          return isVisible && wordRegExp.test(elemText);
        }, true);

      elem.style.display = isVisible ? "block" : "none";
    });
  }
}
