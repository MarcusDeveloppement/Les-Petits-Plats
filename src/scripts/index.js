export function filterTagsSelected() {
  const tags = document.querySelectorAll(".custom-li");

  tags.forEach((tag) => {
    tag.addEventListener("click", (event) => {
      const search = event.target.textContent.toLowerCase();
      const elements = document.querySelectorAll(".global");
      toggleSelection(tag, search, elements);
    });
  });

  function toggleSelection(tag, mot, elem) {
    const tagListClass = tag.classList.contains("selectedList");

    if (!tagListClass) {
      tag.classList.add("selectedList"); // Sélectionnez l'élément
    } else {
      tag.classList.remove("selectedList");
    }

    // Parcourez les éléments et appliquez la logique de filtrage
    for (let i = 0; i < elem.length; i++) {
      if (tag.classList.contains("selectedList")) {
        // Si l'élément est sélectionné, afficher seulement les correspondances
        if (elem[i].textContent.toLowerCase().includes(mot)) {
          elem[i].style.display = "block";
        } else {
          elem[i].style.display = "none";
        }
      } else {
        // Sinon, tout afficher
        elem[i].style.display = "block";
      }
    }
  }
}
