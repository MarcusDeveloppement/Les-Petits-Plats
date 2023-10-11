const search = document.querySelector(".search-input");

search.addEventListener("keyup", (e) => {
  const searchLetter = e.target.value.toLowerCase(); //
  const cards = document.querySelectorAll(".global");
  filterElem(searchLetter, cards);
});

function filterElem(letter, elements) {
  for (let i = 0; i < elements.length; i++) {
    if (
      letter.length === 0 ||
      elements[i].textContent.toLowerCase().includes(letter)
    ) {
      elements[i].style.display = "block";
    } else {
      elements[i].style.display = "none";
    }
  }
}
