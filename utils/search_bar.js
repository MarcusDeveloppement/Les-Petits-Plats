const search = document.querySelector(".search-input");
//listener to detect keyboard keyup events
search.addEventListener("keyup", (e) => {
  //Get the search value entered by the user in lowercase
  const searchLetter = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".global");

  // Call the function to filter elements based on the search letter
  filterElem(searchLetter, cards);
});

// Function to filter elements based on the search letter
function filterElem(letter, elements) {
  for (let i = 0; i < elements.length; i++) {
    // Check if the search letter is empty or if the element's text contains the search letter
    if (
      letter.length === 0 ||
      elements[i].textContent.toLowerCase().includes(letter)
    ) {
      // If the condition is true, display the element
      elements[i].style.display = "block";
    } else {
      // If the condition is false, hide the element
      elements[i].style.display = "none";
    }
  }
}
