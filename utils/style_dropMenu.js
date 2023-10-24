export function styleAppliances() {
  const test = document.querySelector(".title-appliance");
  const div = document.querySelector(".filter-appliances");
  let isRounded = false;

  test.addEventListener("click", function () {
    if (isRounded) {
      div.style.borderRadius = "10px";
    } else {
      div.style.borderRadius = "10px 10px 0 0";
    }
    isRounded = !isRounded;
  });
}

export function styleIngredient() {
  const test = document.querySelector(".title-ingredient");
  const div = document.querySelector(".filter-ingredients");
  let isRounded = false;

  test.addEventListener("click", function () {
    if (isRounded) {
      div.style.borderRadius = "10px";
    } else {
      div.style.borderRadius = "10px 10px 0 0";
    }
    isRounded = !isRounded;
  });
}

export function styleUstensils() {
  const test = document.querySelector(".title-ustensil");
  const div = document.querySelector(".filter-ustensils");
  let isRounded = false;

  test.addEventListener("click", function () {
    if (isRounded) {
      div.style.borderRadius = "10px";
    } else {
      div.style.borderRadius = "10px 10px 0 0";
    }
    isRounded = !isRounded;
  });
}
