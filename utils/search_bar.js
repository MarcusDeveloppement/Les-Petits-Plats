const search = document.querySelector(".search-input");

search.addEventListener("keyup", (e) => {
  const searchLetter = e.target.value.toLowerCase(); //
  const cards = document.querySelectorAll(".global");
  filterElem(searchLetter, cards);
});

function filterElem(letter, elements) {
  if (letter.length > 2) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].textContent.toLowerCase().includes(letter)) {
        elements[i].style.display = "block";
      } else {
        elements[i].style.display = "none";
      }
    }
  }
}
