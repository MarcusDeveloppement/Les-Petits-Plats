export function filterTagsSelected() {
  //elements select
  const tags = document.querySelectorAll(".custom-li");
  const removeBtn = document.querySelectorAll(".remove-tag-button");
  const elements = document.querySelectorAll(".global");
  //listener for the remove buttons that's delete the classs selectedList
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      tags.forEach((tag) => {
        if (tag.classList.contains("selectedList")) {
          tag.classList.remove("selectedList");
        }
      });
      updateFilter();
    });
  });

  //Browse the list and make an event
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

  //up date the display based on tags
  function updateFilter() {
    elements.forEach((elem) => {
      const elemText = elem.textContent.toLowerCase();
      let isVisible = true;

      tags.forEach((tag) => {
        if (tag.classList.contains("selectedList")) {
          const tagText = tag.textContent.toLowerCase();
          // regular expression for search the entire word
          const wordRegExp = new RegExp("\\b" + tagText + "\\b", "i");

          if (!wordRegExp.test(elemText)) {
            isVisible = false;
          }
        }
      });

      elem.style.display = isVisible ? "block" : "none";
    });
  }
}
